"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { experience, education } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-24 bg-muted/30">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Career & education"
          description="From competitive programming to telecom infrastructure to AI/ML engineering."
        />

        {/* Work Experience */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <Briefcase className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold">Work Experience</h3>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-10">
              {experience.map((exp, i) => (
                <motion.div
                  key={exp.role + exp.company}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative pl-12"
                >
                  {/* Dot */}
                  <div className="absolute left-2 top-1.5 w-5 h-5 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                    {exp.current && (
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    )}
                  </div>

                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h4 className="text-lg font-semibold">{exp.role}</h4>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="text-primary font-medium mb-1">
                    {exp.companyUrl ? (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {exp.company}
                      </a>
                    ) : (
                      exp.company
                    )}
                    <span className="text-muted-foreground font-normal">
                      {" · "}
                      {exp.location}
                    </span>
                  </p>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                    {exp.description}
                  </p>
                  <ul className="space-y-1.5 mb-4">
                    {exp.achievements.map((a) => (
                      <li
                        key={a}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-primary mt-2 h-1 w-1 rounded-full bg-primary flex-shrink-0" />
                        {a}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <Badge key={t} variant="outline" className="text-xs font-normal">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="flex items-center gap-2 mb-8">
            <GraduationCap className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold">Education</h3>
          </div>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
            <div className="space-y-10">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative pl-12"
                >
                  <div className="absolute left-2 top-1.5 w-5 h-5 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                    {edu.current && (
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    )}
                  </div>
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h4 className="text-lg font-semibold">{edu.degree}</h4>
                    <span className="text-sm text-muted-foreground">{edu.period}</span>
                  </div>
                  <p className="text-primary font-medium mb-2">
                    {edu.institutionUrl ? (
                      <a
                        href={edu.institutionUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {edu.institution}
                      </a>
                    ) : (
                      edu.institution
                    )}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {edu.details}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}