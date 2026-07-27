"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

export default function FadeIn({
  children,
  delay = 0,
  y = 8,
  duration = 0.4,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
