import { Section } from "@/components/section";
import { StatusBadge, TagList } from "@/components/status-badge";
import { cn } from "@/lib/utils";
import { spansOddRemainder } from "@/lib/grid";
import { moreWork } from "@/data/more-work";

export function MoreWork() {
  return (
    <Section id="more-work" eyebrow="More work" title="Other company work at Nybsys" muted>
      <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
        {moreWork.map((w, i) => {
          const wide = w.layout === "full";
          const fillRow = spansOddRemainder(moreWork, i, (x) => x.layout === "full");
          return (
            <li
              key={w.title}
              className={cn(
                wide ? "md:col-span-2 lg:col-span-6" : w.layout === "half" ? "lg:col-span-3" : "lg:col-span-2",
                fillRow && !wide && "md:col-span-2"
              )}
            >
              <article className="flex h-full flex-col rounded-xl border border-border bg-card p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <StatusBadge status={w.status} />
                  <span className="text-xs text-muted-foreground">{w.period}</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold">{w.title}</h3>
                <p className="text-sm text-primary">{w.subtitle}</p>
                <ul className={cn("mt-3 space-y-2 text-sm text-muted-foreground", wide && "lg:columns-2 lg:gap-8")}>
                  {w.body.map((b) => (
                    <li key={b} className="break-inside-avoid">
                      {b}
                    </li>
                  ))}
                </ul>
                {w.result && (
                  <p className="mt-3 text-sm">
                    <span className="font-semibold">Result: </span>
                    {w.result}
                  </p>
                )}
                {w.note && <p className="mt-3 text-xs italic text-muted-foreground">{w.note}</p>}
                <div className="mt-auto pt-4">
                  <TagList tags={w.tags} label={`${w.title} technologies`} />
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
