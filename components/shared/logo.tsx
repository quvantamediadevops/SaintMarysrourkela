import Link from "next/link";
import { cn } from "@/lib/cn";

interface LogoProps {
  tone?: "light" | "dark";
  className?: string;
}

/**
 * School identity lock-up.
 * The monogram is a typographic stand-in — replace the <span> monogram with
 * the official school crest (e.g. <Image src="/images/crest.svg" …/>) when supplied.
 */
export function Logo({ tone = "light", className }: LogoProps) {
  const dark = tone === "dark";
  return (
    <Link
      href="/"
      aria-label="Saint Mary’s School, Jagda — home"
      className={cn("group/logo inline-flex items-center gap-3 rounded-sm", className)}
    >
      <span
        aria-hidden
        className={cn(
          "relative grid size-10 shrink-0 place-items-center rounded-full font-display text-[0.95rem] leading-none tracking-tight ring-1 ring-offset-2 transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover/logo:rotate-[-6deg]",
          dark
            ? "bg-gold-400 text-navy-950 ring-gold-400/60 ring-offset-navy-950"
            : "bg-navy-900 text-ivory ring-gold-500/70 ring-offset-ivory",
        )}
      >
        SM
      </span>
      <span className="flex flex-col whitespace-nowrap">
        <span className={cn("font-display text-[1.125rem] leading-tight tracking-[-0.01em]", dark ? "text-ivory" : "text-navy-900")}>
          Saint Mary&rsquo;s School
        </span>
        <span className={cn("eyebrow text-[0.625rem] tracking-[0.22em]", dark ? "text-gold-300" : "text-gold-700")}>
          Jagda · Raurkela
        </span>
      </span>
    </Link>
  );
}
