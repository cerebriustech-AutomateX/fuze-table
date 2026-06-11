"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { spacing } from "@/lib/design-system";

export function FinalCTA() {
  return (
    <section
      className="relative overflow-hidden bg-[#080809] py-24 md:py-32"
      aria-labelledby="final-cta-heading"
    >
      <div className="candle-glow absolute inset-0" aria-hidden />
      <div className={`relative ${spacing.container} ${spacing.sectionX} text-center`}>
        <motion.h2
          id="final-cta-heading"
          className="mx-auto max-w-3xl font-[family-name:var(--font-cormorant)] text-4xl leading-tight text-[#f2ebe0] md:text-5xl lg:text-6xl"
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          Set the table for something unforgettable.
        </motion.h2>
        <motion.div
          className="mt-10"
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.12 }}
        >
          <Link
            href="#enquire"
            className="inline-flex rounded-full bg-[#c4a35a] px-8 py-4 text-sm font-medium text-[#080809] transition active:scale-[0.98] hover:bg-[#d4b36a]"
          >
            Plan Your Experience
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
