const heroData = {
  /* Uppercased by Badge's own styles, so it is written in sentence case here
     like every other badge on the site. */
  badge: "One partner • From strategy to scale",

  title: {
    lead: "Custom AI Systems, Enterprise Web Engineering",
    highlight: " & Software Development Services",
  },

  description:
    "As a leading web development company in kolkata, Scaalable brings technology and digital growth into one accountable team. From strategy and engineering to AI Solutions, professional seo company india services, and paid advertising—supporting your business from idea to scale.",

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
