# aldorizona10-glitch.github.io

Portfolio of **Aldo Rizona**, AI and automation engineer in Padang, Indonesia.

**Live:** https://aldorizona10-glitch.github.io/ (English) and https://aldorizona10-glitch.github.io/id/ (Bahasa Indonesia)

## What this is

A single-page portfolio built with [Astro](https://astro.build). The hero replays
[Rapikan](https://aldorizona10-glitch.github.io/rapikan/)'s sample order: each extracted field
points back at the words it came from, a missing value is flagged, and nothing is final until a
person presses approve. That is the idea behind most of the work listed on the page.

Every factual claim lives in [`src/data/site.ts`](src/data/site.ts) or
[`src/i18n/content.ts`](src/i18n/content.ts) and links to a source a stranger can check.
Open pull requests are shown as open, never as merged.

| Section       | Anchor          |
| ------------- | --------------- |
| Replay, proof | `/#top`         |
| Work          | `/#work`        |
| Open source   | `/#open-source` |
| Security      | `/#security`    |
| About         | `/#about`       |
| Contact       | `/#contact`     |

The old routes (`/projects`, `/security`, `/open-source`, `/about`, and their `/id/` versions)
forward to these anchors, so links in old CVs keep working.

## Design

- Palette: stone paper, ink, highlighter yellow for evidence, reviewer red for what is missing,
  office-stamp violet for what a person approved.
- Type: Archivo, self-hosted through `@fontsource-variable`. Headlines use its width axis.
- Motion: one load sequence, the replay, a cursor-following preview on project rows, magnetic
  buttons, and smooth scrolling through [Lenis](https://github.com/darkroomengineering/lenis).
  All of it switches off under `prefers-reduced-motion`, and the page reads fine without JavaScript.

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # static output to ./dist
npm run preview  # preview the build
```

## Deploy

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which
installs the pinned dependencies, builds the site and publishes `dist/` to GitHub Pages.
