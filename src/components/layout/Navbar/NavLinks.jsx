import navLinks from "./navLinks";

const NavLinks = ({ onClick }) => {
  return (
    <>
      {navLinks.map((link) => (
        <li key={link.id}>
          <a href={link.href} onClick={onClick}>
            {link.label}
          </a>
        </li>
      ))}
    </>
  );
};

export default NavLinks;
