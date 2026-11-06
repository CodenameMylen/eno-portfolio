"use client";

import { motion } from "framer-motion";
import { content, type Lang } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

interface SkillsProps {
  lang: Lang;
}

export default function Skills({ lang }: SkillsProps) {
  const { skills } = content;

  return (
    <section id="skills" className="relative overflow-hidden bg-mist py-24 md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-32 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-16 h-72 w-72 rounded-full bg-secondary/25 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="02"
          title={skills.title[lang]}
          subtitle={skills.subtitle[lang]}
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {skills.groups.map((group, groupIndex) => {
            const Icon = group.icon;
            return (
              <Reveal
                key={group.category.id}
                delay={groupIndex * 0.08}
                direction={groupIndex % 2 === 0 ? "left" : "right"}
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                  className="group h-full rounded-3xl border border-ink/8 bg-white p-7 shadow-soft transition-shadow duration-300 hover:shadow-card md:p-8"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/80 to-secondary/80 text-ink shadow-soft transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-ink/40">
                        {String(groupIndex + 1).padStart(2, "0")}
                      </p>
                      <p className="mt-0.5 font-heading text-xl font-semibold text-ink">
                        {group.category[lang]}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2.5">
                    {group.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.1 + skillIndex * 0.05,
                          duration: 0.45,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="cursor-default rounded-full border border-ink/8 bg-mist px-4 py-1.5 text-[13px] text-ink/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-blush hover:text-ink hover:shadow-soft"
                      >
                        {skill[lang]}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
