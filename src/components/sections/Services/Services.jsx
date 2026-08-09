import Reveal from "../../ui/Reveal";
import SectionHeading from "../../ui/SectionHeading";
import ServiceCard from "./ServiceCard";

import { services } from "./servicesData";

import "./Services.css";

/* Matches the widest `grid-template-columns` in Services.css. */
const COLUMNS = 3;

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services__background" aria-hidden="true"></div>

      <div className="container">
        <Reveal>
          <SectionHeading
            badge="Our Services"
            title="Solutions built around your business"
            description="From modern web applications to AI-powered automation, we design and build digital products that help businesses grow faster, operate smarter, and deliver exceptional customer experiences."
          />
        </Reveal>

        <div className="services__grid">
          {services.map((service, index) => {
            /* A trailing single card would sit alone in its row. Let it span the
               full width instead, so the grid always ends on a deliberate note
               however many services are listed. */
            const isWide =
              index === services.length - 1 && services.length % COLUMNS === 1;

            return (
              <Reveal
                key={service.id}
                className={`services__cell ${isWide ? "services__cell--wide" : ""}`.trim()}
                delay={(index % COLUMNS) * 0.08}
              >
                <ServiceCard service={service} wide={isWide} />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
