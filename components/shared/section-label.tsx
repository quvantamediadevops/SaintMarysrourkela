import { cn } from "@/lib/cn";

interface SectionLabelProps {
  children: React.ReactNode;
  /** Optional section number, e.g. "01". */
  index?: string;
  tone?: "light" | "dark";
  className?: string;
}

/** Small editorial label above a heading: optional index · gold rule · text. */
export function SectionLabel({ children, index, tone = "light", className }: SectionLabelProps) {
  const dark = tone === "dark";
  return (
    <p className={cn("eyebrow flex items-center gap-3", dark ? "text-gold-300" : "text-gold-700", className)}>
      {index && <span className={cn("font-display text-[0.8125rem] tracking-normal", dark ? "text-sky-100/70" : "text-subtle")}>{index}</span>}
      <span aria-hidden className={cn("h-px w-8", dark ? "bg-gold-400/70" : "bg-gold-500")} />
      <span>{children}</span>
    </p>
  );
}
