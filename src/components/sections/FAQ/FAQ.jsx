import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import Badge from "../../ui/Badge";
import Button from "../../ui/Button";
import Reveal from "../../ui/Reveal";
import FAQItem from "./FAQItem";
import { faqData } from "./faqData";

import "./FAQ.css";

const FAQ = () => {
  const [activeId, setActiveId] = useState(null);

  const handleToggle = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="faq section-wash" id="faq">
      <div className="container">
        <div className="faq__layout">
          <Reveal className="faq__aside" direction="right">
            <div className="faq__aside-inner">
              <Badge>Before we begin</Badge>

              <h2 className="faq__title">Clear answers reduce risk.</h2>

              <p className="faq__description">
                Scaalable answered the questions we hear most often from
                businesses before starting a project. If something isn't covered
                here, we're always happy to talk it through.
              </p>

              <div className="faq__cta">
                <p className="faq__cta-text">Still have questions?</p>

                <Button
                  as={Link}
                  to="/contact#contact-form"
                  variant="outline"
                  endIcon={<ArrowRight size={17} />}
                >
                  Talk to us
                </Button>
              </div>
            </div>
          </Reveal>

          <div className="faq__list">
            {faqData.map((item, index) => (
              <Reveal
                key={item.id}
                /* Cap the ramp — a 9-item stagger at full rate leaves the last
                   card arriving long after the user has started reading. */
                delay={Math.min(index, 4) * 0.06}
                amount={0.1}
              >
                <FAQItem
                  item={item}
                  isActive={activeId === item.id}
                  onToggle={() => handleToggle(item.id)}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
