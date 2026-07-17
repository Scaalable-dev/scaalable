import "./ServiceCard.css";

const ServiceCard = ({ service }) => {
  const Icon = service.icon;

  return (
    <article className="service-card">
      <div className="service-card__media">
        <div className="service-card__icon-box">
          <Icon className="service-card__icon" strokeWidth={1.8} />
        </div>
      </div>

      <div className="service-card__body">
        <h3 className="service-card__title">{service.title}</h3>

        <p className="service-card__description">{service.description}</p>
      </div>

      <div className="service-card__footer">
        <div className="service-card__tags">
          {service.tags.map((tag) => (
            <span key={tag} className="service-card__tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;
