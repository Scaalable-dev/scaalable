import "./Contact.css";

import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import ProductJourney from "./ProductJourney";
import ContactChannels from "./ContactChannels";
import InquiryForm from "./InquiryForm";
import OfficeLocation from "./OfficeLocation";
import SocialChannels from "./SocialChannels";

import { contactHero } from "./contactData";

const Contact = () => {
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
              </div>

              <div
                className="contact-hero__actions animate-fade-up"
                style={{ "--delay": "240ms" }}
              >
                <Button href={contactHero.cta.href} size="lg">
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
