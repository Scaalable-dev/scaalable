import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import Button from "../../ui/Button";
import Container from "../../ui/Container";
import Reveal from "../../ui/Reveal";
import SectionHeading from "../../ui/SectionHeading";
import ServiceRail from "./ServiceRail";

import { serviceCards, serviceRailIntro } from "./serviceRailData";

import "./Services.css";

/* The rail itself — motion, dragging and the loop — lives in ServiceRail. */
const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services__background" aria-hidden="true"></div>

      <Container>
        <Reveal>
          <SectionHeading
            className="services__heading"
            badge={serviceRailIntro.badge}
            align="center"
          />
        </Reveal>
      </Container>

      {/* Deliberately outside the container — the rail runs edge to edge, and
          cards cut off by the viewport are what signal there is more to see. */}
      <Reveal delay={0.08}>
        <ServiceRail cards={serviceCards} />
      </Reveal>

      <Container>
        <Reveal delay={0.14}>
          <div className="services__actions">
            <Button
              as={Link}
              to="/services#capabilities"
              variant="primary"
              size="lg"
              endIcon={<ArrowRight size={18} strokeWidth={2.2} />}
            >
              {serviceRailIntro.cta.text}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};

export default Services;
