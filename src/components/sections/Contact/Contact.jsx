import "./Contact.css";

import { useState } from "react";
import toast from "react-hot-toast";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

import Toast from "../../ui/Toast";
import SectionHeading from "../../ui/SectionHeading";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);

    try {
      const response = await fetch(
        `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_FORM_ID}`,
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        },
      );

      if (!response.ok) {
        throw new Error("Failed to submit form.");
      }

      form.reset();

      toast.custom(
        (t) => (
          <Toast
            t={t}
            title="Message Sent Successfully"
            message="We'll get back to you within 24 hours."
            duration={4000}
          />
        ),
        { duration: 4000 },
      );
    } catch (error) {
      /* Custom rather than toast.error: the global Toaster strips background,
         padding and shadow, so the built-in toast renders unstyled. */
      toast.custom(
        (t) => (
          <Toast
            t={t}
            variant="error"
            title="Message Not Sent"
            message="Something went wrong. Please try again, or email us directly."
            duration={5000}
          />
        ),
        { duration: 5000 },
      );

      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
                  <p>+91 75969 18803</p>
                </div>
              </div>

              <div className="contact-info__item">
                <MapPin size={22} />

                <div>
                  <h3>Location</h3>
                  <p>Kolkata, West Bengal, India</p>
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
                  placeholder="john@example.com"
                  autoComplete="email"
                  required
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
                  <option>₹50,000 - ₹1,50,000</option>
                  <option>₹1,50,000 - ₹5,00,000</option>
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
              </div>

              <button
                type="submit"
                className="contact-form__button"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Let's Discuss Your Project"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
