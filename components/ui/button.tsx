"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    
    return (
      <Comp
        className={cn(
          // Base styles
          "relative inline-flex items-center justify-center font-medium",
          "transition-all duration-300 ease-out",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          "disabled:pointer-events-none disabled:opacity-50",
          // Variants
          variant === "primary" && [
            "bg-accent text-white",
            "hover:bg-accent-hover hover:scale-[1.02]",
            "active:scale-[0.98]",
            "shadow-md hover:shadow-lg hover:shadow-accent/25",
          ],
          variant === "secondary" && [
            "bg-background-tertiary text-foreground",
            "border border-border hover:border-border-hover",
            "hover:bg-border hover:scale-[1.02]",
            "active:scale-[0.98]",
          ],
          variant === "outline" && [
            "bg-transparent text-foreground",
            "border border-border hover:border-accent",
            "hover:text-accent hover:scale-[1.02]",
            "active:scale-[0.98]",
          ],
          variant === "ghost" && [
            "bg-transparent text-foreground-muted",
            "hover:text-foreground hover:bg-border",
          ],
          // Sizes
          size === "sm" && "h-9 px-4 text-sm rounded-lg gap-2",
          size === "md" && "h-11 px-6 text-sm rounded-xl gap-2",
          size === "lg" && "h-13 px-8 text-base rounded-xl gap-3",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };

