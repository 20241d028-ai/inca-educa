import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

interface CarouselCareer {
  slug: string;
  title: string;
  image: string;
  duration: string;
}

interface CareerCarouselProps {
  careers: CarouselCareer[];
  intervalMs?: number;
  className?: string;
  /**
   * "card"       -> tarjeta contenida (bordes redondeados, tamaño fijo)
   * "background" -> imagen a pantalla completa, pensada como fondo de una sección
   */
  variant?: "card" | "background";
}

export function CareerCarousel({
  careers,
  intervalMs = 4200,
  className = "",
  variant = "card",
}: CareerCarouselProps) {
  const [index, setIndex] = useState(0);

  const goTo = useCallback(
    (i: number) => setIndex(((i % careers.length) + careers.length) % careers.length),
    [careers.length]
  );

  useEffect(() => {
    if (careers.length <= 1) return;
    const id = setInterval(() => goTo(index + 1), intervalMs);
    return () => clearInterval(id);
  }, [index, careers.length, intervalMs, goTo]);

  if (careers.length === 0) return null;
  const current = careers[index];
  const isBackground = variant === "background";

  return (
    <div
      className={
        isBackground
          ? `absolute inset-0 overflow-hidden ${className}`
          : `relative w-full max-w-[420px] aspect-[4/5] rounded-2xl overflow-hidden border border-white/15 shadow-2xl shadow-black/40 ${className}`
      }
    >
      <AnimatePresence>
        <motion.div
          key={current.slug}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={current.image}
            alt={current.title}
            className="h-full w-full object-cover"
            loading="eager"
          />
          {isBackground ? (
            <>
              <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/45 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            </>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
          )}

          {/* Caption: en modo card va abajo a lo ancho; en modo fondo, discreta esquina inferior derecha */}
          {isBackground ? (
            <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 text-right">
              <span className="inline-block rounded-full bg-primary/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground mb-2">
                {current.duration}
              </span>
              <Link
                to="/carreras/$slug"
                params={{ slug: current.slug }}
                className="block text-lg md:text-xl font-extrabold text-white leading-tight hover:text-primary transition-colors"
              >
                {current.title}
              </Link>
            </div>
          ) : (
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="inline-block rounded-full bg-primary/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground mb-3">
                {current.duration}
              </span>
              <Link
                to="/carreras/$slug"
                params={{ slug: current.slug }}
                className="block text-xl font-extrabold text-white leading-tight hover:text-primary transition-colors"
              >
                {current.title}
              </Link>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Indicadores */}
      <div
        className={
          isBackground
            ? "absolute bottom-6 left-6 md:bottom-10 md:left-10 flex gap-1.5 z-10"
            : "absolute top-4 right-4 flex gap-1.5 z-10"
        }
      >
        {careers.map((c, i) => (
          <button
            key={c.slug}
            onClick={() => goTo(i)}
            aria-label={`Ver ${c.title}`}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-6 bg-white" : "w-1.5 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}