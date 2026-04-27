import { BadgeCheck, Wallet } from "lucide-react";

export default function Guarantee() {
  return (
    <section
      id="garantia"
      data-testid="guarantee-section"
      className="relative py-24 lg:py-32 bg-[#1A1A1A] text-white overflow-hidden"
    >
      <div className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full bg-[#3F6151]/35 blur-3xl" />
      <div className="absolute -bottom-40 -right-20 w-[420px] h-[420px] rounded-full bg-[#E3BA9B]/15 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <span className="overline text-[#E3BA9B]">La promesa Boss</span>
          <h2 className="mt-4 font-['Outfit'] font-light text-4xl sm:text-5xl tracking-tight leading-[1.1]">
            Dos razones para confiar, <span className="text-[#E3BA9B]">sin letra chica.</span>
          </h2>
          <p className="mt-6 text-white/70 leading-relaxed max-w-md">
            Compromisos reales que hacemos con cada paciente que cruza la
            puerta de nuestro laboratorio.
          </p>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white/5 border border-white/10 rounded-[22px] p-8 backdrop-blur-sm">
            <div className="w-12 h-12 rounded-xl bg-[#3F6151] grid place-items-center mb-5">
              <BadgeCheck className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-['Outfit'] text-2xl mb-3">Garantía total</h3>
            <p className="text-white/70 leading-relaxed">
              Todo trabajo realizado en nuestro laboratorio cuenta con respaldo
              y seguimiento. Si no estás cómodo, lo ajustamos.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-[22px] p-8 backdrop-blur-sm">
            <div className="w-12 h-12 rounded-xl bg-[#E3BA9B] grid place-items-center mb-5">
              <Wallet className="w-6 h-6 text-[#1A1A1A]" />
            </div>
            <h3 className="font-['Outfit'] text-2xl mb-3">Accesibilidad real</h3>
            <p className="text-white/70 leading-relaxed">
              Los costos más competitivos de San Cristóbal Centro, comparados
              con clínicas cercanas, sin sacrificar calidad de materiales.
            </p>
          </div>

          <div className="md:col-span-2 bg-gradient-to-r from-[#3F6151] to-[#2C4539] rounded-[22px] p-8 flex flex-col md:flex-row md:items-center gap-6 md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-white/60">Valoración inicial</p>
              <p className="font-['Outfit'] text-3xl mt-2">Rápida y sin compromiso.</p>
            </div>
            <a
              href="#contacto"
              data-testid="guarantee-cta"
              className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-white text-[#1A1A1A] font-medium hover:bg-[#E3BA9B] transition-colors"
            >
              Agendar ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
