"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, className }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={cn("text-center mb-12", className)}
    >
      {eyebrow && (
        <p className="text-sm font-medium text-primary mb-2 tracking-wider uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground">
          {description}
        </p>
      )}
    </motion.div>
  );
}