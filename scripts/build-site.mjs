import {readFile, writeFile, mkdir, cp} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import {adaptCatalog, cleanHeading} from '../site/assets/catalog-adapter.js';
import {esc, rowHTML, resourceHTML, PAGE_SIZE} from '../site/assets/library.js';
import {buildGuide} from './guide-content.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const read = file => readFile(path.join(root, file), 'utf8');
const data = JSON.parse(await read('site/data/library.json'));
const catalog = adaptCatalog(data);
const guide = buildGuide(await read('README.md'), data);
let html = await read('site/index.html');
const tokens = {
  COUNT: data.stats.curatedEntries.toLocaleString('en-US'),
  ARXIV: data.stats.uniqueArxivPapers.toLocaleString('en-US'),
  YEARS: catalog.years.map(y=>`<option value="${y}">${y}</option>`).join(''),
  SIDEBAR: '<h3 class="sidebar-heading">Collections</h3>' + [{id:'',label:'All entries',count:catalog.entries.length},...catalog.collections].map(c=>`<a class="category-button ${c.id?'':'active'}" href="?${c.id?`collection=${c.id}`:''}#library"><span>${esc(c.label)}</span><span>${c.count}</span></a>`).join(''),
  ENTRIES: catalog.entries.slice(0,PAGE_SIZE).map(e=>rowHTML(e)).join(''),
};
html = html.replace(/\{\{([A-Z]+)\}\}/g, (_, token)=>{
  if (!(token in tokens)) throw new Error(`Unknown template token ${token}`);
  return tokens[token];
});
// Include content in the cache key so a newly published catalog cannot keep an old UI.
const assets = ['styles.css','app.js','library.js','catalog-adapter.js','resources.js','guide.js'];
const revision = createHash('sha256').update(html + await read('site/data/library.json') + (await Promise.all(assets.map(a=>read(`site/assets/${a}`)))).join('')).digest('hex').slice(0,12);
html = html.replace(/(\.\/assets\/(?:styles\.css|app\.js))"/g, `$1?v=${revision}"`);
await mkdir(path.join(root,'dist'),{recursive:true});
await cp(path.join(root,'site/assets'),path.join(root,'dist/assets'),{recursive:true});
await cp(path.join(root,'site/data'),path.join(root,'dist/data'),{recursive:true});
await cp(path.join(root,'image'),path.join(root,'dist/image'),{recursive:true});
await writeFile(path.join(root,'dist/index.html'),html);
await writeFile(path.join(root,'dist/.nojekyll'),'');
// Relative imports are versioned too, preventing stale helpers after a deploy.
for (const asset of ['app.js','catalog-adapter.js','resources.js','guide.js']) {
  const content = (await read(`site/assets/${asset}`)).replace(/from '(\.\/[^']+\.js)'/g, `from '$1?v=${revision}'`).replace("'../data/library.json'",`'../data/library.json?v=${revision}'`);
  await writeFile(path.join(root,'dist/assets',asset), content);
}

const header = html.match(/<header[\s\S]*?<\/header>/)[0].replaceAll('href="#', 'href="./#');
const footer = html.match(/<footer[\s\S]*?<\/footer>/)[0].replaceAll('href="#', 'href="./#');
const resourceSections = data.sections.filter(section=>section.collection === 'resources');
const resourceChildren = Map.groupBy(resourceSections, section=>section.parentId);
const resourceEntries = Map.groupBy(data.resources, entry=>entry.sectionId);
const renderedResources = new Set();
const renderResourceSection = (section, depth = 2) => {
  const children = resourceChildren.get(section.id) || [];
  const heading = Math.min(depth, 5);
  const entries = (resourceEntries.get(section.id) || []).map(entry=>{
    if (renderedResources.has(entry.id)) throw new Error(`Resource rendered more than once: ${entry.id}`);
    renderedResources.add(entry.id);
    // Preserve disambiguating owners and publication details from the source
    // citation without repeating a name and summary that are already visible.
    const citation = entry.citation && ![entry.name, entry.description, `${entry.name} — ${entry.description}`].includes(entry.citation) ? entry.citation : '';
    const fields = (entry.sourceFields || []).filter(field=>field.value && field.value !== entry.description);
    return `<article class="resource-directory-entry" id="${esc(entry.id)}"><div><h${heading+1}>${esc(entry.name)}</h${heading+1}>${entry.description?`<p>${esc(entry.description)}</p>`:''}${citation?`<p class="resource-citation">${esc(citation)}</p>`:''}${fields.length?`<dl class="resource-fields">${fields.map(field=>`<dt>${esc(field.label)}</dt><dd>${esc(field.value)}</dd>`).join('')}</dl>`:''}</div><div class="entry-resources">${entry.allLinks.map(resourceHTML).join('')}<a class="resource" href="${esc(entry.source.url)}" target="_blank" rel="noopener noreferrer">Source ↗</a></div></article>`;
  }).join('');
  return `<section class="resource-group${children.length?' resource-group-parent':''}${depth>2?' resource-group-child':''}" id="${esc(section.id)}"><h${heading}>${esc(cleanHeading(section.label))}</h${heading}>${section.description?`<p class="resource-scope">${esc(section.description)}</p>`:''}${entries}${children.map(child=>renderResourceSection(child, depth+1)).join('')}</section>`;
};
const resourceContent = (resourceChildren.get(null) || []).map(section=>renderResourceSection(section)).join('');
if (renderedResources.size !== data.resources.length) throw new Error(`Resource coverage: ${renderedResources.size} rendered; ${data.resources.length} exported`);
await writeFile(path.join(root,'dist/resources.html'), `<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Resources — OpenEnvision World Modeling Library</title><meta name="description" content="World model tools, datasets, workshops, research labs, and technical reports."><link rel="icon" href="./assets/openenvision-mark.png"><link rel="stylesheet" href="./assets/styles.css?v=${revision}"><link rel="canonical" href="https://openenvision.github.io/Awesome-World-Modeling/resources.html"><script type="module" src="./assets/resources.js?v=${revision}"></script></head><body><a class="skip-link" href="#resources">Skip to resources</a>${header}<main class="wrap resource-directory" id="resources"><a class="text-link" href="./#library">← Back to the research library</a><h1>Resources for world modeling.</h1><p class="directory-intro">${data.resources.length} open resources, workshops, research organizations, and technical reports from the curated list.</p><form id="resource-search-form" class="search-tools" role="search"><div class="search-box"><label for="resource-search" class="sr-only">Search resources</label><input id="resource-search" type="search" maxlength="300" placeholder="Search tools, datasets, workshops, reports…" autocomplete="off"></div></form><p id="resource-count" class="mono" role="status" aria-live="polite">${data.resources.length} resources</p><div id="resource-empty" class="empty-state" hidden><h2>No resources found.</h2><p>Try a model name, organization, or arXiv ID.</p><button id="clear-resource-search" class="button">Clear search</button></div>${resourceContent}</main>${footer}</body></html>`);
await writeFile(path.join(root,'dist/404.html'), `<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Page not found — OpenEnvision</title><style>body{font:18px/1.6 Arial,sans-serif;margin:12vh auto;padding:24px;max-width:650px;color:#171717}a{color:#ce352c}</style></head><body><h1>This page is not in the library.</h1><p><a href="/Awesome-World-Modeling/">Return to World Modeling →</a></p></body></html>`);
const guideNav = [...Map.groupBy(guide.chapters,c=>c.group)].map(([group,chapters])=>`<div class="guide-nav-group"><h3>${esc(group)}</h3>${chapters.map(c=>`<a href="#${esc(c.id)}">${esc(c.title)}</a>`).join('')}</div>`).join('');
const guideBody = guide.chapters.map((c,index)=>`<section class="guide-chapter" id="${esc(c.id)}" aria-labelledby="chapter-${esc(c.id)}"><div class="guide-chapter-heading"><span class="mono">${String(index+1).padStart(2,'0')} / ${esc(c.group)}</span><h2 id="chapter-${esc(c.id)}">${esc(c.title)}</h2><a class="chapter-source" href="${esc(c.sourceUrl)}" target="_blank" rel="noopener noreferrer">Source ↗</a></div><div class="guide-prose">${c.html}</div></section>`).join('');
const guideHeader = header.replace('class="guide-nav-link"','class="guide-nav-link" aria-current="page"');
await writeFile(path.join(root,'dist/guide.html'), `<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Reading Guide — OpenEnvision World Modeling Library</title><meta name="description" content="Definitions, reading roadmaps, architecture comparisons, evaluation dimensions, open problems, glossary, and FAQ for world model research."><link rel="icon" href="./assets/openenvision-mark.png"><link rel="canonical" href="https://openenvision.github.io/Awesome-World-Modeling/guide.html"><link rel="stylesheet" href="./assets/styles.css?v=${revision}"><script type="module" src="./assets/guide.js?v=${revision}"></script></head><body class="guide-page"><a class="skip-link" href="#guide-content">Skip to reading guide</a>${guideHeader}<main class="wrap guide-main"><div class="guide-intro"><a class="text-link" href="./#library">← Research library</a><h1>Find your way<br>through world models.</h1><p>Definitions, reading paths, and the questions behind the papers.<br>Read the field from its foundations to its open problems.</p></div><div class="guide-facts"><span><strong>${guide.counts.readingTracks}</strong> reading tracks</span><span><strong>${guide.counts.glossaryTerms}</strong> glossary terms</span><span><strong>${guide.counts.evaluationDimensions}</strong> evaluation dimensions</span><span><strong>${guide.counts.openProblems}</strong> open problems</span></div><form id="guide-search-form" class="search-tools" role="search"><div class="search-box"><label for="guide-search" class="sr-only">Search the reading guide</label><input id="guide-search" type="search" maxlength="300" placeholder="Search definitions, reading tracks, glossary, and FAQ…" autocomplete="off"></div><button id="guide-reset" class="button" data-guide-reset hidden>Clear search</button></form><p id="guide-search-status" class="mono" role="status" aria-live="polite">${guide.chapters.length} chapters · From the curated README</p><button id="guide-toc-toggle" class="button guide-toc-toggle" aria-expanded="false" aria-controls="guide-toc">Chapters <span aria-hidden="true">＋</span></button><div class="guide-layout"><aside id="guide-toc" class="guide-contents" aria-label="Guide chapters">${guideNav}</aside><div id="guide-content"><div id="guide-empty" class="empty-state" hidden><h2>No chapters found.</h2><p>Try “JEPA”, “planning”, or “evaluation”.</p><button class="button" data-guide-reset>Browse the complete guide</button></div>${guideBody}</div></div></main>${footer}</body></html>`);
await writeFile(path.join(root,'dist/data/guide-coverage.json'),JSON.stringify({sourceReadmeSha256:data.sourceReadmeSha256,counts:guide.counts,chapters:guide.chapters.map(({id,title,sourceLine})=>({id,title,sourceLine}))})+'\n');
console.log(`Built dist/: ${data.entries.length} research entries, ${data.resources.length} resources, ${guide.chapters.length} guide chapters, revision ${revision}.`);
