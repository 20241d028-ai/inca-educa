import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Preguntas Frecuentes — INCA EDUCA" },
      { name: "description", content: "Respuestas a las preguntas más comunes sobre admisión, carreras, cursos y pagos en INCA EDUCA." },
      { property: "og:title", content: "Preguntas Frecuentes — INCA EDUCA" },
      { property: "og:description", content: "Respuestas rápidas para postulantes y estudiantes." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    }],
  }),
  component: FaqPage,
});

const faqs = [
  { q: "¿Cuándo empieza el próximo ciclo académico?", a: "El ciclo 2024-II inicia el 5 de agosto de 2024. Las inscripciones cierran una semana antes." },
  { q: "¿Los títulos son reconocidos por el Minedu?", a: "Sí. INCA EDUCA es un CETPRO licenciado y todos nuestros títulos técnicos son oficiales." },
  { q: "¿Hay opciones de pago fraccionado?", a: "Sí, ofrecemos hasta 5 cuotas mensuales sin intereses y planes de beca." },
  { q: "¿Ofrecen becas?", a: "Contamos con becas por excelencia académica, convenios corporativos y programa Pronabec." },
  { q: "¿Puedo estudiar mientras trabajo?", a: "Sí, varias carreras ofrecen modalidades semipresencial y horarios de noche." },
  { q: "¿Cómo funciona la bolsa laboral?", a: "Los estudiantes acceden a un portal con vacantes exclusivas de +30 empresas aliadas." },
];

function FaqPage() {
  const [open, setOpen] = useState<number | null>(0);
  const [q, setQ] = useState("");
  const filtered = faqs.filter((f) => f.q.toLowerCase().includes(q.toLowerCase()));

  return (
    <>
      <PageHeader eyebrow="Ayuda" title="Preguntas frecuentes" description="Encuentra respuestas rápidas sobre nuestros programas y procesos." />
      <section className="container-page py-16 max-w-3xl">
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buscar pregunta..." className="w-full h-12 pl-11 pr-4 rounded-full border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/40" />
        </div>
        <div className="divide-y divide-border rounded-2xl border border-border bg-card">
          {filtered.map((f, i) => (
            <div key={f.q}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
                aria-expanded={open === i}
              >
                <span className="font-semibold">{f.q}</span>
                <ChevronDown className={`h-4 w-4 shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && <div className="px-5 pb-5 text-muted-foreground text-pretty">{f.a}</div>}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
