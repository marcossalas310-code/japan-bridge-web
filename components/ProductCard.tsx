import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-washi-dark">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <span className="text-xs font-semibold uppercase tracking-wide text-torii">
          {product.category}
        </span>
        <h3 className="font-serif text-lg text-ink">{product.name}</h3>
        <p className="text-sm text-ink/70">{product.tagline}</p>
        <span className="mt-auto pt-3 text-sm font-medium text-ink underline decoration-gold decoration-2 underline-offset-4 group-hover:text-torii">
          Ver detalle
        </span>
      </div>
    </Link>
  );
}
