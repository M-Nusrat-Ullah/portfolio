import { Section } from "@/components/section";
import { credentials, education, type Credential } from "@/data/education";

function CredentialCard({ c }: { c: Credential }) {
  return (
    <li className="rounded-xl border border-border bg-card p-5">
      <div className="flex items-baseline justify-between gap-4">
        <h4 className="min-w-0 font-semibold">{c.title}</h4>
        <p className="shrink-0 whitespace-nowrap text-sm text-muted-foreground">{c.period}</p>
      </div>
      {c.institution && <p className="mt-0.5 text-sm text-primary">{c.institution}</p>}
      {c.details.length > 0 && (
        <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
          {c.details.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      )}
      {c.links && (
        <p className="mt-3 flex flex-wrap gap-4 text-sm">
          {c.links.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">
              {l.label}
              <span className="sr-only"> profile (opens in a new tab)</span>
            </a>
          ))}
        </p>
      )}
    </li>
  );
}

export function Education() {
  return (
    <Section id="education" eyebrow="Education & credentials" title="Education and credentials" muted>
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h3 className="mb-4 text-base font-semibold uppercase tracking-wider text-muted-foreground">Degrees</h3>
          <ul className="space-y-4">
            {education.map((c) => (
              <CredentialCard key={c.title} c={c} />
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-base font-semibold uppercase tracking-wider text-muted-foreground">Credentials</h3>
          <ul className="space-y-4">
            {credentials.map((c) => (
              <CredentialCard key={c.title} c={c} />
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
