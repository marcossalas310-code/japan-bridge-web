import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Catálogo — Japan Bridge",
  description:
    "Relojes, cámaras, cuchillos y porcelana japonesa importados directamente desde Japón.",
};

export default function ProductsPage() {
  const products = getProducts();

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <span className="text-xs font-semibold uppercase tracking-wide text-torii">
        Catálogo
      </span>
      <h1 className="mt-2 font-serif text-4xl text-ink">
        Piezas traídas directamente desde Japón
      </h1>
      <p className="mt-4 max-w-2xl text-ink/70">
        Cada producto es revisado antes de importarlo. No mostramos precio en
        el catálogo — escríbenos y te contamos disponibilidad, tiempos y
        costo total puesto en Chile.
      </p>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
