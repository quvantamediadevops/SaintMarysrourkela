import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "gold" | "outline" | "outline-light" | "text" | "text-light";
export type ButtonSize = "md" | "lg";

const base =
  "group/btn relative inline-flex items-center justify-center gap-2.5 font-sans font-semibold tracking-[0.01em] transition-[background-color,color,border-color,box-shadow,transform] duration-300 ease-[var(--ease-out-soft)] active:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-navy-900 text-ivory rounded-sm shadow-[inset_0_-2px_0_rgb(0_0_0/0.18)] hover:bg-navy-700 hover:shadow-soft",
  gold: "bg-gold-400 text-navy-950 rounded-sm shadow-[inset_0_-2px_0_rgb(0_0_0/0.12)] hover:bg-gold-300",
  outline: "border border-navy-900/25 text-navy-900 rounded-sm hover:border-navy-900 hover:bg-navy-900/[0.03]",
  "outline-light": "border border-ivory/35 text-ivory rounded-sm hover:border-ivory hover:bg-ivory/[0.06]",
  text: "text-navy-900 px-0! min-h-0! underline-offset-[6px] decoration-gold-500 decoration-2 hover:underline",
  "text-light": "text-ivory px-0! min-h-0! underline-offset-[6px] decoration-gold-400 decoration-2 hover:underline",
};

const sizes: Record<ButtonSize, string> = {
  md: "min-h-11 px-5 text-[0.9375rem]",
  lg: "min-h-12 px-6 text-base sm:min-h-[3.25rem] sm:px-7",
};

interface ButtonLinkProps extends Omit<ComponentProps<typeof Link>, "className" | "children"> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  arrow?: boolean;
  className?: string;
}

export function ButtonLink({ children, variant = "primary", size = "md", arrow = false, className, ...props }: ButtonLinkProps) {
  return (
    <Link className={cn(base, variants[variant], sizes[size], className)} {...props}>
      <span>{children}</span>
      {arrow && (
        <ArrowRight
          aria-hidden
          className="size-4 shrink-0 transition-transform duration-300 ease-[var(--ease-out-soft)] group-hover/btn:translate-x-1"
          strokeWidth={2}
        />
      )}
    </Link>
  );
}

/** Shared visual classes for real <button> elements (forms). */
export function buttonClasses(variant: ButtonVariant = "primary", size: ButtonSize = "md", className?: string) {
  return cn(base, variants[variant], sizes[size], className);
}
