import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { m, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";

import Button from "../../ui/Button";
import NavLinks from "./NavLinks.jsx";
import { NAV_LIST_VARIANTS } from "./navMotion";

const MobileMenu = ({ onClose }) => {
  const reduceMotion = useReducedMotion();

  const panelTransition = reduceMotion
    ? { duration: 0 }
    : { type: "spring", stiffness: 320, damping: 34 };

  /* Portalled to <body>: the header sets `backdrop-filter`, which makes it a
     containing block for fixed-position descendants. Left inside, the overlay's
     `inset: 0` would resolve against the header bar rather than the viewport
     and only dim the strip behind the nav. */
  return createPortal(
    <>
      {/* Overlay */}

      <m.div
        className="mobile-menu__overlay"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.25 }}
      />

      {/* Drawer */}

      <m.aside
        id="mobile-navigation"
        className="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={panelTransition}
      >
        <div className="mobile-menu__header">
          <span className="mobile-menu__title">Menu</span>

          <button
            type="button"
            className="mobile-menu__close"
            aria-label="Close navigation menu"
            onClick={onClose}
          >
            <X size={22} />
          </button>
        </div>

        <m.ul
          className="mobile-menu__links"
          variants={NAV_LIST_VARIANTS}
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
        >
          <NavLinks variant="mobile" onLinkClick={onClose} />
        </m.ul>

        <div className="mobile-menu__footer">
          <Button
            as={Link}
            to="/contact#contact-form"
            onClick={onClose}
            fullWidth
          >
            Book an Appointment
          </Button>
        </div>
      </m.aside>
    </>,
    document.body,
  );
};

export default MobileMenu;
