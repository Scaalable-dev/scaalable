import { capabilities, flowServices } from "../../../pages/ServicePage/servicesData";

/* ==========================================================================
   SERVICE RAIL

   The home page advertises exactly what the services page delivers, so the
   cards are derived from `capabilities` rather than retyped. Adding a
   capability there adds a card here; renaming one renames it in both places.
   ========================================================================== */

/* Accents come from the same source the services page uses for its flow
   diagram, so a capability wears one colour across the whole site. */
const accentById = new Map(flowServices.map((item) => [item.id, item.accent]));

/* CSS needs the channels separately to build translucent glows —
   rgba(var(--srail-accent-rgb), 0.3). */
const hexToRgb = (hex) => {
  const value = parseInt(hex.slice(1), 16);

  return [(value >> 16) & 255, (value >> 8) & 255, value & 255].join(", ");
};

/**
 * Card tones, in rail order.
 *
 * The rail is a loop, so the last tone sits next to the first — the sequence
 * has to read well end to end as well as left to right. No two neighbours
 * repeat, including across that seam.
 */
const TONES = {
  web: "brand",
  uxui: "light",
  seo: "dark",
  ai: "brand",
  software: "light",
  growth: "dark",
  itsupport: "light",
};

/**
 * Three concrete deliverables per card.
 *
 * Taken from each capability's own `services` list, but curated rather than
 * sliced: the first three entries are alphabetical accidents, and for software
 * they are three near-identical phrasings of "we build web things".
 */
const HIGHLIGHTS = {
  web: ["Business Websites", "E-commerce Stores", "Web Applications"],
  uxui: ["UX Research", "UI Design", "Design Systems"],
  seo: ["Technical SEO", "Local SEO", "Content Strategy"],
  ai: ["AI Chatbots", "Workflow Automation", "Custom GPT Solutions"],
  software: ["SaaS Platforms", "Custom CRM & ERP", "API Development"],
  growth: ["Google Ads", "Meta Ads", "Conversion Optimization"],
  itsupport: ["Managed IT Services", "Infrastructure Monitoring", "SLA Support"],
};

export const serviceCards = capabilities.map((capability) => {
  const accent = accentById.get(capability.id) ?? "#0082f9";

  return {
    id: capability.id,
    index: capability.index,
    icon: capability.icon,
    name: capability.name,
    eyebrow: capability.eyebrow,
    subtitle: capability.subtitle,
    highlights: HIGHLIGHTS[capability.id] ?? capability.services.slice(0, 3),
    tone: TONES[capability.id] ?? "light",
    accent,
    accentRgb: hexToRgb(accent),
  };
});

export const serviceRailIntro = {
  badge: "Our Services",

  cta: {
    text: "Explore All Capabilities",
    to: "/services#capabilities",
  },
};
