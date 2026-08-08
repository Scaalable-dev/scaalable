import { Check } from "lucide-react";

import "./WhoWeAre.css";

import { whoWeAreHighlights, whoWeArePrinciples } from "./whoWeAreData";

const WhoWeAre = () => {
  return (
    <section className="who-we-are" id="who-we-are">
      <div className="container">
        <div className="who-we-are__grid">
          {/* Left Content */}
          <div className="who-we-are__content">
            <span className="who-we-are__badge">Who We Are</span>

            <h2 className="who-we-are__title">
              Engineers, Designers & Strategists Building Digital Products That
              Scale
            </h2>

            <div className="who-we-are__description">
              <p>
                Scaalable is a team of designers, developers, Engineers, digital
                marketers, SEO experts, strategists, and AI enthusiasts who all
                have the same purpose—to create digital products which make a
                difference for businesses. It's not about designing fancy
                websites and running campaigns.
              </p>

              <p>
                It's about analyzing your business, knowing your customers,
                spotting the opportunities, and developing digital solutions
                that will help your business grow steadily. The unique
                combination of creativity and technical skills allows us to come
                up with solutions that look good and work well.
              </p>
            </div>

            {/* Highlights */}
            <div className="who-we-are__highlights">
              {whoWeAreHighlights.map(({ id, title, description }) => (
                <article className="who-we-are__highlight" key={id}>
                  <div className="who-we-are__highlight-title">
                    <span className="who-we-are__check">
                      <Check size={14} strokeWidth={2.5} />
                    </span>

                    <h3>{title}</h3>
                  </div>

                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>

          {/* Right Cards */}
          <div className="who-we-are__principles">
            {whoWeArePrinciples.map(({ id, title, description }) => (
              <article className="who-we-are__principle" key={id}>
                <span
                  className="who-we-are__principle-accent"
                  aria-hidden="true"
                />

                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
