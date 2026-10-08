import { learningApproach } from "@/content/copy";
import { images } from "@/content/images";
import { Reveal } from "@/components/shared/reveal";
import { SectionLabel } from "@/components/shared/section-label";
import { SchoolImage } from "@/components/shared/school-image";

export function LearningApproach() {
  return (
    <section aria-labelledby="approach-title" className="on-dark section-y relative overflow-hidden bg-navy-900 text-ivory">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines text-ivory opacity-50" />
      <div className="shell relative grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-10">
        <Reveal className="lg:col-span-5">
          <SectionLabel tone="dark">How Children Learn Here</SectionLabel>
          <h2 id="approach-title" className="mt-5 text-display-md text-ivory">
            Understanding, <em className="text-gold-300">not just memory.</em>
          </h2>
          <p className="mt-6 max-w-md text-lead text-sky-100/80">
            Clear teaching, technology-enabled classrooms and hands-on practice work together so that ideas make sense.
          </p>
          <SchoolImage
            image={images.smartClassroom}
            sizes="(min-width: 1024px) 36vw, 100vw"
            className="mt-10 aspect-[16/10] rounded-md"
          />
        </Reveal>

        <Reveal as="ol" stagger className="grid border-t border-ivory/15 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
          {learningApproach.map((item, i) => (
            <li key={item.title} className="border-b border-ivory/15 py-8 sm:odd:border-r sm:odd:pr-8 sm:even:pl-8">
              <span className="font-display text-4xl tabular-nums text-gold-300/80">0{i + 1}</span>
              <h3 className="mt-6 font-display text-2xl text-ivory">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-sky-100/75">{item.text}</p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
