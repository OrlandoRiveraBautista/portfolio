"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  children: React.ReactNode;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, id, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className={cn(
          "relative py-24 md:py-32",
          className
        )}
        {...props}
      >
        <div className="container">{children}</div>
      </section>
    );
  }
);
Section.displayName = "Section";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

const SectionHeader = ({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "mb-16 relative",
        align === "center" && "text-center max-w-2xl mx-auto"
      )}
    >
      {eyebrow && (
        <div className="relative inline-block mb-4">
          <span className="font-mono text-accent/50 text-xs mr-2">//</span>
          <span className="inline-block text-accent text-sm font-medium tracking-wider uppercase">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 relative">
        {align === "left" && (
          <span className="absolute -left-8 top-0 text-accent/30 font-mono text-2xl select-none">
            {"{ "}
          </span>
        )}
        {title}
        {align === "left" && (
          <span className="absolute -right-8 top-0 text-accent/30 font-mono text-2xl select-none">
            {" }"}
          </span>
        )}
      </h2>
      {description && (
        <p className="text-lg text-foreground-muted leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export { Section, SectionHeader };

