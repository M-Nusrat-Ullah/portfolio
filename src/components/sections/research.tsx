import { Section } from "@/components/section";
import { StatusBadge } from "@/components/status-badge";
import { futureDirections, research } from "@/data/research";

export function Research() {
  return (
    <Section
      id="research"
      eyebrow="Research"
      title="Research in progress"
      description="Both projects are under way. Each states its question, method, current status and next milestone; no results are claimed yet."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {research.map((r) => (
          <article key={r.title} className="flex flex-col rounded-xl border border-border bg-card p-6">
            <div className="flex flex-wrap items-center gap-2">
              <StatusBadge status={r.status} />
              <span className="text-xs text-muted-foreground">{r.label}</span>
            </div>
            <h3 className="mt-3 text-xl font-bold">{r.title}</h3>
            <dl className="mt-4 space-y-4 text-sm">
              <div>
                <dt className="font-semibold">Research question</dt>
                <dd className="mt-1 text-muted-foreground">{r.question}</dd>
              </div>
              {r.data && (
                <div>
                  <dt className="font-semibold">Data</dt>
                  <dd className="mt-1 text-muted-foreground">{r.data}</dd>
                </div>
              )}
              <div>
                <dt className="font-semibold">Method</dt>
                <dd className="mt-1">
                  <ul className="list-disc space-y-1.5 pl-5 text-muted-foreground marker:text-primary">
                    {r.method.map((m) => (
                      <li key={m}>{m}</li>
                    ))}
                  </ul>
                </dd>
              </div>
              <div>
                <dt className="font-semibold">Status</dt>
                <dd className="mt-1 text-muted-foreground">{r.progress}</dd>
              </div>
              <div className="rounded-lg bg-muted p-3">
                <dt className="font-semibold">Next milestone</dt>
                <dd className="mt-1 text-muted-foreground">{r.next}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
      <div className="mt-8 max-w-3xl">
        <h3 className="text-base font-semibold">Future directions</h3>
        <p className="mt-1 text-sm text-muted-foreground">{futureDirections}</p>
      </div>
    </Section>
  );
}
