import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { CONTACT, WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contacto — Japan Bridge",
  description:
    "Escríbenos por WhatsApp, email o el formulario de contacto para consultar por disponibilidad de productos.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <span className="text-xs font-semibold uppercase tracking-wide text-torii">
        Contacto
      </span>
      <h1 className="mt-2 font-serif text-4xl text-ink">Hablemos</h1>
      <p className="mt-4 max-w-xl text-ink/70">
        ¿Tienes dudas sobre un producto, tiempos de envío o quieres encargar
        algo puntual? Escríbenos por el canal que prefieras.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <ContactForm />

        <div className="flex flex-col gap-6">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-2xl border border-ink/10 bg-white p-6 transition-shadow hover:shadow-md"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">
                WhatsApp
              </p>
              <p className="mt-1 font-serif text-lg text-ink">
                {CONTACT.phoneDisplay}
              </p>
            </div>
            <span className="text-torii">→</span>
          </a>

          <a
            href={`mailto:${CONTACT.email}`}
            className="flex items-center justify-between rounded-2xl border border-ink/10 bg-white p-6 transition-shadow hover:shadow-md"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">
                Email
              </p>
              <p className="mt-1 font-serif text-lg text-ink">
                {CONTACT.email}
              </p>
            </div>
            <span className="text-torii">→</span>
          </a>

          <div className="rounded-2xl border border-ink/10 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">
              Ubicación
            </p>
            <p className="mt-1 font-serif text-lg text-ink">
              {CONTACT.location}
            </p>
            <p className="mt-2 text-sm text-ink/60">
              Envíos a todo Chile.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
