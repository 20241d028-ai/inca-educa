import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";

const nav: Array<{ label: string; to: string; hasMenu?: boolean }> = [
  { label: "Nosotros", to: "/nosotros" },
  { label: "Carreras", to: "/carreras", hasMenu: true },
  { label: "Admisión", to: "/admision" },
  // { label: "Cursos Cortos", to: "/cursos" },
  { label: "Noticias", to: "/noticias" },
  { label: "Contacto", to: "/contacto" },
];

const careerMenu = [
  { label: "Gastronomía Internacional", to: "/carreras/gastronomia-internacional" },
  { label: "Panadería y Pastelería Industrial", to: "/carreras/panaderia-pasteleria-industrial" },
  { label: "Hostelería y Turismo", to: "/carreras/hosteleria-turismo" },
  { label: "Cosmetología y Estética Personal", to: "/carreras/cosmetologia-estetica-personal" },
  { label: "Asistente Administrativo, Logística y Almacén", to: "/carreras/asistente-administrativo-logistica-almacen" },
  { label: "Operador de Computadoras", to: "/carreras/operador-de-computadoras" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:block bg-secondary text-secondary-foreground text-xs">
        <div className="container-page flex h-9 items-center justify-between">
          <div className="flex gap-5 opacity-90">
            <span>Cusco, Perú</span>
            <span>Admisión 2024-II abierta</span>
          </div>
          <div className="flex gap-5">
            <a href="https://plataforma.incaeduca.edu.pe/" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100">Plataforma Virtual</a>
            <Link to="/portal" className="opacity-80 hover:opacity-100">Portal del Estudiante</Link>
            <Link to="/transparencia" className="opacity-80 hover:opacity-100">Transparencia</Link>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 w-full border-b transition-all ${
          scrolled ? "bg-background/85 backdrop-blur-md border-border" : "bg-background/70 backdrop-blur-sm border-transparent"
        }`}
      >
        <div className="container-page flex h-16 items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-2.5 shrink-0" aria-label="INCA EDUCA">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground font-bold text-sm">IE</span>
            <span className="flex flex-col leading-none">
              <span className="text-base font-bold tracking-tight text-secondary">INCA EDUCA</span>
              <span className="text-[10px] font-medium tracking-[0.18em] text-muted-foreground uppercase">CETPRO · Cusco</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1 text-sm">
            {nav.map((item) => (
              <div key={item.to} className="relative group">
                <Link
                  to={item.to}
                  className="px-3 py-2 rounded-md font-medium text-ink-soft hover:text-primary hover:bg-muted transition-colors inline-flex items-center gap-1"
                  activeProps={{ className: "text-primary" }}
                >
                  {item.label}
                  {item.hasMenu && <ChevronDown className="h-3.5 w-3.5 opacity-60" />}
                </Link>
                {item.hasMenu && (
                  <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    <div className="w-72 rounded-xl bg-card border border-border shadow-elevated p-2">
                      {careerMenu.map((c) => (
                        <Link key={c.to} to={c.to} className="block px-3 py-2 rounded-lg text-sm hover:bg-muted">
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button aria-label="Buscar" className="hidden md:grid h-9 w-9 place-items-center rounded-md text-ink-soft hover:bg-muted">
              <Search className="h-4 w-4" />
            </button>
            <Link
              to="/admision"
              className="hidden sm:inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-soft hover:brightness-110 transition"
            >
              Postular ahora
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden grid h-9 w-9 place-items-center rounded-md hover:bg-muted"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden border-t border-border bg-background">
            <div className="container-page py-4 flex flex-col gap-1">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 rounded-md text-sm font-medium hover:bg-muted"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/admision"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex justify-center items-center rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
              >
                Postular ahora
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
