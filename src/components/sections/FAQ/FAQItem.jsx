import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1];

const FAQItem = ({ item, isActive, onToggle }) => {
  const reduceMotion = useReducedMotion();

  const panelId = `faq-panel-${item.id}`;
  const buttonId = `faq-trigger-${item.id}`;

  return (
    <article className={`faq__item ${isActive ? "is-active" : ""}`.trim()}>
      <h3 className="faq__question-heading">
        <button
          id={buttonId}
          type="button"
          className="faq__question"
          onClick={onToggle}
          aria-expanded={isActive}
          aria-controls={panelId}
        >
          <span className="faq__question-text">{item.question}</span>

          <span className="faq__icon" aria-hidden="true">
            <Plus size={18} strokeWidth={2.4} />
          </span>
        </button>
      </h3>

      {/* Animating height rather than max-height: a fixed max-height clips long
          answers and makes the easing depend on how much slack is left over. */}
      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            className="faq__answer-wrapper"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.38,
              ease: EASE,
              opacity: { duration: reduceMotion ? 0 : 0.25 },
            }}
          >
            <div className="faq__answer">
              <p>{item.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
};

export default FAQItem;
