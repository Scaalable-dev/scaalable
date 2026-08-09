import TiltCard from "../../ui/TiltCard";

import "./ServiceCard.css";

const ServiceCard = ({ service, wide = false }) => {
  const Icon = service.icon;

  return (
    <TiltCard
      className={`service-card ${wide ? "service-card--wide" : ""}`.trim()}
      /* A full-width card is a much larger surface, so the same angle reads as
         a far bigger warp. Dial it back. */
      max={wide ? 2.5 : 6}
      spotlightColor="rgba(137, 57, 250, 0.1)"
    >
      <div className="service-card__media">
        <span className="service-card__icon-tile">
          <Icon className="service-card__icon" strokeWidth={1.7} />
        </span>
      </div>

      <div className="service-card__content">
        <div className="service-card__text">
          <h3 className="service-card__title">{service.title}</h3>

          <p className="service-card__description">{service.description}</p>
        </div>

        <ul className="service-card__tags">
          {service.tags.map((tag) => (
            <li key={tag} className="service-card__tag">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </TiltCard>
  );
};

export default ServiceCard;
