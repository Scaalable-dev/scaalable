import "./About.css";

import SectionHeading from "../../ui/SectionHeading";
import ValueCard from "./ValueCard";

import { values } from "./aboutData";

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <SectionHeading
          badge="About Us"
          title="More Than a Development Agency. Your Technology Partner."
          description="We help businesses turn ideas into scalable digital products through thoughtful design, modern technology, and long-term collaboration."
        />

        <div className="about__content">
          {/* Story */}
          <div className="about__story">
            <span className="about__eyebrow">Our Story</span>

            <h3 className="about__story-title">
              We build software that helps businesses grow—not just websites
              that look good.
            </h3>

            <p className="about__text">
              We started this agency with one simple belief: technology should
              solve real business problems. Too many companies invest in digital
              products that are difficult to maintain, slow to evolve, and fail
              to deliver meaningful results.
            </p>

            <p className="about__text">
              Our approach is different. We take time to understand your
              business, your challenges, and your goals before writing a single
              line of code. Every project is built with scalability,
              performance, and long-term success in mind.
            </p>

            <p className="about__text">
              Whether you're launching a new startup, modernizing an existing
              business, or automating internal workflows, we're committed to
              building software that creates lasting value.
            </p>

            <blockquote className="about__quote">
              "We don't just deliver projects. We build digital foundations for
              business growth."
            </blockquote>
          </div>

          {/* Values */}
          <div className="about__values">
            {values.map((value) => (
              <ValueCard key={value.id} value={value} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
