import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import AuroraBackdrop from "../ui/AuroraBackdrop";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import Container from "../ui/Container";

const ServiceHero = ({
  heroRef,
  eyebrow,
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  visual,
}) => (
  <section className="sp-hero hero-wash hero-wash--tint" ref={heroRef}>
    <AuroraBackdrop targetRef={heroRef} />
    <Container>
      <div className="sp-hero__grid">
        <div className="sp-hero__content">
          <div className="animate-fade-up">
            <Badge>{eyebrow}</Badge>
          </div>
          <h1 className="sp-hero__title animate-fade-up" style={{ "--delay": "80ms" }}>
            {title}
          </h1>
          <p className="sp-hero__subtitle animate-fade-up" style={{ "--delay": "120ms" }}>
            {subtitle}
          </p>
          <p className="sp-hero__description animate-fade-up" style={{ "--delay": "150ms" }}>
            {description}
          </p>
          <div className="sp-hero__actions animate-fade-up" style={{ "--delay": "220ms" }}>
            <Button as={Link} to={primaryCta.to} size="lg" endIcon={<ArrowRight size={18} />}>
              {primaryCta.label}
            </Button>
            <Button as={Link} to={secondaryCta.to} variant="outline" size="lg">
              {secondaryCta.label}
            </Button>
          </div>
        </div>
        <div className="animate-fade-up" style={{ "--delay": "180ms" }}>
          {visual}
        </div>
      </div>
    </Container>
  </section>
);

export default ServiceHero;
