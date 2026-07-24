import "./LegalModal.css";

import { useEffect } from "react";
import { X } from "lucide-react";

import {
  privacyPolicy,
  refundPolicy,
  cookiePolicy,
  termsAndConditions,
} from "./legalContent";

const LegalModal = ({ type, isOpen, onClose }) => {
  const legalContent = {
    privacy: privacyPolicy,
    refund: refundPolicy,
    cookie: cookiePolicy,
    terms: termsAndConditions,
  };

  const content = legalContent[type];

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !content) return null;

  return (
    <div
      className="legal-modal"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-labelledby="legal-modal-title"
    >
      <div
        className="legal-modal__container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="legal-modal__header">
          <h2 id="legal-modal-title">{content.title}</h2>

          <button
            type="button"
            className="legal-modal__close"
            onClick={onClose}
            aria-label="Close"
          >
            <X size={22} />
          </button>
        </div>

        <div className="legal-modal__body">
          <p className="legal-modal__updated">
            Last Updated: {content.updated}
          </p>

          {content.sections.map((section) => (
            <section key={section.id}>
              <h3>{section.heading}</h3>

              <p>{section.content}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LegalModal;
