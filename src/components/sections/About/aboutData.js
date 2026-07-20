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
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptas, perspiciatis dignissimos minus architecto officiis necessitatibus consequatur autem accusamus atque.",

    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, explicabo. Nihil beatae aliquam quos facere tempore vitae deleniti quae dicta.",

    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, doloremque. Ratione aspernatur maxime consectetur reprehenderit nemo eligendi.",
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

export const timeline = {
  badge: "Our Story",

  title:
    "From an idea to a mission of helping businesses grow with technology.",

  description:
    "Every journey starts with a single step. Here's how we continue evolving as a technology partner for businesses.",

  items: [
    {
      id: 1,
      year: "2022",
      title: "The Beginning",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, asperiores.",
    },

    {
      id: 2,
      year: "2023",
      title: "Building Experience",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, asperiores.",
    },

    {
      id: 3,
      year: "2024",
      title: "Launching Scaalable",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, asperiores.",
    },

    {
      id: 4,
      year: "Future",
      title: "Growing With Our Clients",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, asperiores.",
    },
  ],
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
