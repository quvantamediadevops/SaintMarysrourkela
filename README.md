# Saint Mary’s School, Jagda, Raurkela — Website

Next.js 16 (App Router, static export) · React 19 · TypeScript (strict) · Tailwind CSS v4 · Lucide icons
Deployed on **Cloudflare Workers static assets**, with one small Worker for the enquiry form.

```bash
npm install
npm run dev        # http://localhost:3000 — design/content work (enquiry form shows "not active")
npm run build      # static export → ./out
npm run preview    # build + run the real Cloudflare runtime locally (http://localhost:8787)
npm run cf:check   # build + validate the deployment without uploading
npm run deploy     # build + deploy with Wrangler
npm run lint       # type-check
```

Node.js 20.9+ (`.node-version` pins 22 for Cloudflare builds).

---

## Cloudflare deployment

**Architecture.** Every page is pre-rendered to static HTML (`output: "export"`). The only dynamic
feature — the contact enquiry form — is handled by `worker/index.ts` at `POST /api/enquiry`, so the
delivery webhook stays a server-side secret. `wrangler.jsonc` serves `./out` and runs the Worker only
for `/api/*`; all pages are served straight from Cloudflare’s edge.

**Build before deploy is guaranteed.** `wrangler.jsonc` contains `"build": { "command": "npm run build" }`,
so every `wrangler deploy` / `wrangler dev` builds `./out` first — even if the Cloudflare dashboard
has no build command. (Without it, `npx wrangler deploy` fails with
“The directory specified by the assets.directory field … does not exist”.)

### Option A — Git integration (Workers Builds, recommended)

Worker **saintmarysrourkela** (the `name` in `wrangler.jsonc` must match it) → **Settings → Build**:

| Setting | Value |
| --- | --- |
| Git repository | `quvantamediadevops/SaintMarysrourkela`, production branch `main` |
| Build command | *(leave empty — `wrangler deploy` builds)* or `npm run build` (harmless, just builds twice) |
| Deploy command | `npx wrangler deploy` |
| Root directory | `/` |
| Build variable | `NEXT_PUBLIC_SITE_URL` = your live URL, e.g. `https://www.your-domain.in` |
| Secret (Worker → Settings → Variables and Secrets) | `ENQUIRY_WEBHOOK_URL` (type **Secret**) |

The build **fails on Cloudflare if `NEXT_PUBLIC_SITE_URL` is missing**, so canonical URLs, the sitemap
and social previews can never point at localhost.

### Option B — from your computer

```bash
npx wrangler login
npx wrangler secret put ENQUIRY_WEBHOOK_URL
NEXT_PUBLIC_SITE_URL=https://www.your-domain.in npm run deploy
```

Then add your custom domain under the Worker → **Settings → Domains & Routes**.

### Environment variables

| Name | Where | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Build variable (public) | Live URL for canonical links, sitemap, robots, Open Graph, JSON-LD. |
| `ENQUIRY_WEBHOOK_URL` | Worker **secret** (never `NEXT_PUBLIC_`) | Where enquiries are POSTed as JSON — a Google Apps Script, Zapier/Make webhook, or the school’s own endpoint. Until set, the form explains that online enquiries aren’t active and shows the phone and email. |

For local `npm run preview`, put `ENQUIRY_WEBHOOK_URL=…` in `.dev.vars` (git-ignored).

### What the Worker does

`POST /api/enquiry` — same-origin only, 16 KB body limit, honeypot field, server-side validation
identical to the browser (`lib/enquiry.ts`), 10 s timeout to the webhook. Works with JavaScript
(JSON) and without it (plain form post → small confirmation page).

### Headers

`public/_headers` (copied into `out/`) sets `X-Content-Type-Options`, `Referrer-Policy`,
`Permissions-Policy`, `X-Frame-Options` and a deliberately narrow CSP
(`frame-ancestors`, `base-uri`, `form-action`, `object-src`) that cannot break scripts, fonts, images,
Instagram links or a future Google Maps embed. Fingerprinted `/_next/static/*` files are cached for a
year; photos for a day with background revalidation.

---

## Updating content

Everything editable lives in `content/` — components contain no facts.

| File | What it holds |
| --- | --- |
| `content/contact.ts` | Phone, email, Instagram. |
| `content/site.ts` | School facts, address, navigation, office hours (`null` until confirmed), map embed URL. |
| `content/copy.ts` | All page copy: about, Bagless Days, Principal’s message (add the name in `principalMessage.name`), vision & mission, academic stages, admission journey and form requirements, student life. |
| `content/images.ts` | **Every photo slot on the site.** |
| `content/gallery.ts` | Gallery photos, categories and tile sizes. |

### Adding photographs

1. Copy the file into `public/images/` (gallery photos: `public/images/gallery/`).
2. In `content/images.ts` (or `content/gallery.ts`), set `src: "/images/your-file.jpg"` on the matching slot and check its `alt` text.

Slots: `hero`, `heroDetail`, `campus`, `campusEntrance`, `community`, `admissionsVisit`, `classroom`,
`smartClassroom`, `experientialLearning`, `baglessDays`, `baglessDaysDetail`, `principal`,
`creativeArts`, `sports`, `celebrations`, `lifeSkills`, `values`, `culturalProgramme`.

Every slot keeps a fixed aspect ratio, so photos drop in without layout shift. Because the site is a
static export, images are served as-is — export them at sensible sizes (hero/campus ~2400px,
portraits ~1600px, others ~1800px on the long edge, JPEG/WebP ~80%).

### Crest and map

- `components/shared/logo.tsx` and `app/icon.svg` use a typographic “SM” monogram as a stand-in for the official crest.
- Paste a verified Google Maps “Embed a map” URL into `school.mapEmbedUrl` to replace the illustrated map.

## Rules baked in

- The city is always written **Raurkela**. The only exceptions are the Instagram handle and URL in `content/contact.ts`, which are the account’s real identifiers.
- No invented results, fees, ratings, coordinates, facilities, testimonials or principal’s name.

## Design system (quick reference)

- Tokens: `app/globals.css` → `:root` (`--background`, `--foreground`, `--navy`, `--navy-light`, `--ivory`, `--cream`, `--gold`, `--gold-light`, `--muted`, `--border` …), mapped into Tailwind colours.
- Type: Fraunces (display, italic for emphasis) + Hanken Grotesk, self-hosted via `next/font/local`.
- Motion: `<Reveal direction="up|left|right|scale|fade|mask" delay stagger>` and `<MaskLines>` (`components/shared/reveal.tsx`), driven by one IntersectionObserver; page-load choreography is pure CSS. Only `transform`, `opacity` and `clip-path` animate, and everything is disabled under `prefers-reduced-motion`.
