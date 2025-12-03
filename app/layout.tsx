import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.url),
  title: {
    default: siteConfig.seo.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.seo.description,
  keywords: [
    // Core Services
    "Web Development Expert Lagos",
    "IT Specialist Nigeria",
    "Laravel Developer",
    "WordPress Developer Nigeria",
    "Next.js Developer",
    "React Developer Lagos",

    // Specific Skills
    "SEO Expert Nigeria",
    "Digital Marketing Specialist",
    "Sales Funnel Expert",
    "E-commerce Development",
    "SaaS Development",
    "ERP Systems Consultant",
    "CRM Integration Specialist",

    // Technologies
    "Full Stack Developer",
    "TypeScript Developer",
    "PHP Laravel Expert",
    "MySQL Database Expert",
    "API Development",
    "RESTful API",

    // Business Solutions
    "Business Website Development",
    "Custom Software Development Lagos",
    "IT Consulting Nigeria",
    "Web Application Development",
    "Mobile App Development",
    "E-commerce Solutions Nigeria",

    // Location-based
    "Lagos Web Developer",
    "Nigerian IT Consultant",
    "West Africa Software Developer",

    // Industry-specific
    "Real Estate Platform Developer",
    "Healthcare IT Solutions",
    "Educational Platform Development",
    "Financial Technology Developer",
    "Restaurant Management Systems",

    // Specific Projects
    "POS System Developer",
    "Booking System Development",
    "Payment Integration Expert",
    "Airtable Integration",
    "SendPulse Expert",

    // Professional
    "10+ Years Experience Developer",
    "Freelance Web Developer Lagos",
    "Remote IT Specialist",
    "Abdul-Azeez Agbona",
    "Azeez Agbona Developer",
  ],
  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.seo.url,
    }
  ],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: siteConfig.name,
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification
    // yandex: "your-yandex-verification",
    // bing: "your-bing-verification",
  },
  alternates: {
    canonical: siteConfig.seo.url,
  },
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    url: siteConfig.seo.url,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.seo.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - ${siteConfig.title}`,
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    creator: "@Abdul-Azeezagbona",
    images: [`${siteConfig.seo.url}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": siteConfig.seo.url,
    "name": siteConfig.name,
    "alternateName": "Azeez Agbona",
    "url": siteConfig.seo.url,
    "image": `${siteConfig.seo.url}/og-image.jpg`,
    "jobTitle": siteConfig.title,
    "description": siteConfig.bio,
    "email": siteConfig.email,
    "telephone": `+234${siteConfig.phone}`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lagos",
      "addressRegion": "Lagos State",
      "addressCountry": "NG"
    },
    "sameAs": [
      siteConfig.social.linkedin,
      siteConfig.social.github,
      siteConfig.social.twitter,
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.website,
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Harzotech Solutions",
      "url": siteConfig.website
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Moshood Abiola Polytechnic",
      "location": "Abeokuta, Nigeria"
    },
    "knowsAbout": [
      "Web Development",
      "Laravel",
      "WordPress",
      "React",
      "Next.js",
      "TypeScript",
      "PHP",
      "JavaScript",
      "MySQL",
      "SEO Optimization",
      "Digital Marketing",
      "E-commerce",
      "Sales Funnel Systems",
      "SaaS Development",
      "API Development",
      "CRM Systems",
      "ERP Systems",
      "IT Consulting",
      "Software Development",
      "Machine Learning",
      "Data Analysis"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "HP Certified Sales Specialist",
        "credentialCategory": "Professional Certification"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Letter of Excellence",
        "credentialCategory": "Award",
        "recognizingAuthority": {
          "@type": "Organization",
          "name": "Lagos State Chamber of Commerce & International Arbitration Centre"
        }
      }
    ],
    "award": [
      "Letter of Excellence - Lagos Chamber of Commerce",
      "HP Certified Sales Specialist"
    ]
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Abdul-Azeez Agbona - IT Specialist",
    "description": siteConfig.seo.description,
    "url": siteConfig.seo.url,
    "logo": `${siteConfig.seo.url}/icon-512.png`,
    "image": `${siteConfig.seo.url}/og-image.jpg`,
    "telephone": `+234${siteConfig.phone}`,
    "email": siteConfig.email,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lagos",
      "addressRegion": "Lagos State",
      "addressCountry": "NG"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "6.5244",
      "longitude": "3.3792"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "Nigeria"
      },
      {
        "@type": "Country",
        "name": "United Kingdom"
      },
      {
        "@type": "Country",
        "name": "Canada"
      },
      "Worldwide"
    ],
    "priceRange": "$$",
    "serviceType": [
      "Web Development",
      "IT Consulting",
      "Digital Marketing",
      "SEO Services",
      "E-commerce Development",
      "Custom Software Development",
      "SaaS Development",
      "Sales Funnel Systems"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": siteConfig.testimonials.length.toString(),
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteConfig.seo.url
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": `${siteConfig.seo.url}#about`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Work",
        "item": `${siteConfig.seo.url}#work`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Skills",
        "item": `${siteConfig.seo.url}#skills`
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Testimonials",
        "item": `${siteConfig.seo.url}#testimonials`
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "Contact",
        "item": `${siteConfig.seo.url}#contact`
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      </head>
      <body className="antialiased touch-manipulation">
        {children}
      </body>
    </html>
  );
}
