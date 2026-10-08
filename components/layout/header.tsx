"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { mainNav } from "@/content/site";
import { cn } from "@/lib/cn";
import { isActivePath } from "@/lib/nav";
import { ButtonLink } from "@/components/shared/button-link";
import { Logo } from "@/components/shared/logo";
import { MobileNav } from "./mobile-nav";

/** Sliding nav indicator — animated with transform only. */
function useNavIndicator(pathname: string) {
  const listRef = useRef<HTMLUListElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);

  const moveTo = useCallback((el: HTMLElement | null) => {
    const bar = barRef.current;
    if (!bar) return;
    if (!el) {
      bar.style.opacity = "0";
      return;
    }
    bar.style.opacity = "1";
    bar.style.transform = `translateX(${el.offsetLeft}px) scaleX(${el.offsetWidth})`;
  }, []);

  const toActive = useCallback(() => {
    moveTo(listRef.current?.querySelector<HTMLElement>('a[aria-current="page"]') ?? null);
  }, [moveTo]);

  useLayoutEffect(() => {
    toActive();
  }, [pathname, toActive]);

  useEffect(() => {
    window.addEventListener("resize", toActive);
    return () => window.removeEventListener("resize", toActive);
  }, [toActive]);

  return { listRef, barRef, moveTo, toActive };
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const { listRef, barRef, moveTo, toActive } = useNavIndicator(pathname);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setScrolled(window.scrollY > 16));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "load-header sticky top-0 z-40 border-b transition-[background-color,border-color,box-shadow] duration-500 ease-[var(--ease-out-soft)]",
        scrolled
          ? "border-line/80 bg-ivory/85 shadow-[0_12px_32px_-28px_rgb(11_29_56/0.55)] backdrop-blur-md backdrop-saturate-150"
          : "border-transparent bg-transparent",
      )}
    >
      <div
        className={cn(
          "shell flex items-center justify-between gap-6 transition-[height] duration-500 ease-[var(--ease-out-soft)]",
          scrolled ? "h-16" : "h-[4.5rem] lg:h-[5.5rem]",
        )}
      >
        <Logo />

        <nav aria-label="Main" className="hidden xl:block">
          <ul ref={listRef} className="relative flex items-center gap-8" onMouseLeave={toActive}>
            {mainNav.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onMouseEnter={(e) => moveTo(e.currentTarget)}
                    onFocus={(e) => moveTo(e.currentTarget)}
                    onBlur={toActive}
                    className={cn(
                      "block py-2.5 text-[0.9375rem] font-medium transition-colors duration-300",
                      active ? "text-navy-900" : "text-muted hover:text-navy-900",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <span
              ref={barRef}
              aria-hidden
              className="pointer-events-none absolute -bottom-px left-0 h-[1.5px] w-px origin-left bg-gold-500 opacity-0 transition-[transform,opacity] duration-500 ease-[var(--ease-out-soft)]"
            />
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden sm:block">
            <ButtonLink href="/admissions" arrow>
              Admissions
            </ButtonLink>
          </span>
          <MobileNav pathname={pathname} />
        </div>
      </div>

      {/* Reading progress — CSS scroll-driven; hidden where unsupported or reduced motion */}
      <span aria-hidden className="scroll-progress absolute inset-x-0 -bottom-px h-px bg-gold-500/80" />
    </header>
  );
}
