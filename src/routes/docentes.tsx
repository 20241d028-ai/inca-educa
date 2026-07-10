import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { teachers } from "@/lib/site-data";

export const Route = createFileRoute("/docentes")({
  head: () => ({
    meta: [
      { title: "Docentes — INCA EDUCA" },
      { name: "description", content: "Conoce a nuestro equipo docente: profesionales con experiencia industrial y compromiso educativo." },
      { property: "og:title", content: "Docentes — INCA EDUCA" },
      { property: "og:description", content: "Nuestro equipo docente." },
      { property: "og:url", content: "/docentes" },
    ],
    links: [{ rel: "canonical", href: "/docentes" }],
  }),
  component: DocentesPage,
});

function DocentesPage() {
  return (
    <>
      <PageHeader eyebrow="Nuestro equipo" title="Docentes" description="Profesionales con trayectoria industrial y vocación por la enseñanza." />
      <section className="container-page py-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teachers.map((t) => (
          <div key={t.name} className="rounded-2xl border border-border bg-card p-6 text-center">
            <div className="mx-auto size-24 rounded-full bg-gradient-to-br from-primary-soft to-accent grid place-items-center text-2xl font-black text-primary">
              {t.name.split(" ").map((s) => s[0]).slice(0, 2).join("")}
            </div>
            <h3 className="mt-5 font-bold">{t.name}</h3>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mt-1">{t.role}</p>
            <p className="mt-3 text-sm text-muted-foreground">{t.specialty}</p>
            <p className="mt-2 text-xs text-muted-foreground">{t.years} años de experiencia</p>
          </div>
        ))}
      </section>
    </>
  );
}
