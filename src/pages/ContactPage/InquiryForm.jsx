import { useState } from "react";
import toast from "react-hot-toast";
import { ArrowRight, Check, Lock, ShieldCheck } from "lucide-react";

import "./InquiryForm.css";

import Toast from "../../components/ui/Toast";
import Container from "../../components/ui/Container";
import Input from "../../components/ui/Input";
import Select from "../../components/ui/Select";
import Textarea from "../../components/ui/Textarea";
import SectionHeading from "../../components/ui/SectionHeading";

import { inquiryForm } from "./contactData";

const InquiryForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);

    try {
      const response = await fetch(
        `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_FORM_ID}`,
        {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        },
      );

      if (!response.ok) {
        throw new Error("Failed to submit inquiry.");
      }

      form.reset();

      toast.custom(
        (t) => (
          <Toast
            t={t}
            title="Inquiry Sent Successfully"
            message="Our team will review it and reply within 2 business hours."
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
            title="Inquiry Not Sent"
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

  /* `contact-form` is the single destination every conversion CTA on the site
     points at. The global `section { scroll-margin-top }` in globals.css clears
     the sticky header when it is jumped to. */
  return (
    <section className="inquiry" id="contact-form">
      <Container>
        <SectionHeading
          badge={inquiryForm.badge}
          title={inquiryForm.title}
          description={inquiryForm.description}
        />

        <div className="inquiry__layout">
          {/* ------------------------ Form ------------------------ */}
          <form className="inquiry__form" onSubmit={handleSubmit} noValidate>
            <div className="inquiry__grid">
              <Input
                label="Full Name *"
                id="fullName"
                name="Full Name"
                type="text"
                placeholder="e.g. Alex Morgan"
                autoComplete="name"
                required
              />

              <Input
                label="Company Name"
                id="company"
                name="Company Name"
                type="text"
                placeholder="e.g. Acme Innovations"
                autoComplete="organization"
              />

              <Input
                label="Business Email *"
                id="email"
                name="Business Email"
                type="email"
                placeholder="alex@company.com"
                autoComplete="email"
                required
              />

              <Input
                label="Phone Number"
                id="phone"
                name="Phone Number"
                type="tel"
                placeholder="+91 00000 00000"
                autoComplete="tel"
              />

              <Select
                label="Country"
                id="country"
                name="Country"
                placeholder="Select your country"
                options={inquiryForm.countries}
              />

              <Select
                label="Industry"
                id="industry"
                name="Industry"
                placeholder="Select your industry"
                options={inquiryForm.industries}
              />

              <Select
                label="Service Required *"
                id="service"
                name="Service Required"
                placeholder="Select a service"
                options={inquiryForm.services}
                required
              />

              <Select
                label="Estimated Project Budget"
                id="budget"
                name="Estimated Project Budget"
                placeholder="Select budget range"
                options={inquiryForm.budgets}
              />

              <Input
                label="Preferred Meeting Date"
                id="meetingDate"
                name="Preferred Meeting Date"
                type="date"
              />

              <Select
                label="Project Timeline"
                id="timeline"
                name="Project Timeline"
                placeholder="Select a timeline"
                options={inquiryForm.timelines}
              />
            </div>

            {/* Preferred contact method — radios styled as a segmented control,
                so keyboard and screen readers get real form semantics. */}
            <fieldset className="inquiry__methods">
              <legend className="inquiry__methods-legend">
                Preferred Contact Method
              </legend>

              <div className="inquiry__methods-options">
                {inquiryForm.contactMethods.map((method, index) => {
                  const Icon = method.icon;

                  return (
                    <label className="method" key={method.id}>
                      {/* Uncontrolled on purpose: the checked radio drives the
                          highlight through CSS :has(), so what's submitted and
                          what looks selected can never disagree. form.reset()
                          restores this default. */}
                      <input
                        type="radio"
                        name="Preferred Contact Method"
                        value={method.label}
                        defaultChecked={index === 0}
                      />

                      <Icon size={16} strokeWidth={2} aria-hidden="true" />

                      <span>{method.label}</span>
                    </label>
                  );
                })}
              </div>
            </fieldset>

            <Textarea
              label="Project Description *"
              id="description"
              name="Project Description"
              rows={6}
              placeholder={inquiryForm.descriptionPlaceholder}
              required
            />

            <button
              type="submit"
              className="inquiry__submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : inquiryForm.submitLabel}

              {!isSubmitting && (
                <ArrowRight size={18} strokeWidth={2.2} aria-hidden="true" />
              )}
            </button>
          </form>

          {/* ------------------------ Sidebar ------------------------ */}
          <aside className="inquiry__aside">
            <div className="inquiry__next">
              <h3 className="inquiry__next-title">
                <ShieldCheck size={20} strokeWidth={2} aria-hidden="true" />
                {inquiryForm.nextSteps.title}
              </h3>

              <ul className="inquiry__next-list">
                {inquiryForm.nextSteps.items.map((item) => (
                  <li key={item}>
                    <span className="inquiry__next-check">
                      <Check size={13} strokeWidth={3} aria-hidden="true" />
                    </span>

                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="inquiry__privacy">
              <h3 className="inquiry__privacy-title">
                {inquiryForm.privacy.title}
              </h3>

              <p className="inquiry__privacy-text">
                {inquiryForm.privacy.description}
              </p>

              <span className="inquiry__privacy-note">
                <Lock size={15} strokeWidth={2.2} aria-hidden="true" />
                {inquiryForm.privacy.note}
              </span>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
};

export default InquiryForm;
