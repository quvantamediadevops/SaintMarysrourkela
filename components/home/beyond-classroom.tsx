import { beyondClassroom } from "@/content/copy";
import { images } from "@/content/images";
import { ButtonLink } from "@/components/shared/button-link";
import { MaskLines, Reveal } from "@/components/shared/reveal";
import { SchoolImage } from "@/components/shared/school-image";
import { SectionLabel } from "@/components/shared/section-label";

function Num({ n }: { n: number }) {
  return <span className="font-display text-sm tabular-nums text-gold-700">{String(n).padStart(2, "0")}</span>;
}

/**
 * Asymmetric editorial grid:
 *   large feature + two stacked features · two compact features · one wide panel.
 */
export function BeyondClassroom() {
  const [lead, a, b, c, d, wide] = beyondClassroom;
  if (!lead || !a || !b || !c || !d || !wide) return null;

  return (
    <section aria-labelledby="beyond-title" className="section-y bg-ivory">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-7">
            <SectionLabel index="02">Beyond the Timetable</SectionLabel>
            <Reveal direction="mask" as="h2" id="beyond-title" className="mt-6 text-display-lg text-navy-900">
              <MaskLines lines={["Learning Goes", <em key="e" className="text-navy-700">Beyond the Classroom.</em>]} />
            </Reveal>
          </div>
          <Reveal delay={120} className="lg:col-span-4 lg:col-start-9">
            <p className="text-lg leading-relaxed text-muted">
              Strong academics sit alongside the experiences that build confident, capable, caring children.
            </p>
          </Reveal>
        </div>

        {/* Row 1–2: large feature + two stacked */}
        <div className="mt-14 grid gap-x-6 gap-y-10 md:grid-cols-12 lg:mt-20">
          <Reveal as="article" className="group md:col-span-7 md:row-span-2 md:flex md:flex-col">
            <SchoolImage
              image={images[lead.image]}
              zoom
              sizes="(min-width: 768px) 56vw, 100vw"
              className="aspect-[4/3] rounded-md md:aspect-auto md:min-h-[24rem] md:flex-1"
            />
            <div className="mt-5 grid grid-cols-[2.5rem_1fr] gap-x-3">
              <Num n={1} />
              <div>
                <h3 className="text-display-sm text-navy-900">{lead.title}</h3>
                <p className="mt-2 max-w-md leading-relaxed text-muted">{lead.text}</p>
              </div>
            </div>
          </Reveal>

          {[a, b].map((f, i) => (
            <Reveal as="article" key={f.id} delay={100 + i * 90} className="group md:col-span-5">
              <SchoolImage
                image={images[f.image]}
                zoom
                sizes="(min-width: 768px) 40vw, 100vw"
                className="aspect-[16/10] rounded-md"
              />
              <div className="mt-4 grid grid-cols-[2.5rem_1fr] gap-x-3">
                <Num n={i + 2} />
                <div>
                  <h3 className="font-display text-2xl text-navy-900">{f.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-muted">{f.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Row 3: two compact, image beside text */}
        <div className="mt-12 grid gap-6 border-t border-line pt-12 md:grid-cols-2 md:gap-10">
          {[c, d].map((f, i) => (
            <Reveal as="article" key={f.id} delay={i * 90} className="group grid grid-cols-[7.5rem_1fr] items-center gap-5 sm:grid-cols-[10rem_1fr] sm:gap-7">
              <SchoolImage image={images[f.image]} zoom compact sizes="10rem" className="aspect-square rounded-md" />
              <div>
                <Num n={i + 4} />
                <h3 className="mt-1 font-display text-2xl text-navy-900">{f.title}</h3>
                <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-muted">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Row 4: wide closing panel */}
        <Reveal as="article" className="group on-dark mt-12 grid overflow-hidden rounded-md bg-navy-900 text-ivory md:grid-cols-12">
          <div className="flex flex-col justify-center p-8 sm:p-12 md:col-span-7 lg:p-16">
            <span className="font-display text-sm tabular-nums text-gold-300">06</span>
            <h3 className="mt-3 text-display-md text-ivory">
              {wide.title}, <em className="text-gold-300">every day.</em>
            </h3>
            <p className="mt-5 max-w-lg text-lead text-sky-100/80">{wide.text}</p>
            <div className="mt-8">
              <ButtonLink href="/student-life" variant="outline-light" arrow>
                Explore Student Life
              </ButtonLink>
            </div>
          </div>
          <SchoolImage
            image={images[wide.image]}
            zoom
            sizes="(min-width: 768px) 40vw, 100vw"
            className="aspect-[16/10] md:col-span-5 md:aspect-auto md:min-h-[22rem]"
          />
        </Reveal>
      </div>
    </section>
  );
}
