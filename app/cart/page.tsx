"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/lib/cart";
import { formatCLP } from "@/lib/format";
import { shippingCostFor, SHIPPING } from "@/lib/constants";

export default function CartPage() {
  const { items, subtotal, setQuantity, removeItem, ready } = useCart();
  const shipping = shippingCostFor(subtotal);
  const total = subtotal + shipping;

  if (!ready) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-muted">Cargando carrito…</p>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h1 className="font-display text-3xl font-semibold text-foreground">
          Tu carrito está vacío
        </h1>
        <p className="mt-3 text-muted">
          Todavía no agregaste nada — mirá el catálogo y volvé cuando algo te
          interese.
        </p>
        <Link
          href="/products"
          className="mt-8 inline-block rounded-full bg-gradient-to-r from-accent to-accent-2 px-8 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
        >
          Ver catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="font-display text-4xl font-semibold text-foreground">
        Tu carrito
      </h1>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_320px]">
        {/* Items */}
        <ul className="flex flex-col gap-4">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex gap-4 rounded-2xl border border-border bg-surface p-4"
            >
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-surface-2">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/20 to-accent-2/10">
                    <span className="h-6 w-6 rounded-md bg-gradient-to-br from-accent to-accent-2 opacity-80" />
                  </div>
                )}
              </div>

              <div className="flex min-w-0 flex-1 flex-col">
                <Link
                  href={`/products/${item.id}`}
                  className="font-display font-semibold text-foreground hover:text-accent-2"
                >
                  {item.name}
                </Link>
                <span className="mt-1 text-sm text-muted">
                  {formatCLP(item.price)} c/u
                </span>

                <div className="mt-auto flex items-center gap-3 pt-3">
                  <div className="flex items-center rounded-lg border border-border">
                    <button
                      onClick={() => setQuantity(item.id, item.quantity - 1)}
                      aria-label="Quitar una unidad"
                      className="px-3 py-1 text-foreground/70 transition-colors hover:text-accent-2"
                    >
                      −
                    </button>
                    <span className="min-w-8 text-center text-sm text-foreground">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(item.id, item.quantity + 1)}
                      aria-label="Agregar una unidad"
                      className="px-3 py-1 text-foreground/70 transition-colors hover:text-accent-2"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    Quitar
                  </button>
                </div>
              </div>

              <span className="shrink-0 font-display font-semibold text-foreground">
                {formatCLP(item.price * item.quantity)}
              </span>
            </li>
          ))}
        </ul>

        {/* Resumen */}
        <aside className="h-fit rounded-2xl border border-border bg-surface p-6">
          <h2 className="font-display text-lg font-semibold text-foreground">
            Resumen
          </h2>
          <dl className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <dt className="text-muted">Subtotal</dt>
              <dd className="text-foreground">{formatCLP(subtotal)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted">Envío</dt>
              <dd className="text-foreground">
                {shipping === 0 ? "Gratis" : formatCLP(shipping)}
              </dd>
            </div>
          </dl>

          {shipping > 0 && SHIPPING.freeOver !== null && (
            <p className="mt-3 text-xs text-muted">
              Te faltan {formatCLP(SHIPPING.freeOver - subtotal)} para envío
              gratis.
            </p>
          )}

          <div className="mt-4 flex justify-between border-t border-border pt-4">
            <span className="font-display font-semibold text-foreground">
              Total
            </span>
            <span className="font-display text-lg font-semibold text-foreground">
              {formatCLP(total)}
            </span>
          </div>

          <Link
            href="/checkout"
            className="mt-6 block rounded-full bg-gradient-to-r from-accent to-accent-2 px-6 py-3 text-center text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            Continuar con la compra
          </Link>
          <Link
            href="/products"
            className="mt-3 block text-center text-sm text-muted transition-colors hover:text-foreground"
          >
            Seguir viendo productos
          </Link>
        </aside>
      </div>
    </div>
  );
}
