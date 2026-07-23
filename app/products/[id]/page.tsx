import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProductById, getProducts } from "@/lib/products";
import { WHATSAPP_URL } from "@/lib/constants";

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
    title: `${product.name} — Japan Bridge`,
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
      <Link href="/products" className="text-sm text-ink/60 hover:text-torii">
        ← Volver al catálogo
      </Link>

      <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-washi-dark">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
            priority
          />
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-wide text-torii">
            {product.category}
          </span>
          <h1 className="mt-2 font-serif text-3xl text-ink sm:text-4xl">
            {product.name}
          </h1>
          <p className="mt-2 text-lg text-ink/70">{product.tagline}</p>

          <p className="mt-6 leading-relaxed text-ink/80">
            {product.description}
          </p>

          <ul className="mt-6 space-y-2">
            {product.specs.map((spec) => (
              <li key={spec} className="flex items-start gap-2 text-sm text-ink/80">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                {spec}
              </li>
            ))}
          </ul>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-torii px-8 py-3 text-sm font-semibold text-washi transition-colors hover:bg-torii/90"
          >
            Consultar disponibilidad
          </a>

          {product.blogSlug && (
            <p className="mt-4 text-sm text-ink/60">
              ¿Quieres saber más sobre esta pieza?{" "}
              <Link
                href={`/blog/${product.blogSlug}`}
                className="font-medium text-ink underline decoration-gold decoration-2 underline-offset-4 hover:text-torii"
              >
                Lee la historia completa
              </Link>
              .
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
