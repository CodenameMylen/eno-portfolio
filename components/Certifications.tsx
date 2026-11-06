"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { content, type Lang } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

interface CertificationsProps {
  lang: Lang;
}

export default function Certifications({ lang }: CertificationsProps) {
  const { certifications } = content;

  return (
    <section
      id="certifications"
      className="relative overflow-hidden bg-mist py-24 md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-28 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="06"
          title={certifications.title[lang]}
          subtitle={certifications.subtitle[lang]}
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {certifications.entries.map((certification, index) => (
            <Reveal
              key={certification.name.id}
              delay={index * 0.07}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="group flex h-full items-start gap-5 rounded-3xl border border-ink/8 bg-white p-6 shadow-soft transition-shadow duration-300 hover:shadow-card md:p-7"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/80 to-secondary/80 text-ink transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                  <Award className="h-5 w-5" />
                </span>

                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-heading text-lg font-semibold leading-snug text-ink">
                        {certification.name[lang]}
                      </p>
                      <p className="mt-1 text-sm text-ink/55">
                        {certification.issuer[lang]}
                      </p>
                    </div>
                    <span className="shrink-0 rounded-full bg-blush px-3 py-1 text-xs font-semibold tabular-nums text-ink/70 transition-colors duration-300 group-hover:bg-primary/40">
                      {certification.year}
                    </span>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
