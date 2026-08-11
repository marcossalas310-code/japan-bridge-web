import type { Metadata } from "next";
import { SITE, SHIPPING, WHATSAPP_URL } from "@/lib/constants";
import { formatCLP } from "@/lib/format";

export const metadata: Metadata = {
  title: `Preguntas frecuentes — ${SITE.name}`,
  description: "Envíos, pagos y cómo comprar en " + SITE.name + ".",
};

const FAQS = [
  {
    q: "¿Cómo pago?",
    a: "Al finalizar tu pedido en el sitio, coordinamos el pago directamente por WhatsApp. No pedimos datos de tarjeta en la página.",
  },
  {
    q: "¿Cuánto cuesta el envío?",
    a: `Envío a todo Chile por ${formatCLP(SHIPPING.flatRate)}. Gratis en pedidos sobre ${formatCLP(SHIPPING.freeOver ?? 0)}.`,
  },
  {
    q: "¿Cuánto demora en llegar?",
    a: "Los tiempos varían según el producto y la comuna. Te confirmamos el plazo exacto al coordinar tu pedido por WhatsApp.",
  },
  {
    q: "¿Tienen garantía?",
    a: "Sí. Si el producto llega con una falla, lo resolvemos directamente contigo — escríbenos por WhatsApp o email.",
  },
];

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <span className="text-xs font-semibold uppercase tracking-wide text-accent-2">
        FAQ
      </span>
      <h1 className="mt-2 font-display text-4xl font-semibold text-foreground">
        Preguntas frecuentes
      </h1>

      <div className="mt-10 flex flex-col divide-y divide-border">
        {FAQS.map((item) => (
          <div key={item.q} className="py-6">
            <h2 className="font-display text-lg font-semibold text-foreground">
              {item.q}
            </h2>
            <p className="mt-2 text-muted">{item.a}</p>
          </div>
        ))}
      </div>

      <p className="mt-10 text-sm text-muted">
        ¿Tu duda no está acá?{" "}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-foreground underline decoration-accent-2 decoration-2 underline-offset-4 hover:text-accent-2"
        >
          Escríbenos por WhatsApp
        </a>
        .
      </p>
    </div>
  );
}
