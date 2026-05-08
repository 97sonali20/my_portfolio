"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skillGroups = [
  {
    category: "Frontend",
    icon: "⚡",
    skills: [
      { name: "React", level: 95 },
      { name: "React Native", level: 92 },
      { name: "Next.js", level: 88 },
      { name: "TypeScript", level: 82 },
      { name: "Expo", level: 88 },
    ],
  },
  {
    category: "UI / UX",
    icon: "✦",
    skills: [
      { name: "Figma", level: 90 },
      { name: "Wireframing", level: 88 },
      { name: "Animation", level: 85 },
      { name: "Elementor", level: 80 },
    ],
  },
  {
    category: "Styling",
    icon: "◈",
    skills: [
      { name: "Tailwind CSS", level: 94 },
      { name: "Material UI", level: 85 },
      { name: "SCSS", level: 88 },
      { name: "Bootstrap", level: 82 },
    ],
  },
  {
    category: "State & Data",
    icon: "◎",
    skills: [
      { name: "Redux", level: 85 },
      { name: "Context API", level: 92 },
      { name: "GraphQL", level: 75 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    category: "Backend & Tools",
    icon: "◻",
    skills: [
      { name: "Node.js", level: 72 },
      { name: "Git & GitHub", level: 90 },
      { name: "MongoDB", level: 70 },
      { name: "Postman", level: 85 },
    ],
  },
];

const techLogos = [
  "React", "Next.js", "TypeScript", "React Native", "Expo", "Figma",
  "Tailwind CSS", "Redux", "GraphQL", "Node.js", "MongoDB", "Git",
  "SCSS", "Material UI", "Bootstrap", "Framer Motion",
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="font-body text-sm font-light tracking-tight text-cream group-hover:text-cream transition-colors">{name}</span>
        <span className="font-mono text-xs text-gold/60">{level}%</span>
      </div>
      <div className="h-px bg-border relative overflow-hidden">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: level / 100 } : {}}
          transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-y-0 left-0 origin-left"
          style={{
            background: "linear-gradient(90deg, #C9A96E, #E8C97A)",
            height: "2px",
            top: "-0.5px",
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="skills" ref={ref} className="py-32 md:py-40 relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 80% 40% at 50% 100%, rgba(201,169,110,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex items-center gap-6 mb-16">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="section-num"
          >
            04 / Skills
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
          className="font-display text-[clamp(2rem,5vw,4rem)] font-light font-light tracking-tight text-cream mb-16 leading-tight"
        >
          My technical
          <br />
          <span className="text-gradient font-semibold">arsenal</span>
        </motion.h2>

        {/* Skill Groups */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + gi * 0.1 }}
              className="glow-border rounded-lg p-7 glass-card hover:bg-surface/60 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-gold text-lg">{group.icon}</span>
                <p className="font-body font-semibold text-cream text-sm tracking-wider uppercase">
                  {group.category}
                </p>
              </div>

              <div className="space-y-5">
                {group.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={0.3 + gi * 0.1 + si * 0.08}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee tech strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative overflow-hidden border-y border-border py-5"
        >
          <div className="marquee-inner gap-8">
            {[...techLogos, ...techLogos].map((tech, i) => (
              <span key={i} className="flex items-center gap-8 flex-shrink-0">
                <span className="font-body font-semibold font-light tracking-tight text-cream text-sm tracking-widest uppercase whitespace-nowrap">
                  {tech}
                </span>
                <span className="text-gold/20 text-xs">✦</span>
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
