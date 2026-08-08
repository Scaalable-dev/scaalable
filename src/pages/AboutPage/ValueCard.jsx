import "./ValueCard.css";

const ValueCard = ({ value }) => {
  const Icon = value.icon;

  return (
    <article className="value-card" data-accent={value.accent}>
      <div className="value-card__icon-box">
        <Icon className="value-card__icon" strokeWidth={1.8} />
      </div>

      <div className="value-card__content">
        <h3 className="value-card__title">{value.title}</h3>

        <p className="value-card__description">{value.description}</p>
      </div>
    </article>
  );
};

export default ValueCard;
