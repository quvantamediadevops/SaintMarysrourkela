import type { Metadata } from "next";
import { AdmissionProcess } from "@/components/admissions/admission-process";
import { AdmissionRequirements } from "@/components/admissions/admission-requirements";
import { CampusLocation } from "@/components/contact/campus-location";
import { AdmissionsCta } from "@/components/shared/admissions-cta";
import { ButtonLink } from "@/components/shared/button-link";
import { PageHero } from "@/components/shared/page-hero";
import { SchoolImage } from "@/components/shared/school-image";
import { images } from "@/content/images";
import { school } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Admissions",
  description:
    "Admissions at Saint Mary’s School, Jagda, Raurkela — a welcoming five-step journey and exactly what the admission form asks for. ICSE, Nursery to Standard X.",
  path: "/admissions",
  keywords: ["school admission Raurkela", "ICSE school admission Jagda", "nursery admission Raurkela"],
});

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        crumb={{ name: "Admissions", path: "/admissions" }}
        eyebrow="Admissions · Nursery to Standard X"
        title={["Begin Their Journey", <em key="e" className="text-navy-700">at Saint Mary’s.</em>]}
        intro={
          <p>
            Choosing a school is one of the most important decisions a family makes. Here is everything you need to
            begin — how admission works, and what to have ready before you visit.
          </p>
        }
        actions={
          <>
            <ButtonLink href="#process" size="lg" arrow>
              See the Journey
            </ButtonLink>
            <ButtonLink href={school.contact.phone.href} size="lg" variant="outline">
              Call {school.contact.phone.display}
            </ButtonLink>
          </>
        }
        aside={
          <div className="relative pb-6 pl-6">
            <SchoolImage
              image={images.admissionsVisit}
              priority
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="aspect-[5/4] rounded-md shadow-lift"
            />
            <dl className="absolute bottom-0 left-0 grid grid-cols-2 rounded-md bg-navy-900 text-ivory shadow-lift">
              <div className="border-r border-ivory/15 px-5 py-4">
                <dt className="text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-gold-300">Classes</dt>
                <dd className="mt-1 font-display text-lg leading-tight">Nursery – X</dd>
              </div>
              <div className="px-5 py-4">
                <dt className="text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-gold-300">Curriculum</dt>
                <dd className="mt-1 font-display text-lg leading-tight">ICSE · CISCE</dd>
              </div>
            </dl>
          </div>
        }
      />
      <AdmissionProcess />
      <AdmissionRequirements />
      <CampusLocation tone="white" />
      <AdmissionsCta
        variant="band"
        lines={["Have a Question", "Before You Apply?"]}
        text="Call, email or send an enquiry — the school office will be glad to guide you through admission."
        primary={{ label: "Send an Enquiry", href: "/contact#enquiry" }}
        secondary={{ label: `Call ${school.contact.phone.display}`, href: school.contact.phone.href }}
      />
    </>
  );
}
