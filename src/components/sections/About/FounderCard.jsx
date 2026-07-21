import "./About.css";

import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

function FounderCard({ founder }) {
  return (
    <article className="founder-card">
      {/* Left */}
      <div className="founder-card__left">
        <div className="founder-card__circle">
          <img
            src={founder.image}
            alt={founder.name}
            loading="lazy"
            decoding="async"
            className="founder-card__image"
          />
        </div>
      </div>

      {/* Right */}
      <div className="founder-card__right">
        <h2 className="founder-card__name">{founder.name}</h2>

        <p className="founder-card__role">{founder.role}</p>

        <div className="founder-card__bio">
          {founder.bio.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="founder-card__socials">
          <a href={founder.socials.linkedin} target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>

          <a href={founder.socials.instagram} target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href={founder.socials.facebook} target="_blank" rel="noreferrer">
            <FaFacebook />
          </a>

          <a href={founder.socials.email}>
            <HiOutlineMail />
          </a>
        </div>
      </div>
    </article>
  );
}

export default FounderCard;
