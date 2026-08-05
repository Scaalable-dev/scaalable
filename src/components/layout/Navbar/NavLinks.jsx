import { NavLink } from "react-router-dom";

import navLinks from "./navLinks";

const NavLinks = ({ onLinkClick }) => {
  return (
    <>
      {navLinks.map(({ id, label, href }) => (
        <li key={id} className="navbar__item">
          <NavLink to={href} onClick={onLinkClick} className="navbar__link">
            {label}
          </NavLink>
        </li>
      ))}
    </>
  );
};

export default NavLinks;
