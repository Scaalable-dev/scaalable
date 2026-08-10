import { useEffect, useState } from "react";

import Navbar from "../Navbar";

import "./Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "is-scrolled" : ""}`.trim()}>
      <Navbar />
    </header>
  );
};

export default Header;
