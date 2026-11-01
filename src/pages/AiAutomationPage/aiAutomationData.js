import { absoluteUrl } from "../../lib/site"; import { breadcrumbs, faqPage, webPage } from "../../lib/structuredData";
export const AI_AUTOMATION_PATH="/ai-automation"; export const aiMeta={title:"AI Automation Solutions | Scaalable",description:"Scaalable designs AI-powered workflows, intelligent agents and connected automation around the systems your business already uses.",canonical:absoluteUrl(AI_AUTOMATION_PATH)};
export const services = [
  ["AI Chatbots", "Conversational assistants that help visitors get answers and take the next useful step."],
  ["AI Voice Agents", "Voice-led workflows that capture intent and route requests with the right context."],
  ["CRM Automation", "Keep customer records, follow-ups and handoffs moving without extra manual effort."],
  ["Workflow Automation", "Connect recurring tasks so teams spend more time on work that needs judgement."],
  ["Custom GPT Solutions", "Purpose-built AI assistants shaped around your processes, language and review points."],
  ["AI Content Automation", "Organise and prepare content-related activity around the rules you define."],
  ["Lead Qualification Automation", "Bring lead details together and route follow-up to the appropriate person or process."],
  ["Email Automation", "Coordinate enquiry handling, follow-up and internal notifications around defined triggers."],
  ["AI Customer Support", "Help support teams respond faster with relevant context from existing systems."],
  ["AI Knowledge Base", "Make internal information easier to locate and use in the flow of work."],
  ["API Automation", "Connect the tools that hold business information to reduce unnecessary handoffs."],
];
export const technologies = ["OpenAI", "Claude", "Gemini", "Zapier", "Make", "n8n"];
export const safeguards = [
  "Access control and permissions",
  "Protection of sensitive information",
  "Error handling and workflow monitoring",
  "Human review for important decisions",
  "Testing and fallback behavior",
];
export const benefits = [
  ["Customer enquiry handling", "Categorise incoming enquiries and provide the right context for a faster response."],
  ["Lead qualification and routing", "Bring lead details together and route follow-up to the appropriate person or process."],
  ["Repetitive workflow automation", "Connect recurring tasks so teams can spend more attention on work that needs judgement."],
  ["Email and content workflows", "Prepare, organise and route content-related activity around the rules you define."],
  ["Internal knowledge retrieval", "Make internal information easier to locate and use in the flow of work."],
  ["CRM and API-connected processes", "Connect the tools that hold business information to reduce unnecessary handoffs."],
];
export const process=[["01","Discover Repetitive Tasks","We identify the recurring work, decisions and handoffs that may benefit from a more connected workflow."],["02","Map the Workflow","We clarify triggers, data sources, people and systems involved before automation logic is defined."],["03","Design the AI and Automation Logic","We shape the prompts, rules, conditions and review points around the intended outcome."],["04","Integrate Business Systems","We connect the workflow to the appropriate business tools, data sources and APIs."],["05","Test and Validate","We test the important paths, edge cases and handoffs before the workflow is relied on."],["06","Monitor and Improve","We review how the automation is operating and refine it as needs and context change."]];
export const faqs=[["what","What is AI automation?","AI automation combines artificial intelligence with connected workflows to assist, route or complete repeatable business tasks."],["crm","Can AI automation connect to an existing CRM?","Where a suitable connection is available, we can assess how an AI workflow should work with your CRM and existing business systems."],["tasks","Can repetitive business tasks be automated?","Many recurring tasks can be mapped and evaluated for automation, particularly when their inputs, rules and handoffs are clear."],["api","Can AI workflows use existing APIs?","API Automation is part of Scaalable’s current service offering, so integrations can be considered as part of an automation workflow."],["human","Can a workflow include human approval?","Yes. Human review can be designed into important decision points, escalations and fallback paths."],["start","How can a business get started?","Share the workflow, system or repetitive task you want to improve through the contact form, and we can begin with the context that matters."]];
export const seo=()=>({meta:aiMeta,jsonLd:[webPage({path:AI_AUTOMATION_PATH,title:aiMeta.title,description:aiMeta.description,type:"ServicePage"}),breadcrumbs([{name:"Services",path:"/services"},{name:"AI Automation Solutions",path:AI_AUTOMATION_PATH}]),faqPage(faqs.map(([id,question,answer])=>({id,question,answer})),AI_AUTOMATION_PATH)]});
