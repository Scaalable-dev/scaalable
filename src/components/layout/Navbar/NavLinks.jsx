import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { ChevronRight } from "lucide-react";

import navLinks from "./navLinks";
import { NAV_INDICATOR_SPRING, NAV_ITEM_VARIANTS } from "./navMotion";
import ServicesMegaMenu from "./ServicesMegaMenu";
import { mobileServicesList } from "./servicesMegaMenuData";

const NavLinks = ({ onLinkClick, variant = "desktop" }) => {
  const reduceMotion = useReducedMotion();
  const location = useLocation();

  const isMobile = variant === "mobile";

  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const closeTimerRef = useRef(null);
  const servicesItemRef = useRef(null);
  const servicesTriggerRef = useRef(null);

  // Close mega menu on route change without accessing refs or triggering setState in effect
  const currentLocationKey = location.pathname + location.hash;
  const [prevLocationKey, setPrevLocationKey] = useState(currentLocationKey);

  if (currentLocationKey !== prevLocationKey) {
    setPrevLocationKey(currentLocationKey);
    if (isMegaMenuOpen) {
      setIsMegaMenuOpen(false);
    }
  }

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  const handleServicesMouseEnter = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setIsMegaMenuOpen(true);
  };

  const handleServicesMouseLeave = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }
    closeTimerRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 180);
  };

  const handleOtherItemMouseEnter = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setIsMegaMenuOpen(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape" && isMegaMenuOpen) {
      event.preventDefault();
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
        closeTimerRef.current = null;
      }
      setIsMegaMenuOpen(false);
      servicesTriggerRef.current?.focus();
    }
  };

  const handleBlur = (event) => {
    if (!servicesItemRef.current?.contains(event.relatedTarget)) {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
        closeTimerRef.current = null;
      }
      setIsMegaMenuOpen(false);
    }
  };

  const handleServicesLinkClick = (event) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setIsMegaMenuOpen(false);
    if (onLinkClick) onLinkClick(event);
  };

  const handleMegaMenuClose = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setIsMegaMenuOpen(false);
  };

  return (
    <>
      {navLinks.map(({ id, label, to, end }) => {
        const isServices = id === "services";

        // Desktop Services Item with Mega Menu
        if (isServices && !isMobile) {
          return (
            <m.li
              key={id}
              ref={servicesItemRef}
              className="navbar__item navbar__item--has-megamenu"
              variants={NAV_ITEM_VARIANTS}
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
              onKeyDown={handleKeyDown}
              onBlur={handleBlur}
            >
              <NavLink
                ref={servicesTriggerRef}
                to={to}
                end={end}
                onClick={handleServicesLinkClick}
                onFocus={handleServicesMouseEnter}
                aria-expanded={isMegaMenuOpen}
                aria-haspopup="true"
                aria-controls="services-mega-menu"
                className={({ isActive }) =>
                  `navbar__link ${isActive ? "is-active" : ""} ${
                    isMegaMenuOpen ? "is-open" : ""
                  }`.trim()
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <m.span
                        layoutId="navbar-indicator"
                        className="navbar__indicator"
                        transition={
                          reduceMotion ? { duration: 0 } : NAV_INDICATOR_SPRING
                        }
                      />
                    )}

                    <span className="navbar__link-label">{label}</span>

                  </>
                )}
              </NavLink>

              <AnimatePresence>
                {isMegaMenuOpen && (
                  <ServicesMegaMenu
                    id="services-mega-menu"
                    onClose={handleMegaMenuClose}
                  />
                )}
              </AnimatePresence>
            </m.li>
          );
        }

        // Mobile Services Item with Tap-to-Expand Accordion Submenu
        if (isServices && isMobile) {
          const isServicesActive = location.pathname.startsWith("/services");

          return (
            <m.li
              key={id}
              className="navbar__item mobile-services-accordion"
              variants={NAV_ITEM_VARIANTS}
            >
              <button
                type="button"
                className={`mobile-services__toggle ${
                  isServicesActive ? "is-active" : ""
                }`}
                aria-expanded={isMobileServicesOpen}
                aria-controls="mobile-services-panel"
                onClick={() => setIsMobileServicesOpen((prev) => !prev)}
              >
                <span className="navbar__link-label">{label}</span>
                <ChevronRight
                  className="mobile-services__chevron"
                  size={18}
                  aria-hidden="true"
                />
              </button>

              <m.div
                id="mobile-services-panel"
                className="mobile-services__panel"
                initial={false}
                animate={{
                  height: isMobileServicesOpen ? "auto" : 0,
                  opacity: isMobileServicesOpen ? 1 : 0,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.22,
                  ease: "easeInOut",
                }}
              >
                <ul className="mobile-services__list">
                  <li className="mobile-services__item">
                    <NavLink
                      to="/services"
                      end
                      onClick={onLinkClick}
                      className="mobile-services__link mobile-services__link--overview"
                    >
                      <span>Explore All Services &rarr;</span>
                    </NavLink>
                  </li>

                  {mobileServicesList.map((cat) => {
                    const CatIcon = cat.icon;
                    return (
                      <li key={cat.id} className="mobile-services__item">
                        <NavLink
                          to={cat.to}
                          onClick={onLinkClick}
                          className="mobile-services__link"
                        >
                          <span
                            className="mobile-services__icon"
                            aria-hidden="true"
                          >
                            <CatIcon size={16} strokeWidth={2} />
                          </span>
                          <span>{cat.name}</span>
                        </NavLink>
                      </li>
                    );
                  })}

                  <li className="mobile-services__badge-row">
                    <Link
                      to="/services#industries"
                      onClick={onLinkClick}
                      className="mobile-services__quick-pill"
                    >
                      Industries
                    </Link>
                    <Link
                      to="/services#technologies"
                      onClick={onLinkClick}
                      className="mobile-services__quick-pill"
                    >
                      Tech Stack
                    </Link>
                  </li>
                </ul>
              </m.div>
            </m.li>
          );
        }

        // Standard Navigation Links
        return (
          <m.li
            key={id}
            className="navbar__item"
            variants={NAV_ITEM_VARIANTS}
            onMouseEnter={!isMobile ? handleOtherItemMouseEnter : undefined}
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
                  {isActive && !isMobile && (
                    <m.span
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
          </m.li>
        );
      })}
    </>
  );
};

export default NavLinks;
