import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import { WhatsAppFab } from "../components/whatsapp-fab";
import { ChatWidget } from "../components/chat-widget";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow mb-4">Error 404</p>
        <h1 className="text-5xl font-bold">Página no encontrada</h1>
        <p className="mt-4 text-muted-foreground">
          La página que buscas no existe o fue movida.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:brightness-110"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">Esta página no se pudo cargar</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Ocurrió un error. Puedes reintentar o volver al inicio.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
          >
            Reintentar
          </button>
          <a
            href="/"
            className="inline-flex items-center rounded-full border border-border px-4 py-2 text-sm font-medium hover:bg-muted"
          >
            Ir al inicio
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "INCA EDUCA · CETPRO Cusco — Educación técnica que transforma" },
      {
        name: "description",
        content:
          "Centro de Educación Técnico-Productiva en Cusco desde 2002. Formación en Gastronomía, Panadería y Pastelería, Hostelería y Turismo, Cosmetología, Administración y Computación. Certificación oficial MINEDU.",
      },
      { name: "author", content: "INCA EDUCA" },
      { name: "theme-color", content: "#0e6e4d" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "INCA EDUCA" },
      { property: "og:title", content: "INCA EDUCA · CETPRO Cusco" },
      {
        property: "og:description",
        content:
          "Centro de Educación Técnico-Productiva en Cusco. Formación técnica de excelencia.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "INCA EDUCA",
          description:
            "Centro de Educación Técnico Productiva (CETPRO) en Cusco, Perú, reconocido por la Dirección Regional de Educación del Cusco desde 2011.",
          foundingDate: "2002",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Prol. Av. la Cultura, 6º paradero San Sebastián",
            addressLocality: "Cusco",
            addressCountry: "PE",
          },
          telephone: "+51-84-275994",
          email: "info@incaeduca.edu.pe",
          sameAs: [
            "https://www.facebook.com/IncaEduca/",
            "https://www.youtube.com/@IncaEduca",
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-dvh flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
        <WhatsAppFab />
        <ChatWidget />
      </div>
    </QueryClientProvider>
  );
}
