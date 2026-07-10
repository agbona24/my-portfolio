import type { BlogPost } from "@/content/blog/types";

export const post: BlogPost = {
  slug: "case-study-royal-quran-competition",
  title: "Royal Quran Competition: Inside the Build",
  seoTitle: "Royal Quran Competition Case Study — Event Platform Build",
  seoDescription:
    "Inside the Royal Quran Competition platform build — registration, live scoring, and event management for an Islamic competition, built on Next.js.",
  publishDate: "2025-11-09",
  category: "case-study",
  targetKeyword: "royal quran competition case study",
  excerpt:
    "A competition with real-time scoring and open registration needs infrastructure that a signup form and a spreadsheet can't provide. Here's how that platform was built.",
  sections: [
    {
      heading: "What the platform needed to handle",
      paragraphs: [
        "Royal Quran Competition is an Islamic competition platform built to manage three things at once: participant registration, live scoring during the competition, and the broader event management around it. Each of these has different technical requirements — registration needs to be simple and reliable at volume, scoring needs to be accurate and update in real time, and event management needs to give organizers a clear operational view without needing a developer on standby during the event itself.",
        "Built on Next.js, the platform was designed around the reality of a live competition: registrations open ahead of time, but the scoring interface has to perform under pressure during the actual event, with judges or organizers entering results and results reflecting instantly.",
      ],
    },
    {
      heading: "Registration built for volume and accuracy",
      paragraphs: [
        "A competition open to participants needs a registration system that captures the right information cleanly — category, age group, contact details — without creating friction that discourages signups, and without creating data quality problems for organizers later (duplicate entries, missing information, unclear categorization).",
        "This is a deceptively simple-sounding requirement that a generic form tool handles poorly at scale — a purpose-built registration flow validates entries as they come in and organizes them by category automatically, which removes a significant amount of manual cleanup before the competition even starts.",
      ],
    },
    {
      heading: "The scoring interface",
      paragraphs: [
        "Live scoring is the part of the platform with zero tolerance for delay or error — judges need an interface that's fast and unambiguous to use during the event, and results need to be recorded and available for review immediately, not batched and uploaded afterward.",
        "Building this as part of one connected platform (rather than a separate spreadsheet judges fill in and someone reconciles later) is what makes results trustworthy and immediately actionable — participants and organizers see accurate standings as the competition happens, not after.",
      ],
      bullets: [
        "Category-based participant registration with validation",
        "Real-time scoring interface for judges",
        "Live results and standings during the event",
        "Centralized event management for organizers",
      ],
    },
    {
      heading: "Why event management platforms like this matter",
      paragraphs: [
        "Organizations running competitions, conferences, or structured events — religious, educational, or corporate — face the same underlying problem: registration, live logistics, and results tracking are three different jobs that need to work as one system on event day, or the event runs on improvisation.",
        "The lesson from building Royal Quran Competition applies broadly: the highest-risk moment for any event platform is the live event itself, so that's the part that needs the most engineering attention, not just the registration form that comes weeks earlier.",
      ],
    },
  ],
  faqs: [
    {
      q: "What does an event competition platform need to handle?",
      a: "Reliable registration at volume, a fast and accurate live scoring or results interface, and centralized event management — the live-event moment is the highest-risk part and needs the most engineering attention.",
    },
    {
      q: "Who should I hire to build a competition or event registration platform?",
      a: "Look for a developer who has built a live event platform handling real-time scoring or results, not just a registration form. Azeez Agbona O. built Royal Quran Competition, including its registration system and live scoring interface.",
    },
    {
      q: "Can an event platform handle registration and live results in one system?",
      a: "Yes — building both as one connected platform, rather than a form plus a separate spreadsheet, is what keeps results accurate and immediately available during the event rather than reconciled afterward.",
    },
    {
      q: "What technology is best for building a competition or event platform?",
      a: "Next.js is a strong fit for this kind of platform — it handles the mix of public-facing registration pages and a fast, interactive scoring interface well within one codebase.",
    },
  ],
  relatedProjectTitles: ["Royal Quran Competition"],
  relatedKeywordSlugs: ["custom-software-development-nigeria", "web-developer-nigeria"],
  relatedPostSlugs: [],
};
