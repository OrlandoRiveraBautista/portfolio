"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps
  extends Omit<
    React.HTMLAttributes<HTMLDivElement>,
    | "onDrag"
    | "onDragStart"
    | "onDragEnd"
    | "onAnimationStart"
    | "onAnimationEnd"
    | "onAnimationIteration"
  > {
  spotlight?: boolean;
  gradient?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    { className, spotlight = true, gradient = false, children, ...props },
    ref
  ) => {
    const cardRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      if (!spotlight) return;

      const card = cardRef.current;
      if (!card) return;

      const handleMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty("--mouse-x", `${x}%`);
        card.style.setProperty("--mouse-y", `${y}%`);
      };

      card.addEventListener("mousemove", handleMouseMove);
      return () => card.removeEventListener("mousemove", handleMouseMove);
    }, [spotlight]);

    return (
      <motion.div
        ref={(node) => {
          (cardRef as React.MutableRefObject<HTMLDivElement | null>).current =
            node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        }}
        className={cn(
          "relative rounded-2xl p-6",
          "bg-background-secondary border border-border",
          "transition-all duration-300",
          "hover:border-border-hover",
          spotlight && "card-spotlight",
          gradient && "border-gradient",
          className
        )}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        {...props}
      >
        <div className="relative z-10">{children}</div>
      </motion.div>
    );
  }
);
Card.displayName = "Card";

export { Card };
