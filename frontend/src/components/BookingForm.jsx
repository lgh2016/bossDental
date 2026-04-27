import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { BUSINESS, waLink, SERVICES } from "../lib/constants";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    preferred_date: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const update = (k, v) => setForm((prev) => ({ ...prev, [k]: v }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.service) {
      toast.error("Por favor completa tu nombre, teléfono y servicio.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/appointments`, form);
      toast.success("¡Listo! Te contactaremos por WhatsApp para confirmar.");
      setForm({ name: "", phone: "", service: "", preferred_date: "", message: "" });
    } catch (err) {
      toast.error("No se pudo enviar tu solicitud. Intenta de nuevo o contáctanos por WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contacto"
      data-testid="booking-section"
      className="relative py-24 lg:py-32 bg-[#F9F8F6]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <span className="overline">Agenda tu cita</span>
          <h2 className="mt-4 font-['Outfit'] font-light text-4xl sm:text-5xl tracking-tight leading-[1.05]">
            Reserva tu valoración <span className="text-[#3F6151]">sin compromiso.</span>
          </h2>
          <p className="mt-5 text-[#5C5C5C] leading-relaxed">
            Déjanos tus datos y Alfredo te contactará por WhatsApp para
            confirmar fecha y resolver cualquier duda.
          </p>

          <div className="mt-10 space-y-5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E5E1D8] grid place-items-center">
                <MapPin className="w-4 h-4 text-[#3F6151]" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-[#5C5C5C]">Dirección</p>
                <p className="mt-1 text-[#1A1A1A]">{BUSINESS.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E5E1D8] grid place-items-center">
                <Phone className="w-4 h-4 text-[#3F6151]" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-[#5C5C5C]">Teléfono</p>
                <a href={`tel:${BUSINESS.phoneRaw}`} data-testid="contact-phone" className="mt-1 block text-[#1A1A1A] hover:text-[#3F6151]">
                  {BUSINESS.phone}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E5E1D8] grid place-items-center">
                <Clock className="w-4 h-4 text-[#3F6151]" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-[#5C5C5C]">Horario</p>
                <p className="mt-1 text-[#1A1A1A]">{BUSINESS.hours}</p>
              </div>
            </div>
          </div>

          <a
            href={waLink()}
            target="_blank"
            rel="noreferrer"
            data-testid="contact-whatsapp-link"
            className="mt-8 inline-flex items-center gap-2 text-[#25D366] font-medium"
          >
            <MessageCircle className="w-4 h-4" />
            O escríbenos directo por WhatsApp
          </a>
        </div>

        <form
          onSubmit={submit}
          data-testid="booking-form"
          className="lg:col-span-7 bg-white border border-[#E5E1D8] rounded-[24px] p-8 lg:p-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <Label htmlFor="name" className="text-xs uppercase tracking-[0.18em] text-[#5C5C5C]">Nombre completo</Label>
              <Input
                id="name"
                data-testid="booking-name"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="María López"
                className="mt-2 h-12 rounded-xl border-[#E5E1D8] focus-visible:ring-[#3F6151]"
              />
            </div>
            <div>
              <Label htmlFor="phone" className="text-xs uppercase tracking-[0.18em] text-[#5C5C5C]">Teléfono / WhatsApp</Label>
              <Input
                id="phone"
                data-testid="booking-phone"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                placeholder="55 1234 5678"
                className="mt-2 h-12 rounded-xl border-[#E5E1D8] focus-visible:ring-[#3F6151]"
              />
            </div>
            <div>
              <Label className="text-xs uppercase tracking-[0.18em] text-[#5C5C5C]">Servicio de interés</Label>
              <Select value={form.service} onValueChange={(v) => update("service", v)}>
                <SelectTrigger data-testid="booking-service" className="mt-2 h-12 rounded-xl border-[#E5E1D8] focus:ring-[#3F6151]">
                  <SelectValue placeholder="Elige un servicio" />
                </SelectTrigger>
                <SelectContent>
                  {SERVICES.map((s) => (
                    <SelectItem key={s.key} value={s.title}>
                      {s.title}
                    </SelectItem>
                  ))}
                  <SelectItem value="Valoración general">Valoración general</SelectItem>
                  <SelectItem value="Otro">Otro / No estoy seguro</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="date" className="text-xs uppercase tracking-[0.18em] text-[#5C5C5C]">Fecha preferida</Label>
              <Input
                id="date"
                type="date"
                data-testid="booking-date"
                value={form.preferred_date}
                onChange={(e) => update("preferred_date", e.target.value)}
                className="mt-2 h-12 rounded-xl border-[#E5E1D8] focus-visible:ring-[#3F6151]"
              />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="message" className="text-xs uppercase tracking-[0.18em] text-[#5C5C5C]">Cuéntanos brevemente</Label>
              <Textarea
                id="message"
                data-testid="booking-message"
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                placeholder="Ej: Necesito una prótesis, tengo una muela rota..."
                className="mt-2 min-h-[120px] rounded-xl border-[#E5E1D8] focus-visible:ring-[#3F6151]"
              />
            </div>
          </div>

          <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Button
              type="submit"
              disabled={loading}
              data-testid="booking-submit"
              className="h-13 px-8 py-4 rounded-full bg-[#3F6151] hover:bg-[#2C4539] text-white text-base"
            >
              {loading ? "Enviando..." : "Solicitar cita"}
            </Button>
            <p className="text-xs text-[#5C5C5C] sm:ml-3">
              Al enviar aceptas que te contactemos para confirmar tu cita.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
