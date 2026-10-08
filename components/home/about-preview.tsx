import { ArrowRight } from "lucide-react";
import { aboutCopy, approachShift } from "@/content/copy";
import { school } from "@/content/site";
import { ButtonLink } from "@/components/shared/button-link";
import { MaskLines, Reveal } from "@/components/shared/reveal";
import { SectionLabel } from "@/components/shared/section-label";

/** Less-of / more-of transformation — a change of balance, not a criticism. */
export function ApproachShift() {
  return (
    <Reveal direction="fade" className="relative grid overflow-hidden rounded-md bg-paper md:grid-cols-[1fr_auto_1.25fr]">
      <div className="p-7 sm:p-10 lg:p-12">
        <p className="eyebrow text-subtle">{approachShift.fromLabel}</p>
        <Reveal as="ul" stagger className="mt-6 space-y-2">
          {approachShift.from.map((w) => (
            <li key={w} className="font-display text-[clamp(1.5rem,1.2rem+1.4vw,2.25rem)] leading-tight text-[#68728a]">
              {w}
            </li>
          ))}
        </Reveal>
      </div>

      <div aria-hidden className="relative flex items-center justify-center py-2 md:px-2">
        <span className="absolute inset-x-7 top-1/2 h-px bg-navy-900/10 md:inset-x-auto md:inset-y-10 md:left-1/2 md:top-auto md:h-auto md:w-px" />
        <span className="relative grid size-12 place-items-center rounded-full border border-navy-900/15 bg-ivory text-gold-700">
          <ArrowRight className="size-5 rotate-90 md:rotate-0" strokeWidth={1.5} />
        </span>
      </div>

      <div className="bg-navy-900 p-7 text-ivory sm:p-10 lg:p-12">
        <p className="eyebrow text-gold-300">{approachShift.toLabel}</p>
        <Reveal as="ul" stagger delay={200} className="mt-6 space-y-2">
          {approachShift.to.map((w) => (
            <li key={w} className="font-display text-[clamp(1.5rem,1.2rem+1.4vw,2.25rem)] italic leading-tight">
              {w}
            </li>
          ))}
        </Reveal>
      </div>
    </Reveal>
  );
}

export function AboutPreview() {
  return (
    <section aria-labelledby="about-title" className="section-y relative bg-warm-white">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SectionLabel index="01">About Saint Mary&rsquo;s</SectionLabel>
              <Reveal direction="mask" as="h2" id="about-title" className="mt-6 text-display-lg text-navy-900">
                <MaskLines
                  lines={[
                    "A School Built Around",
                    <em key="em" className="text-navy-700">
                      How Children Grow.
                    </em>,
                  ]}
                />
              </Reveal>
              <Reveal delay={200} className="mt-10 flex items-center gap-4 text-sm text-muted">
                <span className="font-display text-3xl text-gold-700">{school.established}</span>
                <span aria-hidden className="h-8 w-px bg-line" />
                <span className="leading-snug">
                  Established in
                  <br />
                  Jagda, Raurkela
                </span>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 lg:pt-2">
            <Reveal>
              <p className="font-display text-display-sm text-navy-900">{aboutCopy.intro}</p>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-7 text-lg leading-relaxed text-muted">{aboutCopy.standard}</p>
            </Reveal>

            <Reveal className="mt-12 grid gap-6 border-t border-line pt-10 sm:grid-cols-[auto_1fr] sm:gap-8">
              <span aria-hidden className="font-display text-sm text-gold-700">i.</span>
              <div>
                <p className="font-display text-2xl italic leading-snug text-navy-900">{aboutCopy.joyful}</p>
                <p className="mt-4 leading-relaxed text-muted">
                  {aboutCopy.dismantle} {aboutCopy.replace}
                </p>
              </div>
            </Reveal>

            <Reveal className="mt-10 grid gap-6 border-t border-line pt-10 sm:grid-cols-[auto_1fr] sm:gap-8">
              <span aria-hidden className="font-display text-sm text-gold-700">ii.</span>
              <div>
                <p className="font-display text-2xl italic leading-snug text-navy-900">
                  Traditional ethics, 21st-century capabilities.
                </p>
                <p className="mt-4 leading-relaxed text-muted">{aboutCopy.bridge}</p>
              </div>
            </Reveal>

            <Reveal className="mt-10">
              <ButtonLink href="/about" variant="outline" arrow>
                Learn About Saint Mary&rsquo;s
              </ButtonLink>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 lg:mt-24">
          <ApproachShift />
        </div>
      </div>
    </section>
  );
}
