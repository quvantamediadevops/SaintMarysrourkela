import type { ReactNode } from "react";

export interface LegalSection {
  id: string;
  title: string;
  body: ReactNode;
}

/** Readable long-form layout with a sticky table of contents on desktop. */
export function LegalPage({ sections, updated }: { sections: LegalSection[]; updated: string }) {
  return (
    <section className="section-y bg-ivory">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-10">
        <nav aria-label="Contents" className="lg:col-span-3">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow text-gold-700">Contents</p>
            <ol className="mt-5 space-y-1 border-l border-line">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="-ml-px flex gap-3 border-l border-transparent py-1.5 pl-4 text-sm text-muted transition-colors hover:border-gold-500 hover:text-navy-900"
                  >
                    <span className="tabular-nums text-subtle">{String(i + 1).padStart(2, "0")}</span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
            <p className="mt-8 text-sm text-subtle">Last updated: {updated}</p>
          </div>
        </nav>

        <div className="max-w-[42rem] lg:col-span-8 lg:col-start-5">
          {sections.map((s, i) => (
            <article key={s.id} id={s.id} className="border-b border-line py-10 first:pt-0 last:border-b-0">
              <h2 className="flex items-baseline gap-4 font-display text-display-sm text-navy-900">
                <span className="font-sans text-sm tabular-nums text-gold-700">{String(i + 1).padStart(2, "0")}</span>
                {s.title}
              </h2>
              <div className="mt-5 space-y-4 leading-[1.75] text-muted [&_a]:font-medium [&_a]:text-navy-900 [&_a]:underline [&_a]:decoration-gold-500 [&_a]:underline-offset-4 [&_li]:pl-1 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_ul]:marker:text-gold-500">
                {s.body}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
