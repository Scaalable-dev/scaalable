import { Link } from "react-router-dom";
import { m, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react";

import Badge from "../../ui/Badge";
import Button from "../../ui/Button";

import {
  servicesFeatured,
  servicesFooterRibbon,
  servicesMenuColumns,
} from "./servicesMegaMenuData";

import "./ServicesMegaMenu.css";

const ServicesMegaMenu = ({ id = "services-mega-menu", onClose }) => {
  const reduceMotion = useReducedMotion();

  const menuTransition = reduceMotion
    ? { duration: 0 }
    : {
        duration: 0.22,
        ease: [0.16, 1, 0.3, 1],
      };

  return (
    <m.div
      id={id}
      className="services-mega-menu"
      role="region"
      aria-label="Services Overview"
      initial={{ opacity: 0, y: 10, scale: 0.995 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.995 }}
      transition={menuTransition}
    >
      <div className="smm__inner">
        {/* Main Columns Grid */}
        <div className="smm__grid">
          {servicesMenuColumns.map((col) => (
            <div key={col.id} className="smm__column">
              <span className="smm__column-label">{col.label}</span>

              <div className="smm__column-categories">
                {col.categories.map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <div key={cat.id} className="smm__category">
                      <Link
                        to={cat.to}
                        className="smm__category-header"
                        onClick={onClose}
                      >
                        <span className="smm__category-icon" aria-hidden="true">
                          <Icon size={17} strokeWidth={2} />
                        </span>

                        <div className="smm__category-heading">
                          <span className="smm__category-name">
                            {cat.name}
                          </span>
                          <span className="smm__category-sub">
                            {cat.subtitle}
                          </span>
                        </div>

                        <ChevronRight
                          size={15}
                          className="smm__category-arrow"
                          aria-hidden="true"
                        />
                      </Link>

                      <ul className="smm__service-list">
                        {cat.services.map((service) => (
                          <li key={service.name} className="smm__service-item">
                            <Link
                              to={service.to}
                              className="smm__service-link"
                              onClick={onClose}
                            >
                              <span className="smm__service-bullet" aria-hidden="true" />
                              <span className="smm__service-text">
                                {service.name}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Featured Column */}
          <div className="smm__featured-col">
            <div className="smm__featured-card">
              <div className="smm__featured-badge">
                <Badge size="sm" variant="primary">
                  {servicesFeatured.badge}
                </Badge>
              </div>

              <h4 className="smm__featured-title">
                {servicesFeatured.title}
              </h4>

              <p className="smm__featured-description">
                {servicesFeatured.description}
              </p>

              <div className="smm__featured-actions">
                <Button
                  as={Link}
                  to={servicesFeatured.primaryCta.to}
                  size="sm"
                  fullWidth
                  endIcon={<ArrowRight size={15} strokeWidth={2.2} />}
                  onClick={onClose}
                >
                  {servicesFeatured.primaryCta.label}
                </Button>

                <Link
                  to={servicesFeatured.secondaryCta.to}
                  className="smm__featured-link"
                  onClick={onClose}
                >
                  {servicesFeatured.secondaryCta.label}
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>

              <div className="smm__featured-quick">
                <span className="smm__quick-title">Explore by section:</span>
                <div className="smm__quick-pills">
                  {servicesFeatured.quickLinks.map((ql) => (
                    <Link
                      key={ql.label}
                      to={ql.to}
                      className="smm__quick-pill"
                      onClick={onClose}
                    >
                      {ql.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Ribbon */}
        <div className="smm__footer">
          <div className="smm__footer-left">
            <span className="smm__footer-icon" aria-hidden="true">
              <Sparkles size={15} />
            </span>
            <span className="smm__footer-note">
              {servicesFooterRibbon.note}
            </span>
            <Link
              to={servicesFooterRibbon.ctaTo}
              className="smm__footer-cta"
              onClick={onClose}
            >
              {servicesFooterRibbon.ctaText} &rarr;
            </Link>
          </div>

          <div className="smm__footer-right">
            {servicesFooterRibbon.links.map((item, idx) => (
              <span key={item.label} className="smm__footer-link-wrap">
                {idx > 0 && (
                  <span className="smm__footer-sep" aria-hidden="true">
                    &bull;
                  </span>
                )}
                <Link
                  to={item.to}
                  className="smm__footer-link"
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              </span>
            ))}
          </div>
        </div>
      </div>
    </m.div>
  );
};

export default ServicesMegaMenu;
