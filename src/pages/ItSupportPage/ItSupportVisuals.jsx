import {
  Activity,
  ArrowRight,
  Bell,
  Check,
  CheckCircle2,
  Cloud,
  Computer,
  Database,
  FileCheck2,
  Gauge,
  HardDrive,
  LockKeyhole,
  MonitorCog,
  Network,
  RefreshCw,
  Server,
  ShieldCheck,
  TicketCheck,
  Wifi,
  Wrench,
} from "lucide-react";

import { ServiceVisual } from "../../components/servicePage";

const StatusSignal = ({ children }) => (
  <span className="it-status-signal"><i />{children}</span>
);

const HealthBar = ({ label, value, width, tone = "" }) => (
  <div className={`it-health-bar ${tone}`}>
    <span><i>{label}</i><b>{value}</b></span>
    <i className="it-health-bar__track"><i style={{ width }} /></i>
  </div>
);

const ItHeroVisual = () => (
  <ServiceVisual label="IT operations · Illustrative view" className="sp-visual--it-hero">
    <div className="it-hero">
      <div className="it-hero__grid" aria-hidden="true" />
      <div className="it-hero__topline">
        <span><Activity size={11} /> OPERATIONS CENTER</span>
        <StatusSignal>MONITORING</StatusSignal>
      </div>

      <div className="it-ops-panel">
        <div className="it-ops-panel__header">
          <span><i><MonitorCog size={12} /></i><b>System health</b></span>
          <small>Illustrative status</small>
        </div>
        <div className="it-ops-health">
          <HealthBar label="Compute" value="Operational" width="82%" />
          <HealthBar label="Memory" value="Monitoring" width="66%" tone="it-health-bar--blue" />
          <HealthBar label="Network" value="Connected" width="90%" tone="it-health-bar--green" />
        </div>
        <div className="it-ops-signals">
          <span><Gauge size={10} /><b>Resource watch</b><i>Normal range</i></span>
          <span><ShieldCheck size={10} /><b>Security checks</b><i>Review ready</i></span>
        </div>
      </div>

      <div className="it-infrastructure">
        <div className="it-infra-node it-infra-node--cloud">
          <span><Cloud size={13} /></span><b>Cloud services</b><i>Connected</i>
        </div>
        <div className="it-infra-node it-infra-node--server">
          <span><Server size={13} /></span><b>Server cluster</b><i>Monitoring</i>
        </div>
        <div className="it-infra-node it-infra-node--device">
          <span><Computer size={13} /></span><b>Workstations</b><i>Managed devices</i>
        </div>
        <div className="it-infra-node it-infra-node--data">
          <span><Database size={13} /></span><b>Business data</b><i>Protected</i>
        </div>
        <svg className="it-infra-lines" viewBox="0 0 360 250" preserveAspectRatio="none" aria-hidden="true">
          <path d="M75 48 C120 48 140 86 180 100" />
          <path d="M285 48 C240 48 220 86 180 100" />
          <path d="M75 200 C120 200 140 155 180 140" />
          <path d="M285 200 C240 200 220 155 180 140" />
          <circle cx="75" cy="48" r="3" /><circle cx="285" cy="48" r="3" />
          <circle cx="75" cy="200" r="3" /><circle cx="285" cy="200" r="3" />
        </svg>
        <div className="it-infra-core"><span><Network size={18} /></span><b>Core network</b><i>Systems connected</i><em><Check size={8} /> Operational</em></div>
      </div>

      <div className="it-ticket-panel">
        <span className="it-ticket-panel__icon"><TicketCheck size={13} /></span>
        <span className="it-ticket-panel__copy"><b>Support request</b><i>Access issue · Assigned</i></span>
        <span className="it-ticket-panel__status"><i /> IN PROGRESS</span>
        <span className="it-ticket-panel__done"><Check size={9} /></span>
      </div>
      <div className="it-security-badge"><LockKeyhole size={11} /><span>Access controls</span><ShieldCheck size={11} /></div>
      <div className="it-hero__footer"><span><i /> Service signals</span><span><i /> Infrastructure</span><span><i /> Support workflow</span><b>SAMPLE VIEW</b></div>
    </div>
  </ServiceVisual>
);

const ItShowcaseVisual = () => (
  <ServiceVisual label="Operations dashboard · Illustrative sample" className="sp-visual--it-dashboard">
    <div className="it-dashboard">
      <div className="it-dashboard__header">
        <span><MonitorCog size={12} /><b>Infrastructure overview</b></span>
        <i><span /> Illustrative sample · No live data</i>
      </div>
      <div className="it-dashboard__summary">
        <article><span><Server size={10} /> SERVERS</span><b>System health</b><i><CheckCircle2 size={9} /> Operational</i></article>
        <article><span><Network size={10} /> NETWORK</span><b>Connectivity</b><i><Wifi size={9} /> Monitored</i></article>
        <article><span><ShieldCheck size={10} /> SECURITY</span><b>Protection status</b><i><LockKeyhole size={9} /> Reviewed</i></article>
      </div>
      <div className="it-dashboard__main">
        <section className="it-resource-panel">
          <div className="it-dashboard__section-head"><b>Resource utilization</b><i>Illustrative indicators</i></div>
          <HealthBar label="Processor" value="Usage trend" width="58%" />
          <HealthBar label="Memory" value="Capacity review" width="72%" tone="it-health-bar--blue" />
          <HealthBar label="Storage" value="Space monitor" width="45%" tone="it-health-bar--violet" />
          <div className="it-network-activity"><span><Activity size={10} /> Network activity</span><div><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div><small>Illustrative signal only</small></div>
        </section>
        <section className="it-support-panel">
          <div className="it-dashboard__section-head"><b>Support queue</b><i>Sample tickets</i></div>
          <article><span><i>01</i><b>Device access</b><small>Assigned</small></span><i className="it-ticket-tag it-ticket-tag--active">IN PROGRESS</i></article>
          <article><span><i>02</i><b>Software update</b><small>Review</small></span><i className="it-ticket-tag">SCHEDULED</i></article>
          <article><span><i>03</i><b>Backup check</b><small>Verified</small></span><i className="it-ticket-tag it-ticket-tag--done">RESOLVED</i></article>
        </section>
      </div>
      <div className="it-dashboard__footer">
        <span><Cloud size={10} /> Cloud services <i /> Connected</span>
        <span><HardDrive size={10} /> Backup checks <i /> Reviewed</span>
        <span><RefreshCw size={10} /> Maintenance <i /> Planned</span>
        <b>ILLUSTRATIVE SAMPLE</b>
      </div>
    </div>
  </ServiceVisual>
);

const itWorkflow = [
  { title: "Monitor", detail: "System signals", icon: Activity },
  { title: "Detect", detail: "Early indicators", icon: Bell },
  { title: "Diagnose", detail: "Find the cause", icon: FileCheck2 },
  { title: "Resolve", detail: "Restore service", icon: Wrench },
  { title: "Optimize", detail: "Improve stability", icon: Gauge },
];

const ItOperationsJourney = () => (
  <div className="it-journey" aria-label="Illustrative IT operations workflow">
    <div className="it-journey__header">
      <span>PROACTIVE OPERATIONS LOOP</span>
      <i><span /> ILLUSTRATIVE WORKFLOW</i>
    </div>
    <div className="it-journey__track">
      {itWorkflow.map(({ title, detail, icon: Icon }, index) => (
        <article className="it-journey__step" key={title}>
          <span className={`it-journey__icon it-journey__icon--${index + 1}`}><Icon size={15} /></span>
          <span className="it-journey__copy"><b>{title}</b><i>{detail}</i></span>
          {index < itWorkflow.length - 1 ? <ArrowRight className="it-journey__arrow" size={12} aria-hidden="true" /> : null}
        </article>
      ))}
    </div>
    <div className="it-journey__footer">
      <span><ShieldCheck size={11} /> Detect early, resolve clearly, verify service health</span>
      <span>Continuous support cycle</span>
    </div>
  </div>
);

const drawings = [
  <>
    <rect x="17" y="12" width="62" height="40" rx="5" />
    <path d="M17 22h62M25 17h1m5 0h1m5 0h1M27 32h10v11H27zM43 32h27M43 38h21M27 48h43" />
    <path d="M27 37h10" stroke="#52a17f" />
  </>,
  <>
    <rect x="19" y="12" width="58" height="40" rx="5" />
    <path d="M19 22h58M27 17h1m5 0h1m5 0h1M29 30h25M29 36h30M29 42h20" />
    <circle cx="68" cy="40" r="7" /><path d="m65 40 2 2 4-5" />
  </>,
  <>
    <rect x="30" y="11" width="37" height="11" rx="3" />
    <rect x="26" y="27" width="45" height="11" rx="3" />
    <rect x="30" y="43" width="37" height="11" rx="3" />
    <path d="M48 22v5M48 38v5" />
    <circle cx="36" cy="16.5" r="1" /><circle cx="32" cy="32.5" r="1" /><circle cx="36" cy="48.5" r="1" />
  </>,
  <>
    <circle cx="48" cy="32" r="20" />
    <path d="M48 19v13l9 5" />
    <path d="M48 7v5M48 52v5M23 32h5M68 32h5" />
    <path d="m34 34 8 7 19-17" stroke="#4c9878" />
  </>,
  <>
    <path d="M25 48V35m12 13V27m12 21V32m12 16V20m12 28V29" />
    <path d="M22 51h53" />
    <path d="m25 28 11-8 12 4 12-10 14 3" />
    <circle cx="61" cy="14" r="2" fill="#4a9b7c" />
  </>,
  <>
    <path d="M48 11 67 18v13c0 12-8 19-19 24-11-5-19-12-19-24V18z" />
    <path d="m39 32 6 6 12-14" stroke="#4a9b7c" />
  </>,
  <>
    <rect x="23" y="11" width="50" height="42" rx="5" />
    <path d="M23 22h50M31 17h1m5 0h1m5 0h1M32 43V34m10 9V28m10 15V37m10 6V30" />
    <path d="M31 48h34" />
  </>,
  <>
    <rect x="25" y="11" width="46" height="42" rx="5" />
    <circle cx="48" cy="30" r="9" />
    <path d="M32 45c2-9 30-9 32 0" />
    <path d="M48 21v18M39 30h18" stroke="#6b91b6" />
  </>,
  <>
    <rect x="26" y="12" width="44" height="40" rx="5" />
    <path d="M26 22h44M34 17h1m5 0h1m5 0h1M34 30h27M34 36h22M34 42h26" />
    <path d="M35 48h17" stroke="#4b9b7b" />
  </>,
  <>
    <rect x="21" y="12" width="52" height="35" rx="5" />
    <path d="M37 53h20m-10-6v6M21 22h52M29 17h1m5 0h1m5 0h1" />
    <path d="M31 31h12v10H31zM48 31h19M48 36h15" />
  </>,
  <>
    <path d="M48 10v12M48 38v11M25 25h11m24 0h11" />
    <circle cx="48" cy="30" r="9" />
    <circle cx="48" cy="30" r="3" />
    <circle cx="48" cy="10" r="3" /><circle cx="25" cy="25" r="3" /><circle cx="71" cy="25" r="3" />
    <path d="M39 43h18" />
  </>,
  <>
    <rect x="24" y="11" width="48" height="42" rx="5" />
    <path d="M24 22h48M32 17h1m5 0h1m5 0h1" />
    <rect x="34" y="30" width="28" height="16" rx="3" />
    <path d="M39 36h18m-18 5h13" />
    <circle cx="67" cy="45" r="5" fill="#eaf7f0" stroke="#56a17e" />
  </>,
];

const ItServiceArt = ({ index }) => (
  <span className={`it-service-art it-service-art--${index}`}>
    <svg viewBox="0 0 96 66" fill="none" focusable="false" aria-hidden="true">
      <rect x="6" y="4" width="84" height="58" rx="9" fill="#F8FBFF" stroke="#E1EAF4" />
      <path d="M6 17h84" stroke="#E8EEF5" />
      <circle cx="14" cy="10.5" r="1.7" fill="#B93FFB" />
      <circle cx="20" cy="10.5" r="1.7" fill="#0082F9" />
      <circle cx="26" cy="10.5" r="1.7" fill="#CBD8E6" />
      <g stroke="#7FA4C8" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        {drawings[index]}
      </g>
      <circle cx="78" cy="50" r="5.5" fill="#fff" stroke="#D8E5F1" />
      {index === 2 || index === 4 || index === 5 || index === 11 ? (
        <path d="m76 50 1.4 1.4 2.8-3" stroke="#469879" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      ) : null}
    </svg>
    <i className="it-service-art__glint" />
  </span>
);

export { ItHeroVisual, ItOperationsJourney, ItServiceArt, ItShowcaseVisual };
