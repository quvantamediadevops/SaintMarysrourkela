import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  size?: "lg" | "md";
  as?: "h1" | "h2" | "h3";
  id?: string;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "light",
  size = "lg",
  as: Tag = "h2",
  id,
  className,
}: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <div className={cn(align === "center" && "mx-auto text-center", "max-w-3xl", className)}>
      {eyebrow && (
        <p className={cn("eyebrow mb-5 flex items-center gap-3", align === "center" && "justify-center", dark ? "text-gold-300" : "text-gold-700")}>
          <span aria-hidden className={cn("h-px w-8", dark ? "bg-gold-400/70" : "bg-gold-500")} />
          {eyebrow}
        </p>
      )}
      <Tag
        id={id}
        className={cn(size === "lg" ? "text-display-lg" : "text-display-md", dark ? "text-ivory" : "text-navy-900")}
      >
        {title}
      </Tag>
      {intro && (
        <div className={cn("mt-6 text-lead", align === "center" && "mx-auto", "max-w-2xl", dark ? "text-sky-100/80" : "text-muted")}>
          {intro}
        </div>
      )}
    </div>
  );
}
