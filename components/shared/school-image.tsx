import Image from "next/image";
import type { SiteImage } from "@/content/images";
import { cn } from "@/lib/cn";
import { ImagePlaceholder } from "./image-placeholder";

interface SchoolImageProps {
  image: SiteImage;
  /** Responsive sizes hint for next/image. */
  sizes: string;
  priority?: boolean;
  /** Classes for the frame. The frame must have an aspect ratio or explicit height. */
  className?: string;
  imageClassName?: string;
  compact?: boolean;
  /** Enables the gentle hover zoom (parent must have the `group` class). */
  zoom?: boolean;
  /** "cover" crops to the frame (default); "contain" shows the whole photo (lightbox). */
  fit?: "cover" | "contain";
}

/**
 * Renders a real photograph through next/image when `image.src` is set,
 * otherwise a placeholder with the identical frame — so swapping in photos
 * never causes layout shift.
 */
export function SchoolImage({ image, sizes, priority = false, className, imageClassName, compact, zoom = false, fit = "cover" }: SchoolImageProps) {
  const zoomClasses = zoom ? "transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:scale-[1.035]" : "";

  return (
    <div className={cn(/\babsolute\b/.test(className ?? "") ? "" : "relative", "overflow-hidden", className)}>
      {image.src ? (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn(fit === "contain" ? "object-contain" : "object-cover", zoomClasses, imageClassName)}
        />
      ) : (
        <div role="img" aria-label={image.alt} className={cn("absolute inset-0", zoomClasses)}>
          <ImagePlaceholder label={image.label} icon={image.icon} tone={image.tone} compact={compact} />
        </div>
      )}
    </div>
  );
}
