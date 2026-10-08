import type { Metadata } from "next";
import { CampusLocation } from "@/components/contact/campus-location";
import { AboutPreview } from "@/components/home/about-preview";
import { BaglessDays } from "@/components/home/bagless-days";
import { BeyondClassroom } from "@/components/home/beyond-classroom";
import { Heritage } from "@/components/home/heritage";
import { Hero } from "@/components/home/hero";
import { PrincipalMessage } from "@/components/home/principal-message";
import { VisionMission } from "@/components/home/vision-mission";
import { AdmissionsCta } from "@/components/shared/admissions-cta";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

/*
 * Section rhythm: ivory → warm white → cream → ivory → NAVY → warm white →
 * ivory (navy panel) → NAVY CTA → cream → navy footer.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <Heritage />
      <BeyondClassroom />
      <BaglessDays index="03" />
      <PrincipalMessage variant="excerpt" />
      <VisionMission index="05" />
      <AdmissionsCta variant="band" />
      <CampusLocation tone="paper" index="06" />
    </>
  );
}
