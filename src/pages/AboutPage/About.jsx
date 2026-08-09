import "./About.css";
import { Link } from "react-router-dom";

import ValueCard from "./ValueCard";
import FounderCarousel from "./FounderCarousel";
import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";
import {
  aboutHero,
  aboutCompany,
  values,
  features,
  visionMission,
  coreValues,
  trackRecord,
  ctaBanner,
  story,
} from "./aboutData";
import WhoWeAre from "../../components/sections/WhoWeAre";
import WhyChooseUs from "../../components/sections/WhyChooseUs";

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        {/* -------------------------------About Hero Section------------------------------------------ */}
        {/* Entrance stagger matches the Services and Contact heroes, so the
            page announces itself the same way on load and on navigation.
            Only the hero is animated: everything below it is off screen at
            mount, and a mount-triggered animation there would finish long
            before it was ever scrolled into view. */}
        <section className="about__hero">
          <div className="about__hero-badge animate-fade-up">
            <Badge>{aboutHero.badge}</Badge>
          </div>

          <div className="about__hero-grid">
            <div className="about__hero-content">
              <h2
                className="about__hero-title animate-fade-up"
                style={{ "--delay": "80ms" }}
              >
                We Build Digital & IT Solutions That Scale Your Business{" "}
                <span className="about__hero-gradient">Beyond Limits</span>
              </h2>

              <p
                className="about__hero-description animate-fade-up"
                style={{ "--delay": "160ms" }}
              >
                {aboutHero.description}
              </p>

              <div
                className="about-hero__actions animate-fade-up"
                style={{ "--delay": "240ms" }}
              >
                {/* `as={Link}` renders one element. Wrapping the Button in a
                    Link instead nests a <button> inside an <a>, which is
                    invalid and confuses keyboard and assistive-tech traversal. */}
                <Button as={Link} to="/contact#contact-form">
                  Book Free Strategy Call
                </Button>

                <Button as={Link} to="/services" variant="outline">
                  View Services
                </Button>
              </div>
            </div>

            <div
              className="about__hero-image animate-fade-up"
              style={{ "--delay": "200ms" }}
            >
              <img src={aboutHero.image} alt="About Scaalable" />
            </div>
          </div>
        </section>

        {/* ------------------------ Track Record ---------------------- */}
        <section className="about__track-record">
          <div className="about__track-record-header">
            <Badge>{trackRecord.badge}</Badge>

            <h3 className="about__track-record-title">{trackRecord.title}</h3>

            <p className="about__track-record-subtitle">
              {trackRecord.subtitle}
            </p>
          </div>

          <div className="about__track-record-grid">
            {trackRecord.stats.map((stat) => (
              <div className="stat-card" key={stat.id}>
                <span className="stat-card__value">{stat.value}</span>

                <span className="stat-card__label">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------------About The Company-------------------------------------- */}
        <section className="about__content">
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
        </section>

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

        {/* ------------------------ Core Values ---------------------- */}
        <section className="about__core-values">
          <div className="about__core-values-header">
            <Badge>{coreValues.badge}</Badge>

            <h3 className="about__core-values-title">{coreValues.title}</h3>
          </div>

          <div className="about__core-values-grid">
            {coreValues.items.map((value) => (
              <ValueCard key={value.id} value={value} />
            ))}
          </div>
        </section>

        {/* ------------------------ Who We Are ----------------------------  */}
        <WhoWeAre />

        {/* ------------------------ Why Choose Scaalable ------------------- */}
        <WhyChooseUs />

        {/* ------------------------founders----------------------------  */}
        <section className="founders">
          <Badge>Introducing the Founder</Badge>

          <FounderCarousel />
        </section>

        {/* ------------------------ CTA Banner ---------------------- */}
        <section className="about__cta">
          <div className="about__cta-content">
            <h3 className="about__cta-title">{ctaBanner.title}</h3>

            {ctaBanner.paragraphs.map((paragraph, index) => (
              <p key={index} className="about__cta-description">
                {paragraph}
              </p>
            ))}

            <Button
              as={Link}
              to={ctaBanner.cta.href}
              variant="light"
              size="lg"
            >
              {ctaBanner.cta.text}
            </Button>
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
