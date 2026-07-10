// Shared content model for every blog post under content/blog/posts/<slug>.ts
// Rendered by components/blog/BlogPostLayout.tsx via app/blog/[slug]/page.tsx.
// Reuses the FaqItem shape already proven on components/seo/KeywordLandingPage.tsx.

import type { FaqItem } from "@/components/seo/KeywordLandingPage";

export type BlogCategory =
  | "case-study"
  | "industry-vertical"
  | "geography"
  | "service"
  | "cost-pricing"
  | "comparison"
  | "how-to";

export interface BlogSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  /** ISO date (YYYY-MM-DD), backdated across the rollout window — not always "today". */
  publishDate: string;
  category: BlogCategory;
  targetKeyword: string;
  excerpt: string;
  sections: BlogSection[];
  faqs: FaqItem[];
  /** Must match real siteConfig.projects[].title values — no invented case studies. */
  relatedProjectTitles: string[];
  /** Must match slugs in components/seo/keywordPages.ts. */
  relatedKeywordSlugs: string[];
  /** Slugs of other posts in content/blog/posts/. */
  relatedPostSlugs: string[];
}

export interface BlogManifestEntry {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  targetKeyword: string;
  publishDate: string;
}
