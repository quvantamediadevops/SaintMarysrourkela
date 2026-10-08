import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Gallery } from "@/components/gallery/gallery";
import { AdmissionsCta } from "@/components/shared/admissions-cta";
import { InstagramIcon } from "@/components/shared/instagram-icon";
import { PageHero } from "@/components/shared/page-hero";
import { school } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Gallery",
  description:
    "Photo gallery of Saint Mary’s School, Jagda, Raurkela — campus, classrooms, activities, celebrations and sports.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        crumb={{ name: "Gallery", path: "/gallery" }}
        eyebrow="Gallery"
        watermark="Moments"
        title={["Moments from", <em key="e" className="text-navy-700">Saint Mary’s.</em>]}
        intro={<p>A glimpse of campus life — classrooms, activities, celebrations and the everyday joy of learning.</p>}
      />
      <section aria-label="Photo gallery" className="section-y-sm bg-warm-white pb-[clamp(4.5rem,3rem+5.5vw,8.5rem)]">
        <div className="shell">
          <Gallery />

          <div className="mt-14 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-display text-2xl text-navy-900">
              More moments, <em className="text-navy-700">as they happen.</em>
            </p>
            <a
              href={school.instagram.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 font-semibold text-navy-900"
            >
              <InstagramIcon aria-hidden className="size-5 text-gold-700" strokeWidth={1.6} />
              <span className="link-underline">Follow {school.instagram.handle}</span>
              <ArrowUpRight aria-hidden className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              <span className="sr-only">(opens Instagram in a new tab)</span>
            </a>
          </div>
        </div>
      </section>
      <AdmissionsCta variant="split" />
    </>
  );
}
