import type { Metadata } from "next";
import BlogPostCard from "@/components/BlogPostCard";
import { getAllPostsMeta } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Historias — Japan Bridge",
  description:
    "Historia japonesa, manufactura tradicional y cómo funciona la importación desde Japón hacia Chile.",
};

export default function BlogIndexPage() {
  const posts = getAllPostsMeta();

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <span className="text-xs font-semibold uppercase tracking-wide text-torii">
        Historias
      </span>
      <h1 className="mt-2 font-serif text-4xl text-ink">
        Manufactura, historia e importación
      </h1>
      <p className="mt-4 max-w-2xl text-ink/70">
        Notas sobre el oficio detrás de cada pieza — y sobre cómo funciona
        realmente traer algo desde Japón hasta Chile.
      </p>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
