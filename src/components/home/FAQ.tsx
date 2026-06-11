"use client";

import { CaretDown } from "@phosphor-icons/react";
import { useState } from "react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { spacing } from "@/lib/design-system";

const items = [
  {
    q: "Do you cater for private homes?",
    a: "Yes. Many of our experiences are designed for private residences. We coordinate access, kitchen requirements, and service flow in advance.",
  },
  {
    q: "Can menus be customised?",
    a: "Every menu is bespoke. Share dietary needs, cultural preferences, and favourites. Our chefs build courses around your brief.",
  },
  {
    q: "How many guests can you serve?",
    a: "Intimate tables from two guests up to larger hosted events. Capacity depends on venue, service style, and menu format.",
  },
  {
    q: "Do you provide table styling?",
    a: "We handle linen, florals, candlelight, and place settings so the table feels finished before guests arrive.",
  },
  {
    q: "How far in advance should I book?",
    a: "We recommend two to four weeks for private dining and six to eight weeks for larger events. Peak dates fill earlier.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="bg-[#111113] py-20 md:py-28"
      aria-labelledby="faq-heading"
    >
      <div className={`${spacing.container} ${spacing.sectionX}`}>
        <SectionReveal>
          <h2
            id="faq-heading"
            className="font-[family-name:var(--font-cormorant)] text-4xl text-[#f2ebe0] md:text-5xl"
          >
            Questions
          </h2>
        </SectionReveal>

        <ul className="mt-12 divide-y divide-white/[0.08]">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.q}>
                <SectionReveal delay={i * 0.04}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 py-6 text-left"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className="font-[family-name:var(--font-cormorant)] text-xl text-[#f2ebe0] md:text-2xl">
                      {item.q}
                    </span>
                    <CaretDown
                      size={20}
                      className={`shrink-0 text-[#c4a35a] transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isOpen && (
                    <p className="pb-6 pr-8 text-sm leading-relaxed text-[#b8aea0] md:text-base">
                      {item.a}
                    </p>
                  )}
                </SectionReveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
