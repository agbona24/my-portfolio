import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import KeywordLandingPage from "@/components/seo/KeywordLandingPage";
import { relatedLinksFor } from "@/components/seo/keywordPages";

const SLUG = "seo-agency-nigeria";
const TITLE =
  "SEO Agency in Nigeria — Azeez Agbona O. | Technical SEO & AI Engine Optimization (AEO)";
const DESCRIPTION =
  "SEO expert in Nigeria offering technical SEO and AI Engine Optimization (AEO) — getting your business found on Google and recommended by ChatGPT, Perplexity and AI search engines. 10+ years, real ranking results.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${siteConfig.seo.url}/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${siteConfig.seo.url}/${SLUG}`,
    type: "website",
    images: [`${siteConfig.seo.url}/headshot.jpg`],
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    q: "What does an SEO agency in Nigeria actually do?",
    a: `${siteConfig.name} handles technical SEO (site speed, schema markup, crawlability), on-page SEO (content, keywords, internal linking) and increasingly AI Engine Optimization — making sure your business is the answer ChatGPT, Perplexity and Google AI Overviews give when someone asks who to hire.`,
  },
  {
    q: "What is AI Engine Optimization (AEO) and why does it matter now?",
    a: "AEO is optimizing your business to be cited and recommended by AI answer engines, not just ranked on a search results page. As more buyers ask AI assistants 'who's the best [service] in Nigeria' instead of googling it, being structured, cited and schema-marked-up for AI retrieval is becoming as important as traditional SEO.",
  },
  {
    q: "How much does SEO cost in Nigeria?",
    a: "It depends on scope and competitiveness of your target keywords — a local service business and a national e-commerce brand require very different levels of ongoing work. Share your goals on WhatsApp for a tailored quote.",
  },
  {
    q: "How long does SEO take to show results?",
    a: "Technical fixes and schema markup can improve crawlability within weeks; competitive keyword rankings typically take 2-6 months depending on how contested your niche is.",
  },
  {
    q: "Do you use SEO tools?",
    a: "Yes — Google Analytics, Google Search Console, SEMrush, Ahrefs, Screaming Frog SEO Spider and Google Trends are part of the standard toolkit for audits, tracking and keyword research.",
  },
];

const services = [
  {
    title: "Technical SEO Audits",
    desc: "Site speed, crawlability, schema markup and Core Web Vitals fixed at the source.",
  },
  {
    title: "On-Page & Content SEO",
    desc: "Keyword-targeted pages, internal linking and content structured to rank and convert.",
  },
  {
    title: "AI Engine Optimization (AEO)",
    desc: "Schema markup (FAQ, Review, Person, Breadcrumb), entity consistency and structured data so AI engines cite and recommend you.",
  },
  {
    title: "Local SEO",
    desc: "Google Business Profile optimization and local schema for 'near me' and city-level searches.",
  },
  {
    title: "Keyword Research & Strategy",
    desc: "Competitor SERP analysis and keyword-cluster mapping across service lines and geography.",
  },
  {
    title: "SEO + Funnel Integration",
    desc: "SEO built to feed a real conversion funnel, not just traffic for its own sake.",
  },
];

export default function SeoAgencyNigeria() {
  return (
    <KeywordLandingPage
      pageSlug={SLUG}
      breadcrumbName="SEO Agency in Nigeria"
      badge="🔍 SEO · AI Engine Optimization (AEO) · Nigeria"
      h1="The SEO Agency in Nigeria Built for Google and AI Search"
      subhead={`I'm ${siteConfig.name} — I handle technical SEO, content and AI Engine Optimization so your business ranks on Google and gets recommended by ChatGPT, Perplexity and AI Overviews.`}
      whyHeading="Why businesses hire me for SEO"
      whySubtext="Most SEO agencies in Nigeria stop at keywords and backlinks. I build the technical foundation, the content, and the structured data that AI answer engines actually read and cite."
      services={services}
      featuredProjectTitles={[
        "New Telegraph Newspaper",
        "Suko Paint",
        "Lagos Chamber of Commerce",
        "Immovables Realty",
        "Exclusive Smile Nigeria",
        "R3 Consulting Ltd",
      ]}
      faqs={faqs}
      finalCtaHeading="Ready to rank on Google and get recommended by AI?"
      finalCtaSubtext="Tell me about your business and target keywords. You'll get a clear plan and a quote — no pressure."
      relatedLinks={relatedLinksFor(SLUG)}
    />
  );
}
