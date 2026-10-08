import type { ReactNode } from "react";
import type { GalleryCategory, GallerySize } from "@/content/gallery";

/**
 * A gallery entry prepared on the server. Images are rendered as server
 * elements so the interactive grid stays a small client component.
 */
export interface GalleryEntry {
  id: string;
  category: GalleryCategory;
  caption: string;
  size: GallerySize;
  thumb: ReactNode;
  full: ReactNode;
}
