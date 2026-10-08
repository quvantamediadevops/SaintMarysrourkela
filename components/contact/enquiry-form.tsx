"use client";

import { useEffect, useRef, useState } from "react";
import { AlertCircle, CheckCircle2, Info, Loader2, Send } from "lucide-react";
import {
  classOptions,
  ENQUIRY_ENDPOINT,
  type EnquiryField,
  type EnquiryResponse,
  type FieldErrors,
  MAX_MESSAGE,
  readEnquiry,
  validateEnquiry,
} from "@/lib/enquiry";
import { school } from "@/content/site";
import { cn } from "@/lib/cn";
import { buttonClasses } from "@/components/shared/button-link";

type Status = "idle" | "sending" | "success" | "error" | "unavailable";

const fallbackHelp = `You can also call ${school.contact.phone.display} or email ${school.contact.email.display}.`;

const inputBase =
  "block min-h-12 w-full rounded-sm border bg-white px-4 py-3 text-base text-navy-900 placeholder:text-subtle/80 transition-[border-color,box-shadow] duration-200 focus:border-navy-700 focus:outline-none focus:ring-4 focus:ring-sky-200";

/**
 * Enquiry form. Posts JSON to the Cloudflare Worker at /api/enquiry, which
 * holds the delivery webhook as a server-side secret. Without JavaScript the
 * form still submits natively to the same endpoint.
 */
export function EnquiryForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});

  // After a submit: focus the first invalid field, otherwise the result message.
  useEffect(() => {
    if (status === "idle" || status === "sending") return;
    const first = Object.keys(errors)[0];
    const field = first ? (formRef.current?.elements.namedItem(first) as HTMLElement | null) : null;
    (field ?? statusRef.current)?.focus();
  }, [status, message, errors]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const values = readEnquiry((k) => data.get(k));

    const fieldErrors = validateEnquiry(values);
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) {
      setStatus("error");
      setMessage("Please check the highlighted fields.");
      return;
    }

    setStatus("sending");
    setMessage("");
    try {
      const res = await fetch(ENQUIRY_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...values, company: String(data.get("company") ?? "") }),
      });

      // No endpoint (local `next dev`, or a static host without the Worker)
      if (res.status === 404 || res.status === 405) {
        setStatus("unavailable");
        setMessage(`Online enquiries aren’t active on this server. ${fallbackHelp}`);
        return;
      }

      const body = (await res.json().catch(() => null)) as EnquiryResponse | null;
      if (res.ok && body?.status === "success") {
        setStatus("success");
        setMessage(body.message ?? "Thank you — your enquiry has been sent. The school office will be in touch.");
        form.reset();
        return;
      }
      if (body?.fieldErrors) setErrors(body.fieldErrors);
      setStatus(body?.status === "unavailable" ? "unavailable" : "error");
      setMessage(`${body?.message ?? "Sorry — your enquiry could not be sent just now."} ${fallbackHelp}`);
    } catch {
      setStatus("error");
      setMessage(`Sorry — your enquiry could not be sent just now. ${fallbackHelp}`);
    }
  }

  const err = (f: EnquiryField) => errors[f];
  const describedBy = (f: EnquiryField, hint?: boolean) => cn(err(f) && `${f}-error`, hint && `${f}-hint`) || undefined;
  const fieldClass = (f: EnquiryField) => cn(inputBase, err(f) ? "border-red-700/70" : "border-line hover:border-navy-900/30");
  const pending = status === "sending";

  return (
    <form ref={formRef} action={ENQUIRY_ENDPOINT} method="post" onSubmit={onSubmit} noValidate className="space-y-6">
      {status !== "idle" && status !== "sending" && (
        <div
          ref={statusRef}
          tabIndex={-1}
          role={status === "error" ? "alert" : "status"}
          className={cn(
            "flex gap-3 rounded-sm border p-4 text-[0.9375rem] leading-relaxed outline-none",
            status === "success" && "border-emerald-700/30 bg-emerald-50 text-emerald-900",
            status === "error" && "border-red-700/30 bg-red-50 text-red-900",
            status === "unavailable" && "border-gold-500/40 bg-gold-200/40 text-navy-900",
          )}
        >
          {status === "success" && <CheckCircle2 aria-hidden className="mt-0.5 size-5 shrink-0" />}
          {status === "error" && <AlertCircle aria-hidden className="mt-0.5 size-5 shrink-0" />}
          {status === "unavailable" && <Info aria-hidden className="mt-0.5 size-5 shrink-0 text-gold-700" />}
          <p>{message}</p>
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="name" className="mb-2 block text-sm font-semibold text-navy-900">
            Parent / Guardian Name <span className="text-gold-700" aria-hidden>*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={120}
            aria-invalid={Boolean(err("name"))}
            aria-describedby={describedBy("name")}
            className={fieldClass("name")}
          />
          {err("name") && (
            <p id="name-error" className="mt-2 text-sm text-red-800">
              {err("name")}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-navy-900">
            Phone Number <span className="text-gold-700" aria-hidden>*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            maxLength={40}
            aria-invalid={Boolean(err("phone"))}
            aria-describedby={describedBy("phone")}
            className={fieldClass("phone")}
          />
          {err("phone") && (
            <p id="phone-error" className="mt-2 text-sm text-red-800">
              {err("phone")}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold text-navy-900">
            Email <span className="font-normal text-subtle">(optional)</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            maxLength={160}
            aria-invalid={Boolean(err("email"))}
            aria-describedby={describedBy("email")}
            className={fieldClass("email")}
          />
          {err("email") && (
            <p id="email-error" className="mt-2 text-sm text-red-800">
              {err("email")}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="interest" className="mb-2 block text-sm font-semibold text-navy-900">
            Child&rsquo;s Class / Admission Interest <span className="text-gold-700" aria-hidden>*</span>
          </label>
          <div className="relative">
            <select
              id="interest"
              name="interest"
              required
              defaultValue=""
              aria-invalid={Boolean(err("interest"))}
              aria-describedby={describedBy("interest")}
              className={cn(fieldClass("interest"), "appearance-none pr-10")}
            >
              <option value="" disabled>
                Select a class
              </option>
              {classOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <svg aria-hidden viewBox="0 0 20 20" className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-navy-700">
              <path d="M5 7.5l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          {err("interest") && (
            <p id="interest-error" className="mt-2 text-sm text-red-800">
              {err("interest")}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-2 block text-sm font-semibold text-navy-900">
            Message <span className="font-normal text-subtle">(optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            maxLength={MAX_MESSAGE}
            aria-invalid={Boolean(err("message"))}
            aria-describedby={describedBy("message", true)}
            className={cn(fieldClass("message"), "resize-y")}
          />
          <p id="message-hint" className="mt-2 text-sm text-subtle">
            Tell us your child&rsquo;s age, current class, or anything you&rsquo;d like to ask.
          </p>
          {err("message") && (
            <p id="message-error" className="mt-1 text-sm text-red-800">
              {err("message")}
            </p>
          )}
        </div>
      </div>

      {/* Honeypot — hidden from people and assistive technology */}
      <div aria-hidden className="sr-only">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-subtle">
          Fields marked <span className="text-gold-700">*</span> are required.
        </p>
        <button type="submit" disabled={pending} className={buttonClasses("primary", "lg", "w-full sm:w-auto")}>
          {pending ? (
            <>
              <Loader2 aria-hidden className="size-4 animate-spin" />
              <span>Sending…</span>
            </>
          ) : (
            <>
              <span>Send Enquiry</span>
              <Send aria-hidden className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
