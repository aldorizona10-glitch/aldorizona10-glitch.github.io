// @ts-check
import { defineConfig } from 'astro/config';

// User/organisation Pages repo → served from the domain root.
export default defineConfig({
  site: 'https://aldorizona10-glitch.github.io',
  base: '/',
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
