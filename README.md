# Astro Client Starter

Shared starter template for building static small business websites with Astro 6, Tailwind CSS v4, and Cloudflare Pages.

## Architecture

```
src/
├── components/        # Reusable UI components
│   ├── Header.astro   # Empty header
│   ├── Footer.astro   # Configurable footer with link columns
│   └── SEO.astro      # All meta, OG, Twitter, JSON-LD in one place
├── config/
│   └── site.ts        # ⭐ Client specific information
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro
│   ├── impressum.astro
│   ├── datenschutz.astro
│   ├── 404.astro
│   └── robots.txt.ts
├── styles/
   └── global.css     # Tailwind v4 config + custom styles
```

## Per-Client Customization

### Must change
- `src/config/site.ts` — business name, URL, address, nav links, footer
- `astro.config.mjs` — update `site:` to the production URL
- `public/favicon.svg` + `public/favicon.ico` — client branding
- `public/og-default.png` — default Open Graph image (1200×630)

### Customize design
- `src/styles/global.css` — Tailwind `@theme` block for fonts, colours
- Page files — layout, copy, sections per client

### Optional features
- **Analytics**: Add Plausible/Umami script to `BaseLayout.astro` `<head>`

## Deployment (Cloudflare Pages)

1. Push repo to GitHub
2. In Cloudflare Dashboard → Pages → Create project → Connect repo
3. Build settings:
   - Build command: `npm run build`
   - Build output directory: `dist/client`
4. Add custom domain under the project settings

## Legal Pages

`impressum.astro` and `datenschutz.astro` are scaffolded with data from
`site.ts` but contain **placeholder text**. Replace with legally reviewed
content before going live. Consider using a generator like
[e-recht24.de](https://www.e-recht24.de) or consulting a lawyer.

## Tech Stack

- [Astro 6](https://astro.build) — static-first, zero JS by default
- [Tailwind CSS v4](https://tailwindcss.com) — CSS-first configuration
- [Cloudflare Pages](https://pages.cloudflare.com) — global CDN, free tier
- TypeScript strict mode
- Auto-generated sitemap + robots.txt
- Full SEO: meta, OG, Twitter Cards, schema.org JSON-LD
