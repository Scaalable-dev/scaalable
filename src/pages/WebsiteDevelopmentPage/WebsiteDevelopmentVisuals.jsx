import {
  ArrowUpRight,
  Check,
  Code2,
  Database,
  Gauge,
  Layout,
  MonitorCheck,
  PenTool,
  PlugZap,
  Rocket,
  ShieldCheck,
  Smartphone,
  Tablet,
} from "lucide-react";

import { ServiceVisual } from "../../components/servicePage";

const WebsiteHeroVisual = () => (
  <ServiceVisual
    label="scaalable.dev"
    className="sp-visual--website-hero"
  >
    <div className="wd-hero-stage">
      <div className="wd-layout-grid" aria-hidden="true" />
      <div className="wd-browser-preview">
        <div className="wd-site-nav">
          <span className="wd-site-mark">S</span>
          <span className="wd-site-wordmark">northstar</span>
          <div className="wd-site-links">
            <i />
            <i />
            <i />
          </div>
          <span className="wd-site-cta">Let’s talk <ArrowUpRight size={10} /></span>
        </div>
        <div className="wd-site-hero">
          <div className="wd-site-copy">
            <small>YOUR NEXT DIGITAL EXPERIENCE</small>
            <strong>A clearer way forward.</strong>
            <span>Thoughtful digital experiences, built around your business.</span>
            <b>Explore what’s possible <ArrowUpRight size={11} /></b>
          </div>
          <div className="wd-site-art" aria-hidden="true">
            <span className="wd-site-art__orb" />
            <span className="wd-site-art__tile wd-site-art__tile--one" />
            <span className="wd-site-art__tile wd-site-art__tile--two" />
            <span className="wd-site-art__tile wd-site-art__tile--three" />
          </div>
        </div>
        <div className="wd-site-sections">
          <span><b>01</b><i /></span>
          <span><b>02</b><i /></span>
          <span><b>03</b><i /></span>
        </div>
      </div>

      <div className="wd-device wd-device--tablet" aria-hidden="true">
        <div className="wd-device__screen">
          <span className="wd-device__nav"><i /><b /></span>
          <span className="wd-device__hero"><i /><b /></span>
          <span className="wd-device__blocks"><i /><i /><i /></span>
        </div>
      </div>
      <div className="wd-device wd-device--phone" aria-hidden="true">
        <div className="wd-phone-camera" />
        <div className="wd-device__screen">
          <span className="wd-device__nav"><i /><b /></span>
          <span className="wd-device__hero"><i /><b /></span>
          <span className="wd-device__blocks"><i /><i /></span>
        </div>
      </div>

      <div className="wd-float-card wd-float-card--code">
        <span className="wd-float-card__icon"><Code2 size={13} /></span>
        <span><b>Clean, considered code</b><i>Components ready to grow</i></span>
      </div>
      <div className="wd-float-card wd-float-card--live">
        <span className="wd-live-dot" />
        <span><b>Published</b><i>All systems go</i></span>
        <Check size={13} />
      </div>
      <div className="wd-breakpoint" aria-hidden="true">
        <MonitorCheck size={12} /><i /><Tablet size={12} /><i /><Smartphone size={12} />
        <span>RESPONSIVE BY DESIGN</span>
      </div>
      <div className="wd-api-chip">
        <Database size={12} /><span>API connected</span><Check size={11} />
      </div>
    </div>
  </ServiceVisual>
);

const workflowSteps = [
  { title: "Plan", detail: "Wireframe", Icon: Layout },
  { title: "Design", detail: "Interface", Icon: PenTool },
  { title: "Develop", detail: "Components", Icon: Code2 },
  { title: "Integrate", detail: "API connected", Icon: PlugZap },
  { title: "Test", detail: "Across screens", Icon: MonitorCheck },
  { title: "Launch", detail: "Published", Icon: Rocket },
];

const WebsiteShowcaseVisual = () => (
  <ServiceVisual
    label="idea → live website"
    className="sp-visual--website-workflow"
  >
    <div className="wd-workflow">
      <div className="wd-workflow__heading">
        <span>ONE CONNECTED JOURNEY</span>
        <b><i /> BUILD STATUS: ON TRACK</b>
      </div>
      <div className="wd-workflow__grid">
        {workflowSteps.map(({ title, detail, Icon }, index) => (
          <article className={`wd-workflow__step wd-workflow__step--${index + 1}`} key={title}>
            <span className={`wd-workflow__art wd-workflow__art--${index + 1}`}>
              <Icon size={16} strokeWidth={1.8} />
              {index === 0 ? <i className="wd-wire-lines" /> : null}
              {index === 1 ? <i className="wd-design-swatch" /> : null}
              {index === 2 ? <i className="wd-code-lines" /> : null}
              {index === 3 ? <i className="wd-api-nodes" /> : null}
              {index === 4 ? <i className="wd-test-checks" /> : null}
              {index === 5 ? <i className="wd-launch-screen" /> : null}
            </span>
            <span className="wd-workflow__label">
              <b>{title}</b>
              <i>{detail}</i>
            </span>
            {index < workflowSteps.length - 1 ? (
              <ArrowUpRight className="wd-workflow__arrow" size={13} aria-hidden="true" />
            ) : null}
          </article>
        ))}
      </div>
      <div className="wd-workflow__footer">
        <span><ShieldCheck size={12} /> Accessible, responsive, ready to grow</span>
        <Gauge size={13} />
      </div>
    </div>
  </ServiceVisual>
);

const ServiceArt = ({ kind }) => {
  switch (kind) {
    case 0:
      return (
        <>
          <rect x="14" y="29" width="137" height="55" rx="6" fill="#eef5ff" />
          <rect x="22" y="37" width="42" height="4" rx="2" fill="#235aa5" />
          <rect x="22" y="46" width="58" height="3" rx="1.5" fill="#9aaec8" />
          <rect x="22" y="54" width="29" height="8" rx="4" fill="var(--wd-accent)" />
          <circle cx="119" cy="55" r="18" fill="#dbeaff" />
          <rect x="95" y="68" width="40" height="8" rx="4" fill="#fff" />
          <rect x="160" y="31" width="84" height="53" rx="5" fill="#f4f7fb" />
          <rect x="168" y="40" width="27" height="4" rx="2" fill="#6c7f99" />
          <rect x="168" y="50" width="65" height="3" rx="1.5" fill="#c1ccda" />
          <rect x="168" y="58" width="57" height="3" rx="1.5" fill="#c1ccda" />
          <rect x="168" y="69" width="35" height="7" rx="3.5" fill="#d9e8ff" />
        </>
      );
    case 1:
      return (
        <>
          <rect x="14" y="29" width="42" height="55" rx="5" fill="#eef3fa" />
          <rect x="21" y="37" width="25" height="4" rx="2" fill="var(--wd-accent)" />
          <path d="M21 49h26M21 57h22M21 65h26M21 73h19" stroke="#bac8d9" strokeWidth="3" strokeLinecap="round" />
          <rect x="64" y="29" width="180" height="24" rx="5" fill="#edf5ff" />
          <rect x="74" y="37" width="72" height="4" rx="2" fill="#46617f" />
          <rect x="74" y="45" width="104" height="3" rx="1.5" fill="#b3c2d5" />
          <rect x="64" y="59" width="53" height="25" rx="4" fill="#e6effc" />
          <rect x="124" y="59" width="53" height="25" rx="4" fill="#f3f6fa" />
          <rect x="184" y="59" width="60" height="25" rx="4" fill="#f3f6fa" />
          <path d="M72 76h36M132 76h36M192 76h42" stroke="var(--wd-accent)" strokeWidth="3" strokeLinecap="round" />
        </>
      );
    case 2:
      return (
        <>
          <rect x="14" y="29" width="230" height="55" rx="6" fill="#f1f6ff" />
          <rect x="24" y="39" width="91" height="5" rx="2.5" fill="#263e5c" />
          <rect x="24" y="49" width="70" height="4" rx="2" fill="#8fa3bd" />
          <rect x="24" y="61" width="48" height="13" rx="6.5" fill="var(--wd-accent)" />
          <rect x="170" y="38" width="62" height="36" rx="5" fill="#fff" stroke="#dce6f3" />
          <rect x="178" y="45" width="46" height="5" rx="2.5" fill="#eaf0f8" />
          <rect x="178" y="55" width="46" height="12" rx="3" fill="#e0ecff" />
          <circle cx="220" cy="62" r="2" fill="var(--wd-accent)" />
        </>
      );
    case 3:
      return (
        <>
          <rect x="14" y="29" width="72" height="55" rx="5" fill="#eff3fa" />
          <rect x="94" y="29" width="72" height="25" rx="5" fill="#e7f1ff" />
          <rect x="174" y="29" width="70" height="25" rx="5" fill="#f4eaff" />
          <rect x="94" y="59" width="72" height="25" rx="5" fill="#fff2e8" />
          <rect x="174" y="59" width="70" height="25" rx="5" fill="#e8f6f3" />
          <circle cx="50" cy="53" r="15" fill="#d5e6ff" />
          <path d="M26 77h48" stroke="#becadb" strokeWidth="3" strokeLinecap="round" />
          <path d="M109 46h42M189 46h40M109 76h42M189 76h40" stroke="var(--wd-accent)" strokeWidth="3" strokeLinecap="round" opacity=".8" />
        </>
      );
    case 4:
      return (
        <>
          <rect x="14" y="29" width="43" height="55" rx="5" fill="#f0f4fa" />
          <circle cx="27" cy="39" r="4" fill="var(--wd-accent)" />
          <path d="M36 39h13M22 51h27M22 59h23M22 67h27M22 75h17" stroke="#becadb" strokeWidth="3" strokeLinecap="round" />
          <rect x="65" y="29" width="179" height="24" rx="5" fill="#eef5ff" />
          <rect x="75" y="38" width="68" height="5" rx="2.5" fill="#49627f" />
          <rect x="65" y="60" width="82" height="24" rx="5" fill="#f6f8fb" />
          <rect x="155" y="60" width="89" height="24" rx="5" fill="#f6f8fb" />
          <path d="M75 76h45M165 76h51" stroke="var(--wd-accent)" strokeWidth="3" strokeLinecap="round" />
        </>
      );
    case 5:
      return (
        <>
          <rect x="14" y="29" width="37" height="55" rx="5" fill="#edf2f9" />
          <path d="M22 39h21M22 49h17M22 59h21M22 69h15" stroke="#a9b9cd" strokeWidth="3" strokeLinecap="round" />
          <rect x="59" y="29" width="84" height="23" rx="5" fill="#edf5ff" />
          <rect x="151" y="29" width="93" height="23" rx="5" fill="#f2edff" />
          <rect x="59" y="58" width="185" height="26" rx="5" fill="#f7f9fc" />
          <path d="M68 76h18M91 76h24M120 76h14" stroke="#c3cfde" strokeWidth="3" strokeLinecap="round" />
          <path d="M159 76c10-15 17-2 26-10s15 3 24-7 15-3 25-8" fill="none" stroke="var(--wd-accent)" strokeWidth="3" strokeLinecap="round" />
        </>
      );
    case 6:
      return (
        <>
          <rect x="14" y="29" width="230" height="55" rx="6" fill="#f5f7fb" />
          <rect x="24" y="36" width="43" height="40" rx="4" fill="#eaf1fa" />
          <rect x="77" y="36" width="43" height="40" rx="4" fill="#eaf1fa" />
          <rect x="130" y="36" width="43" height="40" rx="4" fill="#eaf1fa" />
          <rect x="183" y="36" width="51" height="40" rx="4" fill="#eaf1fa" />
          <path d="M31 66h27M84 66h27M137 66h27M190 66h34" stroke="var(--wd-accent)" strokeWidth="3" strokeLinecap="round" />
          <circle cx="45" cy="50" r="7" fill="#fff" /><circle cx="98" cy="50" r="7" fill="#fff" />
          <circle cx="151" cy="50" r="7" fill="#fff" /><circle cx="204" cy="50" r="7" fill="#fff" />
        </>
      );
    case 7:
      return (
        <>
          <rect x="14" y="29" width="64" height="55" rx="5" fill="#eef3fa" />
          <rect x="23" y="37" width="45" height="5" rx="2.5" fill="#8195ae" />
          <path d="M23 51h41M23 60h34M23 69h39M23 78h28" stroke="#c1ccda" strokeWidth="3" strokeLinecap="round" />
          <rect x="87" y="29" width="157" height="55" rx="5" fill="#f8fafd" />
          <rect x="97" y="37" width="90" height="5" rx="2.5" fill="#4a617d" />
          <rect x="97" y="48" width="137" height="3" rx="1.5" fill="#c2cddb" />
          <rect x="97" y="56" width="124" height="3" rx="1.5" fill="#c2cddb" />
          <rect x="97" y="64" width="133" height="3" rx="1.5" fill="#c2cddb" />
          <rect x="97" y="74" width="49" height="6" rx="3" fill="var(--wd-accent)" />
        </>
      );
    case 8:
      return (
        <>
          <rect x="14" y="29" width="108" height="55" rx="5" fill="#f2f4f8" />
          <rect x="136" y="29" width="108" height="55" rx="5" fill="#edf5ff" />
          <rect x="23" y="37" width="38" height="4" rx="2" fill="#a5b0bf" />
          <rect x="23" y="46" width="78" height="3" rx="1.5" fill="#d0d5de" />
          <rect x="23" y="54" width="78" height="3" rx="1.5" fill="#d0d5de" />
          <rect x="23" y="64" width="35" height="11" rx="5.5" fill="#d5dbe5" />
          <rect x="146" y="37" width="54" height="5" rx="2.5" fill="#47617f" />
          <rect x="146" y="47" width="84" height="3" rx="1.5" fill="#b7c6d9" />
          <rect x="146" y="55" width="74" height="3" rx="1.5" fill="#b7c6d9" />
          <rect x="146" y="65" width="44" height="10" rx="5" fill="var(--wd-accent)" />
          <path d="M126 42v29" stroke="#ccd4df" strokeWidth="2" strokeDasharray="3 3" />
        </>
      );
    case 9:
      return (
        <>
          <circle cx="47" cy="57" r="23" fill="#e9f4f0" />
          <path d="M47 43v14l10 6" fill="none" stroke="var(--wd-accent)" strokeWidth="3" strokeLinecap="round" />
          <circle cx="47" cy="57" r="16" fill="none" stroke="#b6dacc" strokeWidth="2" />
          <rect x="83" y="32" width="153" height="13" rx="4" fill="#f2f5f9" />
          <circle cx="94" cy="38.5" r="3" fill="var(--wd-accent)" />
          <path d="M103 39h73" stroke="#9eafc3" strokeWidth="3" strokeLinecap="round" />
          <rect x="83" y="51" width="153" height="13" rx="4" fill="#f2f5f9" />
          <circle cx="94" cy="57.5" r="3" fill="var(--wd-accent)" />
          <path d="M103 58h93" stroke="#9eafc3" strokeWidth="3" strokeLinecap="round" />
          <rect x="83" y="70" width="153" height="13" rx="4" fill="#f2f5f9" />
          <circle cx="94" cy="76.5" r="3" fill="var(--wd-accent)" />
          <path d="M103 77h59" stroke="#9eafc3" strokeWidth="3" strokeLinecap="round" />
        </>
      );
    case 10:
      return (
        <>
          <path d="M52 56h66M142 56h66M118 56l12-17M130 73l12-17" stroke="#a7bedb" strokeWidth="2" strokeDasharray="4 3" />
          <rect x="15" y="40" width="53" height="32" rx="9" fill="#edf5ff" stroke="#cfdef0" />
          <rect x="105" y="29" width="52" height="29" rx="9" fill="#f4efff" stroke="#ddd3f4" />
          <rect x="105" y="68" width="52" height="20" rx="8" fill="#eef7f5" stroke="#d0e7e1" />
          <rect x="193" y="40" width="51" height="32" rx="9" fill="#edf5ff" stroke="#cfdef0" />
          <circle cx="41" cy="56" r="6" fill="var(--wd-accent)" />
          <circle cx="131" cy="43" r="6" fill="#9564e7" />
          <circle cx="131" cy="78" r="4" fill="#52a992" />
          <circle cx="218" cy="56" r="6" fill="var(--wd-accent)" />
        </>
      );
    case 11:
      return (
        <>
          <rect x="14" y="30" width="139" height="53" rx="5" fill="#eef5ff" />
          <rect x="22" y="37" width="40" height="4" rx="2" fill="#70839c" />
          <rect x="22" y="48" width="52" height="5" rx="2.5" fill="#334e6c" />
          <rect x="22" y="58" width="37" height="3" rx="1.5" fill="#b5c3d4" />
          <rect x="22" y="68" width="24" height="8" rx="4" fill="var(--wd-accent)" />
          <rect x="89" y="39" width="52" height="35" rx="5" fill="#d8e8ff" />
          <rect x="176" y="29" width="55" height="63" rx="8" fill="#fff" stroke="#cbd8e8" />
          <rect x="181" y="34" width="45" height="53" rx="5" fill="#f2f6fc" />
          <rect x="187" y="43" width="33" height="4" rx="2" fill="#647b98" />
          <rect x="187" y="52" width="33" height="19" rx="3" fill="#dceaff" />
          <rect x="187" y="76" width="20" height="5" rx="2.5" fill="var(--wd-accent)" />
        </>
      );
    default:
      return (
        <>
          <rect x="14" y="29" width="50" height="55" rx="5" fill="#edf3fb" />
          <rect x="22" y="37" width="32" height="4" rx="2" fill="#607894" />
          <path d="M22 49h32M22 57h27M22 65h32M22 73h23" stroke="#bdcada" strokeWidth="3" strokeLinecap="round" />
          <rect x="73" y="29" width="171" height="55" rx="5" fill="#f7f9fc" />
          <rect x="83" y="37" width="75" height="5" rx="2.5" fill="#3c5878" />
          <rect x="83" y="49" width="149" height="3" rx="1.5" fill="#bcc9d8" />
          <rect x="83" y="57" width="138" height="3" rx="1.5" fill="#bcc9d8" />
          <rect x="83" y="65" width="151" height="3" rx="1.5" fill="#bcc9d8" />
          <rect x="83" y="74" width="70" height="3" rx="1.5" fill="#bcc9d8" />
        </>
      );
  }
};

const WebsiteServiceArt = ({ kind }) => (
  <span className={`wd-service-art wd-service-art--${kind}`}>
    <svg viewBox="0 0 260 100" focusable="false" aria-hidden="true">
      <rect x="1" y="1" width="258" height="98" rx="12" fill="#fff" stroke="#e4ebf3" />
      <path d="M1 22h258" stroke="#e8edf4" />
      <circle cx="13" cy="12" r="2.2" fill="#b93ffb" />
      <circle cx="21" cy="12" r="2.2" fill="#0082f9" />
      <circle cx="29" cy="12" r="2.2" fill="#d7e0eb" />
      <rect x="83" y="8.5" width="94" height="7" rx="3.5" fill="#f0f4f8" />
      <ServiceArt kind={kind} />
    </svg>
  </span>
);

export { WebsiteHeroVisual, WebsiteServiceArt, WebsiteShowcaseVisual };
