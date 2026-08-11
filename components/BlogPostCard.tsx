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
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_0_40px_-12px_var(--color-accent)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-surface-2">
        {post.image ? (
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/20 to-accent-2/10">
            <span className="h-14 w-14 rounded-2xl bg-gradient-to-br from-accent to-accent-2 opacity-80" />
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <span className="text-xs font-medium uppercase tracking-wide text-muted">
          {formatDate(post.date)}
        </span>
        <h3 className="font-display text-lg font-semibold leading-snug text-foreground">
          {post.title}
        </h3>
        <p className="text-sm text-muted">{post.excerpt}</p>
        <span className="mt-auto pt-3 text-sm font-medium text-foreground/80 group-hover:text-accent-2">
          Leer más →
        </span>
      </div>
    </Link>
  );
}
