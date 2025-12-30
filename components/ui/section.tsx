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
        "mb-16",
        align === "center" && "text-center max-w-2xl mx-auto"
      )}
    >
      {eyebrow && (
        <span className="inline-block text-accent text-sm font-medium tracking-wider uppercase mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
        {title}
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

