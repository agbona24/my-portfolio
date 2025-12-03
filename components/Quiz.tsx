"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { siteConfig } from "@/config/site";

interface QuizQuestion {
  id: number;
  question: string;
  options: { text: string; value: string; icon: string }[];
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What type of project are you planning?",
    options: [
      { text: "Website / Web App", value: "website", icon: "🌐" },
      { text: "E-commerce Store", value: "ecommerce", icon: "🛒" },
      { text: "Mobile Application", value: "mobile", icon: "📱" },
      { text: "Digital Marketing", value: "marketing", icon: "📊" },
    ],
  },
  {
    id: 2,
    question: "What's your estimated budget range?",
    options: [
      { text: "Under $1,000", value: "small", icon: "💵" },
      { text: "$1,000 - $5,000", value: "medium", icon: "💰" },
      { text: "$5,000 - $10,000", value: "large", icon: "💎" },
      { text: "$10,000+", value: "enterprise", icon: "🏆" },
    ],
  },
  {
    id: 3,
    question: "When do you need it completed?",
    options: [
      { text: "ASAP (1-2 weeks)", value: "urgent", icon: "⚡" },
      { text: "1-2 Months", value: "normal", icon: "📅" },
      { text: "2-3 Months", value: "relaxed", icon: "🗓️" },
      { text: "Flexible Timeline", value: "flexible", icon: "🌊" },
    ],
  },
  {
    id: 4,
    question: "What's most important to you?",
    options: [
      { text: "Speed & Efficiency", value: "speed", icon: "🚀" },
      { text: "Quality & Detail", value: "quality", icon: "✨" },
      { text: "Budget-Friendly", value: "budget", icon: "💡" },
      { text: "Ongoing Support", value: "support", icon: "🤝" },
    ],
  },
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [direction, setDirection] = useState(1);

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQuestion]: value });
    setDirection(1);

    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResult(true);
      }
    }, 300);
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setDirection(-1);
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
    setDirection(1);
  };

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-950/30 dark:to-purple-950/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            className="inline-block mb-4"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-6xl">🎯</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
            Find Your Perfect Solution
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Answer a few quick questions to help us understand your needs better
          </p>
        </motion.div>

        <div className="relative bg-white dark:bg-gray-900 rounded-3xl p-8 sm:p-12 shadow-2xl border-2 border-gray-100 dark:border-gray-800 overflow-hidden">
          {/* Background decorations */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-32 h-32 rounded-full ${
                  i % 3 === 0
                    ? "bg-blue-500"
                    : i % 3 === 1
                    ? "bg-purple-500"
                    : "bg-pink-500"
                }`}
                animate={{
                  x: [
                    Math.random() * 100 + "%",
                    Math.random() * 100 + "%",
                  ],
                  y: [
                    Math.random() * 100 + "%",
                    Math.random() * 100 + "%",
                  ],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 10 + i * 2,
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

          {!showResult ? (
            <>
              {/* Progress Bar */}
              <div className="mb-8 relative">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    Question {currentQuestion + 1} of {quizQuestions.length}
                  </span>
                  <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                    {Math.round(progress)}%
                  </span>
                </div>
                <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </div>
              </div>

              {/* Question Card */}
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentQuestion}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="relative z-10"
                >
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                    {quizQuestions[currentQuestion].question}
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {quizQuestions[currentQuestion].options.map(
                      (option, index) => (
                        <motion.button
                          key={option.value}
                          onClick={() => handleAnswer(option.value)}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.05, y: -5 }}
                          whileTap={{ scale: 0.95 }}
                          className={`relative group p-6 rounded-2xl border-2 transition-all ${
                            answers[currentQuestion] === option.value
                              ? "border-blue-500 bg-blue-50 dark:bg-blue-950/30"
                              : "border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 bg-white dark:bg-gray-800"
                          }`}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/5 group-hover:to-purple-600/5 rounded-2xl transition-all" />
                          <div className="relative flex flex-col items-center text-center gap-3">
                            <span className="text-4xl">{option.icon}</span>
                            <span className="font-semibold text-gray-900 dark:text-white">
                              {option.text}
                            </span>
                          </div>
                        </motion.button>
                      )
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="mt-8 flex justify-between items-center relative z-10">
                <motion.button
                  onClick={handleBack}
                  disabled={currentQuestion === 0}
                  whileHover={{ scale: 1.05, x: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-xl font-medium transition-all ${
                    currentQuestion === 0
                      ? "opacity-50 cursor-not-allowed bg-gray-200 dark:bg-gray-800 text-gray-500"
                      : "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700"
                  }`}
                >
                  ← Back
                </motion.button>

                <motion.button
                  onClick={handleReset}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 rounded-xl font-medium hover:border-gray-300 dark:hover:border-gray-600 transition-all"
                >
                  Reset
                </motion.button>
              </div>
            </>
          ) : (
            // Results Screen
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center relative z-10"
            >
              <motion.div
                className="inline-block mb-6"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, ease: "easeInOut" }}
              >
                <span className="text-8xl">🎉</span>
              </motion.div>

              <h3 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mb-4">
                Perfect! We Got Your Answers
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Based on your responses, I can create a tailored solution for
                your needs. Let's discuss your project in detail!
              </p>

              {/* Summary Cards */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {quizQuestions.map((q, index) => {
                  const selectedOption = q.options.find(
                    (opt) => opt.value === answers[index]
                  );
                  return (
                    <motion.div
                      key={q.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 p-4 rounded-xl border border-blue-200 dark:border-blue-800"
                    >
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {q.question}
                      </p>
                      {selectedOption && (
                        <div className="flex items-center gap-2 font-semibold text-gray-900 dark:text-white">
                          <span className="text-2xl">{selectedOption.icon}</span>
                          <span>{selectedOption.text}</span>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="#booking"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2"
                >
                  <span>📅</span>
                  <span>Book Consultation</span>
                </motion.a>

                <motion.a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-green-600 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2"
                >
                  <span>💬</span>
                  <span>WhatsApp Me</span>
                </motion.a>
              </div>

              <motion.button
                onClick={handleReset}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors font-medium"
              >
                ← Retake Quiz
              </motion.button>
            </motion.div>
          )}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600 dark:text-gray-400"
        >
          <div className="flex items-center gap-2">
            <span className="text-2xl">⚡</span>
            <span>Fast Response</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-gray-300 dark:bg-gray-700" />
          <div className="flex items-center gap-2">
            <span className="text-2xl">🔒</span>
            <span>100% Confidential</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-gray-300 dark:bg-gray-700" />
          <div className="flex items-center gap-2">
            <span className="text-2xl">✨</span>
            <span>No Commitment Required</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
