"use client";

import { GraduationCap } from "lucide-react";
import { content, type Lang } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

interface EducationProps {
  lang: Lang;
}

export default function Education({ lang }: EducationProps) {
  const { education } = content;
  const { entry } = education;

  return (
    <section id="education" className="relative overflow-hidden bg-white py-24 md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-10 top-24 h-64 w-64 rounded-full bg-peach/30 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading index="03" title={education.title[lang]} />
            <Reveal delay={0.15}>
              <div className="mt-8 hidden rounded-3xl border border-ink/8 bg-mist p-6 lg:block">
                <GraduationCap className="h-7 w-7 text-primary" />
                <p className="mt-4 font-heading text-2xl font-semibold text-ink">
                  {entry.ipk}
                </p>
                <p className="mt-1 text-sm text-ink/55">{entry.ipkLabel[lang]}</p>
                <div className="mt-5 h-px bg-ink/10" />
                <p className="mt-5 font-heading text-xl font-semibold text-ink">
                  {entry.period}
                </p>
                <p className="mt-1 text-sm text-ink/55">
                  {entry.periodLabel[lang]}
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal direction="right" className="lg:col-span-8">
            <div className="relative overflow-hidden rounded-[2rem] border border-ink/8 bg-white p-8 shadow-card md:p-10">
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-primary via-secondary to-peach"
              />
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blush blur-3xl"
              />

              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full bg-blush px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/65">
                  <GraduationCap className="h-3.5 w-3.5 text-primary" />
                  {entry.period}
                </span>

                <h3 className="mt-6 font-heading text-3xl font-semibold leading-snug text-ink md:text-4xl">
                  {entry.degree[lang]}
                </h3>

                <p className="mt-3 text-[15px] text-ink/65">
                  {entry.university[lang]}
                </p>

                <div className="mt-6 flex flex-wrap gap-3 lg:hidden">
                  <span className="rounded-full border border-ink/10 bg-mist px-4 py-2 text-sm text-ink/70">
                    {entry.periodLabel[lang]}{" "}
                    <span className="font-semibold text-ink">{entry.period}</span>
                  </span>
                  <span className="rounded-full border border-ink/10 bg-mist px-4 py-2 text-sm text-ink/70">
                    {entry.ipkLabel[lang]}{" "}
                    <span className="font-semibold text-ink">{entry.ipk}</span>
                  </span>
                </div>

                <div className="mt-9">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-ink/45">
                    {entry.courseworkLabel[lang]}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2.5">
                    {entry.courses.map((course) => (
                      <span
                        key={course.id}
                        className="rounded-full border border-ink/8 bg-mist px-4 py-2 text-[13px] text-ink/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/45 hover:bg-blush hover:text-ink"
                      >
                        {course[lang]}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
