import { ArrowUpRight } from "lucide-react";
import { SERVICES, waLink } from "../lib/constants";

export default function Services() {
  return (
    <section
      id="servicios"
      data-testid="services-section"
      className="relative py-24 lg:py-32 bg-[#EAE6DF]/40"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="overline">Qué hacemos</span>
            <h2 className="mt-4 font-['Outfit'] font-light text-4xl sm:text-5xl tracking-tight leading-[1.1]">
              Servicios pensados para{" "}
              <span className="text-[#3F6151]">tu comodidad</span>, no para el catálogo.
            </h2>
          </div>
          <p className="text-[#5C5C5C] max-w-sm leading-relaxed">
            Hablamos en beneficios, no en tecnicismos. Escoge el que te identifique y con gusto te orientamos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {SERVICES.map((s, idx) => (
            <article
              key={s.key}
              data-testid={`service-card-${s.key}`}
              className={`card-hover group relative overflow-hidden rounded-[24px] bg-white border border-[#E5E1D8] ${
                idx === 0
                  ? "md:col-span-7"
                  : idx === 1
                  ? "md:col-span-5"
                  : "md:col-span-12 md:grid md:grid-cols-2"
              }`}
            >
              <div className={`overflow-hidden ${idx === 2 ? "md:order-2 h-72 md:h-auto" : "h-64"}`}>
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover img-zoom"
                />
              </div>
              <div className="p-8">
                <span className="overline">0{idx + 1}</span>
                <h3 className="mt-3 font-['Outfit'] text-2xl lg:text-3xl font-normal text-[#1A1A1A]">
                  {s.title}
                </h3>
                <p className="mt-3 text-[#3F6151] font-medium">{s.benefit}</p>
                <p className="mt-3 text-[#5C5C5C] leading-relaxed">{s.description}</p>
                <a
                  href={waLink(`Hola, me interesa el servicio de ${s.title}.`)}
                  target="_blank"
                  rel="noreferrer"
                  data-testid={`service-cta-${s.key}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#1A1A1A] hover:text-[#3F6151] transition-colors"
                >
                  Pregunta por este servicio
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
