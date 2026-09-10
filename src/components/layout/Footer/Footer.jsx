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
 * Footer.
 *
 * One row of columns — the brand block and the link lists side by side,
 * separated by hairline rules — over a bottom bar carrying the copyright and
 * the legal links. It is the only band on the page that keeps its tint rather
 * than draining back to white, which is what gives the page a bottom.
 *
 * The social links sit in the brand block rather than the bottom bar: they
 * belong to the identity above them, and the bar reads as a single quiet line
 * once it holds only the copyright and the legal set.
 */
const Footer = () => {
  const [modalType, setModalType] = useState(null);

  return (
    <>
      <footer className="fx">
        <Container>
          {/* ==================== 1. Columns ==================== */}
          <div className="fx__grid">
            <div className="fx__brand">
              {/* No aria-label: the wordmark and tagline are the visible
                  name, and an accessible name that differs from them fails
                  label-in-name. */}
              <Link to="/" className="fx__lockup">
               <img className="fx__mark" src={logo} alt="Scaalable" />

                <span className="fx__names">
                  <span className="fx__wordmark">SCAALABLE</span>
                  <span className="fx__tagline">Build · Scale · Grow</span>
                </span>
              </Link>

              <p className="fx__summary">
                Strategy, design, engineering, AI, and growth—working as one
                digital partner.
              </p>

              <Button
                as={Link}
                to="/contact#contact-form"
                className="fx__cta"
                endIcon={
                  <ArrowUpRight size={17} strokeWidth={2.2} aria-hidden="true" />
                }
              >
                Start a project
              </Button>

              <ul className="fx__social">
                {socialLinks.map(({ id, icon: Icon, title, href }) => (
                  <li key={id}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={title}
                    >
                      <Icon size={17} aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <nav className="fx__col" aria-labelledby="fx-navigate">
              <p className="fx__label" id="fx-navigate">
                Navigate
              </p>

              <ul className="fx__links">
                {navigateLinks.map(({ id, title, to }) => (
                  <li key={id}>
                    <Link to={to}>{title}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav
              className="fx__col fx__col--capabilities"
              aria-labelledby="fx-capabilities"
            >
              <p className="fx__label" id="fx-capabilities">
                Capabilities
              </p>

              <ul className="fx__links fx__links--split">
                {capabilityLinks.map(({ id, title, to }) => (
                  <li key={id}>
                    <Link to={to}>{title}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="fx__col fx__col--connect">
              <p className="fx__label">Get In Touch</p>

              <address className="fx__address">
                {contactInfo.map(({ id, icon: Icon, label, value, href }) => (
                  <p className="fx__contact" key={id}>
                    {/* The icon sits in its own chip rather than inline with
                        the text, so the three rows align on one edge whatever
                        the glyph's width. */}
                    <span className="fx__contact-icon" aria-hidden="true">
                      <Icon size={15} strokeWidth={1.9} />
                    </span>

                    {href ? <a href={href}>{value}</a> : <span>{value}</span>}

                    <span className="visually-hidden">{label}</span>
                  </p>
                ))}
              </address>
            </div>
          </div>

          {/* ==================== 2. Bottom bar ==================== */}
          <div className="fx__rail">
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
