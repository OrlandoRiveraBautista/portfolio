"use client";

import { motion } from "framer-motion";
import { 
  Lightbulb, 
  PenTool, 
  Code2, 
  Rocket,
  MessageSquare,
  Scale,
  Shield
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";

const steps = [
  {
    icon: Lightbulb,
    title: "Think",
    description: "Understand the problem deeply before writing any code.",
  },
  {
    icon: PenTool,
    title: "Design",
    description: "Map out architecture and user flows with intention.",
  },
  {
    icon: Code2,
    title: "Build",
    description: "Write clean, tested code that solves the actual problem.",
  },
  {
    icon: Rocket,
    title: "Scale",
    description: "Ship, measure, iterate, and grow with confidence.",
  },
];

const principles = [
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description: "Complex technical concepts, explained simply. No jargon walls, no assumed knowledge.",
  },
  {
    icon: Scale,
    title: "Tradeoff Awareness",
    description: "Every technical decision has consequences. I make them visible and deliberate.",
  },
  {
    icon: Shield,
    title: "Ownership Mindset",
    description: "I treat every project like it's my own product—because that's how great software gets built.",
  },
];

const Process = () => {
  return (
    <Section id="process">
      <SectionHeader
        eyebrow="How I Work"
        title="Process That Delivers"
        description="Shipping great software isn't magic—it's discipline, clarity, and iteration."
      />

      {/* Process Steps */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-20"
      >
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative text-center"
              >
                <div className="relative inline-flex flex-col items-center">
                  {/* Step Number */}
                  <span className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-background-secondary border border-border flex items-center justify-center mb-4 group-hover:border-accent transition-colors">
                    <step.icon className="w-7 h-7 text-accent" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-foreground-muted">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Principles */}
      <div className="grid md:grid-cols-3 gap-6">
        {principles.map((principle, index) => (
          <motion.div
            key={principle.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            className="relative p-6 rounded-2xl bg-background-secondary/50 border border-border hover:border-border-hover transition-all duration-300 group"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                <principle.icon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {principle.title}
                </h3>
                <p className="text-sm text-foreground-muted leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export { Process };

