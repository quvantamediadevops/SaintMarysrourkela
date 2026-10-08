import { aboutCopy } from "@/content/copy";
import { images } from "@/content/images";
import { school } from "@/content/site";
import { Reveal } from "@/components/shared/reveal";
import { SectionLabel } from "@/components/shared/section-label";
import { SchoolImage } from "@/components/shared/school-image";

const facts: { label: string; value: string }[] = [
  { label: "Established", value: String(school.established) },
  { label: "Affiliation", value: school.affiliation },
  { label: "Curriculum", value: school.curriculum },
  { label: "School type", value: school.type },
  { label: "Classes", value: school.classes },
  { label: "Campus", value: school.address.short },
];

export function SchoolIdentity() {
  return (
    <section aria-labelledby="identity-title" className="section-y bg-warm-white">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <Reveal>
            <SectionLabel>Who We Are</SectionLabel>
            <h2 id="identity-title" className="mt-5 text-display-md text-navy-900">
              Quality ICSE education, <em className="text-navy-700">within reach of every family.</em>
            </h2>
            <p className="mt-7 text-lead text-muted">{aboutCopy.standard}</p>
          </Reveal>

          <Reveal className="mt-14 grid gap-10 sm:grid-cols-2">
            <div>
              <p className="font-display text-display-sm italic text-navy-900">{aboutCopy.joyful}</p>
            </div>
            <div className="space-y-4 leading-relaxed text-muted">
              <p>{aboutCopy.dismantle}</p>
              <p>{aboutCopy.replace}</p>
            </div>
          </Reveal>

          <Reveal className="mt-14 border-t border-line pt-10">
            <p className="max-w-2xl text-lg leading-relaxed text-navy-900">{aboutCopy.bridge}</p>
          </Reveal>

          <Reveal className="mt-14">
            <SchoolImage
              image={images.smartClassroom}
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="aspect-[16/9] rounded-md"
            />
          </Reveal>
        </div>

        <aside aria-label="School facts" className="lg:col-span-4 lg:col-start-9">
          <Reveal className="rounded-md border border-line bg-paper p-6 sm:p-8 lg:sticky lg:top-28">
            <p className="eyebrow text-gold-700">At a Glance</p>
            <dl className="mt-6 divide-y divide-line">
              {facts.map((f) => (
                <div key={f.label} className="grid grid-cols-[7rem_1fr] gap-4 py-4 first:pt-0 last:pb-0">
                  <dt className="text-sm text-subtle">{f.label}</dt>
                  <dd className="font-medium leading-snug text-navy-900">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </aside>
      </div>
    </section>
  );
}
