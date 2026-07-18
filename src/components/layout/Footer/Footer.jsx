import { Link } from "react-router-dom";

import "./Footer.css";

import logo from "../../../assets/images/logo.png";

import { quickLinks, services, contactInfo, socialLinks } from "./footerData";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          {/* Company */}

          <div className="footer__company">
            <Link to="/" className="footer__logo" aria-label="Go to homepage">
              <img src={logo} alt="Your Agency Logo" />
            </Link>

            <p>
              We build modern, scalable, and secure web applications that help
              businesses grow through thoughtful design and reliable technology.
            </p>

            <div className="footer__socials">
              {socialLinks.map(({ id, icon: Icon, href, title }) => (
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={title}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}

          <div className="footer__column">
            <h3>Quick Links</h3>

            <ul>
              {quickLinks.map(({ id, title, path }) => (
                <li key={id}>
                  <Link to={path}>{title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}

          <div className="footer__column">
            <h3>Services</h3>

            <ul>
              {services.map(({ id, title }) => (
                <li key={id}>
                  <span>{title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}

          <div className="footer__column">
            <h3>Contact</h3>

            <ul>
              {contactInfo.map(({ id, icon: Icon, value, href }) => (
                <li key={id}>
                  <Icon size={18} />

                  {href ? <a href={href}>{value}</a> : <span>{value}</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Your Agency. All rights reserved.</p>

          <div className="footer__legal">
            <Link to="/privacy-policy">Privacy Policy</Link>

            <Link to="/terms-of-service">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
