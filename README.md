# aldorizona10-glitch.github.io

Personal site for **Aldo Rizona** — final-year Constitutional Law student and self-taught
security researcher, Padang, Indonesia.

**Live:** https://aldorizona10-glitch.github.io/

## What this is

A multi-page portfolio built with [Astro](https://astro.build). Zero client-side framework;
the only JavaScript shipped is a small scroll-reveal observer. Every factual claim is centralised
in [`src/data/site.ts`](src/data/site.ts) and linked to a source a stranger can verify.

| Page            | Route           |
| --------------- | --------------- |
| Index           | `/`             |
| Security        | `/security`     |
| Open source     | `/open-source`  |
| Projects        | `/projects`     |
| About & press   | `/about`        |

## Design

Structure borrows from an Indonesian legal instrument — sections are numbered as *Pasal*, with the
number set in a hanging left margin. The hero lattice is drawn after Minangkabau *songket*.
Type is **Bodoni Moda** (display) with **IBM Plex Sans / Mono**, self-hosted via
[`@fontsource`](https://fontsource.org) so nothing is fetched from a CDN at runtime. A single,
deliberately dark palette: aubergine ink, antique gold, bone.

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # static output to ./dist
npm run preview  # preview the build
```

## Deploy

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which
builds with the official Astro action and publishes to GitHub Pages.
