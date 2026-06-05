import { scrollToSection } from "@/lib/scroll";

const DEFAULT_CALENDLY_URL = "https://calendly.com/converra/30min";

const CALENDLY_URL =
  (import.meta.env.VITE_CALENDLY_URL as string | undefined)?.trim() || DEFAULT_CALENDLY_URL;
const RENOVATION_CALENDLY_URL =
  (import.meta.env.VITE_CALENDLY_RENOVATION_URL as string | undefined)?.trim() || CALENDLY_URL;
const REALTY_CALENDLY_URL =
  (import.meta.env.VITE_CALENDLY_REALTY_URL as string | undefined)?.trim() || CALENDLY_URL;

export const CALENDLY_EMBED_URL = CALENDLY_URL;
export const RENOVATION_CALENDLY_EMBED_URL = RENOVATION_CALENDLY_URL;
export const REALTY_CALENDLY_EMBED_URL = REALTY_CALENDLY_URL;

export function openBookStrategyCall() {
  scrollToSection("book-a-call");
}

export function openBookRealtyConsultation() {
  scrollToSection("book-a-call");
}

export function openBookRenovationVisit() {
  scrollToSection("book-a-call");
}

export function openBookRenovationEstimate() {
  scrollToSection("book-a-call");
}
