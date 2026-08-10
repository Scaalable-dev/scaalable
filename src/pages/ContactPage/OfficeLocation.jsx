import { ExternalLink } from "lucide-react";

import "./OfficeLocation.css";

import Container from "../../components/ui/Container";
import SectionHeading from "../../components/ui/SectionHeading";

import { officeLocation } from "./contactData";

const OfficeLocation = () => {
  return (
    <section className="office section-wash" id="office">
      <Container>
        <SectionHeading
          badge={officeLocation.badge}
          title={officeLocation.title}
          description={officeLocation.description}
        />

        <div className="office__layout">
          {/* ------------------------ Map ------------------------ */}
          <div className="office__map">
            <iframe
              className="office__map-frame"
              src={officeLocation.mapEmbedUrl}
              title={officeLocation.mapTitle}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* ------------------------ Details ------------------------ */}
          <div className="office__card">
            <h3 className="office__card-title">{officeLocation.cardTitle}</h3>

            <ul className="office__details">
              {officeLocation.details.map((detail) => {
                const Icon = detail.icon;

                return (
                  <li className="office__detail" key={detail.id}>
                    <span className="office__detail-icon">
                      <Icon size={18} strokeWidth={1.9} aria-hidden="true" />
                    </span>

                    <div className="office__detail-body">
                      <h4 className="office__detail-label">{detail.label}</h4>

                      {detail.lines.map((line) => (
                        <p className="office__detail-line" key={line}>
                          {line}
                        </p>
                      ))}
                    </div>
                  </li>
                );
              })}
            </ul>

            <a
              className="office__cta"
              href={officeLocation.cta.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {officeLocation.cta.text}

              <ExternalLink size={16} strokeWidth={2.2} aria-hidden="true" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OfficeLocation;
