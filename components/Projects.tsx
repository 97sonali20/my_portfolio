"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    num: "01",
    title: "Tradepass",
    subtitle: "Event Management App",
    description:
      "Full-featured mobile event management application with admin dashboard, attendee management & real-time check-in flows. Built for event organizers to manage large-scale conferences and trade events.",
    tags: ["React Native", "Expo", "React Dashboard", "Real-time"],
    accent: "#C9A96E",
    stats: ["Mobile + Web", "Admin Dashboard", "Real-time Check-in"],
    emoji: "🎫",
  },
  {
    num: "02",
    title: "Quicklo",
    subtitle: "Quick Commerce App",
    description:
      "Fast-delivery shopping app featuring intuitive product discovery, smooth cart UX and a streamlined checkout experience. Designed mobile-first with a focus on speed and usability.",
    tags: ["React Native", "UI/UX Design", "Figma", "Mobile-first"],
    accent: "#FF6B6B",
    stats: ["Mobile App", "E-Commerce", "Mobile-first UX"],
    emoji: "⚡",
  },
  {
    num: "03",
    title: "Netsqure Website",
    subtitle: "Company Brand Redesign",
    description:
      "Brand website redesign with heavy CSS animations, scroll-triggered effects and modern visual identity. Features micro-interactions and a premium feel that reflects the company's tech-forward brand.",
    tags: ["React", "HTML/CSS", "GSAP Animations", "Elementor"],
    accent: "#7C5CBF",
    stats: ["Web App", "Animation Heavy", "Brand Identity"],
    emoji: "🌐",
  },
  {
    num: "04",
    title: "E-Sports Live Score",
    subtitle: "Real-time Gaming Dashboard",
    description:
      "Live score tracking, news feeds & push notifications across e-sports tournaments. Handles high-volume real-time data with optimised rendering performance for gaming audiences.",
    tags: ["React", "WebSockets", "Push Notifications", "Live APIs"],
    accent: "#4ECDC4",
    stats: ["Real-time Data", "High Traffic", "Multi-tournament"],
    emoji: "🎮",
  },
  {
    num: "05",
    title: "Pharmacy E-Commerce",
    subtitle: "Healthcare Shopping Platform",
    description:
      "Full e-commerce platform with product browsing, cart, multi-step checkout and integrated payment systems. WCAG-compliant and fully responsive across all device types.",
    tags: ["React", "Payment APIs", "WCAG", "Accessibility"],
    accent: "#96CEB4",
    stats: ["E-Commerce", "WCAG AA", "Payment Integration"],
    emoji: "💊",
  },
  {
    num: "06",
    title: "Smart Survey & Attendance",
    subtitle: "Enterprise Analytics Dashboard",
    description:
      "Survey creation platform with real-time attendance tracking and analytics dashboard UIs. Reusable component architecture with optimised mobile performance.",
    tags: ["React Native", "Analytics", "TypeScript", "Dashboard"],
    accent: "#FFBE76",
    stats: ["Enterprise", "Analytics", "Cross-platform"],
    emoji: "📊",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-xl glow-border glass-card overflow-hidden hover:border-gold/50 transition-all duration-500 flex flex-col"
    >
      {/* Top accent bar */}
      <div className="h-px w-0 group-hover:w-full transition-all duration-700" style={{ background: project.accent }} />

      {/* Card content */}
      <div className="p-7 flex flex-col flex-1">
        {/* Header row */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <span className="font-mono text-[10px] tracking-widest text-muted/50 uppercase">
              {project.num}
            </span>
            <div className="flex items-center gap-3 mt-1">
              <span className="text-2xl">{project.emoji}</span>
              <div>
                <h3 className="font-display text-xl font-semibold text-cream group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </h3>
                <p className="font-mono text-xs tracking-wider" style={{ color: project.accent }}>
                  {project.subtitle}
                </p>
              </div>
            </div>
          </div>

          <motion.div
            whileHover={{ rotate: 45, scale: 1.1 }}
            transition={{ duration: 0.2 }}
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1"
          >
            <ArrowUpRight size={18} className="text-gold" />
          </motion.div>
        </div>

        {/* Description */}
        <p className="text-cream/50 text-sm leading-relaxed mb-6 flex-1">
          {project.description}
        </p>

        {/* Stats pills */}
        <div className="flex gap-2 flex-wrap mb-5">
          {project.stats.map((stat) => (
            <span
              key={stat}
              className="font-mono text-[9px] tracking-wider px-2.5 py-1 rounded-full border"
              style={{
                color: project.accent,
                borderColor: `${project.accent}25`,
                background: `${project.accent}06`,
              }}
            >
              {stat}
            </span>
          ))}
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 pt-5 border-t border-border">
          {project.tags.map((tag) => (
            <span key={tag} className="tag-pill text-[9px]">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
        style={{
          background: `radial-gradient(ellipse 60% 40% at 50% 0%, ${project.accent}08 0%, transparent 70%)`,
        }}
      />
    </motion.div>
  );
}

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="projects" ref={ref} className="py-32 md:py-40 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex items-center gap-6 mb-16">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="section-num"
          >
            05 / Projects
          </motion.span>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 line-gold origin-left"
          />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display text-[clamp(2rem,5vw,4rem)] font-light text-cream/80 mb-16 leading-tight"
        >
          Things I&apos;ve
          <br />
          <span className="text-gradient font-semibold">shipped</span>
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.num} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
