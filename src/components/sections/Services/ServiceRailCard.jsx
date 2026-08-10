import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import ServiceArt from "./ServiceArt";

import "./ServiceRailCard.css";

/**
 * One card in the moving rail.
 *
 * The whole card is the link — the arrow is decoration, not a second target.
 *
 * `duplicate` marks the copy that exists only to make the loop seamless. It is
 * hidden from assistive tech and taken out of the tab order, so the list is
 * announced once and tabbing through the rail visits each service once.
 */
const ServiceRailCard = ({ card, duplicate = false }) => {
  const Icon = card.icon;

  return (
    <li className="srail__item">
      <Link
        to="/services#capabilities"
        className="srail__card"
        data-tone={card.tone}
        style={{
          "--srail-accent": card.accent,
          "--srail-accent-rgb": card.accentRgb,
        }}
        aria-hidden={duplicate || undefined}
        tabIndex={duplicate ? -1 : undefined}
      >
        {/* Artwork. Built from layered gradients rather than an image so every
            card stays on-palette and the rail costs no extra requests. */}
        <span className="srail__art" aria-hidden="true">
          <span className="srail__grid" />
          <span className="srail__orb" />
          <span className="srail__orb srail__orb--sm" />

          {/* The capability drawn out — a browser mid-layout, a node graph, a
              climbing trend line. See ServiceArt.jsx. */}
          <span className="srail__figure">
            <ServiceArt id={card.id} />
          </span>

          <span className="srail__tile">
            <Icon size={26} strokeWidth={1.6} />
          </span>

          <span className="srail__index">{card.index}</span>
        </span>

        {/* Keeps the caption legible over whatever the artwork is doing behind
            it — the panel drifts upward on hover and would otherwise cross the
            eyebrow. */}
        <span className="srail__scrim" aria-hidden="true" />

        <span className="srail__body">
          <span className="srail__eyebrow">{card.eyebrow}</span>

          <span className="srail__name">{card.name}</span>

          {/* Collapsed to zero height until hover or focus. A 0fr -> 1fr grid
              row animates that smoothly without guessing a max-height. */}
          <span className="srail__reveal">
            <span className="srail__reveal-inner">
              <span className="srail__subtitle">{card.subtitle}</span>

              <span className="srail__chips">
                {card.highlights.map((item) => (
                  <span className="srail__chip" key={item}>
                    {item}
                  </span>
                ))}
              </span>
            </span>
          </span>
        </span>

        <span className="srail__go" aria-hidden="true">
          <ArrowUpRight size={17} strokeWidth={2.2} />
        </span>
      </Link>
    </li>
  );
};

export default ServiceRailCard;
