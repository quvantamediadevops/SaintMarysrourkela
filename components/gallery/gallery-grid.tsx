"use client";

import { useMemo, useState } from "react";
import { Expand } from "lucide-react";
import { type GalleryCategory, galleryCategories } from "@/content/gallery";
import { cn } from "@/lib/cn";
import { GalleryLightbox } from "./gallery-lightbox";
import type { GalleryEntry } from "./gallery-types";

type Filter = "All" | GalleryCategory;

const sizeClass: Record<GalleryEntry["size"], string> = {
  feature: "col-span-2 row-span-2",
  wide: "col-span-2",
  tall: "row-span-2",
  standard: "",
};

export function GalleryGrid({ entries }: { entries: GalleryEntry[] }) {
  const [filter, setFilter] = useState<Filter>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const visible = useMemo(
    () => (filter === "All" ? entries : entries.filter((e) => e.category === filter)),
    [filter, entries],
  );

  const filters: Filter[] = ["All", ...galleryCategories];
  const countFor = (f: Filter) => (f === "All" ? entries.length : entries.filter((e) => e.category === f).length);

  return (
    <div>
      {/* Filters — editorial tabs, scrollable on narrow screens */}
      <div className="-mx-5 overflow-x-auto px-5 [scrollbar-width:none] sm:mx-0 sm:px-0">
        <div role="group" aria-label="Filter photos by category" className="flex w-max gap-7 border-b border-line sm:w-auto">
          {filters.map((f) => {
            const active = f === filter;
            return (
              <button
                key={f}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(f)}
                className={cn(
                  "relative -mb-px flex min-h-12 items-center gap-1.5 border-b-2 text-[0.9375rem] font-medium transition-colors duration-300",
                  active ? "border-gold-500 text-navy-900" : "border-transparent text-muted hover:text-navy-900",
                )}
              >
                {f}
                <sup className={cn("text-[0.625rem] tabular-nums", active ? "text-gold-700" : "text-subtle")}>{countFor(f)}</sup>
              </button>
            );
          })}
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {visible.length} {visible.length === 1 ? "photo" : "photos"}
        {filter === "All" ? "" : ` in ${filter}`}.
      </p>

      <ul
        key={filter}
        className="mt-10 grid grid-flow-dense auto-rows-[clamp(8.5rem,5rem+14vw,15rem)] grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-4"
      >
        {visible.map((item, index) => (
          <li
            key={item.id}
            className={cn(sizeClass[item.size], "motion-safe:animate-[fade-scale_0.5s_var(--ease-out-soft)_both]")}
            style={{ animationDelay: `${Math.min(index, 12) * 35}ms` }}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              className="group relative block size-full overflow-hidden rounded-md text-left"
              aria-label={`Open photo: ${item.caption}`}
            >
              {item.thumb}
              <span className="pointer-events-none absolute inset-0 rounded-md ring-1 ring-inset ring-navy-900/0 transition-[box-shadow] duration-300 group-hover:ring-navy-900/10" />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 rounded-b-md bg-gradient-to-t from-navy-950/85 via-navy-950/40 to-transparent p-3 pt-10 text-ivory transition-[opacity,transform] duration-300 sm:p-4 sm:pt-12 [@media(hover:hover)]:translate-y-2 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:translate-y-0 [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:group-focus-visible:translate-y-0 [@media(hover:hover)]:group-focus-visible:opacity-100">
                <span className="min-w-0">
                  <span className="eyebrow block text-[0.5625rem] text-gold-300 sm:text-[0.625rem]">{item.category}</span>
                  <span className="mt-0.5 block truncate font-display text-[0.9375rem] leading-tight sm:text-lg">{item.caption}</span>
                </span>
                <Expand aria-hidden className="hidden size-4 shrink-0 sm:block" />
              </span>
            </button>
          </li>
        ))}
      </ul>

      <GalleryLightbox items={visible} index={openIndex} onChange={setOpenIndex} />
    </div>
  );
}
