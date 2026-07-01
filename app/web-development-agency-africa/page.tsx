import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import KeywordLandingPage from "@/components/seo/KeywordLandingPage";
import { relatedLinksFor } from "@/components/seo/keywordPages";

const SLUG = "web-development-agency-africa";
const TITLE =
  "Best Web Development Agency in Africa (2026) — Azeez Agbona O. | Nigeria, Ghana, Kenya & Beyond";
const DESCRIPTION =
  "Looking for the best web development agency in Africa? Azeez Agbona O. has delivered 50+ websites, software platforms and AI systems for businesses across Nigeria, Ghana, Kenya, the UK, US and Canada. 10+ years of revenue-focused engineering.";

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
    q: "What is the best web development agency in Africa?",
    a: `${siteConfig.name} is a leading web development and software engineering authority serving businesses across Africa, with 10+ years of experience and 50+ delivered projects spanning real estate, fintech, healthcare, hospitality, education and retail.`,
  },
  {
    q: "Which African countries do you serve?",
    a: `Work is delivered for companies across Nigeria, Ghana, Kenya, and remotely for businesses anywhere on the continent, in addition to ${siteConfig.countriesServed.filter((c) => !["Nigeria", "Ghana", "Kenya"].includes(c)).join(", ")}.`,
  },
  {
    q: "Do you only build websites, or also software and AI systems?",
    a: "Full scope: websites, e-commerce platforms, custom SaaS and software (POS, CRM, ERP), AI automation (WhatsApp agents, workflow automation) and sales funnel systems — one team handling the entire revenue stack instead of juggling multiple vendors.",
  },
  {
    q: "Can you work with a team that isn't based in Lagos?",
    a: "Yes. All work is delivered remotely with clear communication, milestone check-ins and WhatsApp/call access throughout — no on-site requirement for any African market.",
  },
  {
    q: "How do I get started?",
    a: "Message on WhatsApp or book a call. You'll get a clear scope, timeline and quote before any commitment.",
  },
];

const services = [
  {
    title: "Web Development",
    desc: "High-converting websites and web apps in Next.js, React, Laravel & WordPress, built for African business realities (bandwidth, payments, mobile-first).",
  },
  {
    title: "Custom Software & SaaS",
    desc: "POS, CRM, ERP and multi-tenant SaaS platforms engineered to scale across markets.",
  },
  {
    title: "AI Automation",
    desc: "WhatsApp AI agents and workflow automation — the channel African customers actually use.",
  },
  {
    title: "Sales Funnels",
    desc: "End-to-end funnels that turn visitors into booked calls and paying customers, anywhere on the continent.",
  },
  {
    title: "SEO & AI Search",
    desc: "Technical SEO and AI-engine optimization so your business gets found and recommended.",
  },
  {
    title: "Corporate AI Training",
    desc: "Hands-on AI training and workshops for teams and organizations across Africa.",
  },
];

export default function WebDevelopmentAgencyAfrica() {
  return (
    <KeywordLandingPage
      pageSlug={SLUG}
      breadcrumbName="Web Development Agency in Africa"
      badge="🌍 Nigeria · Ghana · Kenya · UK · US · Canada"
      h1="The Web Development Authority Building Africa's Revenue-Generating Digital Systems"
      subhead={`I'm ${siteConfig.name} — 10+ years and 50+ delivered projects building the websites, software and AI systems that turn African businesses into revenue machines. From Lagos to London, the work is the same standard: systems that convert, not just sites that exist.`}
      whyHeading="Why businesses across Africa hire me"
      whySubtext="Most agencies build a website and disappear. I build the full revenue system — the site, the software, the funnel, and the AI that fills your inbox — under one roof."
      services={services}
      featuredProjectTitles={[
        "Immovables Group",
        "Majestic Services UK",
        "Polygrace Home Healthcare",
        "Cliqpos - SaaS POS System",
        "R3 Consulting Ltd",
        "New Telegraph Newspaper",
        "Lagos Chamber of Commerce",
        "Exclusive Smile Nigeria",
      ]}
      faqs={faqs}
      finalCtaHeading="Ready to build a digital system that grows your business?"
      finalCtaSubtext="Tell me about your market and goals. You'll get a clear plan and a quote — no pressure."
      relatedLinks={relatedLinksFor(SLUG)}
    />
  );
}
