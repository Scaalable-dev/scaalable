import {
  ArrowRight,
  Check,
  ChevronRight,
  CircleHelp,
  Component,
  MousePointer2,
  Plus,
  Smartphone,
  Tablet,
} from "lucide-react";

import { ServiceVisual } from "../../components/servicePage";

const DesignCanvas = () => (
  <div className="ux-canvas">
    <div className="ux-canvas__toolbar">
      <span className="ux-brand-mark">S</span>
      <b>Studio board</b>
      <span className="ux-toolbar__crumb">/</span>
      <i>Product overview</i>
      <span className="ux-toolbar__avatars"><i>A</i><i>M</i><i>+</i></span>
    </div>
    <div className="ux-canvas__workspace">
      <aside className="ux-layers">
        <div className="ux-panel-title"><b>Layers</b><Plus size={10} /></div>
        <span className="ux-layer ux-layer--selected"><Component size={10} /> Desktop</span>
        <span className="ux-layer"><ChevronRight size={9} /> Navigation</span>
        <span className="ux-layer"><ChevronRight size={9} /> Overview hero</span>
        <span className="ux-layer ux-layer--indent">Heading</span>
        <span className="ux-layer ux-layer--indent">Primary action</span>
        <span className="ux-layer"><ChevronRight size={9} /> Activity panel</span>
        <div className="ux-layer__guide"><i /> 8 px grid</div>
      </aside>

      <div className="ux-artboard-area">
        <div className="ux-artboard-caption"><span>Product overview</span><i>1440 × 900</i></div>
        <div className="ux-artboard">
          <div className="ux-product-nav">
            <span className="ux-product-mark">n</span><b>northstar</b>
            <span className="ux-product-link ux-product-link--active">Overview</span>
            <span className="ux-product-link">Activity</span>
            <span className="ux-product-link">Reports</span>
            <span className="ux-product-avatar">AM</span>
          </div>
          <div className="ux-product-content">
            <div className="ux-product-heading">
              <span><i>MONDAY, OCTOBER 26</i><b>Your workspace, at a glance.</b></span>
              <span className="ux-product-action"><Plus size={9} /> New project</span>
            </div>
            <div className="ux-product-metrics">
              <article><i>ACTIVE PROJECTS</i><b>12</b><span><em /> 2 added this week</span></article>
              <article><i>TEAM MOMENTUM</i><b>84%</b><span><em /> On track this month</span></article>
              <article><i>NEXT MILESTONE</i><b>Oct 30</b><span>Website launch</span></article>
            </div>
            <div className="ux-product-lower">
              <article className="ux-progress-card">
                <span><b>Project progress</b><i>View all <ArrowRight size={8} /></i></span>
                <div><i><b>Website redesign</b><em>72%</em></i><span><b>Design system</b><em>48%</em></span><span><b>Customer portal</b><em>31%</em></span></div>
              </article>
              <article className="ux-activity-card">
                <b>Recent activity</b>
                <span><i className="ux-activity-avatar">JL</i><em><b>Jordan Lee</b><i> shared a prototype</i></em></span>
                <span><i className="ux-activity-avatar ux-activity-avatar--violet">AM</i><em><b>Alex Morgan</b><i> left a comment</i></em></span>
              </article>
            </div>
          </div>
          <div className="ux-selection ux-selection--hero"><i /><b>Hero / Content</b><em>Auto layout</em></div>
          <div className="ux-selection ux-selection--button"><i /><b>New project</b></div>
          <MousePointer2 className="ux-cursor" size={16} fill="#196bc1" />
          <span className="ux-cursor-label">Alex Morgan</span>
        </div>
      </div>

      <aside className="ux-properties">
        <div className="ux-panel-title"><b>Design system</b><CircleHelp size={10} /></div>
        <span className="ux-properties__section">COLOR TOKENS</span>
        <div className="ux-swatches">
          <i className="ux-swatch--blue" /><i className="ux-swatch--ink" /><i className="ux-swatch--lavender" /><i className="ux-swatch--mint" />
        </div>
        <span className="ux-token-names"><i>Brand</i><i>Ink</i><i>Accent</i><i>Success</i></span>
        <span className="ux-properties__section">TYPE SCALE</span>
        <div className="ux-type-sample"><b>Aa</b><span><strong>Heading / 24</strong><i>Inter · Semibold</i></span></div>
        <div className="ux-type-sample ux-type-sample--body"><b>Aa</b><span><strong>Body / 14</strong><i>Inter · Regular</i></span></div>
        <span className="ux-properties__section">COMPONENTS</span>
        <div className="ux-component-preview"><b>Primary button</b><span>Secondary</span></div>
        <div className="ux-input-preview"><i>Search projects</i><span>⌕</span></div>
        <div className="ux-properties__footer"><span><i /> 8 px spacing</span><span>⌘ K</span></div>
      </aside>
    </div>
    
  </div>
);

const UxHeroVisual = () => (
  <ServiceVisual label="Design studio / Product overview" className="sp-visual--ux-studio">
    <div className="ux-stage">
      <div className="ux-stage__grid" aria-hidden="true" />
      <div className="ux-wireframe">
        <div className="ux-wireframe__head"><i /> LOW-FIDELITY</div>
        <div className="ux-wireframe__nav"><i /><b /><b /><b /></div>
        <div className="ux-wireframe__hero"><i /><b /><b /><em /></div>
        <div className="ux-wireframe__blocks"><i /><i /><i /></div>
        <span className="ux-wireframe__caption">Structure before surface</span>
      </div>
      <span className="ux-transform"><ArrowRight size={17} /><i>REFINE</i></span>
      <div className="ux-design-board">
        <div className="ux-board-header"><span><i /> DESIGN / OVERVIEW</span><b><i /> COMPONENTS</b></div>
        <DesignCanvas />
      </div>
      <div className="ux-prototype-path ux-prototype-path--one" aria-hidden="true"><i /><i /><i /></div>
      <div className="ux-prototype-path ux-prototype-path--two" aria-hidden="true"><i /><i /><i /></div>
      <div className="ux-prototype-screen ux-prototype-screen--one">
        <span><i /><b /></span><i /><i /><b />
      </div>
      <div className="ux-prototype-screen ux-prototype-screen--two">
        <span><i /><b /></span><i /><i /><b />
      </div>
      <div className="ux-responsive-badge">
        <span><Tablet size={11} /> Tablet</span><i /><span><Smartphone size={11} /> Mobile</span>
      </div>
      <div className="ux-insight-badge"><span><Check size={11} /></span><b>Validated with users</b></div>
    </div>
  </ServiceVisual>
);

const DesignSystemShowcase = () => (
  <ServiceVisual label="Design system / prototype flow" className="sp-visual--ux-system">
    <div className="ux-system-board">
      <div className="ux-system-topline">
        <span><b>Northstar</b><i>Product design system</i></span>
        <b><i /> CORE LIBRARY · V2.4</b>
      </div>
      <div className="ux-system-layout">
        <section className="ux-library">
          <div className="ux-system-label"><span>FOUNDATIONS</span><i>01 — 04</i></div>
          <div className="ux-foundation">
            <span>Color</span>
            <div className="ux-foundation-swatches"><i /><i /><i /><i /><i /><i /></div>
          </div>
          <div className="ux-foundation ux-foundation--type">
            <span>Typography</span><b>Ag</b><i>Inter · 24 / 16 / 12</i>
          </div>
          <div className="ux-foundation ux-foundation--spacing">
            <span>Spacing</span><i /><i /><i /><i /><b>4 · 8 · 16 · 24</b>
          </div>
          <div className="ux-system-label ux-system-label--components"><span>COMPONENTS</span><i>12 PATTERNS</i></div>
          <div className="ux-component-row"><span>Button</span><b>Primary</b><i>Secondary</i></div>
          <div className="ux-component-row ux-component-row--input"><span>Input field</span><i>Search projects <b>⌕</b></i></div>
          <div className="ux-component-row ux-component-row--nav"><span>Navigation</span><i><b>Overview</b> Activity&nbsp;&nbsp; Reports</i></div>
        </section>
        <section className="ux-prototype">
          <div className="ux-system-label"><span>PROTOTYPE FLOW</span><i>Workspace / 03 screens</i></div>
          <div className="ux-flow-map">
            <div className="ux-flow-line ux-flow-line--horizontal"><i /></div>
            <div className="ux-flow-line ux-flow-line--vertical"><i /></div>
            <div className="ux-flow-node ux-flow-node--start">
              <span className="ux-flow-screen"><i /><b /><em /></span>
              <b>Overview</b><i>Entry point</i>
            </div>
            <div className="ux-flow-node ux-flow-node--detail">
              <span className="ux-flow-screen ux-flow-screen--detail"><i /><b /><b /><em /></span>
              <b>Project detail</b><i>Tap card →</i>
            </div>
            <div className="ux-flow-node ux-flow-node--success">
              <span className="ux-flow-screen ux-flow-screen--success"><i /><b /><em /></span>
              <b>Confirmation</b><i>Task complete</i>
            </div>
            <div className="ux-flow-connector ux-flow-connector--one"><i /></div>
            <div className="ux-flow-connector ux-flow-connector--two"><i /></div>
          </div>
          <div className="ux-flow-feedback"><span><MousePointer2 size={11} /> Clickable prototype</span><span><Check size={11} /> 3 interactions mapped</span></div>
        </section>
      </div>
      <div className="ux-system-footer"><span><Check size={11} /> Reusable by design. Consistent at every breakpoint.</span><b><i /> LIBRARY PUBLISHED</b></div>
    </div>
  </ServiceVisual>
);

const ServiceArtwork = ({ type }) => {
  const drawings = [
    <>
      <circle cx="130" cy="50" r="20" fill="#e5efff" /><circle cx="130" cy="43" r="7" fill="#72a1dc" />
      <path d="M116 64c2-10 26-10 28 0" fill="#a8c4e7" />
      <path d="M31 38h38M31 48h27M31 58h33M31 68h21" stroke="#b6c4d6" strokeWidth="3" strokeLinecap="round" />
      <path d="M177 38h37M177 48h46M177 58h33M177 68h42" stroke="#b6c4d6" strokeWidth="3" strokeLinecap="round" />
      <circle cx="22" cy="38" r="2" fill="#4184d1" /><circle cx="22" cy="58" r="2" fill="#9273ca" />
    </>,
    <>
      <rect x="24" y="30" width="57" height="43" rx="4" fill="#f3f6fa" stroke="#d7e0eb" />
      <rect x="91" y="30" width="57" height="43" rx="4" fill="#f3f6fa" stroke="#d7e0eb" />
      <rect x="158" y="30" width="57" height="43" rx="4" fill="#f3f6fa" stroke="#d7e0eb" />
      <path d="M32 40h40M32 47h28M32 57h40M32 65h23M99 40h40M99 47h28M99 57h40M99 65h23M166 40h40M166 47h28M166 57h40M166 65h23" stroke="#b9c7d7" strokeWidth="3" strokeLinecap="round" />
    </>,
    <>
      <path d="M50 52h78M130 52h78" stroke="#9fb4ce" strokeWidth="2" strokeDasharray="4 4" />
      <circle cx="45" cy="52" r="13" fill="#e7f0ff" stroke="#97b9e5" /><circle cx="130" cy="52" r="13" fill="#f0ebff" stroke="#b5a4df" /><circle cx="215" cy="52" r="13" fill="#e8f5f0" stroke="#9ccbb9" />
      <circle cx="45" cy="52" r="4" fill="#4a86d0" /><circle cx="130" cy="52" r="4" fill="#8870c9" /><circle cx="215" cy="52" r="4" fill="#54a386" />
      <path d="M37 76h16M122 76h16M207 76h16" stroke="#b6c3d3" strokeWidth="3" strokeLinecap="round" />
    </>,
    <>
      <rect x="20" y="28" width="220" height="52" rx="5" fill="#f3f7fd" />
      <rect x="29" y="37" width="66" height="34" rx="4" fill="#e2ecfa" />
      <rect x="104" y="37" width="126" height="13" rx="3" fill="#fff" />
      <rect x="104" y="57" width="85" height="4" rx="2" fill="#b9c6d6" />
      <rect x="104" y="66" width="57" height="7" rx="3.5" fill="#2874c6" />
    </>,
    <>
      <rect x="20" y="28" width="220" height="52" rx="5" fill="#f7f9fc" />
      <rect x="28" y="35" width="48" height="38" rx="4" fill="#edf3fb" />
      <rect x="84" y="35" width="71" height="38" rx="4" fill="#fff" stroke="#e4eaf2" />
      <rect x="163" y="35" width="69" height="38" rx="4" fill="#fff" stroke="#e4eaf2" />
      <path d="M35 64h34M91 64h57M170 64h53" stroke="#387cc4" strokeWidth="3" strokeLinecap="round" />
      <path d="M92 49l10-6 10 3 10-7 12 4 9-7" fill="none" stroke="#6396cb" strokeWidth="2" />
    </>,
    <>
      <rect x="23" y="28" width="57" height="52" rx="5" fill="#eef4fd" />
      <rect x="101" y="28" width="57" height="52" rx="5" fill="#f3efff" />
      <rect x="179" y="28" width="57" height="52" rx="5" fill="#eff8f5" />
      <rect x="32" y="36" width="38" height="5" rx="2.5" fill="#7793b6" />
      <rect x="32" y="47" width="38" height="23" rx="3" fill="#fff" />
      <rect x="110" y="36" width="38" height="5" rx="2.5" fill="#8d7ac1" />
      <rect x="110" y="47" width="38" height="12" rx="3" fill="#fff" />
      <rect x="187" y="36" width="38" height="5" rx="2.5" fill="#64a38e" />
      <rect x="187" y="47" width="38" height="23" rx="3" fill="#fff" />
    </>,
    <>
      <rect x="28" y="32" width="49" height="38" rx="5" fill="#edf3fb" stroke="#d6e0ed" />
      <rect x="105" y="32" width="49" height="38" rx="5" fill="#edf3fb" stroke="#d6e0ed" />
      <rect x="182" y="32" width="49" height="38" rx="5" fill="#edf3fb" stroke="#d6e0ed" />
      <path d="M77 51h25M154 51h25" stroke="#8ba8ca" strokeWidth="2" strokeDasharray="3 3" />
      <circle cx="102" cy="51" r="3" fill="#4d83c4" /><circle cx="179" cy="51" r="3" fill="#4d83c4" />
      <rect x="37" y="40" width="30" height="4" rx="2" fill="#98abc3" /><rect x="114" y="40" width="30" height="4" rx="2" fill="#98abc3" /><rect x="191" y="40" width="30" height="4" rx="2" fill="#98abc3" />
    </>,
    <>
      <rect x="33" y="30" width="97" height="44" rx="5" fill="#f2f6fb" />
      <rect x="46" y="39" width="38" height="4" rx="2" fill="#8195ad" />
      <path d="M46 51h65M46 59h54M46 67h45" stroke="#bac6d5" strokeWidth="3" strokeLinecap="round" />
      <circle cx="180" cy="51" r="19" fill="#e8f5ef" /><path d="m171 51 6 6 12-13" fill="none" stroke="#40a27e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M157 79h47" stroke="#c3cfdd" strokeWidth="3" strokeLinecap="round" />
    </>,
    <>
      <rect x="25" y="29" width="89" height="48" rx="5" fill="#f5f7fa" />
      <rect x="144" y="29" width="89" height="48" rx="5" fill="#eef5ff" />
      <path d="M35 39h40M35 47h56M35 55h48" stroke="#c0cad7" strokeWidth="3" strokeLinecap="round" />
      <path d="M154 39h49M154 47h63M154 55h44" stroke="#9fb3cd" strokeWidth="3" strokeLinecap="round" />
      <path d="M83 47h43" stroke="#568bc8" strokeWidth="2" strokeDasharray="3 3" /><path d="m120 42 6 5-6 5" fill="none" stroke="#568bc8" strokeWidth="2" />
      <circle cx="74" cy="68" r="4" fill="#c7d0dc" /><circle cx="193" cy="68" r="4" fill="#3987cc" />
    </>,
  ];

  return (
    <span className={`ux-service-art ux-service-art--${type}`}>
      <svg viewBox="0 0 260 100" focusable="false" aria-hidden="true">
        <rect x="1" y="1" width="258" height="98" rx="12" fill="#fff" stroke="#e4ebf3" />
        <path d="M1 22h258" stroke="#e8edf4" />
        <circle cx="13" cy="12" r="2.2" fill="#b93ffb" />
        <circle cx="21" cy="12" r="2.2" fill="#0082f9" />
        <circle cx="29" cy="12" r="2.2" fill="#d7e0eb" />
        <rect x="83" y="8.5" width="94" height="7" rx="3.5" fill="#f0f4f8" />
        {drawings[type]}
      </svg>
    </span>
  );
};

export { DesignSystemShowcase, ServiceArtwork, UxHeroVisual };
