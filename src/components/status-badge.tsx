import { cn } from "@/lib/utils";
import { statusTone, type Status, type StatusTone } from "@/data/status";

const dot: Record<StatusTone, string> = {
  live: "bg-emerald-500",
  done: "bg-sky-500",
  progress: "bg-amber-500",
  design: "bg-violet-500",
  stopped: "bg-zinc-400",
};

export function StatusBadge({ status, className }: { status: Status; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-2.5 py-0.5 text-xs font-medium text-foreground whitespace-nowrap",
        className
      )}
    >
      <span aria-hidden="true" className={cn("h-1.5 w-1.5 rounded-full", dot[statusTone[status]])} />
      <span className="sr-only">Status: </span>
      {status}
    </span>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <li className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground">{children}</li>
  );
}

export function TagList({ tags, label }: { tags: string[]; label: string }) {
  return (
    <ul aria-label={label} className="flex flex-wrap gap-1.5">
      {tags.map((t) => (
        <Tag key={t}>{t}</Tag>
      ))}
    </ul>
  );
}
