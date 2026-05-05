import { useState, useMemo, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

const ITEMS = [
  // Laboratorio
  { id: 1, src: "https://images.pexels.com/photos/3845625/pexels-photo-3845625.jpeg?auto=compress&cs=tinysrgb&w=1400", title: "Nuestro consultorio", description: "Espacio limpio, moderno y diseñado para que te sientas cómodo desde que entras.", category: "Laboratorio" },
  { id: 2, src: "/images/atención-paciente.jpg", title: "Atención al paciente", description: "Tu comodidad y confianza son nuestra prioridad en cada consulta.", category: "Laboratorio" },
  { id: 3, src: "/images/sala-revision.jpg", title: "Sala de revisión", description: "Cada espacio está pensado para que tu visita sea rápida y placentera.", category: "Laboratorio" },
  { id: 4, src: "https://images.pexels.com/photos/3779706/pexels-photo-3779706.jpeg?auto=compress&cs=tinysrgb&w=1400", title: "Detalles del laboratorio", description: "Cada herramienta tiene un propósito: precisión absoluta en cada milímetro.", category: "Laboratorio" },
  { id: 5, src: "https://images.pexels.com/photos/4269352/pexels-photo-4269352.jpeg?auto=compress&cs=tinysrgb&w=1400", title: "Recepción cálida", description: "Un primer contacto amable y resolutivo desde el momento en que llegas.", category: "Laboratorio" },
  { id: 6, src: "https://images.pexels.com/photos/4269694/pexels-photo-4269694.jpeg?auto=compress&cs=tinysrgb&w=1400", title: "Equipo de imagenología", description: "Diagnósticos rápidos y precisos con tecnología actual.", category: "Laboratorio" },
  { id: 7, src: "https://images.pexels.com/photos/3845557/pexels-photo-3845557.jpeg?auto=compress&cs=tinysrgb&w=1400", title: "Ambiente higiénico", description: "Protocolos estrictos de esterilización en cada visita.", category: "Laboratorio" },
  { id: 8, src: "https://images.pexels.com/photos/3845532/pexels-photo-3845532.jpeg?auto=compress&cs=tinysrgb&w=1400", title: "Iluminación clínica", description: "Lámparas profesionales que permiten precisión en cada procedimiento.", category: "Laboratorio" },
  // Herramientas
  { id: 9, src: "https://images.pexels.com/photos/6627569/pexels-photo-6627569.jpeg?auto=compress&cs=tinysrgb&w=1400", title: "Tecnología dental moderna", description: "Instrumentos digitales que nos permiten diagnósticos precisos y rápidos.", category: "Herramientas" },
  { id: 10, src: "https://images.pexels.com/photos/4270089/pexels-photo-4270089.jpeg?auto=compress&cs=tinysrgb&w=1400", title: "Instrumentos quirúrgicos", description: "Cada herramienta es esterilizada con protocolos hospitalarios.", category: "Herramientas" },
  { id: 11, src: "https://images.pexels.com/photos/3779708/pexels-photo-3779708.jpeg?auto=compress&cs=tinysrgb&w=1400", title: "Microscopio dental", description: "Vemos lo que otros no ven para garantizar tratamientos exactos.", category: "Herramientas" },
  { id: 12, src: "https://images.pexels.com/photos/4269691/pexels-photo-4269691.jpeg?auto=compress&cs=tinysrgb&w=1400", title: "Equipo de pulido", description: "Acabados perfectos en cada pieza dental que sale del laboratorio.", category: "Herramientas" },
  { id: 13, src: "https://images.pexels.com/photos/4269361/pexels-photo-4269361.jpeg?auto=compress&cs=tinysrgb&w=1400", title: "Estación de trabajo", description: "Organización y precisión: la base de un buen resultado.", category: "Herramientas" },
  { id: 14, src: "https://images.pexels.com/photos/4269692/pexels-photo-4269692.jpeg?auto=compress&cs=tinysrgb&w=1400", title: "Materiales premium", description: "Trabajamos solo con materiales certificados de alta calidad.", category: "Herramientas" },
  { id: 15, src: "https://images.pexels.com/photos/6627571/pexels-photo-6627571.jpeg?auto=compress&cs=tinysrgb&w=1400", title: "Escáner intraoral", description: "Toma de medidas digitales sin pastas incómodas.", category: "Herramientas" },
  // Trabajos
  { id: 16, src: "https://images.pexels.com/photos/7788493/pexels-photo-7788493.jpeg?auto=compress&cs=tinysrgb&w=1400", title: "Fabricación de prótesis", description: "Cada pieza es trabajada manualmente con cuidado artesanal.", category: "Trabajos" },
  { id: 17, src: "https://images.pexels.com/photos/6627574/pexels-photo-6627574.jpeg?auto=compress&cs=tinysrgb&w=1400", title: "Diseño de sonrisa", description: "Resultado natural en un caso de estética dental personalizado.", category: "Trabajos" },
  { id: 18, src: "https://images.pexels.com/photos/6502595/pexels-photo-6502595.jpeg?auto=compress&cs=tinysrgb&w=1400", title: "Caso de rehabilitación", description: "Devolvemos la función masticatoria con precisión milimétrica.", category: "Trabajos" },
  { id: 19, src: "https://images.pexels.com/photos/3845739/pexels-photo-3845739.jpeg?auto=compress&cs=tinysrgb&w=1400", title: "Carillas estéticas", description: "Sonrisas naturales que respetan tu rostro y personalidad.", category: "Trabajos" },
  { id: 20, src: "https://images.pexels.com/photos/3779662/pexels-photo-3779662.jpeg?auto=compress&cs=tinysrgb&w=1400", title: "Coronas porcelana", description: "Trabajos cerámicos indistinguibles del diente natural.", category: "Trabajos" },
  { id: 21, src: "https://images.pexels.com/photos/4270370/pexels-photo-4270370.jpeg?auto=compress&cs=tinysrgb&w=1400", title: "Implantes dentales", description: "Soluciones de largo plazo que se sienten como dientes propios.", category: "Trabajos" },
  { id: 22, src: "https://images.pexels.com/photos/3845127/pexels-photo-3845127.jpeg?auto=compress&cs=tinysrgb&w=1400", title: "Blanqueamiento", description: "Tonos varios shades más blancos sin dañar el esmalte.", category: "Trabajos" },
  { id: 23, src: "https://images.pexels.com/photos/4270089/pexels-photo-4270089.jpeg?auto=compress&cs=tinysrgb&w=1400", title: "Ortodoncia estética", description: "Alineadores discretos para una sonrisa simétrica.", category: "Trabajos" },
];

const CATEGORIES = ["Todos", "Laboratorio", "Herramientas", "Trabajos"];
const PAGE_SIZE = 6;

export default function Gallery() {
  const [active, setActive] = useState(null);
  const [filter, setFilter] = useState("Todos");
  const [page, setPage] = useState(1);

  const filtered = useMemo(
    () => (filter === "Todos" ? ITEMS : ITEMS.filter((i) => i.category === filter)),
    [filter]
  );
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const current = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  useEffect(() => {
    setPage(1);
  }, [filter]);

  const goTo = (n) => {
    setPage(n);
    document.getElementById("galeria-grid")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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

        <div id="galeria-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {current.map((item) => (
            <button
              key={item.id}
              data-testid={`gallery-item-${item.id}`}
              onClick={() => setActive(item)}
              className="group relative overflow-hidden rounded-[20px] bg-white border border-[#E5E1D8] text-left aspect-[4/3] fade-up"
              style={{ animationDelay: `${(item.id % PAGE_SIZE) * 60}ms` }}
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
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

        {totalPages > 1 && (
          <div data-testid="gallery-pagination" className="mt-12 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-[#5C5C5C]">
              Mostrando <strong className="text-[#1A1A1A]">{(page - 1) * PAGE_SIZE + 1}</strong>–
              <strong className="text-[#1A1A1A]">{Math.min(page * PAGE_SIZE, filtered.length)}</strong> de{" "}
              <strong className="text-[#1A1A1A]">{filtered.length}</strong>
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => goTo(Math.max(1, page - 1))}
                disabled={page === 1}
                data-testid="gallery-prev"
                className="w-10 h-10 rounded-full border border-[#E5E1D8] bg-white grid place-items-center disabled:opacity-40 disabled:cursor-not-allowed hover:border-[#3F6151] hover:text-[#3F6151] transition-colors"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  onClick={() => goTo(n)}
                  data-testid={`gallery-page-${n}`}
                  className={`min-w-10 h-10 px-3 rounded-full text-sm font-medium transition-all ${
                    page === n
                      ? "bg-[#3F6151] text-white"
                      : "bg-white text-[#1A1A1A] border border-[#E5E1D8] hover:border-[#3F6151]"
                  }`}
                >
                  {n}
                </button>
              ))}
              <button
                onClick={() => goTo(Math.min(totalPages, page + 1))}
                disabled={page === totalPages}
                data-testid="gallery-next"
                className="w-10 h-10 rounded-full border border-[#E5E1D8] bg-white grid place-items-center disabled:opacity-40 disabled:cursor-not-allowed hover:border-[#3F6151] hover:text-[#3F6151] transition-colors"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
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
                  <img src={active.src} alt={active.title} className="w-full h-[300px] md:h-[560px] object-cover" />
                </div>
                <div className="md:col-span-2 p-8 md:p-10 flex flex-col justify-center text-white">
                  <span className="text-[10px] uppercase tracking-[0.24em] text-[#E3BA9B]">{active.category}</span>
                  <h3 className="mt-3 font-['Outfit'] text-3xl font-light">{active.title}</h3>
                  <p className="mt-5 text-white/75 leading-relaxed">{active.description}</p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
