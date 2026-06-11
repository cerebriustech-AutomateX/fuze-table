"use client";

import { SectionReveal } from "@/components/ui/SectionReveal";
import { spacing } from "@/lib/design-system";

const quotes = [
  {
    text: "The room felt like a film set, but warmer. Every course arrived as if it had been waiting for us.",
    name: "Amelia R.",
    role: "Private dining guest",
    note: "Placeholder attribution",
  },
  {
    text: "We hosted our anniversary at home and forgot we were at home. The table, the light, the pacing were flawless.",
    name: "Daniel & Priya K.",
    role: "Date night clients",
    note: "Placeholder attribution",
  },
  {
    text: "Our brand dinner needed to feel exclusive without trying too hard. Fuze Table understood that immediately.",
    name: "Marcus T.",
    role: "Corporate host",
    note: "Placeholder attribution",
  },
];

export function Testimonials() {
  return (
    <section
      className={`bg-[#080809] ${spacing.sectionY}`}
      aria-labelledby="testimonials-heading"
    >
      <div className={`${spacing.container} ${spacing.sectionX}`}>
        <SectionReveal>
          <h2
            id="testimonials-heading"
            className="max-w-3xl font-[family-name:var(--font-cormorant)] text-4xl leading-tight text-[#f2ebe0] md:text-5xl"
          >
            Designed for moments worth remembering
          </h2>
        </SectionReveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {quotes.map((q, i) => (
            <SectionReveal key={q.name} delay={i * 0.08}>
              <blockquote className="flex h-full flex-col rounded-2xl border border-white/[0.06] bg-[#111113] p-8">
                <p className="flex-1 text-[#f2ebe0] leading-relaxed">
                  &ldquo;{q.text}&rdquo;
                </p>
                <footer className="mt-8 border-t border-white/[0.06] pt-6">
                  <cite className="not-italic">
                    <span className="block text-sm text-[#f2ebe0]">{q.name}</span>
                    <span className="mt-1 block text-xs text-[#9a7f42]">
                      {q.role}
                    </span>
                    <span className="mt-2 block text-[10px] uppercase tracking-wider text-[#6b5a45]">
                      {q.note}
                    </span>
                  </cite>
                </footer>
              </blockquote>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
