"use client";

import {
  motion,
  useReducedMotion,
} from "motion/react";
import { useRef } from "react";
import { ExperienceCard } from "@/components/home/ExperienceCard";
import { ExperienceCinematicStage } from "@/components/home/ExperienceCinematicStage";
import { assets } from "@/lib/assets";
import { spacing } from "@/lib/design-system";
import {
  cardGridVariants,
  experienceMotion,
  headingContainerVariants,
  headingWordVariants,
  premiumEase,
} from "@/lib/experience-motion";

const experiences = [
  {
    title: "Date Night",
    description:
      "An unhurried evening for two. Candlelight, coursed menus, and service that stays out of the way.",
    image: assets.experiences.dateNight,
  },
  {
    title: "Private Dining",
    description:
      "Your table, your guests, your rhythm. Chef-led menus built for intimate rooms and long conversations.",
    image: assets.experiences.privateDining,
  },
  {
    title: "Family Gatherings",
    description:
      "Warm, generous hosting for milestones at home. Shared plates, thoughtful pacing, zero stress.",
    image: assets.experiences.family,
  },
  {
    title: "Corporate / Brand Events",
    description:
      "Impress without spectacle. Refined food, discreet service, and styling that matches your brand.",
    image: assets.experiences.corporate,
  },
  {
    title: "Bespoke Menus",
    description:
      "Dietary needs, cultural notes, and personal favourites woven into a menu that feels written for you.",
    image: assets.experiences.bespoke,
  },
];

const headingLines = [
  { text: "Signature", accent: false },
  { text: "experiences", accent: true },
];

export function SignatureExperiences() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const underlineDelay =
    0.05 +
    headingLines.length * experienceMotion.headingStagger +
    experienceMotion.duration.reveal * 0.5;

  return (
    <section
      ref={sectionRef}
      id="experiences"
      className="relative overflow-hidden bg-[#080809]"
      aria-labelledby="experiences-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />

      <div className={`relative z-10 ${spacing.container} ${spacing.sectionX} pt-20 md:pt-28`}>
        <motion.header
          className="max-w-3xl"
          variants={headingContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
        >
          <h2
            id="experiences-heading"
            className="font-[family-name:var(--font-cormorant)] text-4xl leading-[1.08] tracking-tight text-[#f2ebe0] md:text-5xl lg:text-6xl"
          >
            {headingLines.map((line) => (
              <motion.span
                key={line.text}
                variants={headingWordVariants}
                className={`block ${line.accent ? "pb-1 italic leading-[1.1] text-[#c4a35a]" : ""}`}
              >
                {line.text}
              </motion.span>
            ))}
          </h2>

          <motion.div
            className="mt-6 h-px max-w-md origin-left bg-gradient-to-r from-[#c4a35a]/90 via-[#c4a35a]/50 to-transparent"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: reduce ? 0 : underlineDelay,
              duration: experienceMotion.duration.underline,
              ease: premiumEase,
            }}
          />
        </motion.header>
      </div>

      <div className="relative z-10 mt-10 w-full md:mt-12">
        <ExperienceCinematicStage
          src={assets.experiencesVideo}
          poster={assets.experiencesVideoPosterFallback}
        />
      </div>

      <div className={`relative z-10 ${spacing.container} ${spacing.sectionX} pb-20 pt-16 md:pb-28 md:pt-20`}>
        <div className="gold-hairline max-w-full opacity-40" aria-hidden />

        <motion.div
          id="experience-cards"
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-7 lg:grid-cols-3 lg:gap-8"
          variants={cardGridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
        >
          {experiences.map((exp, i) => (
            <ExperienceCard
              key={exp.title}
              title={exp.title}
              description={exp.description}
              image={exp.image}
              index={i}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
