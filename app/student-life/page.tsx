import type { Metadata } from "next";
import { BaglessDays } from "@/components/home/bagless-days";
import { AdmissionsCta } from "@/components/shared/admissions-cta";
import { PageHero } from "@/components/shared/page-hero";
import { LifeChapters } from "@/components/student-life/life-chapters";
import { lifeStories } from "@/content/copy";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Student Life",
  description:
    "Student life at Saint Mary’s School, Jagda, Raurkela — creative arts, sports and movement, Bagless Days, experiential learning, celebrations, life skills and values.",
  path: "/student-life",
});

export default function StudentLifePage() {
  return (
    <>
      <PageHero
        crumb={{ name: "Student Life", path: "/student-life" }}
        eyebrow="Student Life"
        watermark="Joy"
        title={["Where Every Day", <em key="e" className="text-navy-700">Holds Something New.</em>]}
        intro={
          <p>
            Beyond the timetable, children paint, play, perform, celebrate and learn to care for one another — the
            experiences that make school a place they love to arrive at.
          </p>
        }
        aside={
          <nav aria-label="On this page" className="border-t border-navy-900/15">
            <ol className="grid grid-cols-2">
              {lifeStories.map((s, i) => (
                <li key={s.id} className="border-b border-navy-900/15 odd:pr-4 even:border-l even:pl-4">
                  <a href={`#${s.id}`} className="group flex items-baseline gap-3 py-3 text-[0.9375rem] text-navy-900">
                    <span className="font-display text-xs tabular-nums text-gold-700">0{i + 1}</span>
                    <span className="link-underline">{s.title}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        }
      />
      <LifeChapters />
      <BaglessDays />
      <AdmissionsCta
        variant="quiet"
        lines={["See It", "for Yourself."]}
        text="The best way to understand life at Saint Mary’s is to visit the campus in Jagda."
        primary={{ label: "Plan a Visit", href: "/contact#location" }}
        secondary={{ label: "Admission Information", href: "/admissions" }}
      />
    </>
  );
}
