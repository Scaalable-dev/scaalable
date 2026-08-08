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

  /* Position of this section on the services page — shown as the mobile
     eyebrow ("02 / INDUSTRIES"), where there is no room for a badge. */
  index: "02",

  title: "Solutions shaped around your operating reality.",

  description:
    "Our systems adapt to different compliance needs, customer journeys, transaction models and stages of growth.",
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
      "Rapid MVPs, scalable architecture and focused product execution for teams moving from idea to traction.",
    blueprintSteps: [
      {
        number: "01",
        icon: Target,
        title: "Turn the strongest idea into a focused MVP",
        description:
          "A clear product scope helps founders validate demand without overbuilding.",
      },
      {
        number: "02",
        icon: Workflow,
        title: "Connect the first operational workflows",
        description:
          "Lean automation reduces manual work while the team is still small.",
      },
      {
        number: "03",
        icon: ShieldCheck,
        title: "Create a foundation that can scale with traction",
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
      "Websites, automation and reporting that help small teams win more work without adding headcount.",
    blueprintSteps: [
      {
        number: "01",
        icon: Globe,
        title: "Turn the website into a working sales channel",
        description:
          "Clear service pages convert the buyers already searching for what you do.",
      },
      {
        number: "02",
        icon: Workflow,
        title: "Automate the quoting and follow-up loop",
        description:
          "Enquiries reach the right person and nothing is lost between calls.",
      },
      {
        number: "03",
        icon: ChartColumn,
        title: "See which work is actually profitable",
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
      "Internal platforms, integrations and governance for organisations running complex multi-team operations.",
    blueprintSteps: [
      {
        number: "01",
        icon: Boxes,
        title: "Replace scattered tools with one platform",
        description:
          "A single system removes duplicate data entry across departments.",
      },
      {
        number: "02",
        icon: Link2,
        title: "Integrate the systems already in place",
        description:
          "APIs connect ERP, CRM and reporting without disrupting operations.",
      },
      {
        number: "03",
        icon: ShieldCheck,
        title: "Meet security and access requirements",
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
      "Patient-facing platforms built around consent, records and the clinical workflows a practice actually runs.",
    blueprintSteps: [
      {
        number: "01",
        icon: CalendarCheck,
        title: "Make booking and intake effortless",
        description:
          "Online scheduling reduces phone volume and missed appointments.",
      },
      {
        number: "02",
        icon: FileCheck,
        title: "Handle patient data responsibly",
        description:
          "Consent, storage and access follow the rules your practice works under.",
      },
      {
        number: "03",
        icon: Activity,
        title: "Free clinical time from admin",
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
      "Listing platforms, CRM pipelines and enquiry routing built for long, high-value sales cycles.",
    blueprintSteps: [
      {
        number: "01",
        icon: Search,
        title: "Put every listing in front of the right buyer",
        description:
          "Fast search and filters keep serious buyers on the property longer.",
      },
      {
        number: "02",
        icon: Route,
        title: "Route enquiries to an agent instantly",
        description: "Leads reach a person while their interest is still high.",
      },
      {
        number: "03",
        icon: ChartLine,
        title: "Track deals from enquiry to closing",
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
      "Admissions journeys, learning portals and content systems for institutions growing their intake.",
    blueprintSteps: [
      {
        number: "01",
        icon: ClipboardList,
        title: "Turn enquiries into completed admissions",
        description:
          "A guided application flow reduces drop-off before enrolment.",
      },
      {
        number: "02",
        icon: BookOpen,
        title: "Deliver course material in one place",
        description:
          "Students and faculty stop chasing files across separate channels.",
      },
      {
        number: "03",
        icon: Users,
        title: "Keep parents and students informed",
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
      "Secure portals, dashboards and onboarding flows built for regulated money movement.",
    blueprintSteps: [
      {
        number: "01",
        icon: UserCheck,
        title: "Onboard clients without paperwork delays",
        description:
          "Digital verification collects and checks documents in a single pass.",
      },
      {
        number: "02",
        icon: ShieldCheck,
        title: "Keep every action traceable",
        description:
          "Audit logs and granular permissions stand up to compliance review.",
      },
      {
        number: "03",
        icon: ChartPie,
        title: "Give clients a clear view of their position",
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
      "Storefronts, catalogue systems and checkout flows tuned for conversion at scale.",
    blueprintSteps: [
      {
        number: "01",
        icon: ShoppingCart,
        title: "Remove friction from the checkout",
        description: "Fewer steps and faster pages recover abandoned carts.",
      },
      {
        number: "02",
        icon: PackageSearch,
        title: "Keep catalogue and stock in sync",
        description:
          "Inventory, pricing and orders stay accurate across every channel.",
      },
      {
        number: "03",
        icon: Repeat,
        title: "Turn first orders into repeat customers",
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
      "Ordering, reservation and local discovery systems for venues that run on table turnover.",
    blueprintSteps: [
      {
        number: "01",
        icon: MapPin,
        title: "Get found by nearby diners first",
        description:
          "Local search and menu visibility bring in walk-in demand.",
      },
      {
        number: "02",
        icon: CalendarClock,
        title: "Take bookings without the phone",
        description: "Online reservations fill tables and reduce no-shows.",
      },
      {
        number: "03",
        icon: Receipt,
        title: "Own your ordering channel",
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
      "Booking engines, guest journeys and property systems for stays competing on experience.",
    blueprintSteps: [
      {
        number: "01",
        icon: CalendarCheck,
        title: "Take direct bookings at a better margin",
        description: "A fast booking engine reduces dependence on aggregators.",
      },
      {
        number: "02",
        icon: Sparkles,
        title: "Personalise the stay before arrival",
        description:
          "Pre-arrival flows upsell rooms, transfers and added services.",
      },
      {
        number: "03",
        icon: Star,
        title: "Turn stays into reviews and returns",
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
      "Practice websites, client portals and intake automation for firms billing on time, not admin.",
    blueprintSteps: [
      {
        number: "01",
        icon: FileText,
        title: "Qualify matters before the first call",
        description:
          "Structured intake filters the enquiries worth a consultation.",
      },
      {
        number: "02",
        icon: FolderLock,
        title: "Share documents securely with clients",
        description:
          "A client portal replaces email attachments and version confusion.",
      },
      {
        number: "03",
        icon: Clock,
        title: "Recover hours lost to coordination",
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
      "Operational dashboards, inventory tools and internal platforms for teams running physical production.",
    blueprintSteps: [
      {
        number: "01",
        icon: Gauge,
        title: "See production status in real time",
        description:
          "Live dashboards replace spreadsheets updated at end of shift.",
      },
      {
        number: "02",
        icon: Boxes,
        title: "Keep inventory and orders aligned",
        description:
          "Stock levels stay accurate between the floor and the sales team.",
      },
      {
        number: "03",
        icon: Wrench,
        title: "Reduce downtime with planned maintenance",
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
      "Tracking, dispatch and coordination platforms for operations measured in delivery windows.",
    blueprintSteps: [
      {
        number: "01",
        icon: MapPinned,
        title: "Give customers live shipment visibility",
        description: "Self-serve tracking removes the constant status calls.",
      },
      {
        number: "02",
        icon: Route,
        title: "Plan routes and dispatch faster",
        description:
          "Better sequencing cuts fuel cost and idle vehicle time.",
      },
      {
        number: "03",
        icon: FileCheck,
        title: "Digitise proof of delivery",
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
      "Product surfaces, onboarding flows and usage dashboards for subscription businesses chasing retention.",
    blueprintSteps: [
      {
        number: "01",
        icon: Zap,
        title: "Get new users to value faster",
        description: "Guided onboarding lifts activation in the first session.",
      },
      {
        number: "02",
        icon: CreditCard,
        title: "Make billing and plans self-serve",
        description:
          "Upgrades, invoices and seat changes stop landing on support.",
      },
      {
        number: "03",
        icon: Activity,
        title: "Spot churn before it happens",
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
      "Positioning, client portals and delivery systems for firms selling expertise rather than products.",
    blueprintSteps: [
      {
        number: "01",
        icon: Award,
        title: "Make expertise obvious in minutes",
        description:
          "Case-led pages help prospects self-qualify before they get in touch.",
      },
      {
        number: "02",
        icon: CalendarCheck,
        title: "Turn interest into booked consultations",
        description:
          "Scheduling and intake run without back-and-forth email threads.",
      },
      {
        number: "03",
        icon: FolderKanban,
        title: "Keep delivery visible to clients",
        description:
          "Shared progress views reduce status meetings and chase-ups.",
      },
    ],
  },
];

export default industries;
