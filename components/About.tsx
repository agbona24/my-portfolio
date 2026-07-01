"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { siteConfig } from "@/config/site";

export default function About() {
  const ref = useRef(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [counts, setCounts] = useState({
    years: 0,
    projects: 0,
    clients: 0,
    tech: 0,
  });

  // Magnetic mouse effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 15 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distX = (e.clientX - centerX) / 20;
    const distY = (e.clientY - centerY) / 20;

    mouseX.set(distX);
    mouseY.set(distY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Animated counters
  useEffect(() => {
    if (!isInView) return;

    const targets = {
      years: parseInt(siteConfig.stats.yearsExperience),
      projects: parseInt(siteConfig.stats.projectsCompleted),
      clients: parseInt(siteConfig.stats.happyClients),
      tech: parseInt(siteConfig.stats.technologies),
    };

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounts({
        years: Math.floor(targets.years * progress),
        projects: Math.floor(targets.projects * progress),
        clients: Math.floor(targets.clients * progress),
        tech: Math.floor(targets.tech * progress),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isInView]);

  const skills = [
    { name: "Web Dev", icon: "🌐", color: "from-blue-500 to-cyan-500" },
    { name: "App Dev", icon: "📱", color: "from-purple-500 to-pink-500" },
    { name: "Automation", icon: "⚡", color: "from-yellow-500 to-orange-500" },
    { name: "Sales Funnel", icon: "📊", color: "from-green-500 to-emerald-600" },
    { name: "IT Consulting", icon: "💼", color: "from-slate-600 to-gray-800" },
    { name: "SaaS Development", icon: "☁️", color: "from-sky-500 to-blue-600" },
    { name: "Data Analytics", icon: "📈", color: "from-pink-500 to-rose-600" },
  ];

  return (
    <section
      id="about"
      className="relative py-20 px-4 sm:px-6 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 dark:from-gray-950 dark:via-blue-950 dark:to-indigo-950"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div ref={ref}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-4"
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-2xl">🏆</span>
                <span className="text-sm font-semibold text-blue-200">
                  The Track Record
                </span>
              </div>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white">
              Systems That Drive Real Growth
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto">
              A decade of building revenue-generating digital infrastructure for companies that compete to win
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* Left: Image & Floating Skills */}
            <div className="lg:col-span-2">
              <motion.div
                ref={imageRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative group sticky top-24"
              >
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Image Container */}
                <motion.div
                  style={{ x: smoothMouseX, y: smoothMouseY }}
                  className="relative aspect-square w-full"
                >
                  <img
                    src="/headshot.jpg"
                    alt={siteConfig.name}
                    className="relative w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-white dark:border-gray-800"
                  />

                  {/* Floating Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ delay: 0.8, type: "spring" }}
                    className="absolute -bottom-4 -right-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl shadow-xl"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg">🏆</span>
                      <span className="font-bold">10+ Years</span>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Floating Skills Pills */}
                <div className="absolute -left-6 top-1/4 hidden xl:block">
                  {skills.slice(0, 3).map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -50 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                      transition={{ delay: 1 + index * 0.1, type: "spring" }}
                      whileHover={{ scale: 1.1, x: -10 }}
                      className={`mb-4 px-4 py-2 bg-gradient-to-r ${skill.color} text-white rounded-full shadow-lg backdrop-blur-sm cursor-pointer`}
                    >
                      <div className="flex items-center gap-2 text-sm font-semibold">
                        <span>{skill.icon}</span>
                        <span>{skill.name}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="absolute -right-6 bottom-1/4 hidden xl:block">
                  {skills.slice(3).map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: 50 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                      transition={{ delay: 1.3 + index * 0.1, type: "spring" }}
                      whileHover={{ scale: 1.1, x: 10 }}
                      className={`mb-4 px-4 py-2 bg-gradient-to-r ${skill.color} text-white rounded-full shadow-lg backdrop-blur-sm cursor-pointer`}
                    >
                      <div className="flex items-center gap-2 text-sm font-semibold">
                        <span>{skill.icon}</span>
                        <span>{skill.name}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right: Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Story Paragraphs */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="space-y-6"
              >
                {siteConfig.about.description.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="text-base sm:text-lg text-blue-100 leading-relaxed"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </motion.div>

              {/* Stats Grid */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4"
              >
                {[
                  { label: "Years", value: counts.years, suffix: "+", icon: "🏆", color: "blue" },
                  { label: "Companies", value: counts.projects, suffix: "+", icon: "💼", color: "green" },
                  { label: "Clients", value: counts.clients, suffix: "+", icon: "🤝", color: "purple" },
                  { label: "Tech Stack", value: counts.tech, suffix: "+", icon: "⚡", color: "orange" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                    transition={{ delay: 1 + index * 0.1, type: "spring" }}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative p-6 bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 hover:border-blue-400 transition-all">
                      <div className="text-3xl mb-2">{stat.icon}</div>
                      <div className={`text-3xl sm:text-4xl font-black text-white`}>
                        {stat.value}{stat.suffix}
                      </div>
                      <div className="text-xs sm:text-sm text-blue-200 font-medium mt-1">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <motion.a
                  href="#work"
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all flex items-center gap-2"
                >
                  <span>View Case Studies</span>
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.a>

                <motion.a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-2xl font-semibold shadow-lg border-2 border-white/20 hover:border-blue-400 hover:bg-white/20 transition-all flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span>Schedule a Consultation</span>
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
