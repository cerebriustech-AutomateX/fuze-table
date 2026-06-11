"use client";

import { motion, useReducedMotion } from "motion/react";

export function GoldDivider({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={`gold-hairline w-full max-w-xl ${className}`}
      initial={reduce ? false : { scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      style={{ transformOrigin: "left center" }}
      aria-hidden
    />
  );
}
