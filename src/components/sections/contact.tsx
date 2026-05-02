"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "nusrat.ullah.tahmid@gmail.com",
    href: "mailto:nusrat.ullah.tahmid@gmail.com",
  },
  {
    icon: GitHubIcon,
    label: "GitHub",
    value: "@M-Nusrat-Ullah",
    href: "https://github.com/M-Nusrat-Ullah",
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: "nusrat-ullah-tahmid",
    href: "https://www.linkedin.com/in/nusrat-ullah-tahmid",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Dhaka, Bangladesh",
    href: null,
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24 bg-muted/30">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          description="Open to opportunities in AI/ML, MLOps, backend engineering, and research collaborations."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="rounded-xl border border-border/40 bg-card p-6 sm:p-8 lg:p-10"
        >
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {contactMethods.map((method, i) => {
              const content = (
                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors h-full">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <method.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-0.5">
                      {method.label}
                    </p>
                    <p className="text-sm font-medium truncate">{method.value}</p>
                  </div>
                </div>
              );

              return (
                <motion.div
                  key={method.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  {method.href ? (
                    <a
                      href={method.href}
                      target={method.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        method.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="block"
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </motion.div>
              );
            })}
          </div>

          <div className="text-center pt-4 border-t border-border/40">
            <p className="text-sm text-muted-foreground mb-4">
              Prefer email? I usually respond within 24 hours.
            </p>
            <Button asChild size="lg">
              <a href="mailto:nusrat.ullah.tahmid@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Send me an email
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}