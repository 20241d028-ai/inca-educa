import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { careers } from "@/lib/site-data";

export const Route = createFileRoute("/admision")({
  head: () => ({
    meta: [
      { title: "Admisión 2024 — INCA EDUCA" },
      { name: "description", content: "Requisitos y formulario de admisión online de INCA EDUCA Cusco." },
      { property: "og:title", content: "Admisión 2024 — INCA EDUCA" },
      { property: "og:description", content: "Postula a nuestras carreras técnicas. Inscripción online." },
      { property: "og:url", content: "/admision" },
    ],
    links: [{ rel: "canonical", href: "/admision" }],
  }),
  component: AdmisionPage,
});

const requirements = [
  "DNI vigente (original y copia)",
  "Certificado de estudios secundarios",
  "2 fotos tamaño carnet a color",
  "Recibo de pago del derecho de admisión",
];

function AdmisionPage() {
  return (
    <section className="bg-surface-2">
      <div className="container-page py-12 lg:py-16 grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <div className="order-2 lg:order-1">
          <p className="eyebrow">Admisión 2024-II</p>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-balance">
            Inicia tu proceso de inscripción hoy.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground text-pretty">
            Formar parte de INCA EDUCA es simple. Completa el formulario y un asesor te contactará para guiarte en el proceso.
          </p>

          <div className="mt-10 rounded-2xl border border-border bg-card p-6">
            <p className="eyebrow">Documentación</p>
            <h2 className="mt-2 text-xl font-extrabold tracking-tight">Requisitos</h2>
            <ul className="mt-5 space-y-3">
              {requirements.map((r) => (
                <li key={r} className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Formulario anclado (sticky) — visible desde el inicio, junto al título */}
        <div className="order-1 lg:order-2 lg:sticky lg:top-28 lg:self-start">
          <AdmisionForm />
        </div>
      </div>
    </section>
  );
}

function AdmisionForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-2xl border border-primary/30 bg-primary-soft p-8 text-center">
        <CheckCircle2 className="h-10 w-10 text-primary mx-auto mb-4" />
        <p className="font-bold text-primary">¡Solicitud enviada!</p>
        <p className="mt-2 text-sm text-primary/80">Un asesor te contactará muy pronto por celular.</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-card shadow-elevated p-6 sm:p-7">
      <p className="eyebrow">Postula ahora</p>
      <h2 className="mt-2 text-xl font-extrabold tracking-tight">Solicita información</h2>
      <p className="mt-1.5 text-sm text-muted-foreground">Déjanos tus datos y te contactamos en minutos.</p>

      <form
        className="mt-6 space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
      >
        <Field label="Nombre y apellido" name="nombre" required />
        <Field label="DNI" name="dni" required inputMode="numeric" maxLength={8} pattern="[0-9]{8}" />
        <Field label="Celular" name="celular" required inputMode="numeric" maxLength={9} pattern="[0-9]{9}" />
        <div>
          <label htmlFor="carrera" className="block text-sm font-semibold mb-1.5">
            Carrera de interés<span className="text-destructive"> *</span>
          </label>
          <select
            id="carrera"
            name="carrera"
            required
            defaultValue=""
            className="w-full h-12 rounded-lg border border-border bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
          >
            <option value="" disabled>Elige una carrera</option>
            {careers.map((c) => (
              <option key={c.slug} value={c.title}>{c.title}</option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full inline-flex justify-center items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground hover:brightness-110 transition"
        >
          Quiero más información <Send className="h-4 w-4" />
        </button>
        <p className="text-center text-[11px] text-muted-foreground">Sin compromiso. Respetamos tu privacidad.</p>
      </form>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  inputMode,
  maxLength,
  pattern,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  inputMode?: "numeric" | "tel" | "text";
  maxLength?: number;
  pattern?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold mb-1.5">
        {label}
        {required && <span className="text-destructive"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        inputMode={inputMode}
        maxLength={maxLength}
        pattern={pattern}
        className="w-full h-12 rounded-lg border border-border bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
      />
    </div>
  );
}