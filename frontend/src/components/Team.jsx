import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Linkedin, Mail } from "lucide-react";

const TEAM = [
  {
    name: "Dr. Azael",
    role: "Cirujano Dentista · Director",
    bio: "Más de 10 años de experiencia clínica. Lidera cada caso con un enfoque humano y resultados precisos.",
    image: "/images/dr-azael.jpg",
    accent: "#3F6151",
  },
  {
    name: "Dr. Chac Hernández",
    role: "Odontólogo · Estética Dental",
    bio: "Especializado en diseño de sonrisa. Cuida cada detalle para resultados naturales.",
    image: "/images/chac.jpg",
    accent: "#E3BA9B",
  },
  {
    name: "Dr. Mauricio Lozano",
    role: "Periodoncia e Implantes",
    bio: "Experto en cirugía periodontal e implantes osteointegrados. Tratamientos seguros y duraderos.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
    accent: "#3F6151",
  },
  {
    name: "Dra. Valeria Núñez",
    role: "Ortodoncia",
    bio: "Especialista en ortodoncia tradicional y alineadores invisibles para todas las edades.",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
    accent: "#E3BA9B",
  },
  {
    name: "Téc. Carlos Méndez",
    role: "Técnico de Laboratorio",
    bio: "Manos expertas en la fabricación de prótesis. Garantiza la precisión milimétrica de cada pieza.",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
    accent: "#3F6151",
  },
  {
    name: "Téc. Ana Pérez",
    role: "Asistente Dental",
    bio: "Acompaña al doctor en cada procedimiento. Tu mejor aliada para sentirte tranquilo.",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
    accent: "#E3BA9B",
  },
  {
    name: "Téc. Alfredo Flores",
    role: "Laboratorista y Técnico Especializado",
    bio: "Responsable de los procesos técnicos y digitales del laboratorio, garantizando calidad y exactitud en cada procedimiento.",
    image: "/images/alfredo.jpg",
    accent: "#3F6151",
  },
  {
    name: "Lic. Karla Rivera",
    role: "Coordinadora de Pacientes",
    bio: "Coordina seguimientos, tratamientos en curso y planes de pago a tu medida.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
    accent: "#E3BA9B",
  },
];

export default function Team() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback((api) => {
    if (!api) return;
    setSelectedIndex(api.selectedScrollSnap());
    setCanPrev(api.canScrollPrev());
    setCanNext(api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect(emblaApi);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();
  const scrollTo = (idx) => emblaApi?.scrollTo(idx);

  return (
    <section id="equipo" data-testid="team-section" className="py-24 lg:py-32 bg-[#EAE6DF]/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="overline">Nuestro equipo</span>
            <h2 className="mt-4 font-['Outfit'] font-light text-4xl sm:text-5xl tracking-tight leading-[1.1]">
              Las personas detrás de <span className="text-[#3F6151]">cada sonrisa.</span>
            </h2>
            <p className="mt-5 text-[#5C5C5C] leading-relaxed">
              Desde la recepción hasta el sillón dental, cada miembro de nuestro
              equipo está comprometido con tu comodidad y tu salud bucal.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={scrollPrev}
              disabled={!canPrev}
              data-testid="team-prev"
              className="w-11 h-11 rounded-full border border-[#E5E1D8] bg-white grid place-items-center disabled:opacity-40 disabled:cursor-not-allowed hover:border-[#3F6151] hover:text-[#3F6151] transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={scrollNext}
              disabled={!canNext}
              data-testid="team-next"
              className="w-11 h-11 rounded-full border border-[#E5E1D8] bg-white grid place-items-center disabled:opacity-40 disabled:cursor-not-allowed hover:border-[#3F6151] hover:text-[#3F6151] transition-colors"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden -mx-2" ref={emblaRef} data-testid="team-carousel">
          <div className="flex">
            {TEAM.map((member, idx) => (
              <div
                key={member.name}
                className="flex-[0_0_85%] sm:flex-[0_0_50%] lg:flex-[0_0_25%] min-w-0 px-2"
              >
                <article
                  data-testid={`team-card-${idx}`}
                  className="group relative bg-white border border-[#E5E1D8] rounded-[22px] overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(26,26,26,0.25)] h-full"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#EAE6DF]">
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                    />
                    <div
                      className="absolute inset-0 mix-blend-multiply opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                      style={{ backgroundColor: member.accent }}
                    />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      <button aria-label={`LinkedIn de ${member.name}`} className="w-9 h-9 rounded-full bg-white/95 grid place-items-center hover:bg-[#3F6151] hover:text-white transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </button>
                      <button aria-label={`Email de ${member.name}`} className="w-9 h-9 rounded-full bg-white/95 grid place-items-center hover:bg-[#3F6151] hover:text-white transition-colors">
                        <Mail className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-['Outfit'] text-xl text-[#1A1A1A]">{member.name}</h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em]" style={{ color: member.accent }}>
                      {member.role}
                    </p>
                    <p className="mt-4 text-sm text-[#5C5C5C] leading-relaxed">{member.bio}</p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2" data-testid="team-dots">
          {scrollSnaps.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollTo(idx)}
              data-testid={`team-dot-${idx}`}
              aria-label={`Ir al slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                selectedIndex === idx
                  ? "w-10 bg-[#3F6151]"
                  : "w-5 bg-[#D0C9BD] hover:bg-[#3F6151]/50"
              }`}
            />
          ))}
        </div>

        <p className="mt-8 text-xs text-[#5C5C5C]/70 text-center">
          Fotografías ilustrativas · pronto las reemplazaremos por imágenes reales del equipo.
        </p>
      </div>
    </section>
  );
}
