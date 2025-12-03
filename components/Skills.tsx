"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { siteConfig } from "@/config/site";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 15 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 15 });

  // Detect mobile on mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 20;
    const y = (e.clientY - rect.top - rect.height / 2) / 20;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    mouseX.set(0);
    mouseY.set(0);
  };

  const skills = [
    {
      category: "Web Development",
      items: siteConfig.skills.frontend,
      icon: "💻",
      gradient: "from-blue-600 to-cyan-600",
      color: "blue",
    },
    {
      category: "Backend & Database",
      items: siteConfig.skills.backend,
      icon: "🔧",
      gradient: "from-purple-600 to-pink-600",
      color: "purple",
    },
    {
      category: "SEO & Marketing Tools",
      items: siteConfig.skills.tools,
      icon: "📊",
      gradient: "from-green-600 to-teal-600",
      color: "green",
    },
    {
      category: "Data Science & AI",
      items: siteConfig.skills.dataScience,
      icon: "🤖",
      gradient: "from-orange-600 to-red-600",
      color: "orange",
    },
    {
      category: "Professional Skills",
      items: siteConfig.skills.professional,
      icon: "👔",
      gradient: "from-indigo-600 to-purple-600",
      color: "indigo",
    },
    {
      category: "Technical Expertise",
      items: siteConfig.skills.technical,
      icon: "⚡",
      gradient: "from-pink-600 to-rose-600",
      color: "pink",
    },
  ];

  return (
    <section id="skills" className="relative py-20 px-6 overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(isMobile ? 5 : 15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full"
            animate={{
              x: [
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
              ],
              y: [
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
              ],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header Section */}
          <div className="text-center mb-16 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="relative inline-block"
            >
              <motion.h2
                className="text-5xl sm:text-6xl lg:text-7xl font-black mb-4 relative"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #3B82F6, #8B5CF6, #EC4899, #3B82F6)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Skills & Expertise
              </motion.h2>

              {/* Animated underline */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mt-6"
            >
              Mastering technologies and methodologies that drive innovation and business success
            </motion.p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {skills.map((skillGroup, groupIndex) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1, y: 0 }
                    : { opacity: 0, scale: 0.8, y: 50 }
                }
                transition={{
                  duration: 0.6,
                  delay: groupIndex * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="group relative"
              >
                {/* Glow effect on hover */}
                <motion.div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${skillGroup.gradient} rounded-3xl opacity-0 group-hover:opacity-75 blur-xl transition-all duration-500`}
                  animate={{
                    scale: hoveredSkill === skillGroup.category ? [1, 1.05, 1] : 1,
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                <motion.div
                  style={isMobile ? {} : {
                    x: smoothMouseX,
                    y: smoothMouseY,
                  }}
                  className="relative bg-white dark:bg-gray-900 rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 dark:border-gray-800 group-hover:border-transparent"
                  onMouseEnter={() => setHoveredSkill(skillGroup.category)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  {/* Icon with animation */}
                  <motion.div
                    className="mb-4 flex items-center gap-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div
                      className={`text-5xl sm:text-6xl flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${skillGroup.gradient} rounded-2xl shadow-lg`}
                    >
                      <span className="filter drop-shadow-lg">
                        {skillGroup.icon}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                      {skillGroup.category}
                    </h3>
                  </motion.div>

                  {/* Skills list */}
                  <div className="space-y-3">
                    {skillGroup.items.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        animate={
                          isInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: -20 }
                        }
                        transition={{
                          duration: 0.4,
                          delay: groupIndex * 0.1 + index * 0.05,
                        }}
                        whileHover={{ x: 8, scale: 1.05 }}
                        className="group/item flex items-center gap-3 cursor-pointer"
                      >
                        <motion.div
                          className={`w-2 h-2 bg-gradient-to-r ${skillGroup.gradient} rounded-full flex-shrink-0`}
                          animate={{
                            scale: [1, 1.5, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.1,
                          }}
                        />
                        <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors">
                          {skill}
                        </span>

                        {/* Animated progress bar on hover */}
                        <motion.div
                          initial={{ width: 0 }}
                          whileHover={{ width: "100%" }}
                          className={`h-0.5 bg-gradient-to-r ${skillGroup.gradient} rounded-full ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity`}
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* Floating corner decoration */}
                  <motion.div
                    className={`absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br ${skillGroup.gradient} rounded-full opacity-20 blur-xl`}
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Education Section with Premium Design */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative"
          >
            {/* Glow background */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl blur-3xl" />

            <div className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/40 dark:via-purple-950/40 dark:to-pink-950/40 rounded-3xl p-8 sm:p-12 border-2 border-white/50 dark:border-gray-800/50 backdrop-blur-sm overflow-hidden">
              {/* Animated background shapes */}
              <div className="absolute inset-0 overflow-hidden opacity-10">
                <motion.div
                  className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-pink-600 to-orange-600 rounded-full"
                  animate={{
                    scale: [1.2, 1, 1.2],
                    rotate: [90, 0, 90],
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                />
              </div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="flex items-center gap-4 mb-8 relative z-10"
              >
                <motion.div
                  className="text-5xl sm:text-6xl w-20 h-20 flex items-center justify-center bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  🎓
                </motion.div>
                <h3 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white">
                  Education & Honors
                </h3>
              </motion.div>

              <div className="space-y-6 relative z-10">
                {/* HND */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  whileHover={{ x: 8 }}
                  className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600 transition-all shadow-lg hover:shadow-xl"
                >
                  <h4 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3">
                    Higher National Diploma (HND) in Computer Science
                  </h4>
                  <p className="text-base sm:text-lg text-gray-900 dark:text-gray-100 mb-2 font-semibold">
                    Moshood Abiola Polytechnic, Abeokuta
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 flex flex-wrap items-center gap-2">
                    <span className="font-medium">January 2014 - April 2019</span>
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full text-sm font-bold">
                      Upper Class
                    </span>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Database Management", "Web Development", "Network Administration"].map(
                      (course, i) => (
                        <motion.span
                          key={course}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ delay: 1.2 + i * 0.1 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/50 dark:to-cyan-900/50 border-2 border-blue-300 dark:border-blue-700 text-blue-700 dark:text-blue-300 rounded-xl text-sm font-bold shadow-sm hover:shadow-md transition-all cursor-pointer"
                        >
                          {course}
                        </motion.span>
                      )
                    )}
                  </div>
                </motion.div>

                {/* Fate Foundation */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  whileHover={{ x: 8 }}
                  className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600 transition-all shadow-lg hover:shadow-xl"
                >
                  <h4 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                    Aspiring Entrepreneur Program
                  </h4>
                  <p className="text-base sm:text-lg text-gray-900 dark:text-gray-100 font-semibold">
                    Fate Foundation Business School, Lagos, Nigeria
                  </p>
                </motion.div>

                {/* Certifications */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: 1.3 }}
                  whileHover={{ x: 8 }}
                  className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-green-200 dark:border-green-800 hover:border-green-400 dark:hover:border-green-600 transition-all shadow-lg hover:shadow-xl"
                >
                  <h4 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-4">
                    Certifications & Honours
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "HP Certified Sales Specialist",
                      "Letter of Excellence - Lagos State Chamber of Commerce & International Arbitration Centre",
                    ].map((cert, i) => (
                      <motion.li
                        key={cert}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 1.4 + i * 0.1 }}
                        whileHover={{ x: 8, scale: 1.02 }}
                        className="flex items-start gap-3 group/cert cursor-pointer"
                      >
                        <motion.span
                          className="text-green-600 dark:text-green-400 text-xl mt-0.5 flex-shrink-0"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                        >
                          ✓
                        </motion.span>
                        <span className="text-base text-gray-700 dark:text-gray-300 font-medium group-hover/cert:text-gray-900 dark:group-hover/cert:text-white transition-colors">
                          {cert}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
