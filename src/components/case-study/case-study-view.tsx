import Link from "next/link";
import { AlertTriangle, ArrowLeft, ArrowRight } from "lucide-react";
import { StatusBadge, TagList } from "@/components/status-badge";
import { CaseStudyDiagram } from "@/components/case-study/diagrams";
import { caseStudies, type CaseStudy } from "@/data/case-studies";

function Block({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section aria-labelledby={id} className="mt-12">
      <h2 id={id} className="text-2xl font-bold tracking-tight">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 text-base text-muted-foreground marker:text-primary">
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
}

export function CaseStudyView({ study }: { study: CaseStudy }) {
  const index = caseStudies.findIndex((c) => c.slug === study.slug);
  const prev = caseStudies[(index - 1 + caseStudies.length) % caseStudies.length];
  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <Link href="/#featured" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
        <ArrowLeft className="h-4 w-4" aria-hidden="true" /> All work
      </Link>

      <header className="mt-6">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">Case study · {study.period}</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">{study.title}</h1>
        <p className="mt-2 text-xl text-muted-foreground">{study.subtitle}</p>
        <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-3 text-sm">
          <div>
            <dt className="text-muted-foreground">Role</dt>
            <dd className="font-medium">{study.role}</dd>
          </div>
          {study.client && (
            <div>
              <dt className="text-muted-foreground">Client</dt>
              <dd className="font-medium">{study.client}</dd>
            </div>
          )}
          <div>
            <dt className="text-muted-foreground">Employer</dt>
            <dd className="font-medium">Nybsys (Pvt.) Ltd.</dd>
          </div>
          <div>
            <dt className="sr-only">Status</dt>
            <dd>
              <StatusBadge status={study.status} />
            </dd>
          </div>
        </dl>
        <p className="mt-6 text-lg">{study.summary}</p>
      </header>

      <div className="mt-10">
        <CaseStudyDiagram slug={study.slug} diagram={study.diagram} />
      </div>

      <Block id="problem" title="Problem">
        <p className="text-base text-muted-foreground">{study.problem}</p>
      </Block>

      <Block id="what-i-did" title="What I did">
        <Bullets items={study.did} />
      </Block>

      <Block id="result" title="Result">
        <Bullets items={study.result} />
        <p className="mt-4 text-sm text-muted-foreground">{study.evidence}</p>
      </Block>

      <Block id="stack" title="Stack">
        <TagList tags={study.stack} label={`${study.title} stack`} />
      </Block>

      <aside aria-labelledby="incident" className="mt-12 rounded-xl border border-amber-600/40 bg-amber-500/5 p-6">
        <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-300">
          <AlertTriangle className="h-4 w-4" aria-hidden="true" /> Incident · {study.incident.when}
        </p>
        <h2 id="incident" className="mt-2 text-xl font-bold">
          {study.incident.title}
        </h2>
        <dl className="mt-4 space-y-3 text-base">
          <div>
            <dt className="font-semibold">Root cause</dt>
            <dd className="mt-1 text-muted-foreground">{study.incident.cause}</dd>
          </div>
          <div>
            <dt className="font-semibold">Fix</dt>
            <dd className="mt-1 text-muted-foreground">{study.incident.fix}</dd>
          </div>
        </dl>
      </aside>

      <nav aria-label="More case studies" className="mt-14 grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
        <Link href={`/work/${prev.slug}`} className="rounded-xl border border-border p-4 hover:border-primary/60">
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" /> Previous case study
          </span>
          <span className="mt-1 block font-semibold">{prev.title}</span>
        </Link>
        <Link href={`/work/${next.slug}`} className="rounded-xl border border-border p-4 text-right hover:border-primary/60">
          <span className="flex items-center justify-end gap-1 text-xs text-muted-foreground">
            Next case study <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
          <span className="mt-1 block font-semibold">{next.title}</span>
        </Link>
      </nav>
    </article>
  );
}
