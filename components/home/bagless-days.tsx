import { bagless } from "@/content/copy";
import { images } from "@/content/images";
import { MaskLines, Reveal } from "@/components/shared/reveal";
import { SchoolImage } from "@/components/shared/school-image";
import { SectionLabel } from "@/components/shared/section-label";

export function BaglessDays({ index }: { index?: string }) {
  return (
    <section
      id="bagless-days"
      aria-labelledby="bagless-title"
      className="on-dark section-y-lg relative overflow-hidden bg-navy-900 text-ivory"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grid-lines text-ivory opacity-60 [mask-image:radial-gradient(ellipse_at_25%_30%,black,transparent_70%)]"
      />

      <div className="shell relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-7">
            <SectionLabel index={index} tone="dark">
              A Saint Mary&rsquo;s Signature
            </SectionLabel>
            <Reveal direction="mask" as="h2" id="bagless-title" className="mt-8 font-display uppercase text-ivory">
              <span className="block text-[clamp(4rem,1.6rem+11vw,10.5rem)] leading-[0.86] tracking-[-0.04em]">
                <MaskLines lines={["Bagless", <em key="d" className="normal-case text-gold-300">Days</em>]} />
              </span>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:pb-4">
            <Reveal>
              <p className="font-display text-display-sm italic text-ivory">
                Some of the best lessons don&rsquo;t need a textbook.
              </p>
              <p className="mt-5 text-lead text-sky-100/80">{bagless.intro}</p>
            </Reveal>
          </div>
        </div>

        {/* Verbs — the shape of a Bagless Day */}
        <Reveal
          as="ol"
          stagger
          className="mt-16 grid grid-cols-2 border-b border-ivory/15 lg:mt-24 lg:grid-cols-5"
          aria-label="What children do on Bagless Days"
        >
          {bagless.verbs.map((v, i) => (
            <li
              key={v.word}
              className={[
                "border-t border-ivory/15 py-7 pr-4 even:border-l even:pl-4 lg:border-l lg:px-6 lg:py-10 lg:first:border-l-0 lg:first:pl-0 lg:last:pr-0 lg:even:pl-6",
                i === bagless.verbs.length - 1 ? "col-span-2 lg:col-span-1" : "",
              ].join(" ")}
            >
              <span className="font-display text-xs tabular-nums text-gold-300/80">0{i + 1}</span>
              <p className="mt-3 font-display text-[clamp(1.3rem,0.95rem+1.05vw,1.7rem)] uppercase leading-none tracking-[0.01em] text-ivory">
                {v.word}
              </p>
              <p className="mt-2.5 text-sm text-sky-100/70">{v.text}</p>
            </li>
          ))}
        </Reveal>

        <div className="mt-16 grid grid-cols-12 gap-4 lg:mt-20 lg:gap-6">
          {/* BAGLESS DAY PHOTOGRAPHS — content/images.ts → baglessDays, baglessDaysDetail */}
          <Reveal direction="scale" className="col-span-12 sm:col-span-8">
            <SchoolImage
              image={images.baglessDays}
              sizes="(min-width: 640px) 60vw, 100vw"
              className="aspect-[16/10] rounded-md"
            />
          </Reveal>
          <Reveal direction="scale" delay={120} className="col-span-12 sm:col-span-4 sm:pt-16">
            <SchoolImage
              image={images.baglessDaysDetail}
              sizes="(min-width: 640px) 30vw, 100vw"
              className="aspect-[16/10] rounded-md sm:aspect-[4/5]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
