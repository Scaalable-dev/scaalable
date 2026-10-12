import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bot,
  Building2,
  CheckCircle2,
  ChevronRight,
  Compass,
  Cpu,
  FileCode2,
  GitBranch,
  Globe,
  Headphones,
  HeartHandshake,
  KeyRound,
  Layers,
  Layout,
  LifeBuoy,
  Palette,
  Rocket,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Terminal,
  TrendingUp,
  Zap,
} from "lucide-react";

import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";
import Badge from "../../components/ui/Badge";
import Reveal from "../../components/ui/Reveal";

import founderImage from "../../assets/images/founder.webp";
import coFounderImage from "../../assets/images/coFounder.webp";

import { applyPageSeo } from "../../lib/pageMeta";
import { absoluteUrl } from "../../lib/site";
import { breadcrumbs, webPage } from "../../lib/structuredData";

import "./AboutScaalablePage.css";

const ABOUT_SCAALABLE_PATH = "/blog/about-scaalable";

const aboutScaalableSeo = () => ({
  meta: {
    title: "About Scaalable: Building, Scaling & Growing Companies with Tech",
    description:
      "Explore Scaalable, an IT services, software engineering, AI automation, and digital growth company in Kolkata, India. Building practical solutions for startups and enterprises.",
    canonical: absoluteUrl(ABOUT_SCAALABLE_PATH),
  },
  jsonLd: [
    webPage({
      path: ABOUT_SCAALABLE_PATH,
      title: "About Scaalable: Building, Scaling & Growing Companies with Tech",
      description:
        "Explore Scaalable, an IT services, software engineering, AI automation, and digital growth company.",
      type: "AboutPage",
    }),
    breadcrumbs([
      { name: "Blog", path: "/blog" },
      { name: "About Scaalable", path: ABOUT_SCAALABLE_PATH },
    ]),
  ],
});

/* Core services data from existing company portfolio */
const coreServices = [
  {
    id: "web-dev",
    title: "Website & Web Development",
    tag: "Core Engineering",
    icon: Globe,
    description:
      "Modern responsive websites and digital platforms built with clean code, fast loading speeds, and search-optimized architectures.",
    points: [
      "Custom Frontend & Backend",
      "Modern Web Applications",
      "API & Database Integration",
      "High-Performance Architecture",
    ],
  },
  {
    id: "ui-ux",
    title: "UI / UX Engineering",
    tag: "Design Systems",
    icon: Layout,
    description:
      "Human-centered digital interfaces and interaction design that simplify complex user workflows into intuitive experiences.",
    points: [
      "User Research & Journey Mapping",
      "Design Systems & Component Kits",
      "Interactive Prototyping",
      "Accessibility & Usability Focus",
    ],
  },
  {
    id: "software-dev",
    title: "Custom Software Development",
    tag: "Scalable Platforms",
    icon: Terminal,
    description:
      "Tailored digital products and software engineering built for security, high availability, and long-term maintainability.",
    points: [
      "Modular Backend Services",
      "Cloud-Ready Systems",
      "Secure API Integration",
      "Zero Technical Debt Engineering",
    ],
  },
  {
    id: "ai-automation",
    title: "AI & Business Automation",
    tag: "Efficiency Engines",
    icon: Bot,
    description:
      "Reduce repetitive manual tasks, automate customer communication, and empower your team to focus on strategic decisions.",
    points: [
      "Workflow Process Automation",
      "AI Agents & Chatbots",
      "Automated Lead Ingestion",
      "API-Driven Integrations",
    ],
  },
  {
    id: "seo-search",
    title: "SEO & Search Optimization",
    tag: "Organic Growth",
    icon: Search,
    description:
      "Technical accessibility, content structure, and on-page optimization that build durable search visibility and high-intent traffic.",
    points: [
      "Technical SEO Architecture",
      "Search Engine Discoverability",
      "GEO / AEO Content Alignment",
      "Page Speed & Core Web Vitals",
    ],
  },
  {
    id: "it-support",
    title: "Digital Growth & IT Support",
    tag: "Ongoing Partnership",
    icon: Headphones,
    description:
      "Dedicated technical maintenance, uptime monitoring, security patches, and continuous improvements to keep systems operating smoothly.",
    points: [
      "24/7 Availability Monitoring",
      "Regular Security & Code Updates",
      "Post-Launch Technical Guidance",
      "Dedicated Technical Roadmap",
    ],
  },
];

/* 6-step structured delivery process supported by project content */
const processSteps = [
  {
    step: "01",
    title: "Discovery & Insights",
    icon: Compass,
    description:
      "We begin by understanding your business model, customer journeys, operational bottlenecks, and core growth objectives.",
  },
  {
    step: "02",
    title: "Research & Strategy",
    icon: FileCode2,
    description:
      "Analyzing technology feasibility, competitor landscapes, and user expectations to define the clearest technical direction.",
  },
  {
    step: "03",
    title: "Planning & Scoping",
    icon: GitBranch,
    description:
      "Defining transparent milestones, system architecture, deliverables, and timelines with zero hidden scope surprises.",
  },
  {
    step: "04",
    title: "UI/UX & Prototyping",
    icon: Palette,
    description:
      "Designing responsive, interactive prototypes and design systems that bring clarity to every digital interaction.",
  },
  {
    step: "05",
    title: "Engineering & QA",
    icon: Cpu,
    description:
      "Writing clean, modular code with secure APIs and thorough testing across browsers, devices, and security benchmarks.",
  },
  {
    step: "06",
    title: "Launch & Growth",
    icon: Rocket,
    description:
      "Smooth zero-downtime deployment, full source code and IP handoff, search visibility setup, and ongoing optimization.",
  },
];

/* Who Scaalable works with */
const clientTypes = [
  {
    icon: Rocket,
    title: "Startups & Emerging Ventures",
    badge: "Idea to Launch",
    description:
      "Turning product concepts into dependable MVPs with rapid prototyping, solid architecture, and fast go-to-market execution.",
  },
  {
    icon: TrendingUp,
    title: "Scaling Businesses",
    badge: "Operational Growth",
    description:
      "Eliminating manual overhead through software integration and automated workflows built to handle increasing user volume.",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Brands",
    badge: "Conversion & Speed",
    description:
      "High-converting storefronts with streamlined checkout, custom platform integrations, and organic search engine discovery.",
  },
  {
    icon: Building2,
    title: "Enterprises & Corporates",
    badge: "Security & Scale",
    description:
      "Modernizing legacy processes, integrating AI automation, and providing dependable IT support for mission-critical operations.",
  },
];

/* Core company strengths based on project facts */
const whyScaalablePoints = [
  {
    icon: Layers,
    title: "Integrated Digital Disciplines",
    description:
      "Engineering, UX design, AI automation, and search visibility work together under one roof, preventing vendor disconnects and delays.",
  },
  {
    icon: GitBranch,
    title: "Milestone-Driven Transparency",
    description:
      "Clear deliverables, real-time demonstrations, and open communication at every phase so you always know what comes next.",
  },
  {
    icon: KeyRound,
    title: "100% IP & Code Ownership",
    description:
      "You receive complete documentation, repository access, and deployment ownership without restrictive lock-ins.",
  },
  {
    icon: LifeBuoy,
    title: "Enduring Technical Partnership",
    description:
      "We don't vanish after release. We monitor, maintain, and evolve your platform alongside your business's ongoing growth.",
  },
];

const AboutScaalablePage = () => {
  useEffect(() => {
    applyPageSeo(aboutScaalableSeo());
  }, []);

  return (
    <div className="about-scaalable-page">
      {/* ====================================================================
          1. HERO SECTION
          ==================================================================== */}
      <section className="as-hero" aria-labelledby="as-hero-heading">
        <div className="as-hero__ambient" aria-hidden="true" />
        <Container>
          <div className="as-hero__breadcrumb-nav">
            <Link to="/blog" className="as-hero__back-link">
              ← Blog
            </Link>
            <span className="as-hero__breadcrumb-sep" aria-hidden="true">/</span>
            <span className="as-hero__breadcrumb-current">About Scaalable</span>
          </div>

          <div className="as-hero__grid">
            {/* Left Content */}
            <div className="as-hero__content">
              <Reveal amount={0}>
                <Badge variant="primary" className="as-hero__badge">
                  About Scaalable
                </Badge>
              </Reveal>

              <Reveal delay={0.06} amount={0}>
                <h1 id="as-hero-heading" className="as-hero__title">
                  Building, Scaling &amp; Growing Companies with Tech
                </h1>
              </Reveal>

              <Reveal delay={0.12} amount={0}>
                <p className="as-hero__lead">
                  Scaalable is an IT Services, Software Development, AI, Automation, and Digital Growth company based in Kolkata, India. We connect technology decisions with long-term business goals.
                </p>
              </Reveal>

              <Reveal delay={0.18} amount={0}>
                <div className="as-hero__actions">
                  <Button
                    as={Link}
                    to="/contact#contact-form"
                    size="lg"
                    endIcon={<ArrowRight size={18} aria-hidden="true" />}
                  >
                    Start a Conversation
                  </Button>
                  <Button
                    as={Link}
                    to="/services"
                    variant="outline"
                    size="lg"
                  >
                    Explore Services
                  </Button>
                </div>
              </Reveal>

              {/* In-page quick jump navigation */}
              <Reveal delay={0.24} amount={0}>
                <nav className="as-hero__quicknav" aria-label="Quick section navigation">
                  <span className="as-hero__quicknav-label">Jump to:</span>
                  <a href="#who-we-are" className="as-hero__quicklink">Who We Are</a>
                  <a href="#what-we-do" className="as-hero__quicklink">What We Do</a>
                  <a href="#our-approach" className="as-hero__quicklink">Our Approach</a>
                  <a href="#our-mission" className="as-hero__quicklink">Our Mission</a>
                </nav>
              </Reveal>
            </div>

            {/* Right Rich Technology Graphic */}
            <Reveal className="as-hero__visual-container" delay={0.16} amount={0}>
              <div className="as-tech-visual" aria-hidden="true">
                <svg
                  viewBox="0 0 540 440"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="as-tech-visual__svg"
                >
                  <defs>
                    <radialGradient id="as-glow-primary" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#0082f9" stopOpacity="0.45" />
                      <stop offset="55%" stopColor="#8939fa" stopOpacity="0.22" />
                      <stop offset="100%" stopColor="#0082f9" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="as-glow-accent" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.38" />
                      <stop offset="100%" stopColor="#b93ffb" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="as-grad-brand" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#b93ffb" />
                      <stop offset="50%" stopColor="#8939fa" />
                      <stop offset="100%" stopColor="#0082f9" />
                    </linearGradient>
                    <linearGradient id="as-line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0082f9" stopOpacity="0.7" />
                      <stop offset="100%" stopColor="#8939fa" stopOpacity="0.2" />
                    </linearGradient>
                    <filter id="as-shadow-sm" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#0f172a" floodOpacity="0.1" />
                    </filter>
                  </defs>

                  {/* Ambient background glows */}
                  <circle cx="270" cy="220" r="180" fill="url(#as-glow-primary)" />
                  <circle cx="340" cy="180" r="140" fill="url(#as-glow-accent)" />

                  {/* Network background grid & node lines */}
                  <g stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 4" opacity="0.6">
                    <line x1="80" y1="90" x2="270" y2="220" />
                    <line x1="460" y1="90" x2="270" y2="220" />
                    <line x1="90" y1="350" x2="270" y2="220" />
                    <line x1="450" y1="350" x2="270" y2="220" />
                    <line x1="80" y1="90" x2="460" y2="90" strokeOpacity="0.3" />
                    <line x1="90" y1="350" x2="450" y2="350" strokeOpacity="0.3" />
                  </g>

                  {/* Concentric orbital rings */}
                  <circle cx="270" cy="220" r="130" stroke="#0082f9" strokeWidth="1.2" strokeOpacity="0.25" strokeDasharray="8 6" />
                  <circle cx="270" cy="220" r="85" stroke="#8939fa" strokeWidth="1.5" strokeOpacity="0.35" />

                  {/* Circuit traces */}
                  <path d="M120 160 H200 L240 200" stroke="url(#as-line-grad)" strokeWidth="1.8" fill="none" />
                  <path d="M420 160 H340 L300 200" stroke="url(#as-line-grad)" strokeWidth="1.8" fill="none" />
                  <path d="M160 300 H220 L250 250" stroke="url(#as-line-grad)" strokeWidth="1.8" fill="none" />
                  <path d="M380 300 H320 L290 250" stroke="url(#as-line-grad)" strokeWidth="1.8" fill="none" />

                  {/* Central High-Tech Hexagonal Core */}
                  <g transform="translate(270, 220)">
                    {/* Pulsing outer aura */}
                    <circle cx="0" cy="0" r="54" fill="#ffffff" filter="url(#as-shadow-sm)" />
                    <polygon
                      points="0,-48 42,-24 42,24 0,48 -42,24 -42,-24"
                      fill="url(#as-grad-brand)"
                    />
                    <polygon
                      points="0,-42 36,-21 36,21 0,42 -36,21 -36,-21"
                      fill="#ffffff"
                      opacity="0.12"
                    />
                    {/* Center Code Symbol */}
                    <text
                      x="0"
                      y="7"
                      fill="#ffffff"
                      fontSize="20"
                      fontWeight="800"
                      textAnchor="middle"
                      fontFamily="monospace"
                      letterSpacing="0.05em"
                    >
                      &lt;/&gt;
                    </text>
                  </g>

                  {/* Pulse nodes on vertices */}
                  <circle cx="270" cy="90" r="5" fill="#0082f9" />
                  <circle cx="270" cy="90" r="10" stroke="#0082f9" strokeWidth="1.2" strokeOpacity="0.4" />
                  <circle cx="400" cy="220" r="4" fill="#8939fa" />
                  <circle cx="140" cy="220" r="4" fill="#06b6d4" />
                  <circle cx="270" cy="350" r="5" fill="#b93ffb" />

                  {/* Floating Metric Card 1: Top Right (AI Engine) */}
                  <g transform="translate(320, 48)" filter="url(#as-shadow-sm)">
                    <rect width="186" height="54" rx="12" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
                    <circle cx="26" cy="27" r="14" fill="#eff6ff" />
                    <circle cx="26" cy="27" r="5" fill="#0082f9" />
                    <text x="48" y="24" fill="#0f172a" fontSize="11" fontWeight="700" fontFamily="sans-serif">
                      AI &amp; Automation
                    </text>
                    <text x="48" y="38" fill="#64748b" fontSize="9.5" fontWeight="500" fontFamily="sans-serif">
                      Smart Workflow Systems
                    </text>
                  </g>

                  {/* Floating Metric Card 2: Bottom Left (Architecture) */}
                  <g transform="translate(34, 305)" filter="url(#as-shadow-sm)">
                    <rect width="198" height="54" rx="12" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
                    <circle cx="26" cy="27" r="14" fill="#f5f3ff" />
                    <rect x="20" y="21" width="12" height="12" rx="3" fill="#8939fa" />
                    <text x="48" y="24" fill="#0f172a" fontSize="11" fontWeight="700" fontFamily="sans-serif">
                      Full-Stack Engineering
                    </text>
                    <text x="48" y="38" fill="#64748b" fontSize="9.5" fontWeight="500" fontFamily="sans-serif">
                      Scalable Clean Architecture
                    </text>
                  </g>

                  {/* Floating Metric Card 3: Bottom Right (Growth) */}
                  <g transform="translate(325, 305)" filter="url(#as-shadow-sm)">
                    <rect width="180" height="54" rx="12" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
                    <circle cx="26" cy="27" r="14" fill="#f0fdf4" />
                    <polyline points="20,31 25,23 29,27 34,20" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    <text x="48" y="24" fill="#0f172a" fontSize="11" fontWeight="700" fontFamily="sans-serif">
                      Search Optimization
                    </text>
                    <text x="48" y="38" fill="#64748b" fontSize="9.5" fontWeight="500" fontFamily="sans-serif">
                      Durable Organic Visibility
                    </text>
                  </g>

                  {/* Floating Metric Card 4: Top Left (Ownership) */}
                  <g transform="translate(34, 48)" filter="url(#as-shadow-sm)">
                    <rect width="176" height="54" rx="12" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
                    <circle cx="26" cy="27" r="14" fill="#fdf2f8" />
                    <path d="M26 19 L32 22 V27 C32 31 26 34 26 34 C26 34 20 31 20 27 V22 Z" fill="#b93ffb" />
                    <text x="48" y="24" fill="#0f172a" fontSize="11" fontWeight="700" fontFamily="sans-serif">
                      100% Code Ownership
                    </text>
                    <text x="48" y="38" fill="#64748b" fontSize="9.5" fontWeight="500" fontFamily="sans-serif">
                      Full Source Code Handoff
                    </text>
                  </g>
                </svg>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ====================================================================
          2. WHO WE ARE SECTION
          ==================================================================== */}
      <section id="who-we-are" className="as-section as-section--wash" aria-labelledby="who-heading">
        <Container>
          <div className="as-who__grid">
            {/* Left Story Column */}
            <div className="as-who__text-block">
              <Reveal amount={0}>
                <Badge variant="primary" className="as-section__badge">
                  Who We Are
                </Badge>
              </Reveal>

              <Reveal delay={0.06} amount={0}>
                <h2 id="who-heading" className="as-section__title">
                  We don&apos;t treat technology as an isolated problem.
                </h2>
              </Reveal>

              <Reveal delay={0.12} amount={0}>
                <div className="as-who__prose">
                  <p>
                    <strong>Scaalable</strong> is a technology and digital solutions company that combines software development, web engineering, UI/UX design, artificial intelligence, automation, SEO, digital growth, and managed IT support.
                  </p>
                  <p>
                    Headquartered in Kolkata, India, Scaalable constructs digital products for startups, scaling businesses, e-commerce stores, and enterprises—helping them increase online discoverability, automate operational overhead, and engineer dependable systems tailored directly around their business requirements.
                  </p>
                  <p>
                    Rather than viewing design, development, and marketing as disconnected silos, we align each technical discipline with your core business model, user journeys, and revenue growth.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.18} amount={0}>
                <div className="as-who__highlights">
                  <div className="as-who__highlight-item">
                    <CheckCircle2 className="as-who__check-icon" size={20} aria-hidden="true" />
                    <span>Holistic approach connecting engineering with business ROI</span>
                  </div>
                  <div className="as-who__highlight-item">
                    <CheckCircle2 className="as-who__check-icon" size={20} aria-hidden="true" />
                    <span>Direct collaboration with senior engineers and UX designers</span>
                  </div>
                  <div className="as-who__highlight-item">
                    <CheckCircle2 className="as-who__check-icon" size={20} aria-hidden="true" />
                    <span>Clear scope control and transparent milestone demonstrations</span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Leadership / Founders Card */}
            <Reveal className="as-who__cards-column" delay={0.14} amount={0}>
              <div className="as-founder-card">
                <div className="as-founder-card__header">
                  <span className="as-founder-card__kicker">Leadership</span>
                  <h3>The Team Behind Scaalable</h3>
                </div>

                <div className="as-founder-card__list">
                  {/* Founder 1: Avijit Das */}
                  <div className="as-founder-card__profile">
                    <img
                      src={founderImage}
                      alt="Avijit Das, Founder & CEO of Scaalable"
                      className="as-founder-card__avatar"
                      width="72"
                      height="72"
                      loading="lazy"
                    />
                    <div className="as-founder-card__meta">
                      <h4>Avijit Das</h4>
                      <span className="as-founder-card__role">Founder &amp; CEO</span>
                      <p className="as-founder-card__bio">
                        Committed to constructing a technology-oriented business that provides practical software engineering, web development, UI/UX, AI, automation, and digital services to organizations and their clients.
                      </p>
                    </div>
                  </div>

                  {/* Founder 2: Tamal Gupta */}
                  <div className="as-founder-card__profile">
                    <img
                      src={coFounderImage}
                      alt="Tamal Gupta, Co-Founder of Scaalable"
                      className="as-founder-card__avatar"
                      width="72"
                      height="72"
                      loading="lazy"
                    />
                    <div className="as-founder-card__meta">
                      <h4>Tamal Gupta</h4>
                      <span className="as-founder-card__role">Co-Founder &amp; Architect</span>
                      <p className="as-founder-card__bio">
                        Focusing on clean modular architecture, full-stack performance, and intuitive user experiences to transform complex ideas into reliable digital products.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="as-founder-card__footer">
                  <div className="as-founder-pill">
                    <span className="as-founder-pill__dot" aria-hidden="true" />
                    <span>Kolkata, India — Serving Global Clients</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ====================================================================
          3. WHAT WE DO (CORE OFFERINGS)
          ==================================================================== */}
      <section id="what-we-do" className="as-section" aria-labelledby="offerings-heading">
        <Container>
          <div className="as-section-header">
            <Reveal amount={0}>
              <Badge variant="primary">Core Capabilities</Badge>
            </Reveal>
            <Reveal delay={0.06} amount={0}>
              <h2 id="offerings-heading" className="as-section-header__title">
                What Offerings Does Scaalable Supply?
              </h2>
            </Reveal>
            <Reveal delay={0.12} amount={0}>
              <p className="as-section-header__subtitle">
                Comprehensive digital disciplines engineered to help modern organizations build, operate, and scale.
              </p>
            </Reveal>
          </div>

          <div className="as-services-grid">
            {coreServices.map((service, index) => {
              const ServiceIcon = service.icon;
              return (
                <Reveal key={service.id} delay={index * 0.07} amount={0.15}>
                  <div className="as-service-card">
                    <div className="as-service-card__top">
                      <div className="as-service-card__icon-box">
                        <ServiceIcon size={24} aria-hidden="true" />
                      </div>
                      <span className="as-service-card__tag">{service.tag}</span>
                    </div>

                    <h3 className="as-service-card__title">{service.title}</h3>
                    <p className="as-service-card__description">{service.description}</p>

                    <ul className="as-service-card__points">
                      {service.points.map((pt) => (
                        <li key={pt}>
                          <ChevronRight size={14} className="as-service-card__arrow" aria-hidden="true" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <div className="as-services__cta-row">
            <Reveal delay={0.2} amount={0}>
              <Link to="/services" className="as-view-all-link">
                View detailed service capabilities and technical breakdown <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ====================================================================
          4. WHO WE WORK WITH
          ==================================================================== */}
      <section className="as-section as-section--wash" aria-labelledby="clients-heading">
        <Container>
          <div className="as-section-header">
            <Reveal amount={0}>
              <Badge variant="primary">Client Partnerships</Badge>
            </Reveal>
            <Reveal delay={0.06} amount={0}>
              <h2 id="clients-heading" className="as-section-header__title">
                Who Does Scaalable Work With?
              </h2>
            </Reveal>
            <Reveal delay={0.12} amount={0}>
              <p className="as-section-header__subtitle">
                We support organizations across distinct growth stages with software, design, and growth engineering.
              </p>
            </Reveal>
          </div>

          <div className="as-clients-grid">
            {clientTypes.map((client, i) => {
              const ClientIcon = client.icon;
              return (
                <Reveal key={client.title} delay={i * 0.08} amount={0.15}>
                  <div className="as-client-card">
                    <div className="as-client-card__badge-row">
                      <div className="as-client-card__icon-wrap">
                        <ClientIcon size={22} aria-hidden="true" />
                      </div>
                      <span className="as-client-card__badge">{client.badge}</span>
                    </div>
                    <h3 className="as-client-card__title">{client.title}</h3>
                    <p className="as-client-card__text">{client.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ====================================================================
          5. OUR APPROACH (STRUCTURED 6-STEP PROCESS)
          ==================================================================== */}
      <section id="our-approach" className="as-section" aria-labelledby="approach-heading">
        <Container>
          <div className="as-section-header">
            <Reveal amount={0}>
              <Badge variant="primary">How We Work</Badge>
            </Reveal>
            <Reveal delay={0.06} amount={0}>
              <h2 id="approach-heading" className="as-section-header__title">
                Our Structured Engineering &amp; Delivery Process
              </h2>
            </Reveal>
            <Reveal delay={0.12} amount={0}>
              <p className="as-section-header__subtitle">
                The process starts with insights into the business, objectives, users, problems, and requirements.
              </p>
            </Reveal>
          </div>

          <div className="as-process-timeline">
            {processSteps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <Reveal key={step.step} delay={idx * 0.08} amount={0.15}>
                  <div className="as-process-step">
                    <div className="as-process-step__header">
                      <span className="as-process-step__number">{step.step}</span>
                      <div className="as-process-step__icon-circle">
                        <StepIcon size={18} aria-hidden="true" />
                      </div>
                    </div>
                    <h3 className="as-process-step__title">{step.title}</h3>
                    <p className="as-process-step__text">{step.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ====================================================================
          6. OUR MISSION & PHILOSOPHY (EDITORIAL SECTION)
          ==================================================================== */}
      <section id="our-mission" className="as-section as-section--wash" aria-labelledby="mission-heading">
        <Container>
          <div className="as-mission-box">
            <div className="as-mission-box__glow" aria-hidden="true" />
            <div className="as-mission-box__content">
              <Reveal amount={0}>
                <Badge variant="primary" className="as-mission-badge">
                  Our Mission
                </Badge>
              </Reveal>

              <Reveal delay={0.08} amount={0}>
                <h2 id="mission-heading" className="as-mission-box__title">
                  Empowering companies to solve problems, increase visibility &amp; generate long-term leads.
                </h2>
              </Reveal>

              <Reveal delay={0.14} amount={0}>
                <blockquote className="as-mission-quote">
                  &ldquo;At Scaalable we want to help companies leverage technology to address everyday problems, boost efficiency, make them visible online and generate long-term leads. The primary emphasis is not just on the delivery of the technology, but on understanding the business requirement and devising tangible solutions that offer real value.&rdquo;
                </blockquote>
              </Reveal>

              <Reveal delay={0.2} amount={0}>
                <div className="as-mission-pillars">
                  <div className="as-mission-pillar">
                    <HeartHandshake className="as-mission-pillar__icon" size={24} aria-hidden="true" />
                    <h4>Business-First Mindset</h4>
                    <p>Every architecture and technical recommendation is tied directly to your practical operational goals.</p>
                  </div>
                  <div className="as-mission-pillar">
                    <Zap className="as-mission-pillar__icon" size={24} aria-hidden="true" />
                    <h4>Practical Innovation</h4>
                    <p>Applying modern AI and automation where it yields tangible time savings, not as buzzword add-ons.</p>
                  </div>
                  <div className="as-mission-pillar">
                    <ShieldCheck className="as-mission-pillar__icon" size={24} aria-hidden="true" />
                    <h4>Uncompromised Integrity</h4>
                    <p>Clear project scopes, honest milestone timelines, and complete source code and deployment ownership.</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ====================================================================
          7. WHY SCAALABLE
          ==================================================================== */}
      <section id="why-scaalable" className="as-section" aria-labelledby="why-heading">
        <Container>
          <div className="as-section-header">
            <Reveal amount={0}>
              <Badge variant="primary">Why Scaalable</Badge>
            </Reveal>
            <Reveal delay={0.06} amount={0}>
              <h2 id="why-heading" className="as-section-header__title">
                Dependable Delivery Built Around Real Strengths
              </h2>
            </Reveal>
            <Reveal delay={0.12} amount={0}>
              <p className="as-section-header__subtitle">
                Clear communication, transparent milestone tracking, and full technological ownership from day one.
              </p>
            </Reveal>
          </div>

          <div className="as-why-grid">
            {whyScaalablePoints.map((point, i) => {
              const PointIcon = point.icon;
              return (
                <Reveal key={point.title} delay={i * 0.09} amount={0.15}>
                  <div className="as-why-card">
                    <div className="as-why-card__icon-wrap">
                      <PointIcon size={24} aria-hidden="true" />
                    </div>
                    <h3 className="as-why-card__title">{point.title}</h3>
                    <p className="as-why-card__text">{point.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ====================================================================
          8. FINAL CALL TO ACTION
          ==================================================================== */}
      <section className="as-cta-section" aria-labelledby="as-cta-heading">
        <Container>
          <div className="as-cta-panel">
            <div className="as-cta-panel__glow" aria-hidden="true" />
            <div className="as-cta-panel__content">
              <Reveal amount={0}>
                <span className="as-cta-panel__pill">
                  <Sparkles size={13} aria-hidden="true" />
                  <span>Start Your Project</span>
                </span>
              </Reveal>

              <Reveal delay={0.06} amount={0}>
                <h2 id="as-cta-heading" className="as-cta-panel__title">
                  Ready to Build, Scale, or Automate Your Business?
                </h2>
              </Reveal>

              <Reveal delay={0.12} amount={0}>
                <p className="as-cta-panel__description">
                  Tell us where you are today, and we&apos;ll help you map out the clearest, most practical technology solution for your business goals.
                </p>
              </Reveal>

              <Reveal delay={0.18} amount={0}>
                <div className="as-cta-panel__buttons">
                  <Button
                    as={Link}
                    to="/contact#contact-form"
                    size="lg"
                    endIcon={<ArrowRight size={18} aria-hidden="true" />}
                  >
                    Start a Conversation
                  </Button>
                  <Button
                    as={Link}
                    to="/services"
                    variant="outline"
                    size="lg"
                  >
                    View All Services
                  </Button>
                </div>
              </Reveal>

              <Reveal delay={0.22} amount={0}>
                <div className="as-cta-panel__back">
                  <Link to="/blog" className="as-cta-panel__back-link">
                    ← Back to Blog &amp; Insights
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default AboutScaalablePage;
