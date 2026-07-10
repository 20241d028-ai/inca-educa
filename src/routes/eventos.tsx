import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { events } from "@/lib/site-data";
import { MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/eventos")({
  head: () => ({
    meta: [
      { title: "Eventos — INCA EDUCA" },
      { name: "description", content: "Calendario de próximos eventos, ferias y talleres de INCA EDUCA Cusco." },
      { property: "og:title", content: "Eventos — INCA EDUCA" },
      { property: "og:description", content: "Agenda institucional y eventos abiertos." },
      { property: "og:url", content: "/eventos" },
    ],
    links: [{ rel: "canonical", href: "/eventos" }],
  }),
  component: EventosPage,
});

function EventosPage() {
  return (
    <>
      <PageHeader eyebrow="Agenda" title="Próximos eventos" description="Talleres, ferias y encuentros abiertos a la comunidad educativa." />
      <section className="container-page py-20 space-y-4 max-w-4xl">
        {events.map((e) => (
          <article key={e.title} className="flex items-center gap-6 p-6 rounded-2xl border border-border bg-card hover:shadow-elevated transition">
            <div className="grid size-20 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary text-center">
              <div>
                <div className="text-2xl font-extrabold leading-none">{e.day}</div>
                <div className="text-[10px] font-bold uppercase mt-1">{e.month}</div>
              </div>
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-lg font-bold">{e.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground flex flex-wrap gap-4">
                <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" />{e.location}</span>
                <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{e.time}</span>
              </p>
            </div>
            <button className="hidden sm:inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-bold text-primary-foreground">Registrarme</button>
          </article>
        ))}
      </section>
    </>
  );
}
