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
            <a href="#" className="footer__logo" aria-label="Go to homepage">
              <img src={logo} alt="Scaalable Agency Logo" />
            </a>

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
              {quickLinks.map(({ id, title, href }) => (
                <li key={id}>
                  <a href={href}>{title}</a>
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
            <a href="/privacy-policy">Privacy Policy</a>

            <a href="/terms-of-service">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
