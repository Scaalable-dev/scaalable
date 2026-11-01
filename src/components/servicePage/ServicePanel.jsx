import Badge from "../ui/Badge";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

const ServicePanel = ({ wash = true, badge, title, description, children }) => (
  <section className={wash ? "section-wash" : undefined}>
    <Container>
      <Reveal className="sp-panel">
        <div>
          <Badge>{badge}</Badge>
          <h2>{title}</h2>
          {description ? <p>{description}</p> : null}
        </div>
        {children}
      </Reveal>
    </Container>
  </section>
);

export default ServicePanel;
