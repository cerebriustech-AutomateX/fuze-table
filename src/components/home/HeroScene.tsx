"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArtDirectionImage } from "@/components/ui/ArtDirectionImage";
import { CinematicVideo } from "@/components/ui/CinematicVideo";
import { assets } from "@/lib/assets";
import { spacing } from "@/lib/design-system";

const trustItems = [
  "Private Dining",
  "Date Nights",
  "Events",
  "Signature Menus",
];

export function HeroScene() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  const layer1X = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);
  const layer1Y = useTransform(smoothY, [-0.5, 0.5], [-8, 8]);
  const layer2X = useTransform(smoothX, [-0.5, 0.5], [18, -18]);
  const layer2Y = useTransform(smoothY, [-0.5, 0.5], [12, -12]);
  const cardX = useTransform(smoothX, [-0.5, 0.5], [24, -24]);
  const cardY = useTransform(smoothY, [-0.5, 0.5], [16, -16]);

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
      mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY, reduce]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] overflow-hidden bg-[#080809]"
      aria-label="Hero"
    >
      <div className="absolute inset-0">
        <ArtDirectionImage
          src={assets.heroFallback}
          alt="Candlelit private dining table"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <CinematicVideo
          src={assets.heroVideo}
          poster={assets.heroPoster}
          className="absolute inset-0 h-full w-full object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080809]/40 via-[#080809]/55 to-[#080809]" />
        <div className="candle-glow absolute inset-0" />
      </div>

      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        aria-hidden
        style={{
          backgroundImage: `linear-gradient(135deg, transparent 48%, rgb(196 163 90 / 0.15) 49%, rgb(196 163 90 / 0.15) 51%, transparent 52%)`,
        }}
      />

      <motion.div
        className="pointer-events-none absolute -right-8 top-[18%] hidden h-48 w-36 rounded-sm border border-[#c4a35a]/25 bg-[#111113]/80 p-4 shadow-2xl md:block lg:right-[12%] lg:h-56 lg:w-44"
        style={
          reduce
            ? undefined
            : { x: cardX, y: cardY, rotateY: -8, rotateX: 4, transformPerspective: 1200 }
        }
        aria-hidden
      >
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#9a7f42]">
          Tonight
        </p>
        <p className="mt-2 font-[family-name:var(--font-cormorant)] text-xl text-[#f2ebe0]">
          Chef&apos;s Table
        </p>
        <div className="mt-6 h-px w-full bg-[#c4a35a]/40" />
        <p className="mt-3 text-[11px] leading-relaxed text-[#b8aea0]">
          Seven courses. Candlelit service. Your table, your pace.
        </p>
      </motion.div>

      <motion.div
        className="pointer-events-none absolute bottom-[28%] left-[6%] hidden h-32 w-28 rounded-full bg-[#c4a35a]/20 blur-3xl md:block"
        style={reduce ? undefined : { x: layer1X, y: layer1Y }}
        aria-hidden
      />

      <motion.div
        className="pointer-events-none absolute right-[20%] top-[42%] hidden h-24 w-24 rounded-full bg-[#c4a35a]/15 blur-2xl lg:block"
        style={reduce ? undefined : { x: layer2X, y: layer2Y }}
        aria-hidden
      />

      <div
        className={`relative z-20 flex min-h-[100dvh] flex-col justify-end pb-12 pt-24 md:pb-16 ${spacing.sectionX}`}
      >
        <div className={`${spacing.container} w-full`}>
          <motion.h1
            className="max-w-4xl font-[family-name:var(--font-cormorant)] text-[2.75rem] font-light leading-[1.05] tracking-tight text-[#f2ebe0] md:text-6xl lg:text-7xl"
            initial={false}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Private Dining,
            <br />
            <span className="italic text-[#c4a35a]">Reimagined.</span>
          </motion.h1>

          <motion.p
            className="mt-5 max-w-xl text-base leading-relaxed text-[#b8aea0] md:text-lg"
            initial={false}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            Cinematic dining experiences, intimate events, and chef-led menus
            designed around your table.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={false}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="#enquire"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#c4a35a] px-7 py-3.5 text-sm font-medium text-[#080809] transition active:scale-[0.98] hover:bg-[#d4b36a]"
            >
              Enquire Now
            </Link>
            <Link
              href="#experiences"
              className="inline-flex shrink-0 items-center justify-center rounded-full border border-[#f2ebe0]/25 px-7 py-3.5 text-sm font-medium text-[#f2ebe0] transition active:scale-[0.98] hover:border-[#c4a35a]/60 hover:text-[#f2ebe0]"
            >
              Explore Experiences
            </Link>
          </motion.div>

          <motion.ul
            className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/[0.08] pt-8"
            initial={false}
            animate={reduce ? undefined : { opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            aria-label="Services"
          >
            {trustItems.map((item) => (
              <li
                key={item}
                className="text-[12px] uppercase tracking-[0.14em] text-[#9a7f42]"
              >
                {item}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
