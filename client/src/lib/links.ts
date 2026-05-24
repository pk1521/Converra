import { scrollToSection } from "@/lib/scroll";

const DEFAULT_CALENDLY_URL = "https://calendly.com/converra/30min";

const CALENDLY_URL =
  (import.meta.env.VITE_CALENDLY_URL as string | undefined)?.trim() || DEFAULT_CALENDLY_URL;
const RENOVATION_CALENDLY_URL =
  (import.meta.env.VITE_CALENDLY_RENOVATION_URL as string | undefined)?.trim() || CALENDLY_URL;

export const CALENDLY_EMBED_URL = CALENDLY_URL;
export const REAL_ESTATE_CALENDLY_EMBED_URL = RENOVATION_CALENDLY_URL;

/** Growth Partners — scrolls to inline Calendly in footer */
export function openBookStrategyCall() {
  scrollToSection("calendly-embed");
}

/** Real Estate — scrolls to inline Calendly in footer */
export function openBookConsultation() {
  scrollToSection("calendly-embed");
}
