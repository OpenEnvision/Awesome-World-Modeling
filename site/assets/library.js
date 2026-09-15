export const PAGE_SIZE = 12;
export const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const normalize = value => String(value ?? '').normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
export function safeURL(value) {
  try {
    const url = new URL(value);
    return ['https:', 'http:'].includes(url.protocol) ? value : '';
  } catch { return ''; }
}
export function resourceKind(link) {
  // Several README weight releases use the generic Project badge. Their actual
  // destination is the reliable signal for the Hugging Face filter.
  try { if (/(^|\.)huggingface\.co$/i.test(new URL(link.url).hostname)) return 'hf'; } catch {}
  if (link.type) return link.type === 'huggingface' ? 'hf' : link.type === 'report' ? 'paper' : link.type;
  if (/code|implementation/i.test(link.label)) return 'code';
  if (/paper|arxiv|report/i.test(link.label)) return 'paper';
  return 'other';
}
export function selectEntries(catalog, state, saved = new Set()) {
  const query = String(state.q ?? '').replace(/(?:https?:\/\/)?(?:www\.)?arxiv\.org\/(?:abs|pdf|html)\/([a-z.-]+\/\d{7}|\d{4}\.\d{4,5})(?:v\d+)?(?:\.pdf)?/gi, '$1');
  const tokens = normalize(query).split(' ').filter(Boolean);
  const found = catalog.entries.filter(e => {
    if (state.collection && e.collection !== state.collection) return false;
    if (state.section && !e.ancestors.includes(state.section)) return false;
    if (state.year && String(e.year) !== state.year) return false;
    if (state.resource && !e.resources.some(r => resourceKind(r) === state.resource)) return false;
    if (state.saved && !saved.has(e.id)) return false;
    const text = normalize([e.name, e.title, ...e.arxivIds, e.notes, e.tasks, e.venue, e.collection, ...e.path, ...e.fields.map(f => f.value)].join(' '));
    return tokens.every(t => text.includes(t));
  });
  const unknownDateLast = (a,b) => Number(!a.year || !a.date)-Number(!b.year || !b.date);
  if (state.sort === 'newest') found.sort((a,b) => unknownDateLast(a,b) || String(b.date ?? '').localeCompare(String(a.date ?? '')));
  if (state.sort === 'oldest') found.sort((a,b) => unknownDateLast(a,b) || String(a.date ?? '').localeCompare(String(b.date ?? '')));
  if (state.sort === 'az') found.sort((a,b) => a.title.localeCompare(b.title, 'en', {numeric:true}));
  return found;
}
export function readState(search, catalog) {
  const p = new URLSearchParams(search);
  const collection = catalog.collections.some(c => c.id === p.get('collection')) ? p.get('collection') : '';
  const section = catalog.sections.some(s => s.id === p.get('section') && (!collection || s.collection === collection)) ? p.get('section') : '';
  return {q: (p.get('q') ?? '').slice(0, 300), collection: collection || catalog.sections.find(s=>s.id===section)?.collection || '', section,
    year: catalog.years.map(String).includes(p.get('year')) ? p.get('year') : '',
    resource: ['paper','code','hf','project'].includes(p.get('resource')) ? p.get('resource') : '',
    sort: ['readme','newest','oldest','az'].includes(p.get('sort')) ? p.get('sort') : 'readme',
    page: Math.max(1, Math.min(10000, Number.parseInt(p.get('page'), 10) || 1)), saved: p.get('saved') === '1'};
}
export function stateSearch(state, entry = '') {
  const p = new URLSearchParams();
  for (const key of ['q','collection','section','year','resource']) if (state[key]) p.set(key, state[key]);
  if (state.sort !== 'readme') p.set('sort', state.sort);
  if (state.page > 1) p.set('page', state.page);
  if (state.saved) p.set('saved', '1');
  if (entry) p.set('entry', entry);
  return p.size ? `?${p}` : '';
}
export const arrow = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10"/></svg>';
export const bookmark = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4h12v17l-6-4-6 4z"/></svg>';
const paper = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h8l4 4v14H6zM14 3v5h4M9 12h6M9 16h6"/></svg>';
const code = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 7-5 5 5 5m8-10 5 5-5 5M14 4l-4 16"/></svg>';
export function resourceHTML(r) {
  const url = safeURL(r.url);
  if (!url) return '';
  const kind = resourceKind(r);
  return `<a class="resource" href="${esc(url)}" target="_blank" rel="noopener noreferrer">${kind === 'paper' ? paper : kind === 'code' ? code : ''}<span>${esc(r.label === 'HF' ? 'Hugging Face' : r.label)}</span>${arrow}</a>`;
}
export function rowHTML(e, saved = false) {
  const shortName = e.name || e.title;
  return `<article class="entry" data-id="${esc(e.id)}">
    <div class="entry-meta"><span class="entry-year">${esc(e.year ?? '—')}</span><span>${esc(e.path.at(-1) ?? e.collection)}</span>${e.kind === 'Analysis' ? '<span class="analysis-label">Analysis</span>' : ''}</div>
    <div class="entry-main"><button class="entry-title" data-detail="${esc(e.id)}" title="${esc(e.title)}">${esc(shortName)}</button><p>${esc(e.notes || e.title)}</p><span class="venue">${esc(e.venue ? `${e.venue}${e.year && !e.venue.includes(String(e.year)) ? ` ${e.year}` : ''}` : e.kind === 'benchmark' ? 'Benchmark' : e.year ? String(e.year) : 'See source for details')}</span></div>
    <div class="entry-resources">${e.resources.length ? e.resources.slice(0,3).map(resourceHTML).join('') : resourceHTML({label:'Source',url:e.sourceUrl})}${e.resources.length > 3 ? `<button class="more-links" data-detail="${esc(e.id)}">+${e.resources.length-3} more</button>` : ''}</div>
    <button class="save-button ${saved ? 'is-saved' : ''}" data-save="${esc(e.id)}" aria-pressed="${saved}" aria-label="${saved ? 'Unsave' : 'Save'} ${esc(shortName)}" title="${saved ? 'Remove from saved' : 'Save for later'}">${bookmark}</button>
  </article>`;
}
