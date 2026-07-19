import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

import "./Navbar.css";

import Container from "../../ui/Container";
import Button from "../../ui/Button";

import NavLinks from "./NavLinks.jsx";
import MobileMenu from "./MobileMenu";

import logo from "../../../assets/images/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Container>
      <nav className="navbar">
        {/* Logo */}

        <Link to="/" className="navbar__logo" aria-label="Go to homepage">
          <img
            src={logo}
            alt="Scaalable Agency Logo"
            className="navbar__logo-image"
          />

          <span className="navbar__logo-text">SCAALABLE</span>
        </Link>

        {/* Desktop Navigation */}

        <ul className="navbar__links">
          <NavLinks />
        </ul>

        {/* Desktop CTA */}

        <div className="navbar__actions">
          <a href="#contact">
            <Button size="sm"> Book an Appointment</Button>
          </a>
        </div>

        {/* Mobile Hamburger */}

        <button
          className="navbar__toggle"
          type="button"
          aria-label="Open navigation menu"
          onClick={openMenu}
        >
          <Menu size={28} />
        </button>

        {/* Mobile Menu */}

        {isMenuOpen && <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />}
      </nav>
    </Container>
  );
};

export default Navbar;
