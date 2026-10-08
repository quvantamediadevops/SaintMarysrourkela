import { Check } from "lucide-react";
import { pillars } from "@/content/copy";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

export function LearningPhilosophy() {
  return (
    <section aria-labelledby="philosophy-title" className="section-y relative bg-paper">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <SectionHeading
              id="philosophy-title"
              eyebrow="Our Approach"
              title={
                <>
                  Education That Goes <em className="text-navy-700">Beyond the Classroom.</em>
                </>
              }
            />
          </Reveal>
          <Reveal delay={100} className="lg:col-span-4 lg:col-start-9">
            <p className="text-lg leading-relaxed text-muted">
              Four qualities guide everything we do — so children leave Saint Mary&rsquo;s knowing more, and becoming
              more.
            </p>
          </Reveal>
        </div>

        <ol className="mt-14 grid border-t border-navy-900/15 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <Reveal
                as="li"
                key={pillar.title}
                delay={i * 90}
                className={[
                  "group relative flex flex-col border-b border-navy-900/15 py-7 sm:px-7 sm:py-9 lg:border-b-0 lg:py-10",
                  i % 2 === 0 ? "sm:border-r sm:pl-0" : "sm:pr-0",
                  i === 1 ? "lg:pr-7" : "",
                  i === 2 ? "lg:pl-7" : "",
                  i < 3 ? "lg:border-r" : "lg:pr-0",
                ].join(" ")}
              >
                <span
                  aria-hidden
                  className="absolute -top-px left-0 h-0.5 w-0 bg-gold-500 transition-[width] duration-500 ease-[var(--ease-out-soft)] group-hover:w-full"
                />
                <div className="flex items-center justify-between">
                  <span className="font-display text-sm tabular-nums text-gold-700">0{i + 1}</span>
                  <Icon aria-hidden className="size-6 text-navy-700" strokeWidth={1.4} />
                </div>
                <h3 className="mt-4 text-display-sm sm:mt-10 text-navy-900">{pillar.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{pillar.summary}</p>
                <ul className="mt-auto space-y-2 pt-5 sm:pt-8">
                  {pillar.practices.map((practice) => (
                    <li key={practice} className="flex items-start gap-2.5 text-[0.9375rem] font-medium text-navy-900">
                      <Check aria-hidden className="mt-1 size-3.5 shrink-0 text-gold-700" strokeWidth={2.5} />
                      {practice}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
