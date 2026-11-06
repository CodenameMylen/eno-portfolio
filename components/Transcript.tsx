"use client";

import { motion } from "framer-motion";
import { content, type Lang } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

interface TranscriptProps {
  lang: Lang;
}

export default function Transcript({ lang }: TranscriptProps) {
  const { transcript } = content;
  const { headers } = transcript;

  const summaryCards = [
    {
      label: transcript.totalSksLabel[lang],
      value: String(transcript.totalSks),
      gradient: "from-primary/85 to-secondary/85",
    },
    {
      label: transcript.ipkLabel[lang],
      value: transcript.ipk,
      gradient: "from-secondary/85 to-peach/85",
    },
  ];

  return (
    <section id="transcript" className="relative overflow-hidden bg-mist py-24 md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-20 h-72 w-72 rounded-full bg-secondary/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            index="04"
            title={transcript.title[lang]}
            subtitle={transcript.subtitle[lang]}
            className="md:max-w-2xl"
          />

          <div className="flex shrink-0 gap-4">
            {summaryCards.map((card, index) => (
              <Reveal key={card.label} delay={0.1 + index * 0.1} direction="scale">
                <div
                  className={`min-w-[8.5rem] rounded-3xl bg-gradient-to-br ${card.gradient} px-6 py-5 text-center shadow-card`}
                >
                  <p className="font-heading text-3xl font-semibold text-ink">
                    {card.value}
                  </p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/60">
                    {card.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1} className="mt-12">
          <div className="overflow-x-auto rounded-3xl border border-ink/8 bg-white shadow-card">
            <table className="w-full min-w-[680px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-primary via-secondary to-peach text-ink">
                  <th className="px-5 py-4 font-semibold">{headers.no[lang]}</th>
                  <th className="px-5 py-4 font-semibold">
                    {headers.course[lang]}
                  </th>
                  <th className="px-5 py-4 font-semibold">{headers.sks[lang]}</th>
                  <th className="px-5 py-4 font-semibold">
                    {headers.letter[lang]}
                  </th>
                  <th className="px-5 py-4 font-semibold">
                    {headers.grade[lang]}
                  </th>
                </tr>
              </thead>
              <motion.tbody
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.05 }}
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.025 } },
                }}
              >
                {transcript.rows.map((row) => (
                  <motion.tr
                    key={row.no}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.4, ease: "easeOut" },
                      },
                    }}
                    className="border-t border-ink/6 transition-colors duration-200 even:bg-mist/70 hover:bg-blush"
                  >
                    <td className="px-5 py-3.5 tabular-nums text-ink/55">
                      {row.no}
                    </td>
                    <td className="px-5 py-3.5 text-ink/85">
                      {row.name[lang]}
                    </td>
                    <td className="px-5 py-3.5 tabular-nums text-ink/70">
                      {row.sks}
                    </td>
                    <td className="px-5 py-3.5">
                      <span className="inline-flex min-w-9 justify-center rounded-full bg-blush px-2.5 py-1 text-xs font-semibold text-ink">
                        {row.letter}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 tabular-nums text-ink/70">
                      {row.grade.toFixed(1)}
                    </td>
                  </motion.tr>
                ))}
              </motion.tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
