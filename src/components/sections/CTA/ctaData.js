/* ==========================================================================
   HOME — CLOSING CTA
   The last thing the page says. One invitation, one destination.
   ========================================================================== */

const ctaData = {
  /* Passed to the shared <Badge>, which uppercases and adds the Sparkles mark
     itself — the same treatment every other section label gets. */
  badge: "Ready when you are",

  title: "Have a project in mind?",

  description:
    "Tell us what you're building. We'll help define the clearest path from idea to a secure, scalable launch.",

  /* The single destination every conversion CTA on the site points at.
     ScrollToTop handles the hash once the route has mounted. */
  action: {
    text: "Discuss Your Project",
    to: "/contact#contact-form",
  },
};

export default ctaData;
