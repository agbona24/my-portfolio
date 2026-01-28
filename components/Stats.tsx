"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function Counter({ value, suffix = "", duration = 2 }: { value: number; suffix?: string; duration?: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration });
      return controls.stop;
    }
  }, [isInView, value, count, duration]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest);
    });
    return unsubscribe;
  }, [rounded]);

  return (
    <span ref={ref}>
      {displayValue}{suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    {
      value: 10,
      suffix: "+",
      label: "Years Experience",
      description: "Building digital solutions",
      icon: "🏆",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      value: 50,
      suffix: "+",
      label: "Projects Completed",
      description: "Across various industries",
      icon: "🚀",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      value: 30,
      suffix: "+",
      label: "Happy Clients",
      description: "Worldwide satisfaction",
      icon: "😊",
      gradient: "from-green-500 to-teal-500",
    },
    {
      value: 15,
      suffix: "+",
      label: "Technologies",
      description: "Mastered & deployed",
      icon: "⚡",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 dark:from-gray-950 dark:via-blue-950 dark:to-purple-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Numbers That Speak
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A track record of delivering excellence and driving results
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl blur-sm group-hover:blur-none transition-all" />
              
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-white/10 hover:border-white/20 transition-all">
                {/* Icon */}
                <div className="text-4xl mb-4">{stat.icon}</div>

                {/* Counter */}
                <div className={`text-4xl lg:text-5xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <h3 className="text-lg font-semibold text-white mb-1">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
