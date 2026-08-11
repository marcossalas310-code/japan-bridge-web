"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart";
import { formatCLP } from "@/lib/format";
import { shippingCostFor, CONTACT } from "@/lib/constants";

const REGIONES = [
  "Arica y Parinacota",
  "Tarapacá",
  "Antofagasta",
  "Atacama",
  "Coquimbo",
  "Valparaíso",
  "Metropolitana de Santiago",
  "O'Higgins",
  "Maule",
  "Ñuble",
  "Biobío",
  "La Araucanía",
  "Los Ríos",
  "Los Lagos",
  "Aysén",
  "Magallanes",
];

export default function CheckoutPage() {
  const { items, subtotal, clear, ready } = useCart();
  const [sent, setSent] = useState(false);
  const shipping = shippingCostFor(subtotal);
  const total = subtotal + shipping;

  if (!ready) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-muted">Cargando…</p>
      </div>
    );
  }

  if (items.length === 0 && !sent) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h1 className="font-display text-3xl font-semibold text-foreground">
          No hay nada para comprar
        </h1>
        <p className="mt-3 text-muted">Agrega algo al carrito primero.</p>
        <Link
          href="/products"
          className="mt-8 inline-block rounded-full bg-gradient-to-r from-accent to-accent-2 px-8 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
        >
          Ver catálogo
        </Link>
      </div>
    );
  }

  if (sent) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-24 text-center">
        <h1 className="font-display text-3xl font-semibold text-foreground">
          ¡Pedido enviado!
        </h1>
        <p className="mt-4 text-muted">
          Se abrió WhatsApp con el detalle de tu pedido. Si no se abrió,
          escríbenos directo a{" "}
          <a
            href={`https://wa.me/${CONTACT.phone.replace(/[^\d]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-2 underline underline-offset-4"
          >
            {CONTACT.phoneDisplay}
          </a>{" "}
          y te confirmamos la disponibilidad y el medio de pago.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full border border-border px-8 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent/50"
        >
          Volver al inicio
        </Link>
      </div>
    );
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const lineas = items
      .map((i) => `• ${i.quantity}x ${i.name} — ${formatCLP(i.price * i.quantity)}`)
      .join("\n");

    const mensaje = [
      "*Nuevo pedido*",
      "",
      lineas,
      "",
      `Subtotal: ${formatCLP(subtotal)}`,
      `Envío: ${shipping === 0 ? "Gratis" : formatCLP(shipping)}`,
      `*Total: ${formatCLP(total)}*`,
      "",
      "*Datos de envío*",
      `Nombre: ${data.get("nombre")}`,
      `RUT: ${data.get("rut")}`,
      `Email: ${data.get("email")}`,
      `Teléfono: ${data.get("telefono")}`,
      `Dirección: ${data.get("direccion")}`,
      `Comuna: ${data.get("comuna")}`,
      `Región: ${data.get("region")}`,
      data.get("notas") ? `Notas: ${data.get("notas")}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const numero = CONTACT.phone.replace(/[^\d]/g, "");
    window.open(
      `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`,
      "_blank",
      "noopener,noreferrer",
    );

    clear();
    setSent(true);
  }

  const inputClass =
    "mt-1 w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-foreground outline-none transition-colors focus:border-accent";

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <Link href="/cart" className="text-sm text-muted hover:text-accent-2">
        ← Volver al carrito
      </Link>
      <h1 className="mt-6 font-display text-4xl font-semibold text-foreground">
        Finalizar compra
      </h1>
      <p className="mt-3 max-w-xl text-muted">
        Completa tus datos de envío. Al confirmar, se abre WhatsApp con el
        detalle del pedido para coordinar el pago y la entrega.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_320px]">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="nombre" className="text-sm font-medium text-foreground/80">
                Nombre completo
              </label>
              <input id="nombre" name="nombre" required className={inputClass} />
            </div>
            <div>
              <label htmlFor="rut" className="text-sm font-medium text-foreground/80">
                RUT
              </label>
              <input id="rut" name="rut" required placeholder="12.345.678-9" className={inputClass} />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="email" className="text-sm font-medium text-foreground/80">
                Email
              </label>
              <input id="email" name="email" type="email" required className={inputClass} />
            </div>
            <div>
              <label htmlFor="telefono" className="text-sm font-medium text-foreground/80">
                Teléfono
              </label>
              <input id="telefono" name="telefono" type="tel" required placeholder="+56 9 …" className={inputClass} />
            </div>
          </div>

          <div>
            <label htmlFor="direccion" className="text-sm font-medium text-foreground/80">
              Dirección
            </label>
            <input id="direccion" name="direccion" required placeholder="Calle, número, depto." className={inputClass} />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="comuna" className="text-sm font-medium text-foreground/80">
                Comuna
              </label>
              <input id="comuna" name="comuna" required className={inputClass} />
            </div>
            <div>
              <label htmlFor="region" className="text-sm font-medium text-foreground/80">
                Región
              </label>
              <select
                id="region"
                name="region"
                required
                defaultValue="Metropolitana de Santiago"
                className={inputClass}
              >
                {REGIONES.map((r) => (
                  <option key={r} value={r} className="bg-surface">
                    {r}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="notas" className="text-sm font-medium text-foreground/80">
              Notas (opcional)
            </label>
            <textarea id="notas" name="notas" rows={3} placeholder="Horario preferido de entrega, referencias…" className={inputClass} />
          </div>

          <button
            type="submit"
            className="mt-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-8 py-3.5 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            Confirmar pedido por WhatsApp
          </button>
          <p className="text-xs text-muted">
            No pedimos datos de tarjeta en el sitio. El pago se coordina
            directamente contigo por WhatsApp.
          </p>
        </form>

        <aside className="h-fit rounded-2xl border border-border bg-surface p-6">
          <h2 className="font-display text-lg font-semibold text-foreground">
            Tu pedido
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            {items.map((item) => (
              <li key={item.id} className="flex justify-between gap-3">
                <span className="text-muted">
                  {item.quantity}× {item.name}
                </span>
                <span className="shrink-0 text-foreground">
                  {formatCLP(item.price * item.quantity)}
                </span>
              </li>
            ))}
          </ul>
          <dl className="mt-4 space-y-2 border-t border-border pt-4 text-sm">
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
          <div className="mt-4 flex justify-between border-t border-border pt-4">
            <span className="font-display font-semibold text-foreground">Total</span>
            <span className="font-display text-lg font-semibold text-foreground">
              {formatCLP(total)}
            </span>
          </div>
        </aside>
      </div>
    </div>
  );
}
