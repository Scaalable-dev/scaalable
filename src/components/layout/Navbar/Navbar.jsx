import { useState } from "react";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";

import Button from "../../ui/Button";
import Container from "../../ui/Container";

import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Container>
      <nav className="navbar">
        {/* Logo */}

        <a href="/" className="navbar__logo">
          LOGO
        </a>

        {/* Desktop Menu */}

        <ul className="navbar__links">
          <NavLinks />
        </ul>

        {/* CTA */}

        <div className="navbar__cta">
          <Button size="sm">Let's Talk</Button>
        </div>

        {/* Mobile Toggle */}

        <button
          className="navbar__toggle"
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
        >
          {isOpen ? <HiOutlineXMark /> : <HiOutlineBars3 />}
        </button>
      </nav>

      <MobileMenu isOpen={isOpen} closeMenu={() => setIsOpen(false)} />
    </Container>
  );
};

export default Navbar;
