/** Logo-derived palette */
export const CONVERRA_NAVY = "#002147";
export const CONVERRA_TEAL = "#008B9C";
export const CONVERRA_TEAL_BRIGHT = "#2EC4C9";
export const CONVERRA_BLUE = "#0066B3";
export const CONVERRA_GREY = "#999999";

export const LOGO_GROWTH_PARTNERS = "/logo-growth-partners.png";
export const LOGO_REALTY_PARTNERS = "/logo-realty-partners.png";
export const LOGO_RENOVATION_SOLUTIONS = "/logo-renovation-solutions.png";

/** Parent company */
export const PK_GROUPS_NAME = "PK Groups";

/** Operating brand under PK Groups */
export const CONVERRA_BRAND_NAME = "Converra";

/** Hero / footer line — Converra entity under PK Groups */
export const PK_GROUPS_TAGLINE = "A PK Groups company";

export const CONVERRA_VERTICALS_EYEBROW = PK_GROUPS_NAME;
export const CONVERRA_VERTICALS_HEADLINE = "Three Converra businesses. One standard of care.";
export const CONVERRA_VERTICALS_SUBHEAD =
  "Converra is our brand. Each team has its own people, process, and page.";

/** Site-wide contact (E.164 without + for wa.me links) */
export const CONVERRA_EMAIL = "hello@converra.in";
export const CONVERRA_PHONE_E164 = "919080148226";
export const CONVERRA_PHONE_DISPLAY = "+91 90801 48226";
export const CONVERRA_WHATSAPP_URL =
  (import.meta.env.VITE_WHATSAPP_URL as string | undefined)?.trim() ||
  `https://wa.me/${CONVERRA_PHONE_E164}`;
