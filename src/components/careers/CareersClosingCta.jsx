import { ArrowDown, Sparkles } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import "./CareersClosingCta.css";

const CareersClosingCta = () => {
  const handleScrollToOpenings = () => {
    const el = document.getElementById("openings");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="careers-closing-cta" aria-labelledby="closing-cta-heading">
      <Container>
        <Reveal amount={0.3}>
          <div className="careers-closing-cta__card">
            <div className="careers-closing-cta__glow" aria-hidden="true" />
            
            <div className="careers-closing-cta__content">
              <span className="careers-closing-cta__badge">
                <Sparkles size={14} aria-hidden="true" />
                <span>Next Step</span>
              </span>

              <h2 className="careers-closing-cta__title" id="closing-cta-heading">
                Ready to Explore Your Next Opportunity?
              </h2>

              <p className="careers-closing-cta__description">
                Explore our eight remote openings across engineering, marketing, creative, and recruitment. Build practical skills with our team today.
              </p>

              <div className="careers-closing-cta__action">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleScrollToOpenings}
                  endIcon={<ArrowDown size={18} strokeWidth={2.2} />}
                >
                  View Open Positions
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};

export default CareersClosingCta;
