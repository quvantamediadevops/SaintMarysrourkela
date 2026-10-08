/**
 * Enquiry form contract — shared by the browser form (components/contact/enquiry-form.tsx)
 * and the Cloudflare Worker endpoint (worker/index.ts), so validation is identical on both sides.
 * Keep this file free of browser- or Node-only APIs.
 */

export const ENQUIRY_ENDPOINT = "/api/enquiry";

export const classOptions = [
  "Nursery",
  "Standard I",
  "Standard II",
  "Standard III",
  "Standard IV",
  "Standard V",
  "Standard VI",
  "Standard VII",
  "Standard VIII",
  "Standard IX",
  "Standard X",
  "General enquiry",
] as const;

export const enquiryFields = ["name", "phone", "email", "interest", "message"] as const;
export type EnquiryField = (typeof enquiryFields)[number];
export type EnquiryValues = Record<EnquiryField, string>;
export type FieldErrors = Partial<Record<EnquiryField, string>>;

/** JSON returned by the endpoint. */
export interface EnquiryResponse {
  status: "success" | "error" | "unavailable";
  message?: string;
  fieldErrors?: FieldErrors;
}

export const MAX_MESSAGE = 2000;

export function readEnquiry(get: (key: string) => unknown): EnquiryValues {
  const read = (k: string) => {
    const v = get(k);
    return typeof v === "string" ? v.trim() : "";
  };
  return {
    name: read("name").slice(0, 120),
    phone: read("phone").slice(0, 40),
    email: read("email").slice(0, 160),
    interest: read("interest").slice(0, 60),
    message: read("message").slice(0, MAX_MESSAGE + 1),
  };
}

export function validateEnquiry(values: EnquiryValues): FieldErrors {
  const errors: FieldErrors = {};
  const digits = values.phone.replace(/[^\d]/g, "");

  if (values.name.length < 2) errors.name = "Please enter the parent or guardian’s name.";
  if (digits.length < 10 || digits.length > 13) errors.phone = "Please enter a valid phone number (10 digits).";
  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email)) errors.email = "Please enter a valid email address.";
  if (!(classOptions as readonly string[]).includes(values.interest)) errors.interest = "Please choose a class or ‘General enquiry’.";
  if (values.message.length > MAX_MESSAGE) errors.message = "Please keep your message under 2,000 characters.";

  return errors;
}
