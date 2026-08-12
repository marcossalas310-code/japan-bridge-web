"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart";
import type { Product } from "@/lib/products";
import { WHATSAPP_URL } from "@/lib/constants";

export default function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  if (product.comingSoon) {
    return (
      <div className="mt-8">
        <a
          href={`${WHATSAPP_URL}?text=${encodeURIComponent(
            `Hola! Quiero que me avisen cuando llegue: ${product.name}`,
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-gradient-to-r from-accent to-accent-2 px-8 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
        >
          Avísame cuando llegue
        </a>
        <p className="mt-3 text-sm text-muted">
          Todavía no lo tenemos en stock. Te escribimos apenas llegue, sin
          compromiso.
        </p>
      </div>
    );
  }

  if (product.stock <= 0) {
    return (
      <div className="mt-8">
        <button
          disabled
          className="cursor-not-allowed rounded-full border border-border px-8 py-3 text-sm font-semibold text-muted"
        >
          Agotado por ahora
        </button>
        <p className="mt-2 text-sm text-muted">
          Escríbenos y te avisamos apenas vuelva a haber stock.
        </p>
      </div>
    );
  }

  function handleAdd() {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    setAdded(true);
  }

  return (
    <div className="mt-8">
      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={handleAdd}
          className="rounded-full bg-gradient-to-r from-accent to-accent-2 px-8 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
        >
          Agregar al carrito
        </button>
        {added && (
          <Link
            href="/cart"
            className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent/50"
          >
            Ir al carrito →
          </Link>
        )}
      </div>
      {added && (
        <p className="mt-3 text-sm text-accent-2">Agregado al carrito.</p>
      )}
      <p className="mt-3 text-sm text-muted">
        {product.stock === 1
          ? "Queda 1 unidad disponible."
          : `Quedan ${product.stock} unidades disponibles.`}
      </p>
    </div>
  );
}
