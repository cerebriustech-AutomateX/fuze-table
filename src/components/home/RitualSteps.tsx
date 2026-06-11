"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "motion/react";
import Image from "next/image";
import { RitualStepBackground } from "@/components/home/RitualStepBackground";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { assets } from "@/lib/assets";
import { spacing } from "@/lib/design-system";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "Tell us the occasion",
    body: "Share the mood, guest count, and any details that matter. We listen first.",
    image: assets.ritual.occasion,
    alt: "Invitation and candlelit planning details on a dark table",
  },
  {
    title: "We shape the menu",
    body: "Our chefs design courses around your preferences, season, and the story of the night.",
    image: assets.ritual.menu,
    alt: "Menu card and plated course on a premium dining table",
  },
  {
    title: "We set the mood",
    body: "Table styling, lighting, and service rhythm come together before your first guest arrives.",
    image: assets.ritual.mood,
    alt: "Elegant table setting with gold cutlery and candlelight",
  },
  {
    title: "You enjoy the table",
    body: "Sit down. Stay present. We handle the rest while the evening unfolds at your pace.",
    image: assets.ritual.enjoy,
    alt: "Wine and fine dining course in candlelit atmosphere",
  },
];

export function RitualSteps() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !wrapRef.current) return;

    const refresh = () => ScrollTrigger.refresh();

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".ritual-card");

      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;

        const panel = card.querySelector(".ritual-card-panel");
        const bg = card.querySelector(".ritual-bg-image");
        const nextCard = cards[i + 1];

        gsap.to(panel, {
          scale: 0.92,
          opacity: 0.55,
          ease: "none",
          scrollTrigger: {
            trigger: nextCard,
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        });

        if (bg) {
          gsap.to(bg, {
            scale: 1.04,
            opacity: 0.65,
            ease: "none",
            scrollTrigger: {
              trigger: nextCard,
              start: "top bottom",
              end: "top top",
              scrub: true,
            },
          });
        }
      });

      refresh();
    }, wrapRef);

    const images = wrapRef.current.querySelectorAll("img");
    images.forEach((img) => {
      if (!img.complete) img.addEventListener("load", refresh, { once: true });
    });

    window.addEventListener("load", refresh);
    window.addEventListener("resize", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      window.removeEventListener("resize", refresh);
      ctx.revert();
    };
  }, [reduce]);

  return (
    <section
      id="ritual"
      className="bg-[#080809]"
      aria-labelledby="ritual-heading"
    >
      <div className={`${spacing.container} ${spacing.sectionX} pb-8 pt-20 md:pt-28`}>
        <SectionReveal>
          <h2
            id="ritual-heading"
            className="font-[family-name:var(--font-cormorant)] text-4xl text-[#f2ebe0] md:text-5xl"
          >
            The Fuze Table Ritual
          </h2>
          <p className="mt-4 max-w-xl text-[#b8aea0]">
            From your brief to a candlelit table at home. We guide the setup,
            menu, and service so the evening feels effortless.
          </p>
        </SectionReveal>

        <SectionReveal className="mt-10" delay={0.08}>
          <div className="overflow-hidden rounded-2xl border border-white/[0.06]">
            <Image
              src={assets.diningGuide}
              alt="Fuze Table at-home dining setup guide for four guests"
              width={1200}
              height={1600}
              className="h-auto w-full"
              sizes="(max-width: 1400px) 100vw, 1400px"
            />
          </div>
        </SectionReveal>
      </div>

      <div ref={wrapRef} className="relative">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="ritual-card sticky top-0 flex min-h-[100dvh] items-center justify-center px-5 py-16 md:justify-start md:px-8 md:pl-[8%] lg:pl-[10%]"
            style={{ zIndex: index + 1 }}
          >
            <RitualStepBackground
              src={step.image}
              alt={step.alt}
              priority={index === 0}
            />

            <article className="ritual-card-panel relative z-10 w-full max-w-2xl rounded-2xl border border-[#c4a35a]/30 bg-[#080809]/55 p-10 shadow-[0_24px_80px_rgba(0,0,0,0.5)] backdrop-blur-md md:bg-[#080809]/50 md:p-14">
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl border border-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                aria-hidden
              />
              <h3 className="relative font-[family-name:var(--font-cormorant)] text-3xl text-[#f2ebe0] md:text-4xl">
                {step.title}
              </h3>
              <p className="relative mt-4 max-w-md leading-relaxed text-[#b8aea0]">
                {step.body}
              </p>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
