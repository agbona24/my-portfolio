import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import KeywordLandingPage from "@/components/seo/KeywordLandingPage";
import { relatedLinksFor } from "@/components/seo/keywordPages";

const SLUG = "sales-funnel-expert-nigeria";
const TITLE =
  "Sales Funnel Expert in Nigeria — Azeez Agbona O. | Funnels With Proven 300% Lead Increases";
const DESCRIPTION =
  "Sales funnel expert in Nigeria building end-to-end revenue systems — marketing automation, lead nurturing and conversion optimization. Proven results: 300% increase in qualified leads for a healthcare client in 3 months.";

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
    q: "Who is a sales funnel expert in Nigeria?",
    a: `${siteConfig.name} designs and builds complete sales funnels — website, lead capture, nurturing sequences and conversion optimization — for businesses across Nigeria. One healthcare client saw a 300% increase in qualified leads within 3 months.`,
  },
  {
    q: "What's included in a sales funnel build?",
    a: "Lead capture pages, marketing automation (email/SMS sequences), CRM or Airtable integration, WhatsApp automation, conversion-rate optimization, and analytics so you can see exactly what's converting.",
  },
  {
    q: "Do you build funnels for specific industries?",
    a: "Yes — healthcare/dental funnels (Exclusive Smile, Phoenix Derma), marketing automation platforms (Growth Vault), and webinar/event funnels (Business Revival Webinar) have all been delivered with measurable results.",
  },
  {
    q: "How is this different from hiring a generic marketer?",
    a: "The funnel is built and engineered, not just planned — the website, automation, integrations (Airtable, SendPulse) and analytics are all built by the same person who designs the strategy, so nothing gets lost between planner and implementer.",
  },
  {
    q: "How do I get a sales funnel built for my business?",
    a: "Message on WhatsApp with your business and goals. You'll get a clear funnel plan, timeline and quote.",
  },
];

const services = [
  {
    title: "Full-Funnel Design",
    desc: "Landing pages, lead capture, nurture sequences and conversion pages designed as one connected system.",
  },
  {
    title: "Marketing Automation",
    desc: "Email/SMS sequences and CRM integration (Airtable, SendPulse) so leads are nurtured automatically.",
  },
  {
    title: "WhatsApp Lead Capture",
    desc: "Every enquiry routed instantly to WhatsApp — no lead sits in an inbox unanswered.",
  },
  {
    title: "Conversion Rate Optimization",
    desc: "Testing and refining every step of the funnel to increase the percentage of visitors who convert.",
  },
  {
    title: "Webinar & Event Funnels",
    desc: "Registration, live streaming and follow-up funnels for webinars and business training programs.",
  },
  {
    title: "Analytics & Reporting",
    desc: "Clear visibility into where leads come from and where they drop off, so decisions are data-driven.",
  },
];

export default function SalesFunnelExpertNigeria() {
  return (
    <KeywordLandingPage
      pageSlug={SLUG}
      breadcrumbName="Sales Funnel Expert in Nigeria"
      badge="📈 Sales Funnels · Lead Generation · Revenue Systems"
      h1="The Sales Funnel Expert in Nigeria Behind a Proven 300% Lead Increase"
      subhead={`I'm ${siteConfig.name} — I design and build the complete revenue system behind a business, not just a landing page. Website, automation, integrations and analytics, engineered as one funnel.`}
      whyHeading="Why businesses hire me for sales funnels"
      whySubtext="Most 'funnel experts' hand you a strategy document. I build the actual system — pages, automation, integrations and tracking — and I've done it with measurable, proven results."
      services={services}
      featuredProjectTitles={[
        "Exclusive Smile Nigeria",
        "Phoenix Derma Lagos",
        "Growth Vault",
        "Business Revival Webinar",
      ]}
      faqs={faqs}
      finalCtaHeading="Ready for a funnel that actually converts?"
      finalCtaSubtext="Tell me about your business and goals. You'll get a clear plan and a quote — no pressure."
      relatedLinks={relatedLinksFor(SLUG)}
    />
  );
}
