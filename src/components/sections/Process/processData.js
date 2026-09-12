/* ==========================================================================
   PROCESS — SECTION INTRO
   ========================================================================== */

export const processIntro = {
  badge: "Our Process",

  title: "End-to-End AI Engineering & Digital Growth Framework",

  description:
    "Every successful project starts with a clear strategy and ends with measurable business results. Our proven delivery framework ensures transparency, quality, and continuous innovation at every stage.",
};

/* ==========================================================================
   PROCESS — STAGES

   One array drives the rail, the connector geometry, the detail panel and the
   navigation labels on every breakpoint. `shortLabel` is what the rail shows
   at any width; the full `title` only ever appears in the panel, so narrow
   screens need no second set of copy.
   ========================================================================== */

export const stages = [
  {
    number: "01",
    shortLabel: "Discovery",
    title: "01. Discovery & Business Workflow Consultation",
    phase: "Strategy",
    description:
      "We start by understanding your business model, current systems and the outcome you need. Goals, constraints and success measures are agreed before a single line of code is written.",
    deliverables: [
      "Requirement analysis",
      "Business goal mapping",
      "Technical feasibility review",
      "Scope and budget outline",
      "Initial project roadmap",
    ],
  },

  {
    number: "02",
    shortLabel: "Research",
    title: "Research & Strategy",
    phase: "Strategy",
    description:
      "Market, competitor and user research turn assumptions into evidence. The result is a positioning and technology strategy your team can defend to stakeholders.",
    deliverables: [
      "Competitor benchmarking",
      "Audience and user research",
      "Keyword and channel analysis",
      "Technology recommendation",
      "Written strategy document",
    ],
  },

  {
    number: "03",
    shortLabel: "Planning",
    title: "Planning & Architecture",
    phase: "Foundation",
    description:
      "Systems, data and integrations are designed before the build begins. Clear architecture keeps later phases fast and prevents rework once the product is live.",
    deliverables: [
      "Information architecture",
      "System and data architecture",
      "Integration plan",
      "Sprint plan and milestones",
      "Delivery timeline",
    ],
  },

  {
    number: "04",
    shortLabel: "Design",
    title: "UI/UX Design",
    phase: "Experience",
    description:
      "Wireframes become an interface your users can navigate without instruction. Every screen is designed against the journeys agreed during strategy.",
    deliverables: [
      "Wireframes and user flows",
      "High-fidelity UI design",
      "Interactive prototype",
      "Design system and components",
      "Responsive layouts",
    ],
  },

  {
    number: "05",
    shortLabel: "Engineering",
    title: "Engineering & Development",
    phase: "Build",
    description:
      "Your product is built in reviewable increments on maintainable architecture, so progress is visible every week rather than only at the end.",
    deliverables: [
      "Front-end development",
      "Back-end and API development",
      "Database implementation",
      "Third-party integrations",
      "Version-controlled releases",
    ],
  },

  {
    number: "06",
    shortLabel: "Quality",
    title: "Testing & Quality Assurance",
    phase: "Validation",
    description:
      "Functionality, performance, security and accessibility are verified across real devices and browsers before anything reaches your customers.",
    deliverables: [
      "Functional and regression testing",
      "Cross-browser and device testing",
      "Performance optimisation",
      "Security checks",
      "Bug tracking and resolution",
    ],
  },

  {
    number: "07",
    shortLabel: "Launch",
    title: "Deployment & Launch",
    phase: "Release",
    description:
      "We ship to production with monitoring, backups and a rollback path in place, then confirm everything behaves exactly as it did in staging.",
    deliverables: [
      "Production deployment",
      "Domain, SSL and DNS setup",
      "Analytics and tracking setup",
      "Monitoring and backups",
      "Post-launch verification",
    ],
  },

  {
    number: "08",
    shortLabel: "Growth",
    title: "Growth, Support & Optimization",
    phase: "Scale",
    description:
      "After launch the work shifts to measurement: what to improve, what to automate, and where the next increment of growth comes from.",
    deliverables: [
      "Ongoing maintenance and SLA support",
      "Performance monitoring",
      "SEO and conversion optimisation",
      "Feature enhancements",
      "Monthly reporting and reviews",
    ],
  },
];

export default stages;
