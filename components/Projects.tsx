"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { content, type Lang } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

interface ProjectsProps {
  lang: Lang;
}

const accents = [
  "from-primary via-primary/70 to-secondary",
  "from-secondary via-secondary/70 to-peach",
  "from-peach via-peach/70 to-primary",
];

export default function Projects({ lang }: ProjectsProps) {
  const { projects } = content;

  return (
    <section id="projects" className="relative overflow-hidden bg-white py-24 md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 top-24 h-80 w-80 rounded-full bg-blush blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-24 h-72 w-72 rounded-full bg-secondary/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="05"
          title={projects.title[lang]}
          subtitle={projects.subtitle[lang]}
        />

        <div className="mt-14 space-y-7">
          {projects.entries.map((project, index) => (
            <Reveal key={project.number} delay={index * 0.07}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="group grid overflow-hidden rounded-[2rem] border border-ink/8 bg-white shadow-soft transition-shadow duration-300 hover:shadow-card md:grid-cols-[minmax(0,17rem)_1fr]"
              >
                <div
                  className={`relative flex min-h-[10rem] items-end justify-start overflow-hidden bg-gradient-to-br p-7 ${
                    accents[index % accents.length]
                  }`}
                >
                  <div
                    aria-hidden="true"
                    className="absolute -right-6 -top-8 select-none font-heading text-[8rem] font-bold leading-none text-white/30 transition-transform duration-500 group-hover:-translate-y-2 group-hover:translate-x-1"
                  >
                    {project.number}
                  </div>
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.35),transparent_55%)]"
                  />
                  <span className="relative rounded-full bg-white/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink backdrop-blur">
                    {project.number}
                  </span>
                </div>

                <div className="p-7 md:p-9">
                  <h3 className="font-heading text-2xl font-semibold leading-snug text-ink md:text-3xl">
                    {project.title[lang]}
                  </h3>

                  <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink/70">
                    {project.description[lang]}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-ink/8 bg-mist px-3.5 py-1.5 text-xs font-medium text-ink/65 transition-colors duration-300 group-hover:border-primary/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.href}
                    onClick={
                      project.href === "#"
                        ? (event) => event.preventDefault()
                        : undefined
                    }
                    className="mt-7 inline-flex items-center gap-2 rounded-full border border-ink/12 px-5 py-2.5 text-sm font-semibold text-ink transition-all duration-300 hover:border-primary hover:bg-blush"
                  >
                    {projects.viewDetail[lang]}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
