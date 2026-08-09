import {
  BadgeCheck,
  Boxes,
  ChartNoAxesCombined,
  Cog,
  Gauge,
  Lightbulb,
  MousePointerClick,
  Network,
  ShieldCheck,
  ShoppingBag,
  TrendingUp,
  Workflow,
} from "lucide-react";

/* Badge only — the section deliberately has no visible heading or intro copy;
   the selector and panel carry the message. */
export const whoWeHelpIntro = {
  badge: "Who We Help",
};

/* ==========================================================================
   AUDIENCES

   One shape drives everything: the selector label, the panel copy and the
   three pathway nodes. Adding a fifth audience needs no layout work — the
   panel and the visualisation both read from this array.

   `nodes` is always need -> solution -> result, in that order, matching the
   direction of the pathway the signal travels.
   ========================================================================== */

export const audiences = [
  {
    id: "startups",
    tab: "Startups",
    label: "For early-stage teams",
    heading: "Move from idea to a launch-ready product.",
    description:
      "Focused strategy, product design, and scalable engineering—without unnecessary complexity.",
    outcome: "Validate faster and launch with confidence",
    nodes: {
      need: { label: "Clear direction", icon: Lightbulb },
      solution: { label: "MVP system", icon: Boxes },
      result: { label: "Ready to grow", icon: TrendingUp },
    },
  },

  {
    id: "growing",
    tab: "Growing Teams",
    label: "For growing businesses",
    heading: "Turn manual work into a connected digital system.",
    description:
      "Modern websites, automation, and practical software that help lean teams operate more efficiently.",
    outcome: "Save time and create a stronger growth engine",
    nodes: {
      need: { label: "Less friction", icon: Workflow },
      solution: { label: "Smart workflows", icon: Cog },
      result: { label: "More capacity", icon: Gauge },
    },
  },

  {
    id: "ecommerce",
    tab: "E-commerce",
    label: "For commerce brands",
    heading: "Create a faster path from discovery to purchase.",
    description:
      "Conversion-focused storefronts, integrations, and performance improvements built around the customer journey.",
    outcome: "Improve shopping experience and conversion",
    nodes: {
      need: { label: "Buyer intent", icon: MousePointerClick },
      solution: { label: "Commerce flow", icon: ShoppingBag },
      result: { label: "More orders", icon: BadgeCheck },
    },
  },

  {
    id: "enterprise",
    tab: "Enterprise",
    label: "For established operations",
    heading: "Modernize complex systems without disrupting momentum.",
    description:
      "Secure platforms, internal tools, and integrations designed for reliability, governance, and scale.",
    outcome: "Reduce complexity and strengthen operations",
    nodes: {
      need: { label: "System clarity", icon: Network },
      solution: { label: "Secure platform", icon: ShieldCheck },
      result: { label: "Scale reliably", icon: ChartNoAxesCombined },
    },
  },
];

/* ==========================================================================
   PATHWAY GEOMETRY

   Node coordinates live in the same 520x380 space as the SVG viewBox, so the
   absolutely positioned HTML nodes and the curve they sit on cannot drift
   apart. The SVG stretches with `preserveAspectRatio="none"`, which maps the
   viewBox linearly onto the stage — percentages of the box are therefore
   percentages of the element.
   ========================================================================== */

export const PATHWAY_VIEWBOX = { width: 520, height: 380 };

export const pathwayPoints = {
  need: { x: 88, y: 78 },
  solution: { x: 216, y: 190 },
  result: { x: 344, y: 300 },
};

/* Two mirrored cubic segments: out of the need node, through the solution node,
   and away to the result node without a visible join. */
export const PATHWAY_D =
  "M 88 78 C 152 78 152 190 216 190 C 280 190 280 300 344 300";

export const asPercent = ({ x, y }) => ({
  left: `${(x / PATHWAY_VIEWBOX.width) * 100}%`,
  top: `${(y / PATHWAY_VIEWBOX.height) * 100}%`,
});

export default audiences;
