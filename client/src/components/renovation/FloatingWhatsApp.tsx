import { MessageCircle } from "lucide-react";
import { RENOVATION_WHATSAPP_URL } from "@/lib/renovation";

export function FloatingWhatsApp() {
  return (
    <a
      href={RENOVATION_WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 transition-transform"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
