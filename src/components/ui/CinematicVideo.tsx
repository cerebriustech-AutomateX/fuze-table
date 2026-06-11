"use client";

import { useEffect, useRef, useState } from "react";

type CinematicVideoProps = {
  src: string;
  poster: string;
  className?: string;
};

export function CinematicVideo({ src, poster, className }: CinematicVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const tryPlay = async () => {
      try {
        await video.play();
      } catch {
        setHidden(true);
      }
    };

    tryPlay();
  }, []);

  if (hidden) return null;

  return (
    <video
      ref={ref}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      poster={poster}
      onError={() => setHidden(true)}
      aria-hidden
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
