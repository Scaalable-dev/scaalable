import { useState } from "react";
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
            alt="Your Agency Logo"
            className="navbar__logo-image"
          />
        </Link>

        {/* Desktop Navigation */}

        <ul className="navbar__links">
          <NavLinks />
        </ul>

        {/* Desktop CTA */}

        <div className="navbar__actions">
          <Button size="sm"> Book an Appointment</Button>
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

        <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
      </nav>
    </Container>
  );
};

export default Navbar;
