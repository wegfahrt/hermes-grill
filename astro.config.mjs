// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  // Production URL — used for sitemap, canonical URLs and OG tags.
  // This is the restaurant's current live domain; update if it changes.
  site: 'https://www.hermesgrill.com',

  vite: {
    plugins: [tailwindcss()]
  },

  // Self-hosted, optimised web fonts (no render-blocking Google CDN call).
  // Referenced from src/styles/global.css via the cssVariable tokens.
  fonts: [
    {
      name: 'Marcellus',
      cssVariable: '--ff-marcellus',
      provider: fontProviders.google(),
      weights: [400],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['Georgia', 'serif'],
    },
    {
      name: 'Spectral',
      cssVariable: '--ff-spectral',
      provider: fontProviders.google(),
      weights: [300, 400, 500, 600],
      styles: ['normal', 'italic'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['Georgia', 'serif'],
    },
    {
      name: 'Pinyon Script',
      cssVariable: '--ff-pinyon',
      provider: fontProviders.google(),
      weights: [400],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['cursive'],
    },
  ],

  integrations: [
    sitemap({
      // Exclude legal/utility pages from sitemap if needed
      filter: (page) => !page.includes('/404'),
    }),
  ],

  adapter: cloudflare(),
});
