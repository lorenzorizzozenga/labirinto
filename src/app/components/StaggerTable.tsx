"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.15 },
  },
};

const row = {
  hidden: { opacity: 0, y: 6 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function StaggerTbody({ children }: { children: ReactNode }) {
  return (
    <motion.tbody initial="hidden" animate="show" variants={container}>
      {children}
    </motion.tbody>
  );
}

export function StaggerTr({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.tr variants={row} className={className}>
      {children}
    </motion.tr>
  );
}
