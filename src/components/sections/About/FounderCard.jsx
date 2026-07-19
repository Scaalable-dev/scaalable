import "./About.css";

import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

function FounderCard({ founder }) {
  return (
    <article className="founder-card">
      {/* Left Side */}
      <div className="founder-card__image-wrapper">
        <img
          src={founder.image}
          alt={founder.name}
          className="founder-card__image"
        />

        <div className="founder-card__overlay">
          <h3 className="founder-card__name">{founder.name}</h3>

          <p className="founder-card__role">{founder.role}</p>
        </div>
      </div>

      {/* Right Side */}
      <div className="founder-card__content">
        {/* Header */}
        <header className="founder-card__header">
          <h3 className="founder-card__heading">Hi, I'm {founder.name} 👋</h3>

          <p className="founder-card__subtitle">{founder.role}</p>
        </header>

        {/* Story */}
        <div className="founder-card__story">
          {founder.bio.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Quote */}
        <blockquote className="founder-card__quote">
          <p>"{founder.quote}"</p>

          <footer>— {founder.name}</footer>
        </blockquote>

        {/* Stats */}
        {/* Stats */}
        <div className="founder-card__stats">
          {founder.stats.map((stat) => (
            <article key={stat.label} className="founder-card__stat">
              <h4 className="founder-card__stat-value">{stat.value}</h4>

              <p className="founder-card__stat-label">{stat.label}</p>
            </article>
          ))}
        </div>

        {/* Technologies */}
        <div className="founder-card__technologies">
          {founder.technologies.map((tech) => (
            <span key={tech} className="founder-card__tech">
              {tech}
            </span>
          ))}
        </div>

        {/* Social Links */}
        <div className="founder-card__socials">
          <a
            href={founder.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="founder-card__social"
          >
            <FaGithub />
          </a>

          <a
            href={founder.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="founder-card__social"
          >
            <FaLinkedin />
          </a>

          <a
            href={founder.socials.email}
            aria-label="Email"
            className="founder-card__social"
          >
            <HiOutlineMail />
          </a>
        </div>
      </div>
    </article>
  );
}

export default FounderCard;
