/**
 * Single source of truth for school facts and contact details.
 *
 * City spelling rule: the website always writes "Raurkela".
 * The only exception is the Instagram account identifier below, which is an
 * external handle and must stay exactly as registered.
 */

import { contact } from "./contact";

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  /** Visible handle, e.g. "@account". */
  handle: string;
  href: string;
}

/**
 * Canonical site URL.
 * - Production: set NEXT_PUBLIC_SITE_URL (next.config.ts refuses to build on
 *   Cloudflare without it, so metadata can never point at localhost).
 * - Development: falls back to localhost.
 */
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/+$/, "");

export const school = {
  name: "Saint Mary’s School",
  shortName: "Saint Mary’s",
  locality: "Jagda",
  city: "Raurkela",
  state: "Odisha",
  postalCode: "769042",
  country: "India",
  established: 1988,
  affiliation: "CISCE",
  curriculum: "ICSE",
  type: "Co-educational",
  classes: "Nursery to Standard X",
  classesShort: "Nursery – Standard X",
  url: siteUrl,
  tagline: "Where Joy Meets Growth.",
  description:
    "Saint Mary’s School, Jagda, Raurkela is a co-educational CISCE-affiliated ICSE school, established in 1988, serving children from Nursery to Standard X.",
  address: {
    lines: ["Plot No. JD-119", "Saint Mary’s School", "Jagda", "Raurkela, Odisha – 769042", "India"],
    /** One-line form for compact UI. */
    short: "Plot No. JD-119, Jagda, Raurkela, Odisha – 769042",
    streetAddress: "Plot No. JD-119, Saint Mary’s School, Jagda",
    locality: "Raurkela",
    region: "Odisha",
    postalCode: "769042",
    country: "IN",
  },
  contact: {
    phone: contact.phone,
    email: contact.email,
    /** e.g. "Mon–Sat, 9:00 am – 1:00 pm" — shown automatically when set. */
    officeHours: null as string | null,
  },
  instagram: contact.instagram satisfies SocialLink,
  /**
   * Paste a Google Maps "Embed a map" src URL here once the school pin is verified.
   * Until then, the location section shows a designed map placeholder.
   */
  mapEmbedUrl: null as string | null,
  /** Directions link — a search, so no coordinates are guessed. */
  mapSearchUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Saint Mary's School, Plot No. JD-119, Jagda, Odisha 769042"),
} as const;

export const socialLinks: SocialLink[] = [school.instagram];

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Student Life", href: "/student-life" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "School",
    items: [
      { label: "About", href: "/about" },
      { label: "Academics", href: "/academics" },
      { label: "Student Life", href: "/student-life" },
      { label: "Gallery", href: "/gallery" },
    ],
  },
  {
    title: "Admissions",
    items: [
      { label: "Admissions", href: "/admissions" },
      { label: "Admission Requirements", href: "/admissions#requirements" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const legalNav: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
];
