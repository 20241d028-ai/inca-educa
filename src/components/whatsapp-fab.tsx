import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/51984000000?text=Hola%20INCA%20EDUCA%2C%20quiero%20información"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-6 right-24 z-40 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-primary-foreground font-semibold shadow-glow hover:brightness-110 transition"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline text-sm">WhatsApp</span>
    </a>
  );
}
