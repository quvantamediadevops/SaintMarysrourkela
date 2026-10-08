import type { Metadata } from "next";
import { school } from "@/content/site";

interface PageMetaInput {
  title: string;
  description: string;
  path: `/${string}`;
  keywords?: string[];
}

/** Shared social image: public/og-image.png (1200 × 630). */
export const socialImage = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Saint Mary’s School, Jagda, Raurkela — ICSE · Nursery to Standard X · Established 1988",
};

const baseKeywords = [
  "Saint Mary's School Jagda",
  "Saint Mary's School Raurkela",
  "ICSE School in Raurkela",
  "School in Jagda Raurkela",
  "ICSE School Jagda",
  "Nursery School Raurkela",
  "Secondary School Raurkela",
  "CISCE school Odisha",
];

/** Builds consistent per-page metadata (title, canonical, Open Graph, Twitter). */
export function pageMetadata({ title, description, path, keywords = [] }: PageMetaInput): Metadata {
  const fullTitle = `${title} | ${school.name}, Jagda, Raurkela`;
  return {
    title,
    description,
    keywords: [...keywords, ...baseKeywords],
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: path,
      siteName: `${school.name}, Jagda`,
      title: fullTitle,
      description,
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [socialImage.url],
    },
  };
}

export { baseKeywords };
