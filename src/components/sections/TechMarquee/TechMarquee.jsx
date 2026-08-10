import { useEffect, useRef } from "react";

import { technologies } from "./techMarqueeData";

import "./TechMarquee.css";

const TechItem = ({ tech }) => {
  const { Icon, name, discipline, accent } = tech;

  return (
    <li
      className="tech-marquee__item"
      style={{ "--tech-accent": accent.token, "--tech-accent-rgb": accent.rgb }}
      /* The discipline is the useful extra detail on hover; the visible label is
         already the technology's name. */
      title={`${name} — ${discipline}`}
    >
      <span className="tech-marquee__icon" aria-hidden="true">
        <Icon />
      </span>

      <span className="tech-marquee__name">{name}</span>
    </li>
  );
};

/**
 * Continuously scrolling technology strip.
 *
 * Two identical tracks sit side by side and both translate a full track width,
 * which loops seamlessly without measuring anything. Only the first is exposed
 * to assistive tech — the second is a visual duplicate and would otherwise read
 * the whole list twice.
 *
 * Motion stops on hover and on focus within the strip, and is disabled outright
 * under prefers-reduced-motion.
 */
const TechMarquee = () => {
  const sectionRef = useRef(null);

  /* The scroll is compositor-only, but it still ran forever after the strip
     left the viewport — which on this page is most of every visit. The
     animation now pauses off-screen and picks up where it left off. */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        section.toggleAttribute("data-offscreen", !entry.isIntersecting);
      },
      { threshold: 0 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="tech-marquee"
      aria-labelledby="tech-marquee-heading"
      ref={sectionRef}
    >
      <h2 id="tech-marquee-heading" className="visually-hidden">
        Technologies we build with
      </h2>

      {/* Deliberately outside .container — the bar runs edge to edge. */}
      <div className="tech-marquee__rail">
        <div className="tech-marquee__viewport">
          <ul className="tech-marquee__track">
            {technologies.map((tech) => (
              <TechItem key={tech.id} tech={tech} />
            ))}
          </ul>

          <ul className="tech-marquee__track" aria-hidden="true">
            {technologies.map((tech) => (
              <TechItem key={`${tech.id}-echo`} tech={tech} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;
