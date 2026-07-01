import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import KeywordLandingPage from "@/components/seo/KeywordLandingPage";
import { relatedLinksFor } from "@/components/seo/keywordPages";

const SLUG = "website-cost-nigeria";
const TITLE =
  "How Much Does a Website Cost in Nigeria? (2026 Pricing) — Azeez Agbona O.";
const DESCRIPTION =
  "Real, current pricing for websites, e-commerce stores, SaaS platforms, sales funnels and AI automation in Nigeria — with the factors that actually move the price, from a developer with 50+ delivered projects.";

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
    q: "How much does it cost to build a website in Nigeria?",
    a: "A professional business website typically runs from a few hundred thousand naira for a focused brochure/landing site to several million naira for a full e-commerce store, SaaS platform or sales-funnel system with automation built in. The exact number depends on pages, features, integrations and how much custom design and functionality is required — share your goals on WhatsApp for a real number, not a generic range.",
  },
  {
    q: "What makes one website more expensive than another?",
    a: "Number of pages and custom designs, e-commerce/payment integration, CRM or booking-system integration, AI automation (WhatsApp agents, chatbots), content volume, and how much ongoing maintenance or hosting support is included.",
  },
  {
    q: "Is a cheap website ever the right choice?",
    a: "For a very simple, single-page presence with no lead-generation goal, yes. But most businesses lose more in missed leads from a slow, non-converting cheap site than they save on the build cost — the site should be judged on what it generates, not just what it costs.",
  },
  {
    q: "How much does a SaaS platform or custom software cost in Nigeria?",
    a: "Custom software (POS, CRM, multi-tenant SaaS) is priced by scope and complexity rather than a flat rate — see /custom-software-development-nigeria for examples of what's been built, and share your requirements on WhatsApp for an accurate quote.",
  },
  {
    q: "How much does a sales funnel or AI automation system cost?",
    a: "Funnels and AI automation (WhatsApp agents, workflow automation) are typically priced per system based on integrations required — see /sales-funnel-expert-nigeria and /whatsapp-ai-agent-nigeria for what's included, then message on WhatsApp for a quote specific to your business.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Payment structures are discussed per project based on scope — message on WhatsApp to discuss what works for your budget and timeline.",
  },
];

const services = [
  {
    title: "Business Websites",
    desc: "Professional brochure and multi-page sites — priced by page count, design complexity and content.",
  },
  {
    title: "E-commerce Stores",
    desc: "Online stores with payment integration, product catalogs and inventory — priced by catalog size and features.",
  },
  {
    title: "SaaS & Custom Software",
    desc: "POS, CRM, ERP and multi-tenant platforms — priced by scope, not a flat rate.",
  },
  {
    title: "Sales Funnels",
    desc: "Full funnel builds with automation and integrations — priced by the number of connected systems.",
  },
  {
    title: "AI Automation",
    desc: "WhatsApp agents and workflow automation — priced by complexity of the automation required.",
  },
  {
    title: "Ongoing SEO & Maintenance",
    desc: "Optional monthly SEO, hosting and maintenance retainers for sites that need to keep growing.",
  },
];

export default function WebsiteCostNigeria() {
  return (
    <KeywordLandingPage
      pageSlug={SLUG}
      breadcrumbName="Website Cost in Nigeria"
      badge="💰 Pricing · Website Cost · Nigeria 2026"
      h1="How Much Does a Website Actually Cost in Nigeria?"
      subhead={`I'm ${siteConfig.name} — 10+ years and 50+ delivered projects. Here's a straight answer on what moves the price of a website, e-commerce store, SaaS platform, sales funnel or AI automation system in Nigeria — no generic ranges, a real conversation about your specific project.`}
      whyHeading="Why get a quote from me instead of guessing from a blog post"
      whySubtext="Generic price ranges online are usually outdated and don't account for what actually drives cost — integrations, automation and how much the site needs to convert, not just exist."
      services={services}
      faqs={faqs}
      finalCtaHeading="Want a real number for your project?"
      finalCtaSubtext="Tell me what you're building. You'll get a clear, honest quote — no pressure, no generic ranges."
      relatedLinks={relatedLinksFor(SLUG)}
    />
  );
}
