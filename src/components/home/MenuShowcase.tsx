"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";
import { assets } from "@/lib/assets";
import {
  cardRevealReducedVariants,
  cardRevealVariants,
  premiumEase,
} from "@/lib/experience-motion";

const menuBoards = [
  {
    name: "Date Night",
    image: assets.menus.dateNight,
    alt: "Fuze Table Date Night menu for two guests at £70 per person",
  },
  {
    name: "Signature Experience",
    image: assets.menus.signature,
    alt: "Fuze Table Signature Experience menu for 3 to 6 guests at £80 per person",
  },
  {
    name: "Premium Dining",
    image: assets.menus.premium,
    alt: "Fuze Table Premium Dining menu for 4 to 8 guests at £95 to £110 per person",
  },
];

type MenuBoardCardProps = {
  name: string;
  image: string;
  alt: string;
  index: number;
};

function MenuBoardCard({ name, image, alt, index }: MenuBoardCardProps) {
  const reduce = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [1, 1] : [1.04, 1],
  );
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? ["0%", "0%"] : ["2%", "-2%"],
  );

  return (
    <motion.article
      ref={wrapRef}
      className="group relative"
      initial={reduce ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.22 }}
      variants={reduce ? cardRevealReducedVariants : cardRevealVariants}
    >
      <motion.div
        className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(196, 163, 90, 0.18), transparent 70%)",
        }}
        aria-hidden
      />

      <motion.div
        className="relative overflow-hidden rounded-2xl border border-white/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.25)] transition-[border-color,box-shadow] duration-500 group-hover:border-[#c4a35a]/45 group-hover:shadow-[0_24px_48px_rgba(0,0,0,0.45)]"
        initial={reduce ? false : { clipPath: "inset(8% 6% 8% 6% round 1rem)" }}
        whileInView={{ clipPath: "inset(0% 0% 0% 0% round 1rem)" }}
        viewport={{ once: true, amount: 0.22 }}
        transition={{ duration: 1.2, ease: premiumEase, delay: 0.08 }}
      >
        <motion.div
          className="pointer-events-none absolute inset-0 z-20 origin-left bg-gradient-to-r from-[#c4a35a]/35 via-[#c4a35a]/10 to-transparent"
          initial={reduce ? false : { scaleX: 0, opacity: 1 }}
          whileInView={{ scaleX: 1, opacity: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            scaleX: { duration: 1.2, ease: premiumEase, delay: 0.2 },
            opacity: { duration: 0.6, ease: premiumEase, delay: 0.85 },
          }}
          aria-hidden
        />

        <span
          className="pointer-events-none absolute left-3 top-3 z-20 h-5 w-5 border-l border-t border-[#c4a35a]/0 transition-colors duration-500 group-hover:border-[#c4a35a]/50"
          aria-hidden
        />
        <span
          className="pointer-events-none absolute right-3 top-3 z-20 h-5 w-5 border-r border-t border-[#c4a35a]/0 transition-colors duration-500 group-hover:border-[#c4a35a]/50"
          aria-hidden
        />

        <motion.div
          className="relative z-0 will-change-transform"
          style={reduce ? undefined : { scale: imageScale, y: imageY }}
        >
          <Image
            src={image}
            alt={alt}
            width={1600}
            height={1000}
            className="h-auto w-full"
            sizes="(max-width: 1400px) 100vw, 1400px"
            priority={index === 0}
          />
        </motion.div>

        <span className="sr-only">{name}</span>
      </motion.div>
    </motion.article>
  );
}

export function MenuShowcase() {
  return (
    <div className="relative">
      <motion.div
        className="pointer-events-none absolute -inset-6 -z-10 rounded-3xl"
        initial={false}
        whileInView={{ opacity: 0.4 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.4, ease: premiumEase, delay: 0.2 }}
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 60%, rgba(196, 163, 90, 0.18), transparent 70%)",
        }}
        aria-hidden
      />

      <div className="flex flex-col gap-10 md:gap-14">
        {menuBoards.map((board, index) => (
          <MenuBoardCard key={board.name} {...board} index={index} />
        ))}
      </div>
    </div>
  );
}
