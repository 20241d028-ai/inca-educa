import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Briefcase, MapPin, Building2 } from "lucide-react";

export const Route = createFileRoute("/bolsa-laboral")({
  head: () => ({
    meta: [
      { title: "Bolsa Laboral — INCA EDUCA" },
      { name: "description", content: "Vacantes exclusivas para egresados y estudiantes de INCA EDUCA en +30 empresas aliadas." },
      { property: "og:title", content: "Bolsa Laboral — INCA EDUCA" },
      { property: "og:description", content: "Encuentra oportunidades laborales." },
      { property: "og:url", content: "/bolsa-laboral" },
    ],
    links: [{ rel: "canonical", href: "/bolsa-laboral" }],
  }),
  component: BolsaPage,
});

const vacantes = [
  { title: "Cocinero de línea", company: "Restaurante Cusco Gourmet", location: "Cusco", type: "Tiempo completo" },
  { title: "Soporte técnico junior", company: "TecnoSur SAC", location: "Cusco / Remoto", type: "Tiempo completo" },
  { title: "Guía turístico bilingüe", company: "Andes Travel", location: "Cusco", type: "Temporada" },
  { title: "Técnico automotriz", company: "AutoServicio Andino", location: "Cusco", type: "Tiempo completo" },
];

function BolsaPage() {
  return (
    <>
      <PageHeader eyebrow="Empleabilidad" title="Bolsa laboral" description="Vacantes exclusivas para estudiantes y egresados de INCA EDUCA." />
      <section className="container-page py-20 space-y-4 max-w-4xl">
        {vacantes.map((v) => (
          <article key={v.title} className="p-6 rounded-2xl border border-border bg-card hover:shadow-elevated transition flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="grid size-12 place-items-center rounded-xl bg-primary-soft text-primary shrink-0">
              <Briefcase className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-lg font-bold">{v.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground flex flex-wrap gap-4">
                <span className="inline-flex items-center gap-1.5"><Building2 className="h-3.5 w-3.5" />{v.company}</span>
                <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" />{v.location}</span>
                <span>{v.type}</span>
              </p>
            </div>
            <button className="inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-bold text-primary-foreground">Postular</button>
          </article>
        ))}
      </section>
    </>
  );
}
