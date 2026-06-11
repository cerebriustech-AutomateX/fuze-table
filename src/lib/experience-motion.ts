/** Shared motion tokens for Signature Experiences */
export const premiumEase = [0.22, 1, 0.36, 1] as const;

export const experienceMotion = {
  duration: {
    reveal: 1,
    hover: 0.45,
    hairline: 0.5,
    underline: 1.1,
  },
  stagger: 0.15,
  headingStagger: 0.14,
  tiltMax: 4,
  imageHoverScale: 1.04,
  lift: -6,
} as const;

export const headingContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: experienceMotion.headingStagger,
      delayChildren: 0.05,
    },
  },
};

export const headingWordVariants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: experienceMotion.duration.reveal,
      ease: premiumEase,
    },
  },
};

export const featureRowVariants = {
  hidden: {
    opacity: 0,
    y: 48,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: experienceMotion.duration.reveal,
      ease: premiumEase,
      delay: 0.25,
    },
  },
};

export const featureCopyVariants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: experienceMotion.duration.reveal,
      ease: premiumEase,
      delay: 0.1,
    },
  },
};

export const cardGridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: experienceMotion.stagger,
      delayChildren: 0.45,
    },
  },
};

export const cardRevealVariants = {
  hidden: {
    opacity: 0,
    y: 56,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: experienceMotion.duration.reveal,
      ease: premiumEase,
    },
  },
};

export const menuCourseStaggerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.18,
    },
  },
};

export const menuCourseTileVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.96,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: experienceMotion.duration.reveal,
      ease: premiumEase,
    },
  },
};

export const menuCourseTileReducedVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: premiumEase },
  },
};

export const cardRevealReducedVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: premiumEase,
    },
  },
};
