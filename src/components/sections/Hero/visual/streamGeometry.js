/* ==========================================================================
   STREAM GEOMETRY
   Shared by the canvas engine (which draws the funnel) and the layout
   (which parks each card's connector against the funnel edge). Both must agree
   exactly or the connectors point at empty space.
   ========================================================================== */

/**
 * Half-width of the stream at its widest, as a fraction of the stage width.
 * Narrow enough that the cards flanking the stream keep a real connector run
 * instead of collapsing onto the minimum.
 */
export const TOP_HALF_WIDTH_RATIO = 0.3;

/**
 * Used once the cards stop flanking the stream and stack on top of it: the
 * stream has to be proportionally wider or the cards cover it end to end.
 *
 * Selected by layout mode, never by stage width — a stacked tablet stage is
 * ~960px wide, wider than a split desktop column, so width alone picks wrong.
 */
export const STACKED_TOP_HALF_WIDTH_RATIO = 0.44;

export const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export const smoothstep = (t) => t * t * (3 - 2 * t);

/** Particles spawn above the stage so none of them pop into existence on screen. */
export const topYFor = (height) => -Math.max(90, height * 0.18);

export const topHalfWidthFor = (width, ratio = TOP_HALF_WIDTH_RATIO) =>
  width * ratio;

/**
 * Half-width of the funnel at absolute height `y`.
 *
 * Smoothstep rather than a straight line: the stream stays broad through the
 * upper half, pinches through the middle, then eases into the opening instead
 * of arriving at a hard cone point.
 */
export const funnelHalfWidthAt = ({
  y,
  width,
  height,
  openingY,
  openingHalfWidth,
  ratio,
}) => {
  const topY = topYFor(height);
  const topHalf = topHalfWidthFor(width, ratio);
  const span = openingY - topY;
  const t = span > 0 ? clamp((y - topY) / span, 0, 1) : 0;

  return topHalf + (openingHalfWidth - topHalf) * smoothstep(t);
};
