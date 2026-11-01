import {
  Activity,
  ArrowRight,
  Bot,
  Check,
  CircleCheck,
  Database,
  FileText,
  GitBranch,
  Mail,
  MessageSquare,
  Network,
  Plug,
  ShieldCheck,
  Sparkles,
  UserRoundCheck,
  Workflow,
} from "lucide-react";

import { ServiceVisual } from "../../components/servicePage";

const taskCards = [
  { className: "ai-task--analyse", icon: Activity, title: "Analyse data", detail: "Intent understood", status: "COMPLETED" },
  { className: "ai-task--process", icon: FileText, title: "Process request", detail: "Context gathered", status: "PROCESSING" },
  { className: "ai-task--respond", icon: MessageSquare, title: "Draft response", detail: "Ready for review", status: "REVIEW" },
  { className: "ai-task--complete", icon: CircleCheck, title: "Update CRM", detail: "Record synchronised", status: "DONE" },
];

const AiHeroVisual = () => (
  <ServiceVisual label="Connected AI workflow · Illustrative" className="sp-visual--ai-hero">
    <div className="ai-hero-stage">
      <div className="ai-hero-grid" aria-hidden="true" />
      <div className="ai-hero-topline">
        <span>WORKFLOW ORCHESTRATION</span>
        <span><i /> EXAMPLE · RUNNING</span>
      </div>

      <div className="ai-system-node ai-system-node--mail">
        <span><Mail size={12} /></span><b>New enquiry</b><i>EMAIL</i>
      </div>
      <div className="ai-system-node ai-system-node--crm">
        <span><Database size={12} /></span><b>Customer data</b><i>CRM</i>
      </div>
      <div className="ai-system-node ai-system-node--api">
        <span><Plug size={12} /></span><b>Business tools</b><i>API</i>
      </div>
      <div className="ai-system-node ai-system-node--team">
        <span><UserRoundCheck size={12} /></span><b>Team review</b><i>HUMAN</i>
      </div>

      <svg className="ai-hero-connections" viewBox="0 0 560 390" preserveAspectRatio="none" aria-hidden="true">
        <path d="M92 89 C150 89 156 146 222 162" />
        <path d="M454 89 C399 89 391 145 336 162" />
        <path d="M96 286 C157 286 166 232 222 215" />
        <path d="M458 286 C402 286 391 231 336 215" />
        <circle cx="92" cy="89" r="3" /><circle cx="454" cy="89" r="3" />
        <circle cx="96" cy="286" r="3" /><circle cx="458" cy="286" r="3" />
      </svg>

      <div className="ai-engine">
        <div className="ai-engine__orbit ai-engine__orbit--outer"><i /><i /><i /></div>
        <div className="ai-engine__orbit ai-engine__orbit--inner"><i /><i /></div>
        <div className="ai-engine__core">
          <span><Sparkles size={17} /></span>
          <b>AI</b>
          <i>WORKFLOW ENGINE</i>
        </div>
        <span className="ai-engine__pulse" />
      </div>

      <div className="ai-task-list">
        {taskCards.map(({ className, icon: Icon, title, detail, status }) => (
          <article className={`ai-task ${className}`} key={title}>
            <span className="ai-task__icon"><Icon size={12} /></span>
            <span className="ai-task__copy"><b>{title}</b><i>{detail}</i></span>
            <span className={`ai-task__status ai-task__status--${status.toLowerCase()}`}>
              {status === "PROCESSING" ? <i /> : null}{status}
            </span>
          </article>
        ))}
      </div>
      <div className="ai-human-check"><ShieldCheck size={11} /><span>Human approval at key decisions</span><Check size={10} /></div>
      <div className="ai-hero-legend"><span><i /> Connected systems</span><span><i /> Automated task</span><span><i /> Review point</span></div>
    </div>
  </ServiceVisual>
);

const workflowStages = [
  { name: "Trigger", detail: "New enquiry", icon: Mail },
  { name: "AI Analysis", detail: "Understand intent", icon: Sparkles },
  { name: "Decision", detail: "Apply business rules", icon: GitBranch },
  { name: "Action", detail: "Update & respond", icon: Workflow },
  { name: "Result", detail: "Team in the loop", icon: CircleCheck },
];

const AiWorkflowShowcase = () => (
  <ServiceVisual label="Example workflow · Sample only" className="sp-visual--ai-workflow">
    <div className="ai-workflow">
      <div className="ai-workflow__header">
        <span><Workflow size={12} /> ENQUIRY → NEXT ACTION</span>
        <b><i /> EXAMPLE WORKFLOW</b>
      </div>
      <div className="ai-workflow__track">
        {workflowStages.map(({ name, detail, icon: Icon }, index) => (
          <article className={`ai-workflow__step ai-workflow__step--${index + 1}`} key={name}>
            <span className="ai-workflow__icon"><Icon size={15} /></span>
            <span className="ai-workflow__copy"><b>{name}</b><i>{detail}</i></span>
            {index < workflowStages.length - 1 ? <ArrowRight className="ai-workflow__arrow" size={13} aria-hidden="true" /> : null}
          </article>
        ))}
      </div>
      <div className="ai-workflow__details">
        <span><Database size={11} /><b>Context</b><i>CRM + enquiry data</i></span>
        <span><ShieldCheck size={11} /><b>Safeguard</b><i>Human approval when needed</i></span>
        <span><Activity size={11} /><b>Outcome</b><i>Clear next step, logged</i></span>
      </div>
      <div className="ai-workflow__footer"><span><i /> Data moves only along defined connections</span><span>Illustrative · Sample only</span></div>
    </div>
  </ServiceVisual>
);

const AiIntegrationVisual = () => (
  <div className="ai-integrations" aria-label="Illustrative AI integration ecosystem">
    <svg className="ai-integrations__wires" viewBox="0 0 640 180" preserveAspectRatio="none" aria-hidden="true">
      <path d="M130 42 C205 42 204 90 272 90" />
      <path d="M130 138 C205 138 204 90 272 90" />
      <path d="M368 90 C435 90 435 42 510 42" />
      <path d="M368 90 C435 90 435 138 510 138" />
      <circle cx="130" cy="42" r="3" /><circle cx="130" cy="138" r="3" />
      <circle cx="510" cy="42" r="3" /><circle cx="510" cy="138" r="3" />
    </svg>
    <div className="ai-integration ai-integration--crm"><span><Database size={13} /></span><b>Customer systems</b><i>CRM · Contacts</i></div>
    <div className="ai-integration ai-integration--comms"><span><Mail size={13} /></span><b>Communication</b><i>Email · Messages</i></div>
    <div className="ai-integration ai-integration--apps"><span><Workflow size={13} /></span><b>Business apps</b><i>Tasks · Records</i></div>
    <div className="ai-integration ai-integration--data"><span><FileText size={13} /></span><b>Data sources</b><i>Files · Knowledge</i></div>
    <div className="ai-integration-engine"><span><Bot size={17} /></span><b>AI automation</b><i>One connected workflow</i></div>
    <div className="ai-integrations__caption"><Network size={11} /> APIs · Permissions · Defined handoffs</div>
  </div>
);

const serviceScenes = [
  <>
    <rect x="28" y="34" width="56" height="32" rx="6" fill="#edf4fc" stroke="#dce7f2" />
    <rect x="102" y="28" width="56" height="44" rx="8" fill="#f3effc" stroke="#e1dcf0" />
    <rect x="176" y="34" width="56" height="32" rx="6" fill="#edf6f2" stroke="#dcebe5" />
    <path d="M84 50h18M158 50h18" stroke="#8ba9ca" strokeWidth="2" strokeDasharray="3 3" />
    <circle cx="130" cy="43" r="7" fill="#9c87d3" /><path d="M122 59c1-8 15-8 16 0" fill="#b5a6df" />
  </>,
  <>
    <rect x="25" y="30" width="58" height="42" rx="6" fill="#f4f7fb" stroke="#e1e8f0" />
    <rect x="101" y="28" width="58" height="45" rx="8" fill="#f3effc" stroke="#e1dcf0" />
    <rect x="177" y="30" width="58" height="42" rx="6" fill="#edf5fc" stroke="#dce7f2" />
    <path d="M83 51h18M159 51h18" stroke="#8ba9ca" strokeWidth="2" strokeDasharray="3 3" />
    <circle cx="130" cy="43" r="7" fill="#9c87d3" /><path d="M122 59c1-8 15-8 16 0" fill="#b5a6df" />
  </>,
  <>
    <rect x="28" y="30" width="56" height="43" rx="5" fill="#f5f8fc" stroke="#e1e8f0" />
    <path d="M37 40h36M37 49h30M37 58h36M37 66h24" stroke="#a9bbce" strokeWidth="3" strokeLinecap="round" />
    <rect x="104" y="31" width="52" height="15" rx="5" fill="#edf4fc" stroke="#dce7f2" />
    <rect x="104" y="54" width="52" height="15" rx="5" fill="#f2eefb" stroke="#e2dcf1" />
    <rect x="176" y="30" width="56" height="43" rx="5" fill="#f5f8fc" stroke="#e1e8f0" />
    <path d="M184 40h39M184 50h29M184 60h39" stroke="#a9bbce" strokeWidth="3" strokeLinecap="round" />
    <path d="M84 51h20M156 51h20" stroke="#8ba9ca" strokeWidth="2" strokeDasharray="3 3" />
  </>,
  <>
    <circle cx="130" cy="50" r="19" fill="#f1edfc" stroke="#dfd8f1" />
    <path d="m120 49 7 6 13-15" fill="none" stroke="#846dbb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="34" y="36" width="40" height="28" rx="6" fill="#edf4fc" stroke="#dce7f2" />
    <rect x="186" y="36" width="40" height="28" rx="6" fill="#edf6f2" stroke="#dcebe5" />
    <path d="M74 50h37M149 50h37" stroke="#8ba9ca" strokeWidth="2" strokeDasharray="3 3" />
  </>,
  <>
    <rect x="29" y="31" width="58" height="40" rx="5" fill="#f4f7fb" stroke="#e1e8f0" />
    <rect x="101" y="28" width="58" height="46" rx="8" fill="#f3effc" stroke="#e1dcf0" />
    <rect x="173" y="31" width="58" height="40" rx="5" fill="#f4f7fb" stroke="#e1e8f0" />
    <path d="M38 42h40M38 50h32M38 59h40M181 42h40M181 50h32M181 59h40" stroke="#b2c0d0" strokeWidth="3" strokeLinecap="round" />
    <circle cx="130" cy="43" r="7" fill="#9c87d3" /><path d="M122 59c1-8 15-8 16 0" fill="#b5a6df" />
    <path d="M87 51h14M159 51h14" stroke="#8ba9ca" strokeWidth="2" strokeDasharray="3 3" />
  </>,
  <>
    <rect x="30" y="32" width="78" height="37" rx="5" fill="#f5f7fb" stroke="#e1e8f0" />
    <rect x="151" y="32" width="78" height="37" rx="5" fill="#f5f7fb" stroke="#e1e8f0" />
    <path d="M39 42h47M39 50h58M39 59h37" stroke="#bdc9d7" strokeWidth="3" strokeLinecap="round" />
    <path d="M160 42h47M160 50h58M160 59h37" stroke="#8fa9c6" strokeWidth="3" strokeLinecap="round" />
    <path d="M110 51h39" stroke="#608fc1" strokeWidth="2" strokeDasharray="3 3" /><path d="m141 46 7 5-7 5" fill="none" stroke="#608fc1" strokeWidth="2" />
  </>,
  <>
    <circle cx="130" cy="50" r="17" fill="#eaf3fc" stroke="#d5e4f2" />
    <path d="M130 39v11l8 5" fill="none" stroke="#4b82b7" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M130 27v-5M130 78v-5M107 50h-5M158 50h-5M114 34l-4-4M150 70l-4-4M146 34l4-4M114 70l-4 4" stroke="#86a8cc" strokeWidth="2" strokeLinecap="round" />
    <rect x="28" y="42" width="38" height="16" rx="6" fill="#f1f5fa" stroke="#e1e8f0" /><rect x="194" y="42" width="38" height="16" rx="6" fill="#f1f5fa" stroke="#e1e8f0" />
    <path d="M66 50h43M151 50h43" stroke="#9ab4d1" strokeWidth="2" strokeDasharray="3 3" />
  </>,
  <>
    <rect x="31" y="30" width="198" height="43" rx="5" fill="#f7f9fc" stroke="#e3eaf2" />
    <path d="M43 60 68 51l20 4 25-16 23 9 22-10 34 8" fill="none" stroke="#6193c8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M42 65h174" stroke="#d7e1eb" />
    <circle cx="113" cy="39" r="3" fill="#4a8cc8" /><circle cx="158" cy="38" r="3" fill="#8d75c1" />
    <rect x="42" y="35" width="34" height="6" rx="3" fill="#e4eef9" />
  </>,
  <>
    <rect x="28" y="30" width="79" height="41" rx="5" fill="#f6f7fa" stroke="#e4e9f0" />
    <rect x="153" y="30" width="79" height="41" rx="5" fill="#edf5fc" stroke="#dce7f2" />
    <path d="M37 39h49M37 47h59M37 55h37M37 63h54" stroke="#c1cbd7" strokeWidth="3" strokeLinecap="round" />
    <path d="M162 39h49M162 47h59M162 55h37M162 63h54" stroke="#a5b8ce" strokeWidth="3" strokeLinecap="round" />
    <path d="M111 51h38" stroke="#568ec2" strokeWidth="2" strokeDasharray="3 3" /><path d="m141 46 7 5-7 5" fill="none" stroke="#568ec2" strokeWidth="2" />
  </>,
  <>
    <rect x="25" y="29" width="210" height="44" rx="5" fill="#f5f8fc" stroke="#e1e8f0" />
    <rect x="34" y="37" width="42" height="28" rx="4" fill="#e9f1fb" />
    <circle cx="49" cy="46" r="5" fill="#a6bfdc" /><path d="M40 60c1-7 17-7 18 0" fill="#8eaacd" />
    <path d="M85 39h135M85 49h118M85 59h128" stroke="#b5c3d3" strokeWidth="3" strokeLinecap="round" />
    <circle cx="224" cy="39" r="3" fill="#4da181" />
  </>,
  <>
    <rect x="24" y="34" width="51" height="32" rx="6" fill="#edf4fc" stroke="#dce7f2" />
    <rect x="105" y="28" width="51" height="43" rx="8" fill="#f2eefb" stroke="#e0daf0" />
    <rect x="186" y="34" width="51" height="32" rx="6" fill="#edf6f2" stroke="#dcebe5" />
    <path d="M75 50h30M156 50h30" stroke="#8aa9ca" strokeWidth="2" strokeDasharray="3 3" />
    <path d="M119 45h23M119 52h18" stroke="#a99bcf" strokeWidth="2" strokeLinecap="round" />
    <circle cx="130" cy="39" r="4" fill="#9b87ce" />
  </>,
];

const AiServiceArt = ({ kind }) => (
  <span className={`ai-service-art ai-service-art--${kind}`}>
    <svg viewBox="0 0 260 100" focusable="false" aria-hidden="true">
      <rect x="1" y="1" width="258" height="98" rx="12" fill="#fff" stroke="#e4ebf3" />
      <path d="M1 22h258" stroke="#e8edf4" />
      <circle cx="13" cy="12" r="2.2" fill="#b93ffb" />
      <circle cx="21" cy="12" r="2.2" fill="#0082f9" />
      <circle cx="29" cy="12" r="2.2" fill="#d7e0eb" />
      <rect x="83" y="8.5" width="94" height="7" rx="3.5" fill="#f0f4f8" />
      {serviceScenes[kind]}
    </svg>
  </span>
);

const journeySteps = [
  { title: "Trigger", detail: "A useful event", icon: Mail },
  { title: "AI Analysis", detail: "Understand context", icon: Sparkles },
  { title: "Decision", detail: "Apply clear rules", icon: GitBranch },
  { title: "Action", detail: "Connect & complete", icon: Workflow },
  { title: "Result", detail: "Review when needed", icon: CircleCheck },
];

const AiProcessJourney = () => (
  <div className="ai-process-journey" aria-label="AI automation workflow">
    <div className="ai-process-journey__header">
      <span>TRIGGER → ANALYSIS → ACTION</span><i><span /> HUMAN REVIEW WHERE IT MATTERS</i>
    </div>
    <div className="ai-process-journey__track">
      {journeySteps.map(({ title, detail, icon: Icon }, index) => (
        <article className="ai-process-journey__step" key={title}>
          <span className={`ai-process-journey__icon ai-process-journey__icon--${index + 1}`}><Icon size={15} /></span>
          <span className="ai-process-journey__copy"><b>{title}</b><i>{detail}</i></span>
          {index < journeySteps.length - 1 ? <ArrowRight className="ai-process-journey__arrow" size={12} aria-hidden="true" /> : null}
        </article>
      ))}
    </div>
    <div className="ai-process-journey__footer"><span><ShieldCheck size={11} /> Defined rules, connected systems, clear outcomes</span><span>Illustrative workflow</span></div>
  </div>
);

export { AiHeroVisual, AiIntegrationVisual, AiProcessJourney, AiServiceArt, AiWorkflowShowcase };
