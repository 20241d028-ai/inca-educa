import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Clock, MapPin, CheckCircle2, Briefcase, MessageCircle } from "lucide-react";
import { careers, type Career } from "@/lib/site-data";

export const Route = createFileRoute("/carreras/$slug")({
  loader: ({ params }): Career => {
    const career = careers.find((c) => c.slug === params.slug);
    if (!career) throw notFound();
    return career;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — INCA EDUCA` },
          { name: "description", content: loaderData.summary },
          { property: "og:title", content: `${loaderData.title} — INCA EDUCA` },
          { property: "og:description", content: loaderData.summary },
          { property: "og:image", content: loaderData.image },
          { property: "og:type", content: "article" },
          { property: "og:url", content: `/carreras/${loaderData.slug}` },
        ]
      : [{ title: "Carrera no encontrada" }, { name: "robots", content: "noindex" }],
    links: loaderData ? [{ rel: "canonical", href: `/carreras/${loaderData.slug}` }] : [],
  }),
  component: CareerDetail,
  notFoundComponent: () => (
    <div className="container-page py-24 text-center">
      <h1 className="text-3xl font-extrabold">Carrera no encontrada</h1>
      <Link to="/carreras" className="mt-6 inline-flex items-center gap-2 text-primary font-bold">
        <ArrowLeft className="h-4 w-4" /> Ver todas las carreras
      </Link>
    </div>
  ),
});

function CareerDetail() {
  const c = Route.useLoaderData() as Career;

  return (
    <>
      <div className="bg-surface-2 border-b border-border">
        <div className="container-page py-10">
          <Link to="/carreras" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> Todas las carreras
          </Link>
          <div className="mt-8 grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <p className="eyebrow">{c.category}</p>
              <h1 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight text-balance">{c.title}</h1>
              <p className="mt-5 text-lg text-muted-foreground text-pretty">{c.description}</p>
              <div className="mt-8 flex flex-wrap gap-4 text-sm">
                <span className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-4 py-2"><Clock className="h-4 w-4 text-primary" /> {c.duration}</span>
                <span className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-4 py-2"><MapPin className="h-4 w-4 text-primary" /> {c.modality}</span>
              </div>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link to="/admision" className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground hover:brightness-110">Inscribirme</Link>
                <a href="https://wa.me/51984000000" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-bold hover:bg-muted">
                  <MessageCircle className="h-4 w-4" /> Consultar por WhatsApp
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <img src={c.image} alt={c.title} className="w-full aspect-[4/5] object-cover rounded-2xl border border-border" loading="lazy" />
            </div>
          </div>
        </div>
      </div>

      <section className="container-page py-20 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight mb-6">Perfil de ingreso</h2>
          <ul className="space-y-3">
            {c.perfilIngreso.map((p) => (
              <li key={p} className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" /><span>{p}</span></li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight mb-6">Perfil de egreso</h2>
          <ul className="space-y-3">
            {c.perfilEgreso.map((p) => (
              <li key={p} className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" /><span>{p}</span></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-surface-2 border-y border-border py-20">
        <div className="container-page">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-10">Malla curricular</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {c.malla.map((m) => (
              <div key={m.ciclo} className="rounded-2xl bg-card border border-border p-6">
                <p className="text-[11px] font-bold uppercase tracking-widest text-primary">{m.ciclo}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {m.cursos.map((cu) => <li key={cu} className="text-muted-foreground">{cu}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-10 flex items-center gap-3"><Briefcase className="h-6 w-6 text-primary" /> Campo laboral</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {c.campoLaboral.map((cl) => (
            <div key={cl} className="rounded-xl border border-border p-5 bg-card">{cl}</div>
          ))}
        </div>
      </section>
    </>
  );
}
