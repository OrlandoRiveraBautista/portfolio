"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/orlandoriverabautista", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/orlando-rivera-bautista/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:orlandovaluta@hotmail.com", label: "Email" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a
              href="#"
              className="text-lg font-bold text-foreground hover:text-accent transition-colors"
            >
              ORB<span className="text-accent">;</span>
            </a>
            <p className="text-sm text-foreground-subtle">
              © {currentYear} Orlando Rivera-Bautista. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-background-secondary border border-border flex items-center justify-center text-foreground-muted hover:text-accent hover:border-accent transition-all duration-200"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
        >
          <p className="text-xs text-foreground-subtle">
            Designed and built with intention.
          </p>
          <span className="hidden sm:block text-foreground-subtle/30">•</span>
          <p className="font-mono text-[10px] text-accent/40">
            v2.0.0 | Next.js + TypeScript
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export { Footer };

