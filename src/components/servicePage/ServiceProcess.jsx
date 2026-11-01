import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import ServiceSectionHeader from "./ServiceSectionHeader";

const ServiceProcess = ({ id, badge, title, description, steps, journey }) => (
  <section id={id}>
    <Container>
      <ServiceSectionHeader badge={badge} title={title} description={description} center />
      <div className="sp-process">
        {steps.map(([number, stepTitle, stepDescription], index) => (
          <Reveal key={number} delay={index * 0.05}>
            <article className="sp-step">
              <span className="sp-step__number">{number}</span>
              <div>
                <h3>{stepTitle}</h3>
                <p>{stepDescription}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      {journey}
    </Container>
  </section>
);

export default ServiceProcess;
