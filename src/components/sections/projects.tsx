"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Star } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GitHubIcon } from "@/components/icons";
import { projects } from "@/data/projects";
import { ImageLightbox } from "@/components/image-lightbox";

export function Projects() {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="Production systems, research projects, and technical experiments I've shipped."
        />

        {/* Featured Project */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <Card className="overflow-hidden border-primary/30 bg-gradient-to-br from-card to-primary/5">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative aspect-video lg:aspect-auto lg:min-h-[420px] bg-muted overflow-hidden">
                  {featured.image && featured.gallery && (
                    <ImageLightbox
                      images={featured.gallery}
                      alt={featured.title}
                      initialIndex={featured.gallery.indexOf(featured.image)}
                      trigger={
                        <button
                          type="button"
                          className="absolute inset-0 cursor-zoom-in group"
                          aria-label="Open featured screenshot in lightbox"
                        >
                          <Image
                            src={featured.image}
                            alt={featured.title}
                            fill
                            className="object-contain p-6 bg-muted/40 group-hover:scale-[1.02] transition-transform duration-300"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            priority
                          />
                        </button>
                      }
                    />
                  )}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground gap-1.5">
                      <Star className="h-3 w-3 fill-current" />
                      Featured
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <CardContent className="p-6 lg:p-8 flex flex-col justify-center">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-2">{featured.title}</h3>
                  <p className="text-primary font-medium mb-4">{featured.tagline}</p>
                  <p className="text-muted-foreground mb-5 leading-relaxed">
                    {featured.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {featured.highlights.slice(0, 4).map((h) => (
                      <li
                        key={h}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-primary mt-1.5 h-1 w-1 rounded-full bg-primary flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {featured.tech.map((t) => (
                      <Badge key={t} variant="outline" className="text-xs">
                        {t}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button asChild>
                      <a href={featured.github} target="_blank" rel="noopener noreferrer">
                        <GitHubIcon className="mr-2 h-4 w-4" />
                        View on GitHub
                      </a>
                    </Button>
                    {featured.demo && (
                      <Button asChild variant="outline">
                        <a href={featured.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </div>
            </Card>

            {/* Gallery with Lightbox */}
            {featured.gallery && featured.gallery.length > 1 && (
              <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3">
                {featured.gallery.map((src, i) => (
                  <motion.div
                    key={src}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                  >
                    <ImageLightbox
                      images={featured.gallery!}
                      alt={`${featured.title} screenshots`}
                      initialIndex={i}
                      trigger={
                        <button
                          type="button"
                          className="relative aspect-video w-full rounded-lg overflow-hidden border border-border/50 group cursor-zoom-in hover:border-primary/50 transition-colors"
                          aria-label={`Open screenshot ${i + 1} in lightbox`}
                        >
                          <Image
                            src={src}
                            alt={`${featured.title} screenshot ${i + 1}`}
                            fill
                            className="object-contain p-2 bg-muted/40 group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 1024px) 50vw, 25vw"
                          />
                          {/* Zoom-in hint overlay */}
                          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <span className="px-3 py-1.5 rounded-full bg-background/90 backdrop-blur-sm text-xs font-medium border border-border/40">
                              🔍 Click to zoom
                            </span>
                          </div>
                        </button>
                      }
                    />
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        )}

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {others.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Card className="h-full overflow-hidden hover:border-primary/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <CardContent className="p-6 flex flex-col h-full">
                  {project.image && (
                    <div className="relative aspect-video mb-4 rounded-lg overflow-hidden border border-border/40 bg-muted">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain p-2 group-hover:scale-[1.02] transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-3">
                    {project.tagline}
                  </p>
                  <p className="text-sm text-muted-foreground/90 mb-4 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.slice(0, 4).map((t) => (
                      <Badge key={t} variant="outline" className="text-xs font-normal">
                        {t}
                      </Badge>
                    ))}
                    {project.tech.length > 4 && (
                      <Badge variant="outline" className="text-xs font-normal">
                        +{project.tech.length - 4}
                      </Badge>
                    )}
                  </div>

                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1.5"
                  >
                    <GitHubIcon className="h-4 w-4" />
                    View on GitHub
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}