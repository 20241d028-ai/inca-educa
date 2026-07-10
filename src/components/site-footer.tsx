import { Link } from "@tanstack/react-router";
import { Facebook, Youtube, MapPin, Phone, Mail } from "lucide-react";
import { contactInfo } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white mt-24">
      <div className="container-page py-20 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
        <div className="col-span-2">
          <div className="flex items-center gap-2.5 mb-5">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground font-bold text-sm">IE</span>
            <span className="flex flex-col leading-none">
              <span className="text-lg font-bold tracking-tight">INCA EDUCA</span>
              <span className="text-[10px] font-medium tracking-[0.18em] uppercase opacity-70">CETPRO · Cusco</span>
            </span>
          </div>
          <p className="max-w-sm text-sm/relaxed opacity-70 mb-6">
            Centro de Educación Técnico-Productiva que, desde 2002, brinda formación técnico-productiva de calidad para la inserción laboral y el emprendimiento de jóvenes y adultos en Cusco.
          </p>
          <div className="flex gap-3">
            <a href={contactInfo.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="grid size-9 place-items-center rounded-full bg-white/5 border border-white/10 hover:bg-primary hover:border-primary transition">
              <Facebook className="h-4 w-4" />
            </a>
            <a href={contactInfo.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="grid size-9 place-items-center rounded-full bg-white/5 border border-white/10 hover:bg-primary hover:border-primary transition">
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] mb-5 opacity-90">Institución</h4>
          <ul className="space-y-3 text-sm opacity-70">
            <li><Link to="/nosotros" className="hover:opacity-100 hover:text-primary">Sobre nosotros</Link></li>
            <li><Link to="/docentes" className="hover:opacity-100 hover:text-primary">Docentes</Link></li>
            <li><Link to="/galeria" className="hover:opacity-100 hover:text-primary">Galería</Link></li>
            <li><Link to="/transparencia" className="hover:opacity-100 hover:text-primary">Transparencia</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] mb-5 opacity-90">Académico</h4>
          <ul className="space-y-3 text-sm opacity-70">
            <li><Link to="/carreras" className="hover:opacity-100 hover:text-primary">Carreras</Link></li>
            {/* <li><Link to="/cursos" className="hover:opacity-100 hover:text-primary">Cursos cortos</Link></li> */}
            <li><Link to="/admision" className="hover:opacity-100 hover:text-primary">Admisión</Link></li>
            <li><Link to="/bolsa-laboral" className="hover:opacity-100 hover:text-primary">Bolsa laboral</Link></li>
            <li><a href={contactInfo.platform} target="_blank" rel="noopener noreferrer" className="hover:opacity-100 hover:text-primary">Plataforma virtual</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] mb-5 opacity-90">Contacto</h4>
          <ul className="space-y-3 text-sm opacity-70">
            <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 mt-0.5" />{contactInfo.address}</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 mt-0.5" />{contactInfo.phone}</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0 mt-0.5" />{contactInfo.email}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-[11px] font-medium uppercase tracking-[0.15em] opacity-50">
          <p>© {new Date().getFullYear()} INCA EDUCA · Todos los derechos reservados</p>
          <div className="flex gap-6">
            <a href="#" className="hover:opacity-100">Privacidad</a>
            <a href="#" className="hover:opacity-100">Términos</a>
            <a href="#" className="hover:opacity-100">Libro de reclamaciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

