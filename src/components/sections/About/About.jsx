import "./About.css";

import ValueCard from "./ValueCard";
import FounderCarousel from "./FounderCarousel";
import Badge from "../../ui/Badge";
import {
  aboutHero,
  aboutCompany,
  values,
  features,
  timeline,
  visionMission,
  cta,
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

        {/* ------------------------timeline section----------------------------  */}
        <section className="about__timeline">
          <div className="about__timeline-content">
            {/* LEFT */}

            <div className="timeline">
              <span className="about__eyebrow">{timeline.badge}</span>

              <h3 className="timeline__title">{timeline.title}</h3>

              <p className="timeline__description">{timeline.description}</p>

              <div className="timeline__list">
                {timeline.items.map((item) => (
                  <div className="timeline__item" key={item.id}>
                    <div className="timeline__year">
                      <span className="timeline__dot" />

                      <span>{item.year}</span>
                    </div>

                    <div className="timeline__body">
                      <h4>{item.title}</h4>

                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}

            <div className="timeline__image">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
                alt="Our Team"
              />
            </div>
          </div>
        </section>

        {/* ------------------------vision and mission section----------------------------  */}
        <section className="about__vision">
          <div className="about__vision-header">
            <span className="about__eyebrow">{visionMission.badge}</span>

            <h3 className="about__vision-title">{visionMission.title}</h3>

            <p className="about__vision-description">
              {visionMission.description}
            </p>
          </div>

          <div className="about__vision-grid">
            {visionMission.cards.map((card) => {
              const Icon = card.icon;

              return (
                <article key={card.id} className="vision-card">
                  <div className="vision-card__icon">
                    <Icon strokeWidth={1.8} />
                  </div>

                  <h4>{card.title}</h4>

                  <p>{card.description}</p>
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
