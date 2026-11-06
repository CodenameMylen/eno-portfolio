"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

type RevealDirection = "up" | "down" | "left" | "right" | "scale";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: RevealDirection;
  duration?: number;
}

const offsets: Record<RevealDirection, { x: number; y: number; scale: number }> =
  {
    up: { x: 0, y: 32, scale: 1 },
    down: { x: 0, y: -32, scale: 1 },
    left: { x: -40, y: 0, scale: 1 },
    right: { x: 40, y: 0, scale: 1 },
    scale: { x: 0, y: 0, scale: 0.94 },
  };

export default function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.7,
}: RevealProps) {
  const offset = offsets[direction];

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
