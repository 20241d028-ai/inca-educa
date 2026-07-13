import { useState, useRef, useEffect } from "react";
import { MessageSquareText, X, Send, Bot } from "lucide-react";

interface ChatMessage {
  id: number;
  from: "bot" | "user";
  text: string;
}

const QUICK_REPLIES = ["Carreras disponibles", "Costos y becas", "Requisitos de admisión"];

const INITIAL_MESSAGE: ChatMessage =
  {
    id: 1,
    from: "bot",
    text: "¡Hola! 👋 Soy el asistente virtual de INCA EDUCA. ¿En qué puedo ayudarte hoy?",
  };

/**
 * Chatbot flotante — SOLO MAQUETA VISUAL para el prototipo.
 * Las respuestas son simuladas (no hay integración real con IA/backend).
 * Reemplazar `getBotReply` cuando se conecte un servicio real.
 */
export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  function getBotReply(): string {
    return "Gracias por tu mensaje. Esto es un prototipo de diseño: pronto un asesor o asistente real podrá responder tus consultas aquí.";
  }

  function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;
    const userMsg: ChatMessage = { id: Date.now(), from: "user", text: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [...prev, { id: Date.now() + 1, from: "bot", text: getBotReply() }]);
    }, 600);
  }

  return (
    <>
      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-44 right-6 z-40 flex h-[28rem] w-[22rem] max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-elevated">
          {/* Header */}
          <div className="flex items-center gap-3 bg-secondary px-4 py-3.5 text-secondary-foreground">
            <div className="grid size-9 shrink-0 place-items-center rounded-full bg-white/20">
              <Bot className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-bold leading-tight">Asistente INCA EDUCA</p>
              <p className="text-[11px] opacity-80 flex items-center gap-1">
                <span className="size-1.5 rounded-full bg-primary" /> En línea
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Cerrar chat"
              className="grid size-7 shrink-0 place-items-center rounded-full hover:bg-white/15 transition"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-surface-2 px-4 py-4">
            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-snug ${
                    m.from === "user"
                      ? "bg-primary text-primary-foreground rounded-br-sm"
                      : "bg-card border border-border text-foreground rounded-bl-sm"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {QUICK_REPLIES.map((q) => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="rounded-full border border-primary/30 bg-primary-soft px-3 py-1.5 text-xs font-semibold text-primary hover:brightness-95 transition"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage(input);
            }}
            className="flex items-center gap-2 border-t border-border bg-card p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu consulta..."
              className="h-10 flex-1 rounded-full border border-input bg-background px-4 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
            <button
              type="submit"
              aria-label="Enviar mensaje"
              className="grid size-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground hover:brightness-110 transition disabled:opacity-40"
              disabled={!input.trim()}
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Cerrar chat" : "Abrir chat de consultas"}
        className="fixed bottom-6 right-6 z-40 grid size-14 place-items-center rounded-full bg-secondary text-secondary-foreground shadow-glow hover:brightness-110 transition"
      >
        {open ? <X className="h-6 w-6" /> : <MessageSquareText className="h-6 w-6" />}
      </button>
    </>
  );
}