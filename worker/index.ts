/**
 * Cloudflare Worker — serves the static site (./out) and handles the one
 * dynamic route: POST /api/enquiry.
 *
 * Static assets are served by Cloudflare before this Worker runs; only paths
 * listed in wrangler.jsonc → assets.run_worker_first (/api/*) reach this code.
 *
 * Secrets (never NEXT_PUBLIC_*):
 *   ENQUIRY_WEBHOOK_URL — where enquiries are forwarded as JSON
 *   (Google Apps Script, Zapier/Make webhook, or the school's own API).
 *   Set with:  npx wrangler secret put ENQUIRY_WEBHOOK_URL
 */

import { contact } from "../content/contact";
import { ENQUIRY_ENDPOINT, type EnquiryResponse, readEnquiry, validateEnquiry } from "../lib/enquiry";

interface AssetsBinding {
  fetch(request: Request): Promise<Response>;
}

interface Env {
  ASSETS: AssetsBinding;
  ENQUIRY_WEBHOOK_URL?: string;
}

const MAX_BODY_BYTES = 16 * 1024;

function json(body: EnquiryResponse, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" },
  });
}

/** Minimal response page for browsers submitting without JavaScript. */
function html(title: string, text: string, status = 200): Response {
  const page = `<!doctype html><html lang="en-IN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>${title} — Saint Mary's School</title><style>body{font:16px/1.6 system-ui,sans-serif;background:#fbf8f2;color:#0b1d38;display:grid;place-items:center;min-height:100vh;margin:0;padding:24px}main{max-width:32rem}a{color:#0b1d38}</style></head><body><main><h1 style="font-family:Georgia,serif;font-weight:400">${title}</h1><p>${text}</p>${status === 200 ? "" : `<p>You can also call <a href="${contact.phone.href}">${contact.phone.display}</a> or email <a href="${contact.email.href}">${contact.email.display}</a>.</p>`}<p><a href="/contact">Back to the contact page</a></p></main></body></html>`;
  return new Response(page, { status, headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" } });
}

async function handleEnquiry(request: Request, env: Env): Promise<Response> {
  const wantsJson = (request.headers.get("Accept") ?? "").includes("application/json");
  const contentType = request.headers.get("Content-Type") ?? "";
  const reply = (body: EnquiryResponse, status: number) =>
    wantsJson
      ? json(body, status)
      : html(
          body.status === "success" ? "Thank you" : "Enquiry not sent",
          body.message ?? "",
          status,
        );

  if (Number(request.headers.get("Content-Length") ?? 0) > MAX_BODY_BYTES) {
    return reply({ status: "error", message: "That enquiry is too long." }, 413);
  }

  let get: (key: string) => unknown;
  try {
    if (contentType.includes("application/json")) {
      const data = (await request.json()) as Record<string, unknown>;
      get = (k) => data[k];
    } else {
      const data = await request.formData();
      get = (k) => data.get(k);
    }
  } catch {
    return reply({ status: "error", message: "The enquiry could not be read." }, 400);
  }

  // Honeypot: quietly accept and drop bot submissions.
  if (typeof get("company") === "string" && (get("company") as string).trim() !== "") {
    return reply({ status: "success", message: "Thank you — your enquiry has been received." }, 200);
  }

  const values = readEnquiry(get);
  const fieldErrors = validateEnquiry(values);
  if (Object.keys(fieldErrors).length > 0) {
    return reply({ status: "error", message: "Please check the highlighted fields.", fieldErrors }, 422);
  }

  if (!env.ENQUIRY_WEBHOOK_URL) {
    return reply(
      { status: "unavailable", message: "Online enquiries are not active yet." },
      503,
    );
  }

  try {
    const res = await fetch(env.ENQUIRY_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...values, source: "website-contact", receivedAt: new Date().toISOString() }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
  } catch (error) {
    console.error("[enquiry] delivery failed", error);
    return reply({ status: "error", message: "Sorry — your enquiry could not be sent just now." }, 502);
  }

  return reply({ status: "success", message: "Thank you — your enquiry has been sent. The school office will be in touch." }, 200);
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === ENQUIRY_ENDPOINT) {
      if (request.method !== "POST") {
        return new Response("Method Not Allowed", { status: 405, headers: { Allow: "POST" } });
      }
      // Same-origin only.
      const origin = request.headers.get("Origin");
      if (origin && origin !== url.origin) {
        return json({ status: "error", message: "Forbidden" }, 403);
      }
      return handleEnquiry(request, env);
    }

    // Anything else under /api/* that isn't handled: fall back to static assets (404 page).
    return env.ASSETS.fetch(request);
  },
};
