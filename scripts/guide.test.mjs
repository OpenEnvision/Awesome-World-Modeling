import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { buildGuide } from './guide-content.mjs';

const readme = fs.readFileSync(new URL('../README.md', import.meta.url), 'utf8');
const library = JSON.parse(fs.readFileSync(new URL('../site/data/library.json', import.meta.url), 'utf8'));
const guide = buildGuide(readme, library);
const chapter = id => guide.chapters.find(item => item.id === id);
const allHTML = guide.chapters.map(item => item.html).join('\n');

test('all substantive README guide chapters and records are preserved', () => {
  assert.deepEqual(guide.counts, {
    chapters: 15, readingTracks: 3, timelineMilestones: 24, architectureFamilies: 8,
    openProblems: 12, evaluationDimensions: 11, glossaryTerms: 37, faqEntries: 14,
  });
  assert.equal((chapter('glossary').html.match(/<li>/g) ?? []).length, 37);
  assert.equal((chapter('faq').html.match(/<strong>Q\d+\./g) ?? []).length, 14);
  assert.equal((chapter('open-problems').html.match(/<li>/g) ?? []).length, 12);
  assert.equal((chapter('evaluation-dimensions').html.match(/<tr>/g) ?? []).length, 12);
  assert.equal((chapter('historical-timeline').html.match(/<tr>/g) ?? []).length, 26);
  assert.equal((chapter('architecture-cheat-sheet').html.match(/<tr>/g) ?? []).length, 9);
  assert.match(chapter('taxonomic-overview').html, /<pre><code>World Models/);
  assert.match(chapter('taxonomic-overview').html, /World Foundation Model \(WFM\)/);
  assert.doesNotMatch(allHTML, /Back to Top|&lt;a id=|<hr\b/);
});

test('source lines, original dates, and repeated builds are deterministic', () => {
  const lines = readme.split('\n');
  for (const item of guide.chapters) {
    assert.ok(lines[item.sourceLine - 1].startsWith('## '));
    assert.ok(lines[item.sourceLine - 1].includes(item.title));
    assert.equal(item.sourceUrl, `${guide.repository}/blob/main/README.md#L${item.sourceLine}`);
  }
  assert.equal(guide.updatedAt, library.updatedAt);
  assert.match(chapter('news').html, /2026-09-15/);
  assert.match(chapter('list-statistics').html, /September 15, 2026/);
  assert.deepEqual(buildGuide(readme, library), guide);
});

test('guide links open exact local chapters and taxonomy views', () => {
  assert.match(chapter('start-here').html, /href="\.\/guide\.html#definition-and-scope"/);
  assert.match(chapter('start-here').html, /href="\.\/\?section=section-1-3-4#library"/);
  assert.match(chapter('reading-roadmap').html, /href="\.\/\?section=section-1-1-2#library">§1\.1\.2/);
  assert.match(chapter('reading-roadmap').html, /href="\.\/\?section=section-0-2#library">§0\.2/);
  assert.match(chapter('start-here').html, /href="\.\/\?collection=benchmarks#library"/);
  assert.match(chapter('start-here').html, /href="\.\/resources\.html#organization-labs-companies-open-stacks"/);
  const ids = new Set(guide.chapters.map(item => item.id));
  for (const [, id] of allHTML.matchAll(/\bid="([^"]+)"/g)) {
    assert.ok(!ids.has(id), `Duplicate guide ID: ${id}`);
    ids.add(id);
  }
  for (const [, href] of allHTML.matchAll(/href="([^"]+)"/g)) {
    const url = new URL(href.replaceAll('&amp;', '&'), 'https://example.com/Awesome-World-Modeling/');
    if (url.origin !== 'https://example.com') continue;
    if (url.pathname.endsWith('/guide.html') && url.hash) assert.ok(ids.has(decodeURIComponent(url.hash.slice(1))), `Missing guide anchor ${href}`);
    if (url.pathname.endsWith('/resources.html') && url.hash) assert.ok(library.sections.some(section => section.id === url.hash.slice(1)), `Missing resource section ${href}`);
    if (url.searchParams.has('section')) assert.ok(library.sections.some(section => section.id === url.searchParams.get('section')), `Missing taxonomy section ${href}`);
    if (url.searchParams.has('collection')) assert.ok(library.collections.some(collection => collection.id === url.searchParams.get('collection')), `Missing collection ${href}`);
  }
});

test('tables are keyboard-scrollable and images reference copied local sources', () => {
  assert.equal((allHTML.match(/<table>/g) ?? []).length, (allHTML.match(/class="guide-table-wrap" role="region" tabindex="0" aria-label=/g) ?? []).length);
  assert.match(allHTML, /<th scope="col">/);
  assert.match(chapter('news').html, /src="\.\/image\/lecun_wm\.png"/);
  assert.match(chapter('news').html, /src="\.\/image\/world_qa\.png"/);
  for (const [, href] of allHTML.matchAll(/<img[^>]+src="([^"]+)"/g)) assert.ok(fs.existsSync(new URL(`../${href}`, import.meta.url)), `Missing guide image ${href}`);
});

test('relative source documents and legacy repository links use the canonical repository', () => {
  const contribution = chapter('contribution-guide').html;
  assert.match(contribution, /href="https:\/\/github\.com\/OpenEnvision\/Awesome-World-Modeling\/blob\/main\/CONTRIBUTING\.md"/);
  assert.match(contribution, /href="https:\/\/github\.com\/OpenEnvision\/Awesome-World-Modeling\/issues\/new\?template=paper\.yml"/);
  assert.match(chapter('news').html, /href="https:\/\/github\.com\/OpenEnvision\/Awesome-World-Modeling\/blob\/main\/curation\/2026-09-15\.md"/);
});

test('fenced examples preserve source URLs and escape markup', () => {
  assert.match(chapter('citation').html, /url=\{https:\/\/github\.com\/OpenEnvision\/Awesome-World-Models\}/);
  assert.match(chapter('contribution-guide').html, /\[!\[arXiv\]\(https:\/\/img\.shields\.io/);
  assert.doesNotMatch(chapter('contribution-guide').html.match(/<pre>[\s\S]*?<\/pre>/)?.[0] ?? '', /<a\b|<img\b/);
});

test('untrusted HTML and unsupported URL schemes remain inert', () => {
  const payload = '\n<script>alert("unsafe")</script>\n\n<img src="x" onerror="alert(1)">\n\n[unsafe](javascript:alert(1)) [data](data:text/html,payload) [encoded](javascript&#58;alert(1))\n\n[unknown](#new-source-anchor) [subheading](#a-short-working-definition)\n\n```html\n<a href="javascript:alert(1)">example</a>\n```\n';
  const result = buildGuide(readme.replace('## 📖 Citation\n', `## 📖 Citation\n${payload}`), library).chapters.find(item => item.id === 'citation').html;
  assert.doesNotMatch(result, /<script\b|<img\b|href="(?:javascript:|data:)/);
  assert.match(result, /&lt;script&gt;/);
  assert.match(result, /&lt;img src=/);
  assert.match(result, /README\.md#new-source-anchor/);
  assert.match(result, /guide\.html#definition-and-scope-a-short-working-definition/);
  assert.match(result, /&lt;a href=&quot;javascript:alert\(1\)&quot;&gt;example&lt;\/a&gt;/);
});
