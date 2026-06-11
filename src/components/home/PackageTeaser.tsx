"use client";

import Link from "next/link";
import { MenuShowcase } from "@/components/home/MenuShowcase";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { spacing } from "@/lib/design-system";
import {
  cardGridVariants,
  cardRevealReducedVariants,
  cardRevealVariants,
  experienceMotion,
  headingContainerVariants,
  headingWordVariants,
  premiumEase,
} from "@/lib/experience-motion";

const packages = [
  {
    name: "Date Night",
    detail:
      "Deconstructed papdi chaat, starter, butter chicken, pilau rice, mini tarka dhal, and mango cheesecake. Candlelit table styling for two.",
    price: "£70 per person",
    note: "For 2 guests · minimum £140 booking",
  },
  {
    name: "Signature Experience",
    detail:
      "Shared mains including butter chicken and saag paneer, lamb chapli kebab starter, sides, and dark chocolate mousse.",
    price: "£80 per person",
    note: "For 3–6 guests",
  },
  {
    name: "Premium Dining",
    detail:
      "Starter trio, lamb biryani and butter chicken, saffron pilau, channa masala, salads, fresh breads, and dessert duo.",
    price: "£95–£110 per person",
    note: "For 4–8 guests",
  },
  {
    name: "Private Event",
    detail:
      "Fully bespoke menus, service, and table styling for celebrations, launches, and hosted gatherings.",
    price: "Bespoke quote",
    note: "Tailored to your guest list",
  },
];

const headingLines = [
  { text: "Menus and ", accent: false },
  { text: "packages", accent: true },
];

type PackageCardProps = {
  name: string;
  detail: string;
  price: string;
  note: string;
  index: number;
};

function PackageCard({ name, detail, price, note, index }: PackageCardProps) {
  const reduce = useReducedMotion();
  const cardRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const depth = 8 + index * 4;
  const cardY = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : [depth, -depth],
  );

  return (
    <motion.article
      ref={cardRef}
      variants={reduce ? cardRevealReducedVariants : cardRevealVariants}
      style={reduce ? undefined : { y: cardY }}
      className="group relative h-full"
      whileHover={reduce ? undefined : { y: experienceMotion.lift }}
      transition={{ duration: experienceMotion.duration.hover, ease: premiumEase }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-3 -z-10 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 50% 50%, rgba(196, 163, 90, 0.14), transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.06] bg-[#080809] p-8 transition-[border-color,box-shadow] duration-500 group-hover:border-[#c4a35a]/35 group-hover:shadow-[0_20px_48px_rgba(0,0,0,0.4)] md:p-10">
        <span
          className="pointer-events-none absolute left-3 top-3 h-5 w-5 border-l border-t border-[#c4a35a]/0 transition-colors duration-500 group-hover:border-[#c4a35a]/45"
          aria-hidden
        />
        <span
          className="pointer-events-none absolute right-3 top-3 h-5 w-5 border-r border-t border-[#c4a35a]/0 transition-colors duration-500 group-hover:border-[#c4a35a]/45"
          aria-hidden
        />

        <div>
          <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#f2ebe0] transition-colors duration-500 group-hover:text-[#f2ebe0] md:text-3xl">
            {name}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-[#b8aea0]">{detail}</p>
        </div>

        <div className="mt-8 border-t border-white/[0.06] pt-6 transition-colors duration-500 group-hover:border-[#c4a35a]/20">
          <p className="text-sm font-medium tracking-wide text-[#c4a35a]">{price}</p>
          <p className="mt-1 text-xs text-[#9a7f42]">{note}</p>
        </div>
      </div>
    </motion.article>
  );
}

export function PackageTeaser() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="packages"
      className="relative overflow-hidden bg-[#111113] py-20 md:py-28"
      aria-labelledby="packages-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />

      <div className={`${spacing.container} ${spacing.sectionX} relative`}>
        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={headingContainerVariants}
        >
          <h2
            id="packages-heading"
            className="font-[family-name:var(--font-cormorant)] text-4xl leading-[1.1] text-[#f2ebe0] md:text-5xl"
          >
            {headingLines.map((line) => (
              <motion.span
                key={line.text}
                variants={headingWordVariants}
                className={`mr-[0.28em] inline-block last:mr-0 ${
                  line.accent ? "text-[#c4a35a]" : ""
                }`}
              >
                {line.text}
              </motion.span>
            ))}
          </h2>
        </motion.div>

        <GoldDivider className="mt-8" />

        <div className="mt-12">
          <MenuShowcase />
        </div>

        <motion.div
          className="mt-12 grid gap-4 md:grid-cols-2"
          initial={reduce ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={cardGridVariants}
        >
          {packages.map((pkg, i) => (
            <PackageCard key={pkg.name} {...pkg} index={i} />
          ))}
        </motion.div>

        <motion.div
          className="mt-10"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: experienceMotion.duration.reveal,
            ease: premiumEase,
            delay: 0.2,
          }}
        >
          <Link
            href="#enquire"
            className="group relative inline-flex overflow-hidden rounded-full border border-[#c4a35a]/40 px-6 py-3 text-sm text-[#f2ebe0] transition-colors duration-500 hover:border-[#c4a35a] hover:bg-[#c4a35a]/10"
          >
            <span className="relative z-10">Request a tailored proposal</span>
            <span
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#c4a35a]/10 to-transparent transition-transform duration-700 group-hover:translate-x-full"
              aria-hidden
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
