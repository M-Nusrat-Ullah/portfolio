import { cn } from "@/lib/utils";

/**
 * The one horizontal container for the whole site. Header, hero, every section,
 * footer and case-study pages all use it, so they share the same left edge.
 */
export function Container({
  as: Tag = "div",
  className,
  children,
  ...props
}: {
  as?: "div" | "article" | "ul";
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>) {
  return (
    <Tag className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)} {...props}>
      {children}
    </Tag>
  );
}
