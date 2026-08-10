import {
  ChartNoAxesCombined,
  Code2,
  Compass,
  PenTool,
  Rocket,
  ShieldCheck,
} from "lucide-react";

/**
 * The six delivery stages, in the order the process actually runs.
 *
 * `side` alternates so the sequence zig-zags down past the stream. The brief
 * listed the two columns numbered independently (left 1-2-3, right 2-3-4);
 * read as one alternating flow those are steps 1-6, which is what the visual
 * needs for the numbers to make sense top to bottom.
 *
 * `anchor` is the card's position along the usable band, 0 (top of the stream)
 * to 1 (just above the processing box). It is normalised rather than a share of
 * the stage height because the band's real extent depends on where the box
 * lands, which changes with viewport height — a fixed percentage would drop the
 * last cards on top of the box on a short screen.
 *
 * `accent` gives each stage its own brand hue. `token`/`rgb` drive the card and
 * — while the card is engaged — the processing box; `stream` names the canvas
 * palette key the particle field tints toward.
 */
export const workflowStages = [
  {
    id: "discovery",
    step: 1,
    side: "left",
    anchor: 0,
    icon: Compass,
    title: "DISCOVERY",
    subtitle: "Goals & Roadmap",
    accent: {
      token: "var(--color-brand-primary)",
      rgb: "var(--color-brand-primary-rgb)",
      stream: "blue",
    },
  },
  {
    id: "design",
    step: 2,
    side: "right",
    anchor: 0.2,
    icon: PenTool,
    title: "UX/UI DESIGN",
    subtitle: "Flows & Interfaces",
    accent: {
      token: "var(--color-brand-accent)",
      rgb: "var(--color-brand-accent-rgb)",
      stream: "magenta",
    },
  },
  {
    id: "development",
    step: 3,
    side: "left",
    anchor: 0.4,
    icon: Code2,
    title: "DEVELOPMENT",
    subtitle: "Scalable Engineering",
    accent: {
      token: "var(--color-brand-cyan)",
      rgb: "var(--color-brand-cyan-rgb)",
      stream: "cyan",
    },
  },
  {
    id: "qa",
    step: 4,
    side: "right",
    anchor: 0.6,
    icon: ShieldCheck,
    title: "QA & SECURITY",
    subtitle: "Tested & Protected",
    accent: {
      token: "var(--color-brand-700)",
      rgb: "var(--color-brand-700-rgb)",
      stream: "indigo",
    },
  },
  {
    id: "launch",
    step: 5,
    side: "left",
    anchor: 0.8,
    icon: Rocket,
    title: "LAUNCH",
    subtitle: "Deploy & Integrate",
    accent: {
      token: "var(--color-brand-secondary)",
      rgb: "var(--color-brand-secondary-rgb)",
      stream: "violet",
    },
  },
  {
    id: "growth",
    step: 6,
    side: "right",
    anchor: 1,
    icon: ChartNoAxesCombined,
    title: "GROWTH & SUPPORT",
    subtitle: "Optimize & Improve",
    accent: {
      token: "var(--color-brand-600)",
      rgb: "var(--color-brand-600-rgb)",
      stream: "blueDeep",
    },
  },
];

export const getStageMessage = (stage) => `${stage.title} stage activated`;
