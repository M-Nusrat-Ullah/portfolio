import { Mail, MapPin } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { Section } from "@/components/section";
import { links, profile } from "@/data/site";

const methods = [
  { icon: Mail, label: "Email", value: links.email, href: `mailto:${links.email}`, external: false },
  { icon: GitHubIcon, label: "GitHub", value: "M-Nusrat-Ullah", href: links.github, external: true },
  { icon: LinkedInIcon, label: "LinkedIn", value: profile.name, href: links.linkedin, external: true },
  { icon: MapPin, label: "Location", value: profile.location, href: null, external: false },
];

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Get in touch" description="Email is the quickest way to reach me." muted>
      <ul className="grid max-w-3xl gap-3 sm:grid-cols-2">
        {methods.map((m) => {
          const inner = (
            <>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <m.icon className="h-5 w-5 text-primary" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs uppercase tracking-wider text-muted-foreground">{m.label}</span>
                <span className="block break-all text-sm font-medium">{m.value}</span>
              </span>
            </>
          );
          return (
            <li key={m.label}>
              {m.href ? (
                <a
                  href={m.href}
                  {...(m.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 hover:border-primary/60"
                >
                  {inner}
                  {m.external && <span className="sr-only">(opens in a new tab)</span>}
                </a>
              ) : (
                <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">{inner}</div>
              )}
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
