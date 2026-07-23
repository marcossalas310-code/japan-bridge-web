import Image from "next/image";
import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("es-CL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPostCard({ post }: { post: BlogPostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-washi-dark">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <span className="text-xs font-medium uppercase tracking-wide text-ink/50">
          {formatDate(post.date)}
        </span>
        <h3 className="font-serif text-lg leading-snug text-ink">
          {post.title}
        </h3>
        <p className="text-sm text-ink/70">{post.excerpt}</p>
        <span className="mt-auto pt-3 text-sm font-medium text-ink underline decoration-gold decoration-2 underline-offset-4 group-hover:text-torii">
          Leer más
        </span>
      </div>
    </Link>
  );
}
