import { ArrowRight, MapPin, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { BUSINESS, waLink } from "../lib/constants";

export default function Hero() {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden"
    >
      <div className="absolute inset-0 grain" />
      <div className="absolute -top-32 -right-24 w-[560px] h-[560px] rounded-full bg-[#E3BA9B]/25 blur-3xl" />
      <div className="absolute -bottom-40 -left-32 w-[520px] h-[520px] rounded-full bg-[#3F6151]/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 fade-up">
          <span className="overline">Laboratorio Dental · Ecatepec</span>
          <h1 className="mt-5 font-['Outfit'] font-light text-[42px] leading-[1.05] sm:text-6xl lg:text-[72px] tracking-tight text-[#1A1A1A]">
            Recupera tu sonrisa con{" "}
            <em className="not-italic text-[#3F6151] font-normal">
              expertos que cuidan
            </em>{" "}
            tu bienestar y tu bolsillo.
          </h1>
          <p className="mt-7 max-w-xl text-lg text-[#5C5C5C] leading-relaxed">
            En {BUSINESS.name} combinamos años de experiencia clínica con un
            trato humano y costos accesibles en el corazón de Ecatepec.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a href={waLink()} target="_blank" rel="noreferrer" data-testid="hero-whatsapp-cta">
              <Button className="h-14 px-7 rounded-full bg-[#3F6151] hover:bg-[#2C4539] text-white text-base">
                Agendar cita por WhatsApp
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
            <a href="#servicios" data-testid="hero-services-link">
              <Button
                variant="ghost"
                className="h-14 px-7 rounded-full text-[#1A1A1A] hover:bg-[#EAE6DF]"
              >
                Conoce los servicios
              </Button>
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-[#5C5C5C]">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#3F6151]" />
              San Cristóbal Centro, Ecatepec
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#3F6151]" />
              {BUSINESS.hours}
            </span>
          </div>
        </div>

        <div className="lg:col-span-5 fade-up delay-200">
          <div className="relative">
            <div className="absolute -inset-4 bg-[#EAE6DF] rounded-[28px] -rotate-2" />
            <img
              src="/images/paciente.jpg"
              alt="Paciente sonriendo en consulta dental"
              className="relative w-full h-[520px] object-cover rounded-[28px]"
            />
            <div className="absolute -bottom-6 -left-6 bg-white border border-[#E5E1D8] rounded-2xl p-5 shadow-sm max-w-[240px]">
              <div className="flex -space-x-2 mb-3">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white bg-[#EAE6DF] grid place-items-center text-[11px] font-medium text-[#3F6151]"
                  >
                    {["MA", "JR", "LG"][i]}
                  </span>
                ))}
              </div>
              <p className="text-xs text-[#5C5C5C] leading-relaxed">
                <strong className="text-[#1A1A1A]">+500 pacientes</strong>{" "}
                confían en el trato del Dr. Azael.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
