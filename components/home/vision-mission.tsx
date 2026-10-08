import { mission, vision } from "@/content/copy";
import { Reveal } from "@/components/shared/reveal";
import { SectionLabel } from "@/components/shared/section-label";

const EMPHASIS = "confident, empathetic, and future-ready individuals";

export function VisionMission({ index }: { index?: string }) {
  const [before, after] = vision.split(EMPHASIS);

  return (
    <section id="vision-mission" aria-labelledby="vm-title" className="section-y bg-ivory">
      <h2 id="vm-title" className="sr-only">
        Vision and Mission
      </h2>
      <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Vision — the large dark panel */}
        <div className="lg:col-span-6">
          <Reveal
            direction="scale"
            className="on-dark relative overflow-hidden rounded-md bg-navy-900 p-8 text-ivory sm:p-12 lg:sticky lg:top-28 lg:min-h-[32rem] lg:p-14"
          >
            <svg aria-hidden viewBox="0 0 200 200" className="absolute -bottom-24 -right-24 size-80 text-gold-400/20">
              <circle cx="100" cy="100" r="99" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="100" cy="100" r="41" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </svg>
            <SectionLabel index={index} tone="dark">
              Our Vision
            </SectionLabel>
            <p className="relative mt-10 font-display text-[clamp(1.6rem,1.25rem+1.5vw,2.4rem)] leading-[1.2] tracking-[-0.015em]">
              {before}
              <em className="text-gold-300">{EMPHASIS}</em>
              {after}
            </p>
          </Reveal>
        </div>

        {/* Mission — four numbered principles */}
        <div className="lg:col-span-6">
          <Reveal>
            <SectionLabel>Our Mission</SectionLabel>
          </Reveal>
          <Reveal as="ol" stagger className="mt-8 border-t border-navy-900/15">
            {mission.map((item, i) => (
              <li key={item.title} className="group grid grid-cols-[4rem_1fr] gap-x-4 border-b border-navy-900/15 py-8 sm:grid-cols-[5.5rem_1fr]">
                <span
                  aria-hidden
                  className="text-outline font-display text-[3.25rem] leading-[0.9] text-navy-900/35 transition-colors duration-500 group-hover:text-gold-500 sm:text-[4.25rem]"
                >
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-display text-2xl leading-snug text-navy-900">
                    <span className="sr-only">{i + 1}. </span>
                    {item.title}
                  </h3>
                  <p className="mt-2.5 leading-relaxed text-muted">{item.text}</p>
                </div>
              </li>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
