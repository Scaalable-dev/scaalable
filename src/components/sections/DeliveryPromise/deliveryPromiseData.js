import { FileCheck2, LifeBuoy, Presentation, ShieldCheck } from "lucide-react";

export const deliveryPromiseIntro = {
  /* Passed to the shared <Badge>, which uppercases and adds the Sparkles mark
     itself — the same treatment every other section label gets. */
  badge: "Built for accountable delivery",

  title: "Our Transparent Engagement & Development Process",

  description:
    "A reliable partnership is built on visible progress, clear ownership, and fewer surprises.",
};

/* Four checkpoints along one engagement, in the order a client passes through
   them: what is agreed, what is shown along the way, what is handed over, and
   what happens after launch. */
export const deliverySteps = [
  {
    id: "scope",
    number: "01",
    icon: FileCheck2,
    title: "Written Scope",
    description: "Clear deliverables, responsibilities, and change control.",
  },
  {
    id: "demos",
    number: "02",
    icon: Presentation,
    title: "Weekly Demos",
    description: "See working progress, decisions, and risks early.",
  },
  {
    id: "handoff",
    number: "03",
    icon: ShieldCheck,
    title: "Secure Handoff",
    description:
      "Documentation, access, source code, and deployment ownership.",
  },
  {
    id: "support",
    number: "04",
    icon: LifeBuoy,
    title: "Launch Support",
    description: "Stabilization, monitoring, fixes, and a clear support path.",
  },
];
