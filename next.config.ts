import type { NextConfig } from "next";

/*
 * Deployment: fully static export (./out) → Cloudflare Workers static assets (see wrangler.jsonc).
 * `npx wrangler deploy` runs `npm run build` first via wrangler.jsonc → build.command.
 * The only dynamic feature, the enquiry form, is served by worker/index.ts at /api/enquiry.
 */

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const onCloudflareBuild = Boolean(process.env.WORKERS_CI || process.env.CF_PAGES);

if (!siteUrl) {
  if (onCloudflareBuild) {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL is not set. In Cloudflare: Workers & Pages → saintmarysrourkela → Settings → Build → " +
        "Variables and secrets → add NEXT_PUBLIC_SITE_URL (e.g. https://saintmarysrourkela.<account>.workers.dev or your domain), " +
        "then retry the build. This keeps canonical URLs, the sitemap and social previews off localhost.",
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
