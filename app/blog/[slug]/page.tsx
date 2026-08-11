import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllPostsMeta, getPostBySlug } from "@/lib/blog";
import { SITE } from "@/lib/constants";

export async function generateStaticParams() {
  return getAllPostsMeta().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — ${SITE.name}`,
    description: post.excerpt,
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("es-CL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/blog" className="text-sm text-muted hover:text-accent-2">
        ← Volver a historias
      </Link>

      <span className="mt-6 block text-xs font-medium uppercase tracking-wide text-muted">
        {formatDate(post.date)}
      </span>
      <h1 className="mt-2 font-display text-3xl font-semibold text-foreground sm:text-4xl">
        {post.title}
      </h1>

      {post.image && (
        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl border border-border bg-surface">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover"
            priority
          />
        </div>
      )}

      <div
        className="prose prose-invert mt-10 max-w-none prose-headings:font-display prose-a:text-accent-2"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  );
}
