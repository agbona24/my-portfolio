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
    { name: "Laravel", icon: "🔷", color: "from-red-500 to-orange-500" },
    { name: "React", icon: "⚛️", color: "from-cyan-500 to-blue-500" },
    { name: "Next.js", icon: "▲", color: "from-gray-700 to-gray-900" },
    { name: "WordPress", icon: "📝", color: "from-blue-600 to-blue-800" },
    { name: "Sales Funnels", icon: "📊", color: "from-green-500 to-emerald-600" },
    { name: "SEO", icon: "🎯", color: "from-purple-500 to-pink-500" },
  ];

  return (
    <section
      id="about"
      className="relative py-20 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-gray-950 dark:via-blue-950/10 dark:to-gray-950"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
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
              <div className="flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                <span className="text-2xl">👨‍💻</span>
                <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                  My Story
                </span>
              </div>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent">
              Turning Vision Into Reality
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A decade of building exceptional digital experiences that drive real business results
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
                      <motion.div
                        className="w-3 h-3 bg-green-400 rounded-full"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <span className="font-bold">Available</span>
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
                    className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
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
                  { label: "Years", value: counts.years, suffix: "+", icon: "🚀", color: "blue" },
                  { label: "Projects", value: counts.projects, suffix: "+", icon: "💼", color: "green" },
                  { label: "Clients", value: counts.clients, suffix: "+", icon: "😊", color: "purple" },
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
                    <div className="relative p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all">
                      <div className="text-3xl mb-2">{stat.icon}</div>
                      <div className={`text-3xl sm:text-4xl font-black bg-gradient-to-r from-${stat.color}-600 to-${stat.color}-400 bg-clip-text text-transparent`}>
                        {stat.value}{stat.suffix}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium mt-1">
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
                  <span>View My Work</span>
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.a>

                <motion.a
                  href={siteConfig.resume.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-2xl font-semibold shadow-lg border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Download Resume</span>
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
