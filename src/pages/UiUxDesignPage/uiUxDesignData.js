import { absoluteUrl } from "../../lib/site";
import { breadcrumbs, faqPage, webPage } from "../../lib/structuredData";

export const UI_UX_DESIGN_PATH = "/ui-ux-design";
export const uiUxMeta = { title: "UI/UX Engineering Services | Scaalable", description: "Scaalable creates thoughtful user experiences, intuitive interfaces and practical design systems for modern digital products.", canonical: absoluteUrl(UI_UX_DESIGN_PATH) };

export const uiUxServices = [
  ["UX Research", "Understand user needs, context and opportunities before design decisions are made."],
  ["Wireframing", "Turn early ideas into clear screen structures and practical product pathways."],
  ["User Journey Mapping", "Map the moments, decisions and handoffs that make an experience easier to follow."],
  ["UI Design", "Create polished, understandable interfaces that help people focus on the task at hand."],
  ["Dashboard Design", "Bring complex information, actions and workflows into a calmer working view."],
  ["Design Systems", "Create reusable patterns that keep product experiences consistent as they grow."],
  ["Interactive Prototypes", "Make key interactions tangible before development so teams can review them together."],
  ["Usability Testing", "Use feedback and observation to identify friction and improve important journeys."],
  ["Conversion Optimization", "Refine clarity, hierarchy and pathways so visitors can make more confident next steps."],
];
export const uiUxBenefits = [
  ["User-centered decisions", "We connect design choices to the people using the product and the goals they are trying to achieve."],
  ["Clear, intuitive interfaces", "Information, actions and feedback are arranged to reduce guesswork at every key moment."],
  ["Consistent design systems", "Reusable components help experiences remain coherent as new screens and workflows are introduced."],
  ["Usability and accessibility", "We consider readable structure, interaction feedback and accessible paths through the interface."],
  ["Better workflow clarity", "Thoughtful journeys make complicated tasks easier to understand, complete and revisit."],
  ["Collaboration and iteration", "Design artefacts give stakeholders a useful shared language for review and improvement."],
];
export const uiUxProcess = [
  ["01", "Discovery and UX Research", "We clarify users, goals, constraints and the questions the design needs to answer."],
  ["02", "User Flows and Journey Mapping", "We define the pathways between important moments, choices and outcomes."],
  ["03", "Wireframes", "We structure screens and content before committing to visual detail."],
  ["04", "UI Design and Design Systems", "We establish an interface direction and reusable patterns for the experience."],
  ["05", "Interactive Prototyping", "We connect key screens into a practical prototype for review and feedback."],
  ["06", "Usability Testing and Refinement", "We learn from feedback and refine the experience around what matters most."],
];
export const uiUxFaqs = [
  ["included", "What is included in UI/UX design?", "UI/UX work can include research, journeys, wireframes, interface design, design systems, prototypes and usability review—selected around the needs of your product."],
  ["research", "What is the difference between UX research and UI design?", "UX research helps clarify people’s needs, behaviour and tasks. UI design turns those insights into the visual and interactive interface people use."],
  ["redesign", "Can Scaalable redesign an existing interface?", "Yes. We can review an established product or website, retain useful patterns and improve the journeys, hierarchy and interface where it will be most valuable."],
  ["prototype", "Can clickable prototypes be created?", "Yes. Interactive Prototypes are part of Scaalable’s UI/UX service offering and can help teams review important flows before development."],
  ["discuss", "How can I discuss a design project?", "Use the contact form to share the product, people and workflow you are considering. That gives us a focused starting point for the conversation."],
];
export const uiUxTools = ["Figma", "Adobe XD", "FigJam"];
export const uiUxSeo = () => ({ meta: uiUxMeta, jsonLd: [webPage({ path: UI_UX_DESIGN_PATH, title: uiUxMeta.title, description: uiUxMeta.description, type: "ServicePage" }), breadcrumbs([{ name: "Services", path: "/services" }, { name: "UI/UX Engineering", path: UI_UX_DESIGN_PATH }]), faqPage(uiUxFaqs.map(([id, question, answer]) => ({ id, question, answer })), UI_UX_DESIGN_PATH)] });
