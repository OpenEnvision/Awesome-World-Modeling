# Contributing to Awesome World Models

Thanks for helping keep this list useful. The goal is not to collect every adjacent AI paper, but to maintain a high-signal map of world model research.

## Scope

An entry is a strong fit when it does at least two of the following:

- models state or latent state;
- predicts state evolution under action, intervention, waiting, or imagination;
- supports planning, policy learning, evaluation, controllable simulation, or executable rollouts;
- contributes a benchmark, dataset, open-source toolkit, survey, or position paper directly about world models.

## What We Prefer

- Primary sources: arXiv, conference/journal pages, official project pages, official repositories, datasets, and leaderboards.
- Papers with explicit dynamics, counterfactual, action-conditioned, or future-prediction components.
- Resources that make the field easier to reproduce, compare, or evaluate.
- Concise one-line descriptions explaining why the entry matters.

## What We Deprioritize

- Generic video generation, VLA, perception, segmentation, forecasting, or autonomous driving papers without a clear world-modeling role.
- Duplicate entries already present under another title.
- Unofficial code when official code exists.
- Marketing posts without technical substance or primary-source links.

## Entry Format

Use the existing style in `README.md` whenever possible:

```markdown
- **Paper / Project Name** — "Full Paper Title." *Venue* YEAR.
  [![arXiv](https://img.shields.io/badge/arXiv-XXXX.XXXXX-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/XXXX.XXXXX)
  [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://...)
  [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/...)
```

For table sections, keep the current columns and add only one concise scope or metric phrase.

## Badge Conventions

- `arXiv`: arxiv.org papers. Include the arXiv ID in the badge label.
- `GitHub`: official open-source code or official project repository.
- `Project`: official project page.
- `HuggingFace`: official model, dataset, space, or leaderboard.
- `Blog`: technical blog post or official research-lab write-up.
- `Paper`: non-arXiv paper, DOI, OpenReview, or proceedings page.

## Pull Request Checklist

Before opening a PR, please check:

- The entry is within scope.
- The paper/resource is not already listed under another name.
- Links point to primary sources when available.
- The entry is placed in the most appropriate taxonomy section.
- The title, venue/year, and arXiv ID are correct.
- The description is factual and does not overclaim.
- Local lint checks pass when possible:

```bash
node scripts/check-arxiv-duplicates.mjs README.md
npx markdown-link-check -q -c .github/markdown-link-check.json README.md
npx awesome-lint
```

If a paper intentionally appears in more than one section, add its arXiv ID to `.github/arxiv-duplicate-allowlist.json` with a short reason.

`awesome-lint` and Markdown link checking are currently advisory in CI because the repository uses long taxonomy tables and many external research links. The custom arXiv duplicate check is strict.

## Taxonomy Changes

Open a PR for taxonomy changes only when the change improves navigation for multiple entries. Please describe why the existing taxonomy is insufficient and which entries will move.

## License

By contributing, you agree that your contributions are released under the repository license, CC0-1.0.
