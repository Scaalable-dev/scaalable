import { useEffect, useRef } from "react";
import {
  BarChart3,
  Gauge,
  Globe2,
  LineChart,
  MapPin,
  Search,
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
import "./SeoPage.css";
import {
  AnalyticsPanel,
  SeoHeroVisual,
  SeoProcessJourney,
  SeoServiceArt,
  SeoShowcaseVisual,
} from "./SeoVisuals";
import {
  focusAreas,
  seoBenefits,
  seoFaqs,
  seoMeasurement,
  seoPageData,
  seoProcess,
  seoServices,
} from "./seoData";

const benefitIcons = [Search, Globe2, Gauge, LineChart, BarChart3, MapPin];

const SeoPage = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    applyPageSeo(seoPageData());
  }, []);

  return (
    <ServicePageLayout className="sp-page--seo">
      <ServiceHero
        heroRef={heroRef}
        eyebrow="ORGANIC SEARCH GROWTH"
        title="Search Engine Optimization"
        subtitle="Increase organic traffic & Google rankings."
        description="We implement technical SEO and content strategies that improve search visibility, drive qualified traffic and generate long-term business growth."
        primaryCta={{ label: "Discuss Your Project", to: "/contact#contact-form" }}
        secondaryCta={{ label: "Explore Our Services", to: "/services" }}
        visual={<SeoHeroVisual />}
      />

      <section>
        <Container>
          <ServiceSectionHeader
            badge="SERVICES INCLUDED"
            title="Search work that connects technical clarity with useful content."
            description="Every service is selected to make the site easier to discover, understand and improve over time."
          />
          <ServiceGrid>
            {seoServices.map(([title, description], index) => (
              <ServiceCard
                key={title}
                visual={<SeoServiceArt kind={index} />}
                title={title}
                description={description}
                className="sp-card--seo"
                delay={Math.min(index, 5) * 0.04}
              />
            ))}
          </ServiceGrid>
        </Container>
      </section>

      <ServicePanel
        badge="FOCUS AREAS"
        title="The parts of search that work together."
        description="Technical foundations, useful content, authority, local search and analytics are planned as one connected practice."
      >
        <ServiceTags items={focusAreas} />
      </ServicePanel>

      <ServiceShowcase
        wash={false}
        badge="SEARCH PERFORMANCE"
        title="Be easier to find when the question matters."
        description="SEO supports discoverability, relevant organic traffic and a better website experience by making information, structure and performance clearer for both people and search engines."
        link={{ to: "/contact#contact-form", label: "Talk through your search visibility" }}
        visual={
          <>
            <SeoShowcaseVisual />
            <AnalyticsPanel />
          </>
        }
      />

      <ServiceProcess
        badge="OUR SEO PROCESS"
        title="A deliberate path from search questions to continuous improvement."
        steps={seoProcess}
        journey={<SeoProcessJourney />}
      />

      <ServiceBenefits
        badge="WHY SEO MATTERS"
        title="Measure the signals that guide the next decision."
        description="Reporting can focus on the evidence most useful to the work—not a single vanity number."
        items={seoBenefits}
        icons={benefitIcons}
        link={{ to: "/contact#contact-form", label: "Discuss search visibility" }}
      />

      <ServicePanel
        wash={false}
        badge="SEO REPORTING AND MEASUREMENT"
        title="Keep a clear view of the work in motion."
        description="Monitoring can include the signals most relevant to technical, content and experience improvements."
      >
        <ServiceTags items={seoMeasurement} />
      </ServicePanel>

      <ServiceFAQ
        title="Search strategy starts with the right questions."
        description="If your website has a specific visibility challenge, we are happy to talk it through."
        faqs={seoFaqs}
      />

      <ServiceFinalCTA
        title="Improve Your Search Visibility"
        description="Bring us the pages, audiences or technical challenges you want to make easier to discover."
        ctaLabel="Discuss Your Project"
      />
    </ServicePageLayout>
  );
};

export default SeoPage;
