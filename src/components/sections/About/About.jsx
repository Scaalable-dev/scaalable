import "./About.css";

import ValueCard from "./ValueCard";
import FounderCarousel from "./FounderCarousel";
import Badge from "../../ui/Badge";
import {
  aboutHero,
  aboutCompany,
  values,
  features,
  visionMission,
  cta,
  story,
} from "./aboutData";

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        {/* -------------------------------About Hero Section------------------------------------------ */}
        <section className="about__hero">
          <div className="about__hero-badge">
            <Badge>{aboutHero.badge}</Badge>
          </div>

          <div className="about__hero-grid">
            <div className="about__hero-content">
              <h2 className="about__hero-title">
                More Than a Development Agency. Your{" "}
                <span className="about__hero-gradient">
                  Technology Partner.
                </span>
              </h2>

              <p className="about__hero-description">{aboutHero.description}</p>
            </div>

            <div className="about__hero-image">
              <img src={aboutHero.image} alt="About Scaalable" />
            </div>
          </div>
        </section>

        {/* ---------------------About The Company-------------------------------------- */}
        <div className="about__content">
          <div className="about__story">
            <span className="about__eyebrow">{aboutCompany.eyebrow}</span>

            <h3 className="about__story-title">{aboutCompany.title}</h3>

            {aboutCompany.paragraphs.map((paragraph, index) => (
              <p key={index} className="about__text">
                {paragraph}
              </p>
            ))}

            <blockquote className="about__quote">
              {aboutCompany.quote}
            </blockquote>
          </div>

          <div className="about__values">
            {values.map((value) => (
              <ValueCard key={value.id} value={value} />
            ))}
          </div>
        </div>

        {/* ------------------------what set us apart section----------------------------  */}
        <section className="about__features">
          <div className="about__features-header">
            <span className="about__eyebrow">{features.badge}</span>

            <h3 className="about__features-title">{features.title}</h3>
          </div>

          <div className="about__features-grid">
            {features.items.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.id} className="feature-card">
                  <div className="feature-card__icon">
                    <Icon strokeWidth={1.8} />
                  </div>

                  <h4>{item.title}</h4>

                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        {/* ------------------------ Our Story ------------------------ */}

        <section className="about__story-section">
          <div className="about__story-layout">
            <div className="story">
              <span className="about__eyebrow">{story.badge}</span>

              <h3 className="story__title">{story.title}</h3>

              <p className="story__subtitle">{story.subtitle}</p>

              <blockquote className="story__quote">"{story.quote}"</blockquote>

              <div className="story__content">
                {story.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="story__image">
              <img src={story.image} alt="Scaalable Team" />
            </div>
          </div>
        </section>

        {/* ------------------------vision and mission section----------------------------  */}
        {/* ---------------- Vision & Mission ---------------- */}

        <section className="about__vision">
          <div className="about__vision-wrapper">
            {visionMission.cards.map((card, index) => {
              const Icon = card.icon;

              return (
                <article key={card.id} className="vision-card">
                  <div className="vision-card__icon">
                    <Icon strokeWidth={1.8} />
                  </div>

                  <div className="vision-card__content">
                    <span className="vision-card__label">
                      {card.title.toUpperCase()}
                    </span>

                    <p>{card.description}</p>
                  </div>

                  {index === 0 && <div className="vision-divider" />}
                </article>
              );
            })}
          </div>
        </section>

        {/* ------------------------CTA----------------------------  */}
        <section className="about__cta">
          <span className="about__eyebrow">{cta.badge}</span>

          <h3 className="about__cta-title">{cta.title}</h3>

          <p className="about__cta-description">{cta.description}</p>

          <a href={cta.primaryButton.href} className="about__cta-button">
            {cta.primaryButton.text}
          </a>

          <p className="about__cta-secondary">{cta.secondaryText}</p>
        </section>

        {/* ------------------------founders----------------------------  */}
        <section className="founders">
          <div className="founders__header">
            <span className="about__eyebrow">
              Meet the People Behind Scaalable
            </span>

            <h2 className="founders__title">
              The minds behind every solution we build.
            </h2>

            <p className="founders__description">
              We started Scaalable with a shared vision of helping businesses
              build modern, scalable, and meaningful digital products through
              thoughtful engineering and long-term partnerships.
            </p>
          </div>

          <FounderCarousel />
        </section>
      </div>
    </section>
  );
};

export default About;
