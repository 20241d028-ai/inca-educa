import type { ReactNode } from "react";
import fondo from "@/assets/fondo.jpg";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${fondo})`,
      }}
    >
      {/* Capa oscura encima de la imagen */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Contenido */}
      <div className="relative z-10">
        <div className="container-page py-20 md:py-28 max-w-4xl text-white">

          {eyebrow && (
            <p className="eyebrow text-white/80">
              {eyebrow}
            </p>
          )}

          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-balance">
            {title}
          </h1>

          {description && (
            <p className="mt-6 text-lg text-white/90 max-w-2xl text-pretty">
              {description}
            </p>
          )}

          {children && (
            <div className="mt-8">
              {children}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}