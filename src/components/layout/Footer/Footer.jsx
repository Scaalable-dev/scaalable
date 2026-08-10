import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import logo from "../../../assets/images/logo.webp";

import Button from "../../ui/Button";
import Container from "../../ui/Container";
import LegalModal from "../../ui/modal/LegalModal/LegalModal";

import {
  capabilityLinks,
  contactInfo,
  legalLinks,
  navigateLinks,
  socialLinks,
} from "./footerData";

import "./Footer.css";

/**
 * System grid footer.
 *
 * Three areas: a brand masthead, a three-column system grid, and a bottom rail.
 * Everything here is static — the technical character comes from the linework,
 * the numbered column markers and the spacing, not from motion. There is no
 * transition or keyframe in the stylesheet.
 */
const Footer = () => {
  const [modalType, setModalType] = useState(null);

  return (
    <>
      <footer className="fx">
        <Container>
          {/* ==================== 1. Brand masthead ==================== */}
          <div className="fx__masthead">
            <div className="fx__brand">
              {/* No aria-label: the wordmark and tagline are the visible
                  name, and an accessible name that differs from them fails
                  label-in-name. */}
              <Link to="/" className="fx__lockup">
                <img className="fx__mark" src={logo} alt="" />

                <span className="fx__names">
                  <span className="fx__wordmark">SCAALABLE</span>
                  <span className="fx__tagline">Build · Scale · Grow</span>
                </span>
              </Link>

              <p className="fx__summary">
                Strategy, design, engineering, AI, and growth—working as one
                digital partner.
              </p>
            </div>

            <div className="fx__cta">
              <Button
                as={Link}
                to="/contact#contact-form"
                endIcon={
                  <ArrowUpRight size={17} strokeWidth={2.2} aria-hidden="true" />
                }
              >
                Start a project
              </Button>
            </div>
          </div>

          {/* ==================== 2. System grid ==================== */}
          <div className="fx__grid">
            <nav className="fx__col" aria-labelledby="fx-navigate">
              <p className="fx__label" id="fx-navigate">
                <span className="fx__tick" aria-hidden="true" />
                01 / Navigate
              </p>

              <ul className="fx__links">
                {navigateLinks.map(({ id, title, to }) => (
                  <li key={id}>
                    <Link to={to}>
                      <span className="fx__slash" aria-hidden="true">
                        /
                      </span>
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav
              className="fx__col fx__col--capabilities"
              aria-labelledby="fx-capabilities"
            >
              <p className="fx__label" id="fx-capabilities">
                <span className="fx__tick" aria-hidden="true" />
                02 / Capabilities
              </p>

              <ul className="fx__links fx__links--split">
                {capabilityLinks.map(({ id, title, to }) => (
                  <li key={id}>
                    <Link to={to}>
                      <span className="fx__slash" aria-hidden="true">
                        /
                      </span>
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="fx__col fx__col--connect">
              <p className="fx__label">
                <span className="fx__tick" aria-hidden="true" />
                03 / Connect
              </p>

              <address className="fx__address">
                {contactInfo.map(({ id, icon: Icon, label, value, href }) => (
                  <p className="fx__contact" key={id}>
                    <Icon size={16} strokeWidth={1.9} aria-hidden="true" />

                    {href ? (
                      <a href={href}>{value}</a>
                    ) : (
                      <span>{value}</span>
                    )}

                    <span className="visually-hidden">{label}</span>
                  </p>
                ))}
              </address>
            </div>
          </div>

          {/* ==================== 3. Bottom rail ==================== */}
          <div className="fx__rail">
            <ul className="fx__social">
              {socialLinks.map(({ id, icon: Icon, title, href }) => (
                <li key={id}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={title}
                  >
                    <Icon size={18} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>

            <p className="fx__copyright">
              © {new Date().getFullYear()} Scaalable. All rights reserved.
            </p>

            <ul className="fx__legal">
              {legalLinks.map(({ id, title, type }) => (
                <li key={id}>
                  {/* Buttons, not links: these open a modal — there are no
                      legal routes in the router to navigate to. */}
                  <button type="button" onClick={() => setModalType(type)}>
                    {title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </footer>

      <LegalModal
        type={modalType}
        isOpen={modalType !== null}
        onClose={() => setModalType(null)}
      />
    </>
  );
};

export default Footer;
