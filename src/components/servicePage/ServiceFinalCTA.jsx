import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import Badge from "../ui/Badge";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

const ServiceFinalCTA = ({
  badge = "Start with a conversation",
  title,
  description,
  ctaLabel,
  ctaTo = "/contact#contact-form",
}) => (
  <section className="sp-cta">
    <Container>
      <Reveal className="sp-cta__panel">
        <div>
          <Badge variant="primary">{badge}</Badge>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <Button as={Link} to={ctaTo} size="lg" endIcon={<ArrowRight size={18} />}>
          {ctaLabel}
        </Button>
      </Reveal>
    </Container>
  </section>
);

export default ServiceFinalCTA;
