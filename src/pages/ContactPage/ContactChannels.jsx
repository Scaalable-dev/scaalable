import { ArrowRight } from "lucide-react";

import "./ContactChannels.css";

import Container from "../../components/ui/Container";
import SectionHeading from "../../components/ui/SectionHeading";

import { contactChannels } from "./contactData";

const ContactChannels = () => {
  return (
    <section className="channels section-wash--out" id="channels">
      <Container>
        <SectionHeading
          badge={contactChannels.badge}
          title={contactChannels.title}
          description={contactChannels.description}
        />

        <div className="channels__grid">
          {contactChannels.items.map((item) => {
            const Icon = item.icon;

            const externalProps = item.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {};

            return (
              <a
                className="channel-card"
                key={item.id}
                href={item.href}
                {...externalProps}
              >
                <span className="channel-card__icon">
                  <Icon size={22} strokeWidth={1.9} aria-hidden="true" />
                </span>

                <h3 className="channel-card__title">{item.title}</h3>

                <span className="channel-card__value">{item.value}</span>

                <p className="channel-card__description">{item.description}</p>

                <span className="channel-card__action">
                  {item.action}
                  <ArrowRight size={15} strokeWidth={2.2} aria-hidden="true" />
                </span>
              </a>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ContactChannels;
