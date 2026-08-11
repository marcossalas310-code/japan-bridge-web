import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Nosotros — ${SITE.name}`,
  description:
    "Cómo seleccionamos los productos que vendemos y qué tiene que cumplir cada uno para entrar al catálogo.",
};

const CRITERIOS = [
  {
    titulo: "Resuelve algo concreto",
    texto:
      "Antes de mirar el precio o las especificaciones, nos preguntamos qué problema real soluciona. Si la respuesta es «ninguno, pero se ve entretenido», no entra.",
  },
  {
    titulo: "Se usa sin manual",
    texto:
      "La tecnología útil no debería exigir una tarde de configuración. Priorizamos productos que funcionan bien desde el primer día, sin importar cuánto sepas de tecnología.",
  },
  {
    titulo: "Vale lo que cuesta",
    texto:
      "Comparamos con lo que hay disponible en Chile antes de definir un precio. Preferimos vender menos productos y que cada uno se justifique.",
  },
  {
    titulo: "Lo tenemos en la mano",
    texto:
      "No listamos nada que no hayamos probado. Por eso el catálogo crece despacio: cada producto nuevo pasa primero por nosotros.",
  },
];

export default function NosotrosPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <span className="text-xs font-semibold uppercase tracking-wide text-accent-2">
        Nosotros
      </span>
      <h1 className="mt-2 font-display text-4xl font-semibold text-foreground">
        Productos seleccionados con cuidado
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-foreground/80">
        {SITE.name} existe porque comprar tecnología se volvió agotador. Miles de
        productos, especificaciones infladas y reseñas que no dicen nada. Nuestro
        trabajo es filtrar todo eso y dejarte solo lo que de verdad vale la pena.
      </p>
      <p className="mt-4 leading-relaxed text-foreground/80">
        No buscamos tener el catálogo más grande. Buscamos que cualquier cosa que
        encuentres acá funcione, sea fácil de usar y te haga el día un poco más
        simple — sin necesidad de ser experto en tecnología para aprovecharla.
      </p>

      <h2 className="mt-14 font-display text-2xl font-semibold text-foreground">
        Qué tiene que cumplir un producto para entrar
      </h2>
      <div className="mt-8 flex flex-col divide-y divide-border">
        {CRITERIOS.map((c) => (
          <div key={c.titulo} className="py-6">
            <h3 className="font-display text-lg font-semibold text-foreground">
              {c.titulo}
            </h3>
            <p className="mt-2 leading-relaxed text-muted">{c.texto}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-border bg-surface p-8">
        <p className="leading-relaxed text-foreground/80">
          Operamos desde Santiago con envíos a todo Chile. Somos un equipo chico,
          así que cuando escribes te responde directamente alguien que conoce los
          productos.
        </p>
        <Link
          href="/products"
          className="mt-6 inline-block rounded-full bg-gradient-to-r from-accent to-accent-2 px-7 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
        >
          Ver el catálogo
        </Link>
      </div>
    </div>
  );
}
