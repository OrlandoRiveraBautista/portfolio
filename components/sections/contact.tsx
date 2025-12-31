"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Loader2, CheckCircle } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setError(
        "Failed to send message. Please try again or email me directly."
      );
      console.error("Error submitting form:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Section id="contact" className="bg-background-secondary/50 relative overflow-hidden">
      {/* Circuit Board Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="currentColor" className="text-accent" />
              <line x1="50" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="1" className="text-accent" />
              <line x1="50" y1="50" x2="50" y2="0" stroke="currentColor" strokeWidth="1" className="text-accent" />
              <circle cx="25" cy="25" r="1.5" fill="currentColor" className="text-accent" />
              <circle cx="75" cy="75" r="1.5" fill="currentColor" className="text-accent" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Floating brackets - responsive */}
      <motion.div
        className="absolute top-16 md:top-20 left-4 md:left-10 text-accent/20 font-mono text-3xl md:text-6xl pointer-events-none select-none"
        animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        {"["}
      </motion.div>
      <motion.div
        className="absolute bottom-16 md:bottom-20 right-4 md:right-10 text-accent/20 font-mono text-3xl md:text-6xl pointer-events-none select-none"
        animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        {"]"}
      </motion.div>

      <SectionHeader
        eyebrow="Get in Touch"
        title="Let's Build Something Great"
        description="Have an idea, a problem, or just want to talk tech? I'd love to hear from you."
      />

      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Animated Glow Effect */}
          <motion.div
            className="absolute -inset-1 bg-gradient-to-r from-accent/20 via-orange-500/20 to-accent/20 rounded-3xl blur-xl"
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="relative bg-background-secondary border border-border rounded-2xl p-8 md:p-10">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-2">
                  Message Sent!
                </h3>
                <p className="text-foreground-muted mb-6">
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
                <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project, idea, or just say hello..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                {error && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-sm">
                    {error}
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-8 mt-12 text-foreground-muted"
        >
          <a
            href="mailto:orlandovaluta@hotmail.com"
            className="flex items-center gap-2 hover:text-accent transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>orlandovaluta@hotmail.com</span>
          </a>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>United States</span>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export { Contact };
