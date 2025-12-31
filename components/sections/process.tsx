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
    <Section id="process" className="relative overflow-hidden">
      {/* Git-style decoration - responsive */}
      <motion.div
        className="absolute left-3 md:left-6 top-24 md:top-28 font-mono text-[8px] md:text-[10px] text-accent/15 pointer-events-none select-none"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-1.5 md:gap-2">
          <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-500/40" />
          <span>main</span>
        </div>
        <div className="ml-0.5 md:ml-1 border-l border-accent/20 pl-2 md:pl-3 mt-1 space-y-0.5 md:space-y-1">
          <div className="text-accent/20 hidden sm:block">feat: ship with confidence</div>
          <div className="text-accent/20 sm:hidden">feat: ship</div>
          <div className="text-accent/15 hidden sm:block">refactor: iterate & improve</div>
        </div>
      </motion.div>

      {/* Pipeline operator decoration - responsive */}
      <motion.div
        className="absolute right-3 md:right-10 top-28 md:top-32 font-mono text-accent/15 pointer-events-none select-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {/* Mobile version - stacked */}
        <div className="sm:hidden text-[8px] text-right space-y-0.5">
          <div className="text-accent/25">idea → build</div>
          <div className="text-accent/30">→ ship 🚀</div>
        </div>
        {/* Desktop version - horizontal */}
        <div className="hidden sm:flex items-center gap-2 text-[11px]">
          <span className="text-accent/25">idea</span>
          <motion.span
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            |&gt;
          </motion.span>
          <span className="text-accent/25">build</span>
          <motion.span
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          >
            |&gt;
          </motion.span>
          <span className="text-accent/25">ship</span>
          <motion.span
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
          >
            |&gt;
          </motion.span>
          <span className="text-accent/30">impact</span>
        </div>
      </motion.div>

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

