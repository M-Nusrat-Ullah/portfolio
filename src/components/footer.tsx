import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { links, profile } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground">
          © {year} {profile.name}
        </p>
        <ul className="flex items-center gap-4">
          <li>
            <a href={links.github} rel="noopener noreferrer" target="_blank" className="text-muted-foreground hover:text-foreground">
              <GitHubIcon className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">GitHub (opens in a new tab)</span>
            </a>
          </li>
          <li>
            <a href={links.linkedin} rel="noopener noreferrer" target="_blank" className="text-muted-foreground hover:text-foreground">
              <LinkedInIcon className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">LinkedIn (opens in a new tab)</span>
            </a>
          </li>
          <li>
            <a href={`mailto:${links.email}`} className="text-muted-foreground hover:text-foreground">
              <Mail className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Email</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
