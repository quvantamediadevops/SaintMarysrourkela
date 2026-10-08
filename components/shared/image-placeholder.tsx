import type { LucideIcon } from "lucide-react";
import type { ImageTone } from "@/content/images";
import { cn } from "@/lib/cn";

const tones: Record<ImageTone, string> = {
  navy: "bg-navy-800 text-sky-200",
  sky: "bg-sky-100 text-navy-700",
  gold: "bg-gold-200/80 text-gold-700",
  ivory: "bg-paper text-navy-700",
};

interface ImagePlaceholderProps {
  label: string;
  icon: LucideIcon;
  tone: ImageTone;
  className?: string;
  /** Hide the caption on small tiles. */
  compact?: boolean;
}

/**
 * Art-directed stand-in for a photograph that hasn't been supplied yet.
 * It fills its frame exactly, so the final photo drops in without layout shift.
 * Replace by setting `src` in content/images.ts (or content/gallery.ts).
 */
export function ImagePlaceholder({ label, icon: Icon, tone, className, compact = false }: ImagePlaceholderProps) {
  return (
    <div data-placeholder="image" className={cn("hatch absolute inset-0 overflow-hidden", tones[tone], className)}>
      {/* inner mount line, like a print */}
      <div aria-hidden className="absolute inset-3 border border-current opacity-[0.14] sm:inset-4" />
      <div className="absolute inset-0 flex items-center justify-center">
        <Icon aria-hidden className="size-6 opacity-60 sm:size-7" strokeWidth={1.2} />
      </div>
      {!compact && (
        <p className="eyebrow absolute bottom-5 left-5 right-5 text-[0.625rem] tracking-[0.22em] opacity-75 sm:bottom-6 sm:left-7">
          {label}
        </p>
      )}
    </div>
  );
}
