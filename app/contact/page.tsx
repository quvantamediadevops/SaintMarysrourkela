import type { Metadata } from "next";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { CampusLocation } from "@/components/contact/campus-location";
import { ContactActions } from "@/components/contact/contact-actions";
import { EnquiryForm } from "@/components/contact/enquiry-form";
import { InstagramIcon } from "@/components/shared/instagram-icon";
import { PageHero } from "@/components/shared/page-hero";
import { MaskLines, Reveal } from "@/components/shared/reveal";
import { SectionLabel } from "@/components/shared/section-label";
import { school } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact Saint Mary’s School, Plot No. JD-119, Jagda, Raurkela, Odisha – 769042. Call 096929 20138, email st.maryssckl22@gmail.com or send an admission enquiry.",
  path: "/contact",
});

const channels = [
  {
    key: "visit",
    label: "Visit Us",
    icon: MapPin,
    value: "Jagda, Raurkela",
    detail: school.address.short,
    href: "#location",
    cta: "See the map",
    external: false,
  },
  {
    key: "call",
    label: "Call Us",
    icon: Phone,
    value: school.contact.phone.display,
    detail: "School office",
    href: school.contact.phone.href,
    cta: "Call now",
    external: false,
  },
  {
    key: "email",
    label: "Email Us",
    icon: Mail,
    value: school.contact.email.display,
    detail: "We’ll reply as soon as we can",
    href: school.contact.email.href,
    cta: "Write to us",
    external: false,
  },
  {
    key: "instagram",
    label: "Instagram",
    icon: InstagramIcon,
    value: school.instagram.handle,
    detail: "Moments from school life",
    href: school.instagram.href,
    cta: "Follow",
    external: true,
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb={{ name: "Contact", path: "/contact" }}
        eyebrow="Contact"
        watermark="Hello"
        title={["We’d Love to", <em key="e" className="text-navy-700">Hear From You.</em>]}
        intro={<p>Whether you&rsquo;re exploring admission or simply have a question, we&rsquo;re a call, an email or a visit away.</p>}
      />

      {/* Contact channels — a ruled ledger, not cards */}
      <section aria-label="Ways to reach the school" className="border-b border-line bg-warm-white">
        <Reveal as="ul" stagger className="shell grid sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((c, i) => {
            const Icon = c.icon;
            return (
              <li
                key={c.key}
                className={[
                  "border-line",
                  i > 0 ? "border-t sm:border-t-0" : "",
                  i >= 2 ? "sm:border-t lg:border-t-0" : "",
                  i % 2 === 1 ? "sm:border-l" : "",
                  i > 0 ? "lg:border-l" : "",
                ].join(" ")}
              >
                <a
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={[
                    "group flex h-full flex-col py-8 transition-colors duration-300 sm:px-6 lg:py-12",
                    i % 2 === 0 ? "sm:pl-0" : "",
                    i === 0 ? "lg:pl-0" : "lg:pl-6",
                    i === channels.length - 1 ? "lg:pr-0" : "",
                  ].join(" ")}
                >
                  <span className="flex items-center justify-between">
                    <span className="eyebrow flex items-center gap-2.5 text-gold-700">
                      <Icon aria-hidden className="size-4" strokeWidth={1.75} />
                      {c.label}
                    </span>
                    <ArrowUpRight
                      aria-hidden
                      className="size-4 text-navy-900/40 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-navy-900"
                    />
                  </span>
                  <span
                    className={[
                      "mt-6 font-display leading-tight text-navy-900 [overflow-wrap:anywhere]",
                      c.key === "email" ? "text-[1.2rem] lg:text-[1.05rem] xl:text-[1.2rem]" : "text-[1.45rem] lg:text-[1.3rem] xl:text-[1.5rem]",
                    ].join(" ")}
                  >
                    {c.value}
                  </span>
                  <span className="mt-2 text-sm text-muted">{c.detail}</span>
                  <span className="mt-6 text-sm font-semibold text-navy-900">
                    <span className="link-underline">{c.cta}</span>
                    {c.external && <span className="sr-only"> (opens Instagram in a new tab)</span>}
                  </span>
                </a>
              </li>
            );
          })}
        </Reveal>
      </section>

      <section id="enquiry" aria-labelledby="enquiry-title" className="section-y bg-ivory">
        <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionLabel>Send an Enquiry</SectionLabel>
              <Reveal direction="mask" as="h2" id="enquiry-title" className="mt-6 text-display-md text-navy-900">
                <MaskLines lines={["Ask Us", <em key="e" className="text-navy-700">Anything.</em>]} />
              </Reveal>
              <Reveal delay={100}>
                <p className="mt-6 leading-relaxed text-muted">
                  Share a few details and the school office will get back to you. For anything urgent, a phone call is
                  quickest.
                </p>
              </Reveal>
              <Reveal delay={160} className="mt-8">
                <ContactActions stacked />
              </Reveal>

              {/* Instagram */}
              <Reveal delay={200} className="mt-10 border-t border-line pt-8">
                <p className="eyebrow text-gold-700">Follow Saint Mary&rsquo;s</p>
                <a
                  href={school.instagram.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-4 flex items-center gap-4"
                >
                  <span className="grid size-12 place-items-center rounded-full bg-navy-900 text-gold-300 transition-transform duration-300 group-hover:-rotate-6">
                    <InstagramIcon aria-hidden className="size-5" strokeWidth={1.6} />
                  </span>
                  <span>
                    <span className="block font-display text-xl text-navy-900">
                      <span className="link-underline">{school.instagram.handle}</span>
                    </span>
                    <span className="block text-sm text-muted">Instagram · opens in a new tab</span>
                  </span>
                </a>
              </Reveal>
            </div>
          </div>

          <Reveal direction="scale" className="lg:col-span-7 lg:col-start-6">
            <div className="rounded-md border border-line bg-white p-6 sm:p-10">
              <EnquiryForm />
            </div>
          </Reveal>
        </div>
      </section>

      <CampusLocation tone="paper" />
    </>
  );
}
