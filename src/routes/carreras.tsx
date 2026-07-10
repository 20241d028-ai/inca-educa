import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { careers } from "@/lib/site-data";

export const Route = createFileRoute("/carreras")({
  head: () => ({
    meta: [
      { title: "Carreras Técnicas — INCA EDUCA" },
      { name: "description", content: "Explora todas las carreras técnico-productivas de INCA EDUCA en Cusco: gastronomía, tecnología, salud, turismo, mecánica y más." },
      { property: "og:title", content: "Carreras Técnicas — INCA EDUCA" },
      { property: "og:description", content: "Todas nuestras carreras técnico-productivas." },
      { property: "og:url", content: "/carreras" },
    ],
    links: [{ rel: "canonical", href: "/carreras" }],
  }),
  component: CarrerasPage,
});

const categories = ["Todas", "Gastronomía", "Turismo y Hotelería", "Estética y Belleza", "Administración y Negocios", "Tecnología"];

function CarrerasPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("Todas");

  const filtered = useMemo(() => {
    return careers.filter((c) => {
      const matchCat = cat === "Todas" || c.category === cat;
      const matchQ = !q || c.title.toLowerCase().includes(q.toLowerCase());
      return matchCat && matchQ;
    });
  }, [q, cat]);

  return (
    <>
      <PageHeader
        eyebrow="Oferta educativa"
        title="Carreras Técnico-Productivas"
        description="Programas diseñados para responder a las necesidades reales del mercado laboral, con docentes de experiencia industrial y prácticas garantizadas."
      />

      <section className="container-page py-12">
        <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between mb-10">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Buscar carrera..."
              className="w-full h-12 pl-11 pr-4 rounded-full border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              aria-label="Buscar carrera"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest transition ${
                  cat === c ? "bg-primary text-primary-foreground" : "bg-muted text-ink-soft hover:bg-accent"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-24 text-muted-foreground">
            <p>No se encontraron carreras con esos filtros.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((c, i) => (
              <motion.div
                key={c.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
              >
                <Link
                  to="/carreras/$slug"
                  params={{ slug: c.slug }}
                  className="group block bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/25 hover:shadow-elevated transition-all"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-muted">
                    <img src={c.image} alt={c.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <div className="flex gap-2 mb-3">
                      <span className="rounded-md bg-primary-soft text-primary px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest">{c.duration}</span>
                      <span className="rounded-md bg-accent text-accent-foreground px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest">{c.category}</span>
                    </div>
                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{c.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{c.summary}</p>
                    <p className="mt-5 text-sm font-bold text-primary inline-flex items-center gap-1">
                      Ver detalle <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
