import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import "./About.css";

import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";
import Reveal from "../../components/ui/Reveal";

import FounderCarousel from "./FounderCarousel";

import {
  aboutHero,
  aboutMeta,
  accountableDelivery,
  connectedPartner,
  ctaBanner,
  whyWeExist,
  workingWithUs,
} from "./aboutData";

const EASE = [0.16, 1, 0.3, 1];

const About = () => {
  const reduceMotion = useReducedMotion();

  /* No Helmet provider is mounted in main.jsx, so the page metadata is set
     directly — the same approach the home page uses. Without this every route
     inherits whatever index.html says. */
  useEffect(() => {
    document.title = aboutMeta.title;

    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", aboutMeta.description);

    let canonical = document.querySelector('link[rel="canonical"]');
    const existing = canonical?.getAttribute("href") ?? null;

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute("href", aboutMeta.canonical);

    /* Put it back on the way out. A canonical is the one tag here that would
       actively mislead if it outlived the page — leaving /about on top of
       /services would tell a crawler the two are the same document. */
    return () => {
      if (existing === null) canonical.remove();
      else canonical.setAttribute("href", existing);
    };
  }, []);

  return (
    <section className="about section" id="about">
      <div className="container">
        {/* ==================== 1 — HERO ==================== */}
        <section className="abt-hero" aria-labelledby="abt-hero-title">
          <div className="abt-hero__glow" aria-hidden="true" />

          <div className="abt-hero__grid">
            <div className="abt-hero__copy">
              <Reveal amount={0}>
                <Badge>{aboutHero.badge}</Badge>
              </Reveal>

              <Reveal delay={0.08} amount={0}>
                <h1 className="abt-hero__title" id="abt-hero-title">
                  {aboutHero.title}
                </h1>
              </Reveal>

              <Reveal delay={0.14} amount={0}>
                <p className="abt-hero__description">{aboutHero.description}</p>
              </Reveal>

              <Reveal className="abt-hero__actions" delay={0.2} amount={0}>
                <Button
                  as={Link}
                  to={aboutHero.primaryCta.to}
                  size="lg"
                  endIcon={<ArrowRight size={18} />}
                >
                  {aboutHero.primaryCta.text}
                </Button>

                <Button
                  as={Link}
                  to={aboutHero.secondaryCta.to}
                  variant="outline"
                  size="lg"
                >
                  {aboutHero.secondaryCta.text}
                </Button>
              </Reveal>
            </div>

            {/* Second in the source order as well as on screen, so a phone
                reads the copy before the photograph. */}
            <Reveal className="abt-hero__visual" delay={0.26} amount={0}>
              <img
                src={aboutHero.image}
                alt={aboutHero.imageAlt}
                width="1680"
                height="936"
                loading="eager"
                decoding="async"
              />
            </Reveal>
          </div>
        </section>

        {/* ============= 2 — ONE CONNECTED PARTNER ============= */}
        <section className="abt-flow" aria-labelledby="abt-flow-title">
          <div className="abt-flow__grid">
            <Reveal className="abt-flow__intro">
              <Badge>{connectedPartner.badge}</Badge>

              <h2 className="abt-heading" id="abt-flow-title">
                {connectedPartner.title}
              </h2>

              <p className="abt-lede">{connectedPartner.description}</p>
            </Reveal>

            <div className="abt-stages">
              {/* The connector is drawn once as the list arrives, top to
                  bottom, so the order of the stages is read as a direction.
                  It never repeats. Outside the <ol>, which may only contain
                  list items. */}
              {reduceMotion ? (
                <span className="abt-stages__line" aria-hidden="true" />
              ) : (
                <motion.span
                  className="abt-stages__line"
                  aria-hidden="true"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1, ease: EASE }}
                />
              )}

              <ol className="abt-stages__list">
                {connectedPartner.stages.map((stage, index) => (
                  <Reveal
                    as="li"
                    className="abt-stage"
                    key={stage.id}
                    delay={index * 0.08}
                  >
                    <span className="abt-stage__marker" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="abt-stage__body">
                      <h3 className="abt-stage__name">{stage.name}</h3>

                      <p className="abt-stage__description">
                        {stage.description}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ============= 3 — ACCOUNTABLE DELIVERY ============= */}
        <section className="abt-promise" aria-labelledby="abt-promise-title">
          <Reveal className="abt-intro">
            <Badge>{accountableDelivery.badge}</Badge>

            <h2 className="abt-heading" id="abt-promise-title">
              {accountableDelivery.title}
            </h2>

            <p className="abt-lede">{accountableDelivery.description}</p>
          </Reveal>

          {/* Separators rather than cards: four promises in one row read as a
              single commitment, where four boxes read as four features. */}
          <ul className="abt-promise__row">
            {accountableDelivery.commitments.map((commitment, index) => {
              const Icon = commitment.icon;

              return (
                <Reveal
                  as="li"
                  className="abt-promise__item"
                  key={commitment.id}
                  delay={index * 0.07}
                >
                  <span className="abt-promise__icon" aria-hidden="true">
                    <Icon size={20} strokeWidth={1.7} />
                  </span>

                  <h3 className="abt-promise__name">{commitment.name}</h3>

                  <p className="abt-promise__description">
                    {commitment.description}
                  </p>
                </Reveal>
              );
            })}
          </ul>
        </section>

        {/* ================= 4 — WHY WE EXIST ================= */}
        <section className="abt-why" aria-labelledby="abt-why-title">
          <Reveal className="abt-intro">
            <Badge>{whyWeExist.badge}</Badge>

            <h2 className="abt-heading" id="abt-why-title">
              {whyWeExist.title}
            </h2>
          </Reveal>

          {/* The story itself stays left-aligned below the centred
              introduction: three paragraphs of centred prose would be hard
              work to read. */}
          <div className="abt-why__grid">
            <Reveal className="abt-why__copy">
              <div className="abt-why__body">
                {whyWeExist.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>

              <p className="abt-why__closing">{whyWeExist.closing}</p>
            </Reveal>

            <Reveal className="abt-why__visual" delay={0.1} direction="left">
              <img
                src={whyWeExist.image}
                alt={whyWeExist.imageAlt}
                width="1677"
                height="938"
                loading="lazy"
                decoding="async"
              />
            </Reveal>
          </div>
        </section>

        {/* ============ FOUNDER — existing, unchanged ============ */}
        <section className="founders">
          <Badge>Introducing the Founder</Badge>

          <FounderCarousel />
        </section>

        {/* ============ 5 — WORKING WITH SCAALABLE ============ */}
        <section className="abt-work" aria-labelledby="abt-work-title">
          <Reveal className="abt-intro">
            <Badge>{workingWithUs.badge}</Badge>

            <h2 className="abt-heading" id="abt-work-title">
              {workingWithUs.title}
            </h2>

            <p className="abt-lede">{workingWithUs.description}</p>
          </Reveal>

          <ul className="abt-work__columns">
            {workingWithUs.items.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal
                  as="li"
                  className="abt-work__item"
                  key={item.id}
                  delay={index * 0.08}
                >
                  <span className="abt-work__icon" aria-hidden="true">
                    <Icon size={18} strokeWidth={1.7} />
                  </span>

                  <h3 className="abt-work__name">{item.name}</h3>

                  <p className="abt-work__description">{item.description}</p>
                </Reveal>
              );
            })}
          </ul>
        </section>

        {/* =================== 6 — FINAL CTA =================== */}
        <section className="about__cta" aria-labelledby="abt-cta-title">
          <div className="about__cta-content">
            <h2 className="about__cta-title" id="abt-cta-title">
              {ctaBanner.title}
            </h2>

            <p className="about__cta-description">{ctaBanner.description}</p>

            <Button as={Link} to={ctaBanner.cta.href} variant="light" size="lg">
              {ctaBanner.cta.text}
            </Button>
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
