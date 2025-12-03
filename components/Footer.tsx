"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { useState } from "react";

export default function Footer() {
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ["0px 0px", "50px 50px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Glowing orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 right-0 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        />
        <motion.div
          className="absolute -bottom-40 left-1/3 w-96 h-96 bg-pink-600/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 4 }}
        />
      </div>

      {/* Animated wave divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden h-20">
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="url(#footer-gradient)"
            fillOpacity="0.3"
            animate={{
              d: [
                "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",
                "M321.39,70.44c58-10.79,114.16-20.13,172-31.86,82.39-16.72,168.19-27.73,250.45-10.39C823.78,45,906.67,62,985.66,82.83c70.05,18.48,146.53,36.09,214.34,13V0H0V27.35A600.21,600.21,0,0,0,321.39,70.44Z",
                "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="footer-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-8">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column - Larger */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Logo/Brand */}
            <div className="relative">
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl opacity-0 blur-xl"
                animate={{
                  opacity: [0, 0.3, 0],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="relative">
                <h3 className="text-5xl font-black mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {siteConfig.name}
                </h3>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <motion.div
                    className="w-2 h-2 bg-green-500 rounded-full"
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span>Available for new projects</span>
                </div>
              </div>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed">
              {siteConfig.title}
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "⚡", label: "Years", value: siteConfig.stats.yearsExperience, color: "from-blue-500 to-cyan-500" },
                { icon: "🚀", label: "Projects", value: siteConfig.stats.projectsCompleted, color: "from-purple-500 to-pink-500" },
                { icon: "😊", label: "Clients", value: siteConfig.stats.happyClients, color: "from-green-500 to-teal-500" },
                { icon: "💻", label: "Tech Stack", value: siteConfig.stats.technologies, color: "from-orange-500 to-red-500" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-xl opacity-0 group-hover:opacity-10 transition-opacity blur`} />
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:border-white/20 transition-all">
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className={`text-2xl font-black bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2 text-white">
              <span className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500" />
              Navigate
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "#hero" },
                { name: "About", href: "#about" },
                { name: "Projects", href: "#work" },
                { name: "Skills", href: "#skills" },
                { name: "Testimonials", href: "#testimonials" },
                { name: "Contact", href: "#contact" },
              ].map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.05 }}
                  viewport={{ once: true }}
                >
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 8 }}
                    className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                  >
                    <motion.div
                      className="w-1 h-1 bg-blue-500 rounded-full group-hover:w-8 group-hover:h-0.5 transition-all"
                    />
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2 text-white">
              <span className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500" />
              Expertise
            </h4>
            <ul className="space-y-3">
              {[
                "Web Development",
                "E-commerce",
                "Digital Marketing",
                "Sales Funnels",
                "SEO & Analytics",
                "IT Consulting",
              ].map((service, i) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    whileHover={{ x: 8 }}
                    className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <motion.div
                      className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                      whileHover={{ scale: 1.5 }}
                    />
                    {service}
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2 text-white">
              <span className="w-8 h-0.5 bg-gradient-to-r from-pink-500 to-orange-500" />
              Connect
            </h4>

            {/* Social Grid */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {[
                {
                  name: "GitHub",
                  url: siteConfig.social.github,
                  color: "from-gray-600 to-gray-800",
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  )
                },
                {
                  name: "LinkedIn",
                  url: siteConfig.social.linkedin,
                  color: "from-blue-600 to-blue-700",
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  )
                },
                {
                  name: "Twitter",
                  url: siteConfig.social.twitter,
                  color: "from-sky-600 to-blue-600",
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  )
                },
                {
                  name: "Instagram",
                  url: siteConfig.social.instagram,
                  color: "from-pink-600 via-purple-600 to-orange-600",
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  )
                },
                {
                  name: "Facebook",
                  url: siteConfig.social.facebook,
                  color: "from-blue-700 to-blue-900",
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  )
                },
                {
                  name: "WhatsApp",
                  url: siteConfig.social.whatsapp,
                  color: "from-green-600 to-green-700",
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  )
                },
              ].map((social, i) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3, delay: 0.4 + i * 0.05 }}
                  viewport={{ once: true }}
                  onHoverStart={() => setHoveredSocial(social.name)}
                  onHoverEnd={() => setHoveredSocial(null)}
                  className={`relative aspect-square flex items-center justify-center rounded-xl bg-gradient-to-br ${social.color} shadow-lg hover:shadow-2xl transition-all group`}
                  title={social.name}
                >
                  <motion.div
                    className="absolute inset-0 bg-white rounded-xl opacity-0 group-hover:opacity-20 transition-opacity"
                  />
                  <div className="relative z-10 text-white">
                    {social.icon}
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Contact Links */}
            <div className="space-y-2">
              <motion.a
                href={`mailto:${siteConfig.email}`}
                whileHover={{ x: 4 }}
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors"
              >
                <span className="text-lg">✉️</span>
                <span className="truncate">{siteConfig.email}</span>
              </motion.a>
              <motion.a
                href={`tel:${siteConfig.phone}`}
                whileHover={{ x: 4 }}
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-green-400 transition-colors"
              >
                <span className="text-lg">📞</span>
                {siteConfig.phone}
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* CTA Section - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative mb-16"
        >
          {/* Glow effects */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl opacity-20 blur-2xl" />

          <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-1">
            <div className="bg-black rounded-xl p-8 sm:p-12 backdrop-blur-xl">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="text-center lg:text-left">
                  <motion.h3
                    className="text-3xl sm:text-4xl font-black text-white mb-2"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    Let's Build Something Amazing
                  </motion.h3>
                  <p className="text-gray-400 text-lg">
                    Transform your vision into reality. Let's talk about your next project.
                  </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white text-black rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center gap-2"
                  >
                    <span>Start Project</span>
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.a>
                  <motion.a
                    href={siteConfig.whatsapp}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-green-600 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center gap-2"
                  >
                    <span>💬</span>
                    <span>WhatsApp</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10"
        >
          {/* Copyright */}
          <div className="flex items-center gap-4 text-gray-500 text-sm">
            <span>&copy; {new Date().getFullYear()} {siteConfig.name}</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">All rights reserved</span>
          </div>

          {/* Built with */}
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span>Crafted with</span>
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-red-500"
            >
              ❤️
            </motion.span>
            <span className="hidden sm:inline">using</span>
            <div className="flex items-center gap-2">
              {["Next.js", "TypeScript", "Tailwind"].map((tech, i) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-2 py-1 bg-white/5 rounded text-xs font-medium border border-white/10 hover:border-white/20 transition-all cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Scroll to top */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="relative w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 rounded-full shadow-xl hover:shadow-2xl transition-all group"
            aria-label="Scroll to top"
          >
            <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-20 transition-opacity" />
            <motion.svg
              className="w-6 h-6 text-white relative z-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ y: [-2, 2, -2] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </motion.svg>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}
