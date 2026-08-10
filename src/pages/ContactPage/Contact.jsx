import { useEffect } from "react";
import { ArrowDown } from "lucide-react";

import "./Contact.css";

import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import ProductJourney from "./ProductJourney";
import ContactChannels from "./ContactChannels";
import InquiryForm from "./InquiryForm";
import OfficeLocation from "./OfficeLocation";
import SocialChannels from "./SocialChannels";

import { contactHero, contactMeta } from "./contactData";
import { setPageMeta } from "../../lib/pageMeta";

const Contact = () => {
  /* No Helmet provider is mounted in main.jsx, so the page metadata is set
     directly — the same approach the home and About pages use. */
  useEffect(() => {
    setPageMeta(contactMeta);
  }, []);

  return (
    <>
      <section className="contact-hero" id="contact-hero">
        <Container>
          <div className="contact-hero__grid">
            {/* ------------------------ Left : Content ------------------------ */}
            <div className="contact-hero__content">
              <div className="animate-fade-up">
                <Badge>{contactHero.badge}</Badge>
              </div>

              <h1
                className="contact-hero__title animate-fade-up"
                style={{ "--delay": "80ms" }}
              >
                {contactHero.title}{" "}
                <span className="contact-hero__title-gradient">
                  {contactHero.titleHighlight}
                </span>
              </h1>

              <div
                className="contact-hero__description animate-fade-up"
                style={{ "--delay": "160ms" }}
              >
                {contactHero.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}

                <p className="contact-hero__support">
                  {contactHero.supportingLine}
                </p>
              </div>

              <div
                className="contact-hero__actions animate-fade-up"
                style={{ "--delay": "240ms" }}
              >
                {/* Points down because that is where it goes — the form is
                    further along this same page, not another route. */}
                <Button
                  href={contactHero.cta.href}
                  size="lg"
                  endIcon={<ArrowDown size={18} />}
                >
                  {contactHero.cta.text}
                </Button>
              </div>
            </div>

            {/* ------------------------ Right : Visual ------------------------ */}
            <div
              className="contact-hero__visual animate-fade-up"
              style={{ "--delay": "200ms" }}
            >
              <ProductJourney />
            </div>
          </div>
        </Container>
      </section>

      {/* ------------------------ Direct Channels ------------------------ */}
      <ContactChannels />

      {/* ------------------------ Inquiry Form ------------------------ */}
      <InquiryForm />

      {/* ------------------------ Headquarters ------------------------ */}
      <OfficeLocation />

      {/* ------------------------ Social Channels ------------------------ */}
      <SocialChannels />
    </>
  );
};

export default Contact;
