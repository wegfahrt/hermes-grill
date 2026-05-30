// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  // TODO: Replace with client's production URL (required for sitemap + OG)
  site: 'https://example.com',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    sitemap({
      // Exclude legal/utility pages from sitemap if needed
      filter: (page) => !page.includes('/404'),
    }),
  ],

  adapter: cloudflare(),
});