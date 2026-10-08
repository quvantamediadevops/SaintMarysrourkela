import { principalMessage as msg } from "@/content/copy";
import { images } from "@/content/images";
import { ButtonLink } from "@/components/shared/button-link";
import { Reveal } from "@/components/shared/reveal";
import { SchoolImage } from "@/components/shared/school-image";
import { SectionLabel } from "@/components/shared/section-label";

interface PrincipalMessageProps {
  /** "excerpt" on the home page, "full" on the About page. */
  variant?: "excerpt" | "full";
}

function Signature() {
  return (
    <div>
      <p className="text-muted">{msg.signOff}</p>
      <p className="mt-3 font-display text-3xl italic text-navy-900">{msg.name ?? msg.role}</p>
      <p className="mt-1.5 text-sm text-muted">
        {msg.name ? `${msg.role}, ` : ""}
        {msg.institution}
      </p>
    </div>
  );
}

/** Magazine-style composition: portrait column + quote + letter. */
export function PrincipalMessage({ variant = "full" }: PrincipalMessageProps) {
  const full = variant === "full";
  const paragraphs = full ? msg.paragraphs : msg.paragraphs.slice(0, 2);

  return (
    <section id="principal" aria-labelledby="principal-title" className="section-y relative overflow-hidden bg-warm-white">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-10">
        {/* Portrait */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Reveal direction="scale" className="relative grid grid-cols-[7.5rem_1fr] items-end gap-5 sm:grid-cols-[11rem_1fr] lg:block">
              {/* PRINCIPAL PORTRAIT — content/images.ts → principal */}
              <SchoolImage
                image={images.principal}
                compact
                sizes="(min-width: 1024px) 34vw, 11rem"
                className="aspect-[4/5] rounded-md lg:max-w-[26rem]"
              />
              <div className="pb-1 lg:mt-6 lg:flex lg:max-w-[26rem] lg:items-baseline lg:justify-between lg:border-t lg:border-line lg:pt-5">
                <p className="font-display text-xl text-navy-900">{msg.name ?? msg.role}</p>
                <p className="mt-1 text-sm text-muted lg:mt-0">{msg.institution}</p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Letter */}
        <div className="relative lg:col-span-7">
          <span
            aria-hidden
            className="pointer-events-none absolute -top-14 right-0 select-none font-display text-[12rem] leading-none text-gold-500/[0.14] sm:-top-20 sm:text-[20rem]"
          >
            &ldquo;
          </span>

          <SectionLabel index={full ? undefined : "04"}>From the Principal&rsquo;s Desk</SectionLabel>
          <h2 id="principal-title" className="sr-only">
            Principal&rsquo;s Message
          </h2>

          <Reveal as="figure" className="relative mt-8">
            <blockquote>
              <p className="font-display text-[clamp(1.75rem,1.3rem+1.9vw,2.85rem)] italic leading-[1.15] tracking-[-0.015em] text-navy-900">
                {msg.pullQuote}
              </p>
            </blockquote>
          </Reveal>

          <span aria-hidden className="mt-10 block h-px w-12 bg-gold-500" />

          <Reveal
            stagger
            className={
              full
                ? "mt-10 space-y-5 text-[1.0625rem] leading-[1.8] text-muted md:columns-2 md:gap-10 md:space-y-0 md:[&>p]:mb-5"
                : "mt-10 max-w-[36rem] space-y-5 text-[1.0625rem] leading-[1.8] text-muted"
            }
          >
            <p className="font-semibold text-navy-900">{msg.salutation}</p>
            <p>{msg.welcome}</p>
            {paragraphs.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
            {full && <p className="font-display text-xl leading-snug text-navy-900">{msg.closing}</p>}
          </Reveal>

          {full ? (
            <Reveal className="mt-12 border-t border-line pt-8">
              <Signature />
            </Reveal>
          ) : (
            <Reveal className="mt-10">
              <ButtonLink href="/about#principal" variant="outline" arrow>
                Read the Full Message
              </ButtonLink>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
