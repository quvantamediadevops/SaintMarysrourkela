import { Check } from "lucide-react";
import { admissionRequirements } from "@/content/copy";
import { MaskLines, Reveal } from "@/components/shared/reveal";
import { SectionLabel } from "@/components/shared/section-label";

/** What the admission form asks for — grouped, scannable, not form-like. */
export function AdmissionRequirements() {
  const total = admissionRequirements.reduce((sum, g) => sum + g.items.length, 0);

  return (
    <section id="requirements" aria-labelledby="requirements-title" className="section-y bg-paper">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-7">
            <SectionLabel>Be Prepared</SectionLabel>
            <Reveal direction="mask" as="h2" id="requirements-title" className="mt-6 text-display-lg text-navy-900">
              <MaskLines lines={["What the Admission Form", <em key="e" className="text-navy-700">Asks For.</em>]} />
            </Reveal>
          </div>
          <Reveal delay={120} className="lg:col-span-4 lg:col-start-9">
            <p className="text-lg leading-relaxed text-muted">
              Taken from the school&rsquo;s own admission form, so you know what to have ready before you visit.
            </p>
            <p className="mt-4 text-sm text-subtle">
              {total} details · {admissionRequirements.length} sections
            </p>
          </Reveal>
        </div>

        <Reveal as="div" stagger className="mt-14 border-t border-navy-900/15 lg:mt-20">
          {admissionRequirements.map((group, gi) => {
            const Icon = group.icon;
            return (
              <section
                key={group.title}
                aria-labelledby={`req-${gi}`}
                className="grid gap-5 border-b border-navy-900/15 py-8 md:grid-cols-12 md:gap-10 md:py-10"
              >
                <div className="flex items-start gap-4 md:col-span-4">
                  <span className="font-display text-sm tabular-nums text-gold-700">{String(gi + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 id={`req-${gi}`} className="font-display text-2xl leading-tight text-navy-900 sm:text-[1.75rem]">
                      {group.title}
                    </h3>
                    <p className="mt-1.5 flex items-center gap-2 text-sm text-subtle">
                      <Icon aria-hidden className="size-3.5" strokeWidth={1.75} />
                      {group.items.length} {group.items.length === 1 ? "detail" : "details"}
                    </p>
                  </div>
                </div>
                <ul className="grid gap-x-8 gap-y-3 pl-8 sm:grid-cols-2 md:col-span-8 md:pl-0">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[0.9375rem] leading-snug text-navy-900">
                      <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-gold-700" strokeWidth={2} />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
