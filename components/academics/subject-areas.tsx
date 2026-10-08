import { subjectAreas } from "@/content/copy";
import { MaskLines, Reveal } from "@/components/shared/reveal";
import { SectionLabel } from "@/components/shared/section-label";

export function SubjectAreas() {
  return (
    <section aria-labelledby="subjects-title" className="section-y bg-paper">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionLabel>Across the Curriculum</SectionLabel>
            <Reveal direction="mask" as="h2" id="subjects-title" className="mt-6 text-display-md text-navy-900">
              <MaskLines lines={["A Balanced", <em key="e" className="text-navy-700">Education.</em>]} />
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-6 leading-relaxed text-muted">
                Academic subjects sit alongside creative, physical and character learning — each given its proper place.
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal as="ul" stagger className="grid border-t border-navy-900/15 sm:grid-cols-2 lg:col-span-8">
          {subjectAreas.map((area, i) => {
            const Icon = area.icon;
            return (
              <li
                key={area.title}
                className={[
                  "group border-b border-navy-900/15 py-7",
                  i % 2 === 0 ? "sm:border-r sm:pr-8" : "sm:pl-8",
                ].join(" ")}
              >
                <h3 className="flex items-center gap-3 font-display text-xl text-navy-900">
                  <Icon
                    aria-hidden
                    className="size-[1.125rem] text-gold-700 transition-transform duration-300 group-hover:-translate-y-0.5"
                    strokeWidth={1.6}
                  />
                  {area.title}
                </h3>
                <p className="mt-2 pl-[1.875rem] leading-relaxed text-muted">{area.text}</p>
              </li>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
