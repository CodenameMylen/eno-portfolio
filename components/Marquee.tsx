"use client";

interface MarqueeProps {
  items: string[];
  dark?: boolean;
  className?: string;
}

export default function Marquee({ items, dark = false, className = "" }: MarqueeProps) {
  const doubled = [...items, ...items];

  return (
    <div
      className={`relative overflow-hidden py-5 ${
        dark ? "border-y border-white/10" : "border-y border-ink/10"
      } ${className}`}
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee items-center gap-8 pr-8">
        {doubled.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className={`flex items-center gap-8 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.28em] ${
              dark ? "text-white/35" : "text-ink/40"
            }`}
          >
            {item}
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
          </span>
        ))}
      </div>

      <div
        className={`pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r to-transparent ${
          dark ? "from-night" : "from-white"
        }`}
      />
      <div
        className={`pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l to-transparent ${
          dark ? "from-night" : "from-white"
        }`}
      />
    </div>
  );
}
