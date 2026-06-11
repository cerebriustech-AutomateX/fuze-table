import Image from "next/image";
import Link from "next/link";
import { assets } from "@/lib/assets";
import { spacing } from "@/lib/design-system";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#080809]">
      <div className={`${spacing.container} ${spacing.sectionX} py-14 md:py-16`}>
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="relative h-32 w-56 md:h-36 md:w-64">
              <Image
                src={assets.logo}
                alt="Fuze Table Private Dining and Events"
                fill
                className="object-contain object-left"
                sizes="(max-width: 768px) 224px, 256px"
              />
            </div>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#b8aea0]">
              Private dining and events crafted around your table, your guests,
              and the mood you want to keep.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-[#b8aea0]">
            <Link href="#enquire" className="hover:text-[#f2ebe0]">
              Enquire
            </Link>
            <Link href="#experiences" className="hover:text-[#f2ebe0]">
              Experiences
            </Link>
            <Link href="#gallery" className="hover:text-[#f2ebe0]">
              Gallery
            </Link>
            <Link href="#faq" className="hover:text-[#f2ebe0]">
              FAQ
            </Link>
          </div>
        </div>
        <p className="mt-12 text-xs text-[#6b5a45]">
          © 2026 Fuze Table. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
