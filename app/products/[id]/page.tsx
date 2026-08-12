import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import AddToCartButton from "@/components/AddToCartButton";
import { getProductById, getProducts } from "@/lib/products";
import { formatCLP } from "@/lib/format";
import { SITE } from "@/lib/constants";

export async function generateStaticParams() {
  return getProducts().map((product) => ({ id: product.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return {};
  return {
    title: `${product.name} — ${SITE.name}`,
    description: product.tagline,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <Link href="/products" className="text-sm text-muted hover:text-accent-2">
        ← Volver al catálogo
      </Link>

      <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-surface">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/20 to-accent-2/10">
              <span className="h-24 w-24 rounded-3xl bg-gradient-to-br from-accent to-accent-2 opacity-80" />
            </div>
          )}
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-wide text-accent-2">
            {product.category}
          </span>
          <h1 className="mt-2 font-display text-3xl font-semibold text-foreground sm:text-4xl">
            {product.name}
          </h1>
          <p className="mt-2 text-lg text-muted">{product.tagline}</p>

          <p className="mt-6 font-display text-3xl font-semibold text-foreground">
            {formatCLP(product.price)}
          </p>

          <div className="mt-6 flex flex-col gap-4">
            {product.description.split("\n\n").map((parrafo) => (
              <p key={parrafo} className="leading-relaxed text-foreground/80">
                {parrafo}
              </p>
            ))}
          </div>

          <ul className="mt-6 space-y-2">
            {product.specs.map((spec) => (
              <li key={spec} className="flex items-start gap-2 text-sm text-foreground/80">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-2" />
                {spec}
              </li>
            ))}
          </ul>

          <AddToCartButton product={product} />

          {product.blogSlug && (
            <p className="mt-4 text-sm text-muted">
              ¿Quieres saber más?{" "}
              <Link
                href={`/blog/${product.blogSlug}`}
                className="font-medium text-foreground underline decoration-accent-2 decoration-2 underline-offset-4 hover:text-accent-2"
              >
                Lee la nota completa
              </Link>
              .
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
