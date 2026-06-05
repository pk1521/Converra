import {
  CONVERRA_EMAIL,
  CONVERRA_PHONE_DISPLAY,
  CONVERRA_WHATSAPP_URL,
} from "@/lib/brand";

export const RENOVATION_NAME = "Converra Renovation Solutions";
export const RENOVATION_NAV_LABEL = "Renovation Solutions";
export const RENOVATION_TAGLINE = "Transforming Spaces. Creating Value.";
export const RENOVATION_TAGLINE_ALT = "Renovate. Upgrade. Reimagine.";
export const RENOVATION_LOCATION = "Trichy, Tamil Nadu";

export const RENOVATION_PRIMARY_CTA = "Book Free Site Visit";
export const RENOVATION_CALCULATOR_CTA = "Estimate your budget";
export const RENOVATION_SECONDARY_CTA = "Get Renovation Estimate";
export const RENOVATION_EXPLORE_LABEL = "Explore Renovation Solutions";

export const RENOVATION_CONTACT_EMAIL = CONVERRA_EMAIL;
export const RENOVATION_CONTACT_PHONE = CONVERRA_PHONE_DISPLAY;
export const RENOVATION_WHATSAPP_URL = CONVERRA_WHATSAPP_URL;

export const RENOVATION_FOOTER_SUMMARY =
  "Renovation & remodeling for homes, villas, apartments & commercial spaces in Trichy.";

export const RENOVATION_FOOTER_KEYWORDS = [
  "Home renovation",
  "Kitchen remodeling",
  "Villa upgrades",
  "Commercial fit-outs",
  "Free site visit",
  "Turnkey delivery",
] as const;

export const RENOVATION_POSITIONING = [
  "Property Transformation Specialists",
  "Renovation Consultants",
  "Property Upgrade Experts",
  "Value Enhancement Partners",
] as const;

export const RENOVATION_SERVICE_GROUPS = [
  {
    id: "home",
    title: "Home Renovation",
    items: [
      "Complete Home Makeovers",
      "Living Room Renovation",
      "Bedroom Upgrades",
      "Kitchen Remodeling",
      "Bathroom Modernization",
    ],
  },
  {
    id: "villa",
    title: "Villa Renovation",
    items: [
      "Exterior Facelift",
      "Interior Remodeling",
      "Landscape Improvements",
      "Modern Design Upgrades",
    ],
  },
  {
    id: "apartment",
    title: "Apartment Renovation",
    items: [
      "Space Optimization",
      "Modular Kitchen",
      "Flooring Replacement",
      "Painting & False Ceiling",
    ],
  },
  {
    id: "commercial",
    title: "Commercial Renovation",
    items: [
      "Office Modernization",
      "Retail Store Upgrades",
      "Restaurant Renovation",
      "Workspace Transformation",
    ],
  },
  {
    id: "value",
    title: "Property Value Enhancement",
    description:
      "For owners planning to sell or rent. Cosmetic upgrades, interior refresh, exterior improvements, and rental readiness.",
    items: [] as string[],
  },
  {
    id: "nri",
    title: "NRI Property Renovation",
    description:
      "End-to-end renovation management: site inspection, progress monitoring, vendor coordination, digital updates, and final handover.",
    items: [] as string[],
  },
] as const;

export const RENOVATION_WHY = [
  {
    title: "Civil Engineering Expertise",
    description: "Solutions backed by technical knowledge.",
  },
  {
    title: "End-to-End Management",
    description: "Single point of coordination.",
  },
  {
    title: "Transparent Process",
    description: "Clear timelines and project updates.",
  },
  {
    title: "Cost Optimization",
    description: "Maximum impact within budget.",
  },
  {
    title: "Property Value Focus",
    description: "Every renovation is designed to increase value.",
  },
  {
    title: "Modern Design Thinking",
    description: "Contemporary aesthetics with practical functionality.",
  },
] as const;

export const RENOVATION_PROCESS = [
  { step: 1, title: "Site Visit", description: "On-site review of scope, condition, and goals." },
  { step: 2, title: "Property Assessment", description: "Technical and design evaluation of upgrade potential." },
  { step: 3, title: "Renovation Planning", description: "Phased plan aligned to budget and timeline." },
  { step: 4, title: "Design & Cost Estimation", description: "Detailed BOQ, materials, and transparent costing." },
  { step: 5, title: "Execution & Monitoring", description: "Coordinated vendors with regular progress updates." },
  { step: 6, title: "Final Delivery", description: "Quality check, handover, and post-completion support." },
] as const;

export const RENOVATION_CLIENTS = [
  "Homeowners",
  "Property Investors",
  "Commercial Owners",
  "NRI Owners",
  "Builders",
  "Real Estate Developers",
  "Rental Property Owners",
] as const;

export const RENOVATION_TESTIMONIALS = [
  {
    quote:
      "Converra managed our full apartment renovation remotely. Weekly photo updates and clear costing made it stress-free.",
    name: "Anitha R.",
    role: "Apartment Owner, Trichy",
  },
  {
    quote:
      "They are consultants first, not just contractors. Our office upgrade finished on time and within the agreed budget.",
    name: "Karthik V.",
    role: "Commercial Property Owner",
  },
  {
    quote:
      "The ready-to-sell makeover program helped us list faster and achieve a better price than we expected.",
    name: "Mohamed H.",
    role: "Property Investor",
  },
] as const;

export const RENOVATION_SPECIAL_PROGRAM = {
  title: "Ready-To-Sell Property Makeover",
  description:
    "For property owners looking to sell quickly. We renovate, modernize and reposition properties to improve market appeal and selling price.",
  cta: "Schedule Property Assessment",
};
