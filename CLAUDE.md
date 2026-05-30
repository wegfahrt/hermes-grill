# CLAUDE.md

## Project

Static small business website built with Astro 6, Tailwind CSS v4, and deployed to Cloudflare Pages. The site ships zero JavaScript by default — interactivity is added per-component via Astro Islands only when needed.

## Commands

- `pnpm run dev` — start dev server
- `pnpm run build` — production build (output: `dist/client/`)
- `pnpm run astro check` — typecheck `.astro` files
- `fnm list` — list installed Node versions 
- `fnm use` — switch to the Node version specified in `.node-version` 

## Architecture Rules

- **No React/Vue/Svelte** unless explicitly requested. Default to `.astro` components (server-rendered, zero JS).
- If interactivity is needed, use an Astro Island with `client:visible` or `client:load` — never hydrate an entire page.
- All site metadata, nav links, footer links, and business info live in `src/config/site.ts`. Never hardcode business names, addresses, or phone numbers in components — always read from `siteConfig`.
- Every page should use `<BaseLayout>` from `src/layouts/BaseLayout.astro`, ask if a deviation is needed. Do not create `<html>` or `<head>` tags in page files.
- SEO is handled by `src/components/SEO.astro` via the layout. Pass `title`, `description`, and optionally `ogImage` and `schema` as props to `<BaseLayout>`.
- Tailwind v4 uses CSS-first config in `src/styles/global.css` under `@theme`. No `tailwind.config.ts` file.

## File Conventions

- Pages: `src/pages/` — kebab-case filenames matching German URL slugs (e.g. `ueber-uns.astro`)
- Components: `src/components/` — PascalCase `.astro` files
- Layouts: `src/layouts/`
- Static assets: `public/`

## Styling

- Use Tailwind utility classes directly in `.astro` templates.
- **Prefer Tailwind's predefined scale over arbitrary values.** Before writing an arbitrary value like `pt-[72px]`, check whether a default token matches — the spacing scale is 4px-per-step, so `72px` is `pt-18`, `8px` is `p-2`, etc. The same applies to colours, font sizes, radii, and breakpoints. Only reach for `[...]` arbitrary values when no token fits. If Tailwind IntelliSense flags `suggestCanonicalClasses`, rewrite to the suggested class.
- Brand colours go in `global.css` `@theme` block as `--color-brand-*` tokens. 
- Fonts: use Astro's built-in Fonts API or load via `@theme` in `global.css`.
- No CSS-in-JS. No `@apply` unless extracting a truly reusable pattern.

### Responsive Design

Designs typically arrive sized for desktop (1024px+). Apply these rules from the start — do not wait to retrofit:

- **Section padding**: never `px-14` alone — use `px-4 sm:px-8 lg:px-14`. 56px of padding eats most of a 390px screen.
- **Multi-column grids**: always include a mobile fallback. `grid-cols-2`, `grid-cols-[1fr_auto]`, `grid-cols-[1.5fr_1fr_1fr_1fr]` etc. need `grid-cols-1 sm:grid-cols-…`. This includes grids inside shared/reusable components (Header, SectionHead, Footer), not just page-level grids.
- **`clamp()` font sizes**: the minimum is what mobile actually gets. `clamp(48px, 7.5vw, 96px)` guarantees 48px even at 360px screen width — that is where overflow comes from. Use 24–32px minimums for large headings.
- **Fixed pixel offsets** (`pl-22`, fixed heights, `style="height: 480px"`): reset on mobile (`pl-0 sm:pl-22`, `sm:h-120` instead of inline style).
- **Side decorations** (cursive side-notes, drop-caps, dotted left-borders on sidebars): hide or restructure on mobile (`hidden sm:block`, `border-t sm:border-l pt-5 sm:pt-0 sm:pl-9`). A grid column that holds decorative content on desktop becomes a squeeze zone on mobile.
- **Sections with absolutely-positioned decorations** (CornerSprig with negative offsets, SVGs with `overflow:visible`): add `overflow-hidden` to the section. Otherwise the decoration extends past the viewport and creates horizontal scroll.
- **Reusable layout components**: prefer accepting Tailwind classes for layout-affecting props (height, width, position) over inline `style="…"`. Inline styles can't be overridden by responsive variants applied at the caller, which forces a component rewrite later.

## Design Implementation Workflow

When implementing a visual design (screenshot, Figma export, or description):

1. Identify which page file to edit in `src/pages/`.
2. Build sections top-to-bottom using semantic HTML and Tailwind classes.
3. Extract repeated patterns (cards, CTAs, section wrappers) into `src/components/`.
4. Use Astro's `<Image>` component (from `astro:assets`) for all content images — never raw `<img>` tags.
5. Ensure all text content for the specific client comes from the page file or `site.ts`, not hardcoded in shared components.
6. Before declaring done, verify at 360–390px width in Chrome DevTools' device toolbar: no horizontal scrollbar, all text fits its container, no decorative side-content squeezed into narrow columns. Check at the `sm` breakpoint (640px) too — that's where 2-column grids re-engage.

## Do NOT

- Add client-side routing or SPA behaviour.
- Install component libraries (shadcn, DaisyUI, etc.) unless explicitly asked.
- Use `<style>` blocks in `.astro` files — prefer Tailwind utilities.
- Modify `SEO.astro`, `BaseLayout.astro`, or `site.ts` structure without asking.
- Add analytics scripts or third-party services without explicit approval.

## German Language

All user-facing text is in German. URL slugs use lowercase German without umlauts (ü→ue, ö→oe, ä→ae). Aria labels and alt text should also be in German.
