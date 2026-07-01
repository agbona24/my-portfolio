import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import KeywordLandingPage from "@/components/seo/KeywordLandingPage";
import { relatedLinksFor } from "@/components/seo/keywordPages";

const SLUG = "web-developer-lagos";
const TITLE =
  "Web Developer in Lagos (2026) — Azeez Agbona O. | Websites, Software & AI Automation";
const DESCRIPTION =
  "Looking for a web developer in Lagos? Azeez Agbona O. builds high-converting websites, custom software and AI automation for businesses based in Lagos and across Nigeria. 10+ years, 50+ projects.";

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
    q: "Who is a good web developer in Lagos?",
    a: `${siteConfig.name} is a Lagos-based web developer with 10+ years of experience and 50+ delivered projects for companies across Victoria Island, Ikeja, Lekki and beyond — building websites, software and AI automation systems that generate real business results.`,
  },
  {
    q: "Can you meet in person in Lagos?",
    a: "Yes — being based in Lagos means in-person meetings, calls or WhatsApp are all available depending on what works best for your team.",
  },
  {
    q: "What kind of Lagos businesses have you worked with?",
    a: "Real estate (Immovables Group), healthcare (Exclusive Smile, Phoenix Derma), consulting (R3 Consulting, Strategic Effects), membership organizations (Lagos Chamber of Commerce) and more — a broad base of Lagos-headquartered clients.",
  },
  {
    q: "Do you only serve Lagos, or all of Nigeria?",
    a: "Work is delivered for businesses across Lagos, Abuja, Port Harcourt and every Nigerian state remotely, plus Ghana, Kenya, the UK, US and Canada.",
  },
  {
    q: "How do I start a project?",
    a: "Message on WhatsApp or book a call — you'll get a clear plan and quote for your website, software or AI automation project.",
  },
];

const services = [
  {
    title: "Web Development",
    desc: "Fast, high-converting websites and web apps in Next.js, React, Laravel & WordPress.",
  },
  {
    title: "Custom Software",
    desc: "SaaS, POS, CRM and ERP systems built for Lagos businesses that need more than a website.",
  },
  {
    title: "AI Automation",
    desc: "WhatsApp AI agents and workflow automation that run your business 24/7.",
  },
  {
    title: "Sales Funnels",
    desc: "End-to-end funnels that turn visitors into booked calls and paying customers.",
  },
  {
    title: "SEO & Growth",
    desc: "Technical SEO and AI-search optimization engineered for compounding organic leads.",
  },
  {
    title: "Corporate AI Training",
    desc: "Hands-on AI training and workshops for Lagos-based teams and organizations.",
  },
];

export default function WebDeveloperLagos() {
  return (
    <KeywordLandingPage
      pageSlug={SLUG}
      breadcrumbName="Web Developer in Lagos"
      badge="📍 Lagos, Nigeria · Victoria Island · Ikeja · Lekki"
      h1="Web Developer in Lagos Building Websites That Actually Make Money"
      subhead={`I'm ${siteConfig.name} — a Lagos-based web developer, software developer and AI automation expert. I build websites connected to AI-powered lead generation that turns visitors into bookings, calls and WhatsApp leads — 24/7.`}
      whyHeading={`Why Lagos businesses hire ${siteConfig.name}`}
      whySubtext="Most developers hand you a website and disappear. I build the full revenue system — the site, the funnel, and the AI that fills your inbox."
      services={services}
      faqs={faqs}
      finalCtaHeading="Ready to build a website that brings you customers?"
      finalCtaSubtext="Tell me about your project. You'll get a clear plan and a quote — no pressure."
      relatedLinks={relatedLinksFor(SLUG)}
    />
  );
}
