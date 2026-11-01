import { absoluteUrl } from "../../lib/site";
import { breadcrumbs, faqPage, webPage } from "../../lib/structuredData";

export const WEBSITE_DEVELOPMENT_PATH = "/website-development";

export const websiteDevelopmentMeta = {
  title: "Website Development Services | Scaalable",
  description:
    "Scaalable designs and develops fast, responsive, secure websites, web applications and commerce experiences built to support business growth.",
  canonical: absoluteUrl(WEBSITE_DEVELOPMENT_PATH),
};

export const websiteDevelopmentFaqs = [
  {
    id: "website-types",
    question: "What types of websites can Scaalable develop?",
    answer:
      "We build business and corporate websites, ecommerce experiences, content-managed sites, redesigns and custom web applications. The right approach depends on your goals, users and internal workflows.",
  },
  {
    id: "mobile",
    question: "Will my website work on mobile devices?",
    answer:
      "Yes. Responsive, mobile-first behaviour is part of our development approach, so the experience is planned and tested across common screen sizes and input methods.",
  },
  {
    id: "redesign",
    question: "Can you redesign an existing website?",
    answer:
      "Yes. We can assess an existing site, retain what is working and improve the structure, design, performance and technical foundation where it will make a meaningful difference.",
  },
  {
    id: "integrations",
    question: "Can third-party APIs be integrated?",
    answer:
      "Where a platform provides a suitable API, we can plan and implement integrations for systems such as CRMs, payments, analytics, bookings and internal tools.",
  },
  {
    id: "maintenance",
    question: "Is ongoing website maintenance available?",
    answer:
      "Yes. Ongoing support can cover updates, monitoring, fixes, performance work and iterative improvements after launch.",
  },
  {
    id: "start",
    question: "How can I discuss my website project?",
    answer:
      "Start with the contact form and share a little about your goals, audience and current situation. We will use that context to guide the next conversation.",
  },
];

export const websiteDevelopmentSeo = () => ({
  meta: websiteDevelopmentMeta,
  jsonLd: [
    webPage({
      path: WEBSITE_DEVELOPMENT_PATH,
      title: websiteDevelopmentMeta.title,
      description: websiteDevelopmentMeta.description,
      type: "ServicePage",
    }),
    breadcrumbs([
      { name: "Services", path: "/services" },
      { name: "Website Development", path: WEBSITE_DEVELOPMENT_PATH },
    ]),
    faqPage(websiteDevelopmentFaqs, WEBSITE_DEVELOPMENT_PATH),
  ],
});

export const developmentServices = [
  ["Business Websites", "Clear, credible websites that help customers understand your offer and take the next step."],
  ["Corporate Websites", "Structured digital experiences for organizations with complex teams, services and audiences."],
  ["Landing Pages", "Focused pages that make a campaign, product or offer easy to understand and act on."],
  ["Portfolio Websites", "Thoughtful showcases for your work, capabilities and creative approach."],
  ["Custom Web Applications", "Browser-based tools, portals and workflows built around specific user needs."],
  ["SaaS Platforms", "Web-based products shaped around your product model, users and evolving requirements."],
  ["E-commerce Stores", "Online storefronts and purchase journeys designed around how your customers buy."],
  ["CMS Development", "Flexible content management that helps your team keep website content current."],
  ["Website Redesign", "A focused refresh of structure, experience and technology when an existing site has outgrown its role."],
  ["Website Maintenance", "Ongoing care for updates, fixes, performance and the details that keep a site useful."],
  ["API Integration", "Reliable connections between your website and the platforms your business already uses."],
  ["Progressive Web Apps (PWA)", "Web experiences that bring app-like capabilities to supported browsers and devices."],
  ["Informative Websites", "Well-organized websites that make important information easy to find and understand."],
];

export const benefits = [
  ["Responsive by design", "Layouts and interactions are designed for the realities of phones, tablets and desktop screens."],
  ["Performance-minded", "We make deliberate choices around assets, structure and implementation to support a fast experience."],
  ["Security-conscious", "Sound development practices and sensible safeguards are considered from the foundation onward."],
  ["Search-ready foundations", "Semantic structure, accessible content and technical hygiene make the site easier for people and search engines to understand."],
  ["Built to evolve", "Architecture and components are selected with future content, features and integrations in mind."],
  ["Clear ownership", "Maintainable code and practical support make it easier to operate and improve the site after launch."],
];

export const processSteps = [
  ["01", "Discovery", "We align on goals, audiences, priorities and the systems the website needs to support."],
  ["02", "Planning & UI/UX", "We define structure, content pathways and an interface direction before development begins."],
  ["03", "Development", "We build the experience in considered, testable pieces with the agreed functionality in place."],
  ["04", "Testing", "We review behaviour, content, responsiveness and key user journeys before release."],
  ["05", "Launch", "We prepare the handover and launch plan so the new site has a measured start."],
  ["06", "Ongoing Support", "After launch, we can continue with maintenance, improvements and new requirements as they emerge."],
];

export const technologies = ["React.js", "Next.js", "Node.js", "TypeScript", "MongoDB", "PostgreSQL", "Firebase", "Supabase"];
