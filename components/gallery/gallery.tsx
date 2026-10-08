import { type GalleryItem, galleryItems } from "@/content/gallery";
import { SchoolImage } from "@/components/shared/school-image";
import { GalleryGrid } from "./gallery-grid";
import type { GalleryEntry } from "./gallery-types";

const thumbSizes: Record<GalleryItem["size"], string> = {
  feature: "(min-width: 1024px) 50vw, 100vw",
  wide: "(min-width: 1024px) 50vw, 100vw",
  tall: "(min-width: 1024px) 25vw, 50vw",
  standard: "(min-width: 1024px) 25vw, 50vw",
};

/** Server wrapper: renders every photo once and hands them to the interactive grid. */
export function Gallery({ items = galleryItems }: { items?: GalleryItem[] }) {
  const entries: GalleryEntry[] = items.map((item) => ({
    id: item.id,
    category: item.category,
    caption: item.caption,
    size: item.size,
    thumb: (
      <SchoolImage
        image={item.image}
        zoom
        compact={item.size === "standard"}
        sizes={thumbSizes[item.size]}
        className="absolute inset-0 rounded-md"
      />
    ),
    full: (
      <SchoolImage
        image={item.image}
        fit="contain"
        sizes="(min-width: 1024px) 72rem, 100vw"
        className="h-[min(64dvh,46rem)] w-full rounded-md"
      />
    ),
  }));

  return <GalleryGrid entries={entries} />;
}
