import navLinks from "./navLinks.js";

const NavLinks = ({ onLinkClick = () => {} }) => {
  return (
    <>
      {navLinks.map(({ id, label, href }) => (
        <li key={id} className="navbar__item">
          <a href={href} className="navbar__link" onClick={onLinkClick}>
            {label}
          </a>
        </li>
      ))}
    </>
  );
};

export default NavLinks;
