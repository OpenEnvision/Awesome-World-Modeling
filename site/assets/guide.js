import {normalize} from './library.js';

const input = document.querySelector('#guide-search');
const chapters = [...document.querySelectorAll('.guide-chapter')];
const links = [...document.querySelectorAll('.guide-contents a')];
const status = document.querySelector('#guide-search-status');
const initial = new URLSearchParams(location.search).get('q')?.slice(0,300) || '';
function search() {
  const terms = normalize(input.value).split(' ').filter(Boolean);
  let count = 0;
  for (const chapter of chapters) {
    chapter.hidden = !terms.every(term=>normalize(chapter.textContent).includes(term));
    if (!chapter.hidden) count++;
  }
  for (const link of links) link.hidden = document.getElementById(link.hash.slice(1))?.hidden || false;
  for (const group of document.querySelectorAll('.guide-nav-group')) group.hidden = [...group.querySelectorAll('a')].every(a=>a.hidden);
  status.textContent = terms.length ? `${count} ${count===1?'chapter':'chapters'} matching “${input.value}”` : `${chapters.length} chapters · From the curated README`;
  document.querySelector('#guide-empty').hidden = count > 0;
  document.querySelector('#guide-reset').hidden = !input.value;
  const url = new URL(location.href);
  if (input.value) url.searchParams.set('q',input.value); else url.searchParams.delete('q');
  history.replaceState({},'',url.pathname + url.search + url.hash);
}
input.value = initial;
window.addEventListener('popstate',()=>{
  input.value = new URLSearchParams(location.search).get('q')?.slice(0,300) || '';
  search();
});
input.addEventListener('input',search);
document.querySelector('#guide-search-form').addEventListener('submit',event=>{event.preventDefault();search();});
for (const button of document.querySelectorAll('[data-guide-reset]')) button.addEventListener('click',()=>{input.value='';search();input.focus();});
document.addEventListener('click',event=>{
  const link = event.target.closest('a');
  if (!link || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const url = new URL(link.href);
  if (url.pathname !== location.pathname || !url.hash) return;
  const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
  if (!target) return;
  // A guide link must still work when search has hidden its chapter.
  if (target.closest('.guide-chapter')?.hidden) {input.value='';search();}
});
const toc = document.querySelector('#guide-toc');
document.querySelector('#guide-toc-toggle').addEventListener('click',event=>{
  const open = toc.classList.toggle('is-open');
  event.currentTarget.setAttribute('aria-expanded',String(open));
});
for (const link of links) link.addEventListener('click',()=>{
  toc.classList.remove('is-open');
  document.querySelector('#guide-toc-toggle').setAttribute('aria-expanded','false');
});
search();
