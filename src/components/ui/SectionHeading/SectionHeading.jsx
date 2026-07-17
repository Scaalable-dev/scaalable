import "./SectionHeading.css";
import Badge from "../Badge";

const SectionHeading = ({
  badge,
  title,
  description,
  align = "center",
  className = "",
}) => {
  return (
    <div
      className={`section-heading section-heading--${align} ${className}`.trim()}
    >
      {badge && <Badge>{badge}</Badge>}

      {title && <h2 className="section-heading__title">{title}</h2>}

      {description && (
        <p className="section-heading__description">{description}</p>
      )}
    </div>
  );
};

export default SectionHeading;
