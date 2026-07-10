import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { MapPin, Phone, Mail, Facebook, Youtube } from "lucide-react";
import { useState } from "react";
import { contactInfo } from "@/lib/site-data";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — INCA EDUCA" },
      { name: "description", content: "Contáctanos: teléfono, correo, ubicación en Cusco y formulario de mensajes." },
      { property: "og:title", content: "Contacto — INCA EDUCA" },
      { property: "og:description", content: "Estamos para atenderte." },
      { property: "og:url", content: "/contacto" },
    ],
    links: [{ rel: "canonical", href: "/contacto" }],
  }),
  component: ContactoPage,
});

function ContactoPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHeader eyebrow="Estamos para atenderte" title="Contáctanos" description="Escríbenos y nuestro equipo te responderá a la brevedad." />
      <section className="container-page py-20 grid lg:grid-cols-2 gap-12">
        <div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: MapPin, label: "Dirección", value: contactInfo.address },
              { icon: Phone, label: "Teléfono", value: contactInfo.phone },
              { icon: Mail, label: "Correo", value: contactInfo.email },
            ].map((c) => (
              <div key={c.label} className="rounded-2xl border border-border bg-card p-5">
                <c.icon className="h-5 w-5 text-primary mb-3" />
                <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">{c.label}</p>
                <p className="mt-1 font-semibold">{c.value}</p>
              </div>
            ))}
            <div className="rounded-2xl border border-border bg-card p-5">
              <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-3">Síguenos</p>
              <div className="flex gap-2">
                <a href={contactInfo.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="grid size-9 place-items-center rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href={contactInfo.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="grid size-9 place-items-center rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition">
                  <Youtube className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-6 aspect-video rounded-2xl overflow-hidden border border-border">
            <iframe
              title="Ubicación INCA EDUCA"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-71.99%2C-13.53%2C-71.94%2C-13.51&layer=mapnik"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
        <form
          className="rounded-2xl border border-border bg-card p-8 space-y-5"
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
        >
          <h2 className="text-2xl font-extrabold tracking-tight">Envíanos un mensaje</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <input required placeholder="Nombre" className="h-11 px-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/40" />
            <input required placeholder="Correo" type="email" className="h-11 px-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/40" />
          </div>
          <input placeholder="Asunto" className="h-11 w-full px-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/40" />
          <textarea rows={5} required placeholder="Mensaje" className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/40" />
          <button className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground hover:brightness-110">Enviar mensaje</button>
          {sent && <p className="rounded-lg bg-primary-soft text-primary p-3 text-sm font-semibold">Mensaje enviado. ¡Gracias!</p>}
        </form>
      </section>
    </>
  );
}
