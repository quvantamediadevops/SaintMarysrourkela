import type { Metadata } from "next";
import { LearningApproach } from "@/components/academics/learning-approach";
import { LearningJourney } from "@/components/academics/learning-journey";
import { SubjectAreas } from "@/components/academics/subject-areas";
import { AdmissionsCta } from "@/components/shared/admissions-cta";
import { ButtonLink } from "@/components/shared/button-link";
import { PageHero } from "@/components/shared/page-hero";
import { stages } from "@/content/copy";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Academics — ICSE Curriculum, Nursery to Standard X",
  description:
    "Academics at Saint Mary’s School, Jagda, Raurkela: the ICSE curriculum from Nursery to Standard X, with smart classrooms, practical understanding and age-appropriate learning at every stage.",
  path: "/academics",
  keywords: ["ICSE curriculum Raurkela", "smart classrooms school Raurkela"],
});

export default function AcademicsPage() {
  return (
    <>
      <PageHero
        crumb={{ name: "Academics", path: "/academics" }}
        eyebrow="Academics · ICSE"
        watermark="ICSE"
        title={["A Strong Foundation,", <em key="e" className="text-navy-700">Nursery to Standard X.</em>]}
        intro={
          <p>
            Strong academic foundations, taught with care — and balanced with creativity, physical development and
            character, so that every child grows as a whole person.
          </p>
        }
        actions={
          <>
            <ButtonLink href="#journey" size="lg" arrow>
              The Learning Journey
            </ButtonLink>
            <ButtonLink href="/admissions" size="lg" variant="outline">
              Admissions
            </ButtonLink>
          </>
        }
        asideClassName="hidden lg:block"
        aside={
          <nav aria-label="Stages of learning" className="border-t border-navy-900/15">
            <ol>
              {stages.map((s, i) => (
                <li key={s.id} className="border-b border-navy-900/15">
                  <a href={`#${s.id}`} className="group flex items-baseline gap-5 py-4 transition-colors">
                    <span className="font-display text-sm tabular-nums text-gold-700">0{i + 1}</span>
                    <span className="flex-1">
                      <span className="block font-display text-xl leading-tight text-navy-900 transition-transform duration-300 group-hover:translate-x-1">
                        {s.name}
                      </span>
                      <span className="block text-sm text-muted">{s.range}</span>
                    </span>
                    <span aria-hidden className="text-navy-900/30 transition-colors group-hover:text-gold-700">
                      &darr;
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        }
      />
      <LearningJourney />
      <LearningApproach />
      <SubjectAreas />
      <AdmissionsCta variant="quiet" />
    </>
  );
}
