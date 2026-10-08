import type { CSSProperties } from "react";
import { images } from "@/content/images";
import { school } from "@/content/site";
import { ButtonLink } from "@/components/shared/button-link";
import { MaskLines } from "@/components/shared/reveal";
import { SchoolImage } from "@/components/shared/school-image";
import { cn } from "@/lib/cn";

/** Page-load choreography (ms). Header itself animates at 0. */
const T = { eyebrow: 100, line1: 180, line2: 260, copy: 350, ctas: 430, info: 520, visual: 600 } as const;
const at = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

const facts = [
  { label: "Established", value: String(school.established) },
  { label: "Affiliation", value: school.affiliation },
  { label: "Type", value: "Co-ed" },
  { label: "Classes", value: "Nursery – X" },
  { label: "Campus", value: `${school.locality}, ${school.city}` },
];

/** Circular "established" seal set on a text path. */
function EstablishedSeal({ className }: { className?: string }) {
  return (
    <div className={cn("relative grid place-items-center rounded-full bg-navy-900 text-ivory", className)}>
      <svg aria-hidden viewBox="0 0 120 120" className="absolute inset-0 size-full text-gold-300">
        <defs>
          <path id="seal-path" d="M60,60 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0" />
        </defs>
        <circle cx="60" cy="60" r="56" fill="none" stroke="currentColor" strokeOpacity="0.35" strokeWidth="0.75" />
        <text fontSize="8.2" letterSpacing="2.4" fill="currentColor" fontFamily="var(--font-sans)" fontWeight="600">
          <textPath href="#seal-path">SAINT MARY’S SCHOOL · JAGDA · RAURKELA ·</textPath>
        </text>
      </svg>
      <p className="relative text-center">
        <span className="block text-[0.5625rem] font-semibold uppercase tracking-[0.2em] text-gold-300">Est.</span>
        <span className="block font-display text-[1.6rem] leading-none sm:text-[1.85rem]">{school.established}</span>
      </p>
    </div>
  );
}

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-ivory">
      {/* Quiet academic geometry */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[55%] grid-lines text-navy-900 [mask-image:radial-gradient(ellipse_at_70%_45%,black,transparent_72%)] lg:block"
      />

      <div className="shell relative">
        <div className="grid items-center gap-14 pb-14 pt-6 sm:pt-10 lg:min-h-[min(calc(100svh-11rem),46rem)] lg:grid-cols-12 lg:gap-8 lg:pb-16 lg:pt-8">
          {/* Copy */}
          <div className="relative z-10 lg:col-span-7">
            <p className="load-up eyebrow flex items-center gap-3 text-gold-700" style={at(T.eyebrow)}>
              <span aria-hidden className="h-px w-8 bg-gold-500" />
              Saint Mary&rsquo;s School · Jagda
            </p>

            <h1 id="hero-title" className="mt-6 text-hero text-navy-900 sm:mt-8">
              <MaskLines
                mode="load"
                start={T.line1}
                step={T.line2 - T.line1}
                lines={[
                  "Where Joy",
                  <>
                    Meets <em className="text-navy-700">Growth.</em>
                  </>,
                ]}
              />
            </h1>

            <p className="load-up mt-8 max-w-[34rem] text-lead text-muted sm:mt-10" style={at(T.copy)}>
              A nurturing ICSE learning environment where strong academics, character, creativity and curiosity grow
              together.
            </p>

            <div className="load-up mt-9 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:items-center" style={at(T.ctas)}>
              <ButtonLink href="/admissions" size="lg" arrow>
                Explore Admissions
              </ButtonLink>
              <ButtonLink href="/about" size="lg" variant="outline">
                Discover Our School
              </ButtonLink>
            </div>
          </div>

          {/* Visual composition */}
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto w-full max-w-[26rem] pb-8 pl-6 sm:max-w-md lg:max-w-none lg:pb-12 lg:pl-10">
              {/* Decorative arc */}
              <svg
                aria-hidden
                viewBox="0 0 200 200"
                className="load-up absolute -right-10 -top-10 size-48 text-gold-500/40 sm:size-56 lg:-right-14 lg:-top-12 lg:size-72"
                style={at(T.visual + 200)}
              >
                <circle cx="100" cy="100" r="99" fill="none" stroke="currentColor" strokeWidth="0.6" />
                <circle cx="100" cy="100" r="78" fill="none" stroke="currentColor" strokeWidth="0.4" strokeDasharray="1 5" />
              </svg>

              {/* HERO PHOTOGRAPH — content/images.ts → hero */}
              <div className="load-visual relative" style={at(T.visual)}>
                <SchoolImage
                  image={images.hero}
                  compact
                  priority
                  sizes="(min-width: 1024px) 38vw, (min-width: 640px) 28rem, 90vw"
                  className="aspect-[4/5] rounded-md shadow-lift"
                />
              </div>

              {/* DETAIL PHOTOGRAPH — content/images.ts → heroDetail */}
              <div className="load-visual absolute bottom-0 left-0 w-[42%]" style={at(T.visual + 160)}>
                <SchoolImage
                  image={images.heroDetail}
                  compact
                  sizes="(min-width: 1024px) 16vw, 40vw"
                  className="aspect-square rounded-md shadow-lift ring-[6px] ring-ivory"
                />
              </div>

              <div className="load-up absolute -right-2 top-[12%] sm:-right-5" style={at(T.visual + 280)}>
                <EstablishedSeal className="size-24 shadow-soft ring-1 ring-gold-400/40 ring-offset-4 ring-offset-ivory sm:size-28" />
              </div>
            </div>
          </div>
        </div>

        {/* Institutional information strip */}
        <dl
          className="load-up grid grid-cols-2 gap-px border-y border-navy-900/15 bg-navy-900/15 lg:grid-cols-5"
          style={at(T.info)}
          aria-label="School at a glance"
        >
          {facts.map((fact, i) => (
            <div
              key={fact.label}
              className={cn(
                "flex flex-col gap-1 bg-ivory py-5 pr-4 even:pl-4 sm:py-6 lg:px-6 lg:first:pl-0 lg:last:pr-0 lg:even:pl-6",
                i === facts.length - 1 && "col-span-2 lg:col-span-1",
              )}
            >
              <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-subtle">{fact.label}</dt>
              <dd className="font-display text-[1.25rem] leading-tight text-navy-900 sm:text-[1.4rem]">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
