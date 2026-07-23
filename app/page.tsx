import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import BlogPostCard from "@/components/BlogPostCard";
import { getProducts } from "@/lib/products";
import { getAllPostsMeta } from "@/lib/blog";
import { WHATSAPP_URL } from "@/lib/constants";

export default function Home() {
  const products = getProducts().slice(0, 4);
  const posts = getAllPostsMeta().slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[80vh] items-end overflow-hidden">
        <Image
          src="/images/hero-torii.jpg"
          alt="Pasillo de torii en Japón"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-ink/10" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-20 pt-32 text-washi">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
            Japón → Chile
          </span>
          <h1 className="mt-4 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
            Un puente entre Asia y Latinoamérica
          </h1>
          <p className="mt-6 max-w-xl text-lg text-washi/85">
            Traemos relojes, cámaras, cuchillos y porcelana japonesa
            directamente desde su origen — piezas hechas por artesanos que
            dedicaron su vida al oficio.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/products"
              className="rounded-full bg-torii px-6 py-3 text-sm font-semibold text-washi transition-colors hover:bg-torii/90"
            >
              Explorar catálogo
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-washi/40 px-6 py-3 text-sm font-semibold text-washi transition-colors hover:border-washi hover:bg-washi/10"
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
            <span className="text-xs font-semibold uppercase tracking-wide text-torii">
              Catálogo
            </span>
            <h2 className="mt-2 font-serif text-3xl text-ink">
              Piezas seleccionadas
            </h2>
          </div>
          <Link
            href="/products"
            className="hidden text-sm font-medium text-ink/70 hover:text-torii sm:inline-block"
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
      <section className="bg-washi-dark py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-end justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wide text-torii">
                Historias
              </span>
              <h2 className="mt-2 font-serif text-3xl text-ink">
                Manufactura, historia e importación
              </h2>
            </div>
            <Link
              href="/blog"
              className="hidden text-sm font-medium text-ink/70 hover:text-torii sm:inline-block"
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

      {/* CTA final */}
      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="font-serif text-3xl text-ink">
          ¿Buscas una pieza en particular?
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-ink/70">
          Contáctanos y te ayudamos a encontrarla — o a saber si vale la pena
          traerla desde Japón.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full bg-torii px-8 py-3 text-sm font-semibold text-washi transition-colors hover:bg-torii/90"
        >
          Escribir por WhatsApp
        </a>
      </section>
    </div>
  );
}
