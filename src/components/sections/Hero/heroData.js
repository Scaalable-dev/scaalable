const heroData = {
  /* Uppercased by Badge's own styles, so it is written in sentence case here
     like every other badge on the site. */
  badge: "One partner • From strategy to scale",

  title: {
    lead: "Websites, software and AI systems built to",
    highlight: "grow with your business.",
  },

  description:
    "From strategy and engineering to AI, SEO and paid advertising, Scaalable brings technology and digital growth into one accountable team — supporting your business from idea and launch through ongoing growth.",

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
