/**
 * Brand photography in /public/images/
 * Optional hero video: /public/fuze-hero.mp4
 */
export const assets = {
  logo: "/images/logo.png",
  menuPackages: "/images/menu-packages.jpg",
  menus: {
    dateNight: "/images/menus/menu-date-night.png",
    signature: "/images/menus/menu-signature.png",
    premium: "/images/menus/menu-premium.png",
  },
  menuDateNight: "/images/menus/menu-date-night.png",
  menuCourses: [
    {
      label: "Amuse",
      title: "Deconstructed Papdi Chaat",
      image: "/images/gallery-04.jpg",
      alt: "Deconstructed papdi chaat on dark ceramic plates",
    },
    {
      label: "Starter",
      title: "Achari Paneer or Tandoori Chicken",
      image: "/images/gallery-05.jpg",
      alt: "Achari paneer with herb sauce and chutney trio",
    },
    {
      label: "Main",
      title: "Butter Chicken",
      image: "/images/gallery-06.jpg",
      alt: "Butter chicken, rice, and naan in silver serving bowls",
    },
    {
      label: "Side",
      title: "Pilau Rice & Mini Tarka Dhal",
      image: "/images/gallery-08.jpg",
      alt: "Butter chicken, pilau rice, and grilled chicken close-up",
    },
    {
      label: "Dessert",
      title: "Mango Cheesecake",
      image: "/images/gallery-07.jpg",
      alt: "Chef-plated dessert course on charcoal plate",
    },
  ],
  diningGuide: "/images/dining-guide.jpg",
  heroPoster: "/images/hero-table.jpg",
  heroFallback: "/images/hero-table.jpg",
  heroVideo: "/fuze-hero.mp4",
  experiencesVideo:
    "/videos/Dining_table_setting_exploded_view_202605311705.mp4",
  experiencesVideoPoster: "/videos/fuze-table-poster.jpg",
  experiencesVideoPosterFallback: "/images/hero-table.jpg",
  gallery: [
    {
      src: "/images/gallery-01.jpg",
      alt: "Candlelit table with gold napkin rings and warm florals",
    },
    {
      src: "/images/gallery-02.jpg",
      alt: "Flat lay of papadums, chutneys, and silver cutlery by candlelight",
    },
    {
      src: "/images/gallery-03.jpg",
      alt: "Gold cutlery with papadums and wooden chutney board",
    },
    {
      src: "/images/gallery-04.jpg",
      alt: "Deconstructed papdi chaat on dark ceramic plates",
    },
    {
      src: "/images/gallery-05.jpg",
      alt: "Achari paneer with herb sauce and chutney trio",
    },
    {
      src: "/images/gallery-06.jpg",
      alt: "Butter chicken, rice, and naan in silver serving bowls",
    },
    {
      src: "/images/gallery-07.jpg",
      alt: "Chef-plated tikka with rice and cream dots on charcoal plate",
    },
    {
      src: "/images/gallery-08.jpg",
      alt: "Butter chicken, pilau rice, and grilled chicken close-up",
    },
  ],
  ritual: {
    occasion: "/images/ritual/step-1-occasion.png",
    menu: "/images/ritual/step-2-menu.png",
    mood: "/images/ritual/step-3-mood.png",
    enjoy: "/images/ritual/step-4-enjoy.png",
  },
  experiences: {
    dateNight: "/images/exp-date-night.jpg",
    privateDining: "/images/exp-private-dining.jpg",
    family: "/images/exp-family.jpg",
    corporate: "/images/exp-corporate.jpg",
    bespoke: "/images/exp-bespoke.jpg",
  },
} as const;
