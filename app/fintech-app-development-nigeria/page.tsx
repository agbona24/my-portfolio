import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import KeywordLandingPage from "@/components/seo/KeywordLandingPage";
import { relatedLinksFor } from "@/components/seo/keywordPages";

const SLUG = "fintech-app-development-nigeria";
const TITLE =
  "FinTech App Development Company in Nigeria — Azeez Agbona O. | Savings, Crypto & Payment Platforms";
const DESCRIPTION =
  "FinTech app developer in Nigeria with live platforms: digital savings (Alajo), crypto trading (Suap.ng) and currency exchange (Yuan Bridge). Secure, scalable financial software built for real transactions.";

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
    q: "Who builds fintech apps in Nigeria?",
    a: `${siteConfig.name} has delivered live fintech platforms including Alajo (digital savings and investment), Suap.ng (cryptocurrency trading) and Yuan Bridge (Naira-to-Yuan currency exchange) — real, working financial software, not prototypes.`,
  },
  {
    q: "Can you build a savings, lending or investment app?",
    a: "Yes. Alajo is a live digital savings and investment platform with secure transactions, automated savings and financial analytics — the same architecture applies to lending, investment and wallet products.",
  },
  {
    q: "Do you build cryptocurrency and trading platforms?",
    a: "Yes. Suap.ng is a live crypto trading platform with real-time market data and secure wallet integration; a separate crypto trading app project adds real-time charts and portfolio tracking.",
  },
  {
    q: "How do you handle security and payment integration for financial apps?",
    a: "Secure transaction handling, encrypted data storage and payment/wallet integration are built into every fintech project from day one — financial software is held to a higher security bar than a standard business website.",
  },
  {
    q: "How much does a fintech app cost to build in Nigeria?",
    a: "It depends on scope — a savings platform, a currency exchange system and a full crypto trading app are priced very differently. Share your requirements on WhatsApp for an accurate quote.",
  },
];

const services = [
  {
    title: "Digital Savings & Investment",
    desc: "Automated savings, investment tracking and financial analytics platforms — built and shipped (Alajo).",
  },
  {
    title: "Crypto & Trading Platforms",
    desc: "Real-time market data, secure wallets and portfolio tracking for trading applications.",
  },
  {
    title: "Currency Exchange Systems",
    desc: "Real-time rate conversion and secure transaction flows for cross-currency platforms (Yuan Bridge).",
  },
  {
    title: "Secure Payment Integration",
    desc: "Payment gateway and wallet integration built with the security financial products require.",
  },
  {
    title: "Financial Dashboards & Analytics",
    desc: "Transaction, portfolio and performance dashboards that give users and admins real visibility.",
  },
  {
    title: "AI Automation for FinTech",
    desc: "Automated onboarding, KYC-adjacent workflows and customer support agents layered on top of your platform.",
  },
];

export default function FintechAppDevelopmentNigeria() {
  return (
    <KeywordLandingPage
      pageSlug={SLUG}
      breadcrumbName="FinTech App Development in Nigeria"
      badge="💳 FinTech · Savings · Crypto · Currency Exchange"
      h1="FinTech App Development in Nigeria — Built by the Developer Behind Live Financial Platforms"
      subhead={`I'm ${siteConfig.name} — the developer behind Alajo (digital savings), Suap.ng (crypto trading) and Yuan Bridge (currency exchange). I build secure, scalable financial software, not demo apps.`}
      whyHeading="Why fintech founders hire me"
      whySubtext="Financial products need security, scalability and real transaction handling from day one. These are live platforms processing real activity, not portfolio mockups."
      services={services}
      featuredProjectTitles={[
        "Alajo - Savings Platform",
        "Suap.ng - Crypto Trading",
        "Yuan Bridge - Naira to Yuan Flow",
        "Crypto Trading App",
      ]}
      faqs={faqs}
      finalCtaHeading="Ready to build your fintech platform?"
      finalCtaSubtext="Tell me about your product and goals. You'll get a clear plan and a quote — no pressure."
      relatedLinks={relatedLinksFor(SLUG)}
    />
  );
}
