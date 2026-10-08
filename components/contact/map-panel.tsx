import { MapPin } from "lucide-react";
import { school } from "@/content/site";

/**
 * Map area. When `school.mapEmbedUrl` is set (content/site.ts) a lazy-loaded
 * Google Maps embed is shown; otherwise a designed placeholder keeps the
 * layout intact without guessing coordinates.
 */
export function MapPanel() {
  if (school.mapEmbedUrl) {
    return (
      <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-line bg-sky-100 lg:aspect-auto lg:h-full lg:min-h-[30rem]">
        <iframe
          src={school.mapEmbedUrl}
          title="Map showing Saint Mary’s School, Jagda, Raurkela"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 size-full border-0"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label="Illustrated map marker for Saint Mary’s School, Plot No. JD-119, Jagda, Raurkela, Odisha 769042"
      className="relative aspect-[4/3] overflow-hidden rounded-md border border-line bg-sky-100 lg:aspect-auto lg:h-full lg:min-h-[30rem]"
    >
      <div aria-hidden className="absolute inset-0 grid-lines text-navy-900 opacity-80" />
      {/* Abstract streets — decorative only, not a real street map */}
      <svg aria-hidden viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 size-full">
        <g fill="none" stroke="#ffffff" strokeLinecap="round">
          <path d="M-20 420 C 180 380, 320 460, 520 400 S 760 300, 840 330" strokeWidth="22" />
          <path d="M260 -20 C 300 160, 240 300, 330 640" strokeWidth="16" />
          <path d="M560 -20 C 520 180, 620 320, 600 640" strokeWidth="10" />
          <path d="M-20 160 C 200 200, 420 120, 840 190" strokeWidth="10" />
        </g>
        <g fill="none" stroke="#cfe0ef" strokeWidth="2" strokeDasharray="2 10">
          <path d="M-20 420 C 180 380, 320 460, 520 400 S 760 300, 840 330" />
        </g>
        <path d="M600 470 h140 v110 h-140z" fill="#d7e6d3" opacity="0.7" />
        <path d="M60 40 h150 v80 h-150z" fill="#d7e6d3" opacity="0.6" />
      </svg>

      <div className="absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-full">
        <div className="relative flex flex-col items-center">
          <span aria-hidden className="absolute -top-2 size-16 rounded-full border border-gold-500/40" />
          <span className="relative grid size-12 place-items-center rounded-full bg-navy-900 text-gold-300 shadow-lift ring-4 ring-ivory">
            <MapPin aria-hidden className="size-5" strokeWidth={1.8} />
          </span>
          <span aria-hidden className="h-4 w-px bg-navy-900" />
        </div>
      </div>

      <div className="absolute inset-x-4 bottom-4 rounded-md border border-line bg-ivory/95 p-4 shadow-soft backdrop-blur sm:inset-x-auto sm:bottom-6 sm:left-6 sm:max-w-xs sm:p-5">
        <p className="font-display text-lg text-navy-900">{school.name}</p>
        <p className="mt-1 text-sm leading-relaxed text-muted">
          {school.address.short}
        </p>
      </div>
    </div>
  );
}
