import { Section } from "@/components/section";
import { cn } from "@/lib/utils";
import { spansOddRemainder } from "@/lib/grid";
import { depthLegend, skillGroups, type Depth } from "@/data/skills";

const depthStyle: Record<Depth, string> = {
  production: "border-emerald-600/40 bg-emerald-500/10",
  field: "border-sky-600/40 bg-sky-500/10",
  built: "border-border bg-muted",
  working: "border-border bg-muted",
  research: "border-amber-600/40 bg-amber-500/10",
  designed: "border-violet-600/40 bg-violet-500/10",
  familiar: "border-dashed border-border bg-transparent",
};

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Skills, rated by what shipped"
      description="Depth reflects what reached production or the field, not just exposure."
    >
      <ul aria-label="Depth legend" className="mb-8 flex flex-wrap gap-2">
        {depthLegend.map((d) => (
          <li key={d.depth} className={cn("rounded-full border px-2.5 py-0.5 text-xs text-foreground", depthStyle[d.depth])}>
            {d.label}
          </li>
        ))}
      </ul>
      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((g, i) => {
          const headingId = `skills-${g.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
          return (
          <section
            key={g.title}
            aria-labelledby={headingId}
            className={cn("rounded-xl border border-border bg-card p-5", spansOddRemainder(skillGroups, i) && "md:col-span-2")}
          >
            <h3 id={headingId} className="text-base font-semibold">
              {g.title}
            </h3>
            <ul className="mt-3 divide-y divide-border">
              {g.skills.map((s) => (
                <li key={s.name} className="py-3 first:pt-0 last:pb-0">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <span className="text-sm font-medium">{s.name}</span>
                    <span className={cn("shrink-0 rounded-full border px-2 py-0.5 text-xs text-foreground", depthStyle[s.depth])}>
                      {s.depthLabel}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">Proven by: {s.proof}</p>
                </li>
              ))}
            </ul>
          </section>
          );
        })}
      </div>
    </Section>
  );
}
