// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// When deploying to GitHub Pages the CI sets SITE and BASE_PATH env vars.
// Falls back to the production domain for local builds.
const site     = process.env.SITE     ?? 'https://miamiadv.com';
const base     = process.env.BASE_PATH ?? '/';

// https://astro.build/config
export default defineConfig({
  site,
  base,
  integrations: [sitemap()],
});
