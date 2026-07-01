import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import KeywordLandingPage from "@/components/seo/KeywordLandingPage";
import { relatedLinksFor } from "@/components/seo/keywordPages";

const SLUG = "whatsapp-ai-agent-nigeria";
const TITLE =
  "WhatsApp AI Agent for Business in Nigeria — Azeez Agbona O. | 24/7 AI Customer Support & Sales";
const DESCRIPTION =
  "Build a WhatsApp AI agent for your Nigerian business — appointment scheduling, lead qualification, customer support and follow-ups, running 24/7. Live examples: dental clinic AI agent, lead qualification bot.";

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
    q: "What is a WhatsApp AI agent and why does my Nigerian business need one?",
    a: "It's an AI system that handles WhatsApp conversations automatically — answering questions, scheduling appointments, qualifying leads and following up — 24/7. With WhatsApp being the dominant business communication channel in Nigeria, most enquiries arrive after hours or get missed; a WhatsApp AI agent captures every one.",
  },
  {
    q: "Can a WhatsApp AI agent handle appointment booking?",
    a: "Yes — a live dental clinic AI support agent handles appointment scheduling, patient inquiries, treatment information and follow-up reminders using natural language processing.",
  },
  {
    q: "Can it qualify leads before they reach my sales team?",
    a: "Yes — a lead qualification AI bot analyzes prospect data, automates follow-ups and routes only qualified leads to your sales team, so your team spends time on real buyers, not tire-kickers.",
  },
  {
    q: "What tools do you build with?",
    a: "OpenAI, n8n, Make (Integromat) and Zapier power the automation layer, connected to your WhatsApp Business number, CRM and website.",
  },
  {
    q: "How much does a WhatsApp AI agent cost?",
    a: "It depends on complexity — a simple FAQ/booking agent and a full lead-qualification-and-routing system are priced differently. Share your use case on WhatsApp for a tailored quote.",
  },
];

const services = [
  {
    title: "24/7 Customer Support Agents",
    desc: "AI agents that answer FAQs, product questions and support requests around the clock.",
  },
  {
    title: "Appointment Scheduling Bots",
    desc: "Booking, rescheduling and reminders handled automatically — proven in a live dental clinic deployment.",
  },
  {
    title: "Lead Qualification & Routing",
    desc: "AI scores and routes leads so your sales team only talks to qualified prospects.",
  },
  {
    title: "Order & Workflow Automation",
    desc: "Order updates, shipping notifications and follow-ups automated end-to-end.",
  },
  {
    title: "CRM & Website Integration",
    desc: "The agent connects to your existing CRM, website and booking system — not a disconnected chatbot.",
  },
  {
    title: "Custom AI Agent Design",
    desc: "Every agent is designed around your business's actual conversations, not a generic template.",
  },
];

export default function WhatsappAiAgentNigeria() {
  return (
    <KeywordLandingPage
      pageSlug={SLUG}
      breadcrumbName="WhatsApp AI Agent for Business in Nigeria"
      badge="🤖 WhatsApp AI · 24/7 Automation · Nigeria"
      h1="WhatsApp AI Agents for Nigerian Businesses — Answer Every Lead, 24/7"
      subhead={`I'm ${siteConfig.name} — I build WhatsApp AI agents that handle scheduling, support and lead qualification automatically, so no enquiry ever goes unanswered again.`}
      whyHeading="Why businesses hire me for WhatsApp AI"
      whySubtext="Most enquiries in Nigeria arrive on WhatsApp, after hours, and go unanswered. I build the AI layer that responds instantly, qualifies the lead, and hands your team only the ones worth calling."
      services={services}
      featuredProjectTitles={[
        "Dental Clinic AI Support Agent",
        "Lead Qualification AI Bot",
        "Political Campaign AI Agent",
        "E-commerce Order Automation",
      ]}
      faqs={faqs}
      finalCtaHeading="Ready for an AI agent that never sleeps?"
      finalCtaSubtext="Tell me how customers reach you today. You'll get a clear plan and a quote — no pressure."
      relatedLinks={relatedLinksFor(SLUG)}
    />
  );
}
