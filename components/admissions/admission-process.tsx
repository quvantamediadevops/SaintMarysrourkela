import { admissionSteps } from "@/content/copy";
import { MaskLines, Reveal } from "@/components/shared/reveal";
import { SectionLabel } from "@/components/shared/section-label";

/** Discover → Visit → Apply → Review → Begin. Horizontal on desktop, vertical on phones. */
export function AdmissionProcess() {
  return (
    <section id="process" aria-labelledby="process-title" className="section-y bg-warm-white">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-7">
            <SectionLabel>The Admission Journey</SectionLabel>
            <Reveal direction="mask" as="h2" id="process-title" className="mt-6 text-display-lg text-navy-900">
              <MaskLines lines={["Five Steps,", <em key="e" className="text-navy-700">One Welcoming Journey.</em>]} />
            </Reveal>
          </div>
          <Reveal delay={120} className="lg:col-span-4 lg:col-start-9">
            <p className="text-lg leading-relaxed text-muted">
              Every family&rsquo;s journey is personal. Here is what to expect, from your first look to your
              child&rsquo;s first day.
            </p>
          </Reveal>
        </div>

        <Reveal direction="fade" className="relative mt-16 lg:mt-24">
          {/* Connecting rules — drawn with transform only */}
          <span aria-hidden className="draw-x absolute left-0 right-0 top-7 hidden h-px bg-navy-900/20 lg:block" />
          <span aria-hidden className="draw-y absolute bottom-8 left-7 top-7 w-px bg-navy-900/20 lg:hidden" />

          <Reveal as="ol" stagger className="relative grid gap-10 lg:grid-cols-5 lg:gap-6">
            {admissionSteps.map((step, i) => (
              <li key={step.title} className="grid grid-cols-[3.5rem_1fr] gap-x-5 lg:block">
                <span
                  className={
                    "relative z-10 grid size-14 place-items-center rounded-full border font-display text-lg tabular-nums " +
                    (i === 0 ? "border-navy-900 bg-navy-900 text-gold-300" : "border-navy-900/20 bg-warm-white text-navy-900")
                  }
                >
                  <span className="sr-only">Step </span>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="pt-2.5 lg:pt-8 lg:pr-2">
                  <h3 className="font-display text-[1.75rem] leading-none text-navy-900 lg:text-[2rem]">{step.title}</h3>
                  <p className="mt-2 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-gold-700">{step.detail}</p>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">{step.text}</p>
                </div>
              </li>
            ))}
          </Reveal>
        </Reveal>

        <Reveal className="mt-16 flex gap-4 border-l-2 border-gold-500 py-1 pl-5 text-[0.9375rem] leading-relaxed text-muted lg:mt-20 lg:max-w-3xl">
          <p>
            <span className="font-semibold text-navy-900">Please note: </span>
            Admission forms, timelines, eligibility and any applicable fees are provided directly by the school office.
            Submitting a form does not by itself confirm admission — every application is reviewed by the school.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
