import { motion, useReducedMotion } from "framer-motion";

import {
  PATHWAY_D,
  PATHWAY_VIEWBOX,
  asPercent,
  pathwayPoints,
} from "./whoWeHelpData";

const SWAP_EASE = [0.2, 0.8, 0.2, 1];

const NodeLabel = ({ audienceId, children }) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.span
      key={audienceId}
      className="wwh-node__label"
      initial={reduceMotion ? false : { opacity: 0, y: 7 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.4, ease: SWAP_EASE }}
    >
      {children}
    </motion.span>
  );
};

/**
 * Abstract pathway: business need -> Scaalable solution -> business result.
 *
 * The curve and the moving signal are SVG; the three nodes are positioned HTML
 * so they can carry real icons, text and hover states. Both read their
 * coordinates from the same source, so the nodes always sit on the line.
 */
const SignalPathway = ({ audience }) => {
  const { need, solution, result } = audience.nodes;

  const NeedIcon = need.icon;
  const SolutionIcon = solution.icon;
  const ResultIcon = result.icon;

  return (
    <div className="wwh-stage">
      {/* Technical grid. CSS rather than an SVG pattern so the cells stay
          square however the stage is proportioned, and so the left-edge fade
          is a plain mask. */}
      <span className="wwh-stage__grid" aria-hidden="true" />

      <span className="wwh-stage__ambience" aria-hidden="true" />

      <svg
        className="wwh-stage__svg"
        viewBox={`0 0 ${PATHWAY_VIEWBOX.width} ${PATHWAY_VIEWBOX.height}`}
        preserveAspectRatio="none"
        role="img"
        aria-label={`Pathway diagram: ${need.label} flows through ${solution.label} and becomes ${result.label}.`}
      >
        {/* Stretching the viewBox would thicken the stroke with it; this keeps
            the line an even hairline at every panel width. */}
        <path
          className="wwh-stage__line"
          d={PATHWAY_D}
          vectorEffect="non-scaling-stroke"
        />

        <path
          className="wwh-stage__signal"
          d={PATHWAY_D}
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* Need */}
      <div className="wwh-node wwh-node--outer" style={asPercent(pathwayPoints.need)}>
        <span className="wwh-node__dot">
          <NeedIcon size={17} strokeWidth={1.9} aria-hidden="true" />
        </span>

        <NodeLabel audienceId={audience.id}>{need.label}</NodeLabel>
      </div>

      {/* Solution — the focal point of the pathway. */}
      <div
        className="wwh-node wwh-node--core"
        style={asPercent(pathwayPoints.solution)}
      >
        <span className="wwh-node__pulse" aria-hidden="true" />

        <span className="wwh-node__dot">
          <SolutionIcon size={24} strokeWidth={1.9} aria-hidden="true" />
        </span>

        <NodeLabel audienceId={audience.id}>{solution.label}</NodeLabel>
      </div>

      {/* Result */}
      <div
        className="wwh-node wwh-node--outer"
        style={asPercent(pathwayPoints.result)}
      >
        <span className="wwh-node__dot">
          <ResultIcon size={17} strokeWidth={1.9} aria-hidden="true" />
        </span>

        <NodeLabel audienceId={audience.id}>{result.label}</NodeLabel>
      </div>
    </div>
  );
};

export default SignalPathway;
