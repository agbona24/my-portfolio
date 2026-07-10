import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { blogManifest } from "@/content/blog/manifest";
import BlogIndexClient from "./BlogIndexClient";

const TITLE = "Blog — Web Development, AI Automation & Sales Funnel Insights";
const DESCRIPTION =
  "Guides, case studies and cost breakdowns on web development, AI automation, sales funnels and software — written from 50+ real projects delivered across Nigeria, Ghana, Kenya, the UK and US.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${siteConfig.seo.url}/blog` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${siteConfig.seo.url}/blog`,
    type: "website",
    images: [`${siteConfig.seo.url}/headshot.jpg`],
  },
  robots: { index: true, follow: true },
};

export default function BlogIndexPage() {
  return <BlogIndexClient posts={blogManifest} />;
}
