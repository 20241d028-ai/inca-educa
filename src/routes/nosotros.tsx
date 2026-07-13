import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Heart,
  Award,
  GraduationCap,
  Calendar,
  BookOpen,
  BadgeCheck,
  Users,
  Wrench,
  Rocket,
  ShieldCheck,
  Sparkles,
  HandHeart,
  Star,
  Scale,
  Trophy,
  ArrowRight,
} from "lucide-react";
import inst from "@/assets/inst.jpg";
import fondo from "@/assets/fondo.jpg";
import { careers } from "@/lib/site-data";
import { StickyLeadForm } from "@/components/sticky-lead-form";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Nosotros — INCA EDUCA" },
      { name: "description", content: "Conoce la historia, misión y visión de INCA EDUCA, Centro de Educación Técnico-Productiva reconocido en Cusco desde 2011." },
      { property: "og:title", content: "Nosotros — INCA EDUCA" },
      { property: "og:description", content: "Historia, misión y visión institucional." },
      { property: "og:url", content: "/nosotros" },
    ],
    links: [{ rel: "canonical", href: "/nosotros" }],
  }),
  component: NosotrosPage,
});

const values = [
  {
    icon: Target,
    title: "Misión",
    text: "Somos una organización solidaria que brinda formación técnico-productiva calificada e integral a jóvenes y adultos de la región, promoviendo el emprendimiento y la inserción laboral en mejores condiciones.",
  },
  {
    icon: Eye,
    title: "Visión",
    text: "Constituirnos como un instituto líder en la formación técnica, contribuyendo al desarrollo de las capacidades de jóvenes y adultos para que logren desarrollar sus competencias con liderazgo, emprendimiento e inserción laboral.",
  },
  {
    icon: Heart,
    title: "¿Quiénes somos?",
    text: "Una institución que brinda formación técnica para que los jóvenes accedan a educación técnica de calidad orientada a la creatividad e innovación, y logren insertarse en el mercado laboral en mejores condiciones.",
  },
  {
    icon: Award,
    title: "Reconocimiento oficial",
    text: "En 2011 obtuvimos la Resolución N° 287, mediante la cual la Dirección Regional de Educación del Cusco nos reconoce como Centro de Educación Técnico Productivo (CETPRO).",
  },
];

const timeline = [
  { year: "2002", title: "Inicio de actividades brindando formación técnica en Cusco." },
  { year: "2011", title: "Reconocimiento oficial como CETPRO (Resolución N° 287, DRE Cusco)." },
  { year: "Actualidad", title: "6 programas técnico-productivos activos con certificación oficial MINEDU." },
  { year: "Próximos años", title: "Meta institucional: autorización como Instituto de Educación Superior Tecnológico, para otorgar títulos a nombre de la Nación." },
];

const stats = [
  { icon: Calendar, value: "20+", label: "Años formando profesionales" },
  { icon: BookOpen, value: "6", label: "Programas técnicos" },
  { icon: Award, value: "2011", label: "Reconocimiento oficial" },
  { icon: BadgeCheck, value: "100%", label: "Certificación MINEDU" },
];

const whyChoose = [
  {
    icon: ShieldCheck,
    title: "Certificación Oficial",
    text: "Programas con respaldo y certificación oficial del Ministerio de Educación.",
  },
  {
    icon: Users,
    title: "Docentes Especializados",
    text: "Formadores con experiencia real en la industria y vocación de enseñanza.",
  },
  {
    icon: Wrench,
    title: "Formación Práctica",
    text: "Aprendizaje orientado a la práctica, con proyectos y casos reales desde el primer módulo.",
  },
  {
    icon: Rocket,
    title: "Emprendimiento",
    text: "Impulsamos a nuestros egresados a generar sus propios negocios y oportunidades.",
  },
  {
    icon: Sparkles,
    title: "Talleres Equipados",
    text: "Espacios y equipamiento adecuados para una formación técnica de calidad.",
  },
  {
    icon: Trophy,
    title: "Educación de Calidad",
    text: "Un modelo educativo enfocado en resultados y en la empleabilidad de nuestros estudiantes.",
  },
];

const institutionalValues = [
  { icon: ShieldCheck, title: "Responsabilidad" },
  { icon: HandHeart, title: "Compromiso" },
  { icon: Sparkles, title: "Innovación" },
  { icon: Star, title: "Respeto" },
  { icon: Heart, title: "Solidaridad" },
  { icon: Scale, title: "Excelencia" },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

function NosotrosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sobre nosotros"
        title="Formando técnicos emprendedores en Cusco desde 2002."
        description="Somos un Centro de Educación Técnico-Productiva (CETPRO) comprometido con que jóvenes y adultos accedan a educación técnica de calidad y se inserten en el mercado laboral en mejores condiciones."
      />

      {/* Ancla: inicio del formulario sticky */}
      <div id="nosotros-lead-start" />
      <StickyLeadForm careers={careers} startId="nosotros-lead-start" endId="nosotros-lead-end" />

      {/* NUESTRA HISTORIA */}
      <section className="bg-background py-20">
        <div className="container-page grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow">Nuestra historia</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight">
              Más de dos décadas formando talento técnico en Cusco
            </h2>
            <p className="mt-6 text-lg text-muted-foreground text-pretty">
              INCA EDUCA nació de la convicción de que la educación técnica de calidad es una de las herramientas más
              poderosas para transformar el futuro de jóvenes y adultos. Desde nuestros inicios en 2002, hemos
              acompañado a cientos de estudiantes en su camino hacia una formación práctica, cercana y orientada a
              resultados reales en el mercado laboral.
            </p>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              Hoy, como Centro de Educación Técnico-Productiva reconocido oficialmente por el Ministerio de
              Educación, seguimos creciendo junto a nuestra comunidad educativa, fortaleciendo cada programa con
              docentes especializados, talleres equipados y una visión clara: formar personas capaces de emprender y
              transformar su entorno.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-surface-2"
          >
            <img
              src={inst}
              alt="Estudiantes de INCA EDUCA en talleres prácticos"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* MISIÓN / VISIÓN / QUIÉNES SOMOS / RECONOCIMIENTO (sin cambios en lógica ni contenido) */}
      <section className="container-page py-20 grid md:grid-cols-2 gap-6">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="rounded-2xl border border-border bg-card p-8"
          >
            <div className="grid size-12 place-items-center rounded-xl bg-primary-soft text-primary mb-5">
              <v.icon className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-extrabold">{v.title}</h3>
            <p className="mt-3 text-muted-foreground text-pretty">{v.text}</p>
          </motion.div>
        ))}
      </section>

      {/* ESTADÍSTICAS */}
      <section className="bg-surface-2 border-y border-border py-20">
        <div className="container-page">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow">INCA EDUCA en números</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight">Nuestra trayectoria en cifras</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="mx-auto grid size-12 place-items-center rounded-xl bg-primary-soft text-primary mb-5">
                  <s.icon className="h-5 w-5" />
                </div>
                <p className="text-3xl md:text-4xl font-extrabold text-primary">{s.value}</p>
                <p className="mt-2 text-sm font-medium text-muted-foreground">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ¿POR QUÉ ELEGIR INCA EDUCA? */}
      <section className="bg-background py-20">
        <div className="container-page">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow">Nuestra propuesta</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight">¿Por qué elegir INCA EDUCA?</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="rounded-2xl border border-border bg-card p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="grid size-12 place-items-center rounded-xl bg-primary-soft text-primary mb-5">
                  <w.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-extrabold">{w.title}</h3>
                <p className="mt-3 text-muted-foreground text-pretty">{w.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VALORES INSTITUCIONALES */}
      <section className="bg-surface-2 border-y border-border py-20">
        <div className="container-page">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow">Lo que nos guía</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight">Valores institucionales</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {institutionalValues.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card px-6 py-5 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
                  <val.icon className="h-5 w-5" />
                </div>
                <span className="font-semibold">{val.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LÍNEA DE TIEMPO (contenido intacto, diseño mejorado) */}
      <section className="bg-background py-20">
        <div className="container-page">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }}>
            <p className="eyebrow">Nuestra trayectoria</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight mb-14">Línea de tiempo</h2>
          </motion.div>

          <ol className="relative border-s-2 border-border ml-4 space-y-12 max-w-3xl">
            {timeline.map((t, i) => (
              <motion.li
                key={t.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="ps-8 relative"
              >
                <span className="absolute -start-[9px] top-1 grid size-4 place-items-center rounded-full bg-primary ring-4 ring-background shadow-md" />
                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
                  <p className="text-sm font-bold text-primary">{t.year}</p>
                  <p className="mt-1 text-lg font-semibold text-pretty">{t.title}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* CERTIFICACIÓN (texto intacto, presentación mejorada) */}
      <section className="container-page py-20">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto rounded-2xl border border-border bg-card p-10 md:p-14 shadow-sm text-center"
        >
          <div className="mx-auto grid size-16 place-items-center rounded-2xl bg-primary-soft text-primary mb-6">
            <BadgeCheck className="h-8 w-8" />
          </div>
          <p className="eyebrow">Certificación</p>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight">Formación con respaldo oficial</h2>
          <p className="mt-6 text-lg text-muted-foreground text-pretty leading-relaxed">
            Todas nuestras especialidades tienen un año de duración y otorgan certificación oficial a nombre del Ministerio de Educación. En Gastronomía Internacional, Panadería y Pastelería, y Cosmetología y Estética Personal, además se otorga el Título de Auxiliar Técnico.
          </p>
        </motion.div>
      </section>

      {/* Ancla: fin del formulario sticky */}
      <div id="nosotros-lead-end" />

      {/* FRASE INSTITUCIONAL */}
      <section className="bg-gradient-to-b from-surface-2 to-background border-y border-border py-24">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6 }}
          className="container-page max-w-3xl mx-auto text-center"
        >
          <div className="mx-auto grid size-14 place-items-center rounded-2xl bg-primary-soft text-primary mb-8">
            <GraduationCap className="h-7 w-7" />
          </div>
          <p className="text-2xl md:text-3xl font-extrabold tracking-tight text-pretty leading-snug">
            "En INCA EDUCA no solo formamos técnicos; formamos personas preparadas para transformar su futuro
            mediante el conocimiento, el trabajo y el emprendimiento."
          </p>
        </motion.div>
      </section>
    </>
  );
}