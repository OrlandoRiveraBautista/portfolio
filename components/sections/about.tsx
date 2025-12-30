"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/section";

const About = () => {
  return (
    <Section id="about" className="bg-background-secondary/50">
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

