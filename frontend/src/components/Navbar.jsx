import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { BUSINESS, waLink } from "../lib/constants";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#galeria", label: "Galería" },
  { href: "#equipo", label: "Equipo" },
  { href: "#resenas", label: "Reseñas" },
  { href: "#faq", label: "Preguntas" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled ? "glass-nav" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a
          href="#top"
          data-testid="brand-logo"
          className="flex items-center gap-2 group"
        >
          <img
              src="/imagenes/final-1.1-sinfondo.png"
              alt="Boss Dental"
              className="w-12 h-12 object-contain"
          />
          <span className="font-['Outfit'] text-lg tracking-tight">
            Dental <span className="font-medium">Boss</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              className="text-sm text-[#1A1A1A]/80 hover:text-[#3F6151] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            data-testid="nav-phone-link"
            className="flex items-center gap-2 text-sm text-[#1A1A1A]/80 hover:text-[#3F6151]"
          >
            <Phone className="w-4 h-4" />
            {BUSINESS.phone}
          </a>
          <a href={waLink()} target="_blank" rel="noreferrer" data-testid="nav-cta-whatsapp">
            <Button className="rounded-full bg-[#3F6151] hover:bg-[#2C4539] text-white px-5">
              Agendar cita
            </Button>
          </a>
        </div>

        <button
          aria-label="Menu"
          data-testid="nav-mobile-toggle"
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[#E5E1D8] bg-[#F9F8F6]" data-testid="nav-mobile-panel">
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base"
              >
                {l.label}
              </a>
            ))}
            <a href={waLink()} target="_blank" rel="noreferrer">
              <Button className="w-full rounded-full bg-[#3F6151] hover:bg-[#2C4539] text-white">
                Agendar por WhatsApp
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
