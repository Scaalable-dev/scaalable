import Button from "../../ui/Button";
import NavLinks from "./NavLinks";

const MobileMenu = ({ isOpen, closeMenu }) => {
  return (
    <div className={`mobile-menu ${isOpen ? "mobile-menu--open" : ""}`}>
      <ul className="mobile-menu__links">
        <NavLinks onClick={closeMenu} />
      </ul>

      <Button fullWidth>Let's Talk</Button>
    </div>
  );
};

export default MobileMenu;
