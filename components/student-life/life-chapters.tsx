import { lifeStories } from "@/content/copy";
import { images } from "@/content/images";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/shared/reveal";
import { SchoolImage } from "@/components/shared/school-image";

/**
 * Editorial image grid — each story has its own footprint and ratio.
 * [span on lg, image ratio, extra offset]
 */
const layout: { col: string; ratio: string; offset?: string; wide?: boolean }[] = [
  { col: "lg:col-span-7", ratio: "aspect-[4/3] lg:aspect-[5/4]" },
  { col: "lg:col-span-5", ratio: "aspect-[4/3] lg:aspect-[3/4]", offset: "lg:mt-32" },
  { col: "lg:col-span-5", ratio: "aspect-square" },
  { col: "lg:col-span-7", ratio: "aspect-[16/10]", offset: "lg:mt-20" },
  { col: "lg:col-span-12", ratio: "aspect-[16/10] lg:aspect-[21/9]", wide: true },
  { col: "lg:col-span-6", ratio: "aspect-[4/3]" },
  { col: "lg:col-span-6", ratio: "aspect-[4/3] lg:aspect-[4/5]", offset: "lg:mt-16" },
];

export function LifeChapters() {
  return (
    <section aria-label="Student life" className="section-y bg-warm-white">
      <div className="shell grid gap-x-10 gap-y-16 sm:gap-y-20 lg:grid-cols-12 lg:gap-y-24">
        {lifeStories.map((story, i) => {
          const l = layout[i] ?? { col: "lg:col-span-6", ratio: "aspect-[4/3]" };
          const n = String(i + 1).padStart(2, "0");

          if (l.wide) {
            return (
              <Reveal as="article" key={story.id} id={story.id} className={cn("group relative", l.col)}>
                <SchoolImage
                  image={images[story.image]}
                  zoom
                  sizes="100vw"
                  className={cn("rounded-md", l.ratio)}
                />
                <div className="relative -mt-16 ml-4 mr-4 max-w-xl rounded-md bg-navy-900 p-7 text-ivory sm:ml-8 sm:p-10 lg:absolute lg:bottom-10 lg:left-10 lg:m-0">
                  <p className="font-display text-sm tabular-nums text-gold-300">{n}</p>
                  <h2 className="mt-2 text-display-md text-ivory">{story.title}</h2>
                  <p className="mt-3 leading-relaxed text-sky-100/80">{story.text}</p>
                </div>
              </Reveal>
            );
          }

          return (
            <Reveal as="article" key={story.id} id={story.id} delay={(i % 2) * 100} className={cn("group", l.col, l.offset)}>
              <SchoolImage
                image={images[story.image]}
                zoom
                sizes="(min-width: 1024px) 55vw, 100vw"
                className={cn("rounded-md", l.ratio)}
              />
              <div className="mt-6 grid grid-cols-[2.75rem_1fr] gap-x-3 sm:grid-cols-[3.5rem_1fr]">
                <p className="font-display text-sm tabular-nums text-gold-700">{n}</p>
                <div>
                  <h2 className="font-display text-[clamp(1.6rem,1.3rem+1.2vw,2.25rem)] leading-tight text-navy-900">
                    <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 ease-[var(--ease-out-soft)] group-hover:bg-[length:100%_1px]">
                      {story.title}
                    </span>
                  </h2>
                  <p className="mt-2.5 max-w-md leading-relaxed text-muted">{story.text}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
