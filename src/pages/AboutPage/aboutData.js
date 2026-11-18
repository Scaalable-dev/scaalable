import {
  ClipboardList,
  Eye,
  KeyRound,
  LifeBuoy,
  Ear,
  GitBranch,
  Sparkles,
} from "lucide-react";

/* WebP re-encodes of the original PNGs (which remain in git history) —
   96% smaller at 1280px wide, comfortably past the ~1100px the layout can
   ever display them at on a 2x screen. */
import aboutHeroImage from "../../assets/images/about-hero.webp";
import aboutStoryImage from "../../assets/images/about-story.webp";

import { absoluteUrl } from "../../lib/site";
import { breadcrumbs, webPage } from "../../lib/structuredData";

export const ABOUT_PATH = "/about";

export const aboutMeta = {
  title: "About Scaalable | AI & Software Engineering Company",

  description:
    "Learn about Scaalable, a digital engineering company building custom AI systems, web applications and software solutions for modern businesses.",

  /* Built from the shared origin rather than written out: the host has moved
     once already, and a canonical naming the wrong one is worse than none. */
  canonical: absoluteUrl(ABOUT_PATH),
};

/* The route's complete SEO payload — read by the page effect and by the
   build-time prerender. See homeSeo for why it lives beside the data. */
export const aboutSeo = () => ({
  meta: aboutMeta,

  jsonLd: [
    webPage({
      path: ABOUT_PATH,
      title: aboutMeta.title,
      description: aboutMeta.description,
      type: "AboutPage",
    }),
    breadcrumbs([{ name: "About", path: ABOUT_PATH }]),
  ],
});

/* ==========================================================================
   1 — HERO
   ========================================================================== */

export const aboutHero = {
  badge: "About Scaalable",

  title: "A digital partner built for accountable growth.",

  description:
    "As a premier software development agency and web development company in kolkata, Scaalable brings strategy, UX design, custom engineering, AI automation, and technical SEO into one unified team. We help businesses build dependable digital products, strengthen their search presence, and scale seamlessly post-launch.",

  primaryCta: { text: "Start a Conversation", to: "/contact#contact-form" },

  secondaryCta: { text: "Explore Our Services", to: "/services" },

  /* The existing approved photograph, kept from the previous About page. */
  image: aboutHeroImage,

  imageAlt: "Two Scaalable team members reviewing app designs at a workstation",
};

/* ==========================================================================
   2 — ONE CONNECTED PARTNER
   ========================================================================== */

export const connectedPartner = {
  badge: "One connected partner",

  title: "Technology and digital growth, working as one.",

  description:
    " From product strategy and UX to custom software development services, workflow automation, and SEO campaigns, every discipline aligns with your revenue goals. Work with a top custom software development company for scalable applications that delivers clear communication, full ownership, and consistent execution.",

  stages: [
    {
      id: "understand",
      name: " Understand (Business analysis)",
      description:
        "We begin with your business, customers, challenges and priorities.",
    },
    {
      id: "design",
      name: " Design (UI/UX)",
      description:
        "We turn complex requirements into clear and intuitive experiences.",
    },
    {
      id: "build",
      name: " Build (Scalable code)",
      description:
        "We engineer secure, maintainable and scalable digital solutions.",
    },
    {
      id: "grow",
      name: " Grow (SEO & performance marketing)",
      description:
        "We improve performance, visibility, campaigns and support after launch.",
    },
  ],
};

/* ==========================================================================
   3 — ACCOUNTABLE DELIVERY
   ========================================================================== */

export const accountableDelivery = {
  badge: "Built for accountable delivery",

  title: "Clear from the first conversation.",

  description:
    "Engineered by the best software company in india, our web and software delivery process relies on full transparency, milestone tracking, and dependable execution.",

  commitments: [
    {
      id: "scope",
      icon: ClipboardList,
      name: "Clear deliverables & scope control",
      description: "Clear deliverables, responsibilities and change control.",
    },
    {
      id: "progress",
      icon: Eye,
      name: "Real-time progress demonstrations",
      description: "Regular demonstrations, useful updates and early decisions.",
    },
    {
      id: "handoff",
      icon: KeyRound,
      name: " IP & code ownership handof",
      description:
        "Organized documentation, access, source code and deployment ownership.",
    },
    {
      id: "support",
      icon: LifeBuoy,
      name: " Long-term technical maintenance & support",
      description:
        "Monitoring, improvements and a clear path for ongoing support.",
    },
  ],
};

/* ==========================================================================
   4 — WHY WE EXIST
   ========================================================================== */

export const whyWeExist = {
  badge: "Why we exist",

  title: "Digital work should feel connected—not complicated.",

  paragraphs: [
    " Businesses often lose momentum when custom apps, software, and marketing are fragmented across vendors. As a full-service web development agency, Scaalable integrates engineering, SEO, and AI automation under one roof.",

    "We turn ideas and complex operations into dependable digital platforms. Our role extends beyond deployment—we provide ongoing optimization as a professional seo company india to guarantee business continuity and traffic growth.",
  ],

  closing: "One team. Clear ownership. Progress you can see.",

  /* The existing approved photograph, kept from the previous About page. */
  image: aboutStoryImage,

  imageAlt:
    "Scaalable team members talking through a project around a meeting table",
};

/* ==========================================================================
   5 — WORKING WITH SCAALABLE
   ========================================================================== */

export const workingWithUs = {
  badge: "Working with Scaalable",

  title: "Professional in delivery. Easy to work with.",

  description:
    " Experience high-converting website development services and software engineering with complete operational clarity",

  items: [
    {
      id: "listen",
      icon: Ear,
      name: "Consultative discovery before architecture",
      description:
        "We take time to understand the problem, context and priorities before proposing technology or marketing solutions.",
    },
    {
      id: "visible",
      icon: GitBranch,
      name: "Transparent milestone tracking",
      description:
        "You see what is being built, understand important decisions and always know what comes next.",
    },
    {
      id: "improve",
      icon: Sparkles,
      name: "Continuous optimization & post-launch support",
      description:
        "After launch, we can continue supporting, monitoring and evolving the solution alongside your business.",
    },
  ],
};

/* ==========================================================================
   6 — FINAL CTA
   ========================================================================== */

export const ctaBanner = {
  title: "Have something you want to build or improve?",

  description:
    "Tell us where you are today, and we’ll help you identify the clearest next step.",

  cta: {
    text: "Start a Conversation",
    href: "/contact#contact-form",
  },
};
