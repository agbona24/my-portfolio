"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { siteConfig } from "@/config/site";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skills = [
    {
      category: "Web Development",
      items: siteConfig.skills.frontend,
      icon: "💻",
    },
    {
      category: "Backend & Database",
      items: siteConfig.skills.backend,
      icon: "🔧",
    },
    {
      category: "SEO & Marketing Tools",
      items: siteConfig.skills.tools,
      icon: "📊",
    },
    {
      category: "Data Science & AI",
      items: siteConfig.skills.dataScience,
      icon: "🤖",
    },
    {
      category: "Professional Skills",
      items: siteConfig.skills.professional,
      icon: "👔",
    },
    {
      category: "Technical Expertise",
      items: siteConfig.skills.technical,
      icon: "⚡",
    },
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Comprehensive skill set spanning web development, data science, digital marketing, and business leadership
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, groupIndex) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{skillGroup.icon}</span>
                  <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">
                    {skillGroup.category}
                  </h3>
                </div>

                <div className="space-y-2">
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
                        duration: 0.3,
                        delay: groupIndex * 0.1 + index * 0.05,
                      }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex-shrink-0" />
                      <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-2xl p-8 border border-blue-100 dark:border-blue-900"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🎓</span>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Education
              </h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  Higher National Diploma (HND) in Computer Science
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-1">
                  <span className="font-semibold">Moshood Abiola Polytechnic</span> - Abeokuta
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  January 2014 - April 2019 • Upper Class
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Database Management", "Web Development", "Network Administration"].map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1 bg-white dark:bg-gray-800 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-blue-200 dark:border-blue-800">
                <h4 className="text-lg font-bold text-purple-600 dark:text-purple-400 mb-2">
                  Aspiring Entrepreneur Program
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">Fate Foundation Business School</span> - Lagos, Nigeria
                </p>
              </div>

              <div className="pt-4 border-t border-blue-200 dark:border-blue-800">
                <h4 className="text-lg font-bold text-green-600 dark:text-green-400 mb-2">
                  Certifications & Honours
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">HP Certified Sales Specialist</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Letter of Excellence - Lagos State Chamber of Commerce & International Arbitration Centre</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
