import { Star, Quote } from "lucide-react";
import { REVIEWS } from "../lib/constants";

export default function Reviews() {
  return (
    <section
      id="resenas"
      data-testid="reviews-section"
      className="relative py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="overline">Pacientes reales</span>
          <h2 className="mt-4 font-['Outfit'] font-light text-4xl sm:text-5xl tracking-tight leading-[1.1]">
            Lo que dicen las personas que ya{" "}
            <span className="text-[#3F6151]">sonríen con nosotros.</span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <figure
              key={i}
              data-testid={`review-card-${i}`}
              className="relative bg-white border border-[#E5E1D8] rounded-[20px] p-8 flex flex-col"
            >
              <Quote className="w-7 h-7 text-[#E3BA9B] mb-4" />
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-[#3F6151] text-[#3F6151]" />
                ))}
              </div>
              <blockquote className="text-[#1A1A1A] text-lg leading-relaxed font-['Outfit'] font-light">
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-[#E5E1D8]">
                <p className="text-sm font-medium text-[#1A1A1A]">{r.author}</p>
                <p className="text-xs text-[#5C5C5C] mt-1">{r.source}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
