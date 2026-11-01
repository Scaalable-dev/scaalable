import {
  Activity,
  ArrowDown,
  ArrowRight,
  Boxes,
  Check,
  CheckCheck,
  ChevronRight,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Globe2,
  LockKeyhole,
  Monitor,
  Network,
  Plug,
  Rocket,
  ShieldCheck,
  Sparkles,
  TestTube2,
  Workflow,
  Wrench,
} from "lucide-react";

import { ServiceVisual } from "../../components/servicePage";

const CodeLine = ({ number, children }) => (
  <span className="se-code-line"><i>{number}</i><code>{children}</code></span>
);

const EngineeringHeroVisual = () => (
  <ServiceVisual label="Platform architecture · Illustrative" className="sp-visual--software-hero">
    <div className="se-hero-stage">
      <div className="se-stage-grid" aria-hidden="true" />
      <div className="se-stage-heading">
        <span>REFERENCE PLATFORM · SAMPLE VIEW</span>
        <span><i /> SYSTEM HEALTHY</span>
      </div>

      <div className="se-architecture-flow">
        <div className="se-flow-layer se-flow-layer--frontend">
          <span className="se-layer-title"><Globe2 size={11} /> FRONTEND</span>
          <b>Web application</b>
          <i>React · Responsive UI</i>
          <div className="se-flow-mini-browser"><i /><i /><i /><b /></div>
        </div>
        <span className="se-flow-connector"><i /></span>
        <div className="se-flow-layer se-flow-layer--gateway">
          <span className="se-layer-title"><ShieldCheck size={11} /> API GATEWAY</span>
          <b>Auth · Routing</b>
          <i>Request validation</i>
          <div className="se-gateway-status"><span>200</span><i>Secure request</i></div>
        </div>
        <span className="se-flow-connector"><i /></span>
        <div className="se-flow-layer se-flow-layer--services">
          <span className="se-layer-title"><Boxes size={11} /> SERVICES</span>
          <b>Business logic</b>
          <i>Independent modules</i>
          <div className="se-module-pills"><span>Users</span><span>Billing</span><span>Jobs</span></div>
        </div>
      </div>

      <div className="se-hero-underlay">
        <div className="se-editor-card">
          <div className="se-card-heading"><Code2 size={11} /><b>api / projects.ts</b><span>TypeScript</span></div>
          <div className="se-editor-code">
            <CodeLine number="01"><i>router</i>.<b>get</b>(<em>"/projects"</em>,</CodeLine>
            <CodeLine number="02">&nbsp; <i>authenticate</i>, <i>async</i> (req) =&gt; {"{"}</CodeLine>
            <CodeLine number="03">&nbsp;&nbsp; <i>return</i> <b>projectService</b>.<i>list</i>();</CodeLine>
            <CodeLine number="04">{"}"});</CodeLine>
          </div>
          <div className="se-editor-footer"><span><i /> types checked</span><span>4 lines</span></div>
        </div>

        <div className="se-data-card">
          <div className="se-card-heading"><Database size={11} /><b>DATA LAYER</b><span>PostgreSQL</span></div>
          <div className="se-db-table">
            <div><b>projects</b><i>3 fields</i></div>
            <span><i>PK</i> project_id <b>uuid</b></span>
            <span><i>FK</i> owner_id <b>uuid</b></span>
            <span>created_at <b>date</b></span>
          </div>
          <div className="se-db-link"><i /><span>relations mapped</span><Check size={10} /></div>
        </div>

        <div className="se-cloud-card">
          <div className="se-card-heading"><Cloud size={11} /><b>DEPLOYMENT</b><span>Cloud</span></div>
          <div className="se-cloud-nodes"><i /><i /><i /><span>API</span></div>
          <div className="se-env-status"><span><i /> DEV</span><span><i /> STAGING</span><b><i /> PROD</b></div>
        </div>

        <div className="se-quality-card">
          <span className="se-quality-mark"><CheckCheck size={13} /></span>
          <span><b>Quality checks passed</b><i>Unit tests · Build · Types</i></span>
          <b className="se-quality-count">24/24</b>
        </div>
      </div>

      <div className="se-hero-spine" aria-hidden="true"><i /><i /><i /><i /></div>
      <div className="se-hero-status"><Activity size={11} /><span>OBSERVABILITY</span><i /><b>Logs & metrics connected</b></div>
    </div>
  </ServiceVisual>
);

const ArchitectureNode = ({ icon: Icon, title, detail, className = "" }) => (
  <article className={`se-arch-node ${className}`.trim()}>
    <span className="se-arch-node__icon"><Icon size={15} strokeWidth={1.8} /></span>
    <b>{title}</b>
    <i>{detail}</i>
  </article>
);

const EngineeringArchitecture = () => (
  <ServiceVisual label="Illustrative architecture example" className="sp-visual--software-architecture">
    <div className="se-architecture">
      <div className="se-architecture__header">
        <span><Network size={13} /><b>APPLICATION ARCHITECTURE</b></span>
        <i>Illustrative architecture example · Sample only</i>
      </div>
      <div className="se-architecture__diagram">
        <div className="se-arch-row se-arch-row--main">
          <div className="se-arch-group">
            <span className="se-arch-group__label">EXPERIENCE</span>
            <ArchitectureNode icon={Monitor} title="Frontend" detail="Web application" />
          </div>
          <span className="se-arch-link"><i>HTTPS</i><ArrowRight size={13} /></span>
          <div className="se-arch-group">
            <span className="se-arch-group__label">ACCESS</span>
            <ArchitectureNode icon={ShieldCheck} title="API gateway" detail="Auth · Rate limits" />
          </div>
          <span className="se-arch-link"><i>REST / GraphQL</i><ArrowRight size={13} /></span>
          <div className="se-arch-group se-arch-group--wide">
            <span className="se-arch-group__label">BUSINESS LOGIC</span>
            <div className="se-arch-services">
              <ArchitectureNode icon={Boxes} title="Core services" detail="Domain modules" />
              <ArchitectureNode icon={Workflow} title="Processing" detail="Async jobs" />
            </div>
          </div>
        </div>
        <div className="se-arch-branch">
          <span className="se-arch-branch__stem" />
          <span className="se-arch-branch__bar" />
          <span className="se-arch-branch__drop se-arch-branch__drop--data"><ArrowDown size={11} /></span>
          <span className="se-arch-branch__drop se-arch-branch__drop--external"><ArrowDown size={11} /></span>
        </div>
        <div className="se-arch-row se-arch-row--data">
          <div className="se-arch-group">
            <span className="se-arch-group__label">PERSISTENCE</span>
            <ArchitectureNode icon={Database} title="Data store" detail="Relational database" />
          </div>
          <div className="se-arch-data-annotation"><i /><span>Structured data · managed migrations</span></div>
          <div className="se-arch-group">
            <span className="se-arch-group__label">CONNECTED SYSTEMS</span>
            <ArchitectureNode icon={Plug} title="External APIs" detail="Payments · CRM · Tools" />
          </div>
        </div>
        <div className="se-arch-platform">
          <span><Cloud size={12} /> DEPLOYMENT PLATFORM</span>
          <div><i>DEV</i><ChevronRight size={11} /><i>STAGING</i><ChevronRight size={11} /><b><i /> PRODUCTION</b></div>
          <span><Activity size={11} /> MONITORING & LOGGING</span>
        </div>
      </div>
      <div className="se-architecture__footer">
        <span><LockKeyhole size={11} /> Auth boundaries defined</span>
        <span><Activity size={11} /> Logs & health checks</span>
        <span><Check size={11} /> Modular by design</span>
      </div>
    </div>
  </ServiceVisual>
);

const journeySteps = [
  { title: "Discover", detail: "Requirements", icon: Sparkles },
  { title: "Architect", detail: "System design", icon: Network },
  { title: "Develop", detail: "Code & modules", icon: Code2 },
  { title: "Integrate", detail: "APIs & systems", icon: Plug },
  { title: "Test", detail: "Quality checks", icon: TestTube2 },
  { title: "Deploy", detail: "Release pipeline", icon: Rocket },
  { title: "Maintain", detail: "Monitor & improve", icon: Wrench },
];

const EngineeringJourney = () => (
  <div className="se-journey" aria-label="Software development lifecycle">
    <div className="se-journey__header">
      <span>FROM FIRST REQUIREMENT TO HEALTHY, RUNNING SOFTWARE</span>
      <i><span /> A CONTINUOUS CYCLE</i>
    </div>
    <div className="se-journey__track">
      {journeySteps.map(({ title, detail, icon: Icon }, index) => (
        <div className="se-journey__step" key={title}>
          <span className={`se-journey__icon se-journey__icon--${index + 1}`}><Icon size={15} strokeWidth={1.8} /></span>
          <span className="se-journey__copy"><b>{title}</b><i>{detail}</i></span>
          {index < journeySteps.length - 1 ? <ArrowRight className="se-journey__arrow" size={12} aria-hidden="true" /> : null}
        </div>
      ))}
    </div>
    <div className="se-journey__footer"><span><GitBranch size={11} /> Clear handoffs between engineering stages</span><span>Plan → build → learn</span></div>
  </div>
);

const serviceScenes = [
  <>
    <circle cx="130" cy="50" r="13" fill="#e2efff" stroke="#90b5df" />
    <rect x="28" y="36" width="48" height="28" rx="6" fill="#eef5fd" stroke="#d7e3f0" />
    <rect x="184" y="36" width="48" height="28" rx="6" fill="#eef5fd" stroke="#d7e3f0" />
    <path d="M76 50h41M143 50h41" stroke="#6b99c8" strokeWidth="2" strokeDasharray="3 3" />
    <circle cx="130" cy="50" r="4" fill="#2875c5" /><circle cx="50" cy="50" r="5" fill="#739fd1" /><circle cx="208" cy="50" r="5" fill="#739fd1" />
  </>,
  <>
    <rect x="26" y="30" width="120" height="42" rx="5" fill="#f3f7fc" stroke="#dfe7f0" />
    <rect x="34" y="36" width="104" height="6" rx="2" fill="#e2ebf5" />
    <rect x="34" y="48" width="43" height="18" rx="3" fill="#dceafe" />
    <rect x="83" y="48" width="55" height="18" rx="3" fill="#fff" stroke="#e7edf4" />
    <path d="M154 51h20" stroke="#81a4cc" strokeWidth="2" strokeDasharray="3 2" />
    <rect x="176" y="35" width="54" height="30" rx="5" fill="#eef5fd" stroke="#d7e3f0" />
    <path d="M184 45h37M184 52h28M184 59h32" stroke="#94abc5" strokeWidth="3" strokeLinecap="round" />
  </>,
  <>
    <rect x="24" y="29" width="212" height="46" rx="5" fill="#f5f8fc" stroke="#e3eaf3" />
    <rect x="32" y="36" width="40" height="32" rx="4" fill="#e8f0fb" />
    <rect x="79" y="36" width="67" height="14" rx="3" fill="#fff" stroke="#e8edf4" />
    <rect x="79" y="55" width="42" height="8" rx="3" fill="#2875c5" />
    <rect x="154" y="36" width="73" height="32" rx="4" fill="#edf4fc" />
    <path d="M162 58c8-12 16 3 24-7s15 3 22-8 12 1 17-3" fill="none" stroke="#5d91c9" strokeWidth="2" />
  </>,
  <>
    <rect x="23" y="34" width="48" height="32" rx="6" fill="#eaf2fc" stroke="#d7e4f2" />
    <rect x="106" y="28" width="48" height="21" rx="6" fill="#eef1fc" stroke="#dfe2f3" />
    <rect x="106" y="55" width="48" height="21" rx="6" fill="#eef7f4" stroke="#dcece6" />
    <rect x="189" y="34" width="48" height="32" rx="6" fill="#eaf2fc" stroke="#d7e4f2" />
    <path d="M71 50h35M154 38h15v12h20M154 66h15V50" fill="none" stroke="#8ba9ca" strokeWidth="2" strokeDasharray="3 2" />
    <circle cx="47" cy="50" r="5" fill="#397fc4" /><circle cx="130" cy="39" r="4" fill="#8a75c7" /><circle cx="130" cy="66" r="4" fill="#50a184" /><circle cx="213" cy="50" r="5" fill="#397fc4" />
  </>,
  <>
    <rect x="23" y="31" width="99" height="38" rx="5" fill="#f4f7fb" stroke="#dfe7f0" />
    <rect x="132" y="31" width="99" height="38" rx="5" fill="#f4f7fb" stroke="#dfe7f0" />
    <rect x="32" y="38" width="38" height="4" rx="2" fill="#8599b0" />
    <rect x="32" y="48" width="75" height="3" rx="1.5" fill="#bcc9d8" />
    <rect x="32" y="56" width="58" height="3" rx="1.5" fill="#bcc9d8" />
    <rect x="142" y="38" width="38" height="4" rx="2" fill="#45678e" />
    <rect x="142" y="48" width="75" height="3" rx="1.5" fill="#aebfd2" />
    <rect x="142" y="56" width="58" height="3" rx="1.5" fill="#aebfd2" />
    <path d="M108 74h44" stroke="#7ea7d1" strokeWidth="2" /><path d="m145 70 7 4-7 4" fill="none" stroke="#7ea7d1" strokeWidth="2" />
  </>,
  <>
    <rect x="30" y="29" width="91" height="44" rx="5" fill="#f3f7fc" stroke="#e0e8f1" />
    <rect x="137" y="29" width="91" height="44" rx="5" fill="#f3f7fc" stroke="#e0e8f1" />
    <path d="M40 39h36M40 47h57M40 55h45" stroke="#b8c6d6" strokeWidth="3" strokeLinecap="round" />
    <circle cx="174" cy="50" r="13" fill="#e4f4ed" />
    <path d="m168 50 4 4 8-9" fill="none" stroke="#3d9b78" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </>,
  <>
    <rect x="22" y="29" width="72" height="43" rx="5" fill="#f5f8fc" stroke="#e1e9f2" />
    <rect x="103" y="29" width="72" height="43" rx="5" fill="#f5f8fc" stroke="#e1e9f2" />
    <rect x="184" y="29" width="52" height="43" rx="5" fill="#eef5fd" stroke="#d7e3f0" />
    <circle cx="36" cy="41" r="4" fill="#5b91ca" /><circle cx="117" cy="41" r="4" fill="#56a587" /><circle cx="198" cy="41" r="4" fill="#8a75c7" />
    <path d="M45 41h38M126 41h38M45 54h33M126 54h34M194 55h33" stroke="#bac8d7" strokeWidth="3" strokeLinecap="round" />
  </>,
  <>
    <rect x="26" y="29" width="208" height="46" rx="5" fill="#f5f8fc" stroke="#e1e9f2" />
    <rect x="34" y="36" width="46" height="32" rx="4" fill="#e9f1fb" />
    <circle cx="57" cy="46" r="6" fill="#a4bfdc" /><path d="M45 61c2-9 22-9 24 0" fill="#8aaacd" />
    <path d="M91 39h119M91 48h98M91 57h113M91 66h71" stroke="#bcc9d8" strokeWidth="3" strokeLinecap="round" />
  </>,
  <>
    <rect x="24" y="29" width="48" height="44" rx="5" fill="#eef3fa" />
    <rect x="82" y="29" width="48" height="44" rx="5" fill="#edf5fd" />
    <rect x="140" y="29" width="48" height="44" rx="5" fill="#f0edfc" />
    <rect x="198" y="29" width="38" height="44" rx="5" fill="#edf6f2" />
    <path d="M32 40h32M32 48h23M32 59h32M90 40h32M90 48h24M90 59h32M148 40h32M148 48h24M148 59h32M205 40h24M205 48h18M205 59h24" stroke="#9fb2ca" strokeWidth="3" strokeLinecap="round" />
    <circle cx="50" cy="67" r="2" fill="#397fc4" /><circle cx="108" cy="67" r="2" fill="#397fc4" /><circle cx="166" cy="67" r="2" fill="#397fc4" />
  </>,
  <>
    <rect x="22" y="32" width="55" height="36" rx="6" fill="#edf5ff" stroke="#d9e5f2" />
    <rect x="102" y="32" width="55" height="36" rx="6" fill="#f3effc" stroke="#e1daf1" />
    <rect x="182" y="32" width="55" height="36" rx="6" fill="#edf6f2" stroke="#dcebe5" />
    <path d="M77 50h25M157 50h25" stroke="#7fa2ca" strokeWidth="2" strokeDasharray="3 3" />
    <path d="m97 46 5 4-5 4m80-8 5 4-5 4" fill="none" stroke="#7fa2ca" strokeWidth="2" />
    <circle cx="49" cy="50" r="6" fill="#4485c8" /><circle cx="129" cy="50" r="6" fill="#8a70c4" /><circle cx="209" cy="50" r="6" fill="#4a9b7c" />
  </>,
  <>
    <circle cx="54" cy="50" r="17" fill="#edf4fc" stroke="#dce7f3" />
    <circle cx="130" cy="34" r="10" fill="#f0edfb" stroke="#e2dcf1" />
    <circle cx="130" cy="67" r="10" fill="#edf7f3" stroke="#dcece6" />
    <circle cx="207" cy="50" r="17" fill="#edf4fc" stroke="#dce7f3" />
    <path d="M71 45 120 36M71 55l49 10M140 36l50 9M140 64l50-9" stroke="#8eabc9" strokeWidth="2" strokeDasharray="3 3" />
    <circle cx="54" cy="50" r="5" fill="#4182c7" /><circle cx="130" cy="34" r="4" fill="#8b72c7" /><circle cx="130" cy="67" r="4" fill="#4c9e80" /><circle cx="207" cy="50" r="5" fill="#4182c7" />
  </>,
  <>
    <rect x="29" y="29" width="202" height="44" rx="5" fill="#f8fafc" stroke="#e3eaf2" />
    <rect x="38" y="37" width="59" height="28" rx="4" fill="#edf4fc" /><rect x="102" y="37" width="59" height="28" rx="4" fill="#fff" stroke="#e6ebf2" /><rect x="166" y="37" width="56" height="28" rx="4" fill="#fff" stroke="#e6ebf2" />
    <path d="M45 58h43M110 58h42M174 58h38" stroke="#508bc8" strokeWidth="3" strokeLinecap="round" />
    <circle cx="67" cy="47" r="5" fill="#a4bedb" /><circle cx="131" cy="47" r="5" fill="#d2ddeb" /><circle cx="194" cy="47" r="5" fill="#d2ddeb" />
  </>,
  <>
    <rect x="27" y="30" width="69" height="42" rx="5" fill="#f2f6fb" stroke="#e0e8f1" /><rect x="105" y="30" width="69" height="42" rx="5" fill="#f2f6fb" stroke="#e0e8f1" /><rect x="183" y="30" width="50" height="42" rx="5" fill="#eef5fc" stroke="#dae5f1" />
    <path d="M36 40h42M36 49h32M36 58h42M114 40h42M114 49h32M114 58h42M191 40h32M191 49h24M191 58h32" stroke="#aebed0" strokeWidth="3" strokeLinecap="round" />
    <path d="M97 51h8M175 51h8" stroke="#4e8ac8" strokeWidth="2" /><circle cx="101" cy="51" r="2" fill="#4e8ac8" /><circle cx="179" cy="51" r="2" fill="#4e8ac8" />
  </>,
  <>
    <rect x="31" y="29" width="198" height="45" rx="5" fill="#f7f9fc" stroke="#e2e9f1" />
    <ellipse cx="130" cy="40" rx="22" ry="7" fill="#e9f1fb" stroke="#b7cbe1" /><path d="M108 40v23c0 4 10 8 22 8s22-4 22-8V40" fill="#edf4fc" stroke="#b7cbe1" /><path d="M108 50c0 4 10 8 22 8s22-4 22-8" fill="none" stroke="#b7cbe1" />
    <rect x="47" y="40" width="31" height="4" rx="2" fill="#9eb1c8" /><rect x="47" y="50" width="41" height="4" rx="2" fill="#c0ccda" />
    <rect x="173" y="40" width="40" height="4" rx="2" fill="#9eb1c8" /><rect x="173" y="50" width="30" height="4" rx="2" fill="#c0ccda" />
  </>,
  <>
    <rect x="24" y="29" width="92" height="44" rx="5" fill="#f4f6f9" stroke="#e1e7ee" />
    <rect x="144" y="29" width="92" height="44" rx="5" fill="#eef5fc" stroke="#dce6f1" />
    <path d="M33 39h53M33 48h63M33 57h43M33 65h56" stroke="#c3ccd7" strokeWidth="3" strokeLinecap="round" />
    <path d="M153 39h53M153 48h63M153 57h43M153 65h56" stroke="#9fb2c9" strokeWidth="3" strokeLinecap="round" />
    <path d="M119 50h24" stroke="#5289c2" strokeWidth="2" /><path d="m136 45 6 5-6 5" fill="none" stroke="#5289c2" strokeWidth="2" />
  </>,
  <>
    <circle cx="66" cy="51" r="19" fill="#edf6f2" stroke="#d6e9e1" /><path d="M66 39v12l8 5" fill="none" stroke="#4c9d7e" strokeWidth="2" strokeLinecap="round" />
    <path d="M103 39h115M103 50h93M103 61h106" stroke="#b7c5d5" strokeWidth="3" strokeLinecap="round" />
    <circle cx="101" cy="39" r="3" fill="#4ba07e" /><circle cx="101" cy="50" r="3" fill="#4ba07e" /><circle cx="101" cy="61" r="3" fill="#4ba07e" />
  </>,
  <>
    <rect x="25" y="29" width="210" height="44" rx="5" fill="#f6f8fb" stroke="#e3eaf2" />
    <path d="M38 61 66 50l25 5 28-17 26 9 28-10 34 8" fill="none" stroke="#5a93ce" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M38 65h184" stroke="#d8e1eb" strokeWidth="1" />
    <circle cx="119" cy="38" r="3" fill="#4181c2" /><circle cx="173" cy="37" r="3" fill="#4181c2" />
    <rect x="42" y="34" width="34" height="7" rx="3" fill="#e5effb" />
  </>,
  <>
    <rect x="28" y="29" width="83" height="44" rx="5" fill="#f4f6fa" stroke="#e1e8f0" />
    <rect x="149" y="29" width="83" height="44" rx="5" fill="#eef5fc" stroke="#dbe6f2" />
    <path d="M38 39h45M38 47h61M38 55h35M38 63h54" stroke="#c1cbd8" strokeWidth="3" strokeLinecap="round" />
    <path d="m159 50 10 9 19-21" fill="none" stroke="#3a8b6e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M117 51h26" stroke="#6794c2" strokeWidth="2" strokeDasharray="3 3" />
  </>,
  <>
    <rect x="25" y="30" width="57" height="42" rx="5" fill="#edf3fb" stroke="#dce6f1" />
    <rect x="101" y="30" width="57" height="42" rx="5" fill="#f0eefb" stroke="#e0ddf1" />
    <rect x="177" y="30" width="57" height="42" rx="5" fill="#eff7f3" stroke="#dcebe5" />
    <path d="M34 41h39M34 50h31M34 59h39M110 41h39M110 50h31M110 59h39M186 41h39M186 50h31M186 59h39" stroke="#aabbd0" strokeWidth="3" strokeLinecap="round" />
    <circle cx="75" cy="67" r="2.5" fill="#4886c5" /><circle cx="151" cy="67" r="2.5" fill="#8b73c4" /><circle cx="227" cy="67" r="2.5" fill="#4a9b7b" />
  </>,
  <>
    <circle cx="130" cy="50" r="21" fill="#edf3fb" stroke="#d9e3ef" />
    <path d="M130 36v8M130 56v8M116 50h8M136 50h8M120 40l6 6M134 54l6 6M140 40l-6 6M126 54l-6 6" stroke="#4f83bc" strokeWidth="2" strokeLinecap="round" />
    <rect x="30" y="38" width="42" height="24" rx="5" fill="#f1f5fa" stroke="#e1e8f0" /><rect x="188" y="38" width="42" height="24" rx="5" fill="#f1f5fa" stroke="#e1e8f0" />
    <path d="M72 50h36M152 50h36" stroke="#94adca" strokeWidth="2" strokeDasharray="3 3" />
  </>,
  <>
    <rect x="25" y="31" width="54" height="38" rx="5" fill="#eef4fc" stroke="#dce6f1" />
    <rect x="101" y="31" width="54" height="38" rx="5" fill="#eef4fc" stroke="#dce6f1" />
    <rect x="177" y="31" width="54" height="38" rx="5" fill="#eef4fc" stroke="#dce6f1" />
    <path d="M35 42h32M35 51h20M111 42h32M111 51h20M187 42h32M187 51h20" stroke="#9eb2cb" strokeWidth="3" strokeLinecap="round" />
    <path d="M79 50h22M155 50h22" stroke="#6795c6" strokeWidth="2" strokeDasharray="3 3" />
    <circle cx="90" cy="50" r="3" fill="#3981c5" /><circle cx="166" cy="50" r="3" fill="#3981c5" />
  </>,
];

const EngineeringServiceArt = ({ kind }) => (
  <span className={`se-service-art se-service-art--${kind}`}>
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

export {
  EngineeringArchitecture,
  EngineeringHeroVisual,
  EngineeringJourney,
  EngineeringServiceArt,
};
