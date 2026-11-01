import { useEffect, useRef } from "react";
import {
  Database,
  GitBranch,
  Mail,
  MessageSquare,
  ShieldCheck,
  UsersRound,
  Workflow,
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
import "./AiAutomation.css";
import {
  AiHeroVisual,
  AiIntegrationVisual,
  AiProcessJourney,
  AiServiceArt,
  AiWorkflowShowcase,
} from "./AiAutomationVisuals";
import {
  benefits,
  faqs,
  process,
  safeguards,
  seo,
  services,
  technologies,
} from "./aiAutomationData";

const benefitIcons = [MessageSquare, UsersRound, Workflow, Mail, Database, GitBranch];

const AiAutomationPage = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    applyPageSeo(seo());
  }, []);

  return (
    <ServicePageLayout className="sp-page--ai-automation">
      <ServiceHero
        heroRef={heroRef}
        eyebrow="INTELLIGENT AUTOMATION"
        title="AI Automation Solutions"
        subtitle="Automate your business with artificial intelligence."
        description="Save time and improve efficiency through AI-powered workflows, intelligent agents and automation solutions connected to your existing business systems."
        primaryCta={{ label: "Automate Your Workflow", to: "/contact#contact-form" }}
        secondaryCta={{ label: "Discuss Your Project", to: "/contact#contact-form" }}
        visual={<AiHeroVisual />}
      />

      <section>
        <Container>
          <ServiceSectionHeader
            badge="SERVICES INCLUDED"
            title="Automation designed around how the business already works."
            description="From one helpful assistant to a connected multi-step workflow, we build around the task, the people and the systems involved."
          />
          <ServiceGrid>
            {services.map(([title, description], index) => (
              <ServiceCard
                key={title}
                visual={<AiServiceArt kind={index} />}
                title={title}
                description={description}
                className="sp-card--ai-automation"
                delay={Math.min(index, 5) * 0.04}
              />
            ))}
          </ServiceGrid>
        </Container>
      </section>

      <ServicePanel
        badge="TECHNOLOGIES"
        title="Relevant tools, selected around the workflow."
        description="We choose the AI and automation tools that best fit the systems, review points and outcomes involved."
      >
        <ServiceTags items={technologies} />
      </ServicePanel>

      <ServiceShowcase
        wash={false}
        badge="HOW AI AUTOMATION WORKS"
        title="One illustrative workflow, from an enquiry to the next right action."
        description="Example only—each workflow is mapped around the systems and review points relevant to your business."
        visual={
          <>
            <AiWorkflowShowcase />
            <AiIntegrationVisual />
          </>
        }
      />

      <ServiceProcess
        badge="IMPLEMENTATION PROCESS"
        title="Start with the work, then shape the automation around it."
        steps={process}
        journey={<AiProcessJourney />}
      />

      <ServiceBenefits
        badge="BUSINESS USE CASES"
        title="Useful automation for the work that keeps teams moving."
        description="Important automation deserves clear safeguards, including access control, fallback behaviour and human review for important decisions."
        items={benefits}
        icons={benefitIcons}
      />

      <ServicePanel
        wash={false}
        badge="SECURITY AND RELIABILITY"
        title="Important automation deserves clear safeguards."
        description="We consider the practical controls and fallback behaviour that help a workflow stay useful in real conditions."
      >
        <ServiceTags items={safeguards} icon={ShieldCheck} />
      </ServicePanel>

      <ServiceFAQ
        title="Bring us the workflow you want to make easier."
        description="We can start with the recurring task, system or customer journey you are considering."
        faqs={faqs}
      />

      <ServiceFinalCTA
        title="Let’s Automate Your Business"
        description="Share the workflow or task you want to improve, and we’ll help identify a practical next step."
        ctaLabel="Automate Your Workflow"
      />
    </ServicePageLayout>
  );
};

export default AiAutomationPage;
