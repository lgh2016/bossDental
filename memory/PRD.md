# Laboratorio Dental Boss — PRD

## Problema Original
Sitio web de conversión para un laboratorio dental en Ecatepec (San Cristóbal Centro). Objetivo: transformar la información técnica en beneficios emocionales y tangibles, destacando atención personalizada (Dr. Azael / Alfredo), garantía, y accesibilidad de precios.

## Stack & Arquitectura
- Frontend: React 19 + Tailwind + Shadcn UI + Sonner (toasts)
- Backend: FastAPI + Motor (MongoDB async) + Pydantic v2
- Fuente tipográfica: Outfit (titulares) + Work Sans (cuerpo)
- Paleta: Sage green #3F6151 · Bone white #F9F8F6 · Accent #E3BA9B · Dark #1A1A1A
- Integración: WhatsApp (wa.me/525591694795) · Google Maps embed

## Personas
- Paciente local de Ecatepec buscando precios accesibles
- Personas mayores que requieren prótesis/rehabilitación
- Usuarios móviles convertibles vía WhatsApp

## Estructura del sitio (implementada)
1. Navbar sticky con glass-morphism
2. Hero (H1 + CTA WhatsApp + imagen + badge de +500 pacientes)
3. Authority – Dr. Azael + 3 puntos clave
4. Services – Bento grid (Rehabilitación, Estética, Prótesis)
5. Reviews – 3 reseñas de pacientes
6. Guarantee – Promesa Boss (fondo oscuro, alto contraste)
7. BookingForm – Formulario conectado a `/api/appointments`
8. FAQ – Accordion (5 preguntas)
9. Footer – Mapa embed + datos + redes
10. FloatingWhatsApp – Pill flotante bottom-right

## Endpoints backend
- `GET /api/` → health
- `POST /api/appointments` → crea cita (validación Pydantic, UUID id)
- `GET /api/appointments` → lista citas sin `_id`

## Implementado (2025-12)
- Landing completa con 10 secciones
- Formulario de agendamiento persistente en MongoDB
- Botón flotante WhatsApp + CTA en nav/hero/guarantee/footer
- Mapa Google embebido
- Diseño responsive con menú móvil
- Testing 100% backend + frontend verificado

## Backlog (Próximo)
- P1: Dashboard admin para ver/gestionar citas recibidas
- P1: Envío de notificación (Resend/Twilio) al recibir cita
- P2: Galería antes/después de casos reales
- P2: Integración con Google Reviews API (reseñas dinámicas)
- P2: Reemplazar imágenes stock con fotos reales del Dr. Azael, Alfredo y el consultorio
- P3: Blog/tips de higiene dental para SEO local
- P3: Multi-idioma (ES/EN) si atienden turistas

## Credenciales
- WhatsApp: 525591694795
- Dirección: Av. Morelos 2, San Cristóbal Centro, Ecatepec
- Horario: Lun-Sáb 10:00 AM – 6:00 PM
