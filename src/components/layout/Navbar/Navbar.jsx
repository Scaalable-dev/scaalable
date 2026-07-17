import "./Navbar.css";

import Container from "../../ui/Container";
import Button from "../../ui/Button";
import NavLinks from "./NavLinks.jsx";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <Container>
      <nav className="navbar">
        <a href="/" className="navbar__logo">
          LOGO
        </a>

        <ul className="navbar__links">
          <NavLinks />
        </ul>

        <div className="navbar__actions">
          <Button>Let's Talk</Button>
        </div>

        <MobileMenu />
      </nav>
    </Container>
  );
};

export default Navbar;
