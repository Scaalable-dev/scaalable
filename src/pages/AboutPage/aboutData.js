import {
  ClipboardList,
  Eye,
  KeyRound,
  LifeBuoy,
  Ear,
  GitBranch,
  Sparkles,
} from "lucide-react";

import founderImage from "../../assets/images/founder.png";
import coFounderImage from "../../assets/images/coFounder.png";
import aboutHeroImage from "../../assets/images/about-hero.png";
import aboutStoryImage from "../../assets/images/about-story.png";

export const aboutMeta = {
  title: "About Scaalable | Your Accountable Digital Partner",

  description:
    "Learn how Scaalable combines strategy, design, engineering, AI and accountable delivery to build dependable digital solutions for growing businesses.",

  canonical: "https://scaalable.com/about",
};

/* ==========================================================================
   1 — HERO
   ========================================================================== */

export const aboutHero = {
  badge: "About Scaalable",

  title: "A digital partner built for accountable growth.",

  description:
    "Scaalable brings strategy, UX, engineering, AI automation, SEO, paid advertising and ongoing optimization into one accountable team. We help businesses build dependable digital products, strengthen their online presence and continue improving beyond launch.",

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
    "From product strategy and UX to engineering, automation, SEO and paid campaigns, every discipline works around the same business goals. You get clearer communication, shared ownership and a more consistent experience from one connected team.",

  stages: [
    {
      id: "understand",
      name: "Understand",
      description:
        "We begin with your business, customers, challenges and priorities.",
    },
    {
      id: "design",
      name: "Design",
      description:
        "We turn complex requirements into clear and intuitive experiences.",
    },
    {
      id: "build",
      name: "Build",
      description:
        "We engineer secure, maintainable and scalable digital solutions.",
    },
    {
      id: "grow",
      name: "Grow",
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
    "Good partnerships are built on visible progress, clear ownership and fewer surprises.",

  commitments: [
    {
      id: "scope",
      icon: ClipboardList,
      name: "Written scope",
      description: "Clear deliverables, responsibilities and change control.",
    },
    {
      id: "progress",
      icon: Eye,
      name: "Visible progress",
      description: "Regular demonstrations, useful updates and early decisions.",
    },
    {
      id: "handoff",
      icon: KeyRound,
      name: "Secure handoff",
      description:
        "Organized documentation, access, source code and deployment ownership.",
    },
    {
      id: "support",
      icon: LifeBuoy,
      name: "Support beyond launch",
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
    "Businesses often lose time and momentum when their website, software, automation and marketing are handled by disconnected teams. Communication becomes harder, responsibility becomes unclear and the final result can lose sight of the original goal.",

    "Scaalable was created around a more connected approach: understand the business first, bring the right capabilities together and keep progress visible throughout the engagement.",

    "We help turn ideas and operational challenges into dependable digital solutions. Our role does not end when something goes live—we remain available to support, improve and evolve it as the business changes.",
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
    "We bring structure to the project without making the relationship feel complicated.",

  items: [
    {
      id: "listen",
      icon: Ear,
      name: "We listen before recommending",
      description:
        "We take time to understand the problem, context and priorities before proposing technology or marketing solutions.",
    },
    {
      id: "visible",
      icon: GitBranch,
      name: "We make progress visible",
      description:
        "You see what is being built, understand important decisions and always know what comes next.",
    },
    {
      id: "improve",
      icon: Sparkles,
      name: "We keep improving",
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

/* ==========================================================================
   FOUNDERS — unchanged
   ========================================================================== */

export const founders = [
  {
    id: 1,
    name: "Avijit Das",
    role: "Founder & CEO",
    image: founderImage,
    bio: [
      "Avijit Das, created this platform to enable easier digital transformation for enterprises all around the world. After a long experience in digital marketing, technology consultancy, and information technology services, he identified a common issue that many businesses face – handling multiple vendors and uncoordinated strategies.",
      "This is where Scaalable came in, providing all digital solutions from one team, under one umbrella.",
    ],
    socials: {
      instagram: "https://www.instagram.com/avijitdas_bycode/",
      facebook: "https://www.facebook.com/profile.php?id=61571357147855",
      linkedin: "https://www.linkedin.com/in/avijit-das-134b87421",
      email: "mailto:avijit@scaalable.com",
    },
  },

  {
    id: 2,
    name: "Tamal Gupta",
    role: "Co-Founder",
    image: coFounderImage,
    bio: [
      "As the Co-Founder of Scaalable, Tamal Gupta brings a strong passion for building modern, modular web applications that solve real business problems. With expertise in full-stack development and a focus on clean architecture, performance, and user experience, he plays a key role in transforming ideas into reliable digital products.",

      "Working closely with the founder, he helps businesses streamline their digital presence by developing secure, high-performance solutions tailored to their unique needs. His commitment to quality, collaboration, and continuous innovation ensures that every project delivered by Scaalable meets the highest standards.",
    ],
    socials: {
      instagram: "https://www.instagram.com/gupta_tamal",
      facebook: "https://www.facebook.com/tamal.gupta.14",
      linkedin: "https://www.linkedin.com/in/tamal-gupta-us60",
      email: "mailto:tamal@scaalable.com",
    },
  },
];
