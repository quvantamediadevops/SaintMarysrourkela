import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { school } from "@/content/site";
import { InstagramIcon } from "@/components/shared/instagram-icon";
import { MaskLines, Reveal } from "@/components/shared/reveal";
import { SectionLabel } from "@/components/shared/section-label";
import { ContactActions } from "./contact-actions";
import { MapPanel } from "./map-panel";

interface CampusLocationProps {
  tone?: "ivory" | "paper" | "white";
  index?: string;
}

const bg = { ivory: "bg-ivory", paper: "bg-paper", white: "bg-warm-white" } as const;

export function CampusLocation({ tone = "paper", index }: CampusLocationProps) {
  const { phone, email, officeHours } = school.contact;

  const rows = [
    {
      icon: MapPin,
      label: "Address",
      content: (
        <address className="not-italic leading-relaxed text-navy-900">
          {school.address.lines.map((line, i) => (
            <span key={line} className={i === 0 ? "block font-semibold" : "block"}>
              {line}
            </span>
          ))}
        </address>
      ),
    },
    {
      icon: Phone,
      label: "Telephone",
      content: (
        <a href={phone.href} className="link-underline font-medium text-navy-900">
          {phone.display}
        </a>
      ),
    },
    {
      icon: Mail,
      label: "Email",
      content: (
        <a href={email.href} className="link-underline break-all font-medium text-navy-900">
          {email.display}
        </a>
      ),
    },
    ...(officeHours ? [{ icon: Clock, label: "Office hours", content: <span className="text-navy-900">{officeHours}</span> }] : []),
  ];

  return (
    <section id="location" aria-labelledby="location-title" className={`section-y ${bg[tone]}`}>
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <SectionLabel index={index}>Visit the Campus</SectionLabel>
          <Reveal direction="mask" as="h2" id="location-title" className="mt-6 text-display-md text-navy-900">
            <MaskLines lines={["Find Us in", <em key="e" className="text-navy-700">Jagda, Raurkela.</em>]} />
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 max-w-md leading-relaxed text-muted">
              Families are always welcome to visit, see where their child will learn and speak with the school office
              about admissions.
            </p>
          </Reveal>

          <Reveal as="dl" stagger className="mt-10 border-t border-navy-900/15">
            {rows.map((row) => {
              const Icon = row.icon;
              return (
                <div key={row.label} className="grid grid-cols-[1.75rem_1fr] gap-x-3 border-b border-navy-900/15 py-5">
                  <dt>
                    <Icon aria-hidden className="mt-0.5 size-[1.125rem] text-gold-700" strokeWidth={1.6} />
                    <span className="sr-only">{row.label}</span>
                  </dt>
                  <dd>{row.content}</dd>
                </div>
              );
            })}
            <div className="grid grid-cols-[1.75rem_1fr] gap-x-3 border-b border-navy-900/15 py-5">
              <dt>
                <InstagramIcon aria-hidden className="mt-0.5 size-[1.125rem] text-gold-700" strokeWidth={1.6} />
                <span className="sr-only">Instagram</span>
              </dt>
              <dd>
                <a
                  href={school.instagram.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline font-medium text-navy-900"
                >
                  {school.instagram.handle}
                  <span className="sr-only"> (opens Instagram in a new tab)</span>
                </a>
              </dd>
            </div>
          </Reveal>

          <Reveal delay={150} className="mt-8">
            <ContactActions />
          </Reveal>
        </div>

        <Reveal direction="scale" delay={120} className="lg:col-span-7">
          <MapPanel />
        </Reveal>
      </div>
    </section>
  );
}
