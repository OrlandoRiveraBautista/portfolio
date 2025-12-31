"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Brief loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] bg-background flex items-center justify-center"
        >
          <div className="relative flex flex-col items-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="text-3xl font-bold text-foreground mb-8"
            >
              ORB<span className="text-accent">;</span>
            </motion.div>

            {/* Code-style loading animation */}
            <div className="font-mono text-sm text-accent/70 space-y-1">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-2"
              >
                <span className="text-accent/50">$</span>
                <span>initializing</span>
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                >
                  ...
                </motion.span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-2"
              >
                <span className="text-accent/50">$</span>
                <span>loading portfolio</span>
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: 0.3 }}
                >
                  ...
                </motion.span>
              </motion.div>
            </div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-8 w-48 h-1 bg-border rounded-full overflow-hidden"
            >
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="h-full bg-accent rounded-full"
              />
            </motion.div>

            {/* Decorative brackets */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ delay: 0.4 }}
              className="absolute -left-16 top-1/2 -translate-y-1/2 font-mono text-4xl text-accent"
            >
              {"{"}
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ delay: 0.4 }}
              className="absolute -right-16 top-1/2 -translate-y-1/2 font-mono text-4xl text-accent"
            >
              {"}"}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { Loading };
