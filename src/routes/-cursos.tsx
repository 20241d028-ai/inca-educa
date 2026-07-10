// Página de cursos cortos deshabilitada — no se mostrará en el sitio por ahora.

/*
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Clock, Award, Zap } from "lucide-react";

export const Route = createFileRoute("/cursos")({
  head: () => ({
    meta: [
      { title: "Cursos Cortos — INCA EDUCA" },
      { name: "description", content: "Cursos cortos de especialización con certificación oficial en Cusco: gastronomía, tecnología, idiomas y más." },
      { property: "og:title", content: "Cursos Cortos — INCA EDUCA" },
      { property: "og:description", content: "Especialízate rápido con nuestros cursos cortos certificados." },
      { property: "og:url", content: "/cursos" },
    ],
    links: [{ rel: "canonical", href: "/cursos" }],
  }),
  component: CursosPage,
});

const cursos = [
  { title: "Barismo profesional", duration: "40h", modality: "Presencial", price: "S/ 450" },
  { title: "Excel avanzado para empresas", duration: "24h", modality: "Virtual", price: "S/ 280" },
  { title: "Reparación de smartphones", duration: "60h", modality: "Presencial", price: "S/ 520" },
  { title: "Marketing digital y redes sociales", duration: "36h", modality: "Semipresencial", price: "S/ 380" },
  { title: "Inglés conversacional intensivo", duration: "80h", modality: "Presencial", price: "S/ 650" },
  { title: "Panadería artesanal", duration: "48h", modality: "Presencial", price: "S/ 490" },
];

function CursosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Formación continua"
        title="Cursos cortos con certificación."
        description="Especialízate en meses con programas prácticos, certificado oficial y modalidades flexibles."
      />
      <section className="container-page py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cursos.map((c) => (
            <article key={c.title} className="rounded-2xl border border-border bg-card p-6 hover:shadow-elevated transition">
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-primary">
                <Zap className="h-3.5 w-3.5" /> Curso corto
              </div>
              <h3 className="mt-3 text-lg font-bold">{c.title}</h3>
              <div className="mt-5 flex flex-wrap gap-3 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {c.duration}</span>
                <span>{c.modality}</span>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-xl font-extrabold text-primary">{c.price}</span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground"><Award className="h-3.5 w-3.5" /> Certificado</span>
              </div>
              <button className="mt-6 w-full py-3 rounded-full bg-primary text-primary-foreground text-sm font-bold hover:brightness-110">Inscribirme</button>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
*/
