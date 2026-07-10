import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { blogManifest } from "@/content/blog/manifest";
import BlogPostLayout from "@/components/blog/BlogPostLayout";
import type { BlogPost } from "@/content/blog/types";

export function generateStaticParams() {
  return blogManifest.map((entry) => ({ slug: entry.slug }));
}

async function loadPost(slug: string): Promise<BlogPost | null> {
  try {
    const mod = await import(`@/content/blog/posts/${slug}`);
    return mod.post as BlogPost;
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await loadPost(slug);
  if (!post) return {};

  const url = `${siteConfig.seo.url}/blog/${post.slug}`;
  return {
    title: post.seoTitle,
    description: post.seoDescription,
    alternates: { canonical: url },
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
      url,
      type: "article",
      publishedTime: post.publishDate,
      images: [`${siteConfig.seo.url}/headshot.jpg`],
    },
    robots: { index: true, follow: true },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await loadPost(slug);
  if (!post) notFound();

  return <BlogPostLayout post={post} />;
}
