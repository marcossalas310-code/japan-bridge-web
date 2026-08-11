"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart";

export default function CartButton() {
  const { count, ready } = useCart();

  return (
    <Link
      href="/cart"
      aria-label={`Carrito${count > 0 ? ` (${count})` : ""}`}
      className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:border-accent/50"
    >
      <svg
        width="17"
        height="17"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="9" cy="20" r="1.4" />
        <circle cx="18" cy="20" r="1.4" />
        <path d="M2 3h3l2.6 12.4a1.5 1.5 0 0 0 1.5 1.2h8.3a1.5 1.5 0 0 0 1.5-1.2L21 7H6" />
      </svg>
      {ready && count > 0 && (
        <span className="absolute -right-1.5 -top-1.5 flex h-4.5 min-w-4.5 items-center justify-center rounded-full bg-gradient-to-r from-accent to-accent-2 px-1 text-[10px] font-bold text-background">
          {count}
        </span>
      )}
    </Link>
  );
}
