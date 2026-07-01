import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import KeywordLandingPage from "@/components/seo/KeywordLandingPage";
import { relatedLinksFor } from "@/components/seo/keywordPages";

const SLUG = "real-estate-website-development-nigeria";
const TITLE =
  "Real Estate Website Development in Nigeria — Azeez Agbona O. | Property Platforms That Convert";
const DESCRIPTION =
  "Real estate website developer in Nigeria with proven platforms: property search, agent profiles, mortgage calculators, CRM integration and lead generation. See live real estate platforms built for Immovables Group and more.";

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
    q: "Who builds real estate websites in Nigeria?",
    a: `${siteConfig.name} has built multiple live real estate and property platforms in Nigeria, including Immovables Group, Immovables Realty and Immovables Digital Space — covering property listings, agent profiles, advanced search, CRM integration and lead capture.`,
  },
  {
    q: "What features does a real estate website need to actually generate leads?",
    a: "Advanced property search and filters, mortgage/affordability calculators, agent profile pages, CRM integration so every enquiry is tracked, virtual tour support, and a WhatsApp/call lead-capture flow connected to your sales team — a brochure site without these converts far fewer visitors.",
  },
  {
    q: "Can you integrate a CRM or property management system?",
    a: "Yes. Past work includes full CRM integration for property groups, syncing listings, leads and agent activity into one system instead of spreadsheets.",
  },
  {
    q: "How long does a real estate platform take to build?",
    a: "Depends on scope — a property listing site with search and CRM integration is a different timeline than a full marketplace with agent dashboards. Share your requirements on WhatsApp for an accurate timeline and quote.",
  },
  {
    q: "Do you work with real estate companies outside Nigeria?",
    a: `Yes — real estate and property-adjacent platforms have been delivered for clients across ${siteConfig.countriesServed.join(", ")}.`,
  },
];

const services = [
  {
    title: "Property Listing Platforms",
    desc: "Advanced search, filters, map views and detailed property pages built to convert browsers into enquiries.",
  },
  {
    title: "Agent & Brokerage Profiles",
    desc: "Agent directories, performance pages and lead-routing so the right agent gets the right enquiry.",
  },
  {
    title: "CRM Integration",
    desc: "Connect your website to a CRM so every lead, viewing request and follow-up is tracked automatically.",
  },
  {
    title: "Mortgage & Affordability Tools",
    desc: "Calculators and tools that keep buyers engaged on-site instead of bouncing to a competitor.",
  },
  {
    title: "Lead Generation & Funnels",
    desc: "WhatsApp and call-capture flows that turn property views into booked viewings.",
  },
  {
    title: "Membership & Association Portals",
    desc: "Built a membership portal for the Lagos Chamber of Commerce — the same infrastructure that powers large-scale property association sites.",
  },
];

export default function RealEstateWebsiteDevelopmentNigeria() {
  return (
    <KeywordLandingPage
      pageSlug={SLUG}
      breadcrumbName="Real Estate Website Development in Nigeria"
      badge="🏘️ Real Estate · Property · Realty Platforms"
      h1="Real Estate Website Development in Nigeria That Turns Browsers Into Buyers"
      subhead={`I'm ${siteConfig.name} — the developer behind Immovables Group, Immovables Realty and Immovables Digital Space. I build property platforms with the search, CRM and lead-capture infrastructure that actually convert site visitors into viewings and sales.`}
      whyHeading="Why real estate companies hire me"
      whySubtext="Most real estate websites are static listing pages. I build the full system — search, CRM, agent tools and lead routing — so every visitor becomes a tracked, followed-up lead."
      services={services}
      featuredProjectTitles={[
        "Immovables Realty",
        "Immovables Group",
        "Immovables Digital Space",
        "Cascadia Holdings",
      ]}
      faqs={faqs}
      finalCtaHeading="Ready to build a real estate platform that converts?"
      finalCtaSubtext="Tell me about your property portfolio and goals. You'll get a clear plan and a quote — no pressure."
      relatedLinks={relatedLinksFor(SLUG)}
    />
  );
}
