import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";

import Badge from "../ui/Badge";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

const normalizeFaq = (faq) => {
  if (Array.isArray(faq)) {
    const [id, question, answer] = faq;
    return { id, question, answer };
  }

  return faq;
};

const ServiceFAQ = ({
  id = "faq",
  wash = false,
  badge = "Questions, answered",
  title,
  description,
  faqs,
  ctaLabel = "Discuss your project",
  ctaTo = "/contact#contact-form",
}) => {
  const [openFaq, setOpenFaq] = useState(null);
  const items = faqs.map(normalizeFaq);

  return (
    <section className={wash ? "section-wash" : undefined} id={id}>
      <Container>
        <div className="sp-split">
          <Reveal className="sp-split__copy sp-faq__intro" direction="right">
            <Badge>{badge}</Badge>
            <h2>{title}</h2>
            <p>{description}</p>
            <Button as={Link} to={ctaTo} variant="outline" endIcon={<ArrowRight size={17} />}>
              {ctaLabel}
            </Button>
          </Reveal>
          <div className="sp-faq__list">
            {items.map((faq) => {
              const active = openFaq === faq.id;

              return (
                <article className={`sp-faq__item${active ? " is-open" : ""}`} key={faq.id}>
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenFaq(active ? null : faq.id)}
                      aria-expanded={active}
                    >
                      <span>{faq.question}</span>
                      <ChevronDown size={19} />
                    </button>
                  </h3>
                  {active ? <p>{faq.answer}</p> : null}
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServiceFAQ;
