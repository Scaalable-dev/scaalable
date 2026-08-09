const heroData = {
  badge: "Trusted by 100+ Businesses",

  title: {
    lead: "Build digital products that",
    highlight: "grow your business",
  },

  description:
    "Scaalable helps startups and established teams ship high-performance websites, SaaS platforms, and AI-powered software — designed around measurable business outcomes, not vanity metrics.",

  /* Both route to a page and land on a specific section. The ids exist already:
     `#inquiry` on ContactPage/InquiryForm, `#capabilities` on
     ServicePage/Capabilities. */
  primaryButton: {
    text: "Start Your Project",
    to: "/contact#inquiry",
  },

  secondaryButton: {
    text: "Explore Services",
    to: "/services#capabilities",
  },

  trust: ["Free discovery call", "Fixed-scope quotes", "No hidden costs"],
};

export default heroData;
