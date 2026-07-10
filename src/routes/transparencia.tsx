import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { FileText, Download } from "lucide-react";

export const Route = createFileRoute("/transparencia")({
  head: () => ({
    meta: [
      { title: "Transparencia — INCA EDUCA" },
      { name: "description", content: "Documentos institucionales, resoluciones, licencias y planes de estudios de INCA EDUCA." },
      { property: "og:title", content: "Transparencia — INCA EDUCA" },
      { property: "og:description", content: "Documentos públicos institucionales." },
      { property: "og:url", content: "/transparencia" },
    ],
    links: [{ rel: "canonical", href: "/transparencia" }],
  }),
  component: TransparenciaPage,
});

const docs = [
  { title: "Resolución de licenciamiento CETPRO", date: "2005-03-15", size: "1.2 MB" },
  { title: "Reglamento institucional 2024", date: "2024-01-10", size: "890 KB" },
  { title: "Planes de estudio por carrera", date: "2024-02-01", size: "3.4 MB" },
  { title: "Memoria institucional 2023", date: "2024-03-22", size: "5.1 MB" },
  { title: "Código de ética docente", date: "2023-08-14", size: "420 KB" },
  { title: "Manual del estudiante", date: "2024-02-15", size: "1.8 MB" },
];

function TransparenciaPage() {
  return (
    <>
      <PageHeader eyebrow="Portal público" title="Transparencia" description="Acceso público a documentos, resoluciones y normativas institucionales." />
      <section className="container-page py-20 max-w-4xl space-y-3">
        {docs.map((d) => (
          <a
            key={d.title}
            href="#"
            className="flex items-center gap-4 p-5 rounded-xl border border-border bg-card hover:shadow-elevated hover:border-primary/25 transition"
          >
            <div className="grid size-11 place-items-center rounded-lg bg-primary-soft text-primary shrink-0">
              <FileText className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-semibold truncate">{d.title}</p>
              <p className="text-xs text-muted-foreground mt-1">Publicado el {new Date(d.date).toLocaleDateString("es-PE", { day: "numeric", month: "long", year: "numeric" })} · PDF · {d.size}</p>
            </div>
            <Download className="h-5 w-5 text-muted-foreground shrink-0" />
          </a>
        ))}
      </section>
    </>
  );
}
