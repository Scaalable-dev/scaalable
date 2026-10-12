import { Laptop, Lightbulb, Users, BookOpen } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { whyJoinFeatures } from "../../data/jobs";
import "./WhyJoinSection.css";

const ICON_MAP = {
  Laptop: Laptop,
  Lightbulb: Lightbulb,
  Users: Users,
  BookOpen: BookOpen,
};

const WhyJoinSection = () => {
  return (
    <section className="why-join section-wash" id="why-scaalable" aria-labelledby="why-join-title">
      <Container>
        <SectionHeading
          badge="Culture & Experience"
          title="Why Scaalable?"
          description="Explore our collaborative environment built around hands-on experimentation, ownership, and practical technology learning."
        />

        <div className="why-join__grid">
          {whyJoinFeatures.map((feature, index) => {
            const Icon = ICON_MAP[feature.icon] ?? Laptop;
            return (
              <Reveal key={feature.id} delay={index * 0.08} amount={0.2}>
                <div className="why-join__card">
                  <div className="why-join__icon-bubble">
                    <Icon size={24} strokeWidth={2.2} aria-hidden="true" />
                  </div>
                  <h3 className="why-join__card-title">{feature.title}</h3>
                  <p className="why-join__card-desc">{feature.description}</p>
                  <div className="why-join__card-footer-line" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default WhyJoinSection;
