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
} from "lucide-react";
import founderImage from "../../../assets/images/founder.png";
import coFounderImage from "../../../assets/images/coFounder.png";
import aboutHeroImage from "../../../assets/images/about-hero.png";
import aboutHeroStory from "../../../assets/images/about-story.png";

export const aboutHero = {
  badge: "About Us",

  title: "More Than a Development Agency. Your Technology Partner.",

  description:
    "We help businesses turn ideas into scalable digital products through thoughtful design, modern technology, and long-term collaboration.",
  image: aboutHeroImage,
};

export const aboutCompany = {
  eyebrow: "About Company",

  title:
    "We build software that helps businesses grow—not just websites that look good.",

  paragraphs: [
    ' "Scaalable" is dedicated to providing businesses worldwide, regardless of being startups, SMEs, or multinational enterprises, access to high-end digital solutions which contribute to their development.',

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
      "We build scalable applications using modern technologies that are fast, secure, and future-ready.",
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
  badge: "What Sets Us Apart?",

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
      title: "Clean & Scalable Code",
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
  badge: "Vision & Mission",

  title:
    "Building technology that empowers businesses to grow with confidence.",

  description:
    "Everything we build is guided by a long-term vision and a practical mission to deliver real value.",

  cards: [
    {
      id: 1,
      icon: Eye,
      title: "Our Vision",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto laboriosam rem magni, consequuntur quidem dolorum perspiciatis accusantium expedita.",
    },

    {
      id: 2,
      icon: Target,
      title: "Our Mission",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, veritatis. Cumque illum quos voluptatum reprehenderit.",
    },
  ],
};

export const cta = {
  badge: "Let's Work Together",

  title: "Ready to turn your ideas into a successful digital product?",

  description:
    "Whether you're building a startup, improving an existing platform, or creating something entirely new, we'd love to help bring your vision to life.",

  primaryButton: {
    text: "Start Your Project",
    href: "#contact",
  },

  secondaryText:
    "Let's discuss your goals, challenges, and ideas over a quick conversation.",
};

export const founders = [
  {
    id: 1,

    name: "Jyotish",

    role: "Founder & Full Stack Developer",

    image: founderImage,

    bio: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quaerat eaque consequatur neque, enim molestiae.",

      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates veniam quibusdam minus.",
    ],
    quote:
      "Building software isn't just about writing code—it's about solving real business problems.",
    stats: [
      {
        label: "Experience",
        value: "2+ Years",
      },

      {
        label: "Projects",
        value: "15+",
      },

      {
        label: "Commitment",
        value: "100%",
      },
    ],

    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind", "AWS"],

    socials: {
      github: "#",
      linkedin: "#",
      email: "hello@scaalable.com",
    },
  },

  {
    id: 2,

    name: "Co-Founder",

    role: "Founder & Full Stack Developer",

    image: coFounderImage,

    bio: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",

      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    ],

    stats: [
      {
        label: "Experience",
        value: "2+ Years",
      },

      {
        label: "Projects",
        value: "12+",
      },

      {
        label: "Commitment",
        value: "100%",
      },
    ],

    technologies: ["React", "Node.js", "MongoDB", "Docker", "AWS"],

    socials: {
      github: "#",
      linkedin: "#",
      email: "hello@scaalable.com",
    },
  },
];
