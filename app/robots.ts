import type { MetadataRoute } from "next";
import { school } from "@/content/site";

// Required for static export (output: "export").
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${school.url}/sitemap.xml`,
  };
}
