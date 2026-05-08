"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stats = [
  { num: "3+", label: "Years Experience" },
  { num: "10+", label: "Projects Delivered" },
  { num: "4", label: "Companies Served" },
  { num: "100%", label: "Passion for UI/UX" },
];

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="about" ref={ref} className="py-32 md:py-40 relative overflow-hidden">
      {/* Decorative vertical text */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3">
        <div className="w-px h-20 bg-gradient-to-b from-transparent to-gold/30" />
        <span
          className="font-mono text-[10px] tracking-[0.3em] text-gold/30 uppercase"
          style={{ writingMode: "vertical-rl" }}
        >
          About Me
        </span>
        <div className="w-px h-20 bg-gradient-to-t from-transparent to-gold/30" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex items-center gap-6 mb-16">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-num"
          >
            02 / About
          </motion.span>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 line-gold origin-left"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-tight font-light mb-8"
            >
              Crafting{" "}
              <em className="text-gradient font-semibold not-italic">
                digital
              </em>
              <br />
              experiences that{" "}
              <em className="text-gradient font-semibold not-italic">
                feel right
              </em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-light tracking-tight text-cream leading-relaxed mb-6 text-base"
            >
              I&apos;m a Frontend UI/UX Developer based in Bhubaneswar, India with over
              3 years of experience turning complex UI/UX designs into high-performance,
              accessible interfaces. My stack centers on React, React Native, and Next.js —
              with a deep appreciation for the details that make apps feel delightful.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-light tracking-tight text-cream leading-relaxed mb-10 text-base"
            >
              From e-commerce checkout flows to live sports dashboards and event
              management apps, I&apos;ve built and led frontend development across diverse
              industries — always with a focus on clean architecture, reusable components,
              and pixel-perfect design.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              <span className="tag-pill">React</span>
              <span className="tag-pill">React Native</span>
              <span className="tag-pill">Next.js</span>
              <span className="tag-pill">Figma</span>
              <span className="tag-pill">TypeScript</span>
              <span className="tag-pill">Expo</span>
            </motion.div>
          </div>

          {/* Right: Stats + image-ish block */}
          <div className="relative">
            {/* Big decorative number */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative glow-border rounded-lg p-8 glass-card overflow-hidden"
            >
              {/* Background decoration */}
              <div
                className="absolute top-0 right-0 w-40 h-40 opacity-10"
                style={{
                  background: "radial-gradient(circle, #C9A96E, transparent 70%)",
                }}
              />

              <p className="section-num mb-3">Education</p>

              <div className="space-y-6">
                <div className="border-l-2 border-gold/30 pl-5">
                  <p className="font-display text-xl font-semibold text-cream mb-1">
                    MCA
                  </p>
                  <p className="font-light tracking-tight text-cream text-sm">
                    Trident Academy of Creative Technology
                  </p>
                  <p className="font-mono text-xs text-gold/60 mt-1">2018 – 2021</p>
                </div>
                <div className="border-l-2 border-gold/20 pl-5">
                  <p className="font-display text-xl font-semibold text-cream mb-1">
                    B.Sc.
                  </p>
                  <p className="font-light tracking-tight text-cream text-sm">Bhadrak Women&apos;s College</p>
                  <p className="font-mono text-xs text-gold/60 mt-1">2014 – 2017</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="section-num mb-3">Languages</p>
                <div className="flex gap-3">
                  {["English", "Hindi", "Odia"].map((lang) => (
                    <span key={lang} className="tag-pill">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="section-num mb-3">Interests</p>
                <div className="flex gap-3 flex-wrap">
                  {["✈ Travel", "🎵 Music", "📷 Photography", "🏃 Fitness", "🍳 Cooking"].map(
                    (i) => (
                      <span
                        key={i}
                        className="font-light tracking-tight text-cream text-xs font-mono"
                      >
                        {i}
                      </span>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px mt-20 border border-border rounded-lg overflow-hidden"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 + i * 0.1 }}
              className="bg-surface px-8 py-10 text-center hover:bg-surface-2 transition-colors duration-300 group"
            >
              <p className="font-display text-4xl md:text-5xl text-gradient font-semibold mb-2 group-hover:text-gradient-animated">
                {stat.num}
              </p>
              <p className="font-mono  text-xs text-muted tracking-widest uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
