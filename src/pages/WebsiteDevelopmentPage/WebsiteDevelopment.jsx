import { useEffect, useRef } from "react";
import {
  Gauge,
  Globe2,
  Layers3,
  ShieldCheck,
  Smartphone,
  Wrench,
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
import "./WebsiteDevelopment.css";
import {
  WebsiteHeroVisual,
  WebsiteServiceArt,
  WebsiteShowcaseVisual,
} from "./WebsiteDevelopmentVisuals";
import {
  benefits,
  developmentServices,
  processSteps,
  technologies,
  websiteDevelopmentFaqs,
  websiteDevelopmentSeo,
} from "./websiteDevelopmentData";

const benefitIcons = [Smartphone, Gauge, ShieldCheck, Globe2, Layers3, Wrench];

const WebsiteDevelopment = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    applyPageSeo(websiteDevelopmentSeo());
  }, []);

  return (
    <ServicePageLayout>
      <ServiceHero
        heroRef={heroRef}
        eyebrow="WEB EXPERIENCE ENGINEERING"
        title="Website Design & Development"
        subtitle="Build a digital presence designed to perform."
        description="We create fast, scalable and conversion-focused websites, commerce experiences and web applications built around your business model."
        primaryCta={{ label: "Discuss Your Project", to: "/contact#contact-form" }}
        secondaryCta={{ label: "Explore Our Services", to: "/services" }}
        visual={<WebsiteHeroVisual />}
      />

      <section id="website-services">
        <Container>
          <ServiceSectionHeader
            badge="SERVICES INCLUDED"
            title="Web experiences with a clear role in your business."
            description="From a focused marketing site to a connected platform, we shape the work around the outcome it needs to support."
          />
          <ServiceGrid>
            {developmentServices.map(([title, description], index) => (
              <ServiceCard
                key={title}
                title={title}
                description={description}
                visual={<WebsiteServiceArt kind={index} />}
                className="sp-card--website-development"
                delay={Math.min(index, 4) * 0.05}
              />
            ))}
          </ServiceGrid>
        </Container>
      </section>

      <ServicePanel
        badge="TECHNOLOGIES"
        title="Selected for the project, not the pitch."
        description="Our existing web practice includes these technologies. We choose the stack that best fits the scope, team and long-term needs of the work."
      >
        <ServiceTags items={technologies} />
      </ServicePanel>

      <ServiceShowcase
        wash={false}
        badge="WEB APPLICATION VISUALS"
        title="Interfaces shaped around content, audiences and the next action."
        description="Illustrative website and web application views show how structure, content and conversion can sit together in a considered product experience."
        link={{ to: "/contact#contact-form", label: "Talk through your requirements" }}
        visual={<WebsiteShowcaseVisual />}
      />

      <ServiceProcess
        id="process"
        badge="Our development process"
        title="A practical path from first conversation to ongoing improvement."
        steps={processSteps}
      />

      <ServiceBenefits
        wash={false}
        badge="Built with intention"
        title="The details that make a website work harder."
        description="A good website is more than a polished interface. Its technical choices, content structure and ongoing care all influence how well it serves your team and customers."
        link={{ to: "/contact#contact-form", label: "Talk through your requirements" }}
        items={benefits}
        icons={benefitIcons}
      />

      <ServiceFAQ
        title="Before we build, let’s make the approach clear."
        description="If your question is not here, we are happy to discuss your specific project."
        faqs={websiteDevelopmentFaqs}
      />

      <ServiceFinalCTA
        title="Bring us the website challenge you want to solve."
        description="Whether you are starting fresh, improving an established site or connecting a more complex digital experience, we can help you plan the right next step."
        ctaLabel="Discuss Your Project"
      />
    </ServicePageLayout>
  );
};

export default WebsiteDevelopment;
