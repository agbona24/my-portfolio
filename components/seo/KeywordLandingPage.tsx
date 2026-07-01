import Link from "next/link";
import { siteConfig } from "@/config/site";

/*
=====================================================================
  SHARED KEYWORD LANDING PAGE TEMPLATE
  Used by every /xxx-keyword-page route under app/.
  Pattern proven on /web-developer-nigeria: H1 superlative claim +
  proof metrics + services + real project proof + testimonials +
  FAQ schema + breadcrumb schema + WhatsApp/call CTA + internal
  cross-links to sibling keyword pages (for AEO + crawl discovery).
  See KEYWORD-STRATEGY.md for the full research behind these pages.
=====================================================================
*/

export interface FaqItem {
  q: string;
  a: string;
}

export interface ServiceItem {
  title: string;
  desc: string;
}

export interface RelatedLink {
  href: string;
  label: string;
}

export interface KeywordLandingPageProps {
  pageSlug: string;
  breadcrumbName: string;
  badge: string;
  h1: string;
  subhead: string;
  whyHeading: string;
  whySubtext: string;
  services: ServiceItem[];
  featuredProjectTitles?: string[];
  faqs: FaqItem[];
  finalCtaHeading: string;
  finalCtaSubtext: string;
  relatedLinks: RelatedLink[];
}

export default function KeywordLandingPage({
  pageSlug,
  breadcrumbName,
  badge,
  h1,
  subhead,
  whyHeading,
  whySubtext,
  services,
  featuredProjectTitles,
  faqs,
  finalCtaHeading,
  finalCtaSubtext,
  relatedLinks,
}: KeywordLandingPageProps) {
  const featured = featuredProjectTitles
    ? (featuredProjectTitles
        .map((title) => siteConfig.projects.find((p) => p.title === title))
        .filter(Boolean) as typeof siteConfig.projects)
    : siteConfig.projects.filter((p) => p.liveUrl && p.liveUrl !== "#").slice(0, 8);

  const proofTestimonials = siteConfig.testimonials.slice(0, 4);
  const pageUrl = `${siteConfig.seo.url}/${pageSlug}`;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": siteConfig.seo.url },
      { "@type": "ListItem", "position": 2, "name": breadcrumbName, "item": pageUrl },
    ],
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Top bar */}
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

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-12 text-center">
        <p className="inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-300 mb-6">
          {badge}
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
          {h1}
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">{subhead}</p>

        <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-green-500 hover:bg-green-600 px-8 py-4 font-semibold text-lg transition-colors"
          >
            Start a Project on WhatsApp
          </a>
          <Link
            href="/#booking"
            className="rounded-full border border-white/20 hover:bg-white/10 px-8 py-4 font-semibold text-lg transition-colors"
          >
            Book a Call
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            [siteConfig.stats.yearsExperience, "Years Experience"],
            [siteConfig.stats.projectsCompleted, "Projects Delivered"],
            [siteConfig.stats.happyClients, "Happy Clients"],
            [siteConfig.stats.technologies, "Technologies"],
          ].map(([num, label]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-3xl md:text-4xl font-extrabold text-blue-300">{num}</div>
              <div className="mt-1 text-sm text-gray-400">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY ME */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center">{whyHeading}</h2>
        <p className="mt-4 text-center text-gray-400 max-w-2xl mx-auto">{whySubtext}</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-blue-400/40 transition-colors"
            >
              <h3 className="text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-gray-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROOF — projects */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Recent work</h2>
        <p className="mt-4 text-center text-gray-400">
          A few of 50+ websites, platforms and systems delivered across industries.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((p) => (
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
        <div className="mt-8 text-center">
          <Link href="/#work" className="text-blue-300 hover:text-blue-200 font-medium">
            See the full portfolio →
          </Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center">What clients say</h2>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {proofTestimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-gray-200">&ldquo;{t.content}&rdquo;</p>
              <p className="mt-4 text-sm font-semibold text-white">{t.name}</p>
              <p className="text-xs text-gray-400">{t.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Frequently asked questions</h2>
        <div className="mt-10 space-y-4">
          {faqs.map((f) => (
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

      {/* FINAL CTA */}
      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold">{finalCtaHeading}</h2>
        <p className="mt-4 text-gray-300 text-lg">{finalCtaSubtext}</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-green-500 hover:bg-green-600 px-8 py-4 font-semibold text-lg transition-colors"
          >
            Message on WhatsApp
          </a>
          <a
            href={`tel:+234${siteConfig.phone}`}
            className="rounded-full border border-white/20 hover:bg-white/10 px-8 py-4 font-semibold text-lg transition-colors"
          >
            Call {siteConfig.phone}
          </a>
        </div>
      </section>

      {/* RELATED — internal cross-links for crawl discovery + AEO */}
      {relatedLinks.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 py-12 border-t border-white/10">
          <h2 className="text-xl font-semibold text-center text-gray-300">Explore more</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 hover:border-blue-400/40 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      )}

      <footer className="border-t border-white/10 py-8 text-center text-sm text-gray-500">
        <Link href="/" className="hover:text-gray-300">
          ← Back to {siteConfig.name}
        </Link>
        <p className="mt-2">
          {breadcrumbName} · {siteConfig.countriesServed.join(" · ")}
        </p>
      </footer>
    </main>
  );
}
