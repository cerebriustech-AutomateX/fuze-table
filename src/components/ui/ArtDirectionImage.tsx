"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

type ArtDirectionImageProps = Omit<ImageProps, "onError"> & {
  fallbackClassName?: string;
};

export function ArtDirectionImage({
  className,
  fallbackClassName,
  alt,
  ...props
}: ArtDirectionImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={
          fallbackClassName ??
          "h-full w-full bg-gradient-to-br from-[#111113] via-[#1a1814] to-[#0a0a0b]"
        }
      />
    );
  }

  return (
    <Image
      {...props}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
