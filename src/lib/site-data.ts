import imgGastronomia from "@/assets/career-gastronomia.jpg";
import imgPanaderia from "@/assets/career-panaderia.jpg";
import imgHosteleria from "@/assets/career-hosteleria.jpg";
import imgCosmetologia from "@/assets/career-cosmetologia.jpg";
import imgAdministracion from "@/assets/career-administracion.jpg";
import imgSistemas from "@/assets/career-sistemas.jpg";

export interface Career {
  slug: string;
  title: string;
  category: string;
  duration: string;
  modality: "Presencial" | "Semipresencial" | "Híbrido";
  titulo: string;
  image: string;
  summary: string;
  description: string;
  campoLaboral: string[];
  perfilIngreso: string[];
  perfilEgreso: string[];
  malla: { ciclo: string; cursos: string[] }[];
}

export const careers: Career[] = [
  {
    slug: "gastronomia-internacional",
    title: "Gastronomía Internacional",
    category: "Gastronomía",
    duration: "1 año",
    modality: "Presencial",
    titulo: "Título de Auxiliar Técnico",
    image: imgGastronomia,
    summary:
      "Domina las técnicas de la cocina peruana e internacional en laboratorios equipados para la práctica real.",
    description:
      "Programa técnico-productivo que forma cocineros capaces de preparar platos de la cocina peruana e internacional con técnicas profesionales, manejo de insumos y gestión básica de cocina, con una fuerte orientación al emprendimiento gastronómico.",
    campoLaboral: [
      "Restaurantes y hoteles de Cusco",
      "Emprendimiento gastronómico propio",
      "Servicios de catering y eventos",
      "Cocina en cadenas turísticas y hoteleras",
    ],
    perfilIngreso: [
      "Interés por el arte culinario",
      "Creatividad y disposición al detalle",
      "Capacidad de trabajo bajo presión",
    ],
    perfilEgreso: [
      "Manejo de técnicas de cocina peruana e internacional",
      "Higiene y manipulación segura de alimentos",
      "Nociones de costos y gestión de cocina",
    ],
    malla: [
      { ciclo: "Módulo I", cursos: ["Fundamentos de cocina", "Higiene y manipulación de alimentos", "Cocina peruana I", "Panadería básica"] },
      { ciclo: "Módulo II", cursos: ["Cocina internacional", "Pastelería", "Costos y gestión de cocina", "Prácticas pre-profesionales"] },
    ],
  },
  {
    slug: "panaderia-pasteleria-industrial",
    title: "Panadería y Pastelería Industrial",
    category: "Gastronomía",
    duration: "1 año",
    modality: "Presencial",
    titulo: "Título de Auxiliar Técnico",
    image: imgPanaderia,
    summary:
      "Aprende a elaborar productos de panadería y pastelería con técnicas modernas aplicadas a recetas tradicionales y comerciales.",
    description:
      "Forma profesionales en la elaboración de pan, pasteles y productos de repostería combinando técnicas industriales con recetas tradicionales cusqueñas, con enfoque en calidad, presentación y control de costos de producción.",
    campoLaboral: [
      "Panaderías y pastelerías",
      "Hoteles y restaurantes",
      "Negocio propio de repostería",
      "Producción industrial de panificados",
    ],
    perfilIngreso: [
      "Gusto por la repostería y la precisión",
      "Orden y disciplina en el trabajo",
      "Interés por la creatividad en la decoración",
    ],
    perfilEgreso: [
      "Elaboración de panes y masas con técnicas industriales",
      "Pastelería y decoración de productos",
      "Costeo básico de producción",
    ],
    malla: [
      { ciclo: "Módulo I", cursos: ["Panadería básica", "Masas y fermentos", "Higiene alimentaria"] },
      { ciclo: "Módulo II", cursos: ["Pastelería industrial", "Decoración y acabados", "Costos de producción", "Prácticas pre-profesionales"] },
    ],
  },
  {
    slug: "hosteleria-turismo",
    title: "Hostelería y Turismo",
    category: "Turismo y Hotelería",
    duration: "1 año",
    modality: "Presencial",
    titulo: "Certificación Oficial MINEDU",
    image: imgHosteleria,
    summary:
      "Fórmate en recepción y reservas, housekeeping, bar y comedor, e inglés técnico hotelero para el sector turístico de Cusco.",
    description:
      "Programa orientado a un sector clave para la economía cusqueña: forma personal capacitado para desempeñarse en hoteles, agencias de turismo y restaurantes, con dominio de protocolos de atención al huésped e inglés técnico hotelero.",
    campoLaboral: [
      "Hoteles y hospedajes de Cusco",
      "Agencias y operadoras de turismo",
      "Restaurantes y centros de eventos",
      "Empresas de transporte turístico",
    ],
    perfilIngreso: [
      "Vocación de servicio",
      "Facilidad de comunicación",
      "Interés por el turismo y la cultura local",
    ],
    perfilEgreso: [
      "Atención y recepción de huéspedes",
      "Manejo de reservas y housekeeping",
      "Inglés técnico hotelero",
    ],
    malla: [
      { ciclo: "Módulo I", cursos: ["Recepción y reservas", "Housekeeping", "Inglés técnico hotelero I"] },
      { ciclo: "Módulo II", cursos: ["Bar y comedor", "Atención al cliente", "Inglés técnico hotelero II", "Prácticas pre-profesionales"] },
    ],
  },
  {
    slug: "cosmetologia-estetica-personal",
    title: "Cosmetología y Estética Personal",
    category: "Estética y Belleza",
    duration: "1 año",
    modality: "Presencial",
    titulo: "Título de Auxiliar Técnico",
    image: imgCosmetologia,
    summary:
      "Desarrolla técnicas de cuidado personal y belleza combinando creatividad, bioseguridad y atención al cliente.",
    description:
      "Formación para quienes desean ayudar a las personas a lucir y sentirse mejor: técnicas de cosmetología facial y corporal, barbería y protocolos de bioseguridad para el trabajo en salones y spas.",
    campoLaboral: [
      "Salones de belleza y spas",
      "Barberías",
      "Centros de estética",
      "Negocio propio de belleza",
    ],
    perfilIngreso: [
      "Interés por el cuidado personal y la belleza",
      "Creatividad y buen trato al público",
      "Pulso firme y atención al detalle",
    ],
    perfilEgreso: [
      "Técnicas de cosmetología facial y corporal",
      "Bioseguridad en salones",
      "Nociones de barbería y emprendimiento",
    ],
    malla: [
      { ciclo: "Módulo I", cursos: ["Cosmetología facial", "Bioseguridad", "Barbería básica"] },
      { ciclo: "Módulo II", cursos: ["Cosmetología corporal", "Coloración y peinado", "Emprendimiento en belleza", "Prácticas pre-profesionales"] },
    ],
  },
  {
    slug: "asistente-administrativo-logistica-almacen",
    title: "Asistente Administrativo, Logística y Almacén",
    category: "Administración y Negocios",
    duration: "1 año",
    modality: "Presencial",
    titulo: "Certificación Oficial MINEDU",
    image: imgAdministracion,
    summary:
      "Fórmate para organizar y controlar el flujo documentario de una oficina, con especialidad en logística, almacenes y auxiliar contable.",
    description:
      "El egresado queda calificado para organizar, mantener y controlar el flujo de documentos de una oficina, redactar correspondencia comercial y mercantil, y apoyar procesos de logística, almacenes y contabilidad básica.",
    campoLaboral: [
      "Oficinas administrativas",
      "Empresas de logística y almacenes",
      "Estudios contables",
      "Entidades públicas y privadas",
    ],
    perfilIngreso: [
      "Orden y responsabilidad",
      "Manejo básico de ofimática",
      "Facilidad para la redacción",
    ],
    perfilEgreso: [
      "Gestión documentaria y correspondencia comercial",
      "Nociones de logística, almacenes e inventarios",
      "Auxiliar contable básico",
    ],
    malla: [
      { ciclo: "Módulo I", cursos: ["Ofimática aplicada", "Redacción comercial", "Auxiliar contable I"] },
      { ciclo: "Módulo II", cursos: ["Logística y almacenes", "Atención al cliente", "Auxiliar contable II", "Prácticas pre-profesionales"] },
    ],
  },
  {
    slug: "operador-de-computadoras",
    title: "Operador de Computadoras",
    category: "Tecnología",
    duration: "1 año",
    modality: "Presencial",
    titulo: "Certificación Oficial MINEDU",
    image: imgSistemas,
    summary:
      "Domina las herramientas informáticas indispensables para el trabajo actual: Excel intermedio y avanzado, ofimática y diseño gráfico.",
    description:
      "Hoy toda empresa está total o parcialmente informatizada. Este programa forma operadores capacitados en ofimática completa, hoja de cálculo avanzada y nociones de diseño gráfico para desempeñarse en cualquier oficina moderna.",
    campoLaboral: [
      "Oficinas y empresas de todo rubro",
      "Estudios de diseño gráfico",
      "Cabinas y centros de cómputo",
      "Servicios de asistencia informática",
    ],
    perfilIngreso: [
      "Interés por la tecnología",
      "Manejo básico de computadoras",
      "Pensamiento lógico",
    ],
    perfilEgreso: [
      "Excel intermedio y avanzado",
      "Ofimática completa",
      "Nociones de diseño gráfico",
    ],
    malla: [
      { ciclo: "Módulo I", cursos: ["Ofimática I", "Excel intermedio", "Introducción al diseño gráfico"] },
      { ciclo: "Módulo II", cursos: ["Excel avanzado", "Diseño gráfico aplicado", "Mantenimiento básico de PC", "Prácticas pre-profesionales"] },
    ],
  },
];

export interface NewsItem {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
}

export const news: NewsItem[] = [
  {
    slug: "admision-2024-ii-abierta",
    title: "Admisión 2024-II abierta para nuestras 6 carreras técnicas",
    excerpt: "Postula a Gastronomía, Panadería, Hostelería, Cosmetología, Administración o Computación.",
    category: "Institucional",
    date: "2024-05-12",
    author: "Comunicaciones INCA EDUCA",
  },
  {
    slug: "convenio-practicas-hoteles-cusco",
    title: "Nuevos convenios con hoteles y restaurantes de Cusco para prácticas",
    excerpt: "Fortalecemos la inserción laboral de nuestros egresados de Hostelería y Gastronomía.",
    category: "Institucional",
    date: "2024-04-28",
    author: "Dirección Académica",
  },
  {
    slug: "certificacion-minedu",
    title: "Certificación oficial a nombre del Ministerio de Educación",
    excerpt: "Nuestros programas cuentan con reconocimiento oficial como CETPRO desde 2011.",
    category: "Académico",
    date: "2024-04-10",
    author: "Dirección Académica",
  },
];

export interface EventItem {
  title: string;
  date: string;
  day: string;
  month: string;
  location: string;
  time: string;
}

export const events: EventItem[] = [
  { title: "Charla informativa: Admisión 2024-II", date: "2024-06-15", day: "15", month: "Jun", location: "Sede San Sebastián", time: "17:00" },
  { title: "Feria de carreras técnicas", date: "2024-06-22", day: "22", month: "Jun", location: "Sede San Sebastián", time: "10:00" },
  { title: "Muestra gastronómica de egresados", date: "2024-07-05", day: "05", month: "Jul", location: "Sede San Sebastián", time: "15:00" },
];

export interface Teacher {
  name: string;
  role: string;
  specialty: string;
  years: number;
}

// NOTA PROTOTIPO: nombres de ejemplo. Reemplazar por el plantel docente real antes de publicar.
export const teachers: Teacher[] = [
  { name: "Docente por confirmar", role: "Instructor(a)", specialty: "Gastronomía Internacional", years: 10 },
  { name: "Docente por confirmar", role: "Instructor(a)", specialty: "Panadería y Pastelería Industrial", years: 10 },
  { name: "Docente por confirmar", role: "Instructor(a)", specialty: "Hostelería y Turismo", years: 10 },
  { name: "Docente por confirmar", role: "Instructor(a)", specialty: "Cosmetología y Estética Personal", years: 10 },
  { name: "Docente por confirmar", role: "Instructor(a)", specialty: "Asistente Administrativo, Logística y Almacén", years: 10 },
  { name: "Docente por confirmar", role: "Instructor(a)", specialty: "Operador de Computadoras", years: 10 },
];

// Cifras verificadas en la web institucional (incaeduca.edu.pe). No se inventan métricas
// como "egresados" o "% de inserción laboral" que la institución no publica.
export const stats = [
  { value: "2002", label: "Año de fundación" },
  { value: "2011", label: "Reconocidos como CETPRO" },
  { value: "6", label: "Programas técnico-productivos" },
  { value: "MINEDU", label: "Certificación oficial" },
];

// NOTA PROTOTIPO: la web institucional no publica empresas aliadas específicas.
// Se muestran rubros generales en vez de inventar marcas o convenios que no existen.
export const partnerSectors = [
  "Hoteles y hospedajes de Cusco",
  "Restaurantes y servicios gastronómicos",
  "Salones de belleza y spas",
  "Agencias y operadores de turismo",
  "Empresas de logística y almacenes",
  "Estudios de diseño y cómputo",
];

// NOTA PROTOTIPO: testimonios de ejemplo. Reemplazar por testimonios reales de
// egresados antes de publicar el sitio, para no atribuir citas a personas ficticias.
export const testimonials = [
  {
    name: "Egresado(a) — Gastronomía Internacional",
    career: "Gastronomía Internacional",
    quote: "Espacio reservado para un testimonio real de un egresado de esta carrera.",
  },
  {
    name: "Egresado(a) — Hostelería y Turismo",
    career: "Hostelería y Turismo",
    quote: "Espacio reservado para un testimonio real de un egresado de esta carrera.",
  },
  {
    name: "Egresado(a) — Asistente Administrativo",
    career: "Asistente Administrativo, Logística y Almacén",
    quote: "Espacio reservado para un testimonio real de un egresado de esta carrera.",
  },
];

export const contactInfo = {
  email: "info@incaeduca.edu.pe",
  phone: "(084) 275994",
  phoneHref: "tel:+51842275994",
  address: "Prol. Av. la Cultura, 6º paradero San Sebastián, Cusco",
  facebook: "https://www.facebook.com/IncaEduca/",
  youtube: "https://www.youtube.com/@IncaEduca",
  platform: "https://plataforma.incaeduca.edu.pe/",
};
