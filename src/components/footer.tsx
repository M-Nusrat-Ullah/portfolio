import Link from "next/link";
import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {year} M Nusrat Ullah. Built with Next.js & Tailwind CSS.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/M-Nusrat-Ullah"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <GitHubIcon className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/nusrat-ullah-tahmid"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <LinkedInIcon className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:nusrat.ullah.tahmid@gmail.com"
              aria-label="Email"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}