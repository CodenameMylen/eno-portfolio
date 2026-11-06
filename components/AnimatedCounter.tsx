"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

export default function AnimatedCounter({
  value,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  const numeric = Number(value);
  const isNumeric = value.trim() !== "" && !Number.isNaN(numeric);
  const decimals = value.includes(".") ? value.split(".")[1].length : 0;

  const [display, setDisplay] = useState(isNumeric ? (0).toFixed(decimals) : value);

  useEffect(() => {
    if (!isNumeric) {
      setDisplay(value);
      return undefined;
    }
    if (!inView) return undefined;

    const controls = animate(0, numeric, {
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(latest.toFixed(decimals)),
    });
    return () => controls.stop();
  }, [inView, isNumeric, numeric, value, decimals]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
