"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import type { BlogManifestEntry, BlogCategory } from "@/content/blog/types";

const CATEGORY_LABELS: Record<BlogCategory, string> = {
  "case-study": "Case Studies",
  "industry-vertical": "Industries",
  geography: "By Location",
  service: "Services",
  "cost-pricing": "Cost & Pricing",
  comparison: "Comparisons",
  "how-to": "How-To Guides",
};

export default function BlogIndexClient({ posts }: { posts: BlogManifestEntry[] }) {
  const [activeCategory, setActiveCategory] = useState<BlogCategory | "all">("all");

  const categories = Array.from(new Set(posts.map((p) => p.category)));
  const visible =
    activeCategory === "all" ? posts : posts.filter((p) => p.category === activeCategory);
  const sorted = [...visible].sort((a, b) => (a.publishDate < b.publishDate ? 1 : -1));

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-bold tracking-tight text-lg">
            {siteConfig.name}
          </Link>
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-green-500 hover:bg-green-600 px-5 py-2 text-sm font-semibold transition-colors"
          >
            Chat on WhatsApp
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 pt-16 pb-10 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
          The Blog
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Guides, case studies and cost breakdowns on web development, AI automation, sales
          funnels and software — written from real projects, not theory.
        </p>
      </section>

      {/* Category filters */}
      <section className="mx-auto max-w-6xl px-6 pb-6">
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setActiveCategory("all")}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              activeCategory === "all"
                ? "border-blue-400 bg-blue-500/20 text-white"
                : "border-white/10 bg-white/5 text-gray-300 hover:border-blue-400/40"
            }`}
          >
            All ({posts.length})
          </button>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                activeCategory === c
                  ? "border-blue-400 bg-blue-500/20 text-white"
                  : "border-white/10 bg-white/5 text-gray-300 hover:border-blue-400/40"
              }`}
            >
              {CATEGORY_LABELS[c]} ({posts.filter((p) => p.category === c).length})
            </button>
          ))}
        </div>
      </section>

      {/* Post grid */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        {sorted.length === 0 ? (
          <p className="text-center text-gray-400">No posts in this category yet.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sorted.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-blue-400/40 transition-colors flex flex-col"
              >
                <p className="text-xs text-blue-300 capitalize">
                  {CATEGORY_LABELS[post.category]}
                </p>
                <h2 className="mt-2 font-semibold text-white text-lg">{post.title}</h2>
                <p className="mt-2 text-sm text-gray-400 line-clamp-3 flex-1">{post.excerpt}</p>
                <time dateTime={post.publishDate} className="mt-4 text-xs text-gray-500">
                  {new Date(post.publishDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </Link>
            ))}
          </div>
        )}
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-gray-500">
        <Link href="/" className="hover:text-gray-300">
          ← Back to {siteConfig.name}
        </Link>
      </footer>
    </main>
  );
}
