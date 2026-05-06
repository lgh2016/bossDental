export const BUSINESS = {
  name: "Laboratorio Dental Boss",
  tagline: "Tu sonrisa en manos de profesionales.",
  address: "Av. Morelos 2, San Cristóbal Centro, Ecatepec de Morelos",
  phone: "55 9169 4795",
  phoneRaw: "5591694795",
  whatsappNumber: "525591694795",
  hours: "Lun – Sáb · 09:00 AM a 6:00 PM",
  mapsEmbed:
    "https://www.google.com/maps?q=Av.+Morelos+2,+San+Cristóbal+Centro,+Ecatepec+de+Morelos&output=embed",
  mapsLink:
    "https://www.google.com/maps?q=Av.+Morelos+2,+San+Cristóbal+Centro,+Ecatepec+de+Morelos",
};

export const waLink = (message) =>
  `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(
    message ||
      "Hola, me gustaría agendar una cita en Laboratorio Dental Boss."
  )}`;

export const SERVICES = [
  {
    key: "rehabilitacion",
    title: "Rehabilitación Dental",
    benefit: "Piezas que encajan a la perfección con medidas exactas.",
    description:
      "Coronas, puentes e implantes fabricados con precisión para devolverle función y confort a tu mordida.",
    image:
      "/images/reh-dental_pro.jpg",
  },
  {
    key: "estetica",
    title: "Estética Dental",
    benefit: "Recupera la confianza al hablar y sonreír.",
    description:
      "Carillas, blanqueamiento y diseño de sonrisa con un enfoque natural. Resultados sutiles, nunca artificiales.",
    image:
      "https://images.pexels.com/photos/6627574/pexels-photo-6627574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    key: "protesis",
    title: "Prótesis y Laboratorio",
    benefit: "Del laboratorio al paciente, sin intermediarios costosos.",
    description:
      "Prótesis fijas y removibles diseñadas en nuestro propio laboratorio. Mejor calidad, mejor precio. En nuestro laboratorio digital combinamos precisión, tecnología y experiencia " +
      "para diseñar y fabricar prótesis dentales de alta calidad. Cada pieza es trabajada con exactitud milimétrica, garantizando un ajuste perfecto,\n" +
      "funcionalidad óptima y una estética natural.",
    image: "/images/laboratorio.jpg",
  },
];

export const REVIEWS = [
  {
    quote:
      "Excelente servicio y medidas exactas. Lo mejor son los precios accesibles en la zona.",
    author: "Paciente satisfecho",
    source: "Reseña verificada",
  },
  {
    quote:
      "Felicidades al Dr. Azael por su gran profesión y atención. Un lugar donde realmente saben lo que hacen.",
    author: "Reseña en Google",
    source: "Google Maps",
  },
  {
    quote:
      "Lo que más me gusta es que todo trabajo va con garantía, te da mucha tranquilidad.",
    author: "Camila T.",
    source: "Reseña verificada",
  },
];

export const FAQ = [
  {
    q: "¿Dónde están ubicados?",
    a: "Estamos en Av. Morelos 2, San Cristóbal Centro, Ecatepec. A pocos pasos del parque central y con fácil acceso en transporte público.",
  },
  {
    q: "¿Cuáles son sus horarios?",
    a: "Atendemos de lunes a sábado de 10:00 AM a 6:00 PM. Te recomendamos agendar previamente por WhatsApp para evitar esperas.",
  },
  {
    q: "¿Las prótesis tienen garantía?",
    a: "Sí. Todo trabajo realizado en nuestro laboratorio cuenta con garantía de ajuste y seguimiento. Si algo no está cómodo, lo ajustamos sin costo.",
  },
  {
    q: "¿Manejan planes de pago?",
    a: "Ofrecemos los precios más competitivos de San Cristóbal Centro y podemos ayudarte a dividir tu tratamiento por etapas según tu presupuesto.",
  },
  {
    q: "¿Necesito una cita para una valoración?",
    a: "La valoración inicial es rápida y sin compromiso. Puedes agendarla por WhatsApp o llenando el formulario de este sitio.",
  },
];
