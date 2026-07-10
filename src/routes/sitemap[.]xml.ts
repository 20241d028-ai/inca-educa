import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { careers } from "@/lib/site-data";

const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticPaths = [
          "/", "/nosotros", "/carreras", "/admision", /* "/cursos", */ "/noticias",
          "/eventos", "/galeria", "/bolsa-laboral", "/docentes", "/contacto", "/faq", "/transparencia",
        ];
        const careerPaths = careers.map((c) => `/carreras/${c.slug}`);
        const paths = [...staticPaths, ...careerPaths];

        const urls = paths
          .map(
            (p) =>
              `  <url>\n    <loc>${BASE_URL}${p}</loc>\n    <changefreq>weekly</changefreq>\n  </url>`,
          )
          .join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
