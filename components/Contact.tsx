"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef, useState } from "react";
import { Github, Linkedin, Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production: connect to a form API like Formspree, Resend, etc.
    const mailto = `mailto:97sonali20@gmail.com?subject=Portfolio Contact from ${formState.name}&body=${encodeURIComponent(formState.message)}%0A%0AFrom: ${formState.email}`;
    window.location.href = mailto;
    setSent(true);
  };

  return (
    <section id="contact" ref={ref} className="py-32 md:py-40 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(201,169,110,0.06) 0%, transparent 60%)",
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
            06 / Contact
          </motion.span>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 line-gold origin-left"
          />
        </div>

        {/* Big headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20 text-center"
        >
          <h2 className="font-display text-[clamp(3rem,10vw,8rem)] font-light leading-none text-cream/80">
            Let&apos;s{" "}
            <span className="text-gradient font-semibold italic">
              work
            </span>
          </h2>
          <h2 className="font-display text-[clamp(3rem,10vw,8rem)] font-light leading-none text-cream/80">
            together
            <span className="text-gold">.</span>
          </h2>
          <p className="text-cream/40 text-base mt-8 max-w-md mx-auto leading-relaxed">
            Available for freelance projects, full-time roles, and exciting collaborations.
            Let&apos;s build something remarkable.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="font-body font-semibold text-cream/60 text-xs tracking-widest uppercase mb-8">
              Reach out via
            </p>

            {[
              { icon: Mail, label: "Email", value: "97sonali20@gmail.com", href: "mailto:97sonali20@gmail.com" },
              { icon: Phone, label: "Phone", value: "+91 9348392085", href: "tel:+919348392085" },
              { icon: MapPin, label: "Location", value: "Bhubaneswar, India", href: null },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-5 group">
                <div className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center group-hover:border-gold/60 group-hover:bg-gold/5 transition-all duration-300">
                  <Icon size={16} className="text-gold/50 group-hover:text-gold transition-colors" />
                </div>
                <div>
                  <p className="font-mono text-[10px] text-muted tracking-widest uppercase">{label}</p>
                  {href ? (
                    <a href={href} className="text-cream/70 hover:text-gold transition-colors text-sm font-body">
                      {value}
                    </a>
                  ) : (
                    <p className="text-cream/70 text-sm font-body">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social links */}
            <div className="pt-8 border-t border-border">
              <p className="font-mono text-[10px] text-muted tracking-widest uppercase mb-5">
                Find me on
              </p>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: "https://github.com/97sonali20", label: "GitHub" },
                  { icon: Linkedin, href: "https://linkedin.com/in/sonali-srichandan", label: "LinkedIn" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted hover:border-gold hover:text-gold hover:bg-gold/5 transition-all duration-300"
                    aria-label={label}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glow-border rounded-xl p-12 text-center glass-card"
              >
                <div className="text-5xl mb-4">✨</div>
                <h3 className="font-display text-2xl text-gradient mb-3">Thank you!</h3>
                <p className="text-cream/50 text-sm">Your message was sent. I&apos;ll be in touch soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glow-border rounded-xl p-8 glass-card space-y-5">
                {[
                  { name: "name", label: "Your Name", type: "text", placeholder: "John Doe" },
                  { name: "email", label: "Email Address", type: "email", placeholder: "hello@example.com" },
                ].map(({ name, label, type, placeholder }) => (
                  <div key={name}>
                    <label className="font-mono text-[10px] text-muted tracking-widest uppercase mb-2 block">
                      {label}
                    </label>
                    <input
                      type={type}
                      placeholder={placeholder}
                      required
                      value={formState[name as keyof typeof formState]}
                      onChange={(e) => setFormState({ ...formState, [name]: e.target.value })}
                      className="w-full bg-border/30 border border-border rounded-sm px-4 py-3.5 text-cream text-sm font-body placeholder:text-muted focus:outline-none focus:border-gold/50 transition-colors"
                    />
                  </div>
                ))}

                <div>
                  <label className="font-mono text-[10px] text-muted tracking-widest uppercase mb-2 block">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project..."
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-border/30 border border-border rounded-sm px-4 py-3.5 text-cream text-sm font-body placeholder:text-muted focus:outline-none focus:border-gold/50 transition-colors resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-3 bg-gold text-obsidian font-body font-bold text-sm tracking-widest uppercase py-4 rounded-sm hover:bg-gold-300 transition-colors duration-300"
                >
                  <Send size={15} />
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
