"use client";

import Reveal from "./Reveal";

interface SectionHeadingProps {
  index: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  index,
  title,
  subtitle,
  dark = false,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  return (
    <Reveal className={className}>
      <div
        className={`flex items-center gap-4 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="text-xs font-semibold tracking-[0.35em] text-primary">
          {index}
        </span>
        <span
          aria-hidden="true"
          className={`h-px w-14 ${dark ? "bg-white/20" : "bg-ink/15"}`}
        />
      </div>

      <h2
        className={`mt-5 font-heading text-4xl font-semibold leading-tight text-balance md:text-5xl lg:text-[3.4rem] ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-5 max-w-2xl text-[15px] leading-relaxed ${
            dark ? "text-white/70" : "text-ink/60"
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
