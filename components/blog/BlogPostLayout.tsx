import Link from "next/link";
import { siteConfig } from "@/config/site";
import { keywordPages } from "@/components/seo/keywordPages";
import { blogManifest } from "@/content/blog/manifest";
import type { BlogPost } from "@/content/blog/types";

/*
=====================================================================
  SHARED BLOG POST LAYOUT
  Used by app/blog/[slug]/page.tsx for every post in content/blog/posts/.
  Same visual system as components/seo/KeywordLandingPage.tsx: dark
  gradient theme, proof-driven sections, FAQ + Breadcrumb + BlogPosting
  schema, WhatsApp/call CTA, and real interlinks to portfolio projects,
  keyword landing pages, and other posts (for AEO + crawl discovery).
=====================================================================
*/

export default function BlogPostLayout({ post }: { post: BlogPost }) {
  const pageUrl = `${siteConfig.seo.url}/blog/${post.slug}`;

  const relatedProjects = post.relatedProjectTitles
    .map((title) => siteConfig.projects.find((p) => p.title === title))
    .filter(Boolean) as typeof siteConfig.projects;

  const relatedKeywordLinks = keywordPages
    .filter((p) => post.relatedKeywordSlugs.includes(p.slug))
    .map((p) => ({ href: `/${p.slug}`, label: p.label }));

  const relatedPosts = post.relatedPostSlugs
    .map((slug) => blogManifest.find((m) => m.slug === slug))
    .filter(Boolean) as typeof blogManifest;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.seoDescription,
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.seo.url,
      sameAs: [
        siteConfig.social.linkedin,
        siteConfig.social.github,
        siteConfig.social.twitter,
      ],
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.name,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
  };

  const faqJsonLd = post.faqs.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.seo.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.seo.url}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: pageUrl },
    ],
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Top bar */}
      <header className="border-b border-white/10">
        <div className="mx-auto max-w-4xl px-6 py-4 flex items-center justify-between">
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

      {/* Breadcrumb */}
      <div className="mx-auto max-w-4xl px-6 pt-6 text-sm text-gray-400">
        <Link href="/" className="hover:text-gray-200">
          Home
        </Link>{" "}
        /{" "}
        <Link href="/blog" className="hover:text-gray-200">
          Blog
        </Link>{" "}
        / <span className="text-gray-300">{post.title}</span>
      </div>

      {/* HERO */}
      <section className="mx-auto max-w-4xl px-6 pt-8 pb-10">
        <p className="inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-300 mb-6 capitalize">
          {post.category.replace("-", " ")}
        </p>
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
          {post.title}
        </h1>
        <p className="mt-6 text-lg text-gray-300">{post.excerpt}</p>
        <div className="mt-6 flex items-center gap-3 text-sm text-gray-400">
          <span>By {siteConfig.name}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={post.publishDate}>
            {new Date(post.publishDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>
      </section>

      {/* BODY */}
      <article className="mx-auto max-w-4xl px-6 pb-4">
        <div className="space-y-10">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl md:text-3xl font-bold text-white">{section.heading}</h2>
              <div className="mt-4 space-y-4 text-gray-300 leading-relaxed">
                {section.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              {section.bullets && section.bullets.length > 0 && (
                <ul className="mt-4 space-y-2 list-disc list-inside text-gray-300">
                  {section.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </article>

      {/* PROOF — related real projects */}
      {relatedProjects.length > 0 && (
        <section className="mx-auto max-w-4xl px-6 py-12">
          <h2 className="text-2xl md:text-3xl font-bold">Real project this applies to</h2>
          <div className="mt-6 grid sm:grid-cols-2 gap-5">
            {relatedProjects.map((p) => (
              <a
                key={p.title}
                href={p.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-blue-400/40 transition-colors"
              >
                <h3 className="font-semibold text-white">{p.title}</h3>
                <p className="mt-1 text-sm text-gray-400 line-clamp-3">{p.description}</p>
                <p className="mt-3 text-xs text-blue-300">{p.tags?.join(" · ")}</p>
              </a>
            ))}
          </div>
        </section>
      )}

      {/* FAQ */}
      {post.faqs.length > 0 && (
        <section className="mx-auto max-w-3xl px-6 py-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center">
            Frequently asked questions
          </h2>
          <div className="mt-8 space-y-4">
            {post.faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-white/10 bg-white/5 p-6">
                <summary className="cursor-pointer font-semibold text-white list-none flex justify-between items-center">
                  {f.q}
                  <span className="text-blue-300 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-gray-400">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      {/* FINAL CTA */}
      <section className="mx-auto max-w-4xl px-6 py-16 text-center border-t border-white/10">
        <h2 className="text-2xl md:text-4xl font-extrabold">
          Ready to build something that actually moves your revenue?
        </h2>
        <p className="mt-4 text-gray-300 text-lg">
          Book a strategy call. You&apos;ll get a clear plan, not a sales pitch.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-green-500 hover:bg-green-600 px-8 py-4 font-semibold text-lg transition-colors"
          >
            Message on WhatsApp
          </a>
          <Link
            href="/#booking"
            className="rounded-full border border-white/20 hover:bg-white/10 px-8 py-4 font-semibold text-lg transition-colors"
          >
            Book a Strategy Call
          </Link>
        </div>
      </section>

      {/* RELATED — posts + keyword pages */}
      {(relatedPosts.length > 0 || relatedKeywordLinks.length > 0) && (
        <section className="mx-auto max-w-4xl px-6 py-12 border-t border-white/10">
          {relatedPosts.length > 0 && (
            <>
              <h2 className="text-xl font-semibold text-gray-300">Related reading</h2>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {relatedPosts.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-blue-400/40 transition-colors"
                  >
                    <h3 className="font-semibold text-white">{r.title}</h3>
                    <p className="mt-1 text-sm text-gray-400 line-clamp-2">{r.excerpt}</p>
                  </Link>
                ))}
              </div>
            </>
          )}
          {relatedKeywordLinks.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-3">
              {relatedKeywordLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 hover:border-blue-400/40 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </section>
      )}

      <footer className="border-t border-white/10 py-8 text-center text-sm text-gray-500">
        <Link href="/blog" className="hover:text-gray-300">
          ← Back to the blog
        </Link>
        <p className="mt-2">
          {siteConfig.name} · {siteConfig.countriesServed.join(" · ")}
        </p>
      </footer>
    </main>
  );
}
