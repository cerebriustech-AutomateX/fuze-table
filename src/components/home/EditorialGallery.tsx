"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useReducedMotion } from "motion/react";
import { ArtDirectionImage } from "@/components/ui/ArtDirectionImage";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { assets } from "@/lib/assets";
import { spacing } from "@/lib/design-system";

const layout = [
  "md:col-span-7 md:row-span-2",
  "md:col-span-5",
  "md:col-span-5",
  "md:col-span-4",
  "md:col-span-4",
  "md:col-span-4",
  "md:col-span-6",
  "md:col-span-6",
];

export function EditorialGallery() {
  const gridRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !gridRef.current) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".gallery-cell").forEach((cell, i) => {
        gsap.fromTo(
          cell,
          { y: i % 2 === 0 ? 40 : 24 },
          {
            y: i % 2 === 0 ? -24 : -12,
            ease: "none",
            scrollTrigger: {
              trigger: cell,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          },
        );
      });
    }, gridRef);

    return () => ctx.revert();
  }, [reduce]);

  return (
    <section
      id="gallery"
      className={`bg-[#080809] ${spacing.sectionY}`}
      aria-labelledby="gallery-heading"
    >
      <div className={`${spacing.container} ${spacing.sectionX}`}>
        <SectionReveal>
          <h2
            id="gallery-heading"
            className="font-[family-name:var(--font-cormorant)] text-4xl text-[#f2ebe0] md:text-5xl"
          >
            A table set for memory
          </h2>
          <p className="mt-4 max-w-md text-[#b8aea0]">
            Candlelight, linen, and plated detail. Every frame is part of the
            experience we build with you.
          </p>
        </SectionReveal>

        <div
          ref={gridRef}
          className="mt-12 grid auto-rows-[200px] grid-cols-1 gap-3 md:auto-rows-[180px] md:grid-cols-12 md:gap-4"
        >
          {assets.gallery.map((item, i) => (
            <div
              key={item.src}
              className={`gallery-cell group relative overflow-hidden rounded-xl ${layout[i] ?? ""}`}
            >
              <ArtDirectionImage
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition duration-[1.2s] group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-[#080809]/0 transition duration-500 group-hover:bg-[#080809]/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
