"use client";

import { motion } from "framer-motion";
import { content, type Lang } from "@/lib/content";
import AnimatedCounter from "./AnimatedCounter";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

interface AboutProps {
  lang: Lang;
}

export default function About({ lang }: AboutProps) {
  const { about } = content;

  return (
    <section id="about" className="relative overflow-hidden bg-white py-24 md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-blush blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal direction="left" className="lg:col-span-5">
            <div className="gradient-card-border h-full rounded-[2.5rem] p-1.5 shadow-card">
              <div className="relative flex h-full min-h-[24rem] flex-col justify-between overflow-hidden rounded-[2.2rem] bg-night p-8 sm:min-h-[28rem]">
                <div
                  aria-hidden="true"
                  className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-primary/30 blur-3xl"
                />
                <div
                  aria-hidden="true"
                  className="absolute -bottom-14 -left-10 h-40 w-40 rounded-full bg-secondary/30 blur-3xl"
                />

                <div className="relative">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/40">
                    {about.title[lang]}
                  </span>
                  <p className="mt-4 font-heading text-3xl font-semibold leading-snug text-white sm:text-4xl">
                    {about.name[lang]}
                  </p>
                  <p className="mt-3 text-sm text-white/55">
                    {about.degree[lang]}
                  </p>
                </div>

                <div className="relative">
                  <span className="inline-block rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur">
                    {about.role[lang]}
                  </span>
                  <span
                    aria-hidden="true"
                    className="mt-6 block select-none font-heading text-[7rem] font-semibold leading-none text-white/5 sm:text-[9rem]"
                  >
                    EPJ
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <SectionHeading index="01" title={about.title[lang]} />

            <div className="mt-8 space-y-5">
              {about.paragraphs.map((paragraph, index) => (
                <Reveal key={index} delay={0.06 * index}>
                  <p className="text-[15px] leading-relaxed text-ink/70">
                    {paragraph[lang]}
                  </p>
                </Reveal>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {about.stats.map((stat, index) => (
                <Reveal key={stat.label.id} delay={0.06 * index} direction="scale">
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="group rounded-2xl border border-ink/8 bg-mist p-5 transition-colors duration-300 hover:border-primary/40 hover:bg-white hover:shadow-card"
                  >
                    <p className="font-heading text-2xl font-semibold text-ink sm:text-3xl">
                      <AnimatedCounter value={stat.value} />
                    </p>
                    <p className="mt-1.5 text-xs leading-snug text-ink/55">
                      {stat.label[lang]}
                    </p>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
