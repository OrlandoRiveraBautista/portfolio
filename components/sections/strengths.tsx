"use client";

import { motion } from "framer-motion";
import { Layers, Paintbrush, Cloud, Zap, Heart } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Card } from "@/components/ui/card";

const strengths = [
  {
    icon: Layers,
    title: "Full-Stack & Product Engineering",
    description:
      "From frontend UX to backend architecture, I build systems end-to-end. No handoffs, no gaps—just cohesive products that work.",
  },
  {
    icon: Paintbrush,
    title: "UI/UX with Engineering Taste",
    description:
      "Interfaces that are intuitive, performant, and built to scale. Design decisions informed by technical constraints and user needs.",
  },
  {
    icon: Cloud,
    title: "Scalable Infrastructure",
    description:
      "Thoughtful architecture using modern cloud tooling and APIs. Systems designed to grow gracefully under pressure.",
  },
  {
    icon: Zap,
    title: "Rapid Learning & Execution",
    description:
      "I learn fast, test quickly, and ship reliably. New tech stacks, unfamiliar domains—I adapt and deliver.",
  },
  {
    icon: Heart,
    title: "Mission-Driven Development",
    description:
      "Technology as a tool for meaningful, real-world change. I build because it matters, not just because I can.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

const Strengths = () => {
  return (
    <Section id="strengths" className="relative overflow-hidden">
      {/* Function signature decoration - responsive */}
      <motion.div
        className="absolute right-4 md:right-8 top-20 md:top-24 font-mono text-[9px] md:text-[11px] text-accent/15 pointer-events-none select-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {/* Mobile version - compact */}
        <div className="sm:hidden">
          <div className="text-accent/25">fn build() {"{"}</div>
          <div className="ml-2 text-accent/15">return 🚀;</div>
          <div className="text-accent/20">{"}"}</div>
        </div>
        {/* Desktop version - full */}
        <div className="hidden sm:block">
          <div className="text-accent/25">function</div>
          <div className="ml-2 text-accent/20">buildGreatSoftware(</div>
          <div className="ml-4 text-accent/15">skills,</div>
          <div className="ml-4 text-accent/15">passion,</div>
          <div className="ml-4 text-accent/15">purpose</div>
          <div className="ml-2 text-accent/20">) {"{"}</div>
          <div className="ml-4 text-accent/15">return impact;</div>
          <div className="ml-2 text-accent/20">{"}"}</div>
        </div>
      </motion.div>

      {/* Import statement decoration - responsive */}
      <motion.div
        className="absolute left-4 md:left-8 bottom-16 md:bottom-24 font-mono text-[8px] md:text-[10px] text-accent/12 pointer-events-none select-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="hidden sm:block">import {"{"} expertise {"}"} from &apos;./experience&apos;;</div>
        <div>import {"{"} <span className="hidden sm:inline">dedication</span><span className="sm:hidden">skill</span> {"}"} from &apos;./me&apos;;</div>
      </motion.div>

      <SectionHeader
        eyebrow="Core Strengths"
        title="What I Bring to the Table"
        description="Not just skills—these are the pillars that define how I approach every project."
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {strengths.map((strength, index) => (
          <motion.div key={strength.title} variants={itemVariants}>
            <Card className="h-full group relative">
              {/* Subtle line number */}
              <span className="absolute top-4 right-4 font-mono text-[10px] text-accent/20">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <strength.icon className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {strength.title}
                </h3>
                <p className="text-foreground-muted leading-relaxed flex-grow">
                  {strength.description}
                </p>
                {/* Subtle code accent */}
                <div className="mt-4 pt-3 border-t border-border/50">
                  <span className="font-mono text-[10px] text-accent/30">
                    .skill[{index}]
                  </span>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export { Strengths };
