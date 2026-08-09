import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import "./Services.css";

import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import ServiceFlow from "./ServiceFlow";
import Capabilities from "./Capabilities";
import IndustriesBlueprintSection from "./Industries";
import TechnologiesSection from "./Technologies";
import ServicesPageCTA from "./ServicesPageCTA";

import { servicesHero } from "./servicesData";

const Services = () => {
  return (
    <>
      <section className="service-hero" id="service-hero">
        <span className="service-hero__glow" aria-hidden="true" />
        <span className="service-hero__grid" aria-hidden="true" />

        <Container>
          <div className="service-hero__grid-layout">
            <div className="service-hero__content">
              <div className="animate-fade-up">
                <Badge>{servicesHero.badge}</Badge>
              </div>

              <h1
                className="service-hero__title animate-fade-up"
                style={{ "--delay": "90ms" }}
              >
                {servicesHero.title}
              </h1>

              <p
                className="service-hero__description animate-fade-up"
                style={{ "--delay": "180ms" }}
              >
                {servicesHero.description}
              </p>

              <div
                className="service-hero__actions animate-fade-up"
                style={{ "--delay": "270ms" }}
              >
                <Button
                  as={Link}
                  to={servicesHero.cta.href}
                  size="lg"
                  endIcon={<ArrowRight size={18} strokeWidth={2.2} />}
                >
                  {servicesHero.cta.text}
                </Button>
              </div>
            </div>

            {/* ------------------------ Right : Visual ------------------------ */}
            <div
              className="service-hero__visual animate-fade-up"
              style={{ "--delay": "220ms" }}
            >
              <ServiceFlow />
            </div>
          </div>
        </Container>
      </section>

      {/* ------------------------ Capabilities ------------------------ */}
      <Capabilities />

      {/* ------------------------ Industries ------------------------ */}
      <IndustriesBlueprintSection />

      {/* ------------------------ Technologies ------------------------ */}
      <TechnologiesSection />

      {/* ------------------------ Closing CTA ------------------------ */}
      <ServicesPageCTA />
    </>
  );
};

export default Services;
