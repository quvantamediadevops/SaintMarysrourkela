import { school, socialLinks } from "@/content/site";

/**
 * School / EducationalOrganization JSON-LD.
 * Only verified facts — no coordinates, ratings, reviews or fees.
 */
export function schoolJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": ["School", "EducationalOrganization"],
    "@id": `${school.url}/#school`,
    name: "Saint Mary's School",
    alternateName: ["Saint Mary's School, Jagda", "Saint Mary's School, Jagda, Raurkela"],
    description: school.description,
    url: school.url,
    logo: `${school.url}/icon.svg`,
    image: `${school.url}/og-image.png`,
    foundingDate: String(school.established),
    telephone: school.contact.phone.international,
    email: school.contact.email.display,
    sameAs: socialLinks.map((s) => s.href),
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot No. JD-119, Saint Mary's School, Jagda",
      addressLocality: school.address.locality,
      addressRegion: school.address.region,
      postalCode: school.address.postalCode,
      addressCountry: school.address.country,
    },
    areaServed: { "@type": "City", name: "Raurkela" },
    memberOf: {
      "@type": "Organization",
      name: "Council for the Indian School Certificate Examinations (CISCE)",
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${school.url}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

/** Serialises JSON-LD safely for a <script> tag. */
export function serializeJsonLd(data: Record<string, unknown>): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
