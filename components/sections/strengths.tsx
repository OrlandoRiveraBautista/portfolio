"use client";

import { motion } from "framer-motion";
import { 
  Layers, 
  Paintbrush, 
  Cloud, 
  Zap, 
  Heart 
} from "lucide-react";
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
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const Strengths = () => {
  return (
    <Section id="strengths">
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
            <Card className="h-full group">
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
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export { Strengths };

