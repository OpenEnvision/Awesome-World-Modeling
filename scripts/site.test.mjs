import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import {adaptCatalog, cleanHeading} from '../site/assets/catalog-adapter.js';
import {esc, normalize, resourceKind, selectEntries, readState, stateSearch, resourceHTML, rowHTML, safeURL, PAGE_SIZE} from '../site/assets/library.js';

const root = fileURLToPath(new URL('../', import.meta.url));
const data = JSON.parse(await readFile(path.join(root, 'site/data/library.json'), 'utf8'));
const catalog = adaptCatalog(data);
const state = patch => ({...readState('', catalog), ...patch});
const find = patch => selectEntries(catalog, state(patch));

test('the UI adapter preserves every curated entry, source, and linked report', () => {
  assert.equal(catalog.entries.length, data.stats.curatedEntries);
  assert.deepEqual(catalog.entries.map(e => e.id), data.entries.map(e => e.id));
  assert.equal(catalog.collections.reduce((n,c) => n+c.count, 0), catalog.entries.length);
  for (const [i,e] of catalog.entries.entries()) {
    assert.equal(e.title, data.entries[i].fullTitle || data.entries[i].name);
    assert.equal(e.sourceUrl, data.entries[i].source.url);
    assert.deepEqual(e.resources.map(r => r.url), data.entries[i].allLinks.map(r => r.url));
    assert.ok(e.ancestors.includes(e.sectionId));
    assert.ok(e.fields.some(f => f.label === 'arXiv' && f.value === e.arxivIds.join(', ')));
  }
  const alaya = catalog.entries.find(e => e.name === 'AlayaWorld');
  assert.equal(alaya.resources.filter(r => r.type === 'paper').length, 3);
  const noExternalSource = catalog.entries.filter(e => !e.resources.length);
  assert.ok(noExternalSource.length > 0);
  assert.ok(noExternalSource.every(e => safeURL(e.sourceUrl)), 'Foundational books without external links retain a valid source fallback');
});

test('collection, descendant taxonomy, year, resource, and saved filters compose', () => {
  for (const collection of catalog.collections) assert.equal(find({collection:collection.id}).length, collection.count);
  for (const id of ['section-1-3', 'section-1-3-4', 'section-2', 'benchmarks-benchmarks-evaluation']) {
    const expected = data.sections.find(s => s.id === id);
    assert.equal(find({section:id}).length, expected.count, `${id} should include descendant sections`);
  }
  assert.deepEqual(find({year:'2025'}).map(e=>e.id), catalog.entries.filter(e=>e.year===2025).map(e=>e.id));
  const combined = find({collection:'generative',section:'section-1-3',year:'2026',resource:'code'});
  assert.ok(combined.length);
  assert.ok(combined.every(e=>e.collection==='generative'&&e.year===2026&&e.ancestors.includes('section-1-3')&&e.resources.some(r=>resourceKind(r)==='code')));
  const saved = new Set([catalog.entries[0].id,catalog.entries[20].id]);
  assert.deepEqual(selectEntries(catalog,state({saved:true}),saved).map(e=>e.id), [...saved]);
  assert.deepEqual(selectEntries(catalog,state({saved:true}),new Set()), []);
});

test('search finds aliases, full paper titles, arXiv IDs, accents, and literal special names', () => {
  for (const [q,id] of [
    ['MineWorld','2504.08388'],
    ['Better Decisions through the Right Causal World Model','2504.07257'],
    ['https://arxiv.org/abs/2609.15801','2609.15801'],
    ['https://arxiv.org/pdf/2609.15801v2.pdf','2609.15801'],
    ['GigaBrain 0.5M','2602.12099'],
    ['ω-EVA','2606.09457'],
    ['2607.18367','2607.06291'],
  ]) {
    // Search treats an arXiv URL as its ID, just like pasting an identifier.
    assert.ok(find({q}).some(e=>e.arxivIds.includes(id)), `Could not find ${q}`);
  }
  assert.equal(normalize('Schmidhüber—M⁴World'), 'schmidhuber m4world');
  assert.equal(normalize(null), '');
  assert.equal(find({q:'nonexistent phrase qxza999999999'}).length, 0);
  assert.equal(find({q:'  '}).length, catalog.entries.length);
});

test('paper, code, project, and Hugging Face filters use the actual destinations', () => {
  assert.equal(resourceKind({type:'project',label:'Project',url:'https://huggingface.co/microsoft/wham'}), 'hf');
  assert.equal(resourceKind({type:'model',label:'Weights',url:'https://huggingface.co/org/model'}), 'hf');
  assert.equal(resourceKind({type:'project',label:'Project',url:'https://fake-huggingface.co/example'}), 'project');
  assert.equal(resourceKind({type:'report',label:'Report',url:'https://example.com/report.pdf'}), 'paper');
  for (const kind of ['paper','code','project','hf']) {
    const selected = find({resource:kind});
    assert.ok(selected.length, `Expected some ${kind} links`);
    assert.ok(selected.every(e=>e.resources.some(r=>resourceKind(r)===kind)));
  }
  assert.ok(find({resource:'hf'}).some(e=>e.name==='WHAM / Muse'));
});

test('chronological sorting keeps unknown years last and never mutates README order', () => {
  const original = catalog.entries.map(e=>e.id);
  for (const sort of ['newest','oldest']) {
    const sorted = find({sort});
    const dated = sorted.filter(e=>e.year&&e.date);
    const unknown = sorted.filter(e=>!e.year||!e.date);
    assert.ok(unknown.length, 'Exercise the six undated benchmark entries');
    assert.deepEqual(sorted.slice(-unknown.length).map(e=>e.id), unknown.map(e=>e.id));
    for (let i=1;i<dated.length;i++) assert.ok(sort==='newest' ? dated[i-1].date>=dated[i].date : dated[i-1].date<=dated[i].date);
  }
  const alpha = find({sort:'az'});
  for (let i=1;i<alpha.length;i++) assert.ok(alpha[i-1].title.localeCompare(alpha[i].title,'en',{numeric:true})<=0);
  assert.deepEqual(catalog.entries.map(e=>e.id),original);
  assert.deepEqual(find({sort:'readme'}).map(e=>e.id),original);
});

test('shared links validate filters, infer section collections, and round-trip safely', () => {
  const inferred = readState('?section=section-1-3-4&year=2026&resource=code&sort=newest&page=3',catalog);
  assert.equal(inferred.collection,'generative');
  assert.equal(inferred.section,'section-1-3-4');
  assert.equal(inferred.page,3);
  const rootSection = readState('?section=benchmarks-benchmarks-evaluation',catalog);
  assert.equal(rootSection.collection,'benchmarks');
  assert.equal(rootSection.section,'benchmarks-benchmarks-evaluation');
  const invalid = readState('?collection=resources&section=resource-open-toolkits-platforms&year=2099&resource=javascript&sort=bad&page=-4',catalog);
  assert.deepEqual(invalid,state());
  const mismatch = readState('?collection=mind&section=section-1-3',catalog);
  assert.equal(mismatch.collection,'mind');
  assert.equal(mismatch.section,'');
  assert.equal(readState(`?q=${'a'.repeat(350)}&page=999999`,catalog).q.length,300);
  assert.equal(readState('?page=999999',catalog).page,10000);
  const shared = {...inferred,q:'M⁴World & <world> + ω',saved:true};
  const search = stateSearch(shared,'section-1-3-4-2602.12099');
  assert.deepEqual(readState(search,catalog),shared);
  assert.equal(new URLSearchParams(search).get('entry'),'section-1-3-4-2602.12099');
  assert.ok(!search.includes('<world>'));
  assert.equal(stateSearch(state()),'');
});

test('plain headings preserve 3D names and rendered text and attributes are escaped', () => {
  assert.equal(cleanHeading('1.4 🌐 3D / 4D Scene Generation'),'3D / 4D Scene Generation');
  assert.equal(cleanHeading('3D / 4D Scene Generation'),'3D / 4D Scene Generation');
  assert.equal(esc('<a title="x">&\''),'&lt;a title=&quot;x&quot;&gt;&amp;&#39;');
  const rendered = rowHTML({...catalog.entries[0],id:'bad" data-x="test',name:'<script>alert(1)</script>',title:'"quoted" & safe',notes:'<img src=x onerror=alert(1)>',resources:[]});
  assert.ok(!rendered.includes('<script>'));
  assert.ok(!rendered.includes('<img'));
  assert.ok(rendered.includes('data-id="bad&quot; data-x=&quot;test"'));
  assert.equal(resourceHTML({label:'unsafe',url:'javascript:alert(1)'}),'');
  assert.equal(resourceHTML({label:'unsafe',url:'data:text/html,<script>alert(1)</script>'}),'');
  const resource = resourceHTML({label:'<Code>',url:'https://example.com/repo?a=1&b=2',type:'code'});
  assert.ok(resource.includes('&lt;Code&gt;'));
  assert.ok(resource.includes('href="https://example.com/repo?a=1&amp;b=2"'));
  assert.ok(resource.includes('rel="noopener noreferrer"'));
  for (const entry of [...data.entries,...data.resources]) {
    assert.ok(safeURL(entry.source.url));
    for (const link of entry.allLinks) assert.ok(safeURL(link.url),`${entry.name}: ${link.url}`);
  }
});

test('built pages retain initial rows, all resources, and all resource-only arXiv papers', async () => {
  execFileSync(process.execPath,['scripts/build-site.mjs'],{cwd:root,stdio:'pipe'});
  const html = await readFile(path.join(root,'dist/index.html'),'utf8');
  const resourcePage = await readFile(path.join(root,'dist/resources.html'),'utf8');
  assert.equal((html.match(/<article class="entry"/g)??[]).length,PAGE_SIZE);
  assert.ok(!/\{\{[A-Z]+\}\}/.test(html));
  for (const entry of catalog.entries.slice(0,PAGE_SIZE)) assert.ok(html.includes(esc(entry.name)));
  assert.equal((resourcePage.match(/<article class="resource-directory-entry"/g)??[]).length,data.resources.length);
  for (const entry of data.resources) {
    assert.ok(resourcePage.includes(esc(entry.name)),entry.name);
    for (const link of entry.allLinks) assert.ok(resourcePage.includes(esc(link.url)),`${entry.name}: ${link.url}`);
  }
  const coreIds = new Set(data.entries.flatMap(e=>e.arxivIds));
  const resourceOnly = [...new Set(data.resources.flatMap(e=>e.arxivIds))].filter(id=>!coreIds.has(id));
  assert.ok(resourceOnly.length>0,'Exercise the resource-only papers (sixteen in the September 15 curation)');
  for (const id of resourceOnly) assert.ok(resourcePage.includes(`arxiv.org/abs/${id}`),id);
  assert.equal(new Set([...coreIds,...resourceOnly]).size,data.stats.uniqueArxivPapers);
});
