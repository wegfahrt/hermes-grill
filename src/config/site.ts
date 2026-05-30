/**
 * Site configuration — single source of truth for all site-wide metadata,
 * business information, and navigation. Every component reads from here;
 * business names, addresses and phone numbers are never hardcoded elsewhere.
 */

const PHONE_DISPLAY = "0621 / 734442";
const PHONE_TEL = "tel:0621734442";

const ADDRESS = {
  street: "Mannheimer Straße 42",
  city: "68309 Mannheim",
} as const;

const MAP_QUERY = "Hermes Grill, Mannheimer Straße 42, 68309 Mannheim";

interface HoursRow {
  days: string;
  time: string;
  /** Marks a closing-day row (rendered in terracotta). */
  rest?: boolean;
}

/** Full opening-hours rows for the contact section. */
const HOURS: HoursRow[] = [
  { days: "Mittwoch – Sonntag", time: "11:30 – 14:00 Uhr" },
  { days: "", time: "17:00 – 23:00 Uhr" },
  { days: "Warme Küche", time: "bis 22:00 Uhr" },
  { days: "Montag & Dienstag", time: "Ruhetag", rest: true },
];

/** Condensed hours for the info ribbon + footer. */
const HOURS_SHORT: HoursRow[] = [
  { days: "Mi – So", time: "11:30 – 23:00 Uhr" },
  { days: "Warme Küche", time: "bis 22:00 Uhr" },
  { days: "Mo & Di", time: "Ruhetag" },
];

export const siteConfig = {
  /** The production URL (no trailing slash). Required for sitemap + OG tags. */
  url: "https://www.hermesgrill.com",

  /** Appears in <title>, OG, and schema.org. */
  name: "Hermes Grill",

  /** Short brand line shown under the logo / in the hero seal. */
  tagline: "Griechische Spezialitäten",

  /** One-liner for meta description + OG description fallback. */
  description:
    "Hermes Grill in Mannheim — griechische Spezialitäten vom Holzkohlegrill in gemütlicher Atmosphäre. Weidelamm, frischer Fisch, Meze und mehr. Jetzt Tisch reservieren.",

  /** BCP-47 language tag. */
  lang: "de",

  /** Default OG image path relative to /public. Recommended 1200×630. */
  ogImage: "/og-default.jpg",

  /** Contact details. */
  phone: { display: PHONE_DISPLAY, href: PHONE_TEL },
  address: ADDRESS,

  /** Map embed + directions (privacy-friendly click-to-load). */
  map: {
    query: MAP_QUERY,
    embedSrc:
      "https://maps.google.com/maps?q=Mannheimer%20Stra%C3%9Fe%2042%2C%2068309%20Mannheim&z=16&output=embed",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Hermes+Grill+Mannheimer+Stra%C3%9Fe+42+68309+Mannheim",
  },

  /** Owner / Impressum. */
  owner: "Vasiliki Milona",

  /** Full opening-hours rows for the contact section. */
  hours: HOURS,

  /** Condensed hours for the info ribbon + footer. */
  hoursShort: HOURS_SHORT,

  /** Navigation links rendered in the header. */
  nav: [
    { label: "Startseite", href: "/" },
    { label: "Speisekarte", href: "/speisekarte" },
    { label: "Feiern", href: "/#feiern" },
    { label: "Kontakt", href: "/#kontakt" },
  ],

  /** Footer "Entdecken" column links. */
  footerLinks: [
    { label: "Startseite", href: "/" },
    { label: "Speisekarte", href: "/speisekarte" },
    { label: "Feiern & Feste", href: "/#feiern" },
    { label: "Kontakt", href: "/#kontakt" },
  ],

  /** Legal links (footer bottom row). */
  legalLinks: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
  ],

  /**
   * Schema.org data used to generate JSON-LD on every page.
   * Set to `null` to disable.
   */
  business: {
    type: "Restaurant" as const,
    name: "Hermes Grill",
    streetAddress: ADDRESS.street,
    city: "Mannheim",
    postalCode: "68309",
    country: "DE",
    phone: "+49 621 734442",
    servesCuisine: "Greek",
    priceRange: "€€",
    /** Opening hours in schema.org format. */
    openingHours: ["We-Su 11:30-14:00", "We-Su 17:00-23:00"],
  },
} as const;

export type SiteConfig = typeof siteConfig;
