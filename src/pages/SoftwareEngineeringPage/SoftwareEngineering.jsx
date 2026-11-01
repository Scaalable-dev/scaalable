import { useEffect, useRef } from "react";
import {
  Cloud,
  Database,
  Gauge,
  Layers3,
  Plug,
  ShieldCheck,
} from "lucide-react";

import {
  ServiceBenefits,
  ServiceCard,
  ServiceFAQ,
  ServiceFinalCTA,
  ServiceGrid,
  ServiceHero,
  ServicePageLayout,
  ServicePanel,
  ServiceProcess,
  ServiceSectionHeader,
  ServiceShowcase,
  ServiceTags,
} from "../../components/servicePage";
import Container from "../../components/ui/Container";
import { applyPageSeo } from "../../lib/pageMeta";
import "./SoftwareEngineering.css";
import {
  EngineeringArchitecture,
  EngineeringHeroVisual,
  EngineeringJourney,
  EngineeringServiceArt,
} from "./SoftwareEngineeringVisuals";
import {
  engineeringBenefits,
  engineeringServices,
  faqs,
  process,
  scope,
  softwareSeo,
} from "./softwareEngineeringData";

const benefitIcons = [Layers3, Plug, Database, ShieldCheck, Gauge, Cloud];

const SoftwareEngineering = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    applyPageSeo(softwareSeo());
  }, []);

  return (
    <ServicePageLayout className="sp-page--software-engineering">
      <ServiceHero
        heroRef={heroRef}
        eyebrow="PRODUCT & PLATFORM ENGINEERING"
        title="Software Engineering"
        subtitle="Engineer platforms around the way your business works."
        description="We design, build and modernize secure software products, internal platforms and enterprise systems with maintainable architecture."
        primaryCta={{ label: "Discuss Your Project", to: "/contact#contact-form" }}
        secondaryCta={{ label: "Explore Our Services", to: "/services" }}
        visual={<EngineeringHeroVisual />}
      />

      <section>
        <Container>
          <ServiceSectionHeader
            badge="SERVICES INCLUDED"
            title="Engineering support for the systems your business depends on."
            description="Every engagement is shaped around a clear purpose—from a focused first product to the careful modernization of an established platform."
          />
          <ServiceGrid>
            {engineeringServices.map(([title, description], index) => (
              <ServiceCard
                key={title}
                visual={<EngineeringServiceArt kind={index} />}
                title={title}
                description={description}
                className="sp-card--software-engineering"
                delay={Math.min(index, 5) * 0.035}
              />
            ))}
          </ServiceGrid>
        </Container>
      </section>

      <ServicePanel
        badge="ENGINEERING SCOPE"
        title="Every layer has a job. Together, they make the system dependable."
        description="We look beyond individual features to the product, platform and operating foundations that let software evolve with confidence."
      >
        <ServiceTags items={scope.map(([title]) => title)} />
      </ServicePanel>

      <ServiceShowcase
        wash={false}
        badge="ENGINEERING CAPABILITIES"
        title="Maintainable architecture, designed for the next change."
        description="We connect modular structure, integrations, data design, testing, performance work and ongoing maintenance into a practical engineering approach."
        link={{ to: "/contact#contact-form", label: "Talk through your system" }}
        visual={<EngineeringArchitecture />}
      />

      <ServiceProcess
        badge="ENGINEERING WORKFLOW"
        title="A practical route from requirements to continuous improvement."
        steps={process}
        journey={<EngineeringJourney />}
      />

      <ServiceBenefits
        badge="WHY THIS ENGINEERING APPROACH"
        title="Software that stays useful as the business changes."
        description="We design, build and modernize products around the workflows, data and teams they need to support."
        items={engineeringBenefits}
        icons={benefitIcons}
      />

      <ServiceFAQ
        title="Bring us the product or platform challenge you need to solve."
        description="We can start with the existing system, the workflow it supports or the next product capability you need."
        faqs={faqs}
      />

      <ServiceFinalCTA
        title="Let’s Engineer Your Next Product"
        description="Share the product, platform or workflow that needs a stronger technical foundation."
        ctaLabel="Discuss Your Project"
      />
    </ServicePageLayout>
  );
};

export default SoftwareEngineering;
