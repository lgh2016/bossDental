import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";
import { BUSINESS, waLink } from "../lib/constants";

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="bg-[#1A1A1A] text-white/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2">
              <img
                  src="/images/final-1.1-sinfondo.png"
                  alt="Boss Dental"
                  className="h-14 w-auto object-contain"
              />
              <span className="font-['Outfit'] text-lg tracking-tight text-white">
                Laboratorio Dental Boss
              </span>
            </div>
            <p className="mt-5 max-w-sm leading-relaxed text-white/65">
              {BUSINESS.tagline} Atención cercana, materiales de calidad y
              precios accesibles en el corazón de Ecatepec.
            </p>

            <div className="mt-7 space-y-3 text-sm">
              <a href={BUSINESS.mapsLink} target="_blank" rel="noreferrer" className="flex items-start gap-3 hover:text-[#E3BA9B]">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                {BUSINESS.address}
              </a>
              <a href={`tel:${BUSINESS.phoneRaw}`} className="flex items-center gap-3 hover:text-[#E3BA9B]">
                <Phone className="w-4 h-4" />
                {BUSINESS.phone}
              </a>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4" />
                {BUSINESS.hours}
              </div>
            </div>

            <div className="mt-7 flex items-center gap-3">
              <a href={waLink()} target="_blank" rel="noreferrer" data-testid="footer-whatsapp" className="h-10 px-5 rounded-full bg-[#25D366] text-white inline-flex items-center gap-2 hover:bg-[#1fb659]">
                WhatsApp
              </a>
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full border border-white/20 grid place-items-center hover:border-[#E3BA9B] hover:text-[#E3BA9B]">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full border border-white/20 grid place-items-center hover:border-[#E3BA9B] hover:text-[#E3BA9B]">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl overflow-hidden border border-white/10 h-[320px]">
              <iframe
                title="Ubicación Laboratorio Dental Boss"
                src={BUSINESS.mapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Laboratorio Dental Boss. Todos los derechos reservados.</p>
          <p>Hecho con cuidado en Ecatepec, Estado de México.</p>
        </div>
      </div>
    </footer>
  );
}
