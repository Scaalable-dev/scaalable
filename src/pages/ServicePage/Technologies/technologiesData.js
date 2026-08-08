import {
  BrainCircuit,
  ChartNoAxesCombined,
  Code,
  Database,
  PenTool,
  Server,
  ShieldCheck,
  SquareKanban,
  Workflow,
} from "lucide-react";

/* ==========================================================================
   TECHNOLOGIES — SECTION INTRO
   ========================================================================== */

export const technologiesIntro = {
  eyebrow: "Technologies & Tools",

  title: "Modern Technologies Powering Future-Ready Solutions",

  description:
    "At Scaalable, we leverage industry-leading technologies to build secure, scalable, and high-performance digital solutions engineered for long-term business growth.",
};

/* ==========================================================================
   TECHNOLOGIES — DISCIPLINES

   One array drives the library at every breakpoint: the row previews take the
   first three tools, the signal strip counts the rest, and the status line
   reads its totals from the same place. The discipline count in the intro
   badge is derived rather than written down.
   ========================================================================== */

export const disciplines = [
  {
    id: "frontend",
    number: "01",
    name: "Frontend Engineering",
    icon: Code,
    tools: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "SASS",
      "Framer Motion",
    ],
  },

  {
    id: "backend",
    number: "02",
    name: "Backend Engineering",
    icon: Server,
    tools: [
      "Node.js",
      "Express.js",
      "Python",
      "FastAPI",
      "REST APIs",
      "GraphQL",
    ],
  },

  {
    id: "databases",
    number: "03",
    name: "Databases",
    icon: Database,
    tools: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Firebase Firestore",
      "Supabase",
    ],
  },

  {
    id: "ai",
    number: "04",
    name: "Artificial Intelligence",
    icon: BrainCircuit,
    tools: [
      "OpenAI",
      "Google Gemini",
      "Anthropic Claude",
      "LangChain",
      "LlamaIndex",
      "n8n",
      "Zapier",
      "Make",
      "Custom AI Agents",
      "Retrieval-Augmented Generation (RAG)",
    ],
  },

  {
    id: "design",
    number: "05",
    name: "UI/UX & Design",
    icon: PenTool,
    tools: [
      "Figma",
      "FigJam",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Canva",
      "Miro",
    ],
  },

  {
    id: "marketing",
    number: "06",
    name: "Marketing & Analytics",
    icon: ChartNoAxesCombined,
    tools: [
      "Google Analytics 4 (GA4)",
      "Google Tag Manager",
      "Google Search Console",
      "Google Ads",
      "Meta Ads Manager",
      "LinkedIn Campaign Manager",
      "Microsoft Clarity",
      "Ahrefs",
      "SEMrush",
    ],
  },

  {
    id: "crm",
    number: "07",
    name: "CRM & Business Automation",
    icon: Workflow,
    tools: [
      "HubSpot",
      "Zoho CRM",
      "Salesforce",
      "Notion",
      "Airtable",
      "Slack",
      "Microsoft Teams",
      "WhatsApp Business API",
    ],
  },

  {
    id: "security",
    number: "08",
    name: "Security & Performance",
    icon: ShieldCheck,
    tools: [
      "SSL/TLS Encryption",
      "Cloudflare Security",
      "JWT Authentication",
      "OAuth 2.0",
      "reCAPTCHA",
      "CDN Optimization",
      "Website Performance Optimization",
      "Automated Backups",
    ],
  },

  {
    id: "delivery",
    number: "09",
    name: "Project Management & Collaboration",
    icon: SquareKanban,
    tools: [
      "Jira",
      "Trello",
      "Asana",
      "ClickUp",
      "Git",
      "GitHub",
      "GitLab",
      "Bitbucket",
    ],
  },
];

export default disciplines;
