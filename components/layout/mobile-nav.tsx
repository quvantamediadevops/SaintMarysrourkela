"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { mainNav, school } from "@/content/site";
import { cn } from "@/lib/cn";
import { isActivePath } from "@/lib/nav";
import { Logo } from "@/components/shared/logo";

/**
 * Mobile / tablet navigation built on the native <dialog> element:
 * focus is trapped, Escape closes, and the page behind is inert.
 */
export function MobileNav({ pathname }: { pathname: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  const close = useCallback(() => dialogRef.current?.close(), []);

  const openMenu = () => {
    dialogRef.current?.showModal();
    setOpen(true);
  };

  // Lock background scroll while the menu is open.
  useEffect(() => {
    if (!open) return;
    const { style } = document.documentElement;
    const previous = style.overflow;
    style.overflow = "hidden";
    return () => {
      style.overflow = previous;
    };
  }, [open]);

  // Close if the viewport grows to desktop width while open.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 80rem)");
    const onChange = (e: MediaQueryListEvent) => e.matches && close();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [close]);

  return (
    <>
      <button
        type="button"
        onClick={openMenu}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="inline-flex size-11 items-center justify-center rounded-sm border border-navy-900/15 text-navy-900 transition-colors hover:border-navy-900/40 hover:bg-navy-900/[0.03] xl:hidden"
      >
        <Menu aria-hidden className="size-5" strokeWidth={1.75} />
        <span className="sr-only">Open menu</span>
      </button>

      <dialog
        ref={dialogRef}
        id="mobile-menu"
        aria-label="Site menu"
        onClose={() => setOpen(false)}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        className={cn(
          "on-dark m-0 ml-auto border-0 h-dvh max-h-none w-full max-w-md overflow-y-auto bg-navy-950 p-0 text-ivory",
          "translate-x-0 opacity-100 transition-[translate,opacity,display,overlay] transition-discrete duration-300 ease-[var(--ease-out-soft)]",
          "starting:open:translate-x-8 starting:open:opacity-0 not-open:translate-x-8 not-open:opacity-0",
          "backdrop:bg-navy-950/50 backdrop:backdrop-blur-[2px] backdrop:transition-opacity backdrop:duration-300",
        )}
      >
        <div className="flex min-h-full flex-col px-6 pb-8 pt-4 sm:px-8">
          <div className="flex h-16 items-center justify-between">
            <Logo tone="dark" />
            <button
              type="button"
              onClick={close}
              autoFocus
              className="inline-flex size-11 items-center justify-center rounded-sm border border-ivory/20 text-ivory transition-colors hover:border-ivory/60"
            >
              <X aria-hidden className="size-5" strokeWidth={1.75} />
              <span className="sr-only">Close menu</span>
            </button>
          </div>

          <nav aria-label="Mobile" className="mt-8 flex-1">
            <ul className="divide-y divide-ivory/10 border-y border-ivory/10">
              {mainNav.map((item, i) => {
                const active = isActivePath(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={close}
                      aria-current={active ? "page" : undefined}
                      className="group flex min-h-14 items-center gap-4 py-3.5"
                    >
                      <span className="w-6 font-sans text-xs tabular-nums text-gold-300/80">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={cn(
                          "font-display text-[1.75rem] leading-tight transition-colors",
                          active ? "text-gold-300" : "text-ivory group-hover:text-gold-200",
                        )}
                      >
                        {item.label}
                      </span>
                      <ArrowRight
                        aria-hidden
                        className="ml-auto size-4 text-ivory/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-gold-300"
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mt-10 space-y-6">
            <Link
              href="/admissions"
              onClick={close}
              className="flex min-h-13 w-full items-center justify-center gap-2.5 rounded-sm bg-gold-400 px-6 py-3.5 font-semibold text-navy-950 transition-colors hover:bg-gold-300"
            >
              Admission Information
              <ArrowRight aria-hidden className="size-4" />
            </Link>
            <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-sm bg-ivory/10 text-sm">
              <li>
                <a href={school.contact.phone.href} className="flex min-h-12 items-center gap-2.5 bg-navy-950 px-4 text-ivory transition-colors hover:bg-navy-900">
                  <Phone aria-hidden className="size-4 text-gold-300" />
                  Call school
                </a>
              </li>
              <li>
                <a href={school.contact.email.href} className="flex min-h-12 items-center gap-2.5 bg-navy-950 px-4 text-ivory transition-colors hover:bg-navy-900">
                  <Mail aria-hidden className="size-4 text-gold-300" />
                  Email
                </a>
              </li>
            </ul>
            <p className="flex items-start gap-3 text-sm leading-relaxed text-sky-100/70">
              <MapPin aria-hidden className="mt-0.5 size-4 shrink-0 text-gold-300" />
              <span>{school.address.short}</span>
            </p>
          </div>
        </div>
      </dialog>
    </>
  );
}
