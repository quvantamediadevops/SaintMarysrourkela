/**
 * Contact details — runtime-agnostic (used by the site and by the Cloudflare Worker).
 * Instagram handle/URL are external identifiers and must stay exactly as registered.
 */
export const contact = {
  phone: {
    display: "096929 20138",
    href: "tel:+919692920138",
    international: "+919692920138",
  },
  email: {
    display: "st.maryssckl22@gmail.com",
    href: "mailto:st.maryssckl22@gmail.com",
  },
  instagram: {
    label: "Instagram",
    handle: "@saintmarys_rourkela",
    href: "https://www.instagram.com/saintmarys_rourkela/",
  },
} as const;
