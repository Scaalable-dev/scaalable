import { Mail, MapPin, Phone } from "lucide-react";

import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaSquareInstagram,
  FaXTwitter,
} from "react-icons/fa6";

/* ==========================================================================
   01 / NAVIGATE
   The four routes the site actually has. Who We Help and FAQ were home-page
   anchors, which only resolved from the home page.
   ========================================================================== */

export const navigateLinks = [
  { id: "home", title: "Home", to: "/" },
  { id: "services", title: "Services", to: "/services" },
  { id: "about", title: "About", to: "/about" },
  { id: "contact", title: "Contact", to: "/contact" },
];

/* ==========================================================================
   02 / CAPABILITIES

   The agency's seven practices, matching `capabilities` in
   pages/ServicePage/servicesData.js. Each hash is a real element id on the
   services page — Capabilities.jsx renders `cap-tab-<id>` on every tab — so
   these scroll to the right row rather than to a hash that resolves nowhere.
   ========================================================================== */

export const capabilityLinks = [
  { id: "web", title: "Website Design & Development", to: "/services#cap-tab-web" },
  { id: "uxui", title: "UI/UX Engineering", to: "/services#cap-tab-uxui" },
  { id: "seo", title: "Search Engine Optimization", to: "/services#cap-tab-seo" },
  { id: "ai", title: "AI Automation Solutions", to: "/services#cap-tab-ai" },
  { id: "software", title: "Software Engineering", to: "/services#cap-tab-software" },
  { id: "growth", title: "Digital Growth", to: "/services#cap-tab-growth" },
  {
    id: "itsupport",
    title: "IT Support & Managed Services",
    to: "/services#cap-tab-itsupport",
  },
];

/* ==========================================================================
   03 / CONNECT
   ========================================================================== */

export const contactInfo = [
  {
    id: "email",
    icon: Mail,
    label: "Email",
    value: "support@scaalable.com",
    href: "mailto:support@scaalable.com",
  },
  {
    id: "phone",
    icon: Phone,
    label: "Phone",
    value: "+91 75969 18803",
    /* Digits only — a tel: URI with spaces or dashes is not reliably dialled. */
    href: "tel:+917596918803",
  },
  {
    id: "location",
    icon: MapPin,
    label: "Location",
    value: "Kolkata, West Bengal, India",
    href: null,
  },
];

/* ==========================================================================
   SOCIAL
   Real profiles, carried over unchanged.
   ========================================================================== */

export const socialLinks = [
  { id: "github", icon: FaGithub, title: "GitHub", href: "https://github.com/Scaalable-dev" },
  {
    id: "linkedin",
    icon: FaLinkedin,
    title: "LinkedIn",
    href: "https://www.linkedin.com/company/scaalable/",
  },
  { id: "x", icon: FaXTwitter, title: "X", href: "https://x.com/scaalable" },
  {
    id: "instagram",
    icon: FaSquareInstagram,
    title: "Instagram",
    href: "https://instagram.com/scaalable",
  },
  { id: "facebook", icon: FaFacebook, title: "Facebook", href: "https://facebook.com/scaalable" },
];

/* ==========================================================================
   LEGAL

   These are modals, not routes — LegalModal keys off these exact types. There
   are no /privacy-policy style pages in the router to link to.
   ========================================================================== */

export const legalLinks = [
  { id: "privacy", title: "Privacy", type: "privacy" },
  { id: "refund", title: "Refunds", type: "refund" },
  { id: "cookie", title: "Cookies", type: "cookie" },
  { id: "terms", title: "Terms", type: "terms" },
];
