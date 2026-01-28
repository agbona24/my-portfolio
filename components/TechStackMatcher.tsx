"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type ProjectType = {
  id: string;
  name: string;
  icon: string;
  description: string;
};

type TechStack = {
  category: string;
  technologies: { name: string; icon: string; reason: string }[];
};

const projectTypes: ProjectType[] = [
  { id: "ecommerce", name: "E-commerce Store", icon: "🛒", description: "Online store with products, payments, and orders" },
  { id: "saas", name: "SaaS Platform", icon: "☁️", description: "Subscription-based software application" },
  { id: "corporate", name: "Corporate Website", icon: "🏢", description: "Professional business website" },
  { id: "portfolio", name: "Portfolio / Blog", icon: "📝", description: "Personal or creative showcase" },
  { id: "marketplace", name: "Marketplace", icon: "🏪", description: "Multi-vendor platform" },
  { id: "crm", name: "CRM / Dashboard", icon: "📊", description: "Business management system" },
  { id: "mobile", name: "Mobile App", icon: "📱", description: "iOS / Android application" },
  { id: "automation", name: "Automation System", icon: "⚡", description: "Workflow automation & AI agents" },
];

const techRecommendations: Record<string, TechStack[]> = {
  ecommerce: [
    {
      category: "Frontend",
      technologies: [
        { name: "Next.js", icon: "▲", reason: "SEO-friendly, fast page loads" },
        { name: "React", icon: "⚛️", reason: "Dynamic product pages & cart" },
        { name: "Tailwind CSS", icon: "🎨", reason: "Rapid UI development" },
      ],
    },
    {
      category: "Backend",
      technologies: [
        { name: "Laravel", icon: "🔷", reason: "Robust e-commerce features" },
        { name: "MySQL", icon: "🗄️", reason: "Reliable product database" },
        { name: "Stripe API", icon: "💳", reason: "Secure payment processing" },
      ],
    },
    {
      category: "Tools",
      technologies: [
        { name: "n8n", icon: "⚡", reason: "Order automation workflows" },
        { name: "Mailchimp", icon: "📧", reason: "Email marketing" },
      ],
    },
  ],
  saas: [
    {
      category: "Frontend",
      technologies: [
        { name: "Next.js", icon: "▲", reason: "Full-stack React framework" },
        { name: "TypeScript", icon: "📘", reason: "Type-safe, scalable code" },
        { name: "Tailwind CSS", icon: "🎨", reason: "Consistent design system" },
      ],
    },
    {
      category: "Backend",
      technologies: [
        { name: "Laravel", icon: "🔷", reason: "Multi-tenancy support" },
        { name: "MySQL", icon: "🗄️", reason: "Scalable database" },
        { name: "Redis", icon: "🔴", reason: "Caching & sessions" },
      ],
    },
    {
      category: "Infrastructure",
      technologies: [
        { name: "AWS / Vercel", icon: "☁️", reason: "Scalable hosting" },
        { name: "Stripe", icon: "💳", reason: "Subscription billing" },
      ],
    },
  ],
  corporate: [
    {
      category: "Frontend",
      technologies: [
        { name: "Next.js", icon: "▲", reason: "SEO optimized" },
        { name: "Tailwind CSS", icon: "🎨", reason: "Professional design" },
        { name: "Framer Motion", icon: "✨", reason: "Smooth animations" },
      ],
    },
    {
      category: "CMS",
      technologies: [
        { name: "WordPress", icon: "📝", reason: "Easy content management" },
        { name: "Sanity CMS", icon: "📄", reason: "Headless flexibility" },
      ],
    },
    {
      category: "SEO & Analytics",
      technologies: [
        { name: "Google Analytics", icon: "📊", reason: "Traffic insights" },
        { name: "SEMrush", icon: "🔍", reason: "SEO optimization" },
      ],
    },
  ],
  portfolio: [
    {
      category: "Frontend",
      technologies: [
        { name: "Next.js", icon: "▲", reason: "Fast, SEO-friendly" },
        { name: "React", icon: "⚛️", reason: "Interactive components" },
        { name: "Tailwind CSS", icon: "🎨", reason: "Beautiful styling" },
      ],
    },
    {
      category: "Hosting",
      technologies: [
        { name: "Vercel", icon: "▲", reason: "Free, fast deployment" },
        { name: "Sanity / MDX", icon: "📄", reason: "Blog content" },
      ],
    },
  ],
  marketplace: [
    {
      category: "Frontend",
      technologies: [
        { name: "Next.js", icon: "▲", reason: "SEO for product listings" },
        { name: "React", icon: "⚛️", reason: "Complex UI interactions" },
        { name: "TypeScript", icon: "📘", reason: "Type safety" },
      ],
    },
    {
      category: "Backend",
      technologies: [
        { name: "Laravel", icon: "🔷", reason: "Multi-vendor logic" },
        { name: "MySQL", icon: "🗄️", reason: "Relational data" },
        { name: "Elasticsearch", icon: "🔍", reason: "Product search" },
      ],
    },
    {
      category: "Payments",
      technologies: [
        { name: "Stripe Connect", icon: "💳", reason: "Split payments" },
        { name: "Paystack", icon: "💰", reason: "African payments" },
      ],
    },
  ],
  crm: [
    {
      category: "Frontend",
      technologies: [
        { name: "React", icon: "⚛️", reason: "Dashboard components" },
        { name: "Tailwind CSS", icon: "🎨", reason: "Admin UI" },
        { name: "Chart.js", icon: "📈", reason: "Data visualization" },
      ],
    },
    {
      category: "Backend",
      technologies: [
        { name: "Laravel", icon: "🔷", reason: "API & business logic" },
        { name: "MySQL", icon: "🗄️", reason: "Data storage" },
        { name: "Redis", icon: "🔴", reason: "Real-time updates" },
      ],
    },
    {
      category: "Automation",
      technologies: [
        { name: "n8n", icon: "⚡", reason: "Workflow automation" },
        { name: "SendPulse", icon: "📧", reason: "Email campaigns" },
      ],
    },
  ],
  mobile: [
    {
      category: "Framework",
      technologies: [
        { name: "React Native", icon: "📱", reason: "Cross-platform" },
        { name: "Expo", icon: "⚡", reason: "Rapid development" },
        { name: "TypeScript", icon: "📘", reason: "Type safety" },
      ],
    },
    {
      category: "Backend",
      technologies: [
        { name: "Node.js", icon: "🟢", reason: "Real-time APIs" },
        { name: "Firebase", icon: "🔥", reason: "Auth & push notifications" },
        { name: "PostgreSQL", icon: "🐘", reason: "Scalable database" },
      ],
    },
  ],
  automation: [
    {
      category: "Automation Platforms",
      technologies: [
        { name: "n8n", icon: "⚡", reason: "Self-hosted, powerful" },
        { name: "Make (Integromat)", icon: "🔄", reason: "Visual workflows" },
        { name: "Zapier", icon: "⚡", reason: "Quick integrations" },
      ],
    },
    {
      category: "AI & APIs",
      technologies: [
        { name: "OpenAI API", icon: "🤖", reason: "AI agent capabilities" },
        { name: "Anthropic Claude", icon: "🧠", reason: "Advanced reasoning" },
        { name: "Custom APIs", icon: "🔗", reason: "Business integrations" },
      ],
    },
    {
      category: "Data & Storage",
      technologies: [
        { name: "Airtable", icon: "📊", reason: "Flexible database" },
        { name: "Google Sheets", icon: "📗", reason: "Simple data" },
        { name: "PostgreSQL", icon: "🐘", reason: "Complex queries" },
      ],
    },
  ],
};

export default function TechStackMatcher() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleSelect = (projectId: string) => {
    setSelectedProject(projectId);
    setShowResults(true);
  };

  const resetMatcher = () => {
    setSelectedProject(null);
    setShowResults(false);
  };

  const selectedProjectData = projectTypes.find((p) => p.id === selectedProject);
  const recommendations = selectedProject ? techRecommendations[selectedProject] : [];

  return (
    <section id="tech-matcher" className="py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-4">
            <span className="text-2xl">🛠️</span>
            <span className="text-sm font-semibold text-blue-200">Tech Stack Matcher</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Find Your Ideal Tech Stack
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Select your project type and I&apos;ll recommend the best technologies for your specific needs.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!showResults ? (
            <motion.div
              key="selection"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {projectTypes.map((project, index) => (
                <motion.button
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSelect(project.id)}
                  className="p-6 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-400 rounded-2xl transition-all text-center group"
                >
                  <div className="text-4xl mb-3">{project.icon}</div>
                  <h3 className="text-white font-semibold mb-1 group-hover:text-blue-300 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-xs text-gray-400">{project.description}</p>
                </motion.button>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{selectedProjectData?.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{selectedProjectData?.name}</h3>
                    <p className="text-gray-400">Recommended Tech Stack</p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={resetMatcher}
                  className="px-4 py-2 text-sm text-gray-300 hover:text-white border border-white/20 hover:border-white/40 rounded-full transition-all"
                >
                  ← Change Project
                </motion.button>
              </div>

              {/* Tech Stack */}
              <div className="space-y-6">
                {recommendations.map((category, catIndex) => (
                  <motion.div
                    key={category.category}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: catIndex * 0.1 }}
                  >
                    <h4 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-3">
                      {category.category}
                    </h4>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {category.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={tech.name}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: catIndex * 0.1 + techIndex * 0.05 }}
                          whileHover={{ scale: 1.02 }}
                          className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all"
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-xl">{tech.icon}</span>
                            <span className="font-semibold text-white">{tech.name}</span>
                          </div>
                          <p className="text-xs text-gray-400">{tech.reason}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 pt-6 border-t border-white/10 text-center"
              >
                <p className="text-gray-400 mb-4">
                  Want this stack for your project? Let&apos;s discuss the details.
                </p>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full shadow-lg"
                >
                  <span>Get a Quote</span>
                  <span>→</span>
                </motion.a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
