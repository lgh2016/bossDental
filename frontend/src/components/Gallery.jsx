import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";
import { X, ZoomIn } from "lucide-react";

const ITEMS = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/3845625/pexels-photo-3845625.jpeg?auto=compress&cs=tinysrgb&w=1400",
    title: "Nuestro consultorio",
    description: "Espacio limpio, moderno y diseñado para que te sientas cómodo desde que entras.",
    category: "Laboratorio",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/4269694/pexels-photo-4269694.jpeg?auto=compress&cs=tinysrgb&w=1400",
    title: "Herramientas de precisión",
    description: "Equipo especializado para garantizar medidas exactas en cada trabajo.",
    category: "Herramientas",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/6627569/pexels-photo-6627569.jpeg?auto=compress&cs=tinysrgb&w=1400",
    title: "Tecnología dental moderna",
    description: "Instrumentos digitales que nos permiten diagnósticos precisos y rápidos.",
    category: "Herramientas",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/7788493/pexels-photo-7788493.jpeg?auto=compress&cs=tinysrgb&w=1400",
    title: "Fabricación de prótesis",
    description: "Cada pieza es trabajada manualmente con cuidado artesanal en nuestro propio laboratorio.",
    category: "Trabajos",
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/3845981/pexels-photo-3845981.jpeg?auto=compress&cs=tinysrgb&w=1400",
    title: "Caso de rehabilitación",
    description: "Resultado natural en una rehabilitación completa con materiales de alta gama.",
    category: "Trabajos",
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/4270089/pexels-photo-4270089.jpeg?auto=compress&cs=tinysrgb&w=1400",
    title: "Diseño de sonrisa",
    description: "Antes y después de un caso de estética dental personalizado.",
    category: "Trabajos",
  },
  {
    id: 7,
    src: "https://images.pexels.com/photos/3779706/pexels-photo-3779706.jpeg?auto=compress&cs=tinysrgb&w=1400",
    title: "Detalles del laboratorio",
    description: "Cada herramienta tiene un propósito: precisión absoluta en cada milímetro.",
    category: "Laboratorio",
  },
  {
    id: 8,
    src: "https://images.pexels.com/photos/3779705/pexels-photo-3779705.jpeg?auto=compress&cs=tinysrgb&w=1400",
    title: "Atención al paciente",
    description: "Tu comodidad y confianza son nuestra prioridad en cada consulta.",
    category: "Laboratorio",
  },
];

const CATEGORIES = ["Todos", "Laboratorio", "Herramientas", "Trabajos"];

export default function Gallery() {
  const [active, setActive] = useState(null);
  const [filter, setFilter] = useState("Todos");

  const filtered =
    filter === "Todos" ? ITEMS : ITEMS.filter((i) => i.category === filter);

  return (
    <section id="galeria" data-testid="gallery-section" className="py-24 lg:py-32 bg-[#F9F8F6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="overline">Galería</span>
            <h2 className="mt-4 font-['Outfit'] font-light text-4xl sm:text-5xl tracking-tight leading-[1.1]">
              Mira nuestro <span className="text-[#3F6151]">trabajo de cerca.</span>
            </h2>
            <p className="mt-5 text-[#5C5C5C] leading-relaxed">
              Conoce nuestro laboratorio, las herramientas que usamos y algunos
              de los casos que han devuelto la confianza a nuestros pacientes.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                data-testid={`gallery-filter-${cat.toLowerCase()}`}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm border transition-all ${
                  filter === cat
                    ? "bg-[#3F6151] text-white border-[#3F6151]"
                    : "bg-white text-[#1A1A1A] border-[#E5E1D8] hover:border-[#3F6151]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((item, idx) => (
            <button
              key={item.id}
              data-testid={`gallery-item-${item.id}`}
              onClick={() => setActive(item)}
              className={`group relative overflow-hidden rounded-[20px] bg-white border border-[#E5E1D8] text-left ${
                idx % 5 === 0 ? "lg:row-span-2 lg:aspect-[4/5]" : "aspect-[4/3]"
              }`}
            >
              <img
                src={item.src}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-70 group-hover:opacity-95 transition-opacity duration-500" />

              <div className="absolute top-4 left-4">
                <span className="text-[10px] uppercase tracking-[0.2em] bg-white/90 text-[#3F6151] px-3 py-1 rounded-full font-medium">
                  {item.category}
                </span>
              </div>

              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/0 group-hover:bg-white/95 grid place-items-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-2 group-hover:translate-y-0">
                <ZoomIn className="w-4 h-4 text-[#3F6151]" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-['Outfit'] text-xl text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-white/80 leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {item.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent
          data-testid="gallery-lightbox"
          className="max-w-5xl p-0 overflow-hidden bg-[#1A1A1A] border-none [&>button]:hidden"
        >
          <DialogTitle className="sr-only">{active?.title || "Galería"}</DialogTitle>
          {active && (
            <div className="relative">
              <button
                onClick={() => setActive(null)}
                aria-label="Cerrar"
                data-testid="gallery-close"
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 grid place-items-center text-white backdrop-blur-md transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-3 bg-black">
                  <img
                    src={active.src}
                    alt={active.title}
                    className="w-full h-[300px] md:h-[560px] object-cover"
                  />
                </div>
                <div className="md:col-span-2 p-8 md:p-10 flex flex-col justify-center text-white">
                  <span className="text-[10px] uppercase tracking-[0.24em] text-[#E3BA9B]">
                    {active.category}
                  </span>
                  <h3 className="mt-3 font-['Outfit'] text-3xl font-light">
                    {active.title}
                  </h3>
                  <p className="mt-5 text-white/75 leading-relaxed">
                    {active.description}
                  </p>
                  <div className="mt-8 pt-6 border-t border-white/10 text-xs text-white/50">
                    Imagen ilustrativa · Pronto subiremos fotografía real de nuestro laboratorio.
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
