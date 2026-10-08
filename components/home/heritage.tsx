import { heritage } from "@/content/copy";
import { school } from "@/content/site";
import { MaskLines, Reveal } from "@/components/shared/reveal";

/** "1988" as an editorial moment — heritage without an invented timeline. */
export function Heritage() {
  return (
    <section aria-labelledby="heritage-title" className="section-y-lg relative overflow-hidden bg-paper">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines text-navy-900 opacity-60" />

      <div className="shell relative grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-10">
        <Reveal direction="mask" className="lg:col-span-8">
          <p
            aria-hidden
            className="select-none font-display text-[clamp(7.5rem,1rem+28vw,24rem)] leading-[0.8] tracking-[-0.05em] text-navy-900"
          >
            <MaskLines
              lines={[
                <>
                  19<span className="italic text-gold-500">88</span>
                </>,
              ]}
            />
          </p>
        </Reveal>

        <div className="border-t border-navy-900/15 pt-8 lg:col-span-4 lg:border-l lg:border-t-0 lg:pb-4 lg:pl-10 lg:pt-0">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-gold-700">
              <span aria-hidden className="h-px w-8 bg-gold-500" />
              Established {school.established}
            </p>
            <h2 id="heritage-title" className="mt-5 text-display-md text-navy-900">
              {heritage.lines[0]} <em className="text-navy-700">{heritage.lines[1]}</em>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 leading-relaxed text-muted">{heritage.body}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
