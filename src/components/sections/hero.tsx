"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient blob */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-primary/30 blur-xl" />
            <Image
              src="/avatar.jpg"
              alt="M Nusrat Ullah"
              width={120}
              height={120}
              priority
              className="relative rounded-full border-2 border-primary/40 shadow-xl object-cover w-28 h-28 sm:w-32 sm:h-32"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          <Badge variant="secondary" className="mb-6 text-xs">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            Available for opportunities
          </Badge>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4"
        >
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            M Nusrat Ullah
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl sm:text-2xl text-muted-foreground mb-2 font-medium"
        >
          Software Engineer · AI/ML · MLOps
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground mb-8"
        >
          I build production-grade RAG, LLM, and Kubernetes systems. Currently
          engineering scalable solutions at{" "}
          <span className="text-foreground font-medium">Nybsys</span>, while
          pursuing an MSc in AI/ML.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-8"
        >
          <Button asChild size="lg">
            <Link href="#projects">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="/M_Nusrat_Ullah_Resume_v2.pdf" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <Link href="#contact">Contact Me</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-5"
        >
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
        </motion.div>
      </div>
    </section>
  );
}