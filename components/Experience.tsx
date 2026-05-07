"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const experiences = [
  {
    role: "UI/UX & Frontend Developer",
    company: "Netsqure Technologies Pvt Ltd",
    period: "2025 – Present",
    type: "Full-time",
    highlights: [
      "Designed UI/UX for a WordPress app using React, Elementor & HTML/CSS",
      "Built Tradepass — a React Native Expo event management app with React admin dashboard",
      "Designed Quicklo quick-commerce shopping app with mobile-first UX",
      "Revamped Netsqure's landing page with heavy animations & micro-interactions",
    ],
    tags: ["React", "React Native", "Expo", "Elementor"],
    accent: "#C9A96E",
  },
  {
    role: "Frontend Lead Developer",
    company: "HyScaler — Smart Survey & Attendance",
    period: "02/2025 – Present",
    type: "Lead",
    highlights: [
      "Led mobile & web frontend ensuring seamless cross-device user experiences",
      "Built survey creation, real-time attendance tracking & analytics dashboard UIs",
      "Introduced reusable component architecture; optimised mobile performance",
    ],
    tags: ["React Native", "React", "Analytics", "TypeScript"],
    accent: "#FF6B6B",
  },
  {
    role: "Frontend Lead Developer",
    company: "HyScaler — E-Sports Live Score App",
    period: "06/2023 – 01/2025",
    type: "Lead",
    highlights: [
      "Delivered real-time scores, news feeds & push notifications across e-sports tournaments",
      "Integrated third-party live-data APIs; optimised rendering for real-time performance",
      "Crafted dynamic UI elements with UX team, significantly boosting user engagement",
      "Ensured responsive, cross-device performance for a high-volume gaming audience",
    ],
    tags: ["React", "Real-time APIs", "Push Notifications", "WebSockets"],
    accent: "#7C5CBF",
  },
  {
    role: "Frontend Lead Developer",
    company: "HyScaler — Pharmacy E-Commerce",
    period: "05/2022 – 06/2023",
    type: "Lead",
    highlights: [
      "Built product browsing, cart management & multi-step secure checkout workflows",
      "Integrated payment systems & order management APIs with backend developers",
      "Maintained large-scale, component-based architecture for performance",
      "Ensured WCAG accessibility and full responsiveness across browsers",
    ],
    tags: ["React", "E-Commerce", "WCAG", "Payment APIs"],
    accent: "#4ECDC4",
  },
];

function ExperienceCard({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative grid md:grid-cols-[1fr_40px_1fr] gap-0 items-start"
    >
      {/* Left: company + period (even) or empty (odd) */}
      <div className={`${index % 2 === 0 ? "block" : "hidden md:block"} pb-8`}>
        {index % 2 === 0 && (
          <div className="md:text-right pr-8">
            <p className="font-display text-2xl font-semibold text-cream mb-1">
              {exp.company}
            </p>
            <p
              className="font-mono text-xs tracking-widest uppercase mb-1"
              style={{ color: exp.accent }}
            >
              {exp.type}
            </p>
            <p className="font-mono text-xs text-muted">{exp.period}</p>
          </div>
        )}
      </div>

      {/* Center: timeline */}
      <div className="hidden md:flex flex-col items-center gap-0">
        <div className="timeline-dot" style={{ background: exp.accent, boxShadow: `0 0 15px ${exp.accent}60` }} />
        {index < experiences.length - 1 && (
          <div className="flex-1 w-px bg-border min-h-full" style={{ minHeight: "200px" }} />
        )}
      </div>

      {/* Right: details (even) or company (odd) */}
      <div className={`${index % 2 === 0 ? "" : ""} pl-0 md:pl-8 pb-16`}>
        {/* Mobile: always show company info */}
        <div className="md:hidden mb-4">
          <p className="font-display text-2xl font-semibold text-cream mb-1">{exp.company}</p>
          <p className="font-mono text-xs tracking-widest uppercase mb-1" style={{ color: exp.accent }}>
            {exp.type}
          </p>
          <p className="font-mono text-xs text-muted">{exp.period}</p>
        </div>

        {index % 2 !== 0 && (
          <div className="hidden md:block mb-4">
            <p className="font-display text-2xl font-semibold text-cream mb-1">{exp.company}</p>
            <p className="font-mono text-xs tracking-widest uppercase mb-1" style={{ color: exp.accent }}>
              {exp.type}
            </p>
            <p className="font-mono text-xs text-muted">{exp.period}</p>
          </div>
        )}

        <div className="glow-border rounded-lg p-6 glass-card hover:border-gold/40 transition-all duration-500 group">
          <p className="font-body font-semibold text-cream/90 text-sm mb-4 tracking-wide">
            {exp.role}
          </p>

          <ul className="space-y-3 mb-5">
            {exp.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: exp.accent }} />
                <p className="text-cream/55 text-sm leading-relaxed">{h}</p>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
            {exp.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] tracking-wider px-2.5 py-1 rounded-full border uppercase"
                style={{
                  color: exp.accent,
                  borderColor: `${exp.accent}30`,
                  background: `${exp.accent}08`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="experience" ref={ref} className="py-32 md:py-40 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex items-center gap-6 mb-20">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-num"
          >
            03 / Experience
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
          className="font-display text-[clamp(2rem,5vw,4rem)] font-light text-cream/80 mb-20 leading-tight"
        >
          Where I&apos;ve been
          <br />
          <span className="text-gradient font-semibold">building things</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
