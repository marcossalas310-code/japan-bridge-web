import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import BlogPostCard from "@/components/BlogPostCard";
import { getProducts } from "@/lib/products";
import { getAllPostsMeta } from "@/lib/blog";
import { WHATSAPP_URL, SHIPPING } from "@/lib/constants";
import { formatCLP } from "@/lib/format";

export default function Home() {
  const products = getProducts().slice(0, 4);
  const posts = getAllPostsMeta().slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[-10%] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-accent/25 blur-[120px]" />
          <div className="absolute right-[-10%] top-[30%] h-[400px] w-[400px] rounded-full bg-accent-2/20 blur-[110px]" />
          <div
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--color-border) 1px, transparent 1px), linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />
        </div>

        <div className="relative mx-auto w-full max-w-6xl px-6 py-32 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-accent-2">
            Seleccionados con cuidado
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
            <span className="gradient-text">Tecnología accesible</span>
            <br />
            para el día a día
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
            Cada producto pasa por nuestras manos antes de llegar al catálogo:
            tiene que resolver algo concreto, ser fácil de usar desde el primer
            día y valer lo que cuesta.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/products"
              className="rounded-full bg-gradient-to-r from-accent to-accent-2 px-7 py-3.5 text-sm font-semibold text-background transition-opacity hover:opacity-90"
            >
              Ver catálogo
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-accent/50 hover:bg-surface"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Productos destacados */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-end justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wide text-accent-2">
              Catálogo
            </span>
            <h2 className="mt-2 font-display text-3xl font-semibold text-foreground">
              Productos seleccionados
            </h2>
          </div>
          <Link
            href="/products"
            className="hidden text-sm font-medium text-muted hover:text-accent-2 sm:inline-block"
          >
            Ver todo →
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Blog */}
      {posts.length > 0 && (
        <section className="border-y border-border bg-surface/50 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex items-end justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wide text-accent-2">
                  Historias
                </span>
                <h2 className="mt-2 font-display text-3xl font-semibold text-foreground">
                  Cómo elegimos lo que vendemos
                </h2>
              </div>
              <Link
                href="/blog"
                className="hidden text-sm font-medium text-muted hover:text-accent-2 sm:inline-block"
              >
                Ver todo →
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogPostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Por qué comprar acá */}
      <section className="border-t border-border py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 sm:grid-cols-3">
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground">
              Probado antes de venderlo
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              No sumamos nada al catálogo sin tenerlo en la mano primero. Si algo
              no cumple lo que promete, no lo vendemos.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground">
              Envío a todo Chile
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {formatCLP(SHIPPING.flatRate)} a cualquier región.
              {SHIPPING.freeOver !== null && (
                <> Gratis en pedidos sobre {formatCLP(SHIPPING.freeOver)}.</>
              )}
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground">
              Hablas con nosotros
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Sin call center ni respuestas automáticas. Escribes por WhatsApp y
              te responde la misma persona que eligió el producto.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
