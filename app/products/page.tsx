import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import { getProductsByCategory } from "@/lib/products";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Catálogo — ${SITE.name}`,
  description:
    "Tecnología útil para el día a día, probada antes de recomendarla. Envíos a todo Chile.",
};

export default function ProductsPage() {
  const groups = getProductsByCategory();

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <span className="text-xs font-semibold uppercase tracking-wide text-accent-2">
        Catálogo
      </span>
      <h1 className="mt-2 font-display text-4xl font-semibold text-foreground">
        Cada producto, probado antes de recomendarlo
      </h1>
      <p className="mt-4 max-w-2xl text-muted">
        Precios finales con envío a todo Chile. Coordinamos el pago por
        WhatsApp al confirmar tu pedido.
      </p>
      <div className="mt-12 flex flex-col gap-16">
        {groups.map((group) => (
          <section key={group.category}>
            <h2 className="font-display text-2xl font-semibold text-foreground">
              {group.category}
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {group.products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
