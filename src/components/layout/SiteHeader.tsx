"use client";

import { List, X } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { assets } from "@/lib/assets";
import { spacing } from "@/lib/design-system";

const links = [
  { href: "#experiences", label: "Experiences" },
  { href: "#ritual", label: "The Ritual" },
  { href: "#gallery", label: "Gallery" },
  { href: "#packages", label: "Packages" },
  { href: "#faq", label: "FAQ" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#080809]/75 backdrop-blur-md">
      <div
        className={`${spacing.container} flex h-[5.25rem] items-center justify-between md:h-24 ${spacing.sectionX}`}
      >
        <Link href="/" className="relative block h-[4.75rem] w-52 md:h-[5.5rem] md:w-60">
          <Image
            src={assets.logo}
            alt="Fuze Table Private Dining"
            fill
            unoptimized
            className="object-contain object-left"
            sizes="(max-width: 768px) 208px, 240px"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] tracking-wide text-[#b8aea0] transition-colors hover:text-[#f2ebe0]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#enquire"
            className="rounded-full border border-[#c4a35a]/50 bg-[#c4a35a]/10 px-5 py-2 text-[13px] font-medium text-[#f2ebe0] transition active:scale-[0.98] hover:border-[#c4a35a] hover:bg-[#c4a35a]/20"
          >
            Enquire Now
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[#f2ebe0] lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <List size={22} />}
        </button>
      </div>

      {open && (
        <motion.nav
          className="border-t border-white/[0.06] bg-[#080809] px-5 py-6 lg:hidden"
          initial={reduce ? false : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-lg text-[#f2ebe0]"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#enquire"
                className="mt-2 inline-block rounded-full bg-[#c4a35a] px-6 py-3 text-sm font-medium text-[#080809]"
                onClick={() => setOpen(false)}
              >
                Enquire Now
              </Link>
            </li>
          </ul>
        </motion.nav>
      )}
    </header>
  );
}
