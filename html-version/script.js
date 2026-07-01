/* =====================================================================
   Site data — ported from config/site.ts + the React components
   ===================================================================== */
const siteConfig = {
  name: "Abdul-Azeez Agbona",
  title: "Digital Growth Architect & Revenue Systems Expert",
  email: "azeez.agbona.o@gmail.com",
  location: "Lagos, Nigeria",
  phone: "07069716822",
  whatsapp: "https://wa.me/2347069716822?text=Hello%20Abdul-Azeez,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project%20with%20you.",
  website: "https://harzotech.com.ng",
  resume: "#",

  stats: { yearsExperience: "10+", projectsCompleted: "50+", happyClients: "30+", technologies: "15+" },

  about: {
    description: [
      "Most businesses have great products but broken systems. In 10+ years working with 50+ companies across Nigeria, the UK, and Canada, I've built the digital infrastructure that turns visitors into revenue — SaaS platforms, AI automation engines, and complete sales funnel ecosystems that operate 24/7.",
      "My work spans custom web and app development, AI-powered workflow automation, high-converting sales funnels, and SEO strategies engineered for compounding organic growth. Brands like New Telegraph, Immovables Group, LACIAC, and Exclusive Smile Dental Clinic have seen measurable increases in leads, conversions, and operational efficiency through the systems I've built.",
      "I partner with companies that are serious about growth — not just looking for a vendor. Whether it's architecting an enterprise platform, designing a lead generation engine, or deploying AI automation across an entire business operation, I bring strategic thinking and technical execution under one roof.",
    ],
  },

  // About floating pills
  aboutSkills: [
    { name: "Web Dev", icon: "🌐", grad: ["#3b82f6", "#06b6d4"] },
    { name: "App Dev", icon: "📱", grad: ["#8b5cf6", "#ec4899"] },
    { name: "Automation", icon: "⚡", grad: ["#eab308", "#f97316"] },
    { name: "Sales Funnel", icon: "📊", grad: ["#22c55e", "#059669"] },
    { name: "IT Consulting", icon: "💼", grad: ["#475569", "#1f2937"] },
    { name: "SaaS Development", icon: "☁️", grad: ["#0ea5e9", "#2563eb"] },
    { name: "Data Analytics", icon: "📈", grad: ["#ec4899", "#e11d48"] },
  ],

  // Skill groups (matches Skills.tsx categories + config arrays)
  skillGroups: [
    { category: "Web Development", icon: "💻", grad: ["#2563eb", "#0891b2"], items: ["HTML", "CSS", "JavaScript", "WordPress", "React", "Next.js", "Vite", "Tailwind CSS", "Thrive Architect"] },
    { category: "Backend & Database", icon: "🔧", grad: ["#7c3aed", "#db2777"], items: ["PHP", "Laravel", "MySQL", "SQL", "Node.js", "RESTful API", "API Development", "Database Design", "Database Management"] },
    { category: "SEO & Marketing Tools", icon: "📊", grad: ["#16a34a", "#0d9488"], items: ["Google Analytics", "SEMrush", "Ahrefs", "Yoast SEO", "Google Ads", "Google Search Console", "Screaming Frog SEO Spider", "Mailchimp", "Active Campaign", "Get Response", "Google Trends"] },
    { category: "Data Science & AI", icon: "🤖", grad: ["#ea580c", "#dc2626"], items: ["Machine Learning", "Deep Learning", "Data Analysis", "Big Data Analytics", "Machine Learning Applications", "AI Workflow Automation", "n8n", "Make (Integromat)", "Zapier", "OpenAI API"] },
    { category: "Professional Skills", icon: "👔", grad: ["#4f46e5", "#7c3aed"], items: ["Leadership & Team Management", "Project Management", "Client Relationship Management", "Critical Thinking", "Problem Solving", "Communication & Collaboration", "Strategic Thinking", "Business Development", "Techpreneurship", "Business Model Development"] },
    { category: "Technical Expertise", icon: "⚡", grad: ["#db2777", "#e11d48"], items: ["SEO Optimization", "AI Engine Optimization (AEO)", "Search Engine Optimization", "Digital Marketing Strategies", "Sales Funnel Systems", "Software Development", "Technical Support", "IT Support", "CRM Systems", "ERP Systems", "Technical Analysis"] },
  ],

  // Services (matches Services.tsx)
  services: [
    { title: "Sales-Converting Web Systems", desc: "High-performance websites and web applications built to convert traffic into revenue. From strategic landing pages to full-scale SaaS platforms, every build is architected around your business goals — not just aesthetics.", feats: ["React & Next.js", "Laravel & PHP", "WordPress", "E-commerce", "API Development"], grad: ["#3b82f6", "#06b6d4"], iconPath: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
    { title: "AI Automation & Workflow Systems", desc: "End-to-end automation that removes bottlenecks and scales your operations without scaling headcount. Custom AI agents, multi-step workflow automation, and smart integrations that compound efficiency month over month.", feats: ["n8n & Make", "Zapier", "OpenAI Integration", "Custom AI Agents", "Workflow Optimization"], grad: ["#8b5cf6", "#ec4899"], iconPath: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
    { title: "SEO & Organic Growth Strategy", desc: "Data-engineered SEO strategies that compound over time, not quick fixes that fade. Technical architecture, content authority, and AEO positioning that puts your business in front of the right audience — without paying for every click.", feats: ["Technical SEO", "AI Engine Optimization", "Content Strategy", "Analytics & Reporting", "Local SEO"], grad: ["#22c55e", "#14b8a6"], iconPath: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
    { title: "Sales Funnel & Revenue Architecture", desc: "Full-stack sales funnel ecosystems designed to turn cold traffic into paying customers on autopilot. CRM integration, behavioural email sequences, and relentless conversion optimization — built for businesses ready to scale their revenue.", feats: ["Landing Pages", "Email Automation", "CRM Integration", "A/B Testing", "Conversion Optimization"], grad: ["#f97316", "#ef4444"], iconPath: "M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" },
  ],

  // Stats (matches Stats.tsx)
  statBlocks: [
    { value: 10, suffix: "+", label: "Years Experience", desc: "Building digital solutions", icon: "🏆", grad: ["#3b82f6", "#06b6d4"] },
    { value: 50, suffix: "+", label: "Projects Completed", desc: "Across various industries", icon: "🚀", grad: ["#8b5cf6", "#ec4899"] },
    { value: 30, suffix: "+", label: "Happy Clients", desc: "Worldwide satisfaction", icon: "😊", grad: ["#22c55e", "#14b8a6"] },
    { value: 15, suffix: "+", label: "Technologies", desc: "Mastered & deployed", icon: "⚡", grad: ["#f97316", "#ef4444"] },
  ],

  // Process (matches Process.tsx — 5 steps)
  process: [
    { num: "01", title: "Discovery", desc: "Understanding your business goals, target audience, and project requirements through in-depth consultation.", grad: ["#3b82f6", "#06b6d4"], iconPath: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" },
    { num: "02", title: "Design", desc: "Creating wireframes, prototypes, and visual designs that align with your brand and user expectations.", grad: ["#8b5cf6", "#ec4899"], iconPath: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" },
    { num: "03", title: "Develop", desc: "Building robust, scalable solutions using modern technologies and industry best practices.", grad: ["#22c55e", "#14b8a6"], iconPath: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
    { num: "04", title: "Deploy", desc: "Launching your project with thorough testing, optimization, and seamless production deployment.", grad: ["#f97316", "#ef4444"], iconPath: "M5 10l7-7m0 0l7 7m-7-7v18" },
    { num: "05", title: "Support", desc: "Providing ongoing maintenance, updates, and technical support to ensure long-term success.", grad: ["#6366f1", "#8b5cf6"], iconPath: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" },
  ],

  // Clients (matches ClientLogos.tsx — name + industry)
  clients: [
    { name: "Exclusive Smile Nigeria", industry: "Healthcare" },
    { name: "R3 Consulting Ltd", industry: "Consulting" },
    { name: "LACIAC", industry: "Commerce" },
    { name: "Immovables Group", industry: "Real Estate" },
    { name: "Cliqpos", industry: "SaaS" },
    { name: "Phoenix Derma Lagos", industry: "Healthcare" },
    { name: "Cascadia Holdings", industry: "Investment" },
    { name: "New Telegraph", industry: "Media" },
    { name: "Harzotech", industry: "IT Services" },
    { name: "Majestic Services UK", industry: "Services" },
  ],

  projects: [
    { title: "R3 Consulting Ltd", description: "Corporate consulting website with client portal, project management tools, and business intelligence dashboard.", tags: ["Next.js", "Laravel", "Dashboard"], gradient: ["#4f46e5", "#9333ea"], liveUrl: "https://r3consultingltd.com" },
    { title: "Cascadia Holdings", description: "Investment and holdings company website showcasing portfolio companies, investment opportunities, and corporate governance.", tags: ["Next.js", "Corporate", "Investment"], gradient: ["#059669", "#0d9488"], liveUrl: "https://www.cascadiaholdings.net/" },
    { title: "Megatronics Power Solution", description: "Power solutions and electrical equipment company with product catalog, service offerings, and technical support.", tags: ["Next.js", "E-commerce", "Industrial"], gradient: ["#ca8a04", "#ea580c"], liveUrl: "https://megatronics.vercel.app/" },
    { title: "Evolution Vocational Tutors", description: "Educational platform connecting students with vocational tutors, featuring course management and online learning tools.", tags: ["Next.js", "Education", "LMS"], gradient: ["#2563eb", "#4f46e5"], liveUrl: "https://evolution-ten-sandy.vercel.app/" },
    { title: "Tashico ICT Institute", description: "ICT training institute website with course catalog, student enrollment system, and certification programs.", tags: ["Next.js", "Education", "Training"], gradient: ["#9333ea", "#db2777"], liveUrl: "https://tashico.vercel.app/" },
    { title: "First Giwa Feeds & Agro Tech", description: "Agricultural technology company specializing in animal feeds and agro-products with online ordering and distribution.", tags: ["WordPress", "Agriculture", "E-commerce"], gradient: ["#16a34a", "#65a30d"], liveUrl: "http://firstgiwa.com/" },
    { title: "Suko Paint", description: "E-commerce platform for premium paint products with color visualizer, dealer locator, and project calculator.", tags: ["Next.js", "E-commerce", "Product Catalog"], gradient: ["#db2777", "#e11d48"], liveUrl: "https://www.sukopaint.com" },
    { title: "Restopro - Restaurant Management", description: "SaaS restaurant management system with table reservation, order management, kitchen display, and payment integration.", tags: ["Laravel", "Blade", "Vite", "REST API"], gradient: ["#9333ea", "#db2777"], liveUrl: "https://restaurant.cliqpos.co.uk" },
    { title: "Immovables Realty", description: "Premium real estate marketplace with advanced property search, agent profiles, and mortgage calculators.", tags: ["React", "Vite", "Real Estate"], gradient: ["#0d9488", "#0891b2"], liveUrl: "https://www.immovablesrealty.com" },
    { title: "Access Best Empowerment Hub", description: "Educational platform empowering communities with training programs, certifications, and skill development resources.", tags: ["React", "Vite", "LMS"], gradient: ["#0891b2", "#2563eb"], liveUrl: "https://accessbest.com.ng" },
    { title: "Cliqpos - SaaS POS System", description: "Cloud-based Point-of-Sale system serving multiple businesses with real-time inventory, sales tracking, and multi-location support.", tags: ["Laravel", "Blade", "Vite", "MySQL"], gradient: ["#2563eb", "#0891b2"], liveUrl: "https://cliqpos.co.uk" },
    { title: "Interop Digital Solutions", description: "Enterprise digital transformation platform providing software solutions, consulting, and integration services.", tags: ["Next.js", "TypeScript", "Enterprise"], gradient: ["#4f46e5", "#2563eb"], liveUrl: "https://interop-digital-solutions-ltd.vercel.app" },
    { title: "Immovables Group", description: "Full-stack real estate platform with property listings, virtual tours, and integrated CRM for Nigeria's leading property group.", tags: ["Next.js", "Laravel", "RESTful API"], gradient: ["#16a34a", "#0d9488"], liveUrl: "https://immovablesgroup.com" },
    { title: "Immovables Digital Space", description: "Technology solutions platform showcasing digital services, software development, and IT consulting offerings.", tags: ["WordPress", "Custom Theme", "Digital"], gradient: ["#2563eb", "#9333ea"], liveUrl: "https://immovablestech.com" },
    { title: "Alajo - Savings Platform", description: "Digital savings and investment platform with secure transactions, automated savings, and financial analytics.", tags: ["Next.js", "Laravel", "Payment Integration"], gradient: ["#ea580c", "#dc2626"], liveUrl: "https://alajo.ng" },
    { title: "The Pen Muslim Montessori School", description: "Educational institution website with admissions portal, student information system, and parent communication tools.", tags: ["Vite", "React", "Education"], gradient: ["#16a34a", "#059669"], liveUrl: "https://thepenmuslimschools.com" },
    { title: "Polygrace Home Healthcare", description: "Healthcare management platform for Canadian home care services with patient scheduling and care coordination.", tags: ["Vite", "Healthcare", "Scheduling"], gradient: ["#059669", "#16a34a"], liveUrl: "https://www.polygracehomehealthcare.ca" },
    { title: "Growth Vault", description: "Business growth and marketing automation platform with funnel builder, email campaigns, and analytics.", tags: ["Next.js", "Automation", "Marketing"], gradient: ["#7c3aed", "#9333ea"], liveUrl: "https://growth-vault-launch.vercel.app" },
    { title: "Majestic Services UK", description: "Professional cleaning and facility management services platform with booking system and service tracking.", tags: ["Vite", "React", "Service Platform"], gradient: ["#2563eb", "#0891b2"], liveUrl: "https://www.majesticservices.co.uk" },
    { title: "Royal Quran Competition", description: "Islamic competition platform with registration system, scoring interface, and event management for Quranic excellence.", tags: ["Next.js", "Event Management", "Competition"], gradient: ["#9333ea", "#4f46e5"], liveUrl: "https://royal-quran-shine.vercel.app" },
    { title: "Business Revival Webinar", description: "Webinar and event management platform for business training programs with registration and live streaming.", tags: ["Next.js", "Webinar", "Event Platform"], gradient: ["#ea580c", "#d97706"], liveUrl: "https://webinar.immovablestech.com" },
    { title: "Strategic Effects Ltd", description: "Corporate consulting and strategy firm website showcasing services, case studies, and client success stories.", tags: ["WordPress", "Corporate", "Consulting"], gradient: ["#475569", "#4b5563"], liveUrl: "https://strategiceffectsltd.com" },
    { title: "Lagos Chamber of Commerce", description: "Membership portal and arbitration platform for LACIAC, serving thousands of businesses across Lagos State.", tags: ["WordPress", "Custom Development", "Portal"], gradient: ["#db2777", "#e11d48"], liveUrl: "https://laciac.org" },
    { title: "Harzotech Nig Ltd", description: "IT consulting and software development company website showcasing services, portfolio, and technology expertise.", tags: ["WordPress", "IT Services", "Corporate"], gradient: ["#0891b2", "#0d9488"], liveUrl: "https://harzotech.com.ng" },
    { title: "Suap.ng - Crypto Trading", description: "Cryptocurrency trading platform with real-time market data, secure wallet integration, and trading tools.", tags: ["Laravel", "Crypto", "Trading"], gradient: ["#ca8a04", "#ea580c"], liveUrl: "https://suap.ng" },
    { title: "Exclusive Smile Nigeria", description: "Dental clinic platform with appointment booking, patient records, and a comprehensive sales funnel system integrating marketing automation and conversion optimization.", tags: ["Next.js", "Sanity CMS", "SendPulse", "Sales Funnel"], gradient: ["#2563eb", "#4f46e5"], liveUrl: "https://www.exclusivesmileng.com" },
    { title: "Phoenix Derma Lagos", description: "Premium dermatology clinic with advanced sales funnel system, automated patient acquisition, booking system, and integrated marketing campaigns.", tags: ["Sales Funnel", "Marketing Automation", "Healthcare"], gradient: ["#e11d48", "#db2777"], liveUrl: "#" },
    { title: "New Telegraph Newspaper", description: "Major Nigerian news publication platform with breaking news, multimedia content, and digital subscriptions.", tags: ["WordPress", "News Portal", "Media"], gradient: ["#dc2626", "#ea580c"], liveUrl: "https://newtelegraphng.com" },
    { title: "Yuan Bridge - Naira to Yuan", description: "Currency exchange platform facilitating seamless Naira to Yuan conversions with real-time rates and secure transactions.", tags: ["Next.js", "FinTech", "Currency Exchange"], gradient: ["#059669", "#0d9488"], liveUrl: "https://naira-yuan-flow.vercel.app/" },
    { title: "Dental Clinic AI Support Agent", description: "Intelligent customer support AI agent for dental clinic handling appointment scheduling, patient inquiries, and follow-up reminders using NLP.", tags: ["AI Automation", "n8n", "OpenAI", "Healthcare"], gradient: ["#0891b2", "#2563eb"], liveUrl: "#" },
    { title: "Political Campaign AI Agent", description: "AI-powered campaign management automating voter outreach, sentiment analysis, social media engagement, and campaign analytics.", tags: ["AI Automation", "Make", "OpenAI", "Analytics"], gradient: ["#dc2626", "#ea580c"], liveUrl: "#" },
    { title: "Lead Qualification AI Bot", description: "Intelligent lead scoring and qualification system using AI to analyze prospect data, automate follow-ups, and route qualified leads.", tags: ["AI Automation", "Make", "OpenAI", "CRM"], gradient: ["#d97706", "#ca8a04"], liveUrl: "#" },
  ],

  social: {
    GitHub: "https://github.com/agbona24/",
    LinkedIn: "https://www.linkedin.com/in/azeez-agbona-o/",
    Twitter: "https://twitter.com/azeez_agbona1",
    Instagram: "https://www.instagram.com/abdulAbdul-Azeezagbona/",
    Facebook: "https://web.facebook.com/agbona.azeez/",
    WhatsApp: "https://wa.me/2347069716822",
  },

  // Testimonials (matches config — name, role, company, content, rating)
  testimonials: [
    { name: "Dr. Sarah Johnson", role: "Founder, Business Growth Hub", company: "Business Growth Hub", content: "Abdul-Azeez's sales funnel system transformed our patient acquisition. We saw a 300% increase in qualified leads within 3 months. His expertise in healthcare marketing is exceptional.", rating: 5 },
    { name: "Jude Afuda-iyoke", role: "Managing Director/CEO, Immovables Group", company: "Immovables Group", content: "Outstanding work on our real estate platform. The CRM integration and property management system exceeded expectations. Highly professional and delivered on time.", rating: 5 },
    { name: "Olusesan Sesan", role: "MD, Lagos Chamber of Commerce", company: "LACIAC", content: "Developed a robust membership portal that serves thousands of businesses. Abdul-Azeez's technical expertise and understanding of our needs made the project a huge success.", rating: 5 },
    { name: "Yusuf Adegbola", role: "Owner, Majestic Services UK", company: "Majestic Services", content: "The booking system and service tracking platform has streamlined our operations significantly. Excellent communication throughout the project.", rating: 5 },
    { name: "Mr. Gideon Makinwa", role: "MD, R3 Consulting", company: "R3 Consulting Ltd", content: "Abdul-Azeez delivered a comprehensive consulting platform that transformed our business operations. His technical expertise and strategic approach made the entire process seamless.", rating: 5 },
    { name: "Mr. Ikenna", role: "CEO, Access Best Empowerment Hub", company: "Access Best Empowerment Hub", content: "Working with Abdul-Azeez on our educational platform was exceptional. He understood our vision and created a robust system that empowers thousands of learners across communities.", rating: 5 },
    { name: "Mr. Yemi Dada", role: "Managing Partner, Alajo.ng", company: "Alajo.ng", content: "He is a great partner and one of the best at what he does. The savings platform he developed has been instrumental in our success and growth.", rating: 5 },
    { name: "Mr. Akinbobola", role: "Chairman, Exclusive Smile", company: "Exclusive Smile Nigeria", content: "Our sales funnel was implemented and did well. Abdul-Azeez's marketing automation system significantly improved our patient acquisition and conversion rates.", rating: 5 },
  ],
};

const TESTI_GRADS = [["#2563eb", "#0891b2"], ["#7c3aed", "#db2777"], ["#16a34a", "#0d9488"], ["#ea580c", "#dc2626"]];

/* =====================================================================
   SVG social icons
   ===================================================================== */
const icons = {
  GitHub: '<svg viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/></svg>',
  LinkedIn: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
  Twitter: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
  Instagram: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>',
  Facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
  WhatsApp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/></svg>',
};
const SOCIAL_COLORS = {
  GitHub: ["#4b5563", "#1f2937"], LinkedIn: ["#2563eb", "#1d4ed8"], Twitter: ["#0284c7", "#2563eb"],
  Instagram: ["#db2777", "#7c3aed"], Facebook: ["#1d4ed8", "#1e3a8a"], WhatsApp: ["#16a34a", "#15803d"],
};

/* =====================================================================
   Helpers
   ===================================================================== */
const $ = (s) => document.querySelector(s);
const el = (html) => { const t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstElementChild; };
const grad = (g) => `linear-gradient(135deg, ${g[0]}, ${g[1]})`;
const initials = (name) => name.replace(/^(Dr\.|Mr\.|Mrs\.|Ms\.)\s*/, "").split(" ").map((w) => w[0]).slice(0, 2).join("");

/* =====================================================================
   Render
   ===================================================================== */
function render() {
  // WhatsApp + resume links
  ["heroWhatsapp", "aboutWhatsapp", "workWhatsapp", "testimonialsWhatsapp", "bookingWhatsapp", "contactWhatsapp", "floatWhatsapp", "mobileWhatsapp", "footerWhatsapp"]
    .forEach((id) => { const n = document.getElementById(id); if (n) n.href = siteConfig.whatsapp; });
  $("#navResume").href = siteConfig.resume;

  // Hero
  $("#heroName").textContent = siteConfig.name;
  $("#heroDesc").textContent = `I build the digital systems that turn businesses into revenue machines. ${siteConfig.stats.yearsExperience} years of expertise. ${siteConfig.stats.projectsCompleted} companies transformed across web development, AI automation, and sales funnels.`;
  const hour = new Date().getHours();
  $("#greeting").textContent = `${hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening"}! 👋`;

  const heroSocials = $("#heroSocials");
  ["GitHub", "LinkedIn", "Twitter"].forEach((name) =>
    heroSocials.appendChild(el(`<a class="social-icon" href="${siteConfig.social[name]}" target="_blank" rel="noopener noreferrer" aria-label="${name}">${icons[name]}</a>`)));

  const heroStats = [
    { label: "Years in the Field", value: siteConfig.stats.yearsExperience, icon: "🏆" },
    { label: "Companies Served", value: siteConfig.stats.projectsCompleted, icon: "💼" },
    { label: "Satisfied Clients", value: siteConfig.stats.happyClients, icon: "🤝" },
    { label: "Tech Mastered", value: siteConfig.stats.technologies, icon: "⚡" },
  ];
  const hs = $("#heroStats");
  heroStats.forEach((s) => hs.appendChild(el(`<div class="stat-card"><div class="stat-icon">${s.icon}</div><div class="stat-value">${s.value}</div><div class="stat-label">${s.label}</div></div>`)));

  // Clients marquee (tripled for seamless loop)
  const track = $("#marqueeTrack");
  [...siteConfig.clients, ...siteConfig.clients, ...siteConfig.clients].forEach((c) =>
    track.appendChild(el(`<div class="client-card"><div class="cc-name">${c.name}</div><div class="cc-industry">${c.industry}</div></div>`)));

  // About
  const aboutText = $("#aboutText");
  siteConfig.about.description.forEach((p) => aboutText.appendChild(el(`<p>${p}</p>`)));
  const pills = $("#aboutPills");
  siteConfig.aboutSkills.forEach((s) =>
    pills.appendChild(el(`<span class="about-pill" style="background:${grad(s.grad)}"><span>${s.icon}</span> ${s.name}</span>`)));
  const aboutStats = [
    { label: "Years", value: parseInt(siteConfig.stats.yearsExperience), icon: "🏆" },
    { label: "Companies", value: parseInt(siteConfig.stats.projectsCompleted), icon: "💼" },
    { label: "Clients", value: parseInt(siteConfig.stats.happyClients), icon: "🤝" },
    { label: "Tech Stack", value: parseInt(siteConfig.stats.technologies), icon: "⚡" },
  ];
  const ag = $("#aboutStats");
  aboutStats.forEach((s) =>
    ag.appendChild(el(`<div class="about-stat"><div class="as-icon">${s.icon}</div><div class="as-value" data-count="${s.value}" data-suffix="+">0</div><div class="as-label">${s.label}</div></div>`)));

  // Services
  const sg = $("#servicesGrid");
  siteConfig.services.forEach((s) => {
    const feats = s.feats.map((f) => `<span class="service-feat" style="background:linear-gradient(90deg, ${s.grad[0]}1a, ${s.grad[1]}1a)">${f}</span>`).join("");
    sg.appendChild(el(`<div class="service-card reveal">
      <div class="service-icon" style="background:${grad(s.grad)}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="${s.iconPath}"/></svg></div>
      <h3>${s.title}</h3><p>${s.desc}</p><div class="service-feats">${feats}</div></div>`));
  });

  // Stats (dark)
  const statsGrid = $("#statsGrid");
  siteConfig.statBlocks.forEach((s) =>
    statsGrid.appendChild(el(`<div class="stat-glass reveal"><div class="sg-icon">${s.icon}</div>
      <div class="sg-value" style="background-image:${grad(s.grad)}" data-count="${s.value}" data-suffix="${s.suffix}">0</div>
      <div class="sg-label">${s.label}</div><div class="sg-desc">${s.desc}</div></div>`)));

  // Work meta
  const wm = $("#workMeta");
  [
    { dot: "#22c55e", value: siteConfig.stats.projectsCompleted, label: "Delivered" },
    { dot: "#3b82f6", value: siteConfig.stats.happyClients, label: "Satisfied Clients" },
    { dot: "#8b5cf6", value: siteConfig.stats.technologies, label: "Technologies" },
  ].forEach((m) => wm.appendChild(el(`<div class="work-meta-item"><span class="wm-dot" style="background:${m.dot}"></span><span><strong>${m.value}</strong> ${m.label}</span></div>`)));

  renderWork();

  // Process
  const pt = $("#processTimeline");
  siteConfig.process.forEach((p) =>
    pt.appendChild(el(`<div class="process-step reveal">
      <div class="process-circle" style="background:${grad(p.grad)}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="${p.iconPath}"/></svg><span class="pc-num">${p.num}</span></div>
      <div class="process-card"><h3>${p.title}</h3><p>${p.desc}</p></div></div>`)));

  // Skills
  const skg = $("#skillsGrid");
  siteConfig.skillGroups.forEach((g) => {
    const list = g.items.map((i) => `<div class="skill-item"><span class="si-dot" style="background:${grad(g.grad)}"></span>${i}</div>`).join("");
    skg.appendChild(el(`<div class="skill-group reveal">
      <div class="skill-head"><div class="skill-icon" style="background:${grad(g.grad)}">${g.icon}</div><h3>${g.category}</h3></div>
      <div class="skill-list">${list}</div></div>`));
  });

  // Testimonials carousel
  renderTestimonials();

  // Contact
  const ce = $("#contactEmail"); ce.textContent = siteConfig.email; ce.href = `mailto:${siteConfig.email}`;

  // Footer
  $("#footerName").textContent = siteConfig.name;
  $("#footerTitle").textContent = siteConfig.title;
  const fStats = [
    { icon: "⚡", label: "Years", value: siteConfig.stats.yearsExperience, grad: ["#3b82f6", "#06b6d4"] },
    { icon: "🚀", label: "Projects", value: siteConfig.stats.projectsCompleted, grad: ["#8b5cf6", "#ec4899"] },
    { icon: "😊", label: "Clients", value: siteConfig.stats.happyClients, grad: ["#22c55e", "#14b8a6"] },
    { icon: "💻", label: "Tech Stack", value: siteConfig.stats.technologies, grad: ["#f97316", "#ef4444"] },
  ];
  const fs = $("#footerStats");
  fStats.forEach((s) => fs.appendChild(el(`<div class="footer-stat"><div class="fs-icon">${s.icon}</div><div class="fs-value" style="background-image:${grad(s.grad)}">${s.value}</div><div class="fs-label">${s.label}</div></div>`)));
  const fsoc = $("#footerSocials");
  Object.keys(siteConfig.social).forEach((name) =>
    fsoc.appendChild(el(`<a class="footer-social" href="${siteConfig.social[name]}" target="_blank" rel="noopener noreferrer" style="background:${grad(SOCIAL_COLORS[name])}" aria-label="${name}" title="${name}">${icons[name]}</a>`)));
  const fe = $("#footerEmail"); fe.href = `mailto:${siteConfig.email}`; fe.querySelector(".fc-text").textContent = siteConfig.email;
  const fp = $("#footerPhone"); fp.href = `tel:${siteConfig.phone}`; fp.querySelector(".fc-text").textContent = siteConfig.phone;
  $("#year").textContent = new Date().getFullYear();
}

/* ---- Work: search + filter + featured/compact split ---- */
let activeFilter = "All";
let searchQuery = "";
function workCategories() {
  const all = Array.from(new Set(siteConfig.projects.flatMap((p) => p.tags)));
  return ["All", ...all.slice(0, 8)];
}
function renderWorkFilters() {
  const filters = $("#workFilters");
  filters.innerHTML = "";
  workCategories().forEach((cat) => {
    const btn = el(`<button class="filter-btn ${cat === activeFilter ? "active" : ""}">${cat}</button>`);
    btn.addEventListener("click", () => { activeFilter = cat; renderWork(); });
    filters.appendChild(btn);
  });
}
function renderWork() {
  renderWorkFilters();
  const q = searchQuery.toLowerCase();
  const filtered = siteConfig.projects.filter((p) => {
    const matchesFilter = activeFilter === "All" || p.tags.includes(activeFilter);
    const matchesSearch = q === "" || p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.tags.some((t) => t.toLowerCase().includes(q));
    return matchesFilter && matchesSearch;
  });

  // Count
  const count = $("#workCount");
  count.innerHTML = `Showing <strong>${filtered.length}</strong> project${filtered.length !== 1 ? "s" : ""}`;
  if (searchQuery || activeFilter !== "All") {
    const clr = el(`<button>Clear filters</button>`);
    clr.addEventListener("click", () => { searchQuery = ""; activeFilter = "All"; $("#workSearch").value = ""; renderWork(); });
    count.appendChild(clr);
  }

  const featured = filtered.slice(0, 6);
  const others = filtered.slice(6);

  const grid = $("#workGrid");
  grid.innerHTML = "";
  featured.forEach((p, i) => {
    const hasLive = p.liveUrl && p.liveUrl !== "#";
    const shown = p.tags.slice(0, 3).map((t) => `<span class="work-tag">${t}</span>`).join("");
    const extra = p.tags.length > 3 ? `<span class="work-tag muted">+${p.tags.length - 3}</span>` : "";
    const live = hasLive ? `<span class="live-badge"><span class="ld-dot"></span>LIVE</span>` : "";
    const link = hasLive ? `<a class="work-link" href="${p.liveUrl}" target="_blank" rel="noopener noreferrer">View Live Project <span>→</span></a>` : "";
    grid.appendChild(el(`<div class="work-card reveal">
      <div class="work-thumb" style="background:${grad(p.gradient)}">${live}<span class="wt-title">${p.title}</span><span class="wt-num">${String(i + 1).padStart(2, "0")}</span></div>
      <div class="work-body"><h3>${p.title}</h3><p>${p.description}</p><div class="work-tags">${shown}${extra}</div>${link}</div></div>`));
  });

  const compact = $("#workGridCompact");
  compact.innerHTML = "";
  $("#workMore").style.display = others.length ? "" : "none";
  others.forEach((p) => {
    const hasLive = p.liveUrl && p.liveUrl !== "#";
    const tags = p.tags.slice(0, 2).map((t) => `<span class="compact-tag">${t}</span>`).join("");
    const live = hasLive ? `<span class="live-badge"><span class="ld-dot"></span>LIVE</span>` : "";
    const link = hasLive ? `<a class="compact-link" href="${p.liveUrl}" target="_blank" rel="noopener noreferrer">View <span>→</span></a>` : "";
    compact.appendChild(el(`<div class="compact-card reveal">
      <div class="compact-thumb" style="background:${grad(p.gradient)}">${live}</div>
      <div class="compact-body"><h4>${p.title}</h4><p>${p.description}</p><div class="compact-tags">${tags}</div>${link}</div></div>`));
  });

  observeReveals();
}

/* ---- Testimonials carousel ---- */
let testiIndex = 0;
function perView() { return window.innerWidth < 680 ? 1 : window.innerWidth < 1024 ? 2 : 3; }
function maxIndex() { return Math.max(0, siteConfig.testimonials.length - perView()); }
function renderTestimonials() {
  const track = $("#carouselTrack");
  siteConfig.testimonials.forEach((t, i) => {
    const g = TESTI_GRADS[i % TESTI_GRADS.length];
    track.appendChild(el(`<div class="testi-slide"><div class="testi-card">
      <div class="testi-quote" style="background:${grad(g)}">"</div>
      <div class="testi-stars">${"★".repeat(t.rating)}</div>
      <p class="testi-content">${t.content}</p>
      <div class="testi-author">
        <div class="testi-avatar" style="background:${grad(g)}">${t.name.charAt(0)}</div>
        <div>
          <div class="ta-name">${t.name}</div>
          <div class="ta-role">${t.role}</div>
          <span class="testi-company" style="background:${grad(g)}"><span class="tc-dot"></span>${t.company}</span>
        </div>
        <div class="testi-verified" title="Verified Client"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg></div>
      </div></div></div>`));
  });
  buildDots();
  updateCarousel();
}
function buildDots() {
  const dots = $("#carouselDots");
  dots.innerHTML = "";
  for (let i = 0; i <= maxIndex(); i++) {
    const d = el(`<button class="carousel-dot ${i === testiIndex ? "active" : ""}" aria-label="Go to slide ${i + 1}"></button>`);
    d.addEventListener("click", () => { testiIndex = i; updateCarousel(); });
    dots.appendChild(d);
  }
}
function updateCarousel() {
  testiIndex = Math.min(testiIndex, maxIndex());
  const pv = perView();
  $("#carouselTrack").style.transform = `translateX(-${testiIndex * (100 / pv)}%)`;
  $("#prevBtn").disabled = testiIndex === 0;
  $("#nextBtn").disabled = testiIndex >= maxIndex();
  document.querySelectorAll(".carousel-dot").forEach((d, i) => d.classList.toggle("active", i === testiIndex));
}

/* =====================================================================
   Interactions
   ===================================================================== */
function typingAnimation() {
  const skills = ["Revenue-Converting Web Systems", "AI-Powered Sales Automation", "End-to-End Sales Funnel Design", "Enterprise Software Architecture", "Digital Growth Infrastructure"];
  const target = $("#typingText");
  let si = 0, ci = 0, deleting = false;
  (function tick() {
    const skill = skills[si];
    if (!deleting) {
      target.textContent = skill.substring(0, ++ci);
      if (ci === skill.length) { deleting = true; return setTimeout(tick, 1800); }
    } else {
      target.textContent = skill.substring(0, --ci);
      if (ci === 0) { deleting = false; si = (si + 1) % skills.length; }
    }
    setTimeout(tick, deleting ? 40 : 90);
  })();
}

function theme() {
  const toggle = $("#themeToggle"), icon = toggle.querySelector(".theme-icon");
  const stored = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  apply(stored || (prefersDark ? "dark" : "light"));
  function apply(mode) { document.documentElement.setAttribute("data-theme", mode); icon.textContent = mode === "dark" ? "☀️" : "🌙"; localStorage.setItem("theme", mode); }
  toggle.addEventListener("click", () => apply(document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark"));
}

function mobileMenu() {
  const menu = $("#mobileMenu"), backdrop = $("#mobileBackdrop");
  const open = () => { menu.classList.add("open"); backdrop.classList.add("open"); document.body.style.overflow = "hidden"; };
  const close = () => { menu.classList.remove("open"); backdrop.classList.remove("open"); document.body.style.overflow = ""; };
  $("#menuBtn").addEventListener("click", open);
  $("#menuClose").addEventListener("click", close);
  backdrop.addEventListener("click", close);
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
}

function scrollEffects() {
  const navbar = $("#navbar"), progress = $("#scrollProgress"), backTop = $("#backToTop");
  function onScroll() {
    const top = window.scrollY;
    const h = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${(top / h) * 100}%`;
    navbar.classList.toggle("scrolled", top > 50);
    backTop.classList.toggle("show", top > 500);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* Animated counters when in view */
function animateCount(node) {
  const target = parseInt(node.dataset.count);
  const suffix = node.dataset.suffix || "";
  const duration = 1600; const start = performance.now();
  (function frame(now) {
    const p = Math.min((now - start) / duration, 1);
    node.textContent = Math.floor(target * p) + suffix;
    if (p < 1) requestAnimationFrame(frame); else node.textContent = target + suffix;
  })(start);
}

let revealObserver, countObserver;
function observeReveals() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); revealObserver.unobserve(e.target); } });
    }, { threshold: 0.1 });
  }
  document.querySelectorAll(".reveal:not(.visible)").forEach((n) => revealObserver.observe(n));

  if (!countObserver) {
    countObserver = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { animateCount(e.target); countObserver.unobserve(e.target); } });
    }, { threshold: 0.5 });
  }
  document.querySelectorAll("[data-count]").forEach((n) => countObserver.observe(n));
}

function carouselControls() {
  $("#prevBtn").addEventListener("click", () => { if (testiIndex > 0) { testiIndex--; updateCarousel(); } });
  $("#nextBtn").addEventListener("click", () => { if (testiIndex < maxIndex()) { testiIndex++; updateCarousel(); } });
  let resizeTimer;
  window.addEventListener("resize", () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(() => { buildDots(); updateCarousel(); }, 150); });
}

function workSearch() {
  let timer;
  $("#workSearch").addEventListener("input", (e) => {
    clearTimeout(timer);
    timer = setTimeout(() => { searchQuery = e.target.value; renderWork(); }, 200);
  });
}

function contactForm() {
  const form = $("#contactForm"), note = $("#formNote");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = $("#name").value.trim();
    const email = $("#email").value.trim();
    const subject = $("#subject").value.trim();
    const message = $("#message").value.trim();
    const mailSubject = encodeURIComponent(`Portfolio Contact: ${subject}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${siteConfig.email}?subject=${mailSubject}&body=${body}`;
    note.textContent = "✓ Opening your email client… Thank you!";
    form.reset();
    setTimeout(() => { note.textContent = ""; }, 5000);
  });
}

/* =====================================================================
   Init
   ===================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  render();
  typingAnimation();
  theme();
  mobileMenu();
  scrollEffects();
  carouselControls();
  workSearch();
  contactForm();
  observeReveals();
});
