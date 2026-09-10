import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";

import Container from "../../ui/Container";
import Button from "../../ui/Button";

import NavLinks from "./NavLinks.jsx";
import MobileMenu from "./MobileMenu";

import logo from "../../../assets/images/logo.webp";

import "./Navbar.css";

/* Matches the breakpoint in Navbar.css where the drawer is replaced by the
   desktop link row. */
const DESKTOP_BREAKPOINT = 992;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleResize = () => {
      if (window.innerWidth > DESKTOP_BREAKPOINT) setIsMenuOpen(false);
    };

    /* Without this the drawer stays mounted but hidden behind the desktop
       layout, leaving the body scroll-locked with no way to close it. */
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Container>
      <nav className="navbar" aria-label="Primary">
        {/* Logo */}

        {/* No aria-label: the visible wordmark IS the accessible name. A
            label that says something different from the visible text fails
            label-in-name — speech-input users say what they can see. */}
        <Link to="/" className="navbar__logo">
          <img
            src={logo}
            alt="Scaalable"
            width="168"
            height="201"
            className="navbar__logo-image"
          />

          <span className="navbar__logo-text">SCAALABLE</span>
        </Link>

        {/* Desktop navigation */}

        <ul className="navbar__links">
          <NavLinks variant="desktop" />
        </ul>

        {/* Desktop CTA */}

        <div className="navbar__actions">
          <Button as={Link} to="/contact#contact-form" size="sm">
            Book an Appointment
          </Button>
        </div>

        {/* Mobile toggle */}

        <button
          className="navbar__toggle"
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={openMenu}
        >
          <Menu size={24} />
        </button>

        {/* Mobile drawer — AnimatePresence lives here so the exit animation
            can run after `isMenuOpen` flips to false. */}

        <AnimatePresence>
          {isMenuOpen && <MobileMenu onClose={closeMenu} />}
        </AnimatePresence>
      </nav>
    </Container>
  );
};

export default Navbar;
