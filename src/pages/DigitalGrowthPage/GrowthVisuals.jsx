import {
  ArrowUpRight,
  BarChart3,
  Check,
  CircleDollarSign,
  Globe2,
  Mail,
  MousePointer2,
  Search,
  ShoppingBag,
  UsersRound,
} from "lucide-react";

import { ServiceVisual } from "../../components/servicePage";

const channelItems = [
  { name: "Search", icon: Search },
  { name: "Paid", icon: CircleDollarSign },
  { name: "Content", icon: Globe2 },
  { name: "Email", icon: Mail },
];

export const GrowthHeroVisual = () => (
  <ServiceVisual label="Growth system · Illustrative view" className="sp-visual--growth-hero">
    <div className="growth-hero">
      <div className="growth-hero__grid" aria-hidden="true" />
      <div className="growth-hero__topline">
        <span><i /> CAMPAIGN WORKSPACE</span>
        <b>ILLUSTRATIVE</b>
      </div>
      <div className="growth-hero__dashboard">
        <div className="growth-hero__dash-head">
          <span><i><BarChart3 size={11} /></i><b>Growth overview</b></span>
          <small>Channel signals · Sample view</small>
        </div>
        <div className="growth-hero__metrics">
          <article><span>Audience reach</span><b>Across channels</b><i><ArrowUpRight size={10} /> Discover</i></article>
          <article><span>Engagement</span><b>Useful interactions</b><i><MousePointer2 size={10} /> Explore</i></article>
          <article><span>Lead journey</span><b>Tracked touchpoints</b><i><Check size={10} /> Connected</i></article>
        </div>
        <div className="growth-hero__chart">
          <div><b>Campaign activity</b><span>Illustrative trend <i /></span></div>
          <svg viewBox="0 0 360 94" preserveAspectRatio="none" aria-hidden="true">
            <path className="growth-hero__chart-grid" d="M0 20h360M0 48h360M0 76h360" />
            <path className="growth-hero__chart-area" d="M0 76 C24 68 32 71 52 62 S83 66 103 51 S132 56 153 46 S181 51 203 36 S231 44 250 32 S280 38 300 23 S331 30 360 11 L360 94H0Z" />
            <path className="growth-hero__chart-line" d="M0 76 C24 68 32 71 52 62 S83 66 103 51 S132 56 153 46 S181 51 203 36 S231 44 250 32 S280 38 300 23 S331 30 360 11" />
            <circle cx="250" cy="32" r="3" /><circle cx="360" cy="11" r="3" />
          </svg>
          <div className="growth-hero__chart-labels"><span>Awareness</span><span>Engagement</span><span>Conversion</span></div>
        </div>
        <div className="growth-hero__channels">
          {channelItems.map(({ name, icon: Icon }) => (
            <span key={name}><Icon size={10} />{name}<i /></span>
          ))}
        </div>
      </div>
      <div className="growth-hero__funnel">
        <span className="growth-hero__funnel-title">CUSTOMER JOURNEY <i>Sample</i></span>
        <div><i /><b>Awareness</b><small>Reach</small></div>
        <div><i /><b>Engagement</b><small>Interest</small></div>
        <div><i /><b>Conversion</b><small>Action</small></div>
        <div><i /><b>Retention</b><small>Growth</small></div>
      </div>
      <div className="growth-hero__target" aria-hidden="true"><i /><i /><i /><b /></div>
      <span className="growth-hero__lead"><UsersRound size={11} /> Qualified audience <i><Check size={8} /></i></span>
    </div>
  </ServiceVisual>
);

const ArtShapes = ({ type }) => {
  switch (type) {
    case 0:
      return <><rect x="13" y="12" width="70" height="46" rx="5" /><path d="M13 23h70M22 18h1m5 0h1m5 0h1" /><circle cx="25" cy="36" r="6" /><path d="M37 33h34M37 39h27M20 49h52" /></>;
    case 1:
      return <><rect x="15" y="12" width="66" height="47" rx="5" /><path d="M15 23h66M22 18h1m5 0h1m5 0h1M23 32h20v17H23zM48 32h25M48 38h20M48 44h17M23 54h50" /><circle cx="67" cy="50" r="3" /></>;
    case 2:
      return <><rect x="15" y="12" width="66" height="47" rx="5" /><path d="M15 23h66M22 18h1m5 0h1m5 0h1M23 32h25M23 38h34M23 44h27" /><rect x="57" y="42" width="17" height="9" rx="3" /></>;
    case 3:
      return <><rect x="15" y="12" width="66" height="47" rx="5" /><path d="M15 23h66M22 18h1m5 0h1m5 0h1M22 31h20v18H22zM47 31h26M47 37h21M47 43h24M22 54h51" /><circle cx="32" cy="37" r="4" /></>;
    case 4:
      return <><rect x="15" y="12" width="66" height="47" rx="5" /><path d="M15 23h66M22 18h1m5 0h1m5 0h1M23 31h18v20H23zM48 31h25v8H48zM48 44h25v7H48z" /><circle cx="32" cy="36" r="3" /><path d="M29 44h6" /></>;
    case 5:
      return <><rect x="15" y="12" width="66" height="47" rx="5" /><path d="M15 23h66M22 18h1m5 0h1m5 0h1M23 32h12v17H23zM42 32h31v5H42zM42 42h24v5H42z" /><circle cx="57" cy="52" r="4" /><path d="M57 48v-3" /></>;
    case 6:
      return <><rect x="15" y="12" width="66" height="47" rx="5" /><path d="M15 23h66M22 18h1m5 0h1m5 0h1M22 32h16v16H22zM47 31h26M47 37h18M47 44h22" /><path d="m25 40 4-4 4 3 4-6" /></>;
    default:
      return <><rect x="15" y="12" width="66" height="47" rx="5" /><path d="M15 23h66M22 18h1m5 0h1m5 0h1M24 49V40m11 9V34m11 15V37m11 12V28m11 21V32m-39 21h49" /><path d="m22 37 12-8 12 3 12-11 13 3" /></>;
  }
};

export const GrowthServiceArt = ({ index }) => (
  <div className={`growth-service-art growth-service-art--${index}`} aria-hidden="true">
    <svg viewBox="0 0 96 70" fill="none">
      <defs>
        <linearGradient id={`growth-art-${index}`} x1="15" y1="12" x2="82" y2="59" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F8FBFF" />
          <stop offset="1" stopColor="#EAF3FF" />
        </linearGradient>
      </defs>
      <rect x="8" y="7" width="80" height="57" rx="8" fill={`url(#growth-art-${index})`} stroke="#D8E6F5" />
      <g stroke="#7BA9D9" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <ArtShapes type={index} />
      </g>
      <circle cx="77" cy="51" r="5.5" fill="#fff" stroke="#C9DDED" />
      {index === 0 ? <path d="m75 51 1.5 1.5 3-3" stroke="#19A67A" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /> : null}
    </svg>
    <i className="growth-service-art__accent" />
  </div>
);

export const GrowthShowcaseVisual = () => (
  <ServiceVisual label="Campaign performance · Illustrative" className="sp-visual--growth-report">
    <div className="growth-report">
      <div className="growth-report__header">
        <span><i><BarChart3 size={11} /></i><b>Campaign performance</b></span>
        <small><i /> SAMPLE VIEW · NOT LIVE DATA</small>
      </div>
      <div className="growth-report__filters"><span>All channels <b>⌄</b></span><span>Campaign period <b>⌄</b></span><i>Illustrative reporting</i></div>
      <div className="growth-report__metrics">
        <article><i>REACH</i><b>Audience discovery</b><span><UsersRound size={10} /> Channel reach</span></article>
        <article><i>ENGAGEMENT</i><b>Useful interactions</b><span><MousePointer2 size={10} /> Content signals</span></article>
        <article><i>LEADS</i><b>Conversion activity</b><span><Check size={10} /> Configured events</span></article>
      </div>
      <div className="growth-report__main">
        <div className="growth-report__chart">
          <div><b>Audience journey</b><span>Illustrative trend</span></div>
          <svg viewBox="0 0 270 94" preserveAspectRatio="none" aria-hidden="true">
            <path className="growth-report__grid" d="M0 18h270M0 46h270M0 74h270" />
            <path className="growth-report__area" d="M0 75 C19 72 26 61 43 65 S69 57 84 54 S110 60 128 43 S155 48 171 38 S196 41 211 29 S239 34 270 12L270 94H0Z" />
            <path className="growth-report__line" d="M0 75 C19 72 26 61 43 65 S69 57 84 54 S110 60 128 43 S155 48 171 38 S196 41 211 29 S239 34 270 12" />
          </svg>
          <div className="growth-report__axis"><span>Awareness</span><span>Engagement</span><span>Conversion</span><span>Retention</span></div>
        </div>
        <div className="growth-report__channels">
          <b>Channel mix</b><small>Activity by source</small>
          {[
            ["Organic search", 78, Search],
            ["Paid campaigns", 62, CircleDollarSign],
            ["Content", 51, Globe2],
            ["Email", 37, Mail],
          ].map(([label, amount, Icon]) => (
            <div className="growth-report__channel" key={label}>
              <span><Icon size={9} />{label}</span>
              <i><em style={{ width: `${amount}%` }} /></i>
            </div>
          ))}
        </div>
      </div>
      <div className="growth-report__footer"><span><ShoppingBag size={10} /> Website journeys</span><span><Check size={9} /> Conversion tracking configured</span><i>Sample interface</i></div>
    </div>
  </ServiceVisual>
);

const journeySteps = [
  ["01", "Discover", Search],
  ["02", "Attract", Globe2],
  ["03", "Engage", UsersRound],
  ["04", "Convert", MousePointer2],
  ["05", "Retain", Mail],
  ["06", "Scale", BarChart3],
];

export const GrowthJourney = () => (
  <div className="growth-journey" aria-label="Illustrative customer growth journey">
    {journeySteps.map(([number, label, Icon], index) => (
      <div className="growth-journey__step" key={label}>
        <span className="growth-journey__icon"><Icon size={15} /></span>
        <span className="growth-journey__label">{label}</span>
        <i className="growth-journey__number">{number}</i>
        {index < journeySteps.length - 1 ? <span className="growth-journey__connector" aria-hidden="true" /> : null}
      </div>
    ))}
    <span className="growth-journey__note">CONNECTED CUSTOMER JOURNEY · ILLUSTRATIVE</span>
  </div>
);
