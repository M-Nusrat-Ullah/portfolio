"use client";

import { motion } from "framer-motion";
import { Code2, Brain, Server, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";

const focuses = [
  {
    icon: Brain,
    title: "AI / ML Engineering",
    description:
      "Building RAG systems, fine-tuning LLM workflows, and researching reinforcement learning for real-world applications.",
  },
  {
    icon: Server,
    title: "MLOps & Infrastructure",
    description:
      "Production-grade ML pipelines with Docker, Kubernetes, Kubeflow, and MLflow — from experiment to deployment.",
  },
  {
    icon: Code2,
    title: "Backend Engineering",
    description:
      "FastAPI services, REST APIs, and Python-based automation for large-scale network and AI systems.",
  },
  {
    icon: Sparkles,
    title: "Telecom Systems",
    description:
      "5G/LTE core network deployment, RAN integration, and private cellular networks at production scale.",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Me"
          title="Engineer at the intersection of AI & infrastructure"
          description="I build production-grade AI/ML systems with a strong systems engineering foundation."
        />

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-4 text-muted-foreground leading-relaxed"
          >
            <p>
              I&apos;m{" "}
              <span className="text-foreground font-semibold">M. Nusrat Ullah</span>, a
              Software Engineer based in Dhaka, Bangladesh, currently building large-scale
              telecom and AI systems at{" "}
              <a
                href="https://nybsys.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Nybsys
              </a>
              .
            </p>
            <p>
              My journey started in competitive programming (1200+ problems across 4 judges)
              and has since evolved into{" "}
              <span className="text-foreground">production AI/ML engineering</span> —
              building RAG systems, MLOps pipelines, and Kubernetes-deployed ML services.
            </p>
            <p>
              I&apos;m currently pursuing an{" "}
              <span className="text-foreground">MSc in CSE (AI/ML specialization)</span> at
              Jahangirnagar University, while exploring agentic AI workflows, advanced RAG
              architectures, and reinforcement learning environments.
            </p>
            <div className="pt-2">
              <p className="text-sm font-medium text-foreground mb-2">
                Currently exploring:
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Agentic AI",
                  "Advanced RAG",
                  "RL environments",
                  "Diffusion Models",
                  "K8s-native ML",
                ].map((item) => (
                  <span
                    key={item}
                    className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Focus areas grid */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {focuses.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="h-full hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}