import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import Badge from "../ui/Badge";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

const ServiceBenefits = ({
  wash = true,
  badge,
  title,
  description,
  link,
  items,
  icons = [],
}) => (
  <section className={wash ? "section-wash" : undefined}>
    <Container>
      <div className="sp-split">
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
        <div className="sp-benefits">
          {items.map(([itemTitle, itemDescription], index) => {
            const Icon = icons[index];

            return (
              <Reveal key={itemTitle} delay={index * 0.06}>
                <article className="sp-benefit">
                  {Icon ? (
                    <span>
                      <Icon size={19} />
                    </span>
                  ) : null}
                  <div>
                    <h3>{itemTitle}</h3>
                    <p>{itemDescription}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Container>
  </section>
);

export default ServiceBenefits;
