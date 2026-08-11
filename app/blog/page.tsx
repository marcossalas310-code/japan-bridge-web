import type { Metadata } from "next";
import BlogPostCard from "@/components/BlogPostCard";
import { getAllPostsMeta } from "@/lib/blog";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Historias — ${SITE.name}`,
  description:
    "Cómo elegimos qué gadgets con IA vale la pena traer, y cuáles descartamos.",
};

export default function BlogIndexPage() {
  const posts = getAllPostsMeta();

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <span className="text-xs font-semibold uppercase tracking-wide text-accent-2">
        Historias
      </span>
      <h1 className="mt-2 font-display text-4xl font-semibold text-foreground">
        Cómo elegimos lo que vendemos
      </h1>
      <p className="mt-4 max-w-2xl text-muted">
        Notas sobre qué gadgets probamos, cuáles funcionan de verdad, y cómo
        pensamos el margen y la calidad antes de sumar algo al catálogo.
      </p>
      {posts.length > 0 ? (
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="mt-12 rounded-2xl border border-border bg-surface p-10 text-center text-muted">
          Todavía no hay notas publicadas — vuelve pronto.
        </div>
      )}
    </div>
  );
}
