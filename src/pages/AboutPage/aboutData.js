import {
  Handshake,
  BriefcaseBusiness,
  Sparkles,
  ShieldCheck,
  Zap,
  Rocket,
  Code2,
  BarChart3,
  Users,
  Target,
  Eye,
  Lightbulb,
  Award,
  Palette,
  TrendingUp,
} from "lucide-react";
import founderImage from "../../assets/images/founder.png";
import coFounderImage from "../../assets/images/coFounder.png";
import aboutHeroImage from "../../assets/images/about-hero.png";
import aboutHeroStory from "../../assets/images/about-story.png";

export const aboutHero = {
  badge: "About Us",

  title: "More Than a Development Agency. Your Technology Partner.",

  description:
    "Scaalable is a comprehensive technology solution and digital growth firm providing startups, SMEs, and enterprises with a wide range of services related to designing effective digital products, creating highly scalable software, implementing intelligent automation, and devising performance-based marketing strategies. These include customized software solutions, enterprise web applications, branding services, search engine optimization, AI automation, cloud solutions, and paid advertising.",
  image: aboutHeroImage,
};

export const aboutCompany = {
  eyebrow: "About Scaalable",

  title: "More Than a Development Agency. Your Technology Partner.",

  paragraphs: [
    `"Scaalable" is dedicated to providing businesses worldwide, regardless of being startups, SMEs, or multinational enterprises, access to high-end digital solutions which contribute to their development."`,

    "Being a full-service Digital Marketing & IT Solutions Company”, Scaalable aims at assisting businesses in creating, growing, and scaling up their digital presence through such services as websites building, brand development, performance marketing, SEO, social media marketing, software development, artificial intelligence solutions for business, cloud services, and automation of businesses.",

    "In today’s highly dynamic digital environment, just the mere presence of businesses on the internet won’t suffice. The necessity arises in strategy planning, innovative technology application, storytelling, and execution based on the data analysis. And it is Scaalable which can help with all of that.",

    "Scaalable merges creativity and technology into custom solutions which will boost the visibility, engagement, generation of quality leads, and ROI maximization.",

    "No matter whether it’s about your very first website launch or digital transformation of your whole ecosystem, Scaalable will become your technology and growth partner.",
  ],

  quote:
    "We don't just deliver projects. We build digital foundations for business growth.",
};

export const values = [
  {
    id: 1,
    icon: BriefcaseBusiness,
    title: "Business First",
    description:
      "Every solution starts with understanding your business goals before writing a single line of code.",
  },

  {
    id: 2,
    icon: Sparkles,
    title: "Modern Technology",
    description:
      "We build modular applications using modern technologies that are fast, secure, and future-ready.",
  },

  {
    id: 3,
    icon: Handshake,
    title: "Transparent Communication",
    description:
      "Clear timelines, honest updates, and collaboration throughout every stage of the project.",
  },

  {
    id: 4,
    icon: ShieldCheck,
    title: "Long-Term Partnership",
    description:
      "Our relationship doesn't end after launch. We provide ongoing support to help your business grow.",
  },
];

export const features = {
  badge: "What Sets Scaalable Apart?",

  title:
    "We combine strategy, design, and technology to deliver real business impact.",

  items: [
    {
      id: 1,
      icon: Zap,
      title: "Problem Solvers",
      description: "We solve real business problems, not just build features.",
    },

    {
      id: 2,
      icon: Rocket,
      title: "Agile & Adaptive",
      description:
        "We adapt quickly to changes and deliver in iterative, measurable steps.",
    },

    {
      id: 3,
      icon: Code2,
      title: "Clean & Modular Code",
      description: "We write maintainable code that grows with your business.",
    },

    {
      id: 4,
      icon: BarChart3,
      title: "Results-Driven",
      description:
        "Every decision is made with performance, engagement and growth in mind.",
    },

    {
      id: 5,
      icon: Users,
      title: "Client Partnership",
      description:
        "We work as an extension of your team instead of another vendor.",
    },
  ],
};

export const story = {
  badge: "Our Story",

  title: "Vision Makes Every Great Brand Start.",

  subtitle: "We started Scaalable with one simple belief.",

  quote:
    "Businesses shouldn't need more than one agency for their digital success.",

  paragraphs: [
    "Too often, businesses rely on one agency for websites, another for SEO, freelancers for social media, and someone else for software development. This fragmented approach creates inconsistent branding, poor communication, unnecessary costs, and slower growth.",

    "Scaalable was built to solve this problem by bringing strategy, design, development, digital marketing, AI solutions, cloud services, and business automation together under one roof.",

    "Today, we partner with businesses across industries to strengthen their digital presence, streamline operations, and build sustainable long-term growth through one unified digital partner.",
  ],

  image: aboutHeroStory,
};

export const visionMission = {
  cards: [
    {
      id: 1,
      icon: Eye,
      title: "Our Vision",
      description:
        "Scaalable aims to become a globally trusted partner in digital transformation by helping all kinds of organizations make use of technology to achieve sustainability.",
    },

    {
      id: 2,
      icon: Target,
      title: "Our Mission",
      description:
        "Scaalable mission is to facilitate business growth in the world by providing cutting-edge digital marketing and IT services which generate value in the long run.",
    },
  ],
};

export const coreValues = {
  badge: "Core Values",

  title: "Principles That Drive Everything We Do",

  items: [
    {
      id: 1,
      icon: Lightbulb,
      accent: "blue",
      title: "Innovation",
      description:
        "We continuously explore modern technologies, AI tools, and industry best practices to build future-ready digital solutions.",
    },

    {
      id: 2,
      icon: Eye,
      accent: "purple",
      title: "Transparency",
      description:
        "We believe successful partnerships are built on honest communication, clear expectations, and complete project visibility.",
    },

    {
      id: 3,
      icon: Award,
      accent: "magenta",
      title: "Quality",
      description:
        "Every website, campaign, design, and software solution is developed with attention to detail, performance, security, and long-term maintainability.",
    },

    {
      id: 4,
      icon: Palette,
      accent: "blue",
      title: "Creativity",
      description:
        "Creative thinking helps businesses stand out. We design meaningful experiences that connect brands with their audiences.",
    },

    {
      id: 5,
      icon: Handshake,
      accent: "purple",
      title: "Partnership",
      description:
        "Our clients are more than customers—they are long-term partners. We work collaboratively to support their business objectives.",
    },

    {
      id: 6,
      icon: TrendingUp,
      accent: "magenta",
      title: "Growth",
      description:
        "Every decision we make is focused on helping businesses increase revenue, improve efficiency, and achieve measurable digital growth.",
    },
  ],
};

export const ctaBanner = {
  title: "Let's Build Something That Grows Your Business",

  paragraphs: [
    "Whether you're launching a new startup, redesigning your website, improving your digital marketing, or exploring AI-powered automation, Scaalable is ready to help.",

    "Let's create digital experiences that attract customers, strengthen your brand, and support sustainable business growth.",
  ],

  cta: {
    text: "Book Free Strategy Call",
    href: "/contact#contact-form",
  },
};

export const founders = [
  {
    id: 1,
    name: "Avijit Das",
    role: "Founder & CEO",
    image: founderImage,
    bio: [
      "Avijit Das, created this platform to enable easier digital transformation for enterprises all around the world. After a long experience in digital marketing, technology consultancy, and information technology services, he identified a common issue that many businesses face – handling multiple vendors and uncoordinated strategies.",
      "This is where Scaalable came in, providing all digital solutions from one team, under one umbrella.",
    ],
    socials: {
      instagram: "https://www.instagram.com/avijitdas_bycode/",
      facebook: "https://www.facebook.com/profile.php?id=61571357147855",
      linkedin: "https://www.linkedin.com/in/avijit-das-134b87421",
      email: "mailto:avijit@scaalable.com",
    },
  },

  {
    id: 2,
    name: "Tamal Gupta",
    role: "Co-Founder",
    image: coFounderImage,
    bio: [
      "As the Co-Founder of Scaalable, Tamal Gupta brings a strong passion for building modern, modular web applications that solve real business problems. With expertise in full-stack development and a focus on clean architecture, performance, and user experience, he plays a key role in transforming ideas into reliable digital products.",

      "Working closely with the founder, he helps businesses streamline their digital presence by developing secure, high-performance solutions tailored to their unique needs. His commitment to quality, collaboration, and continuous innovation ensures that every project delivered by Scaalable meets the highest standards.",
    ],
    socials: {
      instagram: "https://www.instagram.com/gupta_tamal",
      facebook: "https://www.facebook.com/tamal.gupta.14",
      linkedin: "https://www.linkedin.com/in/tamal-gupta-us60",
      email: "mailto:tamal@scaalable.com",
    },
  },
];
