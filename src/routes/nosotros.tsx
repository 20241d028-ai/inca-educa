import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Award } from "lucide-react";

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

function NosotrosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sobre nosotros"
        title="Formando técnicos emprendedores en Cusco desde 2002."
        description="Somos un Centro de Educación Técnico-Productiva (CETPRO) comprometido con que jóvenes y adultos accedan a educación técnica de calidad y se inserten en el mercado laboral en mejores condiciones."
      />

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

      <section className="bg-surface-2 border-y border-border py-20">
        <div className="container-page">
          <p className="eyebrow">Nuestra trayectoria</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight mb-14">Línea de tiempo</h2>
          <ol className="relative border-s border-border ml-4 space-y-10 max-w-3xl">
            {timeline.map((t) => (
              <li key={t.year} className="ps-8">
                <span className="absolute -start-2 grid size-4 place-items-center rounded-full bg-primary ring-4 ring-background" />
                <p className="text-sm font-bold text-primary">{t.year}</p>
                <p className="mt-1 text-lg font-semibold">{t.title}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-page py-20 max-w-4xl">
        <p className="eyebrow">Certificación</p>
        <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight">Formación con respaldo oficial</h2>
        <p className="mt-6 text-lg text-muted-foreground text-pretty">
          Todas nuestras especialidades tienen un año de duración y otorgan certificación oficial a nombre del Ministerio de Educación. En Gastronomía Internacional, Panadería y Pastelería, y Cosmetología y Estética Personal, además se otorga el Título de Auxiliar Técnico.
        </p>
      </section>
    </>
  );
}

