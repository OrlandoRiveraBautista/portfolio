"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";

const Testimonial = () => {
  return (
    <Section id="testimonial" className="bg-background-secondary/30">
      <SectionHeader
        eyebrow="Testimonial"
        title="What People Say"
        align="center"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="relative bg-background-secondary border border-border rounded-2xl p-8 md:p-12">
          {/* Quote Icon */}
          <div className="absolute top-6 left-6 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
            <Quote className="w-6 h-6 text-accent" />
          </div>

          {/* Quote Content */}
          <div className="relative z-10 pt-8">
            <blockquote className="text-lg md:text-xl text-foreground-muted leading-relaxed mb-6">
              <p className="mb-4">
                I&apos;m very grateful I got the chance to meet you and to work with you on this! 
                It&apos;s extremely rare to find people who are willing to commit to delivering on a vision, 
                especially when it takes a long time to fully get there.
              </p>
              <p className="mb-4">
                Your tenacity and creativity with being able to generate infinite novel solutions 
                (and then actually take them to the real world) to make people&apos;s lives better 
                is something genuinely unique that I haven&apos;t seen in anyone else.
              </p>
              <p>
                I&apos;m certain that Peseros is gonna become legendary no doubt 🚀
              </p>
            </blockquote>

            {/* Attribution */}
            <div className="flex items-center gap-4 pt-6 border-t border-border">
              <div className="w-12 h-12 rounded-full bg-background-tertiary border border-border flex items-center justify-center">
                <span className="text-accent font-semibold text-lg">CF</span>
              </div>
              <div>
                <p className="text-foreground font-semibold">Cofounder</p>
                <p className="text-sm text-foreground-subtle">Peseros</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export { Testimonial };

