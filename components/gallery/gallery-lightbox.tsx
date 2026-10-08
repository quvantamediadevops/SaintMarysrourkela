"use client";

import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryEntry } from "./gallery-types";

interface GalleryLightboxProps {
  items: GalleryEntry[];
  index: number | null;
  onChange: (index: number | null) => void;
}

const SWIPE_THRESHOLD = 50;

/**
 * Accessible lightbox on the native <dialog>: focus is trapped and restored,
 * Escape closes, ← / → and swipe navigate, backdrop click closes.
 */
export function GalleryLightbox({ items, index, onChange }: GalleryLightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const swipeX = useRef<number | null>(null);
  const justSwiped = useRef(false);
  const open = index !== null;
  const item = index !== null ? items[index] : undefined;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const { style } = document.documentElement;
    const previous = style.overflow;
    style.overflow = "hidden";
    return () => {
      style.overflow = previous;
    };
  }, [open]);

  const go = (delta: number) => {
    if (index === null || items.length === 0) return;
    onChange((index + delta + items.length) % items.length);
  };
  const close = () => dialogRef.current?.close();
  const closeOnSelf = (e: React.MouseEvent) => {
    if (justSwiped.current) {
      justSwiped.current = false;
      return;
    }
    if (e.target === e.currentTarget) close();
  };

  return (
    <dialog
      ref={dialogRef}
      aria-label={item ? `Photo: ${item.caption}` : "Photo viewer"}
      onClose={() => onChange(null)}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") {
          e.preventDefault();
          go(1);
        } else if (e.key === "ArrowLeft") {
          e.preventDefault();
          go(-1);
        }
      }}
      onClick={closeOnSelf}
      className={[
        "on-dark m-0 h-dvh max-h-none w-screen max-w-none border-0 bg-navy-950 p-0 text-ivory",
        "opacity-100 transition-[opacity,display,overlay] transition-discrete duration-300 ease-[var(--ease-out-soft)]",
        "starting:open:opacity-0 not-open:opacity-0",
        "backdrop:bg-navy-950/60",
      ].join(" ")}
    >
      {item && index !== null && (
        <div className="flex h-full flex-col" onClick={closeOnSelf}>
          <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
            <p className="font-display text-sm tabular-nums text-sky-100/80" aria-live="polite">
              {String(index + 1).padStart(2, "0")} <span aria-hidden className="text-sky-100/40">/</span>
              <span className="sr-only">of</span> {String(items.length).padStart(2, "0")}
            </p>
            <button
              type="button"
              autoFocus
              onClick={close}
              className="inline-flex size-11 items-center justify-center rounded-full border border-ivory/20 transition-colors hover:border-ivory/60 hover:bg-ivory/5"
            >
              <X aria-hidden className="size-5" />
              <span className="sr-only">Close photo viewer</span>
            </button>
          </div>

          <div
            className="relative flex min-h-0 flex-1 touch-pan-y items-center justify-center px-4 sm:px-24"
            onClick={closeOnSelf}
            onPointerDown={(e) => {
              swipeX.current = e.clientX;
            }}
            onPointerUp={(e) => {
              if (swipeX.current === null) return;
              const dx = e.clientX - swipeX.current;
              swipeX.current = null;
              if (Math.abs(dx) > SWIPE_THRESHOLD) {
                justSwiped.current = true;
                go(dx < 0 ? 1 : -1);
              }
            }}
          >
            <figure className="w-full max-w-6xl">
              <div key={item.id} className="motion-safe:animate-[fade-scale_0.45s_var(--ease-out-soft)_both]">
                {item.full}
              </div>
              <figcaption className="mt-5 text-center">
                <span className="eyebrow block text-[0.625rem] text-gold-300">{item.category}</span>
                <span className="mt-1 block font-display text-xl sm:text-2xl">{item.caption}</span>
              </figcaption>
            </figure>

            <button
              type="button"
              onClick={() => go(-1)}
              className="group absolute left-5 top-1/2 hidden size-12 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/20 transition-colors hover:border-ivory/60 sm:inline-flex"
            >
              <ChevronLeft aria-hidden className="size-5 transition-transform duration-300 group-hover:-translate-x-0.5" />
              <span className="sr-only">Previous photo</span>
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="group absolute right-5 top-1/2 hidden size-12 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/20 transition-colors hover:border-ivory/60 sm:inline-flex"
            >
              <ChevronRight aria-hidden className="size-5 transition-transform duration-300 group-hover:translate-x-0.5" />
              <span className="sr-only">Next photo</span>
            </button>
          </div>

          {/* Thumb-reachable controls on phones (swipe also works) */}
          <div className="flex items-center gap-3 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-4 sm:hidden">
            <button
              type="button"
              onClick={() => go(-1)}
              className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border border-ivory/20 text-sm font-semibold"
            >
              <ChevronLeft aria-hidden className="size-4" /> Previous
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border border-ivory/20 text-sm font-semibold"
            >
              Next <ChevronRight aria-hidden className="size-4" />
            </button>
          </div>
        </div>
      )}
    </dialog>
  );
}
