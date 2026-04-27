import { MessageCircle } from "lucide-react";
import { waLink } from "../lib/constants";

export default function FloatingWhatsApp() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noreferrer"
      data-testid="floating-whatsapp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="flex items-center gap-3 pl-4 pr-5 py-3 rounded-full bg-[#25D366] text-white shadow-xl wa-pulse hover:bg-[#1fb659] transition-colors">
        <MessageCircle className="w-5 h-5" />
        <span className="hidden sm:inline font-medium text-sm">Agenda tu cita</span>
      </div>
    </a>
  );
}
