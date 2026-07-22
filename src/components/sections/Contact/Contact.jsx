import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";

import { Mail, Phone, MapPin, Clock } from "lucide-react";
import SectionHeading from "../../ui/SectionHeading";

const Contact = () => {
  const formId = import.meta.env.VITE_FORMSPREE_FORM_ID;
  const [state, handleSubmit] = useForm(formId);
  return (
    <section className="contact-page" id="contact">
      <div className="container">
        <SectionHeading
          badge="Contact"
          title="Let's Build Something Great Together"
          description="Whether you need a business website, a custom web application, or ongoing development support, we'd love to hear about your project."
        />

        <div className="contact-page__content">
          {/* Contact Information */}

          <aside className="contact-info">
            <h2>Get in Touch</h2>

            <p>
              Have an idea or project in mind? Fill out the form and we'll get
              back to you within 24 hours.
            </p>

            <div className="contact-info__list">
              <div className="contact-info__item">
                <Mail size={22} />

                <div className="contact-info__content">
                  <h3>Email</h3>

                  <a href="mailto:info@scaalable.com">info@scaalable.com</a>

                  <a href="mailto:contact@scaalable.com">
                    contact@scaalable.com
                  </a>
                </div>
              </div>

              <div className="contact-info__item">
                <Phone size={22} />
                <div>
                  <h3>Phone</h3>
                  <p>+91-7596918803</p>
                </div>
              </div>

              <div className="contact-info__item">
                <MapPin size={22} />
                <div>
                  <h3>Location</h3>
                  <p>West Bengal, Kolkata, India</p>
                </div>
              </div>

              <div className="contact-info__item">
                <Clock size={22} />
                <div>
                  <h3>Response Time</h3>
                  <p>Within 24 Hours</p>
                </div>
              </div>
            </div>
          </aside>

          {/* Contact Form */}

          <div className="contact-form-wrapper">
            {state.succeeded ? (
              <div className="contact-form__success">
                <h3>Message Sent!</h3>
                <p>
                  Thank you for contacting us. We'll get back to you within 24
                  hours.
                </p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="john@example.com"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company</label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Company Name"
                    autoComplete="organization"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="projectType">Project Type</label>

                  <select id="projectType" name="projectType" required>
                    <option value="">Select a project</option>

                    <option>Business Website</option>

                    <option>Web Application</option>

                    <option>E-Commerce</option>

                    <option>UI / UX Design</option>

                    <option>Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="budget">Estimated Budget</label>

                  <select id="budget" name="budget">
                    <option value="">Select Budget</option>

                    <option>Under ₹50,000</option>

                    <option>₹50,000 – ₹1,50,000</option>

                    <option>₹1,50,000 – ₹5,00,000</option>

                    <option>Above ₹5,00,000</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Project Details</label>

                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Tell us about your project..."
                    required
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>

                <button
                  type="submit"
                  className="contact-form__button"
                  disabled={state.submitting}
                >
                  {state.submitting
                    ? "Sending..."
                    : "Let's Discuss Your Project"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
