import {normalize} from './library.js';
const input = document.querySelector('#resource-search');
const entries = [...document.querySelectorAll('.resource-directory-entry')];
const groups = [...document.querySelectorAll('.resource-group')];
function search() {
  const tokens = normalize(input.value).split(' ').filter(Boolean);
  let count = 0;
  for (const entry of entries) {
    const text = normalize(entry.textContent + ' ' + [...entry.querySelectorAll('a')].map(a=>a.href).join(' '));
    entry.hidden = !tokens.every(token=>text.includes(token));
    if (!entry.hidden) count++;
  }
  for (const group of groups) group.hidden = ![...group.querySelectorAll('article')].some(entry=>!entry.hidden);
  document.querySelector('#resource-count').textContent = `${count} ${count === 1 ? 'resource' : 'resources'}`;
  document.querySelector('#resource-empty').hidden = count !== 0;
  const url = new URL(location.href);
  if (input.value) url.searchParams.set('q',input.value); else url.searchParams.delete('q');
  history.replaceState({},'',url.pathname + url.search + url.hash);
}
input.value = new URLSearchParams(location.search).get('q')?.slice(0,300) || '';
window.addEventListener('popstate',()=>{
  input.value = new URLSearchParams(location.search).get('q')?.slice(0,300) || '';
  search();
});
input.addEventListener('input',search);
document.querySelector('#resource-search-form').addEventListener('submit',event=>{event.preventDefault();search();});
document.querySelector('#clear-resource-search').addEventListener('click',()=>{input.value='';search();input.focus();});
search();
