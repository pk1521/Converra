import {
  CONVERRA_EMAIL,
  CONVERRA_PHONE_DISPLAY,
  CONVERRA_WHATSAPP_URL,
} from "@/lib/brand";

export const REALTY_PARTNERS_NAME = "Converra Realty Partners";

/** Main Converra nav / footer link label */
export const REALTY_NAV_LABEL = "Realty Partners";

export const REALTY_SERVICE_NAME = "Converra Realty Partners";

export const REALTY_EXPLORE_LABEL = "Explore Realty Partners";

export const REALTY_FOOTER_SUMMARY =
  "Sales, marketing and growth consulting for builders, developers, and plot promoters in Trichy. We accelerate inventory movement through lead generation, sales systems, and long-term partnerships.";
export const REALTY_PARTNERS_TAGLINE = "Accelerating Real Estate Growth";
export const REALTY_PARTNERS_LOCATION = "Trichy, Tamil Nadu";

export const REALTY_PRIMARY_CTA = "Book a Growth Consultation";
export const REALTY_SECONDARY_CTA = "Partner With Converra";

export const REALTY_CONTACT_EMAIL = CONVERRA_EMAIL;
export const REALTY_CONTACT_PHONE = CONVERRA_PHONE_DISPLAY;
export const REALTY_WHATSAPP_URL = CONVERRA_WHATSAPP_URL;

export const REALTY_POSITIONING = [
  "Real Estate Growth Partner",
  "Sales & Marketing Partner",
  "Growth Consulting for Real Estate",
  "Project Growth Specialists",
] as const;

export const REALTY_SERVICES = [
  {
    id: "sales",
    title: "Real Estate Sales Acceleration",
    items: [
      "Lead generation",
      "Sales funnel setup",
      "Site visit coordination",
      "Customer follow-up",
      "Deal closures",
      "Sales reporting",
    ],
  },
  {
    id: "digital",
    title: "Digital Marketing for Real Estate",
    items: [
      "Meta Ads",
      "Google Ads",
      "Landing Pages",
      "WhatsApp Marketing",
      "Lead Automation",
      "Campaign Management",
    ],
  },
  {
    id: "launch",
    title: "Project Launch Strategy",
    items: [
      "Branding",
      "Project Positioning",
      "Launch Campaigns",
      "Market Analysis",
      "Sales Planning",
      "Investor Outreach",
    ],
  },
  {
    id: "inventory",
    title: "Inventory Clearance Programs",
    description:
      "Designed for developers with slow-moving inventory. Performance-driven campaigns to accelerate plot, apartment and villa sales.",
    items: [] as string[],
  },
  {
    id: "channel",
    title: "Channel Partner Network",
    description:
      "Build and manage broker networks, referral partnerships and sales alliances to maximize project reach.",
    items: [] as string[],
  },
  {
    id: "nri",
    title: "NRI Property Growth Services",
    description:
      "Helping NRI property owners manage, market and monetize real estate assets efficiently.",
    items: [] as string[],
  },
] as const;

export const REALTY_WHY = [
  {
    title: "Sales-Focused",
    description: "We focus on inventory movement and revenue generation.",
  },
  {
    title: "Data-Driven",
    description: "Marketing strategies backed by performance metrics.",
  },
  {
    title: "Local Expertise",
    description: "Deep understanding of Trichy and surrounding real estate markets.",
  },
  {
    title: "Growth Mindset",
    description: "We think beyond brokerage and build long-term growth systems.",
  },
] as const;

export const REALTY_PROCESS = [
  { step: 1, title: "Project Assessment", description: "Audit positioning, inventory, and sales readiness." },
  { step: 2, title: "Market Positioning", description: "Define ICP, messaging, and competitive differentiation." },
  { step: 3, title: "Lead Generation", description: "Launch campaigns and capture qualified buyer demand." },
  { step: 4, title: "Sales Conversion", description: "Coordinate visits, follow-up, and deal closure." },
  { step: 5, title: "Growth Optimization", description: "Iterate channels, reporting, and scale what works." },
] as const;

export const REALTY_CLIENTS = [
  "Builders",
  "Developers",
  "Plot Promoters",
  "Villa Projects",
  "Land Owners",
  "Real Estate Investors",
  "NRI Property Owners",
] as const;

export const REALTY_COMPARISON = {
  traditional: [
    "Transaction Focused",
    "One-Time Commission",
    "Limited Marketing",
    "Limited Follow-Up",
  ],
  converra: [
    "Growth Focused",
    "Long-Term Partnership",
    "Full Marketing Support",
    "Sales Systems",
    "Lead Generation",
    "Revenue Growth Strategy",
  ],
} as const;

export const REALTY_TESTIMONIALS = [
  {
    quote:
      "Converra brought structure to our launch. Lead flow improved within weeks and our site visits became far more qualified.",
    name: "Rajesh K.",
    role: "Villa Developer, Trichy",
  },
  {
    quote:
      "They operate like a growth team, not brokers. Campaigns, follow-up, and reporting were handled end to end.",
    name: "Priya M.",
    role: "Plot Promoter",
  },
  {
    quote:
      "Our slow-moving inventory finally gained momentum. Clear strategy, consistent execution, measurable results.",
    name: "Arun S.",
    role: "Residential Developer",
  },
] as const;

export const REALTY_FORM_TITLE = "Start a growth conversation";
export const REALTY_FORM_SUBTITLE =
  "Tell us about your project, inventory, or launch goals. Our team responds within 24 hours.";
export const REALTY_FORM_SUBMIT = "Request consultation";
