"use client";

import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import Image from "next/image";
import { content, type Lang } from "@/lib/content";
import Marquee from "./Marquee";
import TypedSubtitle from "./TypedSubtitle";

interface HeroProps {
  lang: Lang;
}

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.13, delayChildren: 0.2 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero({ lang }: HeroProps) {
  const { hero, skills } = content;

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const marqueeItems = [
    ...hero.roles,
    ...skills.groups.flatMap((group) => group.skills.slice(0, 2).map((skill) => skill[lang])),
  ];

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-white pb-0 pt-32 md:pt-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -top-32 h-[26rem] w-[26rem] animate-float-slow rounded-full bg-primary/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-40 h-[30rem] w-[30rem] animate-float rounded-full bg-secondary/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-16 left-1/3 h-72 w-72 rounded-full bg-peach/40 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-6xl flex-1 px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-ink/10 bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/60 shadow-soft backdrop-blur">
                <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-primary" />
                {hero.eyebrow[lang]}
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-7 font-heading text-[3.4rem] font-semibold leading-[0.98] tracking-tight text-ink sm:text-7xl md:text-8xl"
            >
              {hero.name[lang].split(" ").slice(0, 2).join(" ")}
              <br />
              <span className="text-gradient">
                {hero.name[lang].split(" ").slice(2).join(" ")}
              </span>
            </motion.h1>

            <motion.div
              variants={item}
              className="mt-6 min-h-[3.5rem] text-xl font-medium text-ink/75 sm:min-h-[3rem] sm:text-2xl"
            >
              <TypedSubtitle words={hero.roles} />
            </motion.div>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-base leading-relaxed text-ink/65 md:text-lg"
            >
              {hero.intro[lang]}
            </motion.p>

            <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => scrollTo("projects")}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-7 py-3.5 text-sm font-semibold text-ink shadow-glow transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                {hero.primaryCta[lang]}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/70 px-7 py-3.5 text-sm font-semibold text-ink backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-blush"
              >
                {hero.secondaryCta[lang]}
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 48, rotate: 8 }}
            animate={{ opacity: 1, y: 0, rotate: 3 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
            className="relative flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.03, rotate: -1.5 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="gradient-card-border rounded-[2.75rem] p-1.5 shadow-card"
              >
                <div className="relative h-72 w-64 overflow-hidden rounded-[2.4rem] bg-gradient-to-br from-white via-mist to-blush sm:h-96 sm:w-80 md:h-[26rem] md:w-[22rem]">
                  <div
                    aria-hidden="true"
                    className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-primary/25 blur-2xl"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-secondary/30 blur-2xl"
                  />
                  <p className="relative z-10 mx-auto mt-6 max-w-[85%] text-center text-[10px] font-semibold uppercase leading-relaxed tracking-[0.28em] text-ink/50">
                    {hero.eyebrow[lang]}
                  </p>
                  <Image
                    src="/eno-photo.png"
                    alt={hero.monogramLabel[lang]}
                    width={256}
                    height={256}
                    priority
                    className="absolute bottom-0 left-0 right-0 top-14 h-[calc(100%-3.5rem)] w-full object-contain object-bottom"
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-white/85 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink shadow-soft backdrop-blur"
                  >
                    {hero.roles[0]}
                  </motion.div>
                </div>
              </motion.div>

              <motion.span
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.6,
                }}
                className="absolute -left-6 top-10 rounded-2xl border border-ink/5 bg-white px-4 py-2.5 text-xs font-semibold text-ink shadow-lift sm:-left-10"
              >
                IPK 3.82
              </motion.span>
              <motion.span
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.2,
                }}
                className="absolute -right-4 bottom-16 rounded-2xl border border-ink/5 bg-white px-4 py-2.5 text-xs font-semibold text-ink shadow-lift sm:-right-8"
              >
                ISTQB · 2023
              </motion.span>
              <motion.span
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
                className="absolute -bottom-5 left-6 rounded-2xl border border-ink/5 bg-white px-4 py-2.5 text-xs font-semibold text-ink shadow-lift sm:left-10"
              >
                Pekanbaru, ID
              </motion.span>
            </motion.div>
          </motion.div>
        </div>

        <motion.button
          type="button"
          onClick={() => scrollTo("about")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mx-auto mt-14 hidden items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-ink/45 transition-colors duration-300 hover:text-primary md:flex"
        >
          Scroll
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="h-4 w-4" />
          </motion.span>
        </motion.button>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.9 }}
        className="relative mt-14"
      >
        <Marquee items={marqueeItems} />
      </motion.div>
    </section>
  );
}
