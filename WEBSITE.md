# OpenEnvision World Modeling Library

The website presents the curated README as an OpenEnvision Library collection. It uses the typography, colors, navigation, and flat research-list layout of [Awesome Multimodal Modeling](https://openenvision.github.io/Awesome-Multimodal-Modeling/), with original world-model diagrams, a searchable reading guide, and a resource directory.

## Local development

Node.js 22 or later is required. There are no package dependencies to install.

```sh
npm run dev
```

Open `http://127.0.0.1:4173/Awesome-World-Modeling/`. The server binds to the local machine only. To rebuild after an edit, run `npm run build` and reload the browser. `npm run preview` serves an existing build.

## Content and validation

- Edit research entries in `README.md`.
- `scripts/build-site-data.mjs` derives `site/data/library.json` from README rows and the verified arXiv metadata in the latest dated `curation/*.json` snapshot.
- `site/index.html` is the homepage template. `site/assets/` contains styles, browser logic, and original SVG diagrams.
- `scripts/build-site.mjs` generates ready-to-publish `index.html`, `guide.html`, `resources.html`, `404.html`, and `.nojekyll` beside `README.md`. Root pages use the existing `site/assets/`, `site/data/`, and `image/` directories. A portable `dist/` build is also generated. All asset paths support the repository's GitHub Pages subpath.
- The six research collections preserve all 1,557 entries and intentional cross-listings. The separate directory includes 129 resources: workshops, tools, datasets, organizations, and technical reports. The 1,498 arXiv count refers to distinct IDs across both surfaces, not 1,498 unique models.
- `scripts/guide-content.mjs` renders 15 substantive README chapters, including reading tracks, history, architecture comparisons, evaluation dimensions, open problems, glossary, and FAQ. Internal links resolve to website chapters, taxonomy filters, and resource sections. The original README table of contents is replaced by the website navigation.
- Research detail views preserve full citations and source table fields. Collection scope, the WAM survey inclusion note, resource ownership, and source links remain available in the corresponding views.
- Bookmarks stay in browser storage under a World Modeling-specific key. No account or server is needed.

```sh
npm run build
npm test
node scripts/test-site-data.mjs
node scripts/build-site-data.mjs --check
```

The checks cover exact README row coverage, arXiv coverage, duplicate policy, derived statistics, deterministic generation, URL handling, search, filtering, sorting, guide coverage, and resource links against actual rendered anchors. See [the website coverage audit](curation/website-2026-09-15.md) for the repository comparison and presentation boundaries.

## GitHub Pages

The target repository is `OpenEnvision/Awesome-World-Modeling`, whose default branch is `main`. The expected website address is `https://openenvision.github.io/Awesome-World-Modeling/`.

### Enable the site from the repository root

1. Open **Settings → Pages** in the repository.
2. Under **Build and deployment → Source**, select **Deploy from a branch**.
3. Select branch **main** and folder **/(root)**, then click **Save**.
4. Wait for GitHub's **pages build and deployment** workflow to finish, then click **Visit site**.

These settings require repository administrator or maintainer permissions. The root `index.html` is already built: GitHub Pages does not need to run npm. `.nojekyll` disables Jekyll processing. Opening the HTML file in GitHub's code viewer shows its source; use the Pages address to visit the website.

### Publish later content updates

After editing `README.md` or website sources, run `npm run build` and `npm test`, then commit the regenerated root HTML pages and `site/data/library.json` together with your source changes. `npm run preview` serves this same repository-root layout locally.

`.github/workflows/pages.yml` validates the build and checks that committed root pages are current. Publishing itself is handled by GitHub's branch-based Pages deployment after each push to `main`.

## Design and attribution

Shared Library design and OpenEnvision branding are adapted from the sibling OpenEnvision project at the user's request. World-model diagrams are authored as accessible SVG with descriptive text. The GitHub icon retains its MIT notice in `site/assets/OCTICONS-LICENSE.txt`. The curated research content remains covered by this repository's `LICENSE`.

The reading guide uses a vendored Marked parser so local builds need no package installation. Its version, origin, and MIT license are recorded in `scripts/vendor/README.md` and `scripts/vendor/MARKED-LICENSE.md`.
