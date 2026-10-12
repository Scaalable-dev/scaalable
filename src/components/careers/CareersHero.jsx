import { useRef } from "react";
import { ArrowDown, ArrowRight, Code2, Palette, UsersRound } from "lucide-react";

import Container from "../ui/Container";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import AuroraBackdrop from "../ui/AuroraBackdrop";
import { careersHero } from "../../data/jobs";
import "./CareersHero.css";

const CareersHero = () => {
  const heroRef = useRef(null);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="careers-hero hero-wash hero-wash--tint"
      id="careers-hero"
      ref={heroRef}
      aria-labelledby="careers-hero-title"
    >
      <AuroraBackdrop targetRef={heroRef} />

      <Container>
        <div className="careers-hero__grid">
          {/* ================= Left: Copy ================= */}
          <div className="careers-hero__content">
            <div className="careers-hero__top-row">
              <span className="careers-hero__hiring-indicator">
                <span className="careers-hero__hiring-dot" aria-hidden="true">
                  <span className="careers-hero__hiring-pulse" />
                </span>
                <span>{careersHero.badge}</span>
              </span>

              <Badge variant="secondary" icon={false}>
                {careersHero.eyebrow}
              </Badge>
            </div>

            <h1 className="careers-hero__title" id="careers-hero-title">
              Build What&rsquo;s Next.{" "}
              <span className="careers-hero__title-gradient">
                Grow With Scaalable.
              </span>
            </h1>

            <p className="careers-hero__description">
              {careersHero.description}
            </p>

            <div className="careers-hero__actions">
              <Button
                variant="primary"
                size="lg"
                onClick={() => handleScrollTo("openings")}
                endIcon={<ArrowDown size={18} strokeWidth={2.2} />}
              >
                {careersHero.primaryCta}
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => handleScrollTo("why-scaalable")}
                endIcon={<ArrowRight size={18} strokeWidth={2.2} />}
              >
                {careersHero.secondaryCta}
              </Button>
            </div>

            {/* Quick transparency chips */}
            <div className="careers-hero__highlights">
              <div className="careers-hero__highlight-item">
                <span className="careers-hero__highlight-bullet" />
                <span><strong>100% Remote</strong> Opportunities</span>
              </div>
              <div className="careers-hero__highlight-item">
                <span className="careers-hero__highlight-bullet" />
                <span><strong>Unpaid Learning &amp; Volunteer</strong> Roles</span>
              </div>
              <div className="careers-hero__highlight-item">
                <span className="careers-hero__highlight-bullet" />
                <span><strong>Hands-On</strong> Real Projects</span>
              </div>
            </div>
          </div>

          {/* ================= Right: Career Launchpad ================= */}
          <div className="careers-hero__visual" aria-hidden="true">
            <div className="careers-hero__visual-container">
              <div className="careers-hero__launch-scene">
                <span className="careers-hero__trail" />
                <span className="careers-hero__star careers-hero__star--one" />
                <span className="careers-hero__star careers-hero__star--two" />
                <span className="careers-hero__star careers-hero__star--three" />

                <div className="careers-hero__skill-card careers-hero__skill-card--code">
                  <Code2 size={23} strokeWidth={2.2} />
                </div>
                <div className="careers-hero__skill-card careers-hero__skill-card--creative">
                  <Palette size={23} strokeWidth={2.2} />
                </div>
                <div className="careers-hero__skill-card careers-hero__skill-card--team">
                  <UsersRound size={23} strokeWidth={2.2} />
                </div>

                <div className="careers-hero__rocket-wrap">
                  <div className="careers-hero__rocket">
                    <span className="careers-hero__rocket-nose" />
                    <span className="careers-hero__rocket-window" />
                    <span className="careers-hero__rocket-fin careers-hero__rocket-fin--left" />
                    <span className="careers-hero__rocket-fin careers-hero__rocket-fin--right" />
                    <span className="careers-hero__rocket-flame" />
                  </div>
                </div>

                <div className="careers-hero__launchpad">
                  <span className="careers-hero__launchpad-top" />
                  <span className="careers-hero__launchpad-base" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CareersHero;
