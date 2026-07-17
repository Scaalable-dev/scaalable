import "./Services.css";

import SectionHeading from "../../ui/SectionHeading";
import ServiceCard from "./ServiceCard";

import { services } from "./servicesData";

const Services = () => {
  return (
    <section className="services section" id="services">
      <div className="services__background"></div>

      <div className="container">
        <SectionHeading
          badge="Our Services"
          title="Solutions Built Around Your Business"
          description="From modern web applications to AI-powered automation, we design and build digital products that help businesses grow faster, operate smarter, and deliver exceptional customer experiences."
        />

        <div className="services__grid">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
