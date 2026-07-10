import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { useState } from "react";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galería — INCA EDUCA" },
      { name: "description", content: "Fotos y videos de la vida académica, laboratorios y eventos de INCA EDUCA Cusco." },
      { property: "og:title", content: "Galería — INCA EDUCA" },
      { property: "og:description", content: "Momentos de la comunidad INCA EDUCA." },
      { property: "og:url", content: "/galeria" },
    ],
    links: [{ rel: "canonical", href: "/galeria" }],
  }),
  component: GaleriaPage,
});

const items = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  category: ["Campus", "Laboratorios", "Eventos", "Egresados"][i % 4],
}));

function GaleriaPage() {
  const [filter, setFilter] = useState("Todos");
  const filtered = filter === "Todos" ? items : items.filter((i) => i.category === filter);

  return (
    <>
      <PageHeader eyebrow="Vida INCA" title="Galería" description="Momentos capturados de nuestra comunidad educativa." />
      <section className="container-page py-16">
        <div className="flex flex-wrap gap-2 mb-10">
          {["Todos", "Campus", "Laboratorios", "Eventos", "Egresados"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest transition ${
                filter === f ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-accent"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((it, i) => (
            <div
              key={it.id}
              className="aspect-square rounded-xl bg-gradient-to-br from-primary-soft via-accent to-surface-2 border border-border grid place-items-center text-xs font-bold uppercase tracking-widest text-muted-foreground hover:scale-[1.02] transition cursor-pointer"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              {it.category}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
