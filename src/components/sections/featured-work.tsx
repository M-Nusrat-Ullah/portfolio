import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/section";
import { StatusBadge } from "@/components/status-badge";
import { caseStudies } from "@/data/case-studies";

export function FeaturedWork() {
  return (
    <Section
      id="featured"
      eyebrow="Featured work"
      title="Production systems I own or built"
      description="Three case studies, each told as problem, what I did, result and stack, with one incident."
    >
      <ul className="grid gap-6 md:grid-cols-3">
        {caseStudies.map((c) => (
          <li key={c.slug}>
            <article className="group relative flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/60 focus-within:border-primary">
              <div className="flex flex-wrap items-center gap-2">
                <StatusBadge status={c.status} />
                <span className="text-xs text-muted-foreground">{c.period}</span>
              </div>
              <h3 className="mt-4 text-xl font-bold">
                <Link
                  href={`/work/${c.slug}`}
                  className="outline-none after:absolute after:inset-0 after:rounded-xl focus-visible:underline"
                >
                  {c.title}
                </Link>
              </h3>
              <p className="mt-1 text-sm font-medium text-primary">{c.subtitle}</p>
              <p className="mt-1 text-xs text-muted-foreground">
                {c.role}
                {c.client ? ` · ${c.client}` : ""}
              </p>
              <p className="mt-4 text-sm text-muted-foreground">{c.summary}</p>
              <ul className="mt-4 space-y-1.5 text-sm">
                {c.highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {h}
                  </li>
                ))}
              </ul>
              <p aria-hidden="true" className="mt-auto flex items-center gap-1 pt-6 text-sm font-medium text-primary">
                Read the case study
                <ArrowRight className="h-4 w-4 motion-safe:transition-transform motion-safe:group-hover:translate-x-0.5" />
              </p>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
