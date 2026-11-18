import {
  Activity,
  Award,
  BedDouble,
  BookOpen,
  Boxes,
  Briefcase,
  BriefcaseBusiness,
  Building,
  Building2,
  CalendarCheck,
  CalendarClock,
  ChartColumn,
  ChartLine,
  ChartPie,
  ClipboardList,
  Clock,
  Cloud,
  CreditCard,
  Factory,
  FileCheck,
  FileText,
  FolderKanban,
  FolderLock,
  Gauge,
  Globe,
  GraduationCap,
  HeartPulse,
  Landmark,
  Link2,
  MapPin,
  MapPinned,
  PackageSearch,
  Receipt,
  Repeat,
  Rocket,
  Route,
  Scale,
  Search,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Star,
  Target,
  Truck,
  UserCheck,
  Users,
  UtensilsCrossed,
  Workflow,
  Wrench,
  Zap,
} from "lucide-react";

/* ==========================================================================
   INDUSTRIES — SECTION INTRO
   ========================================================================== */

export const industriesIntro = {
  badge: "Industries",

  title: "Digital solutions built around how your industry works.",

  description:
    " As a full-service software development agency and web development company in kolkata, we combine strategy, custom software, and AI automation to deliver tailored IT solutions for every industry.",
};

/* ==========================================================================
   INDUSTRIES — BLUEPRINT DATA

   One entry drives the whole interface: counter, tile icon, accent, panel
   copy and the three blueprint steps. Adding or removing an entry needs no
   component change — the selector grid, mobile carousel pages and counter
   all derive from this array's length.

   `accent` is drawn from the project's existing brand and service-accent
   values; nothing here introduces a colour outside the palette.
   ========================================================================== */

export const industries = [
  {
    id: "startups",
    name: "Startups",
    icon: Rocket,
    accent: "#0082f9",
    description:
      "Rapid MVPs, scalable architecture, and focused product execution by a top custom software development company for scalable applications.",
    blueprintSteps: [
      {
        number: "01",
        icon: Target,
        title: "Turn ideas into high-performing MVPs",
        description:
          "A clear product scope helps early-stage teams validate demand without overbuilding.",
      },
      {
        number: "02",
        icon: Workflow,
        title: "automate startup workflows",
        description:
          "Lean automation reduces manual work while the team is still small.",
      },
      {
        number: "03",
        icon: ShieldCheck,
        title: "build scalable digital foundations",
        description:
          "Maintainable architecture supports faster iteration after launch.",
      },
    ],
  },

  {
    id: "smbs",
    name: "SMBs",
    icon: BriefcaseBusiness,
    accent: "#006cfa",
    description:
      "Websites, automation and reporting built by an expert web development company in kolkata to help small businesses scale.",
    blueprintSteps: [
      {
        number: "01",
        icon: Globe,
        title: "Turn your site into a sales engine using high-performance web development services",
        description:
          "Clear service pages convert the buyers already searching for what you do.",
      },
      {
        number: "02",
        icon: Workflow,
        title: "Automate lead quoting",
        description:
          "Enquiries reach the right person and nothing is lost between calls.",
      },
      {
        number: "03",
        icon: ChartColumn,
        title: "Track profitability.",
        description:
          "Straightforward reporting shows where revenue comes from each month.",
      },
    ],
  },

  {
    id: "enterprise",
    name: "Enterprise",
    icon: Building2,
    accent: "#0056d6",
    description:
      "Internal platforms, custom integrations and governance built by the best software company in india for complex enterprise operations",
    blueprintSteps: [
      {
        number: "01",
        icon: Boxes,
        title: "Replace scattered tools with custom enterprise SaaS platforms",
        description:
          "A single system removes duplicate data entry across departments.",
      },
      {
        number: "02",
        icon: Link2,
        title: "Integrate existing systems",
        description:
          "APIs connect ERP, CRM and reporting without disrupting operations.",
      },
      {
        number: "03",
        icon: ShieldCheck,
        title: "Ensure high-level security compliance",
        description:
          "Role-based controls and audit trails satisfy internal governance.",
      },
    ],
  },

  {
    id: "healthcare",
    name: "Healthcare",
    icon: HeartPulse,
    accent: "#06b6d4",
    description:
      "Patient-facing healthcare platforms and HIPAA-compliant custom software development services",
    blueprintSteps: [
      {
        number: "01",
        icon: CalendarCheck,
        title: "Implement effortless online booking",
        description:
          "Online scheduling reduces phone volume and missed appointments.",
      },
      {
        number: "02",
        icon: FileCheck,
        title: "Secure patient record management",
        description:
          "Consent, storage and access follow the rules your practice works under.",
      },
      {
        number: "03",
        icon: Activity,
        title: "AI-powered administrative workflow automation",
        description:
          "Automated reminders and records cut repetitive front-desk work.",
      },
    ],
  },

  {
    id: "real-estate",
    name: "Real Estate",
    icon: Building,
    accent: "#2f7bff",
    description:
      "Listing platforms, CRM pipelines, and digital portals built by a professional seo company india for high-value real estate growth.",
    blueprintSteps: [
      {
        number: "01",
        icon: Search,
        title: "Put listings in front of buyers with technical SEO",
        description:
          "Fast search and filters keep serious buyers on the property longer.",
      },
      {
        number: "02",
        icon: Route,
        title: "Route property leads instantly",
        description: "Leads reach a person while their interest is still high.",
      },
      {
        number: "03",
        icon: ChartLine,
        title: "Track sales pipelines seamlessly",
        description: "Pipeline visibility shows which listings need attention.",
      },
    ],
  },

  {
    id: "education",
    name: "Education",
    icon: GraduationCap,
    accent: "#6366f1",
    description:
      "Admissions journeys, custom learning portals (LMS), and educational website development services.",
    blueprintSteps: [
      {
        number: "01",
        icon: ClipboardList,
        title: " Streamline student admissions with guided application flows",
        description:
          "A guided application flow reduces drop-off before enrolment.",
      },
      {
        number: "02",
        icon: BookOpen,
        title: "Deliver centralized course material",
        description:
          "Students and faculty stop chasing files across separate channels.",
      },
      {
        number: "03",
        icon: Users,
        title: "automate student-parent updates",
        description:
          "Automated updates replace repeated administrative follow-up.",
      },
    ],
  },

  {
    id: "finance",
    name: "Finance",
    icon: Landmark,
    accent: "#0ea5e9",
    description:
      "Secure fintech portals, compliance dashboards, and custom SaaS software development services for regulated financial institutions.",
    blueprintSteps: [
      {
        number: "01",
        icon: UserCheck,
        title: "Onboard clients instantly via digital verification",
        description:
          "Digital verification collects and checks documents in a single pass.",
      },
      {
        number: "02",
        icon: ShieldCheck,
        title: "Maintain complete audit trails",
        description:
          "Audit logs and granular permissions stand up to compliance review.",
      },
      {
        number: "03",
        icon: ChartPie,
        title: " deliver real-time financial dashboards",
        description: "Live dashboards reduce routine account queries.",
      },
    ],
  },

  {
    id: "ecommerce",
    name: "E-commerce",
    icon: ShoppingBag,
    accent: "#8939fa",
    description:
      "Storefronts, catalogue systems and checkout flows powered by high-performance web development services for e-commerce.",
    blueprintSteps: [
      {
        number: "01",
        icon: ShoppingCart,
        title: "Optimize checkout conversion",
        description: "Fewer steps and faster pages recover abandoned carts.",
      },
      {
        number: "02",
        icon: PackageSearch,
        title: "Synchronize multi-channel inventory",
        description:
          "Inventory, pricing and orders stay accurate across every channel.",
      },
      {
        number: "03",
        icon: Repeat,
        title: "automate post-purchase customer retention",
        description:
          "Post-purchase automation brings buyers back without more ad spend.",
      },
    ],
  },

  {
    id: "restaurants",
    name: "Restaurants",
    icon: UtensilsCrossed,
    accent: "#b93ffb",
    description:
      "Direct ordering, reservation, and local SEO discovery systems built by a trusted web development agency. ",
    blueprintSteps: [
      {
        number: "01",
        icon: MapPin,
        title: " Rank high on local search for nearby diners",
        description:
          "Local search and menu visibility bring in walk-in demand.",
      },
      {
        number: "02",
        icon: CalendarClock,
        title: "Automate table bookings",
        description: "Online reservations fill tables and reduce no-shows.",
      },
      {
        number: "03",
        icon: Receipt,
        title: "Run commission-free direct ordering",
        description:
          "Direct online orders avoid third-party commission on every sale.",
      },
    ],
  },

  {
    id: "hospitality",
    name: "Hospitality",
    icon: BedDouble,
    accent: "#a855f7",
    description:
      "Custom booking engines, guest portals, and property management systems built by experts offering custom web development services.",
    blueprintSteps: [
      {
        number: "01",
        icon: CalendarCheck,
        title: "Drive direct bookings with zero aggregator fees",
        description: "A fast booking engine reduces dependence on aggregators.",
      },
      {
        number: "02",
        icon: Sparkles,
        title: " Personalize pre-arrival guest experiences",
        description:
          "Pre-arrival flows upsell rooms, transfers and added services.",
      },
      {
        number: "03",
        icon: Star,
        title: "Automate post-stay review campaigns.",
        description: "Timed follow-ups convert good stays into public reviews.",
      },
    ],
  },

  {
    id: "legal",
    name: "Legal Services",
    icon: Scale,
    accent: "#7c3aed",
    description:
      "Practice websites, secure client portals, and intake automation built by a trusted software development agency.",
    blueprintSteps: [
      {
        number: "01",
        icon: FileText,
        title: " Streamline client intake and lead qualification",
        description:
          "Structured intake filters the enquiries worth a consultation.",
      },
      {
        number: "02",
        icon: FolderLock,
        title: "Enable encrypted cloud document sharing",
        description:
          "A client portal replaces email attachments and version confusion.",
      },
      {
        number: "03",
        icon: Clock,
        title: "Automate legal consultation scheduling",
        description:
          "Automated scheduling and reminders protect billable time.",
      },
    ],
  },

  {
    id: "manufacturing",
    name: "Manufacturing",
    icon: Factory,
    accent: "#003ea9",
    description:
      "Operational dashboards, ERP tools, and custom software development services for manufacturing units.",
    blueprintSteps: [
      {
        number: "01",
        icon: Gauge,
        title: "Real-time IoT production tracking",
        description:
          "Live dashboards replace spreadsheets updated at end of shift.",
      },
      {
        number: "02",
        icon: Boxes,
        title: "Automated inventory and order management",
        description:
          "Stock levels stay accurate between the floor and the sales team.",
      },
      {
        number: "03",
        icon: Wrench,
        title: "Predictive maintenance scheduling to cut downtime",
        description:
          "Scheduled checks and alerts prevent avoidable stoppages.",
      },
    ],
  },

  {
    id: "logistics",
    name: "Logistics",
    icon: Truck,
    accent: "#3b82f6",
    description:
      "Tracking platforms, fleet management systems, and supply chain solutions built by the best software company in india.",
    blueprintSteps: [
      {
        number: "01",
        icon: MapPinned,
        title: "Provide live self-serve shipment tracking",
        description: "Self-serve tracking removes the constant status calls.",
      },
      {
        number: "02",
        icon: Route,
        title: "Optimize routes and dispatch cycles",
        description:
          "Better sequencing cuts fuel cost and idle vehicle time.",
      },
      {
        number: "03",
        icon: FileCheck,
        title: "Automate digital proof-of-delivery",
        description:
          "Signed records reach billing the same day, not the next week.",
      },
    ],
  },

  {
    id: "saas",
    name: "SaaS Companies",
    icon: Cloud,
    accent: "#8b5cf6",
    description:
      "Custom web applications, user onboarding flows, and SaaS software development services for subscription products.",
    blueprintSteps: [
      {
        number: "01",
        icon: Zap,
        title: "Accelerate time-to-value via guided onboarding",
        description: "Guided onboarding lifts activation in the first session.",
      },
      {
        number: "02",
        icon: CreditCard,
        title: "Implement self-serve billing engines",
        description:
          "Upgrades, invoices and seat changes stop landing on support.",
      },
      {
        number: "03",
        icon: Activity,
        title: "Leverage usage analytics to reduce churn",
        description:
          "Usage signals show which accounts need attention this week.",
      },
    ],
  },

  {
    id: "professional",
    name: "Professional Services",
    icon: Briefcase,
    accent: "#00247b",
    description:
      "Corporate portals, client delivery systems, and acquisition pages engineered by a professional seo company india.",
    blueprintSteps: [
      {
        number: "01",
        icon: Award,
        title: "Show authority with high-converting case study pages",
        description:
          "Case-led pages help prospects self-qualify before they get in touch.",
      },
      {
        number: "02",
        icon: CalendarCheck,
        title: "Automate lead-to-consultation bookings",
        description:
          "Scheduling and intake run without back-and-forth email threads.",
      },
      {
        number: "03",
        icon: FolderKanban,
        title: "Provide real-time client project dashboards",
        description:
          "Shared progress views reduce status meetings and chase-ups.",
      },
    ],
  },
];

export default industries;
