import type { NextConfig } from "next";

/*
 * Deployment: fully static export → Cloudflare Workers static assets (see wrangler.jsonc).
 * The only dynamic feature, the enquiry form, is served by worker/index.ts at /api/enquiry.
 */

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const onCloudflareBuild = Boolean(process.env.WORKERS_CI || process.env.CF_PAGES);

if (!siteUrl) {
  if (onCloudflareBuild) {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL is not set. Add it as a build variable in Cloudflare (e.g. https://www.example.com) so canonical URLs, the sitemap and social previews point at the live domain.",
    );
  }
  if (process.argv.includes("build")) {
    console.warn("\n⚠  NEXT_PUBLIC_SITE_URL is not set — metadata will use http://localhost:3000. Set it before deploying.\n");
  }
}

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // Static export has no image optimisation server; photos are served as-is.
    // Export photos at sensible sizes (see content/images.ts).
    unoptimized: true,
  },
};

export default nextConfig;
