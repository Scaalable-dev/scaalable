import { useRef, useState } from "react";
import { useInView } from "framer-motion";

import Badge from "../../ui/Badge";
import Container from "../../ui/Container";

import { deliveryPromiseIntro, deliverySteps } from "./deliveryPromiseData";

import "./DeliveryPromise.css";

const LAST = deliverySteps.length - 1;

/**
 * Accountability runway.
 *
 * Four delivery commitments strung along one connected pathway, rather than
 * four separate cards: the line is the point, because what the section is
 * claiming is continuity.
 *
 * Entrance choreography is CSS keyed off a single `is-in` class rather than a
 * <Reveal> per element. The sequence has to be ordered — line first, then the
 * checkpoints, then the travelling signal — and the line arrives by drawing
 * itself rather than by fading, which Reveal has no vocabulary for. One
 * useInView drives the whole timeline.
 */
const DeliveryPromise = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className={`runway ${inView ? "is-in" : ""}`.trim()}
      ref={sectionRef}
      aria-labelledby="runway-title"
    >
      {/* Barely-there brand wash behind the pathway. */}
      <span className="runway__ambience" aria-hidden="true" />

      <Container>
        <div className="runway__head">
          <div className="runway__lede">
            <Badge className="runway__badge">
              {deliveryPromiseIntro.badge}
            </Badge>

            <h2 className="runway__title" id="runway-title">
              {deliveryPromiseIntro.title}
            </h2>
          </div>

          <p className="runway__support">{deliveryPromiseIntro.description}</p>
        </div>

        <ol className="runway__track">
          {deliverySteps.map((step, index) => {
            const Icon = step.icon;
            const isActive = index === activeIndex;

            return (
              <li className="runway__slot" key={step.id} style={{ "--i": index }}>
                {/* The segment reaching forward to the next checkpoint. Drawn
                    per slot rather than as one line across the track, so the
                    same markup becomes a row on desktop, an elbow on tablet
                    and a column on mobile with only geometry changing. */}
                {index < LAST && (
                  <span
                    className="runway__link"
                    aria-hidden="true"
                    data-filled={index < activeIndex}
                  >
                    <span className="runway__link-base" />
                    <span className="runway__link-fill" />
                    <span className="runway__signal" />
                  </span>
                )}

                <button
                  type="button"
                  className="runway__step"
                  aria-pressed={isActive}
                  onClick={() => setActiveIndex(index)}
                  /* Hover and focus select as well, so pointer and keyboard
                     reach the same state by the same route. */
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                >
                  <span className="runway__mark">
                    <span className="runway__num">{step.number}</span>

                    <span className="runway__icon">
                      <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                    </span>
                  </span>

                  <span className="runway__step-title">{step.title}</span>

                  <span className="runway__step-text">{step.description}</span>
                </button>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
};

export default DeliveryPromise;
