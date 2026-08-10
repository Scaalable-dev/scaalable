/* ==========================================================================
   SERVICE ARTWORK

   One drawing per capability, so a card shows the thing it sells rather than
   the same generic panel seven times over.

   Vector rather than downloaded imagery, for three reasons: stock art carries
   licence terms we would have to track, seven raster mockups would add
   hundreds of kilobytes to a section most visitors scroll past, and none of it
   would pick up the card's own accent colour. These do — every drawing reads
   `currentColor` for its neutral ink and `--srail-fig-accent` for its
   highlight, so the same file looks native on a grey, near-black or brand
   card.
   ========================================================================== */

const FIGURE_PROPS = {
  viewBox: "0 0 200 140",
  className: "srail__fig",
  fill: "none",
  strokeWidth: 2.4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
  focusable: "false",
};

/* Website Design & Development — a browser window mid-layout. */
const WebArt = () => (
  <svg {...FIGURE_PROPS}>
    <rect className="plate" x="16" y="14" width="168" height="112" rx="12" />
    <rect className="ink" x="16" y="14" width="168" height="112" rx="12" />

    <path className="ink" d="M16 40 H184" />
    <circle className="ink-fill" cx="29" cy="27" r="2.8" />
    <circle className="ink-fill" cx="39" cy="27" r="2.8" />
    <circle className="ink-fill" cx="49" cy="27" r="2.8" />
    <rect className="ink" x="62" y="21" width="104" height="12" rx="6" />

    <rect className="acc-soft" x="30" y="54" width="66" height="42" rx="8" />
    <rect className="acc" x="30" y="54" width="66" height="42" rx="8" />

    <path className="ink" d="M110 62 H170 M110 74 H156 M110 86 H166" />

    <rect className="acc-fill" x="30" y="104" width="44" height="12" rx="6" />
    <path className="ink" d="M88 110 H142" />
  </svg>
);

/* UI/UX Engineering — two artboards and a cursor picking a component. */
const UxUiArt = () => (
  <svg {...FIGURE_PROPS}>
    <rect className="ink" x="14" y="20" width="92" height="82" rx="10" />
    <path className="ink" d="M14 38 H106" />
    <circle className="ink-fill" cx="26" cy="29" r="2.6" />

    <rect className="plate" x="66" y="44" width="120" height="80" rx="10" />
    <rect className="acc" x="66" y="44" width="120" height="80" rx="10" />

    <circle className="ink" cx="88" cy="66" r="8" />
    <path className="ink" d="M106 60 H168 M106 72 H148" />

    <rect className="ink-fill" x="82" y="86" width="62" height="8" rx="4" />
    <rect className="acc-fill" x="82" y="100" width="38" height="8" rx="4" />

    <path className="acc-fill" d="M152 84 l10 30 4.6-12.6 12.6-4.6z" />
  </svg>
);

/* Search Engine Optimization — a query, a first-place result, a rising trend. */
const SeoArt = () => (
  <svg {...FIGURE_PROPS}>
    <rect className="plate" x="18" y="14" width="164" height="30" rx="15" />
    <rect className="ink" x="18" y="14" width="164" height="30" rx="15" />
    <circle className="acc" cx="40" cy="29" r="7" />
    <path className="acc" d="M45.5 34.5 L52 41" />
    <path className="ink" d="M64 29 H142" />

    <rect className="acc-soft" x="18" y="56" width="164" height="28" rx="8" />
    <rect className="acc" x="18" y="56" width="164" height="28" rx="8" />
    <rect className="acc-fill" x="30" y="65" width="10" height="10" rx="3" />
    <path className="ink-strong" d="M52 70 H130" />

    <path className="ink" d="M18 98 H118 M18 112 H88" />

    <path className="acc" d="M134 120 L150 104 L160 112 L182 88" />
    <path className="acc" d="M170 88 H182 V100" />
  </svg>
);

/* AI Automation — a processing core wired to the systems around it. */
const AiArt = () => (
  <svg {...FIGURE_PROPS}>
    <circle className="ink" cx="34" cy="38" r="10" />
    <circle className="ink" cx="168" cy="44" r="10" />
    <circle className="ink" cx="40" cy="108" r="10" />
    <circle className="ink" cx="162" cy="106" r="10" />

    <path
      className="ink"
      d="M43 44 L78 60 M159 50 L124 62 M48 102 L78 84 M153 100 L124 86"
    />

    <rect className="acc-soft" x="78" y="52" width="46" height="38" rx="12" />
    <rect className="acc" x="78" y="52" width="46" height="38" rx="12" />
    <path className="acc" d="M90 52 V44 M112 52 V44 M90 90 V98 M112 90 V98" />
    <circle className="acc-fill" cx="93" cy="71" r="3.4" />
    <circle className="acc-fill" cx="109" cy="71" r="3.4" />

    <path
      className="acc-fill"
      d="M146 14 l3.4 9.1 9.1 3.4 -9.1 3.4 -3.4 9.1 -3.4 -9.1 -9.1 -3.4 9.1 -3.4z"
    />
  </svg>
);

/* Software Engineering — an editor with a gutter and a live caret. */
const SoftwareArt = () => (
  <svg {...FIGURE_PROPS}>
    <rect className="plate" x="14" y="16" width="172" height="108" rx="12" />
    <rect className="ink" x="14" y="16" width="172" height="108" rx="12" />

    <path className="ink" d="M46 16 V124" />
    <circle className="ink-fill" cx="30" cy="40" r="2.4" />
    <circle className="ink-fill" cx="30" cy="58" r="2.4" />
    <circle className="ink-fill" cx="30" cy="76" r="2.4" />
    <circle className="ink-fill" cx="30" cy="94" r="2.4" />

    <path className="ink" d="M60 40 H128" />
    <path className="acc" d="M74 58 H150" />
    <path className="ink" d="M74 76 H132 M88 94 H164 M60 112 H104" />

    <rect className="acc-fill" x="112" y="107" width="9" height="10" rx="2" />
  </svg>
);

/* Digital Growth — measured channels under a climbing trend line. */
const GrowthArt = () => (
  <svg {...FIGURE_PROPS}>
    <path
      className="acc-soft"
      d="M32 92 L78 70 L112 80 L150 44 L180 30 V118 H32 Z"
      strokeWidth="0"
    />

    <rect className="ink-fill" x="36" y="88" width="16" height="30" rx="4" />
    <rect className="ink-fill" x="70" y="76" width="16" height="42" rx="4" />
    <rect className="ink-fill" x="104" y="84" width="16" height="34" rx="4" />
    <rect className="ink-fill" x="138" y="58" width="16" height="60" rx="4" />

    <path className="ink" d="M24 118 H182" />

    <path className="acc" d="M32 92 L78 70 L112 80 L150 44 L180 30" />
    <circle className="acc-fill" cx="78" cy="70" r="4" />
    <circle className="acc-fill" cx="112" cy="80" r="4" />
    <circle className="acc-fill" cx="180" cy="30" r="6" />
  </svg>
);

/* IT Support — systems monitored, patched and held at uptime. */
const SupportArt = () => (
  <svg {...FIGURE_PROPS}>
    <path
      className="acc-soft"
      d="M58 16 L92 28 V62 C92 88 76 102 58 110 C40 102 24 88 24 62 V28 Z"
      strokeWidth="0"
    />
    <path
      className="ink"
      d="M58 16 L92 28 V62 C92 88 76 102 58 110 C40 102 24 88 24 62 V28 Z"
    />
    <path className="acc" strokeWidth="3.2" d="M44 60 L54 70 L74 48" />

    <rect className="plate" x="110" y="22" width="72" height="24" rx="6" />
    <rect className="ink" x="110" y="22" width="72" height="24" rx="6" />
    <circle className="acc-fill" cx="122" cy="34" r="3.2" />
    <path className="ink" d="M134 34 H170" />

    <rect className="plate" x="110" y="54" width="72" height="24" rx="6" />
    <rect className="ink" x="110" y="54" width="72" height="24" rx="6" />
    <circle className="ink-fill" cx="122" cy="66" r="3.2" />
    <path className="ink" d="M134 66 H162" />

    <path className="acc" d="M110 104 H128 L136 92 L146 118 L156 104 H182" />
  </svg>
);

/* Keyed by capability id, so the services page stays the single source of
   truth for which capabilities exist. A capability with no drawing yet simply
   renders none rather than breaking the card. */
const ART = {
  web: WebArt,
  uxui: UxUiArt,
  seo: SeoArt,
  ai: AiArt,
  software: SoftwareArt,
  growth: GrowthArt,
  itsupport: SupportArt,
};

/* Exported as a component rather than as the map: a module that mixes
   component definitions with a non-component export opts the whole file out of
   Fast Refresh. */
const ServiceArt = ({ id }) => {
  const Figure = ART[id];

  return Figure ? <Figure /> : null;
};

export default ServiceArt;
