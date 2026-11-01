import Reveal from "../ui/Reveal";

const ServiceCard = ({ icon: Icon, title, description, delay = 0, visual, className = "" }) => (
  <Reveal delay={delay}>
    <article className={`sp-card ${className}`.trim()}>
      {visual ? <div className="sp-card__visual">{visual}</div> : null}
      {!visual && Icon ? (
        <span className="sp-card__icon">
          <Icon size={21} />
        </span>
      ) : null}
      <h3>{title}</h3>
      {description ? <p>{description}</p> : null}
      <span className="sp-card__line" />
    </article>
  </Reveal>
);

export default ServiceCard;
