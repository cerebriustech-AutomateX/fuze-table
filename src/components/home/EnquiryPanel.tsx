"use client";

import { ArrowRight } from "@phosphor-icons/react";
import { useState, type FormEvent } from "react";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { spacing } from "@/lib/design-system";

const occasions = [
  "Date Night",
  "Private Dining",
  "Family Gathering",
  "Corporate / Brand Event",
  "Bespoke Celebration",
];

export function EnquiryPanel() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="enquire"
      className="relative bg-[#111113] py-20 md:py-28"
      aria-labelledby="enquire-heading"
    >
      <div className={`${spacing.container} ${spacing.sectionX}`}>
        <SectionReveal>
          <h2
            id="enquire-heading"
            className="font-[family-name:var(--font-cormorant)] text-4xl text-[#f2ebe0] md:text-5xl"
          >
            Begin your enquiry
          </h2>
          <p className="mt-4 max-w-lg text-[#b8aea0]">
            Share the occasion and we will shape a menu, mood, and service plan
            around your table.
          </p>
          <GoldDivider className="mt-8" />
        </SectionReveal>

        <SectionReveal delay={0.1} className="mt-12">
          <form
            onSubmit={onSubmit}
            className="grid gap-6 rounded-2xl border border-white/[0.08] bg-[#080809]/60 p-6 md:grid-cols-2 md:p-10"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="occasion" className="text-sm text-[#f2ebe0]">
                Occasion
              </label>
              <select
                id="occasion"
                name="occasion"
                required
                className="rounded-lg border border-white/10 bg-[#111113] px-4 py-3 text-[#f2ebe0] outline-none focus:border-[#c4a35a]/60 focus:ring-1 focus:ring-[#c4a35a]/40"
                defaultValue=""
              >
                <option value="" disabled>
                  Select occasion
                </option>
                {occasions.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="date" className="text-sm text-[#f2ebe0]">
                Date
              </label>
              <input
                id="date"
                name="date"
                type="date"
                required
                className="rounded-lg border border-white/10 bg-[#111113] px-4 py-3 text-[#f2ebe0] outline-none focus:border-[#c4a35a]/60 focus:ring-1 focus:ring-[#c4a35a]/40"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="guests" className="text-sm text-[#f2ebe0]">
                Guests
              </label>
              <input
                id="guests"
                name="guests"
                type="number"
                min={2}
                max={80}
                required
                placeholder="e.g. 8"
                className="rounded-lg border border-white/10 bg-[#111113] px-4 py-3 text-[#f2ebe0] placeholder:text-[#6b5a45] outline-none focus:border-[#c4a35a]/60 focus:ring-1 focus:ring-[#c4a35a]/40"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="location" className="text-sm text-[#f2ebe0]">
                Location / venue
              </label>
              <input
                id="location"
                name="location"
                type="text"
                required
                placeholder="Private home, hired space, or venue name"
                className="rounded-lg border border-white/10 bg-[#111113] px-4 py-3 text-[#f2ebe0] placeholder:text-[#6b5a45] outline-none focus:border-[#c4a35a]/60 focus:ring-1 focus:ring-[#c4a35a]/40"
              />
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#c4a35a] py-4 text-sm font-medium text-[#080809] transition active:scale-[0.98] hover:bg-[#d4b36a] md:w-auto md:px-10"
              >
                {submitted ? "Enquiry received" : "Start Your Enquiry"}
                {!submitted && <ArrowRight size={18} weight="bold" />}
              </button>
              {submitted && (
                <p className="mt-3 text-sm text-[#9a7f42]" role="status">
                  Thank you. Our team will respond within one business day.
                </p>
              )}
            </div>
          </form>
        </SectionReveal>
      </div>
    </section>
  );
}
