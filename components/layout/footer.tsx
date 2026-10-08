import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/shared/instagram-icon";
import { footerNav, legalNav, school } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();
  const { phone, email } = school.contact;

  return (
    <footer className="on-dark relative overflow-hidden bg-navy-950 text-sky-100/75">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grid-lines text-ivory opacity-50 [mask-image:linear-gradient(to_bottom,black,transparent_75%)]"
      />

      <div className="shell relative">
        {/* Brand statement */}
        <div className="grid gap-10 pb-12 pt-16 sm:pt-20 lg:grid-cols-12 lg:items-end lg:pb-16 lg:pt-24">
          <div className="lg:col-span-8">
            <p className="font-display text-[clamp(3rem,1.6rem+6.4vw,7rem)] uppercase leading-[0.9] tracking-[-0.03em] text-ivory">
              Saint Mary&rsquo;s
              <br />
              <span className="italic normal-case text-gold-300">School</span>
            </p>
          </div>
          <div className="lg:col-span-4 lg:pb-3">
            <span aria-hidden className="block h-px w-12 bg-gold-400" />
            <p className="mt-5 font-display text-2xl text-ivory">Jagda · Raurkela</p>
            <p className="mt-1.5 text-sm tracking-wide text-sky-100/70">
              Established {school.established} · {school.affiliation} · {school.classesShort}
            </p>
          </div>
        </div>

        <div className="grid gap-12 border-t border-ivory/10 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:col-span-2 lg:col-span-5">
            {footerNav.map((group) => (
              <div key={group.title}>
                <h2 className="eyebrow text-gold-300">{group.title}</h2>
                <ul className="mt-5 space-y-3">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="link-underline text-[0.9375rem] text-sky-100/80 transition-colors hover:text-ivory">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          <div className="lg:col-span-4">
            <h2 className="eyebrow text-gold-300">Contact</h2>
            <ul className="mt-5 space-y-3.5 text-[0.9375rem]">
              <li>
                <a href={phone.href} className="group inline-flex items-center gap-3 text-sky-100/85 hover:text-ivory">
                  <Phone aria-hidden className="size-4 shrink-0 text-gold-300" strokeWidth={1.6} />
                  <span className="link-underline">{phone.display}</span>
                </a>
              </li>
              <li>
                <a href={email.href} className="group inline-flex items-center gap-3 break-all text-sky-100/85 hover:text-ivory">
                  <Mail aria-hidden className="size-4 shrink-0 text-gold-300" strokeWidth={1.6} />
                  <span className="link-underline">{email.display}</span>
                </a>
              </li>
              <li>
                <a
                  href={school.instagram.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 text-sky-100/85 hover:text-ivory"
                >
                  <InstagramIcon aria-hidden className="size-4 shrink-0 text-gold-300" strokeWidth={1.6} />
                  <span className="link-underline">{school.instagram.handle}</span>
                  <ArrowUpRight
                    aria-hidden
                    className="size-3.5 opacity-60 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                  <span className="sr-only">(Instagram, opens in a new tab)</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="eyebrow text-gold-300">Address</h2>
            <address className="mt-5 flex gap-3 text-[0.9375rem] not-italic leading-relaxed text-sky-100/85">
              <MapPin aria-hidden className="mt-1 size-4 shrink-0 text-gold-300" strokeWidth={1.6} />
              <span>
                {school.address.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </address>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-ivory/10 py-7 text-[0.8125rem] text-sky-100/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} Saint Mary&rsquo;s School, Jagda, Raurkela. All rights reserved.
          </p>
          <ul className="flex gap-6">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-underline hover:text-ivory">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
