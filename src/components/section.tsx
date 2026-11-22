import { cn } from "@/lib/utils";
import { Container } from "@/components/container";

type Props = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: React.ReactNode;
  muted?: boolean;
  children: React.ReactNode;
};

export function Section({ id, eyebrow, title, description, muted, children }: Props) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn("scroll-mt-16 py-16 sm:py-20", muted && "bg-muted/40")}
    >
      <Container>
        <header className="mb-10 max-w-3xl">
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">{eyebrow}</p>
          )}
          <h2 id={`${id}-title`} className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-3 text-base text-muted-foreground sm:text-lg">{description}</p>
          )}
        </header>
        {children}
      </Container>
    </section>
  );
}
