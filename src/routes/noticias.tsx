import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { news } from "@/lib/site-data";
import { Calendar, User } from "lucide-react";

export const Route = createFileRoute("/noticias")({
  head: () => ({
    meta: [
      { title: "Noticias — INCA EDUCA" },
      { name: "description", content: "Novedades, comunicados y logros de la comunidad INCA EDUCA en Cusco." },
      { property: "og:title", content: "Noticias — INCA EDUCA" },
      { property: "og:description", content: "Últimas noticias institucionales y académicas." },
      { property: "og:url", content: "/noticias" },
    ],
    links: [{ rel: "canonical", href: "/noticias" }],
  }),
  component: NoticiasPage,
});

function NoticiasPage() {
  return (
    <>
      <PageHeader eyebrow="Comunicaciones" title="Noticias y novedades" description="Mantente al tanto de los logros, eventos y comunicados de nuestra comunidad." />
      <section className="container-page py-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {news.map((n) => (
          <article key={n.slug} className="group cursor-pointer">
            <div className="aspect-[4/3] rounded-2xl bg-surface-2 border border-border overflow-hidden mb-5 grid place-items-center text-muted-foreground text-xs uppercase tracking-widest">
              {n.category}
            </div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-primary">{n.category}</p>
            <h2 className="mt-2 text-xl font-extrabold leading-snug group-hover:text-primary transition-colors">{n.title}</h2>
            <p className="mt-3 text-muted-foreground text-sm">{n.excerpt}</p>
            <p className="mt-4 text-xs text-muted-foreground flex items-center gap-4">
              <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" />{new Date(n.date).toLocaleDateString("es-PE", { day: "numeric", month: "long", year: "numeric" })}</span>
              <span className="inline-flex items-center gap-1"><User className="h-3 w-3" />{n.author}</span>
            </p>
          </article>
        ))}
      </section>
    </>
  );
}
