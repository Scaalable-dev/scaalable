import Container from "../../ui/Container";
import SectionHeading from "../../ui/SectionHeading";
import whoWeHelpData from "./whoWeHelpData";

import "./WhoWeHelp.css";

const WhoWeHelp = () => {
  return (
    <section className="who-we-help">
      <Container>
        <SectionHeading
          title={whoWeHelpData.title}
          description={whoWeHelpData.description}
          align="center"
        />

        <div className="who-we-help__grid">
          {whoWeHelpData.industries.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.title} className="who-we-help__card">
                <div className="who-we-help__icon">
                  <Icon size={32} strokeWidth={2} />
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default WhoWeHelp;
