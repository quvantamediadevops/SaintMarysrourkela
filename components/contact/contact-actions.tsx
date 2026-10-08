import { ArrowUpRight, Mail, Navigation, Phone } from "lucide-react";
import { school } from "@/content/site";
import { cn } from "@/lib/cn";

/**
 * Call / Email / Directions — thumb-friendly on phones, a quiet button row on
 * larger screens. Rendered in context (not a sticky bar), so it never covers content.
 */
export function ContactActions({
  tone = "light",
  stacked = false,
  className,
}: {
  tone?: "light" | "dark";
  /** Keep icon-over-label at every width (for narrow columns). */
  stacked?: boolean;
  className?: string;
}) {
  const dark = tone === "dark";
  const actions = [
    { label: "Call School", short: "Call", href: school.contact.phone.href, icon: Phone, external: false },
    { label: "Email", short: "Email", href: school.contact.email.href, icon: Mail, external: false },
    { label: "Directions", short: "Directions", href: school.mapSearchUrl, icon: Navigation, external: true },
  ];

  return (
    <ul
      aria-label="Contact the school"
      className={cn(
        "grid grid-cols-3 overflow-hidden rounded-sm border",
        dark ? "border-ivory/15" : "border-navy-900/15",
        className,
      )}
    >
      {actions.map((a, i) => {
        const Icon = a.icon;
        return (
          <li key={a.label} className={cn(i > 0 && (dark ? "border-l border-ivory/15" : "border-l border-navy-900/15"))}>
            <a
              href={a.href}
              {...(a.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className={cn(
                "group flex min-h-16 flex-col items-center justify-center gap-1.5 px-2 py-3 text-center text-[0.8125rem] font-semibold transition-colors duration-300",
                !stacked && "sm:min-h-12 sm:flex-row sm:gap-2.5 sm:text-sm",
                dark ? "text-ivory hover:bg-ivory/[0.06]" : "text-navy-900 hover:bg-navy-900/[0.04]",
              )}
            >
              <Icon aria-hidden className={cn("size-[1.125rem]", !stacked && "sm:size-4", dark ? "text-gold-300" : "text-gold-700")} strokeWidth={1.75} />
              <span className={cn(!stacked && "sm:hidden")}>{a.short}</span>
              {!stacked && <span className="hidden sm:inline">{a.label}</span>}
              {a.external && (
                <>
                  {!stacked && <ArrowUpRight aria-hidden className="hidden size-3.5 opacity-60 sm:block" />}
                  <span className="sr-only">(opens Google Maps in a new tab)</span>
                </>
              )}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
