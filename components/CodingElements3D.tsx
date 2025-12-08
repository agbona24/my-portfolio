"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const codeSymbols = [
  { symbol: "</>" , label: "HTML" },
  { symbol: "{}", label: "Object" },
  { symbol: "( )", label: "Function" },
  { symbol: "[ ]", label: "Array" },
  { symbol: "=>", label: "Arrow" },
  { symbol: "<?php", label: "PHP" },
  { symbol: "fn()", label: "Callback" },
  { symbol: "</>", label: "JSX" },
];

const codeSnippets = [
  "const code = 'art';",
  "function build() {}",
  "npm install",
  "git commit -m",
  "docker run",
  "SELECT * FROM",
  "import React",
  "export default",
];

export default function CodingElements3D() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-30">
      {/* Floating Code Symbols */}
      {codeSymbols.map((item, index) => (
        <motion.div
          key={`symbol-${index}`}
          className="absolute font-mono font-bold text-blue-600 dark:text-blue-400"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
            scale: 0.5,
            rotateX: 0,
            rotateY: 0,
          }}
          animate={{
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            opacity: [0.2, 0.6, 0.2],
            scale: [0.8, 1.2, 0.8],
            rotateX: [0, 360, 0],
            rotateY: [0, 360, 0],
          }}
          transition={{
            duration: 20 + index * 2,
            repeat: Infinity,
            ease: "linear",
            delay: index * 0.5,
          }}
          style={{
            fontSize: `${20 + (index % 3) * 10}px`,
            perspective: "1000px",
            transformStyle: "preserve-3d",
          }}
        >
          <div className="relative">
            <span className="block transform-gpu">{item.symbol}</span>
            <span className="text-xs opacity-50 block mt-1">{item.label}</span>
          </div>
        </motion.div>
      ))}

      {/* Floating Code Snippets */}
      {codeSnippets.map((snippet, index) => (
        <motion.div
          key={`snippet-${index}`}
          className="absolute font-mono text-sm text-purple-600 dark:text-purple-400 bg-white/5 dark:bg-black/5 backdrop-blur-sm px-3 py-2 rounded-lg border border-purple-300/20"
          initial={{
            x: Math.random() * window.innerWidth,
            y: -50,
            opacity: 0,
            rotateZ: -10,
          }}
          animate={{
            y: window.innerHeight + 50,
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth + 100,
              Math.random() * window.innerWidth,
            ],
            opacity: [0, 0.7, 0],
            rotateZ: [- 10, 10, -10],
          }}
          transition={{
            duration: 15 + index * 3,
            repeat: Infinity,
            ease: "linear",
            delay: index * 2,
          }}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {snippet}
        </motion.div>
      ))}

      {/* 3D Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            transform: "perspective(1000px) rotateX(60deg) translateZ(-100px)",
            transformOrigin: "center center",
          }}
        />
      </div>

      {/* Floating Tech Icons */}
      {["⚛️", "🔷", "🟢", "🐘", "🗄️", "⚡"].map((icon, index) => (
        <motion.div
          key={`icon-${index}`}
          className="absolute text-4xl"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: 0,
            rotate: 0,
          }}
          animate={{
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight - 200,
              Math.random() * window.innerHeight,
            ],
            scale: [0.5, 1, 0.5],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25 + index * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 1.5,
          }}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {icon}
        </motion.div>
      ))}

      {/* Orbiting Particles */}
      {[...Array(10)].map((_, index) => {
        const angle = (index / 10) * Math.PI * 2;
        const radius = 150;
        return (
          <motion.div
            key={`particle-${index}`}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            style={{
              left: "50%",
              top: "50%",
            }}
            animate={{
              x: [
                Math.cos(angle) * radius,
                Math.cos(angle + Math.PI) * radius,
                Math.cos(angle) * radius,
              ],
              y: [
                Math.sin(angle) * radius,
                Math.sin(angle + Math.PI) * radius,
                Math.sin(angle) * radius,
              ],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
              delay: index * 0.2,
            }}
          />
        );
      })}
    </div>
  );
}
