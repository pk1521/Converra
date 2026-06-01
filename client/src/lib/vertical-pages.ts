import { GP_NAV_LABEL } from "@/lib/growth-partners";
import { REALTY_NAV_LABEL } from "@/lib/realty-partners";
import { RENOVATION_NAV_LABEL } from "@/lib/renovation";

export const CONVERRA_VERTICAL_PAGES = [
  { label: GP_NAV_LABEL, href: "/" },
  { label: REALTY_NAV_LABEL, href: "/realty-partners" },
  { label: RENOVATION_NAV_LABEL, href: "/renovation" },
] as const;

export type ConverraVerticalHref = (typeof CONVERRA_VERTICAL_PAGES)[number]["href"];
