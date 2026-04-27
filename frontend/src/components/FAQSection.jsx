import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { FAQ } from "../lib/constants";

export default function FAQSection() {
  return (
    <section id="faq" data-testid="faq-section" className="py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="overline">Preguntas frecuentes</span>
          <h2 className="mt-4 font-['Outfit'] font-light text-4xl sm:text-5xl tracking-tight leading-[1.1]">
            Todo lo que suelen preguntarnos, <span className="text-[#3F6151]">resuelto.</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-12 space-y-3">
          {FAQ.map((item, idx) => (
            <AccordionItem
              key={idx}
              value={`item-${idx}`}
              data-testid={`faq-item-${idx}`}
              className="border border-[#E5E1D8] rounded-2xl px-6 bg-white"
            >
              <AccordionTrigger className="text-left text-base sm:text-lg font-['Outfit'] font-normal hover:no-underline py-5">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-[#5C5C5C] leading-relaxed pb-5">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
