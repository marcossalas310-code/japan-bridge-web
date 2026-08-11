import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Nosotros — ${SITE.name}`,
  description: "Quiénes somos y por qué elegimos así los productos que vendemos.",
};

export default function NosotrosPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <span className="text-xs font-semibold uppercase tracking-wide text-accent-2">
        Nosotros
      </span>
      <h1 className="mt-2 font-display text-4xl font-semibold text-foreground">
        Curado, no masivo
      </h1>
      <p className="mt-6 leading-relaxed text-foreground/80">
        {SITE.name} nace para vender gadgets con inteligencia artificial real —
        no otro &ldquo;bluetooth con luces&rdquo; disfrazado de innovación.
        Probamos cada producto antes de sumarlo al catálogo y te contamos
        exactamente qué hace bien y qué no, antes de que lo compres.
      </p>
      <p className="mt-4 leading-relaxed text-foreground/80">
        Operamos desde Santiago de Chile, con envíos a todo el país.
      </p>
    </div>
  );
}
