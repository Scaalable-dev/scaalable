import { useState } from "react";

import "./ProductJourney.css";

import logoIcon from "../../assets/images/logo-icon.png";
import {
  journeyNodes,
  journeySegments,
  journeyViewBox,
} from "./contactData";

const percent = (value, total) => `${(value / total) * 100}%`;

const ProductJourney = () => {
  const [activeId, setActiveId] = useState(null);

  const activeNode = journeyNodes.find((node) => node.id === activeId);

  /* Null when nothing is active. There used to be an idle prompt here telling
     the visitor to move their cursor, which is instruction rather than content
     — and on a touch device it asks for a cursor that does not exist. */
  const message = activeNode ? activeNode.message : null;
  const litSegments = activeNode ? activeNode.segments : [];

  const activate = (id) => () => setActiveId(id);
  const clear = () => setActiveId(null);

  return (
    <div className="journey">
      <div className="journey__stage">
        <span className="journey__grid" aria-hidden="true" />
        <span className="journey__wash" aria-hidden="true" />

        {/* ------------------------ Flow ------------------------ */}
        <svg
          className="journey__links"
          viewBox={`0 0 ${journeyViewBox.width} ${journeyViewBox.height}`}
          fill="none"
          aria-hidden="true"
          focusable="false"
        >
          <defs>
            <linearGradient id="journeyLine" x1="0" y1="0" x2="1" y2="0">
              <stop
                offset="0%"
                style={{ stopColor: "var(--color-brand-primary)" }}
              />
              <stop
                offset="50%"
                style={{ stopColor: "var(--color-brand-secondary)" }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "var(--color-brand-primary)" }}
              />
            </linearGradient>
          </defs>

          {journeySegments.map((segment) => (
            <path
              key={segment.id}
              id={`journey-${segment.id}`}
              className="journey__link"
              d={segment.d}
              data-state={litSegments.includes(segment.id) ? "active" : "idle"}
            />
          ))}

          {journeySegments.map((segment) => (
            <circle
              key={`particle-${segment.id}`}
              className="journey__particle"
              r="7"
              data-state={litSegments.includes(segment.id) ? "active" : "idle"}
            >
              <animateMotion
                dur={segment.particleDuration}
                begin={segment.particleDelay}
                repeatCount="indefinite"
              >
                <mpath
                  href={`#journey-${segment.id}`}
                  xlinkHref={`#journey-${segment.id}`}
                />
              </animateMotion>
            </circle>
          ))}
        </svg>

        {/* ------------------------ Centre ------------------------ */}
        <div className="journey__centre">
          <span className="journey__halo" aria-hidden="true" />
          <span className="journey__orbit" aria-hidden="true">
            <span className="journey__orbit-dot" />
          </span>

          <span className="journey__disc">
            <img
              className="journey__logo"
              src={logoIcon}
              alt="Scaalable"
              width="512"
              height="512"
              draggable="false"
            />
          </span>
        </div>

        {/* ------------------------ Nodes ------------------------ */}
        {journeyNodes.map((node) => {
          const Icon = node.icon;

          return (
            <div
              className="journey__node"
              key={node.id}
              style={{
                left: percent(node.x, journeyViewBox.width),
                top: percent(node.y, journeyViewBox.height),
              }}
            >
              <div
                className="journey__float"
                style={{ "--float-delay": node.floatDelay }}
              >
                <button
                  type="button"
                  className="journey__card"
                  data-state={activeId === node.id ? "active" : "idle"}
                  onMouseEnter={activate(node.id)}
                  onMouseLeave={clear}
                  onFocus={activate(node.id)}
                  onBlur={clear}
                >
                  <span className="journey__icon">
                    <Icon strokeWidth={1.75} aria-hidden="true" />
                  </span>

                  <span className="journey__label">{node.label}</span>
                </button>
              </div>
            </div>
          );
        })}

        {/* ------------------------ Status ------------------------ */}
        {/* The element stays in the DOM whether or not it has anything to say:
            a live region that is added and removed is not reliably announced. */}
        <p
          className="journey__status"
          aria-live="polite"
          data-empty={message ? undefined : "true"}
        >
          {message && (
            <span key={message} className="journey__status-text">
              {message}
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default ProductJourney;
