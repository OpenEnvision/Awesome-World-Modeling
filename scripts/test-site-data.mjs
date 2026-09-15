#!/usr/bin/env node

import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { arxivIds, buildLibrary, markdownLinks, plainText, validateLibrary } from './build-site-data.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const readme = fs.readFileSync(path.join(root, 'README.md'), 'utf8');
const auditNames = fs.readdirSync(path.join(root, 'curation')).filter((name) => /^\d{4}-\d{2}-\d{2}\.json$/.test(name)).sort();
const audit = JSON.parse(fs.readFileSync(path.join(root, 'curation', auditNames.at(-1)), 'utf8'));
const library = buildLibrary(readme, audit);
const lines = readme.split('\n');

// Source coverage is independent of the exporter: exactly the curation rows
// counted in the README's existing statistics must survive, once each.
const expectedLines = [];
let major = '';
let subsection = '';
for (const [index, line] of lines.entries()) {
  if (line.startsWith('## ')) major = line;
  if (line.startsWith('### ')) subsection = line;
  const taxonomy = /^## [0-3] ·/.test(major);
  if (taxonomy && line.startsWith('- **')) expectedLines.push(index + 1);
  if (line.startsWith('| **') && (
    (taxonomy && /^### (?:2\.1 |3\.1 )/.test(subsection)) ||
    major === '## 📚 Surveys & Position Papers' || major === '## 📊 Benchmarks & Evaluation'
  )) expectedLines.push(index + 1);
}
assert.deepEqual(library.entries.map((entry) => entry.source.line), expectedLines, 'Every source curation row must appear exactly once and in source order');
assert.deepEqual(library, buildLibrary(readme, audit), 'Repeated builds must be deterministic');
const committed = fs.readFileSync(path.join(root, 'site/data/library.json'), 'utf8');
assert.equal(committed, `${JSON.stringify(library)}\n`, 'Generated data must match the source');

const indexedIds = new Set([...library.entries, ...library.resources].flatMap((entry) => entry.arxivIds));
assert.deepEqual([...indexedIds].sort(), arxivIds(readme).sort(), 'Every arXiv source must be searchable, including resource-only papers');
assert.equal(library.collections.reduce((sum, collection) => sum + collection.count, 0), library.entries.length);
for (const entry of library.entries) {
  const section = library.sections.find((section) => section.id === entry.sectionId);
  assert.ok(section, `Missing section for ${entry.name}`);
  assert.equal(entry.collection, section.collection);
  assert.ok(entry.source.url.endsWith(`#L${entry.source.line}`));
  if (entry.relatedEntryId) {
    const target = library.entries.find((other) => other.id === entry.relatedEntryId);
    assert.ok(target && target.kind !== 'cross-reference', `Broken cross-reference: ${entry.name}`);
    assert.deepEqual(entry.arxivIds, target.arxivIds);
  }
}

// Regression cases that can silently lose data with ordinary Markdown regexes.
const balancedUrl = 'https://people.idsia.ch/~juergen/FKI-126-90_(revised)bw_ocr.pdf';
assert.deepEqual(markdownLinks(`[![Paper](https://img.shields.io/badge/Paper-Link)](${balancedUrl})`).map((link) => link.url), [balancedUrl]);
assert.deepEqual(arxivIds('https://arxiv.org/pdf/cs/0510016v2.pdf https://arxiv.org/abs/2609.15801v1 https://arxiv.org/html/2609.15801v2'), ['cs/0510016', '2609.15801']);
assert.equal(plainText('GigaBrain-0.5M\\*'), 'GigaBrain-0.5M*');
assert.equal(plainText('$\\omega$-EVA, M$^\\text{4}$World, $\\tau_0$-WM'), 'ω-EVA, M⁴World, τ₀-WM');
const alaya = library.entries.find((entry) => entry.name === 'AlayaWorld');
assert.deepEqual(alaya.arxivIds, ['2607.06291', '2607.18367', '2608.13492']);
assert.equal(alaya.allLinks.filter((link) => link.type === 'paper').length, 3);
assert.equal(library.entries.find((entry) => entry.arxivIds.includes('2602.12099')).name, 'GigaBrain-0.5M*');
assert.ok(library.resources.some((entry) => entry.arxivIds.includes('2609.14854')), 'AutoLab must remain available in resources');
assert.throws(() => validateLibrary({ ...library, entries: library.entries.slice(1) }, readme), /Curated entry coverage/);
console.log(`Website data checks passed: ${expectedLines.length} source rows, ${indexedIds.size} arXiv IDs, ${library.resources.length} resources, stable output and link/title regressions.`);
