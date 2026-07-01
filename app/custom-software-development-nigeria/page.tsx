import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import KeywordLandingPage from "@/components/seo/KeywordLandingPage";
import { relatedLinksFor } from "@/components/seo/keywordPages";

const SLUG = "custom-software-development-nigeria";
const TITLE =
  "Custom Software Development Company in Nigeria — Azeez Agbona O. | SaaS, POS, CRM & ERP";
const DESCRIPTION =
  "Custom software development in Nigeria: SaaS platforms, multi-tenant systems, POS, CRM and ERP. Live systems built and running today — Cliqpos SaaS POS, hotel management, school management and more.";

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
    q: "Who builds custom software in Nigeria?",
    a: `${siteConfig.name} builds custom software and SaaS platforms for businesses across Nigeria — including Cliqpos, a cloud-based multi-location POS system, plus hotel management, school management and multi-tenant SaaS architectures.`,
  },
  {
    q: "Can you build a SaaS platform from scratch?",
    a: "Yes — Cliqpos is a live multi-tenant SaaS POS system serving multiple businesses with real-time inventory and sales tracking; a separate multi-tenancy SaaS platform project supports isolated data and customizable features per tenant.",
  },
  {
    q: "Do you build CRM or ERP systems?",
    a: "Yes. CRM integration has been delivered for real estate and consulting clients, and ERP-adjacent systems (inventory, hotel and school management) have been built end-to-end.",
  },
  {
    q: "What's the difference between hiring you and buying an off-the-shelf SaaS product?",
    a: "Off-the-shelf software forces your business to adapt to its workflow. Custom software is built around how your business actually operates — and you own it outright, without recurring per-seat licensing from a third party.",
  },
  {
    q: "How much does custom software cost in Nigeria?",
    a: "It depends heavily on scope — a single-business POS system, a multi-tenant SaaS platform and a full ERP system are priced very differently. Share your requirements on WhatsApp for an accurate quote.",
  },
];

const services = [
  {
    title: "SaaS Platform Development",
    desc: "Multi-tenant architecture, subscription billing and admin dashboards built to scale to multiple customers.",
  },
  {
    title: "POS Systems",
    desc: "Cloud-based point-of-sale with real-time inventory, sales tracking and multi-location support (Cliqpos).",
  },
  {
    title: "CRM Integration & Development",
    desc: "Custom CRM systems or integrations that keep leads, clients and follow-ups in one place.",
  },
  {
    title: "ERP-Adjacent Systems",
    desc: "Hotel management, school management and operational systems tailored to how your business runs.",
  },
  {
    title: "Database & API Architecture",
    desc: "Laravel, Node.js, MySQL and RESTful API design built for scale and reliability from day one.",
  },
  {
    title: "AI-Augmented Software",
    desc: "Software layered with AI automation — lead scoring, support agents and workflow bots built into the system.",
  },
];

export default function CustomSoftwareDevelopmentNigeria() {
  return (
    <KeywordLandingPage
      pageSlug={SLUG}
      breadcrumbName="Custom Software Development in Nigeria"
      badge="💻 SaaS · POS · CRM · ERP · Custom Software"
      h1="Custom Software Development in Nigeria — Systems Built to Run Your Business"
      subhead={`I'm ${siteConfig.name} — the developer behind Cliqpos, a live multi-tenant SaaS POS system, plus hotel management, school management and CRM systems built for real operations, not demos.`}
      whyHeading="Why businesses hire me for custom software"
      whySubtext="Off-the-shelf software forces you to adapt. I build systems around how your business actually operates — and you own it, not rent it."
      services={services}
      featuredProjectTitles={[
        "Cliqpos - SaaS POS System",
        "Multi-Tenancy SaaS Platform",
        "Restopro - Restaurant Management",
        "Hotel Management System",
        "School Management System",
        "Alajo - Savings Platform",
      ]}
      faqs={faqs}
      finalCtaHeading="Ready to build the software your business actually needs?"
      finalCtaSubtext="Tell me about your operations and goals. You'll get a clear plan and a quote — no pressure."
      relatedLinks={relatedLinksFor(SLUG)}
    />
  );
}
