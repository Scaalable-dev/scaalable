import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import Badge from "../ui/Badge";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

const ServiceShowcase = ({ wash = true, badge, title, description, link, visual }) => (
  <section className={wash ? "section-wash" : undefined}>
    <Container>
      <div className="sp-split sp-split--visual">
        <Reveal className="sp-split__copy" direction="right">
          <Badge>{badge}</Badge>
          <h2>{title}</h2>
          <p>{description}</p>
          {link ? (
            <Link to={link.to} className="sp-text-link">
              {link.label} <ArrowRight size={16} />
            </Link>
          ) : null}
        </Reveal>
        <Reveal>{visual}</Reveal>
      </div>
    </Container>
  </section>
);

export default ServiceShowcase;
