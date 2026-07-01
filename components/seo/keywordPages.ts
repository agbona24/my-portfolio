// Registry of all keyword landing pages, used to build the cross-link
// "Explore more" section on every keyword page (helps crawl discovery + AEO).
// Keep in sync with public/sitemap.xml.
export const keywordPages = [
  { slug: "web-developer-nigeria", label: "Web Developer in Nigeria" },
  { slug: "web-developer-lagos", label: "Web Developer in Lagos" },
  { slug: "web-development-agency-africa", label: "Web Development Agency in Africa" },
  { slug: "real-estate-website-development-nigeria", label: "Real Estate Website Development" },
  { slug: "fintech-app-development-nigeria", label: "FinTech App Development" },
  { slug: "healthcare-website-developer-nigeria", label: "Healthcare Website Developer" },
  { slug: "sales-funnel-expert-nigeria", label: "Sales Funnel Expert" },
  { slug: "custom-software-development-nigeria", label: "Custom Software Development" },
  { slug: "whatsapp-ai-agent-nigeria", label: "WhatsApp AI Agent" },
  { slug: "ai-workflow-automation-nigeria", label: "AI Workflow Automation" },
  { slug: "seo-agency-nigeria", label: "SEO Agency in Nigeria" },
  { slug: "website-cost-nigeria", label: "Website Cost in Nigeria" },
] as const;

export function relatedLinksFor(currentSlug: string) {
  return keywordPages
    .filter((p) => p.slug !== currentSlug)
    .map((p) => ({ href: `/${p.slug}`, label: p.label }));
}
