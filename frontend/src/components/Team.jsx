import { Linkedin, Mail } from "lucide-react";

const TEAM = [
  {
    name: "Dr. Azael",
    role: "Cirujano Dentista · Director",
    bio: "Más de 10 años de experiencia clínica. Lidera cada caso con un enfoque humano y resultados precisos.",
    image:
      "https://images.unsplash.com/photo-1729162128021-f37dca3ff30d?crop=entropy&cs=srgb&fm=jpg&q=85&w=800",
    accent: "#3F6151",
  },
  {
    name: "Dra. Sofía Ramírez",
    role: "Odontóloga Especialista en Estética",
    bio: "Especializada en diseño de sonrisa y carillas. Cuida cada detalle para resultados naturales.",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?crop=entropy&cs=srgb&fm=jpg&q=85&w=800",
    accent: "#E3BA9B",
  },
  {
    name: "Téc. Carlos Méndez",
    role: "Técnico de Laboratorio",
    bio: "Manos expertas en la fabricación de prótesis. Garantiza la precisión milimétrica de cada pieza.",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?crop=entropy&cs=srgb&fm=jpg&q=85&w=800",
    accent: "#3F6151",
  },
  {
    name: "Alfredo",
    role: "Recepción y Atención al Paciente",
    bio: "Tu primer contacto. Te guía con calidez, agenda tu cita y resuelve cualquier duda antes de entrar.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=srgb&fm=jpg&q=85&w=800",
    accent: "#E3BA9B",
  },
];

export default function Team() {
  return (
    <section id="equipo" data-testid="team-section" className="py-24 lg:py-32 bg-[#EAE6DF]/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-14">
          <span className="overline">Nuestro equipo</span>
          <h2 className="mt-4 font-['Outfit'] font-light text-4xl sm:text-5xl tracking-tight leading-[1.1]">
            Las personas detrás de <span className="text-[#3F6151]">cada sonrisa.</span>
          </h2>
          <p className="mt-5 text-[#5C5C5C] leading-relaxed">
            Desde la recepción hasta el sillón dental, cada miembro de nuestro
            equipo está comprometido con tu comodidad y tu salud bucal.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map((member, idx) => (
            <article
              key={member.name}
              data-testid={`team-card-${idx}`}
              className="group relative bg-white border border-[#E5E1D8] rounded-[22px] overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(26,26,26,0.25)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#EAE6DF]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                />
                <div
                  className="absolute inset-0 mix-blend-multiply opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                  style={{ backgroundColor: member.accent }}
                />
                <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <button
                    aria-label={`LinkedIn de ${member.name}`}
                    className="w-9 h-9 rounded-full bg-white/95 grid place-items-center hover:bg-[#3F6151] hover:text-white transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button
                    aria-label={`Email de ${member.name}`}
                    className="w-9 h-9 rounded-full bg-white/95 grid place-items-center hover:bg-[#3F6151] hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-['Outfit'] text-xl text-[#1A1A1A]">
                  {member.name}
                </h3>
                <p
                  className="mt-1 text-xs uppercase tracking-[0.18em]"
                  style={{ color: member.accent }}
                >
                  {member.role}
                </p>
                <p className="mt-4 text-sm text-[#5C5C5C] leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-xs text-[#5C5C5C]/70 text-center">
          Fotografías ilustrativas · pronto las reemplazaremos por imágenes reales del equipo.
        </p>
      </div>
    </section>
  );
}
