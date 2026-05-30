/**
 * Site configuration — edit this file per client.
 *
 * This is the single source of truth for all site-wide metadata,
 * business information, and navigation. Every component reads from here.
 */

export const siteConfig = {
  /** The production URL (no trailing slash). Required for sitemap + OG tags. */
  url: "https://example.com",

  /** Appears in <title>, OG, and schema.org. */
  name: "Client Name",

  /** One-liner for meta description + OG description fallback. */
  description: "A short description of the business and what they offer.",

  /** BCP-47 language tag. */
  lang: "de",

  /** Default OG image path relative to /public. Recommended 1200×630. */
  ogImage: "/og-default.png",

  /** Navigation links rendered in the header. */
  nav: [
    { label: "Startseite", href: "/" },
  ],

  /** Footer columns — add/remove as needed. */
  footer: {
    columns: [
      {
        heading: "Seiten",
        links: [
          { label: "Startseite", href: "/" },
        ],
      },
      {
        heading: "Rechtliches",
        links: [
          { label: "Impressum", href: "/impressum" },
          { label: "Datenschutz", href: "/datenschutz" },
        ],
      },
    ],
  },

  /**
   * Schema.org LocalBusiness data.
   * Used to generate JSON-LD on every page for rich search results.
   * Set to `null` to disable.
   */
  business: {
    type: "LocalBusiness" as const,
    name: "Client Name",
    streetAddress: "Musterstraße 1",
    city: "Mannheim",
    postalCode: "68159",
    country: "DE",
    phone: "+49 621 1234567",
    email: "info@example.com",
    /** Opening hours in schema.org format. */
    openingHours: ["Mo-Fr 08:00-17:00"],
  },
} as const;

export type SiteConfig = typeof siteConfig;
