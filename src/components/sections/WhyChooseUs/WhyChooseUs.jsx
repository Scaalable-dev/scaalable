import "./WhyChooseUs.css";

import Badge from "../../ui/Badge";
import { whyChooseUsData } from "./whyChooseUsData";

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us" id="why-choose-us">
      <div className="container">
        {/* Section Header */}
        <div className="why-choose-us__header">
          <Badge>Why Choose Scaalable</Badge>

          <h2 className="why-choose-us__title">
            Built for More Than Just Project Delivery
          </h2>

          <p className="why-choose-us__description">
            We combine thoughtful product decisions, reliable engineering, and
            transparent collaboration to build digital products designed for
            long-term growth.
          </p>
        </div>

        {/* Cards */}
        <div className="why-choose-us__grid">
          {whyChooseUsData.map(({ id, title, description }) => (
            <article className="why-choose-us__card" key={id}>
              <span className="why-choose-us__number">{id}</span>

              <div className="why-choose-us__card-content">
                <h3>{title}</h3>

                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
