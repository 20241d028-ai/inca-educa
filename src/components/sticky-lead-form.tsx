import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowRight, CalendarClock, MapPin, X, GraduationCap } from "lucide-react";

interface CareerOption {
  slug: string;
  title: string;
}

interface StickyLeadFormProps {
  careers: CareerOption[];
  startId: string;
  endId: string;
}

/**
 * Formulario de captación — SOLO MAQUETA de prototipo (sin backend).
 * Al enviar, arma el mensaje y abre WhatsApp con los datos precargados,
 * usando el mismo canal de contacto real de la institución.
 */
export function StickyLeadForm({ careers, startId, endId }: StickyLeadFormProps) {
  const [visible, setVisible] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const pastStart = useRef(false);
  const beforeEnd = useRef(true);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [career, setCareer] = useState(careers[0]?.title ?? "");

  useEffect(() => {
    const startEl = document.getElementById(startId);
    const endEl = document.getElementById(endId);
    if (!startEl || !endEl) return;

    const update = () => setVisible(pastStart.current && beforeEnd.current);

    const startObserver = new IntersectionObserver(
      ([entry]) => {
        pastStart.current = entry.boundingClientRect.top < 0;
        update();
      },
      { threshold: 0 }
    );
    const endObserver = new IntersectionObserver(
      ([entry]) => {
        beforeEnd.current = entry.boundingClientRect.top > 0;
        update();
      },
      { threshold: 0 }
    );

    startObserver.observe(startEl);
    endObserver.observe(endEl);
    return () => {
      startObserver.disconnect();
      endObserver.disconnect();
    };
  }, [startId, endId]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const text =
      `Hola INCA EDUCA, quiero información.%0A` +
      `Nombre: ${encodeURIComponent(name)}%0A` +
      `Celular: ${encodeURIComponent(phone)}%0A` +
      `Carrera de interés: ${encodeURIComponent(career)}`;
    window.open(`https://wa.me/51984000000?text=${text}`, "_blank", "noopener,noreferrer");
  }

  if (!visible) return null;

  // Colapsado: se apila junto a los botones flotantes de WhatsApp / chat, arriba del WhatsApp
  if (collapsed) {
    return (
      <button
        onClick={() => setCollapsed(false)}
        aria-label="Mostrar formulario de admisión"
        className="hidden lg:inline-flex fixed bottom-40 right-6 z-30 items-center gap-2 rounded-full bg-primary px-4 py-3 text-primary-foreground font-semibold shadow-glow hover:brightness-110 transition"
      >
        <GraduationCap className="h-5 w-5" />
        <span className="text-sm">Info admisión</span>
      </button>
    );
  }

  return (
    <aside className="hidden lg:block fixed right-8 top-28 z-30 w-[340px] transition-all duration-500 ease-out opacity-100 translate-x-0">
      <form onSubmit={handleSubmit} className="relative rounded-2xl border border-border bg-card shadow-elevated p-6">
        <button
          type="button"
          onClick={() => setCollapsed(true)}
          aria-label="Ocultar formulario"
          className="absolute top-4 right-4 grid size-7 place-items-center rounded-full text-muted-foreground hover:bg-muted transition"
        >
          <X className="h-4 w-4" />
        </button>

        <p className="text-[11px] font-bold uppercase tracking-widest text-primary pr-6">Admisión 2024-II</p>
        <h3 className="mt-1 text-lg font-extrabold tracking-tight pr-6">Quiero más información</h3>
        <p className="mt-1 text-xs text-muted-foreground">Te contactamos por WhatsApp en menos de 24h.</p>

        <div className="mt-5 space-y-3">
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nombre completo"
            className="h-11 w-full rounded-xl border border-input bg-background px-4 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
          <input
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Celular / WhatsApp"
            type="tel"
            className="h-11 w-full rounded-xl border border-input bg-background px-4 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
          <select
            value={career}
            onChange={(e) => setCareer(e.target.value)}
            className="h-11 w-full rounded-xl border border-input bg-background px-4 text-sm outline-none focus:ring-2 focus:ring-ring"
          >
            {careers.map((c) => (
              <option key={c.slug} value={c.title}>
                {c.title}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground hover:brightness-110 transition"
        >
          Quiero que me contacten <ArrowRight className="h-4 w-4" />
        </button>

        <div className="mt-5 space-y-2 border-t border-border pt-4 text-xs text-muted-foreground">
          <p className="flex items-center gap-2">
            <CalendarClock className="h-3.5 w-3.5 text-primary shrink-0" /> Próxima charla informativa: 15 de junio
          </p>
          <p className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-primary shrink-0" /> Sede San Sebastián, Cusco
          </p>
        </div>
      </form>
    </aside>
  );
}