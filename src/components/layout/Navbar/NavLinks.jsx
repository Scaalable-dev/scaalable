import navLinks from "./navLinks";

const NavLinks = () => {
  return (
    <>
      {navLinks.map((link) => (
        <li key={link.id}>
          <a href={link.href}>{link.label}</a>
        </li>
      ))}
    </>
  );
};

export default NavLinks;
