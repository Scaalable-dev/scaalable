import Container from "../../ui/Container";
import Reveal from "../../ui/Reveal";
import SectionHeading from "../../ui/SectionHeading";
import TiltCard from "../../ui/TiltCard";
import whoWeHelpData from "./whoWeHelpData";

import "./WhoWeHelp.css";

const WhoWeHelp = () => {
  return (
    <section className="who-we-help" id="who-we-help">
      <Container>
        <Reveal>
          <SectionHeading
            badge={whoWeHelpData.badge}
            title={whoWeHelpData.title}
            description={whoWeHelpData.description}
            align="center"
          />
        </Reveal>

        <div className="who-we-help__grid">
          {whoWeHelpData.industries.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={index * 0.09}>
                <TiltCard className="who-we-help__card">
                  <span className="who-we-help__index" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="who-we-help__icon">
                    <Icon size={26} strokeWidth={1.9} />
                  </span>

                  <h3 className="who-we-help__card-title">{item.title}</h3>

                  <p className="who-we-help__card-text">{item.description}</p>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default WhoWeHelp;
