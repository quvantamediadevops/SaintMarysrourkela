import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/shared/button-link";
import { mainNav } from "@/content/site";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section aria-labelledby="nf-title" className="relative overflow-hidden bg-ivory">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines text-navy-900 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="shell relative flex min-h-[70svh] flex-col items-center justify-center py-24 text-center">
        <p aria-hidden className="font-display text-[clamp(6rem,4rem+10vw,12rem)] italic leading-none text-navy-900/10">
          404
        </p>
        <p className="eyebrow -mt-4 text-gold-700">Page not found</p>
        <h1 id="nf-title" className="mt-5 max-w-2xl text-display-md text-navy-900">
          This page seems to have <em className="text-navy-700">wandered off.</em>
        </h1>
        <p className="mt-5 max-w-md leading-relaxed text-muted">
          The page you were looking for doesn&rsquo;t exist or may have moved. Let&rsquo;s get you back on track.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/" arrow size="lg">
            Back to Home
          </ButtonLink>
          <ButtonLink href="/admissions" variant="outline" size="lg">
            Admissions
          </ButtonLink>
        </div>
        <nav aria-label="Popular pages" className="mt-14">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            {mainNav.slice(1).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-underline text-muted hover:text-navy-900">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
