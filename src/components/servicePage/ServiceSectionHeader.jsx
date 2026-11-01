import Badge from "../ui/Badge";
import Reveal from "../ui/Reveal";

const ServiceSectionHeader = ({ badge, title, description, center = false, className = "" }) => (
  <Reveal className={`sp-heading${center ? " sp-heading--center" : ""} ${className}`.trim()}>
    {badge ? <Badge>{badge}</Badge> : null}
    <h2>{title}</h2>
    {description ? <p>{description}</p> : null}
  </Reveal>
);

export default ServiceSectionHeader;
