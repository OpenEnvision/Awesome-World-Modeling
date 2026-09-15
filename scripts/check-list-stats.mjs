#!/usr/bin/env node

// Recompute documented counts without counting News, FAQ, or explanatory bullets
// as papers. Run with --update to refresh the statistics table after curation.
import fs from 'node:fs';

const args = process.argv.slice(2);
const readmePath = args.find((arg) => arg !== '--update') ?? 'README.md';
let text = fs.readFileSync(readmePath, 'utf8');
const section = (start, end) => {
  const from = text.indexOf(start);
  const to = text.indexOf(end, from + start.length);
  if (from < 0 || to < 0) throw new Error(`Missing section: ${start} / ${end}`);
  return text.slice(from, to);
};
const count = (body, pattern) => [...body.matchAll(pattern)].length;
const rows = (body) => count(body, /^\| \*\*/gm);
const taxonomy = section('## 0 ·', '## 📚 Surveys & Position Papers');
const surveys = section('## 📚 Surveys & Position Papers', '## 🚧 Open Problems');
const benchmarks = section('## 📊 Benchmarks & Evaluation', '## 📘 Glossary');
const ids = new Set([...text.matchAll(/arxiv\.org\/(?:abs|pdf|html)\/([a-z.-]+\/\d{7}|\d{4}\.\d{4,5})(?:v\d+)?/gi)]
  .map((match) => match[1].toLowerCase()));
const stats = {
  'Unique arXiv papers': ids.size,
  'Total curated entries (taxonomy bullets + §2.1 / §3.1 / Surveys / Benchmarks table rows)':
    count(taxonomy, /^- \*\*/gm)
    + rows(section('### 2.1 ', '### 2.2 '))
    + rows(section('### 3.1 ', '### 3.2 '))
    + rows(surveys) + rows(benchmarks),
  'Entries with official code (`GitHub` badges)': count(text, /img\.shields\.io\/badge\/GitHub/g),
  'Official project pages (`Project` badges)': count(text, /img\.shields\.io\/badge\/Project/g),
  'Taxonomy sections and subsections (numbered headings in §0–3)': count(taxonomy, /^#{2,4} [0-3](?:\.| ·)/gm),
  'Benchmarks tracked': rows(benchmarks),
  'Surveys & position papers tracked': rows(surveys),
  'Glossary terms': count(section('## 📘 Glossary', '## 🔬 Workshops & Challenges'), /^- \*\*/gm),
  'Open problems': count(section('## 🚧 Open Problems', '## 🧪 Evaluation Dimensions'), /^\d+\. \*\*/gm),
  'FAQ entries': count(section('## ❓ FAQ', '## 📊 List Statistics'), /^\*\*Q\d+\./gm),
};

const errors = [];
for (const [label, value] of Object.entries(stats)) {
  const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp(`^\\| ${escape(label)} \\| (\\d+) \\|$`, 'm');
  const found = text.match(pattern);
  if (!found) errors.push(`Missing statistic: ${label}`);
  else if (Number(found[1]) !== value) {
    if (args.includes('--update')) text = text.replace(pattern, `| ${label} | ${value} |`);
    else errors.push(`${label}: documented ${found[1]}, actual ${value}`);
  }
}
// A badge must identify the same paper as the destination next to it.
for (const [index, line] of text.split('\n').entries()) {
  for (const match of line.matchAll(/\[!\[arXiv\]\]\(([^)]+)\)/g)) {
    errors.push(`Line ${index + 1}: malformed arXiv badge ${match[0]}`);
  }
  for (const match of line.matchAll(/\[!\[arXiv\]\(https:\/\/img\.shields\.io\/badge\/arXiv-([^?]+?)-b31b1b[^)]*\)\]\(https?:\/\/arxiv\.org\/(?:abs|pdf|html)\/([^)]*)\)/g)) {
    const normalize = (id) => id.replace(/\.pdf$/, '').replace(/v\d+$/, '').toLowerCase();
    if (normalize(match[1]) !== normalize(match[2])) errors.push(`Line ${index + 1}: arXiv badge/link mismatch`);
  }
}
if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
if (args.includes('--update')) fs.writeFileSync(readmePath, text);
console.log(`List statistics and arXiv badges passed (${ids.size} unique IDs).`);
