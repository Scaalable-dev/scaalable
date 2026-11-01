import {
  ArrowRight,
  Check,
  ChevronDown,
  CircleCheck,
  FileSearch,
  Gauge,
  Globe2,
  MapPin,
  Search,
  SlidersHorizontal,
  Tags,
  TrendingUp,
} from "lucide-react";

import { ServiceVisual } from "../../components/servicePage";

const SeoHeroVisual = () => (
  <ServiceVisual label="Search visibility · Illustrative" className="sp-visual--seo-hero">
    <div className="seo-hero-stage">
      <div className="seo-hero-grid" aria-hidden="true" />
      <div className="seo-hero-topline">
        <span>ORGANIC SEARCH OVERVIEW</span>
        <b><i /> ILLUSTRATIVE VIEW</b>
      </div>
      <div className="seo-serp">
        <div className="seo-serp__bar"><Search size={11} /><span>best workflow tools for growing teams</span><i>⌕</i></div>
        <div className="seo-serp__meta">Search results <i>·</i> All <i>·</i> Images <i>·</i> News</div>
        <article className="seo-result seo-result--top">
          <span className="seo-result__site"><i>S</i> northstar.example <b>›</b> Resources</span>
          <b className="seo-result__title">A clearer way to manage every workflow</b>
          <p>Explore thoughtful tools and practical guides to help your team bring everyday work together.</p>
          <span className="seo-result__tags"><i>Helpful guide</i><i>Reviewed content</i></span>
          <span className="seo-rank"><TrendingUp size={11} /> STRONGER VISIBILITY</span>
        </article>
        <article className="seo-result seo-result--other">
          <span className="seo-result__site"><i>N</i> other-example.com <b>›</b> Blog</span>
          <b className="seo-result__title">Ways to organise team projects</b>
          <p>Ideas and approaches for organising work across a growing business.</p>
        </article>
        <span className="seo-highlight"><i /> RELEVANT RESULT</span>
      </div>
      <div className="seo-keyword-panel">
        <div><span><Tags size={11} /> KEYWORD OPPORTUNITIES</span><i>SEARCH INTENT</i></div>
        <span><b>workflow tools</b><i>Informational</i><em>Relevant</em></span>
        <span><b>team workflow guide</b><i>Research</i><em>Relevant</em></span>
        <span><b>organise business tasks</b><i>Informational</i><em>Explore</em></span>
      </div>
      <div className="seo-traffic-card">
        <div className="seo-traffic-card__heading"><span><TrendingUp size={11} /> ORGANIC VISIBILITY</span><i>Illustrative trend</i></div>
        <div className="seo-chart">
          <div className="seo-chart__labels"><i>More</i><i>Search visibility</i><i>Less</i></div>
          <svg viewBox="0 0 170 62" preserveAspectRatio="none" aria-hidden="true">
            <path className="seo-chart__area" d="M0 49 C16 47 20 39 34 42 S53 34 65 37 S85 26 98 32 S119 24 129 25 S151 11 170 8 L170 62 L0 62Z" />
            <path className="seo-chart__line" d="M0 49 C16 47 20 39 34 42 S53 34 65 37 S85 26 98 32 S119 24 129 25 S151 11 170 8" />
            <circle cx="129" cy="25" r="3" /><circle cx="170" cy="8" r="3" />
          </svg>
        </div>
        <div className="seo-chart__months"><i>WEEK 1</i><i>WEEK 2</i><i>WEEK 3</i><i>WEEK 4</i></div>
      </div>
      <div className="seo-tech-signals">
        <span><Gauge size={12} /><i>Page experience</i><b><Check size={9} /> Reviewed</b></span>
        <span><FileSearch size={12} /><i>Indexing signals</i><b><Check size={9} /> Checked</b></span>
        <span><Globe2 size={12} /><i>Site health</i><b><Check size={9} /> Monitored</b></span>
      </div>
      <div className="seo-search-lens" aria-hidden="true"><Search size={19} /><i /></div>
      <div className="seo-discovery-path" aria-hidden="true"><i /><i /><i /></div>
    </div>
  </ServiceVisual>
);

const AnalyticsPanel = () => (
  <div className="seo-analytics">
    <div className="seo-analytics__top">
      <span><Globe2 size={12} /><b>SEARCH PERFORMANCE</b></span>
      <i><span /> Illustrative dashboard · Sample only</i>
    </div>
    <div className="seo-analytics__filters"><span>Search type <b>Web <ChevronDown size={9} /></b></span><span>Date range <b>Last 28 days <ChevronDown size={9} /></b></span><span>Pages <b>All pages <ChevronDown size={9} /></b></span></div>
    <div className="seo-analytics__metrics">
      <article><span><i /> IMPRESSIONS</span><b>Search visibility</b><small>How often pages appear</small></article>
      <article><span><i /> CLICKS</span><b>Organic visits</b><small>Searchers who visit</small></article>
      <article><span><i /> CTR</span><b>Click-through rate</b><small>Clicks ÷ impressions</small></article>
      <article><span><i /> POSITION</span><b>Keyword positions</b><small>Ranking trend by query</small></article>
    </div>
    <div className="seo-analytics__chart">
      <div className="seo-analytics__chart-head"><span><b>Organic search trend</b><i>Illustrative sample data</i></span><span><i><em /> Impressions</i><i><em /> Clicks</i></span></div>
      <div className="seo-analytics__plot">
        <div className="seo-analytics__axis"><i>Higher</i><i>Visibility</i><i>Lower</i></div>
        <svg viewBox="0 0 440 115" preserveAspectRatio="none" aria-hidden="true">
          <path className="seo-analytics__gridline" d="M0 20h440M0 54h440M0 88h440" />
          <path className="seo-analytics__line seo-analytics__line--impressions" d="M0 82 C24 78 30 55 58 61 S93 74 119 56 S157 48 180 53 S214 37 237 43 S274 58 297 39 S329 43 353 27 S391 35 415 15 S431 18 440 12" />
          <path className="seo-analytics__line seo-analytics__line--clicks" d="M0 98 C27 94 35 86 58 89 S93 91 119 79 S157 83 180 73 S214 67 237 75 S274 73 297 62 S329 67 353 50 S391 57 415 40 S431 41 440 34" />
        </svg>
      </div>
      <div className="seo-analytics__dates"><i>WEEK 1</i><i>WEEK 2</i><i>WEEK 3</i><i>WEEK 4</i></div>
    </div>
    <div className="seo-analytics__bottom">
      <span><Gauge size={12} /><i>Technical health</i><b><Check size={9} /> Review signals</b></span>
      <span><Tags size={12} /><i>Keyword visibility</i><b>Track relevant queries</b></span>
      <span><FileSearch size={12} /><i>Landing pages</i><b>Find next opportunities</b></span>
    </div>
  </div>
);

const SeoShowcaseVisual = () => (
  <ServiceVisual label="Search performance · Illustrative" className="sp-visual--seo-dashboard">
    <div className="seo-dashboard">
      <div className="seo-dashboard__header"><span><Search size={12} /><b>Organic search</b></span><i>Illustrative reporting view</i></div>
      <div className="seo-dashboard__metrics">
        <article><i>CLICKS</i><b>Organic visits</b><span><TrendingUp size={10} /> Trend over time</span></article>
        <article><i>IMPRESSIONS</i><b>Search visibility</b><span><TrendingUp size={10} /> Discovery signals</span></article>
        <article><i>CTR</i><b>Click-through rate</b><span><Search size={10} /> Query relevance</span></article>
      </div>
      <div className="seo-dashboard__main">
        <div className="seo-dashboard__chart">
          <div><b>Organic traffic trend</b><i>Illustrative sample</i></div>
          <svg viewBox="0 0 260 95" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 24h260M0 52h260M0 80h260" />
            <path className="seo-dashboard__area" d="M0 76 C20 74 25 61 46 65 S71 70 87 57 S115 61 132 48 S154 50 171 43 S193 49 207 31 S236 35 260 15 L260 95 L0 95Z" />
            <path className="seo-dashboard__line" d="M0 76 C20 74 25 61 46 65 S71 70 87 57 S115 61 132 48 S154 50 171 43 S193 49 207 31 S236 35 260 15" />
          </svg>
          <div className="seo-dashboard__weeks"><i>WEEK 1</i><i>WEEK 2</i><i>WEEK 3</i><i>WEEK 4</i></div>
        </div>
        <div className="seo-dashboard__rankings">
          <span><b>Keyword visibility</b><i>Query groups</i></span>
          <article><span>workflow tools</span><i>Relevant</i><b>↑</b></article>
          <article><span>team workflow guide</span><i>Tracked</i><b>↑</b></article>
          <article><span>business automation</span><i>Opportunity</i><b>→</b></article>
        </div>
      </div>
      <div className="seo-dashboard__foot"><span><Gauge size={11} /> Technical page experience</span><span><FileSearch size={11} /> Indexing signals</span><span><MapPin size={11} /> Local visibility</span></div>
    </div>
  </ServiceVisual>
);

const serviceScenes = [
  <>
    <rect x="28" y="30" width="204" height="45" rx="5" fill="#f6f9fd" stroke="#e1e9f2" />
    <circle cx="50" cy="49" r="8" fill="#e1edfc" /><path d="M48 49h4m-2-2v4" stroke="#4d87c2" strokeWidth="1.5" />
    <path d="M67 40h120M67 49h91M67 58h112" stroke="#a9bbcf" strokeWidth="3" strokeLinecap="round" />
    <rect x="192" y="38" width="29" height="21" rx="4" fill="#edf6f1" /><path d="m200 48 4 4 8-9" fill="none" stroke="#469879" strokeWidth="2" />
  </>,
  <>
    <rect x="27" y="30" width="206" height="45" rx="5" fill="#f6f9fd" stroke="#e1e9f2" />
    <rect x="36" y="37" width="45" height="31" rx="4" fill="#eaf2fc" />
    <path d="M91 39h127M91 48h113M91 57h121M91 66h73" stroke="#aabbd0" strokeWidth="3" strokeLinecap="round" />
    <circle cx="59" cy="52" r="7" fill="#adc4df" />
  </>,
  <>
    <rect x="31" y="30" width="198" height="45" rx="5" fill="#f7f9fc" stroke="#e1e9f2" />
    <circle cx="55" cy="51" r="14" fill="#eaf3fc" /><path d="M45 51h20m-10-10v20" stroke="#5d8fc2" strokeWidth="2" />
    <path d="M81 40h131M81 50h99M81 60h120" stroke="#aabbd0" strokeWidth="3" strokeLinecap="round" />
  </>,
  <>
    <circle cx="130" cy="50" r="7" fill="#5c8fc4" />
    <circle cx="54" cy="50" r="12" fill="#edf4fc" stroke="#dae6f2" /><circle cx="207" cy="50" r="12" fill="#edf4fc" stroke="#dae6f2" />
    <path d="M66 50h52M137 50h58" stroke="#8ba9c9" strokeWidth="2" strokeDasharray="3 3" />
    <circle cx="54" cy="50" r="4" fill="#7fa7d1" /><circle cx="207" cy="50" r="4" fill="#7fa7d1" />
    <path d="M130 38v-9M130 71v-9" stroke="#8ba9c9" strokeWidth="2" strokeDasharray="3 3" />
  </>,
  <>
    <rect x="32" y="29" width="90" height="44" rx="5" fill="#f5f8fc" stroke="#e1e8f0" />
    <rect x="138" y="29" width="90" height="44" rx="5" fill="#f5f8fc" stroke="#e1e8f0" />
    <path d="M77 62c-13 0-19-9-19-17s7-14 16-14c10 0 14 7 14 14 0 6-4 9-9 9-4 0-6-3-5-7l2-7" fill="none" stroke="#6693c2" strokeWidth="2" />
    <path d="m178 39 5 5 9-10" fill="none" stroke="#4c987b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M153 61h60" stroke="#b6c4d5" strokeWidth="3" strokeLinecap="round" />
  </>,
  <>
    <rect x="30" y="29" width="200" height="46" rx="5" fill="#f7f9fc" stroke="#e1e8f0" />
    <rect x="41" y="37" width="37" height="29" rx="4" fill="#edf4fc" />
    <circle cx="59" cy="48" r="6" fill="#8aabd0" /><path d="M48 61c2-7 20-7 22 0" fill="#b3c9e2" />
    <path d="M91 40h124M91 50h95M91 60h112" stroke="#aebed0" strokeWidth="3" strokeLinecap="round" />
    <circle cx="222" cy="40" r="3" fill="#55a183" />
  </>,
  <>
    <rect x="27" y="32" width="205" height="36" rx="18" fill="#f6f9fd" stroke="#dfe8f2" />
    <Search x="39" y="42" width="15" height="15" stroke="#718faf" strokeWidth="2" />
    <path d="M63 43h93M63 52h111" stroke="#aabbd0" strokeWidth="3" strokeLinecap="round" />
    <rect x="186" y="40" width="34" height="18" rx="9" fill="#eaf3fc" /><path d="M195 49h16" stroke="#6696c7" strokeWidth="2" strokeLinecap="round" />
  </>,
  <>
    <rect x="28" y="29" width="204" height="45" rx="5" fill="#f7f9fc" stroke="#e1e8f0" />
    <rect x="38" y="38" width="45" height="26" rx="4" fill="#eaf2fc" />
    <path d="M92 39h128M92 48h104M92 57h115M92 66h78" stroke="#adbed0" strokeWidth="3" strokeLinecap="round" />
  </>,
  <>
    <circle cx="130" cy="51" r="16" fill="#eef4fb" stroke="#dce6f1" />
    <path d="M130 41v10l7 4" fill="none" stroke="#5687b8" strokeWidth="2" strokeLinecap="round" />
    <circle cx="53" cy="51" r="10" fill="#f1edfb" stroke="#e2dcf1" /><circle cx="207" cy="51" r="10" fill="#edf6f2" stroke="#dcebe5" />
    <path d="M63 51h51M146 51h51" stroke="#8ba9c9" strokeWidth="2" strokeDasharray="3 3" />
  </>,
  <>
    <circle cx="130" cy="51" r="8" fill="#5f91c3" />
    <circle cx="57" cy="51" r="13" fill="#edf4fc" stroke="#dce6f1" /><circle cx="203" cy="51" r="13" fill="#edf4fc" stroke="#dce6f1" />
    <path d="M70 51h52M138 51h52" stroke="#8aa7c7" strokeWidth="2" strokeDasharray="3 3" />
    <path d="M57 44v14M203 44v14" stroke="#7199c3" strokeWidth="2" />
    <circle cx="130" cy="51" r="17" fill="none" stroke="#dce8f4" strokeDasharray="2 3" />
  </>,
  <>
    <rect x="30" y="31" width="200" height="42" rx="5" fill="#f7f9fc" stroke="#e1e8f0" />
    <path d="M42 61 66 54l23 3 24-17 23 10 24-8 26 5 29-15" fill="none" stroke="#5e91c6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M42 65h176" stroke="#d8e2ed" />
    <circle cx="114" cy="40" r="3" fill="#4284c4" /><circle cx="162" cy="42" r="3" fill="#8b75c4" />
  </>,
  <>
    <rect x="29" y="30" width="202" height="44" rx="5" fill="#f6f9fc" stroke="#e1e8f0" />
    <rect x="40" y="38" width="52" height="27" rx="4" fill="#edf4fc" /><rect x="102" y="38" width="52" height="27" rx="4" fill="#fff" stroke="#e5ebf2" /><rect x="164" y="38" width="55" height="27" rx="4" fill="#edf6f2" />
    <path d="M50 51h32M112 51h32M174 51h35" stroke="#8ca7c5" strokeWidth="3" strokeLinecap="round" />
    <path d="M92 51h10M154 51h10" stroke="#6b98c5" strokeWidth="2" strokeDasharray="2 2" />
  </>,
  <>
    <rect x="33" y="31" width="194" height="42" rx="5" fill="#f6f9fc" stroke="#e1e8f0" />
    <path d="M45 41h118M45 50h99M45 59h72" stroke="#aebed0" strokeWidth="3" strokeLinecap="round" />
    <circle cx="195" cy="51" r="14" fill="#eaf4fb" stroke="#d8e6f2" /><path d="M195 42v9l6 4" fill="none" stroke="#5786b6" strokeWidth="2" strokeLinecap="round" />
  </>,
];

const SeoServiceArt = ({ kind }) => (
  <span className={`seo-service-art seo-service-art--${kind}`}>
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

const processSteps = [
  { title: "Research", detail: "Queries & intent", icon: Search },
  { title: "Strategy", detail: "Priorities & plan", icon: Tags },
  { title: "Optimization", detail: "Technical & on-page", icon: SlidersHorizontal },
  { title: "Publishing", detail: "Useful content", icon: FileSearch },
  { title: "Monitoring", detail: "Signals & health", icon: Gauge },
  { title: "Growth", detail: "Learn & improve", icon: TrendingUp },
];

const SeoProcessJourney = () => (
  <div className="seo-process-journey" aria-label="SEO improvement workflow">
    <div className="seo-process-journey__header"><span>SEARCH DISCOVERY TO SUSTAINABLE IMPROVEMENT</span><i><span /> A CONTINUOUS PRACTICE</i></div>
    <div className="seo-process-journey__track">
      {processSteps.map(({ title, detail, icon: Icon }, index) => (
        <article className="seo-process-journey__step" key={title}>
          <span className={`seo-process-journey__icon seo-process-journey__icon--${index + 1}`}><Icon size={15} /></span>
          <span className="seo-process-journey__copy"><b>{title}</b><i>{detail}</i></span>
          {index < processSteps.length - 1 ? <ArrowRight className="seo-process-journey__arrow" size={12} aria-hidden="true" /> : null}
        </article>
      ))}
    </div>
    <div className="seo-process-journey__footer"><span><CircleCheck size={11} /> Useful content, healthy foundations, evidence-led next steps</span><span>Illustrative process</span></div>
  </div>
);

export { AnalyticsPanel, SeoHeroVisual, SeoProcessJourney, SeoServiceArt, SeoShowcaseVisual };
