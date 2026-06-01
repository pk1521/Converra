import { MessageCircle } from "lucide-react";
import { REALTY_WHATSAPP_URL } from "@/lib/realty-partners";

export function FloatingWhatsApp() {
  return (
    <a
      href={REALTY_WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 hover:scale-105 transition-transform"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
