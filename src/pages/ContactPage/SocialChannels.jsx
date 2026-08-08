import { ArrowUpRight } from "lucide-react";

import "./SocialChannels.css";

import Container from "../../components/ui/Container";
import SectionHeading from "../../components/ui/SectionHeading";

import { socialChannels } from "./contactData";

const SocialChannels = () => {
  return (
    <section className="social" id="social">
      <Container>
        <SectionHeading
          badge={socialChannels.badge}
          title={socialChannels.title}
          description={socialChannels.description}
        />

        <div className="social__grid">
          {socialChannels.items.map((item, index) => {
            const Icon = item.icon;

            return (
              <a
                className="social-card animate-fade-up"
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.action}
                style={{
                  "--accent": item.accent,
                  "--delay": `${index * 80}ms`,
                }}
              >
                <span className="social-card__icon">
                  <Icon aria-hidden="true" />
                </span>

                <span className="social-card__text">
                  <h3 className="social-card__label">{item.label}</h3>

                  <p className="social-card__subtitle">{item.subtitle}</p>
                </span>

                {/* Styled as a button but kept a span — the whole card is the
                    link, so nesting a real button here would be invalid. */}
                <span className="social-card__action">
                  {item.action}

                  <ArrowUpRight size={14} strokeWidth={2.4} aria-hidden="true" />
                </span>
              </a>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default SocialChannels;
