"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type Question = {
  id: number;
  question: string;
  options: { text: string; tags: string[] }[];
};

type ServiceResult = {
  title: string;
  description: string;
  icon: string;
  gradient: string;
  tags: string[];
};

const questions: Question[] = [
  {
    id: 1,
    question: "What's your primary business goal?",
    options: [
      { text: "Get more customers online", tags: ["seo", "funnel", "web"] },
      { text: "Automate repetitive tasks", tags: ["automation", "ai"] },
      { text: "Build a new digital product", tags: ["web", "saas", "app"] },
      { text: "Improve existing systems", tags: ["consulting", "optimization"] },
    ],
  },
  {
    id: 2,
    question: "What's your current biggest challenge?",
    options: [
      { text: "Low website traffic or visibility", tags: ["seo", "marketing"] },
      { text: "Manual processes taking too much time", tags: ["automation", "ai"] },
      { text: "Need a website or app built", tags: ["web", "app", "saas"] },
      { text: "Converting visitors into customers", tags: ["funnel", "marketing"] },
    ],
  },
  {
    id: 3,
    question: "What type of business do you have?",
    options: [
      { text: "E-commerce / Online Store", tags: ["web", "saas", "automation"] },
      { text: "Service-based business", tags: ["funnel", "seo", "web"] },
      { text: "SaaS / Tech startup", tags: ["saas", "app", "automation"] },
      { text: "Agency / Consulting", tags: ["automation", "web", "consulting"] },
    ],
  },
  {
    id: 4,
    question: "What's your timeline?",
    options: [
      { text: "Urgent - Need it ASAP", tags: ["web", "funnel"] },
      { text: "1-3 months", tags: ["saas", "automation", "web"] },
      { text: "3-6 months", tags: ["saas", "app", "ai"] },
      { text: "Just exploring options", tags: ["consulting"] },
    ],
  },
];

const services: ServiceResult[] = [
  {
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies for maximum performance and conversions.",
    icon: "🌐",
    gradient: "from-blue-500 to-cyan-500",
    tags: ["web"],
  },
  {
    title: "AI Automation Solutions",
    description: "Intelligent automation systems that streamline operations, save time, and reduce costs using AI-powered workflows.",
    icon: "🤖",
    gradient: "from-purple-500 to-pink-500",
    tags: ["automation", "ai"],
  },
  {
    title: "SEO & Digital Marketing",
    description: "Data-driven strategies to increase visibility, drive organic traffic, and improve search rankings.",
    icon: "📈",
    gradient: "from-green-500 to-teal-500",
    tags: ["seo", "marketing"],
  },
  {
    title: "Sales Funnel Systems",
    description: "High-converting sales funnels with CRM integration, email automation, and conversion optimization.",
    icon: "📊",
    gradient: "from-orange-500 to-red-500",
    tags: ["funnel", "marketing"],
  },
  {
    title: "SaaS Development",
    description: "Scalable SaaS platforms with multi-tenancy, subscription billing, and enterprise features.",
    icon: "☁️",
    gradient: "from-indigo-500 to-purple-500",
    tags: ["saas", "app"],
  },
  {
    title: "IT Consulting",
    description: "Strategic technology consulting to optimize your systems, processes, and digital infrastructure.",
    icon: "💼",
    gradient: "from-slate-500 to-gray-700",
    tags: ["consulting", "optimization"],
  },
];

export default function ServiceQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[][]>([]);
  const [showResults, setShowResults] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  const handleAnswer = (tags: string[]) => {
    const newAnswers = [...answers, tags];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const getRecommendedServices = () => {
    const allTags = answers.flat();
    const tagCounts: Record<string, number> = {};
    
    allTags.forEach((tag) => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });

    const scoredServices = services.map((service) => {
      const score = service.tags.reduce((acc, tag) => acc + (tagCounts[tag] || 0), 0);
      return { ...service, score };
    });

    return scoredServices.sort((a, b) => b.score - a.score).slice(0, 3);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    setIsStarted(false);
  };

  return (
    <section id="service-quiz" className="py-20 px-4 sm:px-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-4">
            <span className="text-2xl">🎯</span>
            <span className="text-sm font-semibold text-purple-200">Find Your Perfect Service</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Service Recommendation Quiz
          </h2>
          <p className="text-lg text-purple-200 max-w-2xl mx-auto">
            Answer a few quick questions and I&apos;ll recommend the best services for your business needs.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!isStarted ? (
            <motion.div
              key="start"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-white/20 text-center"
            >
              <div className="text-6xl mb-6">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to find your perfect solution?
              </h3>
              <p className="text-purple-200 mb-8">
                This quick 4-question quiz will help identify which of my services best match your business goals.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsStarted(true)}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Start Quiz →
              </motion.button>
            </motion.div>
          ) : !showResults ? (
            <motion.div
              key={`question-${currentQuestion}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-white/20"
            >
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-sm text-purple-200 mb-2">
                  <span>Question {currentQuestion + 1} of {questions.length}</span>
                  <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
                </div>
                <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                    initial={{ width: `${(currentQuestion / questions.length) * 100}%` }}
                    animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8">
                {questions[currentQuestion].question}
              </h3>

              <div className="grid gap-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAnswer(option.tags)}
                    className="w-full p-5 text-left bg-white/5 hover:bg-white/15 border border-white/10 hover:border-purple-400 rounded-2xl transition-all group"
                  >
                    <span className="text-lg text-white group-hover:text-purple-200 transition-colors">
                      {option.text}
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-white/20"
            >
              <div className="text-center mb-8">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  Your Recommended Services
                </h3>
                <p className="text-purple-200">
                  Based on your answers, here are the best solutions for you:
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {getRecommendedServices().map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15 }}
                    className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${service.gradient} text-white text-2xl`}>
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-xl font-bold text-white">{service.title}</h4>
                          {index === 0 && (
                            <span className="px-2 py-0.5 bg-green-500 text-white text-xs font-bold rounded-full">
                              Best Match
                            </span>
                          )}
                        </div>
                        <p className="text-purple-200 text-sm">{service.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full shadow-lg text-center"
                >
                  Discuss My Project
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={resetQuiz}
                  className="px-8 py-4 bg-white/10 text-white font-bold rounded-full border border-white/20 hover:bg-white/20 transition-all"
                >
                  Retake Quiz
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
