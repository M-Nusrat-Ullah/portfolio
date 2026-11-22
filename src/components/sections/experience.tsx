import { Section } from "@/components/section";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked">
      <ol className="space-y-10 border-l border-border pl-6">
        {experience.map((e) => (
          <li key={e.role + e.company} className="relative">
            <span aria-hidden="true" className="absolute -left-[31px] top-2 h-3 w-3 rounded-full border-2 border-primary bg-background" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-semibold">{e.role}</h3>
              <p className="text-sm text-muted-foreground">{e.period}</p>
            </div>
            <p className="mt-0.5 text-sm">
              {e.companyUrl ? (
                <a href={e.companyUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">
                  {e.company}
                </a>
              ) : (
                <span className="font-medium text-primary">{e.company}</span>
              )}
              <span className="text-muted-foreground"> · {e.location}</span>
            </p>
            <p className="mt-2 text-sm italic text-muted-foreground">{e.scope}</p>
            {e.points.length > 0 && (
              <ul className="mt-3 max-w-4xl list-disc space-y-1.5 pl-5 text-sm text-muted-foreground marker:text-primary">
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
