import { useEffect, useRef } from "react";
import {
  Component,
  Eye,
  GitBranch,
  Sparkles,
  UsersRound,
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
import "./UiUxDesign.css";
import {
  DesignSystemShowcase,
  ServiceArtwork,
  UxHeroVisual,
} from "./UiUxDesignVisuals";
import {
  uiUxBenefits,
  uiUxFaqs,
  uiUxProcess,
  uiUxSeo,
  uiUxServices,
  uiUxTools,
} from "./uiUxDesignData";

const benefitIcons = [UsersRound, Sparkles, Component, Eye, GitBranch, UsersRound];

const UiUxDesign = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    applyPageSeo(uiUxSeo());
  }, []);

  return (
    <ServicePageLayout>
      <ServiceHero
        heroRef={heroRef}
        eyebrow="EXPERIENCE DESIGN SYSTEMS"
        title="UI/UX Engineering"
        subtitle="Create digital experiences users love."
        description="Great products begin with great user experience. We design modern, intuitive interfaces that improve engagement, increase conversions and simplify complex workflows."
        primaryCta={{ label: "Discuss Your Project", to: "/contact#contact-form" }}
        secondaryCta={{ label: "Explore Our Services", to: "/services" }}
        visual={<UxHeroVisual />}
      />

      <section>
        <Container>
          <ServiceSectionHeader
            badge="SERVICES INCLUDED"
            title="From first question to interface teams can build with confidence."
            description="Our UI/UX practice connects the research, structure and design detail needed to make a digital experience feel considered."
          />
          <ServiceGrid>
            {uiUxServices.map(([title, description], index) => (
              <ServiceCard
                key={title}
                visual={<ServiceArtwork type={index} />}
                title={title}
                description={description}
                className="sp-card--ux-design"
                delay={Math.min(index, 5) * 0.05}
              />
            ))}
          </ServiceGrid>
        </Container>
      </section>

      <ServicePanel
        badge="TOOLS"
        title="Shared spaces for design work and iteration."
        description="We use the tools already represented in Scaalable’s UI/UX service data to make review and collaboration straightforward."
      >
        <ServiceTags items={uiUxTools} />
      </ServicePanel>

      <ServiceShowcase
        wash={false}
        badge="DESIGN EXAMPLES"
        title="Interface ideas, made visible early."
        description="These illustrative screens show the kinds of systems, dashboards and reusable UI patterns we use to make a design direction easy to discuss."
        link={{ to: "/contact#contact-form", label: "Explore your product direction" }}
        visual={<DesignSystemShowcase />}
      />

      <ServiceProcess
        badge="DESIGN PROCESS"
        title="A structured way to turn insight into a more usable product."
        steps={uiUxProcess}
      />

      <ServiceBenefits
        wash={false}
        badge="WHY SCAALABLE"
        title="Design that makes the next interaction clearer."
        description="We bring the people using the product, the people building it and the business it supports into one design conversation."
        items={uiUxBenefits}
        icons={benefitIcons}
      />

      <ServiceFAQ
        title="Let’s make the design process feel clearer too."
        description="Start with these common questions, or bring us the specific product challenge you are working through."
        faqs={uiUxFaqs}
      />

      <ServiceFinalCTA
        title="Let’s design a better experience."
        description="Tell us where users are getting stuck, what your product needs to make easier, or what you want to create next."
        ctaLabel="Discuss Your Project"
      />
    </ServicePageLayout>
  );
};

export default UiUxDesign;
