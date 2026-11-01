import {
  Code2,
  Cpu,
  Layout,
  LifeBuoy,
  PenTool,
  Search,
  TrendingUp,
} from "lucide-react";

/**
 * Structured service categories and items for the Services Mega Menu.
 * Sourced directly from Scaalable's capabilities dataset in servicesData.js.
 */
export const servicesMenuColumns = [
  {
    id: "web-experience",
    label: "Digital Experiences",
    categories: [
      {
        id: "web",
        name: "Website Design & Development",
        subtitle: "High-performance websites, platforms & web apps",
        icon: Layout,
        to: "/website-development",
        services: [
          { name: "Website Development", to: "/website-development" },
          { name: "Business & Corporate Websites", to: "/website-development" },
          { name: "SaaS Platforms & Web Apps", to: "/website-development" },
          { name: "E-commerce Stores", to: "/website-development" },
          { name: "CMS Development & Headless", to: "/website-development" },
          { name: "Progressive Web Apps (PWA)", to: "/website-development" },
        ],
      },
      {
        id: "uxui",
        name: "UI/UX Engineering",
        subtitle: "Modern, intuitive interfaces users love",
        icon: PenTool,
        to: "/ui-ux-design",
        services: [
          { name: "UX Research & Wireframing", to: "/ui-ux-design" },
          { name: "UI Design & Design Systems", to: "/ui-ux-design" },
          { name: "Dashboard Design", to: "/ui-ux-design" },
          { name: "Interactive Prototyping", to: "/ui-ux-design" },
        ],
      },
    ],
  },
  {
    id: "software-ai",
    label: "Software & AI Solutions",
    categories: [
      {
        id: "software",
        name: "Software Engineering",
        subtitle: "Resilient platforms & custom systems",
        icon: Code2,
        to: "/software-engineering",
        services: [
          { name: "Custom Software Development", to: "/software-engineering" },
          { name: "Enterprise Platforms & SaaS", to: "/software-engineering" },
          { name: "Custom CRM & ERP Systems", to: "/software-engineering" },
          { name: "API Engineering & Integration", to: "/software-engineering" },
          { name: "Legacy System Modernization", to: "/software-engineering" },
        ],
      },
      {
        id: "ai",
        name: "AI Automation Solutions",
        subtitle: "Intelligent workflows, bots & autonomous agents",
        icon: Cpu,
        to: "/ai-automation",
        services: [
          { name: "AI Chatbots & Voice Agents", to: "/ai-automation" },
          { name: "Intelligent Workflow Automation", to: "/ai-automation" },
          { name: "Custom GPTs & Knowledge Bases", to: "/ai-automation" },
          { name: "Lead & CRM Automation", to: "/ai-automation" },
        ],
      },
    ],
  },
  {
    id: "growth-operations",
    label: "Growth & Managed IT",
    categories: [
      {
        id: "seo",
        name: "Search Engine Optimization",
        subtitle: "Organic visibility & qualified traffic",
        icon: Search,
        to: "/seo",
        services: [
          { name: "Technical & On-Page SEO", to: "/seo" },
          { name: "Local SEO & Google Business", to: "/seo" },
          { name: "Core Web Vitals & Speed", to: "/seo" },
          { name: "Content Strategy & Authority", to: "/seo" },
        ],
      },
      {
        id: "growth",
        name: "Digital Growth",
        subtitle: "Data-driven acquisition & conversion",
        icon: TrendingUp,
        to: "/digital-growth",
        services: [
          { name: "Google Ads & Meta Campaigns", to: "/digital-growth" },
          { name: "Conversion Rate Optimization", to: "/digital-growth" },
          { name: "Analytics & Performance Tracking", to: "/digital-growth" },
        ],
      },
      {
        id: "itsupport",
        name: "IT Support & Managed Services",
        subtitle: "24/7 security, uptime & maintenance",
        icon: LifeBuoy,
        to: "/it-support-managed-services",
        services: [
          { name: "Managed IT & Help Desk Support", to: "/it-support-managed-services" },
          { name: "Server & Infrastructure Monitoring", to: "/it-support-managed-services" },
          { name: "Security Patches & SLA Support", to: "/it-support-managed-services" },
        ],
      },
    ],
  },
];

export const servicesFeatured = {
  badge: "End-to-End Solutions",
  title: "Engineered for Scalable Growth",
  description:
    "We design, build and modernize high-performance web applications, enterprise software and AI systems designed around your business.",
  primaryCta: {
    label: "Explore All Capabilities",
    to: "/services#capabilities",
  },
  secondaryCta: {
    label: "Book a Consultation",
    to: "/contact#contact-form",
  },
  quickLinks: [
    { label: "Industry Blueprints", to: "/services#industries" },
    { label: "Technology Disciplines", to: "/services#technologies" },
  ],
};

export const servicesFooterRibbon = {
  note: "Need a tailored enterprise software solution?",
  ctaText: "Discuss Your Project",
  ctaTo: "/contact#contact-form",
  links: [
    { label: "Industries", to: "/services#industries" },
    { label: "Tech Stack", to: "/services#technologies" },
    { label: "Our Process", to: "/about" },
  ],
};

export const mobileServicesList = servicesMenuColumns.flatMap(
  (col) => col.categories,
);
