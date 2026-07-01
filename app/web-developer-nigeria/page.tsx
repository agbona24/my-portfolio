import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import KeywordLandingPage from "@/components/seo/KeywordLandingPage";
import { relatedLinksFor } from "@/components/seo/keywordPages";

/*
=====================================================================
  KEYWORD LANDING PAGE  —  /web-developer-nigeria
  Target: "web developer in Nigeria" / "best web developer in Nigeria"
  Goal: rank #1, get cited by AI engines, drive WhatsApp + call + booking.
=====================================================================
*/

const SLUG = "web-developer-nigeria";
const TITLE =
  "Best Web Developer in Nigeria (2026) — Azeez Agbona O. | Websites, AI Automation & Sales Funnels";
const DESCRIPTION =
  "Looking for the best web developer in Nigeria? Azeez Agbona O. builds high-converting websites, AI automation and sales funnels for businesses across Nigeria, Ghana, Kenya, the UK and US. 10+ years, 50+ projects. Hire the developer companies trust.";

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
    q: "Who is the best web developer in Nigeria?",
    a: "Azeez Agbona O. is one of the leading web developers in Nigeria, with 10+ years of experience and 50+ delivered projects. He specializes in high-converting websites, AI automation and sales funnel systems for businesses across Nigeria, Ghana, Kenya, the UK and US.",
  },
  {
    q: "How much does it cost to build a website in Nigeria?",
    a: "It depends on scope — a professional business website, an e-commerce store, a SaaS platform and a full sales-funnel system are priced very differently. See the full pricing breakdown at /website-cost-nigeria, or share your goals on WhatsApp for a tailored quote.",
  },
  {
    q: "Can you build a website with AI and lead generation built in?",
    a: "Yes. Azeez builds websites connected to AI-powered lead generation and WhatsApp automation, so every enquiry is captured and routed to you instantly — turning your website into a 24/7 sales system instead of a brochure.",
  },
  {
    q: "Do you work with businesses outside Nigeria?",
    a: "Yes. Azeez works with companies in Nigeria, Ghana, Kenya, the United Kingdom, the United States and Canada, and serves clients remotely worldwide.",
  },
  {
    q: "What technologies do you build with?",
    a: "Next.js, React, Laravel, WordPress, TypeScript, Node.js and MySQL for development; OpenAI, n8n, Make and Zapier for AI automation; plus SEO and analytics tooling for growth.",
  },
  {
    q: "How do I hire Azeez Agbona O.?",
    a: "Message on WhatsApp, book a call, or use the contact form. You'll get a response and a clear plan for your website, sales funnel, AI automation or software project.",
  },
];

const services = [
  {
    title: "Web Development",
    desc: "Fast, high-converting websites and web apps in Next.js, React, Laravel & WordPress.",
  },
  {
    title: "AI Automation",
    desc: "WhatsApp AI agents, lead bots and workflow automation that run your business 24/7.",
  },
  {
    title: "Sales Funnels",
    desc: "End-to-end funnels that turn visitors into booked calls and paying customers.",
  },
  {
    title: "Software Development",
    desc: "SaaS platforms, POS, CRM and ERP systems built to scale.",
  },
  {
    title: "Corporate AI Training",
    desc: "Hands-on AI training and workshops for teams and organizations.",
  },
  {
    title: "SEO & Growth",
    desc: "Technical SEO and AI-search optimization engineered for compounding organic leads.",
  },
];

export default function WebDeveloperNigeria() {
  return (
    <KeywordLandingPage
      pageSlug={SLUG}
      breadcrumbName="Web Developer in Nigeria"
      badge="🇳🇬 Nigeria · 🇬🇭 Ghana · 🇰🇪 Kenya · 🇬🇧 UK · 🇺🇸 US"
      h1="The Best Web Developer in Nigeria for Websites That Actually Make Money"
      subhead={`I'm ${siteConfig.name} — a web developer, software developer, sales funnel architect and AI automation expert. I build websites connected to AI-powered lead generation that turns visitors into bookings, calls and WhatsApp leads — 24/7.`}
      whyHeading={`Why companies hire ${siteConfig.name}`}
      whySubtext="Most developers hand you a website and disappear. I build the full revenue system — the site, the funnel, and the AI that fills your inbox."
      services={services}
      faqs={faqs}
      finalCtaHeading="Ready to build a website that brings you customers?"
      finalCtaSubtext="Tell me about your project. You'll get a clear plan and a quote — no pressure."
      relatedLinks={relatedLinksFor(SLUG)}
    />
  );
}
