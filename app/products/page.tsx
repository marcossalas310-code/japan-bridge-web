import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/products";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Catálogo — ${SITE.name}`,
  description:
    "Gadgets con inteligencia artificial real, probados antes de recomendarlos.",
};

export default function ProductsPage() {
  const products = getProducts();

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <span className="text-xs font-semibold uppercase tracking-wide text-accent-2">
        Catálogo
      </span>
      <h1 className="mt-2 font-display text-4xl font-semibold text-foreground">
        Gadgets con IA, probados antes de recomendarlos
      </h1>
      <p className="mt-4 max-w-2xl text-muted">
        Precios finales con envío a todo Chile. Coordinamos el pago por
        WhatsApp al confirmar tu pedido.
      </p>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
