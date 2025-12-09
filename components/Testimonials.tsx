"use client";

import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { siteConfig } from "@/config/site";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 15 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 15 });

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 30;
    const y = (e.clientY - rect.top - rect.height / 2) / 30;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    mouseX.set(0);
    mouseY.set(0);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % siteConfig.testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + siteConfig.testimonials.length) % siteConfig.testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const gradients = [
    "from-blue-600 to-cyan-600",
    "from-purple-600 to-pink-600",
    "from-green-600 to-teal-600",
    "from-orange-600 to-red-600",
  ];

  return (
    <section
      id="testimonials"
      className="relative py-20 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-950/30 dark:to-purple-950/30 overflow-hidden"
    >
      {/* Floating quote decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-8xl font-bold text-blue-600 dark:text-blue-400"
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            "
          </motion.div>
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
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.6, type: "spring" }}
              className="relative inline-block"
            >
              {/* Animated glow behind title */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-3xl opacity-30"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              <motion.h2
                className="relative text-5xl sm:text-6xl lg:text-7xl font-black mb-4"
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
                Client Testimonials
              </motion.h2>

              {/* Quote marks decoration */}
              <motion.div
                initial={{ opacity: 0, rotate: -10 }}
                animate={
                  isInView
                    ? { opacity: 1, rotate: 0 }
                    : { opacity: 0, rotate: -10 }
                }
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute -left-8 sm:-left-12 top-0 text-6xl sm:text-8xl text-blue-600/20 dark:text-blue-400/20 font-bold"
              >
                "
              </motion.div>
              <motion.div
                initial={{ opacity: 0, rotate: 10 }}
                animate={
                  isInView
                    ? { opacity: 1, rotate: 0 }
                    : { opacity: 0, rotate: 10 }
                }
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute -right-8 sm:-right-12 top-0 text-6xl sm:text-8xl text-purple-600/20 dark:text-purple-400/20 font-bold"
              >
                "
              </motion.div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mt-6"
            >
              Trusted by industry leaders and innovative companies worldwide
            </motion.p>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative">
            {/* Carousel Container */}
            <div className="relative overflow-hidden">
              <motion.div
                className={isMobile ? "flex" : "flex gap-8"}
                animate={{
                  x: isMobile ? -currentIndex * 100 + "%" : -currentIndex * (100 / 3) + "%",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                drag={isMobile ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={
                  isMobile
                    ? (e, { offset, velocity }) => {
                        const swipe = Math.abs(offset.x) * velocity.x;
                        if (swipe < -10000) {
                          nextSlide();
                        } else if (swipe > 10000) {
                          prevSlide();
                        }
                      }
                    : undefined
                }
              >
                {siteConfig.testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={isMobile ? "w-full flex-shrink-0 px-4" : "w-1/3 flex-shrink-0 px-4"}
                  >
                    {renderTestimonialCard(testimonial, index)}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center gap-4 mt-8">
              <motion.button
                onClick={prevSlide}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                disabled={currentIndex === 0}
                className={`w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center shadow-lg transition-opacity ${
                  currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "opacity-100"
                }`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>
              <motion.button
                onClick={nextSlide}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                disabled={
                  isMobile
                    ? currentIndex === siteConfig.testimonials.length - 1
                    : currentIndex >= siteConfig.testimonials.length - 3
                }
                className={`w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center shadow-lg transition-opacity ${
                  (isMobile
                    ? currentIndex === siteConfig.testimonials.length - 1
                    : currentIndex >= siteConfig.testimonials.length - 3)
                    ? "opacity-50 cursor-not-allowed"
                    : "opacity-100"
                }`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 mt-4">
              {(isMobile
                ? siteConfig.testimonials
                : siteConfig.testimonials.slice(0, -2)
              ).map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    currentIndex === index
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 w-8"
                      : "bg-gray-300 dark:bg-gray-700"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-16 text-center"
          >
            <motion.p
              className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6"
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Ready to join these successful clients?
            </motion.p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
              >
                Start Your Project
              </motion.a>
              <motion.a
                href={siteConfig.whatsapp}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-700 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
              >
                Chat on WhatsApp
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );

  function renderTestimonialCard(testimonial: typeof siteConfig.testimonials[0], index: number) {
    return (
              <motion.div
                key={`testimonial-${index}`}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 50, scale: 0.9 }
                }
                transition={{
                  duration: 0.6,
                  delay: isMobile ? 0 : 0.4 + index * 0.15,
                  type: "spring",
                  stiffness: 100,
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onMouseEnter={() => setHoveredIndex(index)}
                className="group relative"
              >
                {/* Glow effect on hover */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-r ${
                    gradients[index % gradients.length]
                  } rounded-3xl opacity-0 group-hover:opacity-75 blur-2xl transition-all duration-500`}
                  animate={{
                    scale: hoveredIndex === index ? [1, 1.05, 1] : 1,
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                <motion.div
                  style={isMobile ? {} : {
                    x: smoothMouseX,
                    y: smoothMouseY,
                  }}
                  className="relative bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-2xl border-2 border-gray-100 dark:border-gray-800 group-hover:border-transparent transition-all duration-300"
                >
                  {/* Quote mark with animation */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={
                      isInView
                        ? { scale: 1, rotate: 0 }
                        : { scale: 0, rotate: -180 }
                    }
                    transition={{
                      duration: 0.6,
                      delay: 0.5 + index * 0.15,
                      type: "spring",
                    }}
                    className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl"
                  >
                    <span className="text-4xl text-white font-bold">"</span>
                  </motion.div>

                  {/* Animated stars */}
                  <div className="flex gap-1 mb-6 mt-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.svg
                        key={i}
                        initial={{ opacity: 0, scale: 0, rotate: -180 }}
                        animate={
                          isInView
                            ? { opacity: 1, scale: 1, rotate: 0 }
                            : { opacity: 0, scale: 0, rotate: -180 }
                        }
                        transition={{
                          duration: 0.5,
                          delay: 0.6 + index * 0.15 + i * 0.1,
                          type: "spring",
                        }}
                        whileHover={{ scale: 1.3, rotate: 15 }}
                        className="w-6 h-6 text-yellow-400 fill-current cursor-pointer"
                        viewBox="0 0 20 20"
                      >
                        <motion.path
                          d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                          animate={{
                            fill: ["#FBBF24", "#FCD34D", "#FBBF24"],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      </motion.svg>
                    ))}
                  </div>

                  {/* Content with animated reveal */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.15 }}
                    className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic relative z-10"
                  >
                    {testimonial.content}
                  </motion.p>

                  {/* Author section with animation */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.6, delay: 0.9 + index * 0.15 }}
                    className="flex items-center gap-4 pt-6 border-t-2 border-gray-200 dark:border-gray-800"
                  >
                    {/* Avatar with gradient and animation */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${
                        gradients[index % gradients.length]
                      } flex items-center justify-center text-white font-bold text-2xl shadow-lg`}
                    >
                      {/* Animated ring around avatar */}
                      <motion.div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${
                          gradients[index % gradients.length]
                        }`}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <span className="relative z-10">
                        {testimonial.name.charAt(0)}
                      </span>
                    </motion.div>

                    <div className="flex-1">
                      <motion.p
                        whileHover={{ x: 4 }}
                        className="font-bold text-lg text-gray-900 dark:text-white"
                      >
                        {testimonial.name}
                      </motion.p>
                      <motion.p
                        whileHover={{ x: 4 }}
                        className="text-sm text-gray-600 dark:text-gray-400 font-medium"
                      >
                        {testimonial.role}
                      </motion.p>
                      <motion.div
                        whileHover={{ x: 4, scale: 1.05 }}
                        className={`inline-flex items-center gap-2 mt-1 px-3 py-1 bg-gradient-to-r ${
                          gradients[index % gradients.length]
                        } text-white rounded-full text-xs font-bold shadow-md`}
                      >
                        <motion.span
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="w-1.5 h-1.5 bg-white rounded-full"
                        />
                        {testimonial.company}
                      </motion.div>
                    </div>

                    {/* Verified badge */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0 }
                      }
                      transition={{
                        duration: 0.5,
                        delay: 1 + index * 0.15,
                        type: "spring",
                      }}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg"
                      title="Verified Client"
                    >
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <motion.path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                          initial={{ pathLength: 0 }}
                          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: 1.2 + index * 0.15,
                          }}
                        />
                      </svg>
                    </motion.div>
                  </motion.div>

                  {/* Decorative corner element */}
                  <motion.div
                    className={`absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br ${
                      gradients[index % gradients.length]
                    } rounded-full opacity-10 blur-2xl`}
                    animate={{
                      scale: [1, 1.3, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </motion.div>
              </motion.div>
    );
  }
}
