"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { siteConfig } from "@/config/site";
import Image from "next/image";

export default function Work() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Extract unique technologies from all projects
  const allTags = Array.from(new Set(siteConfig.projects.flatMap(p => p.tags)));
  const filters = ["All", ...allTags.slice(0, 8)]; // Show top 8 tags

  // Filter projects based on selected filter and search query
  const filteredProjects = siteConfig.projects.filter(project => {
    const matchesFilter = filter === "All" || project.tags.includes(filter);
    const matchesSearch = searchQuery === "" ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  // Group projects by type for better showcase
  const featuredProjects = filteredProjects.slice(0, 6);
  const otherProjects = filteredProjects.slice(6);

  return (
    <section id="work" className="py-20 px-4 sm:px-6 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
              <span className="text-2xl">💼</span>
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                Portfolio Showcase
              </span>
            </div>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent">
            Crafting Digital Excellence
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-4">
            Transforming ideas into powerful digital solutions. From SaaS platforms to enterprise systems,
            each project represents a unique challenge solved with innovation and expertise.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span><strong className="text-gray-900 dark:text-white">{siteConfig.stats.projectsCompleted}</strong> Delivered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span><strong className="text-gray-900 dark:text-white">{siteConfig.stats.happyClients}</strong> Satisfied Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
              <span><strong className="text-gray-900 dark:text-white">{siteConfig.stats.technologies}</strong> Technologies</span>
            </div>
          </div>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-12"
        >
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search projects by name, description, or technology..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pl-14 rounded-2xl bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 focus:border-blue-500 dark:focus:border-blue-500 outline-none transition-all text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 shadow-lg"
              />
              <svg
                className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                >
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filterOption, index) => (
              <motion.button
                key={filterOption}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.5 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(filterOption)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all shadow-md ${
                  filter === filterOption
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-800"
                }`}
              >
                {filterOption}
              </motion.button>
            ))}
          </div>

          {/* Results Count */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-6 text-gray-600 dark:text-gray-400"
          >
            Showing <strong className="text-blue-600 dark:text-blue-400">{filteredProjects.length}</strong> project{filteredProjects.length !== 1 ? 's' : ''}
            {(searchQuery || filter !== "All") && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setFilter("All");
                }}
                className="ml-2 text-blue-600 dark:text-blue-400 hover:underline"
              >
                Clear filters
              </button>
            )}
          </motion.p>
        </motion.div>

        {/* Featured Projects - Large Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800"
              >
                {/* Project Image or Gradient Header */}
                <div className={`relative h-48 sm:h-56 overflow-hidden ${!project.image ? `bg-gradient-to-br ${project.gradient}` : ''}`}>
                  {project.image ? (
                    <>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                        quality={75}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-colors duration-500" />
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
                      {/* Floating Shapes */}
                      <div className="absolute inset-0 overflow-hidden opacity-20">
                        <motion.div
                          className="absolute top-4 right-4 w-20 h-20 bg-white rounded-full"
                          animate={{
                            y: [0, -10, 0],
                            x: [0, 10, 0],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                        <motion.div
                          className="absolute bottom-4 left-4 w-16 h-16 bg-white rounded-full"
                          animate={{
                            y: [0, 10, 0],
                            x: [0, -10, 0],
                          }}
                          transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      </div>
                    </>
                  )}

                  {/* Live Badge */}
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <div className="absolute top-4 left-4 px-3 py-1.5 bg-green-500 text-white rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg">
                      <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                      LIVE
                    </div>
                  )}

                  {/* Category Badge */}
                  {project.category && (
                    <div className="absolute top-4 right-4 px-3 py-1.5 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-full text-xs font-bold text-gray-900 dark:text-white shadow-lg">
                      {project.category}
                    </div>
                  )}

                  {/* Project Number */}
                  <div className="absolute bottom-4 left-4 text-6xl sm:text-7xl font-black text-white/10 select-none">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-xs font-semibold border border-blue-200 dark:border-blue-800"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg text-xs font-semibold">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* View Project Link */}
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm group/link"
                    >
                      <span>View Live Project</span>
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </motion.a>
                  )}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* More Projects - Compact Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
              More Amazing Projects
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Diverse portfolio across multiple industries and technologies
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.05 }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
              >
                {/* Project Image or Gradient Header */}
                <div className={`relative h-32 overflow-hidden ${!project.image ? `bg-gradient-to-r ${project.gradient}` : ''}`}>
                  {project.image ? (
                    <>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                        quality={75}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </>
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br opacity-90" />
                  )}

                  {/* Live Badge */}
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <div className="absolute top-2 right-2 px-2 py-1 bg-green-500 text-white rounded-full text-xs font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                      LIVE
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2 line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h4>

                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.liveUrl && project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 font-medium hover:gap-2 transition-all"
                    >
                      <span>View</span>
                      <span>→</span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-30" />
            <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 sm:p-12 text-white">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Let's discuss how I can help bring your vision to life with cutting-edge technology and proven expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="#booking"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Book Consultation
                </motion.a>
                <motion.a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-full font-semibold hover:bg-white/20 transition-all"
                >
                  WhatsApp Me
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
