"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-xl px-4",
          "bg-background-secondary border border-border",
          "text-foreground placeholder:text-foreground-subtle",
          "transition-all duration-200",
          "hover:border-border-hover",
          "focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[140px] w-full rounded-xl px-4 py-3",
          "bg-background-secondary border border-border",
          "text-foreground placeholder:text-foreground-subtle",
          "transition-all duration-200 resize-none",
          "hover:border-border-hover",
          "focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Input, Textarea };

