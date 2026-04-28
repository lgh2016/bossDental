import { ShieldCheck, HeartHandshake, Target } from "lucide-react";

const points = [
  {
    icon: Target,
    title: "Ubicación céntrica",
    text: "San Cristóbal Centro, a pocos pasos del parque principal.",
  },
  {
    icon: HeartHandshake,
    title: "Atención personalizada",
    text: "El Dr. Azael y Alfredo te explican cada paso con claridad.",
  },
  {
    icon: ShieldCheck,
    title: "Precisión garantizada",
    text: "Trabajos fabricados con medidas exactas en nuestro laboratorio.",
  },
];

export default function Authority() {
  return (
    <section
      id="experiencia"
      data-testid="authority-section"
      className="relative py-24 lg:py-32 bg-[#F9F8F6]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="relative">
            <img
              src="/images/dr-azael.jpg"
              alt="Dr. Azael - Odontólogo profesional"
              className="w-full h-[560px] object-cover rounded-[24px]"
            />
            <div className="absolute top-6 -right-4 lg:-right-8 bg-[#3F6151] text-white rounded-2xl px-5 py-4 shadow-lg">
              <p className="text-xs uppercase tracking-[0.2em] opacity-70">Dr. Azael</p>
              <p className="text-base font-['Outfit']">Cirujano Dentista</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 order-1 lg:order-2">
          <span className="overline">La atención que mereces</span>
          <h2 className="mt-4 font-['Outfit'] font-light text-4xl sm:text-5xl leading-[1.1] tracking-tight text-[#1A1A1A]">
            Sabemos que ir al dentista{" "}
            <span className="text-[#3F6151]">puede dar nervios.</span> Nosotros lo hacemos fácil.
          </h2>
          <p className="mt-6 text-lg text-[#5C5C5C] leading-relaxed max-w-2xl">
            Por eso, el Dr. Azael y nuestro equipo de recepción, liderado por
            Alfredo, se enfocan en que tu experiencia sea cómoda, clara y
            profesional desde el primer minuto.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {points.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="bg-white border border-[#E5E1D8] rounded-2xl p-6"
              >
                <div className="w-11 h-11 rounded-xl bg-[#EAE6DF] grid place-items-center mb-4">
                  <Icon className="w-5 h-5 text-[#3F6151]" />
                </div>
                <h3 className="font-['Outfit'] text-lg font-medium text-[#1A1A1A]">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-[#5C5C5C] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
