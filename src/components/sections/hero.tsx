import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { availableCvs } from "@/lib/cv";
import { links, profile } from "@/data/site";

const facts = [
  { term: "Aegis AAA", detail: "Product lead · live in Grameenphone production" },
  { term: "Athena Core", detail: "5G SA core on Kubernetes, built end to end" },
  { term: "Research", detail: "MSc CSE (AI/ML) · two projects in progress" },
];

export function Hero() {
  const cvs = availableCvs();

  return (
    <section aria-labelledby="hero-title" className="border-b border-border/60">
      <Container className="py-14 sm:py-20">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
          <Image
            src="/avatar.jpg"
            alt={`Portrait of ${profile.name}`}
            width={128}
            height={128}
            priority
            className="h-24 w-24 shrink-0 rounded-full border border-border object-cover sm:h-32 sm:w-32"
          />
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-4xl font-bold tracking-tight sm:text-5xl">
              {profile.name}
            </h1>
            <p className="mt-2 text-xl font-medium text-primary sm:text-2xl">{profile.headline}</p>
            <p className="mt-4 text-lg text-foreground sm:text-xl">{profile.oneLiner}</p>
            <p className="mt-3 text-base text-muted-foreground">{profile.intro}</p>

            <div className="mt-7 flex flex-wrap gap-2.5">
              {cvs.map((cv, i) => (
                <Button key={cv.href} asChild variant={i === 0 ? "default" : "outline"} className="h-10 px-4">
                  <a href={cv.href} target="_blank" rel="noopener noreferrer">
                    <FileText aria-hidden="true" />
                    {cv.label}
                    <span className="sr-only"> (PDF, opens in a new tab)</span>
                  </a>
                </Button>
              ))}
              <Button asChild variant={cvs.length ? "outline" : "default"} className="h-10 px-4">
                <a href={links.github} target="_blank" rel="noopener noreferrer">
                  <GitHubIcon aria-hidden="true" />
                  GitHub
                </a>
              </Button>
              <Button asChild variant="outline" className="h-10 px-4">
                <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon aria-hidden="true" />
                  LinkedIn
                </a>
              </Button>
              <Button asChild variant="outline" className="h-10 px-4">
                <a href={`mailto:${links.email}`}>
                  <Mail aria-hidden="true" />
                  Email
                </a>
              </Button>
              <Button asChild variant="outline" className="h-10 px-4">
                <a href={links.whatsapp} target="_blank" rel="noopener noreferrer">
                  <MessageCircle aria-hidden="true" />
                  WhatsApp
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </Button>
            </div>
          </div>
        </div>

        <dl className="mt-12 grid gap-4 sm:grid-cols-3">
          {facts.map((f) => (
            <div key={f.term} className="rounded-xl border border-border bg-card p-4">
              <dt className="text-sm font-semibold">{f.term}</dt>
              <dd className="mt-1 text-sm text-muted-foreground">{f.detail}</dd>
            </div>
          ))}
        </dl>

        <nav aria-label="Jump to" className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="#featured" className="inline-flex items-center gap-1 font-medium text-primary hover:underline">
            Hiring? Start with the featured work <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link href="#research" className="inline-flex items-center gap-1 font-medium text-primary hover:underline">
            Academic? Start with the research <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </nav>
      </Container>
    </section>
  );
}
