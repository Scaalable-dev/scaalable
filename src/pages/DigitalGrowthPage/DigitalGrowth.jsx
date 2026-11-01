import { useEffect, useRef } from "react";
import {
  BarChart3,
  Compass,
  MousePointerClick,
  Search,
  Target,
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
import {
  channels,
  faqs,
  growthBenefits,
  process,
  seo,
  services,
} from "./growthData";
import {
  GrowthHeroVisual,
  GrowthJourney,
  GrowthServiceArt,
  GrowthShowcaseVisual,
} from "./GrowthVisuals";
import "./DigitalGrowth.css";

const benefitIcons = [UsersRound, Target, MousePointerClick, BarChart3, Compass, Search];

const Growth = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    applyPageSeo(seo());
  }, []);

  return (
    <ServicePageLayout className="growth-page">
      <ServiceHero
        heroRef={heroRef}
        eyebrow="DATA-DRIVEN ACQUISITION"
        title="Digital Growth"
        subtitle="Accelerate customer acquisition with measurable strategy."
        description="Accelerate customer acquisition with data-driven marketing strategies connected to clear analytics and continuous optimization."
        primaryCta={{ label: "Grow Your Business", to: "/contact#contact-form" }}
        secondaryCta={{ label: "Discuss Your Growth Strategy", to: "/contact#contact-form" }}
        visual={<GrowthHeroVisual />}
      />

      <section>
        <Container>
          <ServiceSectionHeader
            badge="SERVICES INCLUDED"
            title="The disciplines behind a more deliberate growth system."
            description="Every channel earns its place in a coordinated acquisition strategy—built around your audience, offer and next opportunity."
          />
          <ServiceGrid>
            {services.map(([title, description], index) => (
              <ServiceCard
                key={title}
                visual={<GrowthServiceArt index={index} />}
                title={title}
                description={description}
                delay={index * 0.04}
                className="sp-card--growth"
              />
            ))}
          </ServiceGrid>
        </Container>
      </section>

      <ServicePanel
        badge="GROWTH CHANNELS"
        title="Different signals, one operating system for growth."
        description="Organic search, paid campaigns, content, conversion work and analytics can each contribute at the moment they matter most."
      >
        <ServiceTags items={channels.map(([title]) => title)} />
      </ServicePanel>

      <ServiceShowcase
        wash={false}
        badge="PERFORMANCE ANALYTICS"
        title="Clear reporting for the decisions that move growth forward."
        description="Bring organic visibility, paid activity, conversion tracking and landing-page signals into one focused reporting view."
        visual={<GrowthShowcaseVisual />}
      />

      <ServiceProcess
        badge="CUSTOMER ACQUISITION JOURNEY"
        title="A joined-up path from attention to useful learning."
        description="A practical sequence from understanding the audience to launching, measuring and refining the strategy."
        steps={process}
        journey={<GrowthJourney />}
      />

      <ServiceBenefits
        badge="WHY THIS GROWTH MODEL"
        title="Start with the growth challenge you want to understand better."
        description="We can discuss your existing activity, audiences and the next opportunity you want to pursue."
        items={growthBenefits}
        icons={benefitIcons}
      />

      <ServiceFAQ
        title="Start with the growth challenge you want to understand better."
        description="We can discuss your existing activity, audiences and the next opportunity you want to pursue."
        faqs={faqs}
        ctaLabel="Discuss your strategy"
      />

      <ServiceFinalCTA
        title="Let’s Build Your Growth Strategy"
        description="Bring us the audience, channel or customer journey you want to improve."
        ctaLabel="Grow Your Business"
      />
    </ServicePageLayout>
  );
};

export default Growth;
