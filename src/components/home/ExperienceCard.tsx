"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { ArtDirectionImage } from "@/components/ui/ArtDirectionImage";
import {
  cardRevealReducedVariants,
  cardRevealVariants,
  experienceMotion,
  premiumEase,
} from "@/lib/experience-motion";

export type ExperienceCardProps = {
  title: string;
  description: string;
  image: string;
  index: number;
};

function useFinePointerDesktop() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px) and (pointer: fine)");
    const update = () => setEnabled(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return enabled;
}

export function ExperienceCard({
  title,
  description,
  image,
  index,
}: ExperienceCardProps) {
  const reduce = useReducedMotion();
  const finePointer = useFinePointerDesktop();
  const tiltEnabled = finePointer && !reduce;

  const cardRef = useRef<HTMLElement>(null);
  const [hovered, setHovered] = useState(false);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateX = useTransform(pointerY, [-0.5, 0.5], [experienceMotion.tiltMax, -experienceMotion.tiltMax]);
  const rotateY = useTransform(pointerX, [-0.5, 0.5], [-experienceMotion.tiltMax, experienceMotion.tiltMax]);
  const springRotateX = useSpring(rotateX, { stiffness: 140, damping: 22 });
  const springRotateY = useSpring(rotateY, { stiffness: 140, damping: 22 });

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const depth = 12 + index * 6;
  const cardY = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : [depth, -depth],
  );
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? ["0%", "0%"] : ["6%", "-6%"],
  );

  const onPointerMove = (e: MouseEvent<HTMLElement>) => {
    if (!tiltEnabled) return;
    const rect = e.currentTarget.getBoundingClientRect();
    pointerX.set((e.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const onPointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
    setHovered(false);
  };

  return (
    <motion.article
      ref={cardRef}
      variants={reduce ? cardRevealReducedVariants : cardRevealVariants}
      style={reduce ? undefined : { y: cardY }}
      className="group relative h-full"
      onPointerMove={onPointerMove}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={onPointerLeave}
    >
      <motion.div
        className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        animate={{ opacity: hovered && !reduce ? 0.55 : 0 }}
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(196, 163, 90, 0.18), transparent 70%)",
        }}
        aria-hidden
      />

      <motion.div
        className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-[#111113] will-change-transform"
        style={
          tiltEnabled
            ? {
                rotateX: springRotateX,
                rotateY: springRotateY,
                transformPerspective: 1000,
                transformStyle: "preserve-3d",
              }
            : undefined
        }
        animate={{
          y: hovered && !reduce ? experienceMotion.lift : 0,
          borderColor: hovered
            ? "rgba(196, 163, 90, 0.45)"
            : "rgba(255, 255, 255, 0.06)",
          boxShadow: hovered
            ? "0 24px 48px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(196, 163, 90, 0.12)"
            : "0 4px 24px rgba(0, 0, 0, 0.25)",
        }}
        transition={{ duration: experienceMotion.duration.hover, ease: premiumEase }}
      >
        <span
          className="pointer-events-none absolute left-3 top-3 z-20 h-5 w-5 border-l border-t border-[#c4a35a]/0 transition-colors duration-500 group-hover:border-[#c4a35a]/50"
          aria-hidden
        />
        <span
          className="pointer-events-none absolute right-3 top-3 z-20 h-5 w-5 border-r border-t border-[#c4a35a]/0 transition-colors duration-500 group-hover:border-[#c4a35a]/50"
          aria-hidden
        />
        <span
          className="pointer-events-none absolute bottom-3 left-3 z-20 h-5 w-5 border-b border-l border-[#c4a35a]/0 transition-colors duration-500 group-hover:border-[#c4a35a]/50"
          aria-hidden
        />
        <span
          className="pointer-events-none absolute bottom-3 right-3 z-20 h-5 w-5 border-b border-r border-[#c4a35a]/0 transition-colors duration-500 group-hover:border-[#c4a35a]/50"
          aria-hidden
        />

        <motion.span
          className="absolute bottom-0 left-0 right-0 z-20 h-px origin-left bg-gradient-to-r from-transparent via-[#c4a35a]/80 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: hovered ? 1 : 0 }}
          transition={{ duration: experienceMotion.duration.hairline, ease: premiumEase }}
          aria-hidden
        />

        <div className="relative aspect-[4/3] overflow-hidden">
          <motion.div className="absolute inset-0 h-[115%] w-full" style={{ y: imageY }}>
            <ArtDirectionImage
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
            />
          </motion.div>
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#111113] via-[#080809]/40 to-[#080809]/10"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent opacity-60"
            aria-hidden
          />
        </div>

        <div className="relative flex flex-1 flex-col border-t border-white/[0.04] p-6 md:p-7">
          <div className="mb-4 h-px w-12 bg-[#c4a35a]/30" aria-hidden />
          <h3 className="font-[family-name:var(--font-cormorant)] text-2xl leading-tight text-[#f2ebe0] md:text-[1.65rem]">
            {title}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-[#b8aea0]">
            {description}
          </p>
        </div>
      </motion.div>
    </motion.article>
  );
}
