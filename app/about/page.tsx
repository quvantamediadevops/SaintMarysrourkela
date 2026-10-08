import type { Metadata } from "next";
import { SchoolIdentity } from "@/components/about/school-identity";
import { LearningPhilosophy } from "@/components/home/learning-philosophy";
import { PrincipalMessage } from "@/components/home/principal-message";
import { VisionMission } from "@/components/home/vision-mission";
import { AdmissionsCta } from "@/components/shared/admissions-cta";
import { PageHero } from "@/components/shared/page-hero";
import { SchoolImage } from "@/components/shared/school-image";
import { aboutCopy } from "@/content/copy";
import { images } from "@/content/images";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "About the School",
  description:
    "About Saint Mary’s School, Jagda, Raurkela — a co-educational ICSE school established in 1988. Our story, approach, the Principal’s message, and our vision and mission.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb={{ name: "About", path: "/about" }}
        eyebrow="About Saint Mary’s"
        watermark="1988"
        title={["More Than a School.", <em key="e" className="text-navy-700">A Place to Grow.</em>]}
        intro={<p>{aboutCopy.intro}</p>}
        aside={
          <SchoolImage
            image={images.campus}
            priority
            sizes="(min-width: 1024px) 38vw, 100vw"
            className="aspect-[4/3] rounded-md shadow-lift"
          />
        }
      />
      <SchoolIdentity />
      <LearningPhilosophy />
      <PrincipalMessage variant="full" />
      <VisionMission />
      <AdmissionsCta variant="split" />
    </>
  );
}
