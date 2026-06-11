"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { motion as motionTokens } from "@/lib/design-system";

type SectionRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function SectionReveal({
  children,
  className = "",
  delay = 0,
}: SectionRevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: motionTokens.duration.base,
        delay,
        ease: motionTokens.easeOut,
      }}
    >
      {children}
    </motion.div>
  );
}
