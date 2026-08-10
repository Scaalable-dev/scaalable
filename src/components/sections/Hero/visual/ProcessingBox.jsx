import { forwardRef } from "react";

import logoIcon from "../../../../assets/images/logo-icon.webp";

import "./ProcessingBox.css";

/**
 * The glass processing unit the stream feeds into.
 *
 * Composed in 2.5D — a clip-path trapezoid lid over a rounded front face, with
 * a shaded right cheek — rather than a `preserve-3d` cube. The canvas measures
 * `.pbox__opening` every resize to aim the funnel, and a clip-path element
 * reports a stable, predictable rect where a face rotated into a third
 * dimension does not.
 */
const ProcessingBox = forwardRef(function ProcessingBox(
  { openingRef, pulsing = false, pulseKey = 0 },
  ref,
) {
  return (
    <div className={`pbox ${pulsing ? "is-pulsing" : ""}`.trim()} ref={ref}>
      <div className="pbox__solid">
        {/* Top plane, receding toward the back. */}
        <div className="pbox__lid">
          <span className="pbox__lid-sheen" aria-hidden="true" />

          <div className="pbox__opening" ref={openingRef}>
            <span className="pbox__pool" />
            <span className="pbox__ring pbox__ring--1" />
            <span className="pbox__ring pbox__ring--2" />
            <span className="pbox__ring pbox__ring--3" />

            {/* Remounted on every surge: re-running a CSS animation needs a
                fresh element, otherwise a second click within the pulse window
                shows no flash at all. */}
            <span key={pulseKey} className="pbox__flash" />
          </div>
        </div>

        {/* Front glass. */}
        <div className="pbox__face">
          <span className="pbox__face-sheen" aria-hidden="true" />

          {/* Right cheek — vents and technical marks. */}
          <span className="pbox__cheek" aria-hidden="true">
            <span className="pbox__vent" />
            <span className="pbox__vent" />
            <span className="pbox__vent" />
            <span className="pbox__vent" />
          </span>

          <div className="pbox__brand">
            <img
              className="pbox__logo"
              src={logoIcon}
              alt=""
              width="128"
              height="128"
              aria-hidden="true"
            />

            <span className="pbox__wordmark">SCAALABLE</span>
          </div>

          <span className="pbox__tagline">BUILD · SCALE · GROW</span>

          <span className="pbox__leds" aria-hidden="true">
            <span className="pbox__led pbox__led--1" />
            <span className="pbox__led pbox__led--2" />
            <span className="pbox__led pbox__led--3" />
          </span>
        </div>
      </div>

      <span className="pbox__shadow" aria-hidden="true" />
    </div>
  );
});

export default ProcessingBox;
