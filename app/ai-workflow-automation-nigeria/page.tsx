import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import KeywordLandingPage from "@/components/seo/KeywordLandingPage";
import { relatedLinksFor } from "@/components/seo/keywordPages";

const SLUG = "ai-workflow-automation-nigeria";
const TITLE =
  "AI Workflow Automation Agency in Nigeria — Azeez Agbona O. | n8n, Make & Zapier Experts";
const DESCRIPTION =
  "AI workflow automation for Nigerian businesses using n8n, Make and Zapier — HR onboarding, order processing, lead qualification and campaign automation, all built and running today.";

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
    q: "What is AI workflow automation and how does it help my business?",
    a: "It's connecting your tools (CRM, WhatsApp, email, spreadsheets, e-commerce) so repetitive tasks — onboarding, order processing, lead routing, follow-ups — run automatically instead of manually. Live examples include HR onboarding automation, e-commerce order automation and a lead qualification bot.",
  },
  {
    q: "Which automation tools do you use?",
    a: "n8n, Make (Integromat) and Zapier, connected to OpenAI for AI-driven decisions inside the workflow — the tool is chosen based on your existing stack and budget, not a one-size-fits-all platform.",
  },
  {
    q: "Can you automate HR or onboarding processes?",
    a: "Yes — a live HR onboarding automation system handles document collection, account provisioning, training assignments and compliance tracking automatically.",
  },
  {
    q: "Can you automate e-commerce order processing?",
    a: "Yes — an e-commerce order automation system integrates inventory management, shipping notifications, customer updates and refund processing into one workflow.",
  },
  {
    q: "How do I know what to automate first?",
    a: "Share your current manual processes on WhatsApp — the highest-leverage automation is usually the task your team repeats most often with the least judgment required. That's where we start.",
  },
];

const services = [
  {
    title: "n8n / Make / Zapier Automation",
    desc: "Custom workflows connecting your CRM, website, WhatsApp, email and spreadsheets into one system.",
  },
  {
    title: "HR & Onboarding Automation",
    desc: "Document collection, account provisioning, training assignments and compliance tracking, automated.",
  },
  {
    title: "Order & Fulfillment Automation",
    desc: "Inventory sync, shipping notifications, customer updates and refund processing handled automatically.",
  },
  {
    title: "Lead Qualification Automation",
    desc: "AI scoring and routing so your sales team only sees leads worth pursuing.",
  },
  {
    title: "Campaign & Analytics Automation",
    desc: "Voter/customer outreach, sentiment analysis and engagement tracking automated at scale.",
  },
  {
    title: "Custom Integrations",
    desc: "Any tool with an API can be connected — if it exists in your stack, it can likely be automated.",
  },
];

export default function AiWorkflowAutomationNigeria() {
  return (
    <KeywordLandingPage
      pageSlug={SLUG}
      breadcrumbName="AI Workflow Automation in Nigeria"
      badge="⚙️ n8n · Make · Zapier · Workflow Automation"
      h1="AI Workflow Automation for Nigerian Businesses — Stop Doing Manually What Software Can Do"
      subhead={`I'm ${siteConfig.name} — I build the automation layer that connects your tools and removes repetitive manual work, using n8n, Make and Zapier powered by AI.`}
      whyHeading="Why businesses hire me for automation"
      whySubtext="Every hour your team spends on repetitive manual tasks is an hour not spent on growth. I build workflows that run themselves — onboarding, orders, leads, campaigns — so your team focuses on what actually needs a human."
      services={services}
      featuredProjectTitles={[
        "HR Onboarding Automation",
        "E-commerce Order Automation",
        "Lead Qualification AI Bot",
        "Political Campaign AI Agent",
      ]}
      faqs={faqs}
      finalCtaHeading="Ready to automate your busywork?"
      finalCtaSubtext="Tell me about your current manual processes. You'll get a clear plan and a quote — no pressure."
      relatedLinks={relatedLinksFor(SLUG)}
    />
  );
}
