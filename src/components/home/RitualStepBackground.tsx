"use client";

import Image from "next/image";
import { useRef } from "react";

type RitualStepBackgroundProps = {
  src: string;
  alt: string;
  priority?: boolean;
};

export function RitualStepBackground({
  src,
  alt,
  priority = false,
}: RitualStepBackgroundProps) {
  const wrapRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={wrapRef} className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0">
        <div className="ritual-bg-image absolute inset-[-8%] h-[116%] w-[116%]">
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "center 42%" }}
          />
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,transparent_0%,#080809_72%)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080809]/88 via-[#080809]/35 to-transparent md:from-[#080809]/82 md:via-[#080809]/25" />
      </div>
    </div>
  );
}
