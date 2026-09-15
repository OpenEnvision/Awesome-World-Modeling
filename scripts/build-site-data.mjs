#!/usr/bin/env node

// The README remains the editorial source. This exporter has no runtime or npm
// dependencies, so GitHub Pages can rebuild the library after every curation.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const REPOSITORY = 'https://github.com/OpenEnvision/Awesome-World-Modeling';
const COLLECTIONS = [
  ['mind', 'Mind'],
  ['generative', 'Generative'],
  ['representational', 'Representational'],
  ['agentic', 'Agentic'],
  ['surveys', 'Surveys'],
  ['benchmarks', 'Benchmarks'],
];
const hash = (text) => crypto.createHash('sha256').update(text).digest('hex');
const distinct = (items) => [...new Set(items)];
const LEADING_BOLD = /^\*\*((?:\\.|(?!\*\*)[\s\S])+)\*\*/;

export function arxivIds(text) {
  return distinct([...text.matchAll(/arxiv\.org\/(?:abs|pdf|html)\/([a-z.-]+\/\d{7}|\d{4}\.\d{4,5})(?:v\d+)?/gi)]
    .map((match) => match[1].toLowerCase()));
}

// Balanced destinations preserve URLs such as FKI-126-90_(revised)bw_ocr.pdf.
// The outer link of a Markdown badge is a source; its inner shield image is not.
export function markdownLinks(text) {
  const links = [];
  for (let start = 0; start < text.length; start += 1) {
    if (text[start] !== '[' || text[start - 1] === '!' || text[start - 1] === '\\') continue;
    let depth = 1;
    let endLabel = start + 1;
    for (; endLabel < text.length && depth; endLabel += 1) {
      if (text[endLabel - 1] === '\\') continue;
      if (text[endLabel] === '[') depth += 1;
      if (text[endLabel] === ']') depth -= 1;
    }
    if (depth || text[endLabel] !== '(') continue;
    depth = 1;
    let end = endLabel + 1;
    for (; end < text.length && depth; end += 1) {
      if (text[end - 1] === '\\') continue;
      if (text[end] === '(') depth += 1;
      if (text[end] === ')') depth -= 1;
    }
    if (depth) continue;
    const rawLabel = text.slice(start + 1, endLabel - 1);
    const badge = rawLabel.match(/^!\[([^\]]+)\]/);
    const label = badge ? badge[1] : rawLabel;
    const url = text.slice(endLabel + 1, end - 1).trim().replace(/^<|>$/g, '').replace(/\\([()])/g, '$1');
    links.push({ label, url, start, end });
    start = end - 1;
  }
  return links;
}

export function plainText(text = '') {
  const links = markdownLinks(text);
  for (const link of links.reverse()) text = text.slice(0, link.start) + link.label + text.slice(link.end);
  const escapes = [];
  text = text.replace(/\\([|_*])/g, (_, character) => `\uE000${escapes.push(character) - 1}\uE001`);
  // Render the small amount of inline TeX used in model names as searchable text.
  text = text.replace(/\$([^$]+)\$/g, (_, formula) => formula
    .replace(/\\omega(?=[^a-z]|$)/g, 'ω').replace(/\\pi(?=[^a-z]|$)/g, 'π').replace(/\\tau(?=[^a-z]|$)/g, 'τ')
    .replace(/\\text\{([^}]+)\}/g, '$1').replace(/[{}]/g, '')
    .replace(/_([0-9.]+)/g, (_, digits) => [...digits].map((digit) => '₀₁₂₃₄₅₆₇₈₉'['0123456789'.indexOf(digit)] ?? '.').join(''))
    .replace(/\^([0-9]+)/g, (_, digits) => [...digits].map((digit) => '⁰¹²³⁴⁵⁶⁷⁸⁹'[Number(digit)]).join('')));
  return text.replace(/<[^>]*>/g, '').replace(/\*+/g, '').replace(/`/g, '')
    .replace(/\uE000(\d+)\uE001/g, (_, index) => escapes[Number(index)])
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ').trim();
}

function slug(text) {
  return plainText(text).toLowerCase().replace(/[^\p{L}\p{N}\s-]/gu, '').replace(/\s+/g, '-').replace(/^-+|-+$/g, '');
}

function headingLabel(text) {
  return plainText(text).replace(/^[\p{Emoji_Presentation}\p{Extended_Pictographic}\uFE0F\s]+/gu, '').trim();
}

function linkType(label, url) {
  // A README cross-reference can mention a paper without being a paper link.
  if (url.startsWith('#')) return 'related';
  if (/arxiv|paper|nature/i.test(label) || /arxiv\.org\/(abs|pdf|html)\//.test(url)) return 'paper';
  if (/github|code/i.test(label)) return 'code';
  if (/project/i.test(label)) return 'project';
  if (/report/i.test(label)) return 'report';
  if (/blog|知乎|official/i.test(label)) return 'blog';
  if (/data/i.test(label)) return 'data';
  if (/weight|hugging|model/i.test(label)) return 'model';
  return 'website';
}

function normalizeDate(value) {
  const match = value?.match(/^(\d{4})[-/](\d{2})[-/](\d{2})/);
  return match ? `${match[1]}-${match[2]}-${match[3]}` : null;
}

function idMonth(id) {
  const match = id?.match(/^(?:[a-z.-]+\/)?(\d{2})(\d{2})[.\d]/i);
  if (!match) return null;
  return `${Number(match[1]) > 80 ? '19' : '20'}${match[1]}-${match[2]}`;
}

function metadataIndex(audit) {
  const index = new Map();
  for (const key of ['original_id_metadata_checks', 'integrated_candidates', 'content_corrections', 'supplemental_reports']) {
    for (const record of audit[key] ?? []) if (record.id) index.set(record.id, { ...index.get(record.id), ...record });
  }
  for (const record of audit.identity_corrections ?? []) {
    if (record.correct_id) index.set(record.correct_id, { ...index.get(record.correct_id), ...record });
  }
  return index;
}

function tableCells(line) {
  return line.trim().slice(1, -1).split(/(?<!\\)\|/).map((cell) => cell.trim());
}

function sourceRecord(raw, context, metadata) {
  const { line, headings, collection, tableHeader, resourceType } = context;
  const isTable = raw.startsWith('|');
  const cells = isTable ? tableCells(raw) : [];
  const citation = isTable ? cells[0] : raw.replace(/^- /, '').split('\n')[0];
  const name = plainText(citation.match(LEADING_BOLD)?.[1] ?? citation);
  const ids = arxivIds(raw);
  const meta = metadata.get(ids[0]) ?? {};
  const linkRecords = markdownLinks(raw).filter((link) => /^(?:https?:\/\/|#)/.test(link.url));
  const allLinks = linkRecords.map(({ label, url }) => ({
    label: plainText(label),
    url: url.startsWith('#') ? `${REPOSITORY}/blob/main/README.md${url}` : url,
    type: linkType(label, url),
  })).filter((link, i, all) => all.findIndex((other) => other.url === link.url) === i);
  const links = {};
  for (const link of allLinks) if (!links[link.type]) links[link.type] = link.url;
  const cleanCitation = citation.slice(0, markdownLinks(citation)[0]?.start ?? citation.length);
  // Preserve names, authors, and publication details that are not part of the
  // shortened display name or the one-line editorial summary.
  const citationText = plainText(cleanCitation);
  // A quoted phrase inside a display name is not a separate paper title.
  // Tables already put the name/title in their first cell; only bullet
  // citations use a quoted title after the leading bold model name.
  const quote = isTable ? null : cleanCitation.replace(LEADING_BOLD, '').match(/[“"]([^“”"]{8,})[”"]/);
  let fullTitle = plainText(quote?.[1] ?? meta.title ?? name).replace(/\.$/, '');
  // Italicized book titles in the foundations have no arXiv metadata.
  if (!quote && !meta.title && collection === 'mind') {
    const book = cleanCitation.match(/\*([^*]+)\*\s+(?:Cambridge|Oxford|Harvard)/);
    if (book) fullTitle = book[1].replace(/\.$/, '');
  }
  const headingsForEntry = headings.filter(Boolean);
  const currentHeading = headingsForEntry.at(-1);
  const categoryPath = headingsForEntry.map(({ label }) => label);
  const sectionId = currentHeading.id;
  const annotations = raw.split('\n').filter((text) => /^\s*>/.test(text)).map((text) => text.replace(/^\s*>\s?/, ''));
  const domainAnnotation = annotations.find((text) => /^\*\*Domain:\*\*/.test(text));
  let description = plainText(annotations.filter((text) => text !== domainAnnotation).join(' '));
  let venue = '';
  let domain = plainText(domainAnnotation?.replace(/^\*\*Domain:\*\*\s*/, '') ?? '').replace(/\.$/, '');
  let sourceFields = [];
  let date = normalizeDate(meta.published);
  let citationYears = [...cleanCitation.matchAll(/\b((?:19|20)\d{2})\b/g)];
  if (isTable) {
    const columns = Object.fromEntries(tableHeader.map((key, i) => [plainText(key).toLowerCase(), cells[i]]));
    sourceFields = tableHeader.slice(1).map((label, offset) => ({
      label: plainText(label), value: plainText(cells[offset + 1] ?? ''),
    })).filter((field) => field.value && !/^links?$/i.test(field.label));
    venue = plainText(columns.venue ?? columns['author / source'] ?? '');
    description = plainText(columns['key contribution'] ?? columns.architecture ?? columns.scope ?? columns['metric focus'] ?? columns.focus ?? '');
    domain = plainText(columns.domain ?? '');
    if (resourceType === 'blogs') description = plainText(cells[0].replace(LEADING_BOLD, '').replace(/^\s*—\s*/, ''));
    citationYears = [...`${columns.venue ?? ''} ${columns.year ?? ''}`.matchAll(/\b((?:19|20)\d{2})\b/g)];
    date ||= normalizeDate(columns.year);
  } else {
    const italics = [...cleanCitation.replace(LEADING_BOLD, '').matchAll(/(?<![\\*])\*([^*]+)\*(?!\*)/g)].map((match) => match[1]);
    venue = plainText(italics.find((value) => !fullTitle.includes(value.replace(/\.$/, ''))) ?? '');
    if (!description && resourceType) description = plainText(cleanCitation.replace(LEADING_BOLD, '').replace(/^\s*—\s*/, ''));
  }
  const year = citationYears.length ? Number(citationYears.at(-1)[1]) : Number(date?.slice(0, 4) ?? idMonth(ids[0])?.slice(0, 4)) || null;
  const datePrecision = date ? 'day' : ids[0] ? 'month' : year ? 'year' : null;
  date ||= idMonth(ids[0]) ?? (year ? String(year) : null);
  const crossReference = raw.match(/\(see §([\d.]+)\)/);
  return {
    id: `${sectionId}-${ids[0]?.replace('/', '-') ?? hash(name).slice(0, 12)}`,
    name,
    fullTitle,
    year,
    date,
    datePrecision,
    description,
    citation: citationText,
    sourceFields,
    venue,
    domain,
    section: currentHeading.label,
    sectionId,
    collection,
    categoryPath,
    arxivIds: ids,
    links,
    allLinks,
    source: {
      url: `${REPOSITORY}/blob/main/README.md#L${line}`,
      sectionUrl: `${REPOSITORY}/blob/main/README.md#L${currentHeading.line}`,
      line,
      heading: currentHeading.label,
    },
    kind: crossReference ? 'cross-reference' : resourceType ?? (collection === 'benchmarks' ? 'benchmark' : collection === 'surveys' ? 'survey' : ids.length || links.paper ? 'paper' : 'reference'),
    ...(crossReference ? { referenceSection: crossReference[1] } : {}),
  };
}

function readStatistic(text, label) {
  const line = text.split('\n').find((line) => line.startsWith(`| ${label} |`));
  return line ? Number(tableCells(line)[1]) : null;
}

export function buildLibrary(readme, audit) {
  const metadata = metadataIndex(audit);
  const lines = readme.split('\n');
  const headings = [];
  const entries = [];
  const resources = [];
  const sections = new Map();
  let collection = null;
  let resourceType = null;
  let tableHeader = [];
  let introductionSection = null;
  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const heading = line.match(/^(#{2,4}) (.+)$/);
    if (heading) {
      const depth = heading[1].length - 2;
      const text = heading[2];
      const number = text.match(/^([0-3](?:\.\d+)*)\b/)?.[1];
      if (depth === 0) {
        collection = number ? COLLECTIONS[Number(number)][0]
          : text.includes('Surveys & Position Papers') ? 'surveys'
            : text.includes('Benchmarks & Evaluation') ? 'benchmarks' : null;
        resourceType = text.includes('Community Resources & Open Repositories') ? 'resource'
          : text.includes('Workshops & Challenges') ? 'workshop'
            : text.includes('Selected Technical Blogs & Reports') ? 'blogs'
              : text.includes('Labs, Companies & Open Stacks') ? 'organization' : null;
      }
      headings.length = depth + 1;
      const label = headingLabel(text);
      const id = number ? `section-${number.replaceAll('.', '-')}` : `${collection ?? resourceType ?? 'handbook'}-${slug(label)}`;
      headings[depth] = { id, label, line: index + 1 };
      tableHeader = [];
      introductionSection = collection || resourceType ? id : null;
      if (collection || resourceType) sections.set(id, {
        id, label, collection: collection ?? 'resources', path: headings.filter(Boolean).map(({ label }) => label),
        parentId: headings[depth - 1]?.id ?? null,
        count: 0,
        description: '',
        notes: [],
        source: { url: `${REPOSITORY}/blob/main/README.md#L${index + 1}`, line: index + 1 },
      });
      continue;
    }
    if (!collection && !resourceType) continue;
    // Editorial H5/H6 notes qualify the surrounding taxonomy rather than
    // creating another counted research section. Retain their introductory
    // prose and provenance, and stop before any paper or table begins.
    const noteHeading = line.match(/^#{5,6} (.+)$/);
    if (noteHeading) {
      introductionSection = null;
      const noteLine = index + 1;
      const paragraphs = [];
      let next = index + 1;
      for (; next < lines.length; next += 1) {
        const prose = lines[next].trim();
        if (!prose) continue;
        if (/^(?:#{1,6}\s|[-*+]\s|[-*_]{3,}$|\d+\.\s|\||<|!\[|\[⬆|```|~~~)/.test(prose) || /^\s/.test(lines[next])) break;
        paragraphs.push(prose.replace(/^>\s?/, ''));
      }
      const raw = [noteHeading[1], ...paragraphs].join('\n');
      const links = markdownLinks(raw).filter(({ url }) => /^(?:https?:\/\/|#)/.test(url)).map(({ label, url }) => ({
        label: plainText(label),
        url: url.startsWith('#') ? `${REPOSITORY}/blob/main/README.md${url}` : url,
        type: linkType(label, url),
      }));
      sections.get(headings.at(-1).id).notes.push({
        title: plainText(noteHeading[1]),
        text: plainText(paragraphs.join(' ')),
        line: noteLine,
        links,
        source: { url: `${REPOSITORY}/blob/main/README.md#L${noteLine}`, line: noteLine },
      });
      index = next - 1;
      continue;
    }
    // The organization directory also names seven groups in a prose paragraph.
    // Preserve exactly those names and representative models, with the original
    // paragraph as provenance; do not invent official websites or openness claims.
    if (resourceType === 'organization' && line.startsWith('Also tracked across the taxonomy,')) {
      introductionSection = null;
      for (const match of line.matchAll(/\*\*([^*]+)\*\*\s*\(([^)]+)\)/g)) {
        const entry = sourceRecord(`- **${match[1]}** — Representative entries: ${match[2]}.`, {
          line: index + 1, headings, collection: 'resources', tableHeader: [], resourceType,
        }, metadata);
        resources.push(entry);
        for (const current of headings.filter(Boolean)) sections.get(current.id).count += 1;
      }
      continue;
    }
    if (line.startsWith('|') && !line.startsWith('| **') && !/^\|\s*[-:]+/.test(line)) {
      tableHeader = tableCells(line);
      introductionSection = null;
      continue;
    }
    const eligibleBullet = line.startsWith('- **') && (['mind', 'generative', 'representational', 'agentic'].includes(collection) || resourceType === 'workshop');
    const eligibleTable = line.startsWith('| **') && (
      ['surveys', 'benchmarks'].includes(collection) ||
      ['section-2-1', 'section-3-1'].includes(headings.at(-1)?.id) || resourceType
    );
    if (!eligibleBullet && !eligibleTable) {
      // Only prose directly after this heading belongs to its introduction.
      // The first entry/table or next heading closes the window, so an entry's
      // indented summary can never become the section's inclusion criteria.
      const prose = line.trim();
      if (introductionSection && prose && !/^\s/.test(line)
        && !/^(?:[-*_]{3,}$|<|!\[|\||\[⬆|```)/.test(prose)) {
        const text = plainText(prose.replace(/^>\s?/, ''));
        if (text) {
          const section = sections.get(introductionSection);
          section.description = [section.description, text].filter(Boolean).join(' ');
          section.descriptionSource ??= { url: `${REPOSITORY}/blob/main/README.md#L${index + 1}`, line: index + 1 };
        }
      }
      continue;
    }
    introductionSection = null;
    let raw = line;
    if (eligibleBullet) {
      let next = index + 1;
      while (next < lines.length && (lines[next].trim() === '' || /^\s+>/.test(lines[next]))) {
        if (/^\s+>/.test(lines[next])) raw += `\n${lines[next]}`;
        next += 1;
      }
    }
    const entry = sourceRecord(raw, {
      line: index + 1, headings, collection: collection ?? 'resources', tableHeader, resourceType,
    }, metadata);
    (collection ? entries : resources).push(entry);
    for (const current of headings.filter(Boolean)) sections.get(current.id).count += 1;
  }
  // Four editorial "see §..." rows are intentional memberships. Keep their
  // provenance and kind while giving readers the same usable links as the paper.
  for (const entry of entries.filter((entry) => entry.kind === 'cross-reference')) {
    const targets = entries.filter((other) => other.kind !== 'cross-reference'
      && other.sectionId === `section-${entry.referenceSection.replaceAll('.', '-')}`
      && other.name.includes(entry.name));
    if (targets.length !== 1) throw new Error(`Cannot unambiguously resolve cross-reference ${entry.name} → §${entry.referenceSection}`);
    const target = targets[0];
    for (const key of ['fullTitle', 'year', 'date', 'datePrecision', 'venue', 'arxivIds', 'links', 'allLinks']) entry[key] = target[key];
    entry.relatedEntryId = target.id;
    if (!entry.description) entry.description = target.description;
  }
  const used = new Map();
  for (const entry of [...entries, ...resources]) {
    const occurrence = used.get(entry.id) ?? 0;
    used.set(entry.id, occurrence + 1);
    if (occurrence) entry.id += `-${occurrence + 1}`;
  }
  const allIds = arxivIds(readme);
  const indexedIds = distinct([...entries, ...resources].flatMap((entry) => entry.arxivIds));
  const stats = {
    uniqueArxivPapers: allIds.length,
    curatedEntries: entries.length,
    benchmarks: entries.filter((entry) => entry.collection === 'benchmarks').length,
    surveys: entries.filter((entry) => entry.collection === 'surveys').length,
    codeEntries: readStatistic(readme, 'Entries with official code (`GitHub` badges)'),
    projectEntries: readStatistic(readme, 'Official project pages (`Project` badges)'),
    taxonomySections: readStatistic(readme, 'Taxonomy sections and subsections (numbered headings in §0–3)'),
    resources: resources.length,
    organizations: resources.filter((entry) => entry.kind === 'organization').length,
    crossReferences: entries.filter((entry) => entry.kind === 'cross-reference').length,
    indexedUniqueArxivPapers: indexedIds.length,
  };
  const library = {
    schemaVersion: 1,
    updatedAt: audit.date,
    latestPaperDate: audit.latest_submission_in_search_snapshots,
    repository: REPOSITORY,
    sourceReadmeSha256: hash(readme),
    stats,
    years: distinct(entries.map((entry) => entry.year).filter(Boolean)).sort((a, b) => b - a),
    collections: COLLECTIONS.map(([id, label]) => ({ id, label, count: entries.filter((entry) => entry.collection === id).length })),
    sections: [...sections.values()],
    entries,
    resources,
  };
  validateLibrary(library, readme);
  return library;
}

export function validateLibrary(library, readme) {
  const documentedEntries = readStatistic(readme, 'Total curated entries (taxonomy bullets + §2.1 / §3.1 / Surveys / Benchmarks table rows)');
  if (library.entries.length !== documentedEntries) throw new Error(`Curated entry coverage: ${library.entries.length} exported; README reports ${documentedEntries}`);
  const sourceIds = arxivIds(readme).sort();
  const indexedIds = distinct([...library.entries, ...library.resources].flatMap((entry) => entry.arxivIds)).sort();
  if (JSON.stringify(sourceIds) !== JSON.stringify(indexedIds)) {
    throw new Error(`arXiv coverage mismatch. Missing: ${sourceIds.filter((id) => !indexedIds.includes(id)).join(', ')}. Extra: ${indexedIds.filter((id) => !sourceIds.includes(id)).join(', ')}`);
  }
  const records = [...library.entries, ...library.resources];
  if (new Set(records.map((entry) => entry.id)).size !== records.length) throw new Error('Duplicate entry IDs');
  for (const entry of records) {
    if (!entry.name || !entry.fullTitle || !entry.sectionId) throw new Error(`Incomplete metadata at ${entry.source.url}`);
    for (const { url } of entry.allLinks) {
      const parsed = new URL(url);
      if (!['https:', 'http:'].includes(parsed.protocol) || url.includes('img.shields.io') || /[\s\[\]]/.test(url)) {
        throw new Error(`Malformed source link: ${url}`);
      }
    }
    if (entry.date && !/^\d{4}(?:-\d{2}(?:-\d{2})?)?$/.test(entry.date)) throw new Error(`Malformed date on ${entry.id}`);
    if (entry.datePrecision === 'day' && Number.isNaN(Date.parse(entry.date))) throw new Error(`Invalid calendar date on ${entry.id}`);
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const readme = fs.readFileSync(path.join(ROOT, 'README.md'), 'utf8');
  const auditFiles = fs.readdirSync(path.join(ROOT, 'curation')).filter((name) => /^\d{4}-\d{2}-\d{2}\.json$/.test(name)).sort();
  const audit = JSON.parse(fs.readFileSync(path.join(ROOT, 'curation', auditFiles.at(-1)), 'utf8'));
  const library = buildLibrary(readme, audit);
  const output = `${JSON.stringify(library)}\n`;
  const destination = path.join(ROOT, 'site/data/library.json');
  if (process.argv.includes('--check')) {
    if (!fs.existsSync(destination) || fs.readFileSync(destination, 'utf8') !== output) {
      console.error('Website data is stale. Run node scripts/build-site-data.mjs.');
      process.exitCode = 1;
    }
  } else {
    fs.mkdirSync(path.dirname(destination), { recursive: true });
    fs.writeFileSync(destination, output);
  }
  if (!process.exitCode) console.log(`Website library: ${library.stats.curatedEntries} curated entries, ${library.stats.resources} resources, ${library.stats.uniqueArxivPapers} distinct arXiv IDs; complete and deterministic.`);
}
