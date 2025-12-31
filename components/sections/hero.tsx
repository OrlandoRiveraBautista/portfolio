"use client";

import { motion } from "framer-motion";
import { ArrowDown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  // Floating code snippets
  const codeSnippets = [
    "const build = () => {}",
    "function create()",
    "npm run dev",
    "git commit -m",
    "async/await",
    "{ ...spread }",
    "=> arrow",
    "<Component />",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute inset-0 bg-noise" />

      {/* Floating Code Snippets - show fewer on mobile */}
      {codeSnippets.slice(0, 4).map((snippet, i) => (
        <motion.div
          key={i}
          className={`absolute text-accent/20 font-mono text-[10px] md:text-sm font-medium pointer-events-none select-none ${
            i > 1 ? "hidden sm:block" : ""
          }`}
          style={{
            left: `${10 + i * 15}%`,
            top: `${15 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        >
          {snippet}
        </motion.div>
      ))}

      {/* Binary Rain Effect - fewer columns on mobile */}
      {[
        "10110010",
        "01101001",
        "11010100",
        "00101101",
        "10011010",
        "01110011",
      ].map((binary, i) => (
        <motion.div
          key={`binary-${i}`}
          className={`absolute text-accent/10 font-mono text-[10px] md:text-xs pointer-events-none select-none ${
            i > 2 ? "hidden md:block" : ""
          }`}
          style={{
            right: `${5 + i * 18}%`,
            top: -20,
          }}
          animate={{
            y: ["0vh", "100vh"],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            ease: "linear",
            delay: i * 1.5,
          }}
        >
          {binary}
        </motion.div>
      ))}

      {/* Geometric Tech Shapes - responsive sizing */}
      <motion.div
        className="absolute top-16 md:top-20 right-4 md:right-20 w-16 h-16 md:w-32 md:h-32 border border-accent/20 pointer-events-none"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="absolute inset-2 md:inset-4 border border-accent/10" />
      </motion.div>

      <motion.div
        className="absolute bottom-24 md:bottom-32 left-4 md:left-20 w-12 h-12 md:w-24 md:h-24 pointer-events-none"
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="absolute inset-0 border-l-2 border-t-2 border-accent/20" />
        <div className="absolute inset-2 border-r-2 border-b-2 border-accent/10" />
      </motion.div>

      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-80 h-80 bg-orange-600/15 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Profile Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative flex-shrink-0"
            >
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
                {/* Animated ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-accent/30"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    background:
                      "conic-gradient(from 0deg, transparent, var(--accent) 10%, transparent 20%)",
                    WebkitMask:
                      "radial-gradient(farthest-side, transparent calc(100% - 2px), black calc(100% - 2px))",
                    mask: "radial-gradient(farthest-side, transparent calc(100% - 2px), black calc(100% - 2px))",
                  }}
                />
                {/* Photo container */}
                <div className="absolute inset-3 rounded-full overflow-hidden border-2 border-border/50 shadow-2xl shadow-accent/10">
                  <Image
                    src="/profile-photo.jpeg"
                    alt="Orlando Rivera-Bautista"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-accent/5 blur-2xl -z-10" />
              </div>
            </motion.div>

            {/* Text Content */}
            <div className="text-center lg:text-left">
              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
              >
                <span className="text-foreground">Orlando</span>
                <br />
                <span className="text-gradient-accent">Rivera-Bautista</span>
              </motion.h1>

              {/* Title */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-base sm:text-lg text-foreground-muted font-medium tracking-wide mb-6"
              >
                Software Engineer <span className="text-accent">·</span> Product
                Builder <span className="text-accent">·</span> Systems Thinker
              </motion.p>

              {/* Value Proposition */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-lg sm:text-xl md:text-2xl text-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10 font-light"
              >
                I design and build{" "}
                <span className="text-accent font-medium">
                  scalable software systems
                </span>{" "}
                that solve real-world problems and create{" "}
                <span className="text-accent font-medium">
                  measurable impact
                </span>
                .
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <Button size="lg" asChild>
                  <a href="#work">
                    View Work
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#contact">Contact Me</a>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-foreground-subtle"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export { Hero };
