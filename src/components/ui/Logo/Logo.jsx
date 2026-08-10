import { Link } from "react-router-dom";

import "./Logo.css";

import logo from "../../../assets/images/logo.webp";
// Change to logo.svg if that's what you have.

const Logo = () => {
  return (
    <Link to="/" className="logo" aria-label="Go to homepage">
      <img src={logo} alt="Your Agency Logo" className="logo__image" />
    </Link>
  );
};

export default Logo;
