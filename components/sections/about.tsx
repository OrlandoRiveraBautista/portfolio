"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/section";

const About = () => {
  return (
    <Section id="about" className="bg-background-secondary/50 relative overflow-hidden">
      {/* Elegant code structure decoration - visible on all screens */}
      <motion.div
        className="absolute left-4 md:left-8 top-24 md:top-32 font-mono text-[8px] md:text-[10px] text-accent/15 pointer-events-none select-none"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="space-y-0.5 md:space-y-1">
          <div><span className="text-accent/30">01</span> {"{"}</div>
          <div className="hidden sm:block"><span className="text-accent/30">02</span>   &quot;name&quot;: &quot;Orlando&quot;,</div>
          <div><span className="text-accent/30 sm:hidden">02</span><span className="text-accent/30 hidden sm:inline">03</span>   &quot;role&quot;: <span className="hidden sm:inline">&quot;engineer&quot;,</span><span className="sm:hidden">&quot;dev&quot;</span></div>
          <div className="hidden sm:block"><span className="text-accent/30">04</span>   &quot;focus&quot;: &quot;impact&quot;</div>
          <div><span className="text-accent/30 sm:hidden">03</span><span className="text-accent/30 hidden sm:inline">05</span> {"}"}</div>
        </div>
      </motion.div>

      {/* Blinking cursor decoration - visible on all screens */}
      <motion.div
        className="absolute right-4 md:right-12 top-28 md:top-40 font-mono text-accent/20 pointer-events-none select-none text-[10px] md:text-sm"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-accent/30 text-[8px] md:text-xs">const</span>{" "}
        <span className="text-accent/40 hidden sm:inline">purpose</span>
        <span className="text-accent/40 sm:hidden">x</span>{" "}
        <span className="text-accent/30">=</span>{" "}
        <span className="text-accent/20">▊</span>
      </motion.div>

      <SectionHeader
        eyebrow="About"
        title="Building with Purpose"
        align="center"
      />

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 text-lg text-foreground-muted leading-relaxed"
        >
          <p>
            I&apos;m a software engineer who believes in{" "}
            <span className="text-foreground font-medium">shipping over theorizing</span>.
            Every line of code I write is aimed at solving a real problem for real people—not
            just ticking off technical requirements.
          </p>

          <p>
            My work spans{" "}
            <span className="text-foreground font-medium">urban mobility platforms</span>{" "}
            that transform how cities move,{" "}
            <span className="text-foreground font-medium">SaaS products</span>{" "}
            that enable businesses to scale,{" "}
            <span className="text-foreground font-medium">enterprise media platforms</span>{" "}
            managing billions of rights, and{" "}
            <span className="text-foreground font-medium">consumer applications</span>{" "}
            that solve real problems. What drives me isn&apos;t the technology itself, but 
            the tangible outcomes it creates.
          </p>

          <p>
            I approach every project with an{" "}
            <span className="text-foreground font-medium">ownership mindset</span>—treating
            it as if it were my own product. That means thinking beyond the immediate task to
            consider scalability, user experience, and long-term maintainability.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-8 border-t border-border"
          >
            <blockquote className="text-xl md:text-2xl text-foreground font-light italic text-center">
              &ldquo;Great software isn&apos;t just built—it&apos;s{" "}
              <span className="text-accent not-italic font-medium">crafted</span>{" "}
              with intention, shipped with confidence, and refined with feedback.&rdquo;
            </blockquote>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};

export { About };

