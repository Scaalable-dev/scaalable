import {
  Globe,
  Layout,
  PenTool,
  Search,
  Cpu,
  Code2,
  TrendingUp,
  LifeBuoy,
} from "lucide-react";

import { absoluteUrl } from "../../lib/site";
import {
  breadcrumbs,
  serviceCatalog,
  webPage,
} from "../../lib/structuredData";

/* ==========================================================================
   SERVICES — HERO
   ========================================================================== */

export const SERVICES_PATH = "/services";

export const servicesMeta = {
  title: "Services | Scaalable — Web, Software, AI & Digital Growth",

  description:
  "Scaalable delivers web development, custom software, UI/UX, SEO, AI automation and cloud solutions for growing businesses.",

  /* Built from the shared origin rather than written out: the host has moved
     once already, and a canonical naming the wrong one is worse than none. */
  canonical: absoluteUrl(SERVICES_PATH),
};

/* The route's complete SEO payload — read by the page effect and by the
   build-time prerender. See homeSeo for why it lives beside the data.

   The catalogue is generated from `capabilities` further down this file
   rather than written out again, so a practice added to that array is
   described to search engines by the same edit that renders it. */
export const servicesSeo = () => ({
  meta: servicesMeta,

  jsonLd: [
    webPage({
      path: SERVICES_PATH,
      title: servicesMeta.title,
      description: servicesMeta.description,
      type: "CollectionPage",
    }),
    breadcrumbs([{ name: "Services", path: SERVICES_PATH }]),
    serviceCatalog(capabilities, SERVICES_PATH),
  ],
});

export const servicesHero = {
  badge: "End-to-End Digital & IT Solutions",

  title: "We design, engineer and grow the systems behind modern business.",

  description:
    "From high-performance websites and SaaS platforms to AI automation, software engineering, search growth, managed IT and digital transformation services—we connect every technical layer into one scalable solution.",

  /* Deep link to the inquiry form on the contact page. ScrollToTop handles the
     hash once the route has mounted. */
  cta: {
    text: "Plan Your Solution",
    href: "/contact#contact-form",
  },
};

/* ==========================================================================
   LIQUID DATA SERVICE ENGINE

   Seven capabilities arranged radially around the core. `angle` is in degrees
   with 0 = right and positive going clockwise (screen coordinates), evenly
   spaced at 360/7 starting from the top.
   ========================================================================== */

export const flowServices = [
  {
    id: "web",
    index: "01",
    name: "Web",
    icon: Globe,
    angle: -90,
    accent: "#2f7bff",
  },
  {
    id: "uxui",
    index: "02",
    name: "UX/UI",
    icon: PenTool,
    angle: -38.6,
    accent: "#8b5cf6",
  },
  {
    id: "seo",
    index: "03",
    name: "SEO",
    icon: Search,
    angle: 12.9,
    accent: "#06b6d4",
  },
  {
    id: "ai",
    index: "04",
    name: "AI",
    icon: Cpu,
    angle: 64.3,
    accent: "#a855f7",
  },
  {
    id: "software",
    index: "05",
    name: "Software",
    icon: Code2,
    angle: 115.7,
    accent: "#6366f1",
  },
  {
    id: "growth",
    index: "06",
    name: "Growth",
    icon: TrendingUp,
    angle: 167.1,
    accent: "#7c3aed",
  },
  {
    id: "itsupport",
    index: "07",
    name: "IT Support",
    icon: LifeBuoy,
    angle: 218.6,
    accent: "#0ea5e9",
  },
];

/* ==========================================================================
   CAPABILITIES

   Directory + detail panel. `meta` is the trailing chip row; its heading
   differs per capability (Technologies / Tools / Focus Areas / …).
   ========================================================================== */

/* Badge only — the section deliberately carries no visible heading or intro;
   the directory and its panel say what it is. */
export const capabilitiesIntro = {
  badge: "Capabilities",

  title: "One team to design, build and grow your digital presence.",

  description:
    "From high-performance websites and custom software to AI automation, SEO and ongoing support, Scaalable connects every capability needed to move your business forward.",
};

export const capabilities = [
  {
    id: "web",
    index: "01",
    icon: Layout,
    name: "Website Design & Development",
    eyebrow: "Web Experience Engineering",
    title: "Website Design & Development",
    subtitle: "Build a digital presence designed to perform.",
    description:
      "We create fast, scalable and conversion-focused websites, commerce experiences and web applications built around your business model.",
    services: [
      "Business Websites",
      "Corporate Websites",
      "Landing Pages",
      "Portfolio Websites",
      "Custom Web Applications",
      "SaaS Platforms",
      "E-commerce Stores",
      "CMS Development",
      "Website Redesign",
      "Website Maintenance",
      "API Integration",
      "Progressive Web Apps (PWA)",
      "Informative Websites",
    ],
    metaLabel: "Technologies",
    meta: [
      "React.js",
      "Next.js",
      "Node.js",
      "TypeScript",
      "MongoDB",
      "PostgreSQL",
      "Firebase",
      "Supabase",
    ],
  },

  {
    id: "uxui",
    index: "02",
    icon: PenTool,
    name: "UI/UX Engineering",
    eyebrow: "Experience Design Systems",
    title: "UI/UX Engineering",
    subtitle: "Create digital experiences users love.",
    description:
      "Great products begin with great user experience. We design modern, intuitive interfaces that improve engagement, increase conversions and simplify complex workflows.",
    services: [
      "UX Research",
      "Wireframing",
      "User Journey Mapping",
      "UI Design",
      "Mobile App Design",
      "Dashboard Design",
      "Design Systems",
      "Interactive Prototypes",
      "Usability Testing",
      "Conversion Optimization",
    ],
    metaLabel: "Tools",
    meta: ["Figma", "Adobe XD", "FigJam"],
  },

  {
    id: "seo",
    index: "03",
    icon: Search,
    name: "Search Engine Optimization",
    eyebrow: "Organic Search Growth",
    title: "Search Engine Optimization",
    subtitle: "Increase organic traffic & Google rankings.",
    description:
      "We implement technical SEO and content strategies that improve search visibility, drive qualified traffic and generate long-term business growth.",
    services: [
      "SEO Audit",
      "Technical SEO",
      "On-Page SEO",
      "Off-Page SEO",
      "Local SEO",
      "Google Business Profile Optimization",
      "Keyword Research",
      "Content Strategy",
      "Link Building",
      "Competitor Analysis",
      "Website Speed Optimization",
      "Schema Markup",
      "Core Web Vitals Optimization",
    ],
    metaLabel: "Focus Areas",
    meta: ["Technical", "Content", "Authority", "Local Search", "Analytics"],
  },

  {
    id: "ai",
    index: "04",
    icon: Cpu,
    name: "AI Automation Solutions",
    eyebrow: "Intelligent Automation",
    title: "AI Automation Solutions",
    subtitle: "Automate your business with artificial intelligence.",
    description:
      "Save time and improve efficiency through AI-powered workflows, intelligent agents and automation solutions connected to your existing business systems.",
    services: [
      "AI Chatbots",
      "AI Voice Agents",
      "CRM Automation",
      "Workflow Automation",
      "Custom GPT Solutions",
      "AI Content Automation",
      "Lead Qualification Automation",
      "Email Automation",
      "AI Customer Support",
      "AI Knowledge Base",
      "API Automation",
    ],
    metaLabel: "Technologies",
    meta: ["OpenAI", "Claude", "Gemini", "Zapier", "Make", "n8n"],
  },

  {
    id: "software",
    index: "05",
    icon: Code2,
    name: "Software Engineering",
    eyebrow: "Custom Product Engineering",
    title: "Software Engineering",
    subtitle: "Engineer platforms around the way your business works.",
    description:
      "We design, build and modernize secure software products, internal platforms and enterprise systems with maintainable architecture.",
    services: [
      "Custom Software Development",
      "Web Application Development",
      "Website Development",
      "Enterprise Software Development",
      "SaaS Product Development",
      "Progressive Web Apps (PWA)",
      "E-commerce Development",
      "Custom CRM Development",
      "Custom ERP Development",
      "API Development",
      "API Integration",
      "Third-party Integrations",
      "Database Design",
      "Legacy System Modernization",
      "Software Maintenance",
      "Software Testing & QA",
      "Performance Optimization",
      "Code Refactoring",
      "Product Engineering",
      "MVP Development",
      "Platform Engineering",
    ],
    metaLabel: "Engineering Scope",
    meta: ["Product", "Platform", "API", "Data", "Cloud", "QA"],
  },

  {
    id: "growth",
    index: "06",
    icon: TrendingUp,
    name: "Digital Growth",
    eyebrow: "Data-Driven Acquisition",
    title: "Digital Growth",
    subtitle: "Accelerate customer acquisition with measurable strategy.",
    description:
      "Accelerate customer acquisition with data-driven marketing strategies connected to clear analytics and continuous optimization.",
    services: [
      "Search Engine Optimization",
      "Local SEO",
      "Google Ads",
      "Meta Ads",
      "LinkedIn Ads",
      "Content Marketing",
      "Conversion Rate Optimization",
      "Analytics & Reporting",
    ],
    metaLabel: "Growth Channels",
    meta: ["Organic", "Paid Search", "Paid Social", "Content", "CRO", "Analytics"],
  },

  {
    id: "itsupport",
    index: "07",
    icon: LifeBuoy,
    name: "IT Support & Managed Services",
    eyebrow: "Managed Technology Operations",
    title: "IT Support & Managed Services",
    subtitle: "Keep critical systems secure, stable and moving forward.",
    description:
      "Ongoing technical support, monitoring and maintenance that protects uptime, performance and operational continuity.",
    services: [
      "Website Maintenance",
      "Application Maintenance",
      "Server Management",
      "Infrastructure Monitoring",
      "Security Updates",
      "Bug Fixes",
      "Performance Optimization",
      "Technical Support",
      "SLA Support",
      "Managed IT Services",
      "Help Desk Support",
      "System Administration",
    ],
    metaLabel: "Service Model",
    meta: [
      "Monitoring",
      "Maintenance",
      "Security",
      "SLA",
      "Help Desk",
      "Administration",
    ],
  },
];

/* ==========================================================================
   CLOSING CTA
   ========================================================================== */

export const servicesCta = {
  eyebrow: "Ready when you are",

  title: "Have a project in mind?",

  description:
    "Tell us what you are building. We will help define the clearest path from idea to a secure, scalable launch.",

  /* Reads as the page handing over: services behind you, conversation ahead. */
  signal: {
    from: "End of services",
    to: "Start a conversation",
  },

  /* Deep link to the inquiry form, same target as the hero CTA. ScrollToTop
     handles the hash once the route has mounted. */
  cta: {
    text: "Discuss Your Project",
    href: "/contact#contact-form",
  },
};

export default servicesHero;
