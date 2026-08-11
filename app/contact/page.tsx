import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { CONTACT, WHATSAPP_URL, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Contacto — ${SITE.name}`,
  description:
    "Escríbenos por WhatsApp, email o el formulario de contacto para consultar por disponibilidad de productos.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <span className="text-xs font-semibold uppercase tracking-wide text-accent-2">
        Contacto
      </span>
      <h1 className="mt-2 font-display text-4xl font-semibold text-foreground">
        Hablemos
      </h1>
      <p className="mt-4 max-w-xl text-muted">
        ¿Tienes dudas sobre un producto, tiempos de envío o quieres consultar
        por algo puntual? Escríbenos por el canal que prefieras.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <ContactForm />

        <div className="flex flex-col gap-6">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/40"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                WhatsApp
              </p>
              <p className="mt-1 font-display text-lg font-semibold text-foreground">
                {CONTACT.phoneDisplay}
              </p>
            </div>
            <span className="text-accent-2">→</span>
          </a>

          <a
            href={`mailto:${CONTACT.email}`}
            className="flex items-center justify-between rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/40"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                Email
              </p>
              <p className="mt-1 font-display text-lg font-semibold text-foreground">
                {CONTACT.email}
              </p>
            </div>
            <span className="text-accent-2">→</span>
          </a>

          <div className="rounded-2xl border border-border bg-surface p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">
              Ubicación
            </p>
            <p className="mt-1 font-display text-lg font-semibold text-foreground">
              {CONTACT.location}
            </p>
            <p className="mt-2 text-sm text-muted">Envíos a todo Chile.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
