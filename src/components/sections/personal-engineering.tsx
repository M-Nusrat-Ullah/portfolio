import Image from "next/image";
import { GitHubIcon } from "@/components/icons";
import { Section } from "@/components/section";
import { StatusBadge, TagList } from "@/components/status-badge";
import { personal } from "@/data/personal";

export function PersonalEngineering() {
  return (
    <Section
      id="personal"
      eyebrow="Personal engineering"
      title="Platforms, instruments and side projects"
      description="Work outside my day job. Design-stage and cancelled projects are labelled as such."
      muted
    >
      <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {personal.map((p) => (
          <li key={p.title}>
            <article className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card">
              {p.image && (
                <div className="relative aspect-video border-b border-border bg-white">
                  <Image
                    src={p.image.src}
                    alt={p.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain p-2"
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <StatusBadge status={p.status} />
                  <span className="text-xs text-muted-foreground">{p.period}</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
                <p className="text-sm text-primary">{p.subtitle}</p>
                <p className="mt-3 text-sm text-muted-foreground">{p.body}</p>
                <p className="mt-3 text-sm">
                  <span className="font-semibold">Where it stands: </span>
                  {p.progress}
                </p>
                <div className="mt-auto space-y-4 pt-4">
                  <TagList tags={p.tags} label={`${p.title} technologies`} />
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                    >
                      <GitHubIcon className="h-4 w-4" aria-hidden="true" />
                      Repository<span className="sr-only">: {p.title} on GitHub (opens in a new tab)</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
