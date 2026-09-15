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
const expectedResourceLines = [];
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
  if ((major === '## 🔬 Workshops & Challenges' && line.startsWith('- **')) || (line.startsWith('| **') && [
    '## 🌐 Community Resources & Open Repositories',
    '## 🏭 Labs, Companies & Open Stacks',
    '## 📝 Selected Technical Blogs & Reports',
  ].includes(major))) expectedResourceLines.push(index + 1);
  if (major === '## 🏭 Labs, Companies & Open Stacks' && line.startsWith('Also tracked across the taxonomy,')) {
    for (const match of line.matchAll(/\*\*([^*]+)\*\*\s*\(([^)]+)\)/g)) expectedResourceLines.push(index + 1);
  }
}
assert.deepEqual(library.entries.map((entry) => entry.source.line), expectedLines, 'Every source curation row must appear exactly once and in source order');
assert.deepEqual(library.resources.map((entry) => entry.source.line), expectedResourceLines, 'Every resource row and explicitly named organization must be exported in source order');
const videoScope = library.sections.find((section) => section.id === 'section-1-6');
assert.ok(videoScope.description.includes('Generic video generation is still filtered out unless the paper explicitly targets control, causality, memory, or world-model conversion.'));
assert.ok(!videoScope.description.includes('Guides one video-sampling trajectory'), 'Paper summaries must not leak into the section introduction');
assert.ok(lines[videoScope.descriptionSource.line - 1].startsWith('> Video foundation models'));
const narrativeScope = library.sections.find((section) => section.id === 'section-1-7');
assert.ok(narrativeScope.description.includes('documented state, memory, or structured planning that crosses a chunk/shot/scene boundary'));
assert.ok(narrativeScope.description.includes('nor does video length, visual quality, or multi-shot output'));
assert.equal(library.sections.find((section) => section.id === 'section-1-7-1').description, '', 'An empty child introduction must not inherit paper descriptions');
assert.ok(library.sections.find((section) => section.id === 'section-1').description.includes('learned simulators'));
const wam = library.sections.find((section) => section.id === 'section-1-3-4');
assert.equal(wam.notes.length, 1);
const wamNote = wam.notes[0];
assert.equal(wamNote.title, 'WAM survey cross-audit additions');
assert.ok(wamNote.text.includes('part of the 109-paper WAM survey collection'));
assert.ok(wamNote.text.includes('the broader WAM boundary remains explicit'));
assert.ok(!wamNote.text.includes('Learning Universal Policies'), 'Editorial notes must stop before the next paper');
assert.equal(lines[wamNote.line - 1], `##### ${wamNote.title}`);
assert.equal(wamNote.source.url, `${library.repository}/blob/main/README.md#L${wamNote.line}`);
assert.deepEqual(wamNote.links, []);
assert.equal(library.sections.filter((section) => section.id.startsWith('section-')).length, 44, 'Editorial H5 notes must not become numbered taxonomy sections');
assert.ok(library.entries.some((entry) => entry.name === 'UniPi' && entry.sectionId === wam.id), 'The audit block papers retain their WAM membership');
const noteLinkFixture = buildLibrary(readme.replace(wamNote.text, `${wamNote.text} See [WAM taxonomy](#134-world-model-based-vision-language-action-vla--world-action-models-wam).`), audit);
assert.deepEqual(noteLinkFixture.sections.find((section) => section.id === wam.id).notes[0].links, [{
  label: 'WAM taxonomy', type: 'related',
  url: `${library.repository}/blob/main/README.md#134-world-model-based-vision-language-action-vla--world-action-models-wam`,
}]);
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
const quotedTableTitle = library.entries.find((entry) => entry.arxivIds.includes('2507.21513'));
assert.equal(quotedTableTitle.fullTitle, 'What Does it Mean for a Neural Network to Learn a "World Model"?', 'Internal quotation marks in table titles must not truncate the full title');
const quotedAliasFixture = buildLibrary(readme.replace('**Primate Vision and Predictive Models**', '**Primate "Vision and Predictive Models"**'), audit);
const quotedAlias = quotedAliasFixture.entries.find((entry) => entry.arxivIds.includes('2608.23790'));
assert.equal(quotedAlias.fullTitle, 'Primate vision reveals a missing principle for robust dynamic AI', 'Bullet titles come from the citation after the bold alias');
assert.ok(library.resources.some((entry) => entry.arxivIds.includes('2609.14854')), 'AutoLab must remain available in resources');
const labs = library.resources.filter((entry) => entry.kind === 'organization');
assert.equal(labs.length, 18, 'Eleven organization rows and seven prose-listed organizations');
const nvidia = labs.find((entry) => entry.name === 'NVIDIA (Cosmos)');
assert.ok(nvidia.sourceFields.some((field) => field.label === 'Representative entries in this list' && field.value.includes('FlashDreams')));
assert.ok(nvidia.sourceFields.some((field) => field.label === 'Openness' && field.value === 'Open weights + code for the Cosmos family'));
const microsoft = labs.find((entry) => entry.name === 'Microsoft');
assert.equal(microsoft.description, 'Representative entries: MineWorld, Latent Spatial Memory.');
assert.deepEqual(microsoft.allLinks, [], 'Prose organizations use source provenance instead of invented official links');
const runaway = library.resources.find((entry) => entry.name === 'Introducing GWM Worlds 2');
assert.ok(runaway.sourceFields.some((field) => field.label === 'Author / Source' && field.value === 'Runway'));
assert.ok(runaway.sourceFields.some((field) => field.label === 'Year' && field.value === '2026-09-03'));
const caliper = library.entries.find((entry) => entry.name === 'CALIPER' && entry.kind === 'benchmark');
assert.ok(caliper.sourceFields.some((field) => field.label === 'Metric Focus' && field.value === caliper.description));
const atari = library.entries.find((entry) => entry.name === 'Atari 100k');
assert.equal(atari.allLinks[0].type, 'related', 'A README section link is not an external paper');
assert.throws(() => validateLibrary({ ...library, entries: library.entries.slice(1) }, readme), /Curated entry coverage/);
console.log(`Website data checks passed: ${expectedLines.length} source rows, ${indexedIds.size} arXiv IDs, ${library.resources.length} resources, stable output and link/title regressions.`);
