import {readFile, writeFile, mkdir, cp} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import {adaptCatalog, cleanHeading} from '../site/assets/catalog-adapter.js';
import {esc, rowHTML, resourceHTML, PAGE_SIZE} from '../site/assets/library.js';

const root = fileURLToPath(new URL('../', import.meta.url));
const read = file => readFile(path.join(root, file), 'utf8');
const data = JSON.parse(await read('site/data/library.json'));
const catalog = adaptCatalog(data);
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
const assets = ['styles.css','app.js','library.js','catalog-adapter.js','resources.js'];
const revision = createHash('sha256').update(html + await read('site/data/library.json') + (await Promise.all(assets.map(a=>read(`site/assets/${a}`)))).join('')).digest('hex').slice(0,12);
html = html.replace(/(\.\/assets\/(?:styles\.css|app\.js))"/g, `$1?v=${revision}"`);
await mkdir(path.join(root,'dist'),{recursive:true});
await cp(path.join(root,'site/assets'),path.join(root,'dist/assets'),{recursive:true});
await cp(path.join(root,'site/data'),path.join(root,'dist/data'),{recursive:true});
await writeFile(path.join(root,'dist/index.html'),html);
await writeFile(path.join(root,'dist/.nojekyll'),'');
// Relative imports are versioned too, preventing stale helpers after a deploy.
for (const asset of ['app.js','catalog-adapter.js','resources.js']) {
  const content = (await read(`site/assets/${asset}`)).replace(/from '(\.\/[^']+\.js)'/g, `from '$1?v=${revision}'`).replace("'../data/library.json'",`'../data/library.json?v=${revision}'`);
  await writeFile(path.join(root,'dist/assets',asset), content);
}

const header = html.match(/<header[\s\S]*?<\/header>/)[0].replaceAll('href="#', 'href="./#');
const footer = html.match(/<footer[\s\S]*?<\/footer>/)[0].replaceAll('href="#', 'href="./#');
const groups = Map.groupBy(data.resources, e=>e.section);
const resourceContent = [...groups].map(([name, entries])=>`<section class="resource-group"><h2>${esc(cleanHeading(name))}</h2>${entries.map(e=>`<article class="resource-directory-entry"><div><h3>${esc(e.name)}</h3>${e.description?`<p>${esc(e.description)}</p>`:''}</div><div class="entry-resources">${e.allLinks.map(resourceHTML).join('')}<a class="resource" href="${esc(e.source.url)}" target="_blank" rel="noopener noreferrer">Source ↗</a></div></article>`).join('')}</section>`).join('');
await writeFile(path.join(root,'dist/resources.html'), `<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Resources — OpenEnvision World Modeling Library</title><meta name="description" content="World model tools, datasets, workshops, research labs, and technical reports."><link rel="icon" href="./assets/openenvision-mark.png"><link rel="stylesheet" href="./assets/styles.css?v=${revision}"><link rel="canonical" href="https://openenvision.github.io/Awesome-World-Modeling/resources.html"><script type="module" src="./assets/resources.js?v=${revision}"></script></head><body><a class="skip-link" href="#resources">Skip to resources</a>${header}<main class="wrap resource-directory" id="resources"><a class="text-link" href="./#library">← Back to the research library</a><h1>Resources for world modeling.</h1><p class="directory-intro">${data.resources.length} open resources, workshops, research organizations, and technical reports from the curated list.</p><form id="resource-search-form" class="search-tools" role="search"><div class="search-box"><label for="resource-search" class="sr-only">Search resources</label><input id="resource-search" type="search" maxlength="300" placeholder="Search tools, datasets, workshops, reports…" autocomplete="off"></div></form><p id="resource-count" class="mono" role="status" aria-live="polite">${data.resources.length} resources</p><div id="resource-empty" class="empty-state" hidden><h2>No resources found.</h2><p>Try a model name, organization, or arXiv ID.</p><button id="clear-resource-search" class="button">Clear search</button></div>${resourceContent}</main>${footer}</body></html>`);
await writeFile(path.join(root,'dist/404.html'), `<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Page not found — OpenEnvision</title><style>body{font:18px/1.6 Arial,sans-serif;margin:12vh auto;padding:24px;max-width:650px;color:#171717}a{color:#ce352c}</style></head><body><h1>This page is not in the library.</h1><p><a href="/Awesome-World-Modeling/">Return to World Modeling →</a></p></body></html>`);
console.log(`Built dist/: ${data.entries.length} research entries, ${data.resources.length} resources, revision ${revision}.`);
