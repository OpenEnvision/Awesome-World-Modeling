# OpenEnvision World Modeling Library

The website presents the curated README as an OpenEnvision Library collection. It uses the typography, colors, navigation, and flat research-list layout of [Awesome Multimodal Modeling](https://openenvision.github.io/Awesome-Multimodal-Modeling/), with original world-model diagrams and a separate searchable resource directory.

## Local development

Node.js 22 or later is required. There are no package dependencies to install.

```sh
npm run dev
```

Open `http://127.0.0.1:4173/Awesome-World-Modeling/`. The server binds to the local machine only. To rebuild after an edit, run `npm run build` and reload the browser. `npm run preview` serves an existing build.

## Content and validation

- Edit research entries in `README.md`.
- `scripts/build-site-data.mjs` derives `site/data/library.json` from README rows and the verified arXiv metadata in `curation/2026-09-15.json`.
- `site/index.html` is the homepage template. `site/assets/` contains styles, browser logic, and original SVG diagrams.
- `scripts/build-site.mjs` generates `dist/`, including an initial page of server-rendered entries, searchable resources, and a 404 page. All asset paths support the repository's GitHub Pages subpath.
- The six research collections preserve intentional cross-listings. The separate resource directory includes workshops, tools, datasets, organizations, and technical reports. The 1,492 arXiv count refers to distinct IDs across both surfaces, not 1,492 unique models.
- Bookmarks stay in browser storage under a World Modeling-specific key. No account or server is needed.

```sh
npm run build
npm test
node scripts/test-site-data.mjs
node scripts/build-site-data.mjs --check
```

The checks cover exact README row coverage, arXiv coverage, duplicate policy, derived statistics, deterministic generation, URL handling, search, filtering, and sorting.

## GitHub Pages

The target repository is `OpenEnvision/Awesome-World-Modeling`, whose default branch is `main`. The expected website address is `https://openenvision.github.io/Awesome-World-Modeling/`.

For initial setup, a repository administrator or maintainer selects **Settings → Pages → Build and deployment → Source → GitHub Actions**. This is a one-time repository setting; the workflow cannot grant itself the administration permission needed to enable Pages.

After setup, `.github/workflows/pages.yml` builds, validates, uploads `dist/`, and deploys on each push to `main`. It also supports **Actions → Deploy research library → Run workflow**. No deployment secret or external hosting service is required.

## Design and attribution

Shared Library design and OpenEnvision branding are adapted from the sibling OpenEnvision project at the user's request. World-model diagrams are authored as accessible SVG with descriptive text. The GitHub icon retains its MIT notice in `site/assets/OCTICONS-LICENSE.txt`. The curated research content remains covered by this repository's `LICENSE`.
