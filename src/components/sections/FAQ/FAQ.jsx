import { useState } from "react";
import { ChevronDown } from "lucide-react";

import "./FAQ.css";

import SectionHeading from "../../ui/SectionHeading";
import { faqData } from "./faqData";
import Button from "../../ui/Button";

const FAQ = () => {
  const [activeId, setActiveId] = useState(null);

  const handleToggle = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="faq" id="faq">
      <div className="container">
        <SectionHeading
          badge="Frequently Asked Questions"
          title="Everything You Need to Know"
          description="We've answered the questions we hear most often from businesses before starting a project. If you still need help, we're always happy to chat."
        />

        <div className="faq__list">
          {faqData.map((item) => {
            const isActive = activeId === item.id;

            return (
              <article
                key={item.id}
                className={`faq__item ${isActive ? "active" : ""}`}
              >
                <button
                  className="faq__question"
                  onClick={() => handleToggle(item.id)}
                  aria-expanded={isActive}
                >
                  <span>{item.question}</span>

                  <ChevronDown className="faq__icon" size={20} />
                </button>

                <div
                  className={`faq__answer-wrapper ${isActive ? "active" : ""}`}
                >
                  <div className="faq__answer">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="faq__footer">
          <h3>Still have questions?</h3>

          <p>
            If you couldn't find the answer you're looking for, feel free to
            reach out. We'd be happy to discuss your project and help you move
            forward.
          </p>

          <Button href="#contact" variant="primary">
            Let's Talk
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
