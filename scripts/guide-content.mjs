// Render the README's editorial guide without maintaining a second copy of it.
import { Marked } from './vendor/marked.mjs';
import { plainText } from './build-site-data.mjs';

const REPOSITORY = 'https://github.com/OpenEnvision/Awesome-World-Modeling';
const CHAPTERS = [
  ['Start Here', 'start-here', 'Start here'],
  ['Definition and Scope', 'definition-and-scope', 'Start here'],
  ['How to Use This List', 'how-to-use', 'Start here'],
  ['Taxonomic Overview', 'taxonomic-overview', 'Start here'],
  ['Reading Roadmap', 'reading-roadmap', 'Research practice'],
  ['Historical Timeline', 'historical-timeline', 'Research practice'],
  ['Architecture Cheat Sheet', 'architecture-cheat-sheet', 'Research practice'],
  ['Open Problems', 'open-problems', 'Research practice'],
  ['Evaluation Dimensions', 'evaluation-dimensions', 'Research practice'],
  ['Glossary', 'glossary', 'Reference'],
  ['FAQ', 'faq', 'Reference'],
  ['News', 'news', 'About the list'],
  ['List Statistics', 'list-statistics', 'About the list'],
  ['Citation', 'citation', 'About the list'],
  ['Contribution Guide', 'contribution-guide', 'About the list'],
];
const KNOWN_IMAGES = new Set(['image/lecun_wm.png', 'image/world_qa.png', 'image/generative_wm.png']);
const escape = value => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
const cleanTitle = value => plainText(value).replace(/^[\p{Extended_Pictographic}\p{Emoji_Presentation}\uFE0F\u200D\s]+/gu, '').trim();
const key = value => cleanTitle(value).toLowerCase().replace(/[^\p{L}\p{N}]/gu, '');
const idSlug = value => cleanTitle(value).toLowerCase().replace(/[^\p{L}\p{N}\s-]/gu, '').replace(/\s+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');

// Scan heading lines outside fenced code. Explicit legacy anchors belong to
// the next heading, and remain useful even when GitHub changes its slug rules.
function sourceHeadings(readme) {
  const lines = readme.split('\n');
  const headings = [];
  let fence = null;
  let aliases = [];
  for (const [index, line] of lines.entries()) {
    const marker = line.match(/^\s{0,3}(`{3,}|~{3,})/);
    if (marker) {
      if (!fence) fence = marker[1];
      else if (marker[1][0] === fence[0] && marker[1].length >= fence.length) fence = null;
      continue;
    }
    if (fence) continue;
    const anchor = line.match(/^\s*<a\s+id=["']([^"']+)["']\s*><\/a>\s*$/);
    if (anchor) { aliases.push(anchor[1]); continue; }
    const match = line.match(/^(#{1,6})\s+(.+?)\s*#*\s*$/);
    if (match) {
      headings.push({ depth: match[1].length, text: match[2], title: cleanTitle(match[2]), line: index + 1, aliases });
      aliases = [];
    } else if (line.trim() && !/^---+$/.test(line.trim())) aliases = [];
  }
  return { lines, headings };
}

function chapterSources(readme, headings, lines) {
  return CHAPTERS.map(([title, id, group]) => {
    const heading = headings.find(item => item.depth === 2 && item.title === title);
    if (!heading) throw new Error(`README guide chapter is missing: ${title}`);
    const next = headings.find(item => item.depth === 2 && item.line > heading.line);
    const source = lines.slice(heading.line, next ? next.line - 1 : lines.length).join('\n');
    return { id, title, group, sourceLine: heading.line, sourceUrl: `${REPOSITORY}/blob/main/README.md#L${heading.line}`, source, endLine: next?.line ?? lines.length + 1 };
  });
}

function linkIndex(headings, chapters, library) {
  const destinations = new Map();
  const headingIds = new Map();
  const seen = new Map();
  let major = null;
  for (const heading of headings) {
    if (heading.depth <= 2) major = heading;
    const chapter = chapters.find(item => heading.line >= item.sourceLine && heading.line < item.endLine);
    let destination;
    if (chapter) {
      let id = chapter.id;
      if (heading.line !== chapter.sourceLine) {
        const base = `${chapter.id}-${idSlug(heading.title)}`;
        const occurrence = seen.get(base) ?? 0;
        seen.set(base, occurrence + 1);
        id = occurrence ? `${base}-${occurrence + 1}` : base;
      }
      headingIds.set(heading.line, id);
      destination = `./guide.html#${id}`;
    } else {
      const number = heading.title.match(/^([0-3](?:\.\d+)*)\b/)?.[1];
      const sectionId = number ? `section-${number.replaceAll('.', '-')}` : null;
      const section = sectionId ? library.sections.find(item => item.id === sectionId)
        : library.sections.find(item => key(item.label) === key(heading.title));
      if (section) {
        destination = section.collection === 'resources' ? `./resources.html#${section.id}`
          : heading.depth === 2 ? `./?collection=${section.collection}#library`
            : `./?section=${section.id}#library`;
      } else if (/Workshops & Challenges|Community Resources & Open Repositories|Labs, Companies & Open Stacks|Selected Technical Blogs & Reports/.test(major?.title ?? '')) {
        destination = './resources.html';
      }
    }
    if (destination) {
      // Comparing letters and digits also recognizes old hand-authored GitHub
      // anchors, whose emoji and dash counts differ from generated headings.
      if (!destinations.has(key(heading.title))) destinations.set(key(heading.title), destination);
      for (const alias of heading.aliases) destinations.set(key(alias), destination);
    }
  }
  return { destinations, headingIds, sectionIds: new Set(library.sections.map(section => section.id)) };
}

function resolveLink(href, destinations) {
  href = String(href ?? '').trim();
  if (!href || /[\u0000-\u001F\u007F]/.test(href)) return null;
  if (href.startsWith('#')) {
    let fragment;
    try { fragment = decodeURIComponent(href.slice(1)); } catch { return null; }
    return destinations.get(key(fragment)) ?? `${REPOSITORY}/blob/main/README.md#${encodeURI(fragment)}`;
  }
  const oldRepository = /^https:\/\/github\.com\/OpenEnvision\/Awesome-World-(?:Models|Modeling)(?=[/#?]|$)/i;
  if (oldRepository.test(href)) {
    href = href.replace(oldRepository, REPOSITORY);
    const readmeFragment = href.match(/^https:\/\/github\.com\/OpenEnvision\/Awesome-World-Modeling(?:\/(?:blob\/[^/]+\/README\.md)?)?#(.+)$/i);
    if (readmeFragment) return resolveLink(`#${readmeFragment[1]}`, destinations);
  }
  if (/^https?:\/\//i.test(href)) {
    try { return new URL(href).href; } catch { return null; }
  }
  if (/^[a-z][a-z0-9+.-]*:/i.test(href) || href.startsWith('//') || href.startsWith('/')) return null;
  const file = href.replace(/^\.\//, '');
  if (/(?:^|\/)\.\.(?:\/|$)/.test(file)) return null;
  const readme = file.match(/^README\.md(?:#(.*))?$/i);
  if (readme) return readme[1] ? resolveLink(`#${readme[1]}`, destinations) : './guide.html';
  return `${REPOSITORY}/blob/main/${file}`;
}

function renderChapter(chapter, headings, index) {
  const subheadings = headings.filter(heading => heading.line > chapter.sourceLine && heading.line < chapter.endLine);
  let headingOffset = 0;
  let tableOffset = 0;
  const imageHTML = (href, alt, title) => {
    const source = String(href ?? '').replace(/^\.\//, '');
    if (!KNOWN_IMAGES.has(source)) return `<span class="guide-image-label">${escape(alt ?? '')}</span>`;
    return `<img src="./${escape(source)}" alt="${escape(alt ?? '')}" loading="lazy" decoding="async"${title ? ` title="${escape(title)}"` : ''}>`;
  };
  const marked = new Marked({ gfm: true, async: false, renderer: {
    heading(token) {
      const sourceHeading = subheadings[headingOffset++];
      const id = index.headingIds.get(sourceHeading?.line) ?? `${chapter.id}-${idSlug(token.text)}`;
      const depth = Math.max(3, token.depth);
      return `<h${depth} id="${escape(id)}">${this.parser.parseInline(token.tokens)}</h${depth}>\n`;
    },
    link(token) {
      const text = this.parser.parseInline(token.tokens);
      let url = resolveLink(token.href, index.destinations);
      // Several README links deliberately target a broad parent while their
      // labels name an exact subsection. The website can open that exact view.
      const namedSection = plainText(token.text).match(/^§([0-3](?:\.\d+)+)$/)?.[1];
      const sectionId = namedSection && `section-${namedSection.replaceAll('.', '-')}`;
      if (token.href.startsWith('#') && sectionId && index.sectionIds.has(sectionId)) url = `./?section=${sectionId}#library`;
      if (!url) return text;
      return `<a href="${escape(url)}"${token.title ? ` title="${escape(token.title)}"` : ''}${url.startsWith('https://') || url.startsWith('http://') ? ' target="_blank" rel="noopener noreferrer"' : ''}>${text}</a>`;
    },
    image(token) { return imageHTML(token.href, token.text, token.title); },
    hr() { return ''; },
    html(token) {
      if (/^\s*<!--[\s\S]*-->\s*$/.test(token.text)) return '';
      if (/^\s*<a\s+id=["'][a-zA-Z0-9_-]+["']\s*><\/a>\s*$/.test(token.text)) return '';
      const image = token.text.trim().match(/^<img\s+([^<>]+)>$/i);
      if (image) {
        const src = image[1].match(/\bsrc=["']([^"']*)["']/i)?.[1];
        const alt = image[1].match(/\balt=["']([^"']*)["']/i)?.[1] ?? '';
        if (KNOWN_IMAGES.has(src)) return imageHTML(src, alt);
      }
      return escape(token.text);
    },
    text(token) {
      // Marked marks text inside raw <script>/<style> as already escaped. It
      // cannot be trusted here because unknown HTML is deliberately inert.
      return token.tokens ? this.parser.parseInline(token.tokens) : escape(token.text);
    },
    table(token) {
      const header = token.header.map(cell => `<th scope="col">${this.parser.parseInline(cell.tokens)}</th>`).join('');
      const rows = token.rows.map(row => `<tr>${row.map(cell => `<td>${this.parser.parseInline(cell.tokens)}</td>`).join('')}</tr>`).join('\n');
      const name = `${chapter.title}, table ${++tableOffset}`;
      return `<div class="guide-table-wrap" role="region" tabindex="0" aria-label="${escape(name)}"><table><thead><tr>${header}</tr></thead><tbody>${rows}</tbody></table></div>\n`;
    },
  } });
  const tokens = marked.lexer(chapter.source);
  // Work on tokens, so a literal README example inside fenced code stays exact.
  const visible = tokens.filter(token => !(token.type === 'paragraph' && (
    /^\[⬆ Back to Top\]\(#-table-of-contents\)\s*$/.test(token.raw.trim()) ||
    /^<a\s+id=["'][a-zA-Z0-9_-]+["']\s*><\/a>\s*$/.test(token.raw.trim())
  )));
  return marked.parser(visible);
}

export function buildGuide(readme, library) {
  const { lines, headings } = sourceHeadings(readme);
  const sources = chapterSources(readme, headings, lines);
  const index = linkIndex(headings, sources, library);
  const source = id => sources.find(chapter => chapter.id === id)?.source ?? '';
  const lexer = new Marked({ gfm: true });
  const rows = id => lexer.lexer(source(id)).filter(token => token.type === 'table').reduce((count, token) => count + token.rows.length, 0);
  const counts = {
    chapters: sources.length,
    readingTracks: (source('reading-roadmap').match(/^### Track \d/gm) ?? []).length,
    timelineMilestones: rows('historical-timeline'),
    architectureFamilies: rows('architecture-cheat-sheet'),
    openProblems: (source('open-problems').match(/^\d+\. \*\*/gm) ?? []).length,
    evaluationDimensions: rows('evaluation-dimensions'),
    glossaryTerms: (source('glossary').match(/^- \*\*/gm) ?? []).length,
    faqEntries: (source('faq').match(/^\*\*Q\d+\./gm) ?? []).length,
  };
  return {
    chapters: sources.map(({ source, endLine, ...chapter }) => ({ ...chapter, html: renderChapter({ ...chapter, source, endLine }, headings, index) })),
    counts,
    updatedAt: library.updatedAt,
    repository: REPOSITORY,
  };
}
