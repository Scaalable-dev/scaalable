import { useCallback, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

/* Waveform width, and the maximum tilt in degrees the tile is allowed. */
const BAR_COUNT = 7;
const TILT_MAX = 2;

/* Bar heights are derived from the industry id rather than stored on it: the
   pattern is decorative, has to stay identical between renders, and adding a
   hand-written array of magic numbers to every data entry would only be noise.
   A small LCG keeps the products well inside safe-integer range. */
const waveFor = (id) => {
  let seed = 7;

  for (let i = 0; i < id.length; i += 1) {
    seed = (seed * 31 + id.charCodeAt(i)) % 65536;
  }

  return Array.from({ length: BAR_COUNT }, () => {
    seed = (seed * 1103 + 12345) % 65536;

    return 0.34 + (seed % 1000) / 1000 * 0.66;
  });
};

const pad = (value) => String(value).padStart(2, "0");

const SelectedIndustryPanel = ({
  industry,
  position,
  total,
  reduceMotion,
  onNext,
}) => {
  const Icon = industry.icon;
  const bars = waveFor(industry.id);

  const tileRef = useRef(null);
  const frame = useRef(0);

  const resetTilt = useCallback(() => {
    cancelAnimationFrame(frame.current);

    const tile = tileRef.current;
    if (!tile) return;

    tile.style.setProperty("--tilt-x", "0deg");
    tile.style.setProperty("--tilt-y", "0deg");
  }, []);

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  /* Written straight to the element rather than through state: a pointermove
     handler that re-renders the panel would run React on every mouse frame
     for a purely visual effect. */
  const handleTilt = (event) => {
    if (reduceMotion || event.pointerType !== "mouse") return;

    const tile = tileRef.current;
    if (!tile) return;

    const rect = tile.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    cancelAnimationFrame(frame.current);

    frame.current = requestAnimationFrame(() => {
      tile.style.setProperty("--tilt-x", `${(-y * TILT_MAX).toFixed(2)}deg`);
      tile.style.setProperty("--tilt-y", `${(x * TILT_MAX).toFixed(2)}deg`);
    });
  };

  return (
    <div className="ind-panel">
      {/* Glowing rail down the left edge, carrying a slow travelling light. */}
      <span className="ind-panel__rail" aria-hidden="true">
        <span className="ind-panel__rail-light" />
      </span>

      <div className="ind-panel__head">
        <span className="ind-panel__label">Selected Industry</span>

        <span className="ind-panel__counter">
          {pad(position)} <i>/</i> {pad(total)}
        </span>
      </div>

      {/* Keyed so React remounts the block and its entry animations replay
          from the top on every change. */}
      <div className="ind-panel__body" key={industry.id}>
        <div
          className="ind-panel__tile"
          ref={tileRef}
          onPointerMove={handleTilt}
          onPointerLeave={resetTilt}
          aria-hidden="true"
        >
          <span className="ind-panel__tile-grid" />
          <span className="ind-panel__tile-sheen" />

          <span className="ind-panel__glyph">
            <span className="ind-panel__glow" />

            <Icon size={22} strokeWidth={1.8} />
          </span>

          <span className="ind-panel__wave">
            {bars.map((height, i) => (
              <span
                className="ind-panel__bar"
                key={`${industry.id}-${i}`}
                style={{ "--h": height.toFixed(3), "--i": i }}
              />
            ))}
          </span>
        </div>

        <h3 className="ind-panel__name">{industry.name}</h3>

        <p className="ind-panel__description">{industry.description}</p>

        <span className="ind-panel__status">Blueprint Active</span>
      </div>

      <button type="button" className="ind-panel__next" onClick={onNext}>
        Next industry
        <ArrowRight size={15} strokeWidth={2.1} aria-hidden="true" />
      </button>
    </div>
  );
};

export default SelectedIndustryPanel;
