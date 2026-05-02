"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-24 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          description="A pragmatic toolkit spanning AI/ML, MLOps, backend engineering, and telecom systems."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-lg border border-border/40 bg-card p-6 hover:border-primary/40 transition-colors"
            >
              <h3 className="font-semibold mb-4 text-sm tracking-wide uppercase text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="font-normal hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}