import {
  Lightbulb,
  PenTool,
  Code2,
  Rocket,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Video,
  Landmark,
  Clock,
} from "lucide-react";

import { socialLinks } from "../../components/layout/Footer/footerData";

/* ==========================================================================
   CONTACT DETAILS
   Single source of truth — display strings and link targets stay in sync.
   ========================================================================== */

const PHONE_DISPLAY = "+91-7596918803";
const PHONE_E164 = "+917596918803";

const EMAIL = "info@scaalable.com";

/* Google Maps place link for the Scaalable business listing. The @lat,lng,zoom
   segment is the map viewport, set to the listing's own coordinates at 17z —
   a copied browser URL carries whatever the tab happened to be showing. */
const MAPS_URL =
  "https://www.google.com/maps/place/Scaalable/@22.6946012,88.3496334,17z/data=!4m6!3m5!1s0x39f89d61f8cfb215:0x9dfcdea5408afe52!8m2!3d22.6946012!4d88.3496334!16s%2Fg%2F11nr1nnfmd";

const WHATSAPP_URL = `https://wa.me/${PHONE_E164.replace(
  "+",
  "",
)}?text=${encodeURIComponent(
  "Hi Scaalable, I'd like to discuss a project with your team.",
)}`;

/* Keyless Maps embed, queried by business name so it resolves to the Scaalable
   listing — the marker is then a real place, so clicking it opens the branded
   info card (name, address, rating).

   Do NOT query by lat/lng or by street address here. Both produce a synthetic
   marker with no place record behind it, and clicking the pin fails with
   "Place info couldn't load". Verified by dispatching real clicks at each. */
const MAPS_EMBED_QUERY = "Scaalable, Konnagar, West Bengal";

const MAPS_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(
  MAPS_EMBED_QUERY,
)}&z=17&hl=en&output=embed`;

export const contactMeta = {
  title: "Contact Scaalable | Start a Conversation",

  description:
    "Tell us about your project. Reach Scaalable by phone, email or WhatsApp, or share a few details through the inquiry form and we'll reply within two business hours.",

  canonical: "https://scaalable.com/contact",
};

export const contactHero = {
  badge: "Get in touch",

  title: "Let’s move your next",

  titleHighlight: "digital project forward.",

  paragraphs: [
    "Whether you need a high-performance website, custom software, AI automation, SEO or paid growth support, tell us what you’re working toward. We’ll listen, ask the right questions and help identify the clearest next step.",
  ],

  /* Sits closer to the button than to the paragraph above it — it is about
     what to do next, not part of the pitch. */
  supportingLine: "Share a few details below to start the conversation.",

  /* In-page anchor: the hero already sits on /contact, so this scrolls down to
     the inquiry form rather than re-navigating to the same route. */
  cta: {
    text: "Discuss Your Project",
    href: "#contact-form",
  },
};

/* ==========================================================================
   DIRECT CHANNELS
   `external` opens in a new tab; tel:/mailto: stay in the same context.
   ========================================================================== */

export const contactChannels = {
  badge: "Get In Touch",

  title: "Reach Out Through Your Preferred Channel",

  description:
    "Whether you have a question, need technical advice, or want to discuss a new project, our team is ready to assist you.",

  items: [
    {
      id: "phone",
      icon: Phone,
      title: "Phone",
      value: PHONE_DISPLAY,
      description:
        "Speak directly with our team for project discussions, technical consultations, or business inquiries.",
      action: "Call Now",
      href: `tel:${PHONE_E164}`,
      external: false,
    },

    {
      id: "email",
      icon: Mail,
      title: "Email",
      value: EMAIL,
      description:
        "Send us your requirements, project details, or partnership inquiries, and we'll get back to you as soon as possible.",
      action: "Send an Email",
      href: `mailto:${EMAIL}`,
      external: false,
    },

    {
      id: "office",
      icon: MapPin,
      title: "Office",
      value: "Kolkata, India",
      description: "Connect with us remotely from anywhere in the world.",
      action: "Get Directions",
      href: MAPS_URL,
      external: true,
    },

    {
      id: "whatsapp",
      icon: MessageCircle,
      title: "WhatsApp Direct",
      value: PHONE_DISPLAY,
      description: "Instant messaging for quick queries.",
      action: "Chat on WhatsApp",
      href: WHATSAPP_URL,
      external: true,
    },
  ],
};

/* ==========================================================================
   SOCIAL CHANNELS

   URLs and icons come from the footer so there is one source of truth; only
   the presentation (order, subtitle, button label, brand accent) lives here.
   ========================================================================== */

const SOCIAL_META = {
  LinkedIn: {
    subtitle: "Company Page",
    action: "Connect on LinkedIn",
    accent: "#0a66c2",
  },

  Instagram: {
    subtitle: "Design & Culture",
    action: "Follow on Instagram",
    accent: "#dd2a7b",
  },

  Facebook: {
    subtitle: "Community",
    action: "Visit on Facebook",
    accent: "#1877f2",
  },

  GitHub: {
    subtitle: "Open Source",
    action: "Explore on GitHub",
    accent: "#24292f",
  },

  X: {
    subtitle: "News & Updates",
    action: "Follow on X",
    accent: "#0f1419",
  },
};

/* Display order, independent of the footer's ordering. */
const SOCIAL_ORDER = ["LinkedIn", "Instagram", "Facebook", "GitHub", "X"];

export const socialChannels = {
  badge: "Connect with Scaalable",

  title: "Connect to Scaalable on Social Channels",

  description:
    "Connect with Scaalable across social platforms and messaging channels for instant updates, insights, and direct messaging.",

  items: SOCIAL_ORDER.map((name) => {
    const link = socialLinks.find((social) => social.title === name);

    /* Guards against a rename in footerData silently breaking this section. */
    if (!link) return null;

    return {
      id: name,
      label: name,
      icon: link.icon,
      href: link.href,
      ...SOCIAL_META[name],
    };
  }).filter(Boolean),
};

/* ==========================================================================
   HEADQUARTERS
   ========================================================================== */

export const officeLocation = {
  badge: "Headquarter",

  title: "Visit Scaalable Office",

  description:
    "Located in West Bengal. Drop by for a coffee or schedule an in-person strategy session.",

  mapEmbedUrl: MAPS_EMBED_URL,
  mapTitle: "Map showing the Scaalable office in Konnagar, West Bengal",

  cardTitle: "Scaalable HQ",

  details: [
    {
      id: "address",
      icon: MapPin,
      label: "Office Address",
      lines: [
        "189/10/b, Haran Chandra Banerjee Ln,",
        "Arabinda Pally, Konnagar,",
        "West Bengal 712235",
      ],
    },

    {
      id: "landmark",
      icon: Landmark,
      label: "Nearby Landmarks",
      lines: ["Konnagar"],
    },

    {
      id: "hours",
      icon: Clock,
      label: "Visiting Hours",
      lines: [
        "Monday - Friday: 9:00 AM - 6:00 PM IST",
        "Appointment required for visitor access",
      ],
    },
  ],

  cta: {
    text: "Get Directions on Google Maps",
    href: MAPS_URL,
  },
};

/* ==========================================================================
   INQUIRY FORM
   ========================================================================== */

export const inquiryForm = {
  badge: "Start a Conversation",

  title: "Tell Us About Your Project",

  description:
    "Share a few details and our team will come back to you with tailored recommendations.",

  services: [
    "Website Design & Development",
    "Custom Software Development",
    "UI / UX Design",
    "Search Engine Optimization (SEO)",
    "Performance Marketing (Google & Meta Ads)",
    "Social Media Marketing",
    "AI Automation & Workflows",
    "Cloud Services & DevOps",
    "Branding & Creative",
    "Strategic Business Consultation",
    "Other",
  ],

  /* Two currencies, one set of bands. The dollar figures are the rupee ones
     converted at roughly ₹83 to $1 and rounded, so a band means the same
     amount whichever the sender picks — if the rate moves far enough to
     matter, adjust these rather than adding a third scale. */
  budget: {
    currencies: [
      {
        id: "INR",
        symbol: "₹",
        label: "INR",
        ranges: [
          "Under ₹50,000",
          "₹50,000 - ₹1,50,000",
          "₹1,50,000 - ₹5,00,000",
          "₹5,00,000 - ₹15,00,000",
          "Above ₹15,00,000",
          "Not sure yet",
        ],
      },
      {
        id: "USD",
        symbol: "$",
        label: "USD",
        ranges: [
          "Under $600",
          "$600 - $1,800",
          "$1,800 - $6,000",
          "$6,000 - $18,000",
          "Above $18,000",
          "Not sure yet",
        ],
      },
    ],
  },

  industries: [
    "Technology / SaaS",
    "E-Commerce & Retail",
    "Healthcare",
    "Finance & Insurance",
    "Education",
    "Real Estate",
    "Travel & Hospitality",
    "Manufacturing",
    "Media & Entertainment",
    "Non-Profit",
    "Other",
  ],

  countries: [
    "India",
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
    "United Arab Emirates",
    "Singapore",
    "Germany",
    "Netherlands",
    "Other",
  ],

  timelines: [
    "Immediately",
    "Within 1 month",
    "1 - 3 months",
    "3 - 6 months",
    "Just exploring",
  ],

  contactMethods: [
    { id: "email", label: "Email", icon: Mail },
    { id: "phone", label: "Phone Call", icon: Phone },
    { id: "whatsapp", label: "WhatsApp", icon: MessageCircle },
    { id: "meeting", label: "Zoom Meeting", icon: Video },
  ],

  descriptionPlaceholder:
    "Please share your business objectives, project requirements, challenges, preferred technologies, and expected timeline so our team can provide accurate recommendations.",

  submitLabel: "Send Your Inquiry",

  nextSteps: {
    title: "What Happens Next?",

    items: [
      "We review your requirements within 2 business hours.",
      "We assign a dedicated digital strategist to your query.",
      "You receive a free custom discovery report and milestone roadmap.",
    ],
  },

  privacy: {
    title: "Strict NDA & Privacy Policy",

    description:
      "Your business ideas and proprietary data are 100% confidential. We are happy to execute an NDA prior to in-depth technical discussions.",

    note: "256-Bit SSL Encrypted & GDPR Compliant",
  },
};

/* ==========================================================================
   PRODUCT JOURNEY — IDEA → DESIGN → BUILD → LAUNCH

   The composition is a flowing S-curve read left to right. Geometry lives in a
   fixed 1000x600 space; the stage locks to that same aspect ratio, so node
   positions expressed as percentages stay welded to the SVG curve at every
   width. Node size scales with container query units, so the whole thing
   shrinks as one piece instead of needing a second mobile layout.

   Segments are contiguous — each one ends exactly where the next begins — so
   the three particles read as a single continuous stream. The middle segment's
   midpoint is exactly the centre (500,300), which is why the curve passes
   cleanly behind the logo.

   particleDelay must stay negative: a positive <animateMotion> begin would
   park the circle at the SVG origin until its start time.
   ========================================================================== */

export const journeyViewBox = { width: 1000, height: 600 };


export const journeySegments = [
  {
    id: "idea-design",
    d: "M 150 300 C 250 300, 300 155, 400 155",
    particleDuration: "5.6s",
    particleDelay: "0s",
  },

  {
    id: "design-build",
    d: "M 400 155 C 500 155, 500 445, 600 445",
    particleDuration: "5.6s",
    particleDelay: "-1.87s",
  },

  {
    id: "build-launch",
    d: "M 600 445 C 700 445, 750 300, 850 300",
    particleDuration: "5.6s",
    particleDelay: "-3.73s",
  },
];

export const journeyNodes = [
  {
    id: "idea",
    label: "Idea",
    icon: Lightbulb,
    message: "Start with the problem worth solving.",

    x: 150,
    y: 300,

    segments: ["idea-design"],
    floatDelay: "0s",
  },

  {
    id: "design",
    label: "Design",
    icon: PenTool,
    message: "Turn ideas into thoughtful experiences.",

    x: 400,
    y: 155,

    segments: ["idea-design", "design-build"],
    floatDelay: "-2s",
  },

  {
    id: "build",
    label: "Build",
    icon: Code2,
    message: "Engineer it for performance and scale.",

    x: 600,
    y: 445,

    segments: ["design-build", "build-launch"],
    floatDelay: "-4s",
  },

  {
    id: "launch",
    label: "Launch",
    icon: Rocket,
    message: "Ship it, measure it, keep improving.",

    x: 850,
    y: 300,

    segments: ["build-launch"],
    floatDelay: "-6s",
  },
];

export default contactHero;
