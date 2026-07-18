import { X } from "lucide-react";

import Button from "../../ui/Button";
import NavLinks from "./NavLinks.jsx";

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}

      <div
        className={`mobile-menu__overlay ${
          isOpen ? "mobile-menu__overlay--active" : ""
        }`}
        onClick={onClose}
      />

      {/* Drawer */}

      <aside className={`mobile-menu ${isOpen ? "mobile-menu--open" : ""}`}>
        {/* Header */}

        <div className="mobile-menu__header">
          <button
            type="button"
            className="mobile-menu__close"
            aria-label="Close navigation menu"
            onClick={onClose}
          >
            <X size={28} />
          </button>
        </div>

        {/* Navigation */}

        <ul className="mobile-menu__links">
          <NavLinks onLinkClick={onClose} />
        </ul>

        {/* CTA */}

        <div className="mobile-menu__footer">
          <Button fullWidth>Let's Talk</Button>
        </div>
      </aside>
    </>
  );
};

export default MobileMenu;
