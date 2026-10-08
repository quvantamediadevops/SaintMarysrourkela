"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const SELECTOR = "[data-reveal]:not([data-revealed])";

function reveal(el: Element) {
  if (el.hasAttribute("data-reveal-stagger")) {
    Array.from(el.children).forEach((child, i) => (child as HTMLElement).style.setProperty("--i", String(i)));
  }
  el.setAttribute("data-revealed", "");
}

/**
 * The single observer behind every <Reveal>. Elements already in view are
 * revealed synchronously before hiding is enabled, so nothing flashes.
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const targets = Array.from(document.querySelectorAll(SELECTOR));
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced || !("IntersectionObserver" in window)) {
      targets.forEach(reveal);
      return;
    }

    const viewportH = window.innerHeight;
    for (const el of targets) {
      const rect = el.getBoundingClientRect();
      if (rect.top < viewportH * 0.9 && rect.bottom > 0) reveal(el);
    }
    root.setAttribute("data-reveal-ready", "");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            reveal(entry.target);
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );

    targets.filter((el) => !el.hasAttribute("data-revealed")).forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
