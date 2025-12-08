"use client";

import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="relative w-12 h-12 flex items-center justify-center rounded-xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 shadow-lg transition-all"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        {/* Sun icon */}
        <motion.svg
          className="absolute inset-0 w-6 h-6 text-yellow-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          initial={false}
          animate={{
            scale: theme === "light" ? 1 : 0,
            rotate: theme === "light" ? 0 : 180,
            opacity: theme === "light" ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </motion.svg>

        {/* Moon icon */}
        <motion.svg
          className="absolute inset-0 w-6 h-6 text-indigo-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          initial={false}
          animate={{
            scale: theme === "dark" ? 1 : 0,
            rotate: theme === "dark" ? 0 : -180,
            opacity: theme === "dark" ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </motion.svg>
      </div>
    </motion.button>
  );
}
