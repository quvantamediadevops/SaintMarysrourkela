import { stages } from "@/content/copy";
import { MaskLines, Reveal } from "@/components/shared/reveal";
import { SectionLabel } from "@/components/shared/section-label";

/** Nursery → Primary → Middle → Secondary. A horizontal timeline from lg, vertical on phones. */
export function LearningJourney() {
  return (
    <section id="journey" aria-labelledby="journey-title" className="section-y bg-warm-white">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-7">
            <SectionLabel>The Learning Journey</SectionLabel>
            <Reveal direction="mask" as="h2" id="journey-title" className="mt-6 text-display-lg text-navy-900">
              <MaskLines lines={["Each Stage Builds", <em key="e" className="text-navy-700">on the One Before.</em>]} />
            </Reveal>
          </div>
          <Reveal delay={120} className="lg:col-span-4 lg:col-start-9">
            <p className="text-lg leading-relaxed text-muted">
              Learning follows the ICSE framework and grows with the child — from play-based beginnings to the
              focused secondary years.
            </p>
          </Reveal>
        </div>

        <Reveal direction="fade" className="relative mt-16 lg:mt-24">
          <span aria-hidden className="draw-x absolute left-0 right-0 top-[7.25rem] hidden h-px bg-navy-900/20 lg:block" />

          <Reveal as="ol" stagger className="grid gap-px lg:grid-cols-4 lg:gap-8">
            {stages.map((stage, i) => (
              <li
                key={stage.id}
                id={stage.id}
                className="relative grid grid-cols-[4.5rem_1fr] gap-x-5 border-t border-navy-900/15 py-10 first:border-t-0 first:pt-0 sm:grid-cols-[6rem_1fr] lg:block lg:border-t-0 lg:py-0"
              >
                <div className="lg:h-[7.25rem]">
                  <span
                    aria-hidden
                    className="text-outline block font-display text-[4.25rem] leading-[0.85] tracking-[-0.04em] text-navy-900/40 sm:text-[5.5rem] lg:text-[6.5rem]"
                  >
                    0{i + 1}
                  </span>
                </div>
                {/* Node on the rule */}
                <span aria-hidden className="absolute -top-[5px] left-0 hidden size-[11px] rounded-full border-2 border-gold-500 bg-warm-white lg:top-[calc(7.25rem-5px)] lg:block" />

                <div className="lg:pt-10">
                  <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-gold-700">{stage.range}</p>
                  <h3 className="mt-2 font-display text-[1.75rem] leading-tight text-navy-900">{stage.name}</h3>
                  <p className="mt-4 font-display text-xl italic leading-snug text-navy-700">{stage.headline}</p>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">{stage.body}</p>
                  <ul className="mt-5 space-y-1.5 border-t border-line pt-5" aria-label={`${stage.name} focus areas`}>
                    {stage.focus.map((f) => (
                      <li key={f} className="flex gap-2.5 text-sm text-navy-900">
                        <span aria-hidden className="mt-[0.6em] h-px w-3 shrink-0 bg-gold-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </Reveal>
        </Reveal>
      </div>
    </section>
  );
}
