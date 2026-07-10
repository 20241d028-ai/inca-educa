import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { GraduationCap, CreditCard, FileText, Calendar, BookOpen, User } from "lucide-react";

export const Route = createFileRoute("/portal")({
  head: () => ({
    meta: [
      { title: "Portal del Estudiante — INCA EDUCA" },
      { name: "description", content: "Accede a tu portal académico: notas, horarios, pagos, constancias y más." },
      { property: "og:title", content: "Portal del Estudiante — INCA EDUCA" },
      { property: "og:description", content: "Gestiona tu vida académica en línea." },
      { property: "og:url", content: "/portal" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/portal" }],
  }),
  component: PortalPage,
});

const services = [
  { icon: BookOpen, title: "Notas y calificaciones", desc: "Consulta tu progreso académico en tiempo real." },
  { icon: Calendar, title: "Horarios", desc: "Revisa tu horario semanal y actualizaciones." },
  { icon: CreditCard, title: "Pagos y estado de cuenta", desc: "Realiza pagos y descarga comprobantes." },
  { icon: FileText, title: "Constancias y certificados", desc: "Solicita documentos oficiales." },
  { icon: User, title: "Datos personales", desc: "Actualiza tu información de contacto." },
  { icon: GraduationCap, title: "Bolsa laboral", desc: "Postula a vacantes exclusivas." },
];

function PortalPage() {
  return (
    <>
      <PageHeader eyebrow="Área privada" title="Portal del Estudiante" description="Todos tus servicios académicos en un solo lugar." />
      <section className="container-page py-20 grid lg:grid-cols-2 gap-12 items-start">
        <div className="rounded-2xl border border-border bg-card p-8">
          <h2 className="text-2xl font-extrabold mb-6">Iniciar sesión</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="user" className="block text-sm font-semibold mb-2">Usuario o código</label>
              <input id="user" className="w-full h-11 px-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/40" />
            </div>
            <div>
              <label htmlFor="pass" className="block text-sm font-semibold mb-2">Contraseña</label>
              <input id="pass" type="password" className="w-full h-11 px-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/40" />
            </div>
            <button className="w-full py-3 rounded-full bg-primary text-primary-foreground text-sm font-bold hover:brightness-110">Ingresar</button>
            <a href="#" className="block text-sm text-primary text-center hover:underline">¿Olvidaste tu contraseña?</a>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-extrabold mb-6">Servicios disponibles</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {services.map((s) => (
              <div key={s.title} className="rounded-xl border border-border bg-card p-5">
                <s.icon className="h-5 w-5 text-primary mb-3" />
                <p className="font-bold">{s.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
