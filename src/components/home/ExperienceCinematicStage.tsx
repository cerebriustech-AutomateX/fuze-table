"use client";

import Link from "next/link";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState, type PointerEvent } from "react";
import { assets } from "@/lib/assets";
import { premiumEase } from "@/lib/experience-motion";

type ExperienceCinematicStageProps = {
  src?: string;
  poster?: string;
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

export function ExperienceCinematicStage({
  src = assets.experiencesVideo,
  poster = assets.experiencesVideoPosterFallback,
}: ExperienceCinematicStageProps) {
  const reduce = useReducedMotion();
  const finePointer = useFinePointerDesktop();
  const motionEnabled = finePointer && !reduce;

  const stageRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [posterOnly, setPosterOnly] = useState(false);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 70, damping: 22 });
  const smoothY = useSpring(pointerY, { stiffness: 70, damping: 22 });

  const stageRotateX = useSpring(
    useTransform(smoothY, [-0.5, 0.5], [2.5, -2.5]),
    { stiffness: 120, damping: 24 },
  );
  const stageRotateY = useSpring(
    useTransform(smoothX, [-0.5, 0.5], [-3.5, 3.5]),
    { stiffness: 120, damping: 24 },
  );
  const mediaX = useTransform(smoothX, [-0.5, 0.5], [-28, 28]);
  const mediaY = useTransform(smoothY, [-0.5, 0.5], [-20, 20]);
  const mediaScale = useTransform(smoothX, [-0.5, 0.5], [1.06, 1.1]);
  const innerX = useTransform(smoothX, [-0.5, 0.5], [14, -14]);
  const innerY = useTransform(smoothY, [-0.5, 0.5], [10, -10]);
  const glowX = useTransform(smoothX, [-0.5, 0.5], ["38%", "62%"]);
  const glowY = useTransform(smoothY, [-0.5, 0.5], ["42%", "58%"]);
  const copyX = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);
  const copyY = useTransform(smoothY, [-0.5, 0.5], [-4, 4]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || posterOnly) return;

    const play = async () => {
      try {
        await video.play();
      } catch {
        setPosterOnly(true);
      }
    };

    play();
  }, [posterOnly]);

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!motionEnabled || !stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    pointerX.set((e.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const onPointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <div
      ref={stageRef}
      className="relative min-h-[100dvh] w-full overflow-hidden bg-[#080809]"
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      aria-label="Interactive table composition"
    >
      <motion.div
        className="pointer-events-none absolute z-0 h-[min(90vw,720px)] w-[min(90vw,720px)] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          left: glowX,
          top: glowY,
          background:
            "radial-gradient(circle, rgba(196, 163, 90, 0.2), transparent 68%)",
        }}
        aria-hidden
      />

      <motion.div
        className="absolute inset-0 origin-center will-change-transform"
        style={
          motionEnabled
            ? {
                x: mediaX,
                y: mediaY,
                scale: mediaScale,
                rotateX: stageRotateX,
                rotateY: stageRotateY,
                transformPerspective: 1400,
                transformStyle: "preserve-3d",
              }
            : undefined
        }
        initial={false}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1.1, ease: premiumEase }}
      >
        <motion.div
          className="absolute inset-[-8%] h-[116%] w-[116%]"
          style={motionEnabled ? { x: innerX, y: innerY } : undefined}
        >
          {posterOnly ? (
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${poster})` }}
              role="img"
              aria-label="Luxury private dining table setting"
            />
          ) : (
            <video
              ref={videoRef}
              src={src}
              poster={poster}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              onError={() => setPosterOnly(true)}
              className="h-full w-full object-cover"
            />
          )}
        </motion.div>
      </motion.div>

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080809] via-[#080809]/55 to-[#080809]/75"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#080809]/85 via-[#080809]/25 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,transparent_0%,#080809_72%)]"
        aria-hidden
      />

      <div className="pointer-events-none absolute inset-5 rounded-sm border border-[#c4a35a]/15 md:inset-8" aria-hidden />
      <div className="pointer-events-none absolute inset-5 md:inset-8">
        <span className="absolute left-0 top-0 h-8 w-8 border-l border-t border-[#c4a35a]/35" />
        <span className="absolute right-0 top-0 h-8 w-8 border-r border-t border-[#c4a35a]/35" />
        <span className="absolute bottom-0 left-0 h-8 w-8 border-b border-l border-[#c4a35a]/35" />
        <span className="absolute bottom-0 right-0 h-8 w-8 border-b border-r border-[#c4a35a]/35" />
      </div>

      <motion.div
        className="absolute inset-x-0 bottom-0 z-20 flex min-h-[42%] flex-col justify-end px-5 pb-10 pt-24 md:px-12 md:pb-14 lg:px-16"
        style={motionEnabled ? { x: copyX, y: copyY } : undefined}
        initial={false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.95, delay: 0.2, ease: premiumEase }}
      >
        <div className="max-w-xl">
          <p className="text-[11px] uppercase tracking-[0.18em] text-[#9a7f42]">
            The table comes alive
          </p>
          <h3 className="mt-4 font-[family-name:var(--font-cormorant)] text-3xl leading-[1.08] text-[#f2ebe0] md:text-5xl lg:text-[3.25rem]">
            A dining experience composed around you.
          </h3>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-[#b8aea0] md:text-base">
            From the first setting to the final course, every detail is shaped
            to match the occasion, the room, and the people around the table.
          </p>
          <Link
            href="#experience-cards"
            className="pointer-events-auto mt-8 inline-flex rounded-full border border-[#c4a35a]/45 bg-[#c4a35a]/10 px-6 py-3 text-sm font-medium text-[#f2ebe0] transition active:scale-[0.98] hover:border-[#c4a35a] hover:bg-[#c4a35a]/20"
          >
            Explore the experiences
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
