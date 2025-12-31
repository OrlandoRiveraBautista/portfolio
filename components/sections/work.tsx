"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import Image from "next/image";

const projects = [
  {
    title: "Peseros — Urban Mobility Platform",
    category: "Full-Stack Platform",
    problem:
      "Public transportation in emerging economies lacks transparency and real-time infrastructure. Millions of commuters can't track buses, plan routes, or know exact fares—leading to uncertainty, wasted time, and unreliable urban mobility.",
    solution:
      "Built a comprehensive transportation ecosystem: real-time GPS tracking for drivers, a consumer app showing bus locations and arrival times, transparent fare information, and an admin dashboard for fleet management. The platform connects commuters, drivers, and city planners in one unified system designed for scale across emerging markets.",
    tech: [
      "React",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Real-time GPS",
      "Mobile App (Android)",
      "Admin Dashboard",
    ],
    impact:
      "Transforming urban mobility in emerging economies while elevating driver livelihoods. Commuters track buses in real-time, plan routes with confidence, and travel with full transparency. Drivers gain better income opportunities, route optimization, and professional tools. The platform provides city planners with data-driven insights for smarter infrastructure investment, driving economic growth and raising the standard of living across communities.",
    url: "https://www.peseros.com",
    image: "/peseros-screenshot.png",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Ordinex — Universal Checkout Widget",
    category: "SaaS Product",
    problem:
      "Businesses wanted to accept online orders but faced complex integrations, coding requirements, and design conflicts. Adding checkout functionality meant rebuilding entire e-commerce systems.",
    solution:
      "Created a one-script universal checkout widget that auto-detects products on any website using AI, adds cart functionality instantly, and integrates seamlessly without breaking existing designs. Shadow DOM isolation ensures zero style conflicts.",
    tech: [
      "JavaScript",
      "AI/ML",
      "Shadow DOM",
      "Webhooks",
      "Real-time Dashboard",
      "Payment Processing",
    ],
    impact:
      "Enabling businesses to accept orders in seconds, not weeks. No coding required—just paste one script tag. The widget works with any website structure, automatically detecting products and adding full checkout functionality.",
    url: "https://ordinex.vercel.app",
    image: "/ordinex-screenshot.png",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "DaylyBread — AI-Powered Bible Platform",
    category: "AI Content Platform",
    problem:
      "Billions of people worldwide couldn't access the Bible in their native language. Traditional platforms lacked AI-powered features, multilingual support, and accessibility for underserved faith communities.",
    solution:
      "Built the most accessible, AI-powered, multilingual Bible tool ever created. With over 2,000 languages and 7,000+ Bible versions, the platform unlocks a global, inclusive audience—particularly among underserved and emerging faith communities. AI features enhance understanding and engagement across all languages.",
    tech: [
      "AI/ML",
      "Next.js",
      "TypeScript",
      "Multilingual Support",
      "2,000+ Languages",
      "7,000+ Versions",
    ],
    impact:
      "Democratizing access to biblical content worldwide. The platform serves communities in over 2,000 languages, making scripture accessible to millions who previously had no digital access in their native tongue.",
    url: "https://www.daylybread.com",
    images: ["/daylybread-screenshot-1.png", "/daylybread-screenshot-2.png"],
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    title: "Molten Cloud — Media Rights Platform",
    category: "Enterprise SaaS",
    problem:
      "Media and entertainment companies struggled with fragmented systems for rights, royalties, and content management. Manual processes, data silos, and lack of automation slowed operations and reduced revenue potential.",
    solution:
      "Built an AI-powered cloud platform that unifies rights management, automates royalty calculations with one-click processing, and streamlines content operations. The platform connects producers, distributors, and streamers in a single hub for unparalleled efficiency.",
    tech: [
      "AI/ML",
      "Cloud Infrastructure",
      "Enterprise Architecture",
      "Workflow Automation",
      "Data Integration",
    ],
    impact:
      "Transforming media operations for companies across 6 continents. Clients report 3-5x faster delivery times, 15% staff cost reductions, and 2.5x library expansion capabilities. The platform manages billions of rights and petabytes of content.",
    url: "https://www.moltencloud.com",
    image: "/molten-screenshot.png",
    color: "from-orange-500/20 to-orange-600/20",
    note: "Team project — contributing to core platform development",
  },
];

const Work = () => {
  return (
    <Section id="work" className="bg-background-secondary/50 relative">
      {/* Terminal prompt decoration - responsive */}
      <motion.div
        className="absolute top-6 md:top-10 left-4 md:left-10 font-mono text-accent/20 text-[9px] md:text-sm pointer-events-none select-none"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="hidden sm:block">$ cd ~/projects</div>
        <div className="sm:hidden">$ ls</div>
        <div className="mt-0.5 md:mt-1 hidden sm:block">$ ls -la</div>
        <div className="mt-0.5 md:mt-1 text-accent/30">▊</div>
      </motion.div>

      {/* Code comment decoration - responsive */}
      <motion.div
        className="absolute top-6 md:top-10 right-4 md:right-10 font-mono text-accent/15 text-[8px] md:text-xs pointer-events-none select-none"
        animate={{ opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="hidden sm:block">{"/* Building the future"}</div>
        <div className="sm:hidden">{"/* Ship it */"}</div>
        <div className="ml-3 hidden sm:block">{" one commit at a time */"}</div>
      </motion.div>

      <SectionHeader
        eyebrow="Selected Work"
        title="Projects That Made an Impact"
        description="Each project started with a real problem and ended with measurable results."
      />

      <div className="space-y-20">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group"
          >
            <div
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Image/Visual */}
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                {"images" in project ? (
                  // Multiple images in one container
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative aspect-[4/3] rounded-2xl overflow-hidden bg-background-tertiary border border-border group-hover:border-accent transition-all duration-500 group/image"
                  >
                    {/* Side by side images container */}
                    <div className="relative h-full flex items-center justify-center p-4 gap-4">
                      {project.images &&
                        project.images.map((imageSrc, imgIndex) => (
                          <div
                            key={imgIndex}
                            className="relative h-full flex-shrink-0"
                          >
                            <Image
                              src={imageSrc}
                              alt={`${project.title} screenshot ${
                                imgIndex + 1
                              }`}
                              width={400}
                              height={800}
                              className="h-full w-auto object-contain rounded-lg shadow-lg"
                              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                            />
                          </div>
                        ))}
                    </div>

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/0 to-background/0 opacity-0 group-hover/image:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Hover Content */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="text-center p-8">
                        <div className="w-16 h-16 rounded-2xl bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center mx-auto mb-4 group-hover/image:scale-110 transition-transform duration-500">
                          <ExternalLink className="w-8 h-8 text-accent" />
                        </div>
                        <div className="mt-2 text-sm text-accent font-medium">
                          View Project →
                        </div>
                      </div>
                    </div>
                  </a>
                ) : (
                  // Single image layout
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative aspect-[4/3] rounded-2xl overflow-hidden bg-background-tertiary border border-border group-hover:border-accent transition-all duration-500 group/image"
                  >
                    {/* Project Screenshot */}
                    <Image
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover/image:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/0 to-background/0 opacity-0 group-hover/image:opacity-100 transition-opacity duration-500" />

                    {/* Hover Content */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-500">
                      <div className="text-center p-8">
                        <div className="w-16 h-16 rounded-2xl bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center mx-auto mb-4 group-hover/image:scale-110 transition-transform duration-500">
                          <ExternalLink className="w-8 h-8 text-accent" />
                        </div>
                        <div className="mt-2 text-sm text-accent font-medium">
                          View Project →
                        </div>
                      </div>
                    </div>
                  </a>
                )}
              </div>

              {/* Content */}
              <div
                className={
                  index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                }
              >
                <div className="flex items-center gap-2">
                  <span className="text-accent/50 font-mono text-xs">$</span>
                  <span className="text-accent text-sm font-medium tracking-wider uppercase">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-2 mb-6">
                  {project.title}
                </h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground-muted uppercase tracking-wider mb-2">
                      The Problem
                    </h4>
                    <p className="text-foreground-muted leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-foreground-muted uppercase tracking-wider mb-2">
                      The Solution
                    </h4>
                    <p className="text-foreground-muted leading-relaxed">
                      {project.solution}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-foreground-muted uppercase tracking-wider mb-2">
                      Impact
                    </h4>
                    <p className="text-foreground leading-relaxed font-medium">
                      {project.impact}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-background-tertiary border border-border text-foreground-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Link */}
                  {project.url && (
                    <div className="pt-4">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors font-medium text-sm"
                      >
                        Visit Project
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  )}

                  {/* Team Note */}
                  {project.note && (
                    <p className="text-xs text-foreground-subtle italic pt-2">
                      {project.note}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
};

export { Work };
