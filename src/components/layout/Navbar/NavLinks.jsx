import { NavLink } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronRight } from "lucide-react";

import navLinks from "./navLinks";
import { NAV_INDICATOR_SPRING, NAV_ITEM_VARIANTS } from "./navMotion";

const NavLinks = ({ onLinkClick, variant = "desktop" }) => {
  const reduceMotion = useReducedMotion();

  const isMobile = variant === "mobile";

  return (
    <>
      {navLinks.map(({ id, label, to, end }) => (
        <motion.li
          key={id}
          className="navbar__item"
          variants={NAV_ITEM_VARIANTS}
        >
          <NavLink
            to={to}
            end={end}
            onClick={onLinkClick}
            className={({ isActive }) =>
              `navbar__link ${isActive ? "is-active" : ""}`.trim()
            }
          >
            {({ isActive }) => (
              <>
                {/* Shared layout element, so framer-motion slides one underline
                    between links rather than cross-fading two. Desktop only:
                    the drawer marks its active row through the label's own
                    underline, and a layout animation there would measure
                    against the entry stagger's in-flight transform. */}
                {isActive && !isMobile && (
                  <motion.span
                    layoutId="navbar-indicator"
                    className="navbar__indicator"
                    transition={
                      reduceMotion ? { duration: 0 } : NAV_INDICATOR_SPRING
                    }
                  />
                )}

                <span className="navbar__link-label">{label}</span>

                {isMobile && (
                  <ChevronRight
                    className="navbar__link-chevron"
                    size={18}
                    aria-hidden="true"
                  />
                )}
              </>
            )}
          </NavLink>
        </motion.li>
      ))}
    </>
  );
};

export default NavLinks;
