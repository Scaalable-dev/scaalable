import { useEffect, useRef } from "react";
import {
  BellRing,
  CircleAlert,
  Computer,
  FileText,
  Gauge,
  LifeBuoy,
  MonitorCog,
  ServerCog,
  ShieldCheck,
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
import {
  benefitPoints,
  faqs,
  itSupportSeo,
  serviceModel,
  servicesIncluded,
  workflowSteps,
} from "./itSupportData";
import {
  ItHeroVisual,
  ItOperationsJourney,
  ItServiceArt,
  ItShowcaseVisual,
} from "./ItSupportVisuals";
import "./ItSupport.css";

const serviceIcons = [
  Wrench,
  MonitorCog,
  ServerCog,
  Gauge,
  ShieldCheck,
  CircleAlert,
  Gauge,
  LifeBuoy,
  FileText,
  Computer,
  BellRing,
  ServerCog,
];
const benefitIcons = [Wrench, Gauge, FileText, ShieldCheck, LifeBuoy, BellRing];

const numberedWorkflow = workflowSteps.map(([title, description], index) => [
  String(index + 1).padStart(2, "0"),
  title,
  description,
]);

const ItSupportPage = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    applyPageSeo(itSupportSeo());
  }, []);

  return (
    <ServicePageLayout>
      <ServiceHero
        heroRef={heroRef}
        eyebrow="MANAGED TECHNOLOGY OPERATIONS"
        title="IT Support & Managed Services"
        subtitle="Keep critical systems secure, stable and moving forward."
        description="Ongoing technical support, monitoring and maintenance that protects uptime, performance and operational continuity."
        primaryCta={{ label: "Discuss Your IT Requirements", to: "/contact#contact-form" }}
        secondaryCta={{ label: "Explore Our Services", to: "/services" }}
        visual={<ItHeroVisual />}
      />

      <section>
        <Container>
          <ServiceSectionHeader
            badge="SERVICES INCLUDED"
            title="Operational support designed to keep business systems reliable."
            description="Managed technology operations bring together maintenance, monitoring, support and routine administration so day-to-day work can continue with fewer surprises."
          />
          <ServiceGrid>
            {servicesIncluded.map(([title, description], index) => (
              <ServiceCard
                key={title}
                icon={serviceIcons[index]}
                title={title}
                description={description}
                delay={Math.min(index, 5) * 0.04}
                visual={<ItServiceArt index={index} />}
              />
            ))}
          </ServiceGrid>
        </Container>
      </section>

      <ServicePanel
        badge="SERVICE MODEL"
        title="Six functions working as one operational framework."
        description="Monitoring, maintenance, security, SLA, help desk and administration are coordinated as a single support model."
      >
        <ServiceTags items={serviceModel.map(({ label }) => label)} />
      </ServicePanel>

      <ServiceShowcase
        wash={false}
        badge="INFRASTRUCTURE & SYSTEM HEALTH"
        title="Illustrative overview of a monitored technology environment."
        description="All metrics and statuses shown are example values for presentation purposes only and do not represent actual Scaalable performance or operations."
        visual={<ItShowcaseVisual />}
      />

      <ServiceProcess
        badge="ILLUSTRATIVE WORKFLOW"
        title="Monitor → Detect → Diagnose → Resolve → Verify → Report"
        description="Example lifecycle: monitoring, issue tracking and maintenance are coordinated as part of one continuous operational loop."
        steps={numberedWorkflow}
        journey={<ItOperationsJourney />}
      />

      <ServiceBenefits
        badge="WHY MANAGED IT SERVICES MATTER"
        title="Operational continuity is easier when the right checks and processes are in place."
        description="Managed support helps teams keep infrastructure stable, improve visibility and address issues in a structured way before small problems spread."
        items={benefitPoints}
        icons={benefitIcons}
      />

      <ServiceFAQ
        title="Questions about support and ongoing operations."
        description="We can shape a managed support model around your systems, team and operational priorities."
        faqs={faqs}
        ctaLabel="Talk to Our Team"
      />

      <ServiceFinalCTA
        badge="Keep technology dependable"
        title="Keep Your Technology Running Reliably"
        description="Let’s discuss the maintenance, monitoring, and technical support your business needs."
        ctaLabel="Talk to Our Team"
      />
    </ServicePageLayout>
  );
};

export default ItSupportPage;
