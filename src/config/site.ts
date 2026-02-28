export const siteConfig = {
  name: "Something Different",
  url: "https://somethingdifferent.art",
  tagline: "Artsy interiors + floral curation with an elegant, familial touch",
  description:
    "A multigenerational interior atelier crafting floral, decorative, and spatial moments for homes, events, and commercial spaces.",
  hero: {
    badge: "Established 1987",
    title: "Something Different",
    subtitle:
      "A light, beautiful family of makers designing quality interiors, custom florals, and atmospheric decor for every corner of your life, from a cherished home to a bustling commercial lobby.",
    cta: { label: "Book a Studio Visit", href: "mailto:hello@somethingdifferent.art" },
    secondary: { label: "View Services", href: "#services" },
  },
  nav: {
    links: [
      { label: "Studio", href: "#studio" },
      { label: "Services", href: "#services" },
      { label: "Legacy", href: "#legacy" },
    ],
    cta: { label: "Contact", href: "mailto:hello@somethingdifferent.art" },
  },
  services: [
    {
      title: "Bloom & Objects",
      icon: "🌿",
      description:
        "The little shop at 350 Woodbridge Ave is stocked with seasonal flowers, curated decor, heirloom pots, and tactile art objects that can anchor any room or gift.",
      details: ["Boutique flowers + hand-tied bouquets", "Decor, ceramics, and statement pots", "Bridal clutches + funeral arrangements"],
    },
    {
      title: "Commercial Interiors",
      icon: "🏢",
      description:
        "We dress lobbies, malls, and hospitality spaces with long-lasting installations, sculptural installations, and directional ambient lighting to keep your spaces luminous year-round.",
      details: ["Mall seasonal refreshes", "Architectural lighting + planters", "Corporate event styling"],
    },
    {
      title: "Residential + Events",
      icon: "🏡",
      description:
        "Designer-led residential updates, landscaping accents, wedding arches, and funeral tributes that feel deeply personal and flawlessly crafted.",
      details: ["Home staging + living room layering", "Landscaping sprinkles + pots", "Weddings, celebrations, memorials"],
    },
  ],
  legacy: [
    {
      year: "Since 1987",
      label: "Family founded",
      copy: "Grandfather John De Caro opened the doors as a floral studio, and the atelier has evolved into a full-spectrum interior partner ever since.",
    },
    {
      year: "30+ years",
      label: "Neighborhood icon",
      copy: "We still shop for black-eyed Susans, textural linens, and artisan ceramics in the same community that raised us.",
    },
    {
      year: "Quality first",
      label: "Materials driven",
      copy: "We source the best stems, durable greens, and elevated textures so installations stay luminous long after launch day.",
    },
  ],
  highlight: {
    title: "Studio & Shop",
    copy:
      "Come by our atelier to touch textures, smell flowers, and sketch ideas. Located at 350 Woodbridge Ave unit 2, Woodbridge, ON L4H 1M9, the space feels like visiting a beloved relative who just happens to have exquisite taste.",
    hours: ["Mon–Fri: 9am–6pm", "Sat: 10am–4pm", "Sun: Appointment only"],
  },
  contact: {
    address: "350 Woodbridge Ave unit 2, Woodbridge, ON L4H 1M9",
    phone: "(647) 555-0192",
    email: "hello@somethingdifferent.art",
    instagram: {
      handle: "@something_different_art",
      url: "https://instagram.com/something_different_art",
      creative: "Image curation by John De Caro",
    },
  },
}

export type SiteConfig = typeof siteConfig
