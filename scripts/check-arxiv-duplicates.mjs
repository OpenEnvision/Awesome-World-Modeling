#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const readmePath = process.argv[2] ?? 'README.md';
const allowlistPath = path.join('.github', 'arxiv-duplicate-allowlist.json');

const readText = (filePath) => fs.readFileSync(filePath, 'utf8');

const normalizeArxivId = (id) => id.replace(/v\d+$/i, '');

const lineNumberAt = (text, index) => text.slice(0, index).split('\n').length;

const readme = readText(readmePath);
const allowlist = fs.existsSync(allowlistPath)
  ? JSON.parse(readText(allowlistPath))
  : {};

const arxivLinkPattern = /arxiv\.org\/(?:abs|pdf)\/([a-z-]+\/\d{7}|[0-9]{4}\.[0-9]{4,5})(v\d+)?/gi;
const occurrences = new Map();

let match;
while ((match = arxivLinkPattern.exec(readme)) !== null) {
  const id = normalizeArxivId(`${match[1]}${match[2] ?? ''}`);
  const line = lineNumberAt(readme, match.index);
  const links = occurrences.get(id) ?? [];
  links.push(line);
  occurrences.set(id, links);
}

const duplicates = [...occurrences.entries()]
  .filter(([, lines]) => lines.length > 1)
  .sort(([a], [b]) => a.localeCompare(b));

const unexpected = duplicates.filter(([id]) => !allowlist[id]);
const staleAllowlist = Object.keys(allowlist)
  .filter((id) => !occurrences.has(id) || occurrences.get(id).length < 2)
  .sort();

if (unexpected.length === 0 && staleAllowlist.length === 0) {
  console.log(`arXiv duplicate check passed (${occurrences.size} unique IDs, ${duplicates.length} allowed duplicates).`);
  process.exit(0);
}

if (unexpected.length > 0) {
  console.error('Unexpected duplicate arXiv IDs found:');
  for (const [id, lines] of unexpected) {
    console.error(`- ${id}: lines ${lines.join(', ')}`);
  }
  console.error('\nIf a duplicate is intentional, add it to .github/arxiv-duplicate-allowlist.json with a short reason.');
}

if (staleAllowlist.length > 0) {
  console.error('\nStale arXiv duplicate allowlist entries found:');
  for (const id of staleAllowlist) {
    console.error(`- ${id}`);
  }
  console.error('\nRemove stale entries from .github/arxiv-duplicate-allowlist.json.');
}

process.exit(1);
