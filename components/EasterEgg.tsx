"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function EasterEgg() {
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [keySequence, setKeySequence] = useState<string[]>([]);

  // Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A
  const konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      const newSequence = [...keySequence, key].slice(-10); // Keep last 10 keys
      setKeySequence(newSequence);

      // Check if Konami code is entered
      const konamiString = konamiCode.join(",").toLowerCase();
      const sequenceString = newSequence.join(",").toLowerCase();

      if (sequenceString === konamiString) {
        setShowEasterEgg(true);
        setKeySequence([]); // Reset sequence
        setTimeout(() => setShowEasterEgg(false), 5000); // Hide after 5 seconds
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [keySequence]);

  return (
    <AnimatePresence>
      {showEasterEgg && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

          {/* Easter Egg Content */}
          <motion.div
            initial={{ y: 50, rotate: -10 }}
            animate={{ y: 0, rotate: 0 }}
            transition={{ type: "spring", damping: 10 }}
            className="relative z-10 glass-card p-12 max-w-2xl mx-4 pointer-events-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: [0, 360] }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <div className="text-8xl mb-6">🎉🎊🚀</div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                You Found It!
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
                Congratulations! You discovered the secret Konami code! 🎮
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                You're clearly a person of culture and gaming history.
                <br />
                Let's build something amazing together! 🌟
              </p>

              {/* Confetti Effect */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ y: -20, x: Math.random() * 100 + "%", opacity: 1 }}
                    animate={{
                      y: "100vh",
                      x: `${Math.random() * 100}%`,
                      rotate: Math.random() * 360,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      delay: Math.random() * 0.5,
                      ease: "easeOut",
                    }}
                    className="absolute w-4 h-4 rounded-full"
                    style={{
                      background: [
                        "#3B82F6",
                        "#8B5CF6",
                        "#EC4899",
                        "#10B981",
                        "#F59E0B",
                      ][i % 5],
                    }}
                  />
                ))}
              </div>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowEasterEgg(false)}
              className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Awesome! Close
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
