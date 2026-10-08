import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { cn } from "@/lib/cn";
import { JsonLd } from "./json-ld";
import { MaskLines } from "./reveal";

interface PageHeroProps {
  eyebrow: string;
  /** Heading lines — each slides up from behind a mask on load. */
  title: ReactNode[];
  intro?: ReactNode;
  /** Current page name + path for breadcrumbs and BreadcrumbList schema. */
  crumb: { name: string; path: `/${string}` };
  /** Optional right-hand column. */
  aside?: ReactNode;
  /** Extra classes for the aside wrapper, e.g. "hidden lg:block". */
  asideClassName?: string;
  actions?: ReactNode;
  /** Oversized outlined word set behind the hero as a quiet separator. */
  watermark?: string;
  size?: "lg" | "md";
  className?: string;
}

const at = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export function PageHero({
  eyebrow,
  title,
  intro,
  crumb,
  aside,
  asideClassName,
  actions,
  watermark,
  size = "lg",
  className,
}: PageHeroProps) {
  const lineStart = 180;
  const afterTitle = lineStart + title.length * 80;

  return (
    <section aria-labelledby="page-title" className={cn("relative overflow-hidden border-b border-line bg-ivory", className)}>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, crumb])} />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grid-lines text-navy-900 [mask-image:linear-gradient(to_left,black,transparent_65%)]"
      />
      {watermark && (
        <p
          aria-hidden
          className="load-up pointer-events-none absolute -bottom-[0.2em] right-0 select-none whitespace-nowrap font-display text-[clamp(6rem,2rem+16vw,17rem)] leading-none tracking-[-0.04em]"
          style={at(afterTitle + 200)}
        >
          <span className="text-outline block text-navy-900 opacity-[0.14]">{watermark}</span>
        </p>
      )}

      <div
        className={cn(
          "shell relative grid gap-12 pb-16 pt-6 sm:pb-20 sm:pt-10 lg:pb-28 lg:pt-12",
          Boolean(aside) && "lg:grid-cols-12 lg:items-end lg:gap-10",
        )}
      >
        <div className={cn(aside ? "lg:col-span-7" : "max-w-4xl")}>
          <nav aria-label="Breadcrumb" className="load-up" style={at(0)}>
            <ol className="flex items-center gap-1.5 text-sm text-muted">
              <li>
                <Link href="/" className="link-underline hover:text-navy-900">
                  Home
                </Link>
              </li>
              <li aria-hidden>
                <ChevronRight className="size-3.5 text-gold-700" />
              </li>
              <li aria-current="page" className="font-medium text-navy-900">
                {crumb.name}
              </li>
            </ol>
          </nav>

          <p className="load-up eyebrow mt-10 flex items-center gap-3 text-gold-700 sm:mt-16" style={at(100)}>
            <span aria-hidden className="h-px w-8 bg-gold-500" />
            {eyebrow}
          </p>
          <h1 id="page-title" className={cn("mt-6 text-navy-900", size === "lg" ? "text-display-xl" : "text-display-lg")}>
            <MaskLines mode="load" start={lineStart} step={80} lines={title} />
          </h1>
          {intro && (
            <div className="load-up mt-8 max-w-2xl text-lead text-muted" style={at(afterTitle + 20)}>
              {intro}
            </div>
          )}
          {actions && (
            <div className="load-up mt-9 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:items-center" style={at(afterTitle + 100)}>
              {actions}
            </div>
          )}
        </div>

        {aside && (
          <div className={cn("load-visual lg:col-span-5", asideClassName)} style={at(afterTitle + 150)}>
            {aside}
          </div>
        )}
      </div>
    </section>
  );
}
