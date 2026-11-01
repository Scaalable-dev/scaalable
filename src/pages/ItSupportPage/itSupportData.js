import { absoluteUrl } from "../../lib/site";
import { breadcrumbs, faqPage, webPage } from "../../lib/structuredData";

export const IT_SUPPORT_PATH = "/it-support-managed-services";

export const itSupportMeta = {
  title: "IT Support & Managed Services | Scaalable",
  description:
    "Scaalable provides managed technology operations, technical support, infrastructure monitoring and ongoing maintenance designed to keep critical systems stable.",
  canonical: absoluteUrl(IT_SUPPORT_PATH),
};

export const servicesIncluded = [
  [
    "Website Maintenance",
    "Keep websites updated, reliable, secure, and functioning as business needs evolve.",
  ],
  [
    "Application Maintenance",
    "Maintain existing applications through updates, troubleshooting, and ongoing improvements.",
  ],
  [
    "Server Management",
    "Manage server configuration, resource usage, availability, and routine operational tasks.",
  ],
  [
    "Infrastructure Monitoring",
    "Monitor infrastructure health and identify potential issues before they disrupt operations.",
  ],
  [
    "Security Updates",
    "Apply relevant patches and updates to help reduce known security risks.",
  ],
  [
    "Bug Fixes",
    "Investigate defects and implement fixes to improve application reliability.",
  ],
  [
    "Performance Optimization",
    "Identify bottlenecks and improve system responsiveness and resource efficiency.",
  ],
  [
    "Technical Support",
    "Help users troubleshoot technical issues and restore normal operations.",
  ],
  [
    "SLA Support",
    "Define and track agreed support priorities, response targets, and service expectations.",
  ],
  [
    "Managed IT Services",
    "Coordinate ongoing IT operations, maintenance, monitoring, and technical support.",
  ],
  [
    "Help Desk Support",
    "Organize user requests, issue tracking, troubleshooting, and support communication.",
  ],
  [
    "System Administration",
    "Maintain system configurations, user access, routine operations, and system health.",
  ],
];

export const serviceModel = [
  {
    label: "Monitoring",
    description: "Track infrastructure health, service availability and early warning signals.",
  },
  {
    label: "Maintenance",
    description: "Keep systems, applications and environments current and dependable.",
  },
  {
    label: "Security",
    description: "Apply updates, review exposure and support the right operational controls.",
  },
  {
    label: "SLA",
    description: "Align priorities, response expectations and issue ownership with business needs.",
  },
  {
    label: "Help Desk",
    description: "Organize tickets, triage user issues and restore day-to-day productivity.",
  },
  {
    label: "Administration",
    description: "Manage system configuration, access, routine tasks and environment upkeep.",
  },
];

export const workflowSteps = [
  ["Monitor", "Check server health, uptime and application signals across critical systems."],
  ["Detect", "Identify unusual behaviour, threshold breaches and emerging operational risks."],
  ["Diagnose", "Review logs, configuration and incidents to narrow the likely cause."],
  ["Resolve", "Apply maintenance, fixes or remedial actions to bring the service back to normal."],
  ["Verify", "Confirm the system is stable and the service is behaving as expected."],
  ["Report", "Keep stakeholders informed with clear updates, actions and recommendations."],
];

export const benefitPoints = [
  [
    "More consistent system maintenance",
    "Routine upkeep reduces the chance of avoidable failures and keeps environments in a known state.",
  ],
  [
    "Better visibility into infrastructure health",
    "Monitoring offers clearer awareness of status, usage trends and operational concerns across systems.",
  ],
  [
    "Structured troubleshooting and issue tracking",
    "A defined support process helps teams respond consistently and document what was done.",
  ],
  [
    "Timely updates and routine administration",
    "Regular patching and administrative care help maintain a stable, manageable platform.",
  ],
  [
    "Clearer support processes",
    "When responsibilities and response paths are defined, issues move through the right channels faster.",
  ],
  [
    "Reduced operational disruption through proactive monitoring",
    "Early detection can help teams act before a small issue escalates into a broader interruption.",
  ],
];

export const faqs = [
  [
    "what-included",
    "What is included in managed IT services?",
    "Managed IT services typically include ongoing monitoring, maintenance, support, security updates, infrastructure oversight and routine system administration designed around your business context.",
  ],
  [
    "existing-sites",
    "Can existing websites and applications be maintained?",
    "Yes. Ongoing support can cover website, application and system maintenance, updates, fixes and operational monitoring for established environments.",
  ],
  [
    "monitoring",
    "How does infrastructure monitoring help?",
    "It helps teams see system trends and fault signals earlier, giving them a chance to investigate and remediate before a disruption affects users or operations.",
  ],
  [
    "sla",
    "What is an SLA in technical support?",
    "An SLA defines the expected level of support, including response targets, priorities and service expectations for agreed support categories.",
  ],
  [
    "tailored",
    "Can support services be tailored to business requirements?",
    "Yes. Support models can be shaped around business-critical systems, response needs, maintenance schedules and team responsibilities.",
  ],
];

export const itSupportSeo = () => ({
  meta: itSupportMeta,
  jsonLd: [
    webPage({
      path: IT_SUPPORT_PATH,
      title: itSupportMeta.title,
      description: itSupportMeta.description,
      type: "ServicePage",
    }),
    breadcrumbs([
      { name: "Services", path: "/services" },
      { name: "IT Support & Managed Services", path: IT_SUPPORT_PATH },
    ]),
    faqPage(faqs.map(([id, question, answer]) => ({ id, question, answer })), IT_SUPPORT_PATH),
  ],
});
