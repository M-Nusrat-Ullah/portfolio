"use client";

import { motion } from "framer-motion";
import { Trophy, Award } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { achievements, stats } from "@/data/achievements";

export function Achievements() {
  return (
    <section id="achievements" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Achievements"
          title="Competitive programming & contests"
          description="Years of algorithmic problem-solving, contest participation, and mentoring at DIU CPC."
        />

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Card className="text-center hover:border-primary/40 transition-colors">
                <CardContent className="p-6">
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">
                    {s.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{s.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Achievements List */}
        <div className="grid sm:grid-cols-2 gap-4">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Card className="hover:border-primary/40 transition-colors h-full">
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Trophy className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-2 mb-1">
                      <h3 className="font-semibold leading-tight">{a.title}</h3>
                      {a.rank && (
                        <span className="text-xs font-bold text-primary whitespace-nowrap">
                          {a.rank}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{a.detail}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Profiles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mt-10 flex items-center justify-center gap-2 flex-wrap text-sm"
        >
          <Award className="h-4 w-4 text-primary" />
          <span className="text-muted-foreground">Find me on:</span>
          <a
            href="https://codeforces.com/profile/demonlord"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
          >
            Codeforces
          </a>
          <span className="text-muted-foreground">·</span>
          <a
            href="https://leetcode.com/u/nusrat_ullah/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
          >
            LeetCode
          </a>
          <span className="text-muted-foreground">·</span>
          <a
            href="https://vjudge.net/user/Nusrat_Ullah"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
          >
            Vjudge
          </a>
          <span className="text-muted-foreground">·</span>
          <a
            href="https://judge.beecrowd.com/en/profile/217204"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
          >
            Beecrowd
          </a>
        </motion.div>
      </div>
    </section>
  );
}