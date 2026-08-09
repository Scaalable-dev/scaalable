import {
  SiAirtable,
  SiAnthropic,
  SiBootstrap,
  SiCloudflare,
  SiExpress,
  SiFastapi,
  SiFigma,
  SiFirebase,
  SiFramer,
  SiGit,
  SiGithub,
  SiGitlab,
  SiGoogleads,
  SiGoogleanalytics,
  SiGooglegemini,
  SiGraphql,
  SiHtml5,
  SiHubspot,
  SiJavascript,
  SiJira,
  SiLangchain,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiNotion,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSass,
  SiSupabase,
  SiTailwindcss,
  SiTrello,
  SiTypescript,
  SiZapier,
} from "react-icons/si";

import { disciplines } from "../../../pages/ServicePage/Technologies/technologiesData";

/* ==========================================================================
   TECH MARQUEE DATA

   Derived from the services page's own technology list rather than copied, so
   the two cannot drift. Keys are the exact tool strings in technologiesData;
   anything without a brand mark simply does not appear in the strip.

   `label` shortens names that carry a qualifier useful on the services page but
   noisy in a chip — "JavaScript (ES6+)", "Google Analytics 4 (GA4)".
   ========================================================================== */

const MARKS = {
  "React.js": { Icon: SiReact },
  "Next.js": { Icon: SiNextdotjs },
  TypeScript: { Icon: SiTypescript },
  "JavaScript (ES6+)": { Icon: SiJavascript, label: "JavaScript" },
  HTML5: { Icon: SiHtml5 },
  "Tailwind CSS": { Icon: SiTailwindcss },
  Bootstrap: { Icon: SiBootstrap },
  SASS: { Icon: SiSass },
  "Framer Motion": { Icon: SiFramer },

  "Node.js": { Icon: SiNodedotjs },
  "Express.js": { Icon: SiExpress },
  Python: { Icon: SiPython },
  FastAPI: { Icon: SiFastapi },
  GraphQL: { Icon: SiGraphql },

  MongoDB: { Icon: SiMongodb },
  PostgreSQL: { Icon: SiPostgresql },
  MySQL: { Icon: SiMysql },
  "Firebase Firestore": { Icon: SiFirebase, label: "Firebase" },
  Supabase: { Icon: SiSupabase },

  "Google Gemini": { Icon: SiGooglegemini },
  "Anthropic Claude": { Icon: SiAnthropic, label: "Claude" },
  LangChain: { Icon: SiLangchain },
  Zapier: { Icon: SiZapier },

  Figma: { Icon: SiFigma },

  "Google Analytics 4 (GA4)": { Icon: SiGoogleanalytics, label: "Google Analytics" },
  "Google Ads": { Icon: SiGoogleads },

  HubSpot: { Icon: SiHubspot },
  Notion: { Icon: SiNotion },
  Airtable: { Icon: SiAirtable },

  "Cloudflare Security": { Icon: SiCloudflare, label: "Cloudflare" },

  Jira: { Icon: SiJira },
  Trello: { Icon: SiTrello },
  Git: { Icon: SiGit },
  GitHub: { Icon: SiGithub },
  GitLab: { Icon: SiGitlab },
};

/* Brand ramp rather than each vendor's own colour: a row of authentic logo
   colours fights the site's identity, and these marks are single-colour so they
   inherit whatever we give them. */
const ACCENTS = [
  { token: "var(--color-brand-primary)", rgb: "var(--color-brand-primary-rgb)" },
  { token: "var(--color-brand-secondary)", rgb: "var(--color-brand-secondary-rgb)" },
  { token: "var(--color-brand-cyan)", rgb: "var(--color-brand-cyan-rgb)" },
  { token: "var(--color-brand-accent)", rgb: "var(--color-brand-accent-rgb)" },
  { token: "var(--color-brand-600)", rgb: "var(--color-brand-600-rgb)" },
];

export const technologies = disciplines
  .flatMap((discipline) =>
    discipline.tools.map((tool) => ({ tool, discipline: discipline.name })),
  )
  .filter(({ tool }) => MARKS[tool])
  .map(({ tool, discipline }, index) => ({
    id: tool,
    name: MARKS[tool].label ?? tool,
    discipline,
    Icon: MARKS[tool].Icon,
    accent: ACCENTS[index % ACCENTS.length],
  }));

export default technologies;
