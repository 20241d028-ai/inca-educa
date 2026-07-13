import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import {
  Building2,
  Hotel,
  UtensilsCrossed,
  Landmark,
} from "lucide-react";

// Empresas
import logoEmpresa1 from "@/assets/logos/logoEmpresa1.png";
import logoEmpresa2 from "@/assets/logos/logoEmpresa2.png";
import logoEmpresa3 from "@/assets/logos/logoEmpresa3.png";
import logoEmpresa4 from "@/assets/logos/logoEmpresa4.png";

// Hoteles
import logoHotel1 from "@/assets/logos/logoHotel1.jpg";
import logoHotel2 from "@/assets/logos/logoHoltel2.jpg";
import logoHotel3 from "@/assets/logos/logoHoltel3.jpg";
import logoHotel4 from "@/assets/logos/logoHoltel4.jpg";

// Restaurantes
import logoRst1 from "@/assets/logos/logoRst1.jpg";
import logoRst2 from "@/assets/logos/logoRst2.jpg";
import logoRst3 from "@/assets/logos/logoRst3.jpg";
import logoRst4 from "@/assets/logos/logoRst4.jpg";

// Municipalidades
import logoMuni1 from "@/assets/logos/logoMuni1.png";
import logoMuni2 from "@/assets/logos/logoMuni2.png";
import logoMuni3 from "@/assets/logos/logoMuni3.png";
import logoMuni4 from "@/assets/logos/logoMuni4.png";


export const Route = createFileRoute("/noticias")({
  head: () => ({
    meta: [
      { title: "Convenios Institucionales — INCA EDUCA" },
      {
        name: "description",
        content:
          "Empresas e instituciones que confían en INCA EDUCA para la formación y prácticas profesionales de nuestros estudiantes.",
      },
    ],
    links: [{ rel: "canonical", href: "/convenios" }],
  }),
  component: ConveniosPage,
});


const convenios = [
  {
    categoria: "Empresas",
    icon: Building2,
    items: [
      { nombre: "Empresa 1", imagen: logoEmpresa1 },
      { nombre: "Empresa 2", imagen: logoEmpresa2 },
      { nombre: "Empresa 3", imagen: logoEmpresa3 },
      { nombre: "Empresa 4", imagen: logoEmpresa4 },
    ],
  },

  {
    categoria: "Hoteles",
    icon: Hotel,
    items: [
      { nombre: "Hotel 1", imagen: logoHotel1 },
      { nombre: "Hotel 2", imagen: logoHotel2 },
      { nombre: "Hotel 3", imagen: logoHotel3 },
      { nombre: "Hotel 4", imagen: logoHotel4 },
    ],
  },

  {
    categoria: "Restaurantes",
    icon: UtensilsCrossed,
    items: [
      { nombre: "Restaurante 1", imagen: logoRst1 },
      { nombre: "Restaurante 2", imagen: logoRst2 },
      { nombre: "Restaurante 3", imagen: logoRst3 },
      { nombre: "Restaurante 4", imagen: logoRst4 },
    ],
  },

  {
    categoria: "Municipalidades",
    icon: Landmark,
    items: [
      { nombre: "Municipalidad 1", imagen: logoMuni1 },
      { nombre: "Municipalidad 2", imagen: logoMuni2 },
      { nombre: "Municipalidad 3", imagen: logoMuni3 },
      { nombre: "Municipalidad 4", imagen: logoMuni4 },
    ],
  },
];


function ConveniosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Alianzas Estratégicas"
        title="Convenios Institucionales"
        description="Trabajamos junto a empresas e instituciones para brindar oportunidades de prácticas preprofesionales, inserción laboral y desarrollo profesional a nuestros estudiantes."
      />


      <section className="container-page py-20">
        <div className="grid md:grid-cols-2 gap-8">

          {convenios.map((grupo) => {
            const Icon = grupo.icon;

            return (
              <div
                key={grupo.categoria}
                className="rounded-2xl border border-border bg-surface-2 p-8 hover:shadow-xl transition-all"
              >

                <div className="flex items-center gap-3 mb-6">
                  <Icon className="h-10 w-10 text-primary" />

                  <h2 className="text-2xl font-bold">
                    {grupo.categoria}
                  </h2>
                </div>


                <div className="grid grid-cols-2 gap-5">

                  {grupo.items.map((item) => (

                    <div
                      key={item.nombre}
                      className="rounded-xl border border-border bg-white p-5 flex flex-col items-center justify-center hover:shadow-lg transition"
                    >

                      <img
                        src={item.imagen}
                        alt={item.nombre}
                        className="h-28 w-full object-contain"
                      />

                      <p className="mt-4 text-center text-sm font-semibold">
                        {item.nombre}
                      </p>

                    </div>

                  ))}

                </div>

              </div>
            );
          })}

        </div>
      </section>


      <section className="container-page py-20">

        <div className="text-center mb-12">

          <p className="text-primary font-semibold uppercase tracking-widest">
            Actualidad
          </p>

          <h2 className="text-4xl font-extrabold mt-2">
            Últimas Noticias
          </h2>

          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Mantente informado sobre eventos, actividades, talleres,
            ceremonias y logros de nuestra comunidad educativa.
          </p>

        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {[1,2,3].map((item)=>(
            <article
              key={item}
              className="rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition"
            >

              <div className="aspect-video bg-slate-200"></div>

              <div className="p-6">

                <p className="text-xs uppercase text-primary font-bold">
                  Noticias
                </p>

                <h3 className="text-xl font-bold mt-2">
                  Actualidad INCA EDUCA
                </h3>

                <p className="text-muted-foreground mt-3">
                  Información sobre actividades,
                  eventos y novedades institucionales.
                </p>

                <button className="mt-5 text-primary font-semibold hover:underline">
                  Leer más →
                </button>

              </div>

            </article>
          ))}

        </div>

      </section>

    </>
  );
}