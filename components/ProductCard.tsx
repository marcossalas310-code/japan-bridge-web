import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";
import { formatCLP } from "@/lib/format";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_0_40px_-12px_var(--color-accent)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-surface-2">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/20 to-accent-2/10">
            <span className="h-16 w-16 rounded-2xl bg-gradient-to-br from-accent to-accent-2 opacity-80" />
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <span className="text-xs font-semibold uppercase tracking-wide text-accent-2">
          {product.category}
        </span>
        <h3 className="font-display text-lg font-semibold text-foreground">
          {product.name}
        </h3>
        <p className="text-sm text-muted">{product.tagline}</p>
        <div className="mt-auto flex items-center justify-between pt-3">
          <span className="font-display text-lg font-semibold text-foreground">
            {formatCLP(product.price)}
          </span>
          <span className="text-sm font-medium text-foreground/80 group-hover:text-accent-2">
            Ver detalle →
          </span>
        </div>
        {product.stock <= 0 && (
          <span className="text-xs font-medium uppercase tracking-wide text-muted">
            Agotado
          </span>
        )}
      </div>
    </Link>
  );
}
