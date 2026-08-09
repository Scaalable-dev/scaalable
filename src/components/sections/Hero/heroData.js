const heroData = {
  badge: "Trusted by 100+ Businesses",

  title: {
    lead: "Build digital products that",
    highlight: "grow your business",
  },

  description:
    "Scaalable helps startups and established teams ship high-performance websites, SaaS platforms, and AI-powered software — designed around measurable business outcomes, not vanity metrics.",

  /* Both route to a page and land on a specific section. `#contact-form` is the
     site-wide destination for conversion CTAs (ContactPage/InquiryForm);
     `#capabilities` is on ServicePage/Capabilities. */
  primaryButton: {
    text: "Start Your Project",
    to: "/contact#contact-form",
  },

  secondaryButton: {
    text: "Explore Services",
    to: "/services#capabilities",
  },

  trust: ["Free discovery call", "Fixed-scope quotes", "No hidden costs"],
};

export default heroData;
