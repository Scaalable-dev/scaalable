/* ==========================================================================
   VISUAL PALETTE
   Canvas 2D takes colour strings, not CSS custom properties, so the brand ramp
   is resolved from the live tokens once at start-up and cached as RGB triples.
   Reading the tokens rather than hard-coding hexes keeps the visual in step
   with src/styles/tokens.css.
   ========================================================================== */

const TOKENS = [
  ["blue", "--color-brand-primary", "0, 130, 249"],
  ["blueDeep", "--color-brand-600", "0, 108, 250"],
  ["indigo", "--color-brand-700", "0, 86, 214"],
  ["violet", "--color-brand-secondary", "137, 57, 250"],
  ["magenta", "--color-brand-accent", "185, 63, 251"],
  ["cyan", "--color-brand-cyan", "6, 182, 212"],
];

const HEX = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i;

/** "#0082f9" -> "0, 130, 249". Returns null for anything it can't parse. */
const hexToRgb = (value) => {
  const input = String(value).trim();
  if (!HEX.test(input)) return null;

  let hex = input.slice(1);
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((char) => char + char)
      .join("");
  }

  const int = Number.parseInt(hex, 16);

  return `${(int >> 16) & 255}, ${(int >> 8) & 255}, ${int & 255}`;
};

/**
 * Resolves the brand ramp against `element`'s computed style.
 *
 * Each entry is an `"r, g, b"` string so the engine can build `rgba(...)` at
 * any alpha without re-parsing.
 */
export const readPalette = (element) => {
  const styles =
    typeof window !== "undefined" && element
      ? window.getComputedStyle(element)
      : null;

  const palette = {};

  for (const [key, token, fallback] of TOKENS) {
    const declared = styles?.getPropertyValue(token);
    palette[key] = (declared && hexToRgb(declared)) || fallback;
  }

  return palette;
};

/**
 * Weighted draw order for particles. Blue dominates so the stream reads as one
 * brand-coloured flow rather than a rainbow, with violet and cyan as accents.
 */
export const STREAM_WEIGHTS = [
  ["blue", 0.34],
  ["blueDeep", 0.16],
  ["violet", 0.2],
  ["magenta", 0.12],
  ["cyan", 0.13],
  ["indigo", 0.05],
];

/** Expands the weight table into a lookup array for O(1) random picks. */
export const buildColorTable = (size = 100) => {
  const table = [];

  for (const [key, weight] of STREAM_WEIGHTS) {
    const count = Math.round(weight * size);
    for (let i = 0; i < count; i += 1) table.push(key);
  }

  return table;
};
