import { createFileRoute, Link } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Award, Users, Briefcase, GraduationCap, Sparkles, Calendar, Quote, CheckCircle2 } from "lucide-react";
import heroImg from "@/assets/hero-dark-bg.webp";
import { careers, stats, events, news, partnerSectors, testimonials } from "@/lib/site-data";

const RubikCube = lazy(() => import("@/components/rubik-cube"));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "INCA EDUCA · CETPRO Cusco — Educación técnica que transforma" },
      {
        name: "description",
        content:
          "Formación técnico-productiva en Cusco. 15 carreras, 25+ años de trayectoria y 92% de inserción laboral. Admisión 2024-II abierta.",
      },
      { property: "og:title", content: "INCA EDUCA · CETPRO Cusco" },
      { property: "og:description", content: "Educación técnica que transforma vidas en Cusco." },
      { property: "og:url", content: "/" },
    ],
  }),
  component: HomePage,
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt=""
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/50" />
        </div>

        <div className="container-page relative py-24 md:py-32 lg:py-40 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-widest backdrop-blur">
              <span className="size-1.5 rounded-full bg-primary animate-pulse" />
              CETPRO Cusco · Licenciado
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-balance">
              Pensamiento técnico, precisión y resolución de problemas.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80 text-pretty">
              Así como cada movimiento en un cubo Rubik acerca a la solución, en INCA EDUCA formamos técnicos que piensan
              con método: análisis, práctica constante y mejora continua en cada carrera.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/admision"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-lg shadow-black/20 hover:brightness-110 transition"
              >
                Postular ahora <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/carreras"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-bold backdrop-blur hover:bg-white/15 transition"
              >
                Conoce nuestras carreras
              </Link>
            </div>
          </motion.div>

          <div className="hidden lg:flex justify-center">
            <Suspense fallback={<div className="w-[420px] h-[420px] rounded-xl bg-white/5 animate-pulse" />}>
              <RubikCube width={420} height={420} />
            </Suspense>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-background border-b border-border">
        <div className="container-page py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <p className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight">{s.value}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="container-page py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="eyebrow">Por qué INCA EDUCA</p>
            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-balance">
              Educación técnica pensada para el mercado laboral real.
            </h2>
            <p className="mt-6 max-w-lg text-muted-foreground text-pretty">
              Nuestros programas combinan práctica intensiva, docentes con experiencia industrial y alianzas con empresas líderes de la región.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: Award, title: "Certificación oficial", desc: "Títulos técnicos reconocidos por Minedu." },
              { icon: Briefcase, title: "Bolsa de trabajo", desc: "Acceso directo a vacantes de +30 empresas aliadas." },
              { icon: GraduationCap, title: "Docentes industriales", desc: "Profesionales con experiencia comprobada." },
              { icon: Sparkles, title: "Infraestructura moderna", desc: "Laboratorios equipados con tecnología actual." },
            ].map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl bg-card border border-border p-6 hover:shadow-elevated hover:border-primary/20 transition-all"
              >
                <div className="grid size-11 place-items-center rounded-xl bg-primary-soft text-primary mb-4">
                  <b.icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold">{b.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED CAREERS */}
      <section className="bg-surface-2 border-y border-border py-24">
        <div className="container-page">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-xl">
              <p className="eyebrow">Nuestra oferta educativa</p>
              <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight">Carreras técnico-productivas</h2>
            </div>
            <Link to="/carreras" className="inline-flex items-center gap-2 text-primary font-bold hover:underline underline-offset-4">
              Ver todas <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careers.slice(0, 6).map((c, i) => (
              <motion.div
                key={c.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              >
                <Link
                  to="/carreras/$slug"
                  params={{ slug: c.slug }}
                  className="group block bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/25 hover:shadow-elevated transition-all"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-muted">
                    <img
                      src={c.image}
                      alt={c.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex gap-2 mb-3">
                      <span className="rounded-md bg-primary-soft text-primary px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest">{c.duration}</span>
                      <span className="rounded-md bg-accent text-accent-foreground px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest">{c.modality}</span>
                    </div>
                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{c.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{c.summary}</p>
                    <p className="mt-5 text-sm font-bold text-primary inline-flex items-center gap-1">
                      Ver malla curricular <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS + NEWS */}
      <section className="container-page py-24 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <p className="eyebrow">Próximos eventos</p>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight mb-10">Agenda institucional</h2>
          <div className="divide-y divide-border rounded-2xl border border-border bg-card">
            {events.map((e) => (
              <div key={e.title} className="flex items-center gap-6 p-6 hover:bg-muted/50 transition-colors">
                <div className="grid size-16 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary text-center">
                  <div>
                    <div className="text-lg font-extrabold leading-none">{e.day}</div>
                    <div className="text-[10px] font-bold uppercase mt-1">{e.month}</div>
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-bold truncate">{e.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1 flex items-center gap-2">
                    <Calendar className="h-3.5 w-3.5" /> {e.location} · {e.time}
                  </p>
                </div>
                <ArrowRight className="hidden sm:block h-4 w-4 text-muted-foreground" />
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="eyebrow">Últimas noticias</p>
          <h3 className="mt-4 text-2xl font-extrabold tracking-tight mb-8">Comunicaciones</h3>
          <div className="space-y-6">
            {news.map((n) => (
              <article key={n.slug} className="group cursor-pointer">
                <p className="text-[10px] font-bold uppercase tracking-widest text-primary">{n.category}</p>
                <h4 className="mt-2 font-bold leading-snug group-hover:text-primary transition-colors">{n.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{n.excerpt}</p>
                <p className="mt-2 text-xs text-muted-foreground">
                  {new Date(n.date).toLocaleDateString("es-PE", { day: "numeric", month: "long", year: "numeric" })} · {n.author}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-ink text-white py-24">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-widest text-primary">Voces de nuestra comunidad</p>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight">Historias que inspiran</h2>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.blockquote
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl bg-white/5 border border-white/10 p-8 backdrop-blur"
              >
                <Quote className="h-6 w-6 text-primary mb-4" />
                <p className="text-white/90 text-pretty">{t.quote}</p>
                <footer className="mt-6">
                  <p className="font-bold">{t.name}</p>
                  <p className="text-xs text-white/60">{t.career}</p>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORES DONDE SE INSERTAN NUESTROS EGRESADOS */}
      <section className="container-page py-16 border-b border-border">
        <p className="text-center text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-10">Nuestros egresados se insertan en</p>
        <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-3">
          {partnerSectors.map((p) => (
            <span key={p} className="rounded-full border border-border bg-surface-2 px-4 py-2 text-sm font-semibold text-ink-soft">{p}</span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-24">
        <div className="relative overflow-hidden rounded-3xl bg-primary p-12 md:p-20 text-primary-foreground text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary opacity-90" />
          <div className="relative max-w-2xl mx-auto">
            <Users className="mx-auto h-10 w-10 text-white/80 mb-6" />
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-balance">
              ¿Listo para transformar tu futuro?
            </h2>
            <p className="mt-5 text-white/80 text-pretty">
              Únete a la institución técnica líder en Cusco. Las inscripciones para el próximo ciclo académico están abiertas.
            </p>
            <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
              {["Becas hasta 50%", "Cuotas flexibles", "Inicio inmediato"].map((f) => (
                <li key={f} className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> {f}</li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                to="/admision"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-secondary hover:bg-white/90 transition"
              >
                Iniciar inscripción online <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contacto"
                className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-bold backdrop-blur hover:bg-white/20 transition"
              >
                Hablar con un asesor
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}