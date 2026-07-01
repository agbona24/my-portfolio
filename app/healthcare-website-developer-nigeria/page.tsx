import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import KeywordLandingPage from "@/components/seo/KeywordLandingPage";
import { relatedLinksFor } from "@/components/seo/keywordPages";

const SLUG = "healthcare-website-developer-nigeria";
const TITLE =
  "Healthcare Website Developer in Nigeria — Azeez Agbona O. | Clinics, Booking & Patient Funnels";
const DESCRIPTION =
  "Healthcare website developer in Nigeria with live clinic platforms: appointment booking, patient records, sales funnels and AI support agents. Built for Exclusive Smile, Phoenix Derma and Polygrace Home Healthcare.";

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
    q: "Who builds healthcare and clinic websites in Nigeria?",
    a: `${siteConfig.name} has delivered live healthcare platforms including Exclusive Smile Nigeria (dental, with a full sales-funnel system) and Phoenix Derma Lagos (dermatology, with automated patient acquisition), plus Polygrace Home Healthcare in Canada.`,
  },
  {
    q: "Can you build appointment booking into a clinic website?",
    a: "Yes. Booking, patient records and appointment scheduling are standard on every healthcare project — patients book directly, and staff manage the calendar without back-and-forth calls.",
  },
  {
    q: "Do you build sales funnels for healthcare and dental practices?",
    a: "Yes — Exclusive Smile Nigeria runs a complete sales funnel integrating marketing automation, lead nurturing and conversion optimization; Phoenix Derma Lagos runs automated patient acquisition with integrated marketing campaigns. One client reported a 300% increase in qualified leads within 3 months.",
  },
  {
    q: "Can an AI agent handle patient enquiries?",
    a: "Yes — a dental clinic AI support agent has been built handling appointment scheduling, patient inquiries, treatment information and follow-up reminders via natural language processing.",
  },
  {
    q: "How do I get a healthcare website or funnel built?",
    a: "Message on WhatsApp with your practice details and goals. You'll get a clear plan and quote covering the website, booking system, funnel and any AI automation you need.",
  },
];

const services = [
  {
    title: "Clinic & Practice Websites",
    desc: "Professional healthcare websites built to build trust and convert visitors into booked patients.",
  },
  {
    title: "Appointment Booking Systems",
    desc: "Booking, scheduling and patient record systems that remove phone-tag from your front desk.",
  },
  {
    title: "Patient Acquisition Funnels",
    desc: "Marketing automation, lead nurturing and conversion optimization — proven to lift qualified leads 300%.",
  },
  {
    title: "AI Patient Support Agents",
    desc: "AI agents that handle scheduling, FAQs and follow-up reminders 24/7, in natural language.",
  },
  {
    title: "Marketing Automation",
    desc: "Airtable, SendPulse and campaign integrations that keep patients engaged between visits.",
  },
  {
    title: "HIPAA-adjacent Data Handling",
    desc: "Careful handling of patient data and records appropriate to healthcare platforms.",
  },
];

export default function HealthcareWebsiteDeveloperNigeria() {
  return (
    <KeywordLandingPage
      pageSlug={SLUG}
      breadcrumbName="Healthcare Website Developer in Nigeria"
      badge="🏥 Healthcare · Dental · Clinics · Patient Funnels"
      h1="Healthcare Website Developer in Nigeria — Clinic Platforms That Book More Patients"
      subhead={`I'm ${siteConfig.name} — the developer behind Exclusive Smile Nigeria and Phoenix Derma Lagos, healthcare platforms combining booking systems, patient records and full sales-funnel automation.`}
      whyHeading="Why healthcare practices hire me"
      whySubtext="A clinic website that doesn't book patients is a cost, not an asset. I build the booking system, the funnel and the AI support layer that turns visitors into patients."
      services={services}
      featuredProjectTitles={[
        "Exclusive Smile Nigeria",
        "Phoenix Derma Lagos",
        "Polygrace Home Healthcare",
        "Dental Clinic AI Support Agent",
      ]}
      faqs={faqs}
      finalCtaHeading="Ready to fill your patient calendar?"
      finalCtaSubtext="Tell me about your practice and goals. You'll get a clear plan and a quote — no pressure."
      relatedLinks={relatedLinksFor(SLUG)}
    />
  );
}
