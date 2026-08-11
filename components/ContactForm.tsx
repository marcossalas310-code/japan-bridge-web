"use client";

import { useState, type FormEvent } from "react";
import { FORMSPREE_ENDPOINT } from "@/lib/constants";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-border bg-surface p-8 text-center">
        <p className="font-display text-xl font-semibold text-foreground">¡Gracias por escribir!</p>
        <p className="mt-2 text-muted">
          Recibimos tu mensaje y te responderemos a la brevedad.
        </p>
      </div>
    );
  }

  const inputClass =
    "mt-1 w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-foreground outline-none transition-colors focus:border-accent";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <label htmlFor="name" className="text-sm font-medium text-foreground/80">
          Nombre
        </label>
        <input id="name" name="name" type="text" required className={inputClass} />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-medium text-foreground/80">
          Email
        </label>
        <input id="email" name="email" type="email" required className={inputClass} />
      </div>
      <div>
        <label htmlFor="product" className="text-sm font-medium text-foreground/80">
          Producto de interés (opcional)
        </label>
        <input
          id="product"
          name="product"
          type="text"
          placeholder="Ej: Gafas con IA"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium text-foreground/80">
          Mensaje
        </label>
        <textarea id="message" name="message" required rows={5} className={inputClass} />
      </div>

      {status === "error" && (
        <p className="text-sm text-accent-2">
          Algo salió mal enviando tu mensaje. Intenta de nuevo o escríbenos
          directo por WhatsApp.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-full bg-gradient-to-r from-accent to-accent-2 px-8 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status === "sending" ? "Enviando…" : "Enviar mensaje"}
      </button>
    </form>
  );
}
