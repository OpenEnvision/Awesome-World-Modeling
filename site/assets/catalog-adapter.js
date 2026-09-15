// Keep the generated research data independent of the Library presentation.
const descriptions = {
  mind: ['Mind World Models', 'Cognitive foundations and the formative ideas behind computational world models.'],
  generative: ['Generative World Models', 'Observable futures across games, driving, robotics, 3D worlds, and physical systems.'],
  representational: ['Representational World Models', 'Latent dynamics and structured representations of how the world changes.'],
  agentic: ['Agentic World Models', 'Planning, control, learning, and evaluation through imagined outcomes.'],
  surveys: ['Surveys & Position Papers', 'Overviews, definitions, and perspectives across world model research.'],
  benchmarks: ['Benchmarks & Evaluation', 'Tasks and protocols for evaluating prediction, interaction, and physical consistency.'],
};
export const cleanHeading = value => value.replace(/^\d+(?:\.\d+)*(?:\s*[·.]\s*|\s+)/u, '').replace(/[\p{Extended_Pictographic}\uFE0F\u200D]/gu, '').trim();
export function adaptCatalog(data) {
  const collectionIds = new Set(data.collections.map(c => c.id));
  const roots = new Set(data.sections.filter(s => !s.parentId).map(s => s.id));
  // Keep research roots addressable by URL. Resource-directory sections belong
  // to resources.html and must not create a nonexistent research collection.
  const sections = data.sections.filter(s => collectionIds.has(s.collection)).map(s => ({
    ...s, label: cleanHeading(s.label), parent: roots.has(s.parentId) ? s.collection : s.parentId,
  }));
  // Single-section collections still need their entries to be discoverable by URL.
  const entries = data.entries.map(e => {
    const ancestors = [];
    let section = data.sections.find(s => s.id === e.sectionId);
    while (section) { ancestors.push(section.id); section = data.sections.find(s => s.id === section.parentId); }
    const resources = e.allLinks.map(r => ({...r, label: r.type === 'paper' && /^(arxiv|paper)$/i.test(r.label) ? 'Paper' : r.type === 'code' && /^(github|code)$/i.test(r.label) ? 'Code' : r.label}));
    const summaryLabel = e.sourceFields?.find(f => /^(key contribution|architecture|scope|metric focus|focus)$/i.test(f.label))?.label || 'Summary';
    return {...e, title:e.fullTitle || e.name, notes:e.description, tasks:e.domain, ancestors,
      path:e.categoryPath.slice(e.categoryPath.length > 1 ? 1 : 0).map(cleanHeading), resources,
      sourceUrl:e.source.url,
      fields:[{label:'Name',value:e.name},{label:summaryLabel,value:e.description},{label:'Venue',value:e.venue},
        {label:'First submitted',value:e.datePrecision === 'day' ? e.date : ''},
        {label:'Year',value:e.year},{label:'Domain',value:e.domain},{label:'arXiv',value:e.arxivIds.join(', ')},
        {label:'Source citation',value:e.citation}],
    };
  });
  return {...data, entries, sections, collections:data.collections.map(c => ({...c,fullName:descriptions[c.id][0],description:descriptions[c.id][1]}))};
}
