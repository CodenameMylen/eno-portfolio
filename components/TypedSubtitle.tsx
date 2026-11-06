"use client";

import { animate } from "framer-motion";
import { useEffect, useState } from "react";

interface TypedSubtitleProps {
  words: string[];
  className?: string;
}

export default function TypedSubtitle({
  words,
  className = "",
}: TypedSubtitleProps) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (words.length === 0) return undefined;

    const word = words[index % words.length];
    let cancelled = false;
    let holdTimer: ReturnType<typeof setTimeout> | undefined;
    let deleteControl: { stop: () => void } | undefined;

    const typeControl = animate(0, word.length, {
      duration: Math.max(word.length * 0.06, 0.5),
      ease: "linear",
      onUpdate: (latest) => {
        if (!cancelled) {
          setText(word.slice(0, Math.round(latest)));
        }
      },
      onComplete: () => {
        if (cancelled) return;
        holdTimer = setTimeout(() => {
          if (cancelled) return;
          deleteControl = animate(word.length, 0, {
            duration: Math.max(word.length * 0.03, 0.3),
            ease: "linear",
            onUpdate: (latest) => {
              if (!cancelled) {
                setText(word.slice(0, Math.round(latest)));
              }
            },
            onComplete: () => {
              if (!cancelled) {
                setIndex((i) => i + 1);
              }
            },
          });
        }, 1700);
      },
    });

    return () => {
      cancelled = true;
      typeControl.stop();
      deleteControl?.stop();
      if (holdTimer) {
        clearTimeout(holdTimer);
      }
    };
  }, [index, words]);

  return (
    <span className={className}>
      {text}
      <span className="typed-caret" aria-hidden="true" />
    </span>
  );
}
