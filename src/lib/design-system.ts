/** Fuze Table design tokens — dark luxury, black + gold */
export const colors = {
  void: "#080809",
  charcoal: "#111113",
  slate: "#1a1a1e",
  gold: "#c4a35a",
  goldMuted: "#9a7f42",
  cream: "#f2ebe0",
  creamMuted: "#b8aea0",
  bronze: "#6b5a45",
  candle: "rgba(196, 163, 90, 0.35)",
} as const;

export const typography = {
  display: "var(--font-cormorant)",
  body: "var(--font-dm-sans)",
} as const;

export const spacing = {
  sectionY: "py-20 md:py-28 lg:py-32",
  sectionX: "px-5 md:px-8 lg:px-12",
  container: "max-w-[1400px] mx-auto",
} as const;

export const motion = {
  easeOut: [0.16, 1, 0.3, 1] as const,
  duration: {
    fast: 0.35,
    base: 0.6,
    slow: 1.1,
    cinematic: 1.6,
  },
  stagger: 0.08,
} as const;

export const radii = {
  card: "1rem",
  button: "9999px",
  input: "0.5rem",
} as const;

export const zIndex = {
  base: 0,
  layers: 10,
  heroContent: 20,
  nav: 50,
  grain: 60,
} as const;
