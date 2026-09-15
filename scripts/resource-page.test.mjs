import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import {esc} from '../site/assets/library.js';

const root = fileURLToPath(new URL('../', import.meta.url));
const data = JSON.parse(readFileSync(path.join(root, 'site/data/library.json'), 'utf8'));
execFileSync(process.execPath, ['scripts/build-site.mjs'], {cwd:root, stdio:'pipe'});
const resourcePage = readFileSync(path.join(root, 'dist/resources.html'), 'utf8');
const guidePage = readFileSync(path.join(root, 'dist/guide.html'), 'utf8');
const articles = new Map([...resourcePage.matchAll(/<article class="resource-directory-entry" id="([^"]+)">([\s\S]*?)<\/article>/g)]
  .map(([, id, html])=>[id, html]));
const ids = [...resourcePage.matchAll(/\bid="([^"]+)"/g)].map(([, id])=>id);

test('the resource directory renders every exported entry exactly once', () => {
  assert.equal((resourcePage.match(/class="resource-directory-entry"/g) || []).length, data.resources.length);
  assert.equal(articles.size, data.resources.length);
  assert.equal(new Set(ids).size, ids.length, 'Resource section and entry IDs must be unique');
  assert.deepEqual([...articles.keys()].sort(), data.resources.map(entry=>entry.id).sort());
});

test('resource parent sections are real nested sections with readable scope', () => {
  const stack = [];
  const parents = new Map();
  for (const [, closing, attributes] of resourcePage.matchAll(/<(\/?)section\b([^>]*)>/g)) {
    if (closing) { stack.pop(); continue; }
    const id = attributes.match(/\bid="([^"]+)"/)?.[1];
    parents.set(id, stack.at(-1) || null);
    stack.push(id);
  }
  for (const section of data.sections.filter(section=>section.collection === 'resources')) {
    assert.ok(parents.has(section.id), `Missing rendered resource section: ${section.id}`);
    assert.equal(parents.get(section.id), section.parentId, `Incorrect parent for ${section.id}`);
    if (section.description) assert.ok(resourcePage.includes(`<p class="resource-scope">${esc(section.description)}</p>`));
  }
  assert.match(resourcePage, /<section class="resource-group resource-group-parent" id="resource-community-resources-open-repositories">/);
  assert.match(resourcePage, /<section class="resource-group resource-group-parent" id="blogs-selected-technical-blogs-reports">/);
});

test('every resource link in the rendered guide resolves to an actual page anchor', () => {
  const resourceIds = new Set(ids);
  let links = 0;
  for (const [, href] of guidePage.matchAll(/href="([^"]+)"/g)) {
    const url = new URL(href.replaceAll('&amp;', '&'), 'https://example.com/Awesome-World-Modeling/');
    if (url.origin !== 'https://example.com' || !url.pathname.endsWith('/resources.html') || !url.hash) continue;
    links += 1;
    assert.ok(resourceIds.has(decodeURIComponent(url.hash.slice(1))), `Guide points to missing resource anchor: ${href}`);
  }
  assert.ok(links >= 13, 'The cross-page guide links must be present for this check to be meaningful');
});

test('resource descriptions, provenance, and source fields retain escaped source text', () => {
  for (const entry of data.resources) {
    const html = articles.get(entry.id);
    assert.ok(html.includes(`>${esc(entry.name)}</h`), `Missing name: ${entry.name}`);
    if (entry.description) assert.ok(html.includes(`<p>${esc(entry.description)}</p>`), `Missing description: ${entry.name}`);
    if (entry.citation && ![entry.name, entry.description, `${entry.name} — ${entry.description}`].includes(entry.citation)) {
      assert.ok(html.includes(`<p class="resource-citation">${esc(entry.citation)}</p>`), `Missing provenance: ${entry.name}`);
    }
    for (const field of entry.sourceFields || []) {
      if (field.value && field.value !== entry.description) assert.ok(html.includes(`<dt>${esc(field.label)}</dt><dd>${esc(field.value)}</dd>`), `Missing ${field.label}: ${entry.name}`);
    }
    assert.ok(html.includes(`href="${esc(entry.source.url)}"`), `Missing source: ${entry.name}`);
    assert.doesNotMatch(html, /<script\b|<iframe\b|\son(?:click|error|load)=/i);
  }
  const sameName = data.resources.filter(entry=>entry.name === 'Awesome World Models');
  assert.equal(sameName.length, 2);
  assert.ok(sameName.some(entry=>articles.get(entry.id).includes('(knightnemo)')));
  assert.ok(sameName.some(entry=>articles.get(entry.id).includes('(leofan90)')));
});
