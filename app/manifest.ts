import type { MetadataRoute } from "next";

// Required for static export (output: "export").
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Saint Mary’s School, Jagda, Raurkela",
    short_name: "Saint Mary’s",
    description: "ICSE school in Jagda, Raurkela — Nursery to Standard X. Established 1988.",
    start_url: "/",
    display: "browser",
    background_color: "#fbf8f2",
    theme_color: "#0b1d38",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
