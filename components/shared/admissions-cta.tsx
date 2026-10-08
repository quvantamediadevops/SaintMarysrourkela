import type { ReactNode } from "react";
import { images } from "@/content/images";
import { school } from "@/content/site";
import { ButtonLink } from "./button-link";
import { MaskLines, Reveal } from "./reveal";
import { SchoolImage } from "./school-image";
import { SectionLabel } from "./section-label";

type Variant = "band" | "split" | "quiet";

interface CtaLink {
  label: string;
  href: string;
}

interface AdmissionsCtaProps {
  variant?: Variant;
  /** Headline as lines; the last line is set in italic. */
  lines?: [string, string];
  text?: string;
  primary?: CtaLink;
  secondary?: CtaLink;
}

const defaults = {
  lines: ["A Strong Beginning", "Starts Here."] as [string, string],
  text: "Discover an education that balances academic discipline with curiosity, creativity and character.",
  primary: { label: "Admission Information", href: "/admissions" },
  secondary: { label: "Visit Our Campus", href: "/contact#location" },
};

function Headline({ lines, className, emClass }: { lines: [string, string]; className: string; emClass: string }): ReactNode {
  return (
    <Reveal direction="mask" as="h2" id="cta-title" className={className}>
      <MaskLines lines={[lines[0], <em key="e" className={emClass}>{lines[1]}</em>]} />
    </Reveal>
  );
}

/**
 * Recurring admissions call-to-action in three compositions, so the same
 * message never looks identical from page to page.
 */
export function AdmissionsCta({
  variant = "band",
  lines = defaults.lines,
  text = defaults.text,
  primary = defaults.primary,
  secondary = defaults.secondary,
}: AdmissionsCtaProps) {
  if (variant === "split") {
    return (
      <section aria-labelledby="cta-title" className="section-y bg-ivory">
        <div className="shell">
          <div className="grid overflow-hidden rounded-md bg-paper md:grid-cols-2">
            <Reveal direction="fade">
              <SchoolImage
                image={images.admissionsVisit}
                zoom
                sizes="(min-width: 768px) 50vw, 100vw"
                className="aspect-[16/10] md:aspect-auto md:h-full md:min-h-[28rem]"
              />
            </Reveal>
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
              <SectionLabel>Admissions</SectionLabel>
              <Headline lines={lines} className="mt-5 text-display-md text-navy-900" emClass="text-navy-700" />
              <Reveal delay={150}>
                <p className="mt-5 max-w-md leading-relaxed text-muted">{text}</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href={primary.href} arrow>
                    {primary.label}
                  </ButtonLink>
                  <ButtonLink href={secondary.href} variant="outline">
                    {secondary.label}
                  </ButtonLink>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (variant === "quiet") {
    return (
      <section aria-labelledby="cta-title" className="border-t border-line bg-paper">
        <div className="shell section-y-sm flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Headline lines={lines} className="text-display-md text-navy-900" emClass="text-navy-700" />
            <Reveal delay={120}>
              <p className="mt-4 leading-relaxed text-muted">{text}</p>
            </Reveal>
          </div>
          <Reveal delay={180} className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <ButtonLink href={primary.href} arrow>
              {primary.label}
            </ButtonLink>
            <ButtonLink href={secondary.href} variant="outline">
              {secondary.label}
            </ButtonLink>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section aria-labelledby="cta-title" className="on-dark relative overflow-hidden bg-navy-800 text-ivory">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines text-ivory opacity-50" />
      <svg
        aria-hidden
        viewBox="0 0 200 200"
        className="pointer-events-none absolute -right-32 top-1/2 size-[36rem] -translate-y-1/2 text-gold-400/20 sm:size-[46rem]"
      >
        <circle cx="100" cy="100" r="99" fill="none" stroke="currentColor" strokeWidth="0.35" />
        <circle cx="100" cy="100" r="66" fill="none" stroke="currentColor" strokeWidth="0.35" />
      </svg>
      <div className="shell section-y-lg relative grid gap-12 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <SectionLabel tone="dark">Admissions · {school.classes}</SectionLabel>
          <Headline
            lines={lines}
            className="mt-7 text-display-xl text-ivory"
            emClass="text-gold-300"
          />
          <Reveal delay={150}>
            <p className="mt-8 max-w-xl text-lead text-sky-100/80">{text}</p>
          </Reveal>
        </div>
        <Reveal delay={220} className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:flex-col lg:items-stretch">
          <ButtonLink href={primary.href} variant="gold" size="lg" arrow>
            {primary.label}
          </ButtonLink>
          <ButtonLink href={secondary.href} variant="outline-light" size="lg">
            {secondary.label}
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
