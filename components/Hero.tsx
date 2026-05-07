"use client";

import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const roles = ["Frontend Developer", "UI/UX Designer", "React Native Dev", "Next.js Engineer"];

const socials = [
  { Icon: Github,   href: "https://github.com/97sonali20",              label: "GitHub" },
  { Icon: Linkedin, href: "https://linkedin.com/in/sonali-srichandan", label: "LinkedIn" },
  { Icon: Mail,     href: "mailto:97sonali20@gmail.com",                label: "Email" },
];

const stats = [
  { num: "3+",  label: "Years exp." },
  { num: "10+", label: "Projects" },
  { num: "5+", label: "Clients" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-obsidian">

      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,169,110,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 40% 50%, rgba(201,169,110,0.07) 0%, transparent 70%)",
        }}
      />

      {/* ── Two-column layout ── */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-10 pt-24 pb-12 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-center">

        {/* ── LEFT COLUMN ── */}
        <div>

          {/* Available badge */}
          <div className="inline-flex items-center gap-2 mb-7 animate-fade-up animation-delay-100 [animation-fill-mode:both]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping-ring absolute inset-0 rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <span className="font-mono text-[11px] tracking-[0.2em] text-emerald-400/85 uppercase">
              Available for new opportunities
            </span>
          </div>

          {/* Section number */}
          <p className="font-mono text-[11px] tracking-[0.2em] text-gold/70 mb-4 animate-fade-up animation-delay-250 [animation-fill-mode:both]">
            01 / Introduction
          </p>

          {/* Name */}
          <h1 className="font-display leading-none mb-8">
            <span
              className="block text-[clamp(4rem,10vw,8.5rem)] font-light tracking-tight text-cream animate-fade-up animation-delay-400 [animation-fill-mode:both]"
            >
              Sonali
            </span>
            <span
              className="block text-[clamp(4rem,10vw,8.5rem)] font-semibold italic tracking-tight animate-fade-up animation-delay-550 [animation-fill-mode:both]"
              style={{
                background: "linear-gradient(135deg, #E8C97A 0%, #C9A96E 40%, #9B7230 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Srichandan
            </span>
          </h1>

          {/* Role tags */}
          <div className="flex flex-wrap gap-2 mb-6 animate-fade-up animation-delay-750 [animation-fill-mode:both]">
            {roles.map((role) => (
              <span
                key={role}
                className="font-mono text-[10px] tracking-[0.1em] uppercase bg-gold/[0.08] border border-gold/20 text-gold px-3 py-1 rounded-full"
              >
                {role}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="max-w-[480px] text-cream/60 text-[15px] leading-[1.8] mb-10 animate-fade-up animation-delay-900 [animation-fill-mode:both]">
            3+ years building smooth, user-friendly mobile and web applications.
            Translating stunning designs into pixel-perfect, accessible interfaces —
            from e-commerce to e-sports, event management to enterprise platforms.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center gap-5 mb-12 animate-fade-up animation-delay-1050 [animation-fill-mode:both]">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold/10 border border-gold/40 text-gold font-body font-semibold text-xs tracking-[0.18em] uppercase rounded-sm transition-all duration-300 hover:bg-gold hover:text-obsidian hover:border-gold"
            >
              View Work →
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.18em] uppercase text-cream/50 transition-colors duration-300 hover:text-gold"
            >
              Get In Touch
            </a>
          </div>

          {/* Social + Location */}
          <div className="flex flex-wrap items-center gap-4 animate-fade-up animation-delay-1200 [animation-fill-mode:both]">
            <div className="flex items-center gap-1.5 font-mono text-[11px] text-muted">
              <MapPin size={12} className="text-gold" />
              <span>Bhubaneswar, India</span>
            </div>
            <div className="w-px h-4 bg-border" />
            <div className="flex items-center gap-4">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-muted hover:text-gold transition-colors duration-300"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* ── RIGHT COLUMN — Profile image ── */}
        <div className=" md:flex flex-col items-center gap-6 animate-slide-left animation-delay-500 [animation-fill-mode:both]">

          {/* Glow orb */}
          <div
            className="absolute w-80 h-80 rounded-full pointer-events-none animate-float"
            style={{ background: "radial-gradient(circle, rgba(201,169,110,0.12) 0%, transparent 70%)" }}
          />

          {/* Image frame */}
          <div
            className="relative overflow-hidden flex-shrink-0"
            style={{
              width: "300px",
              height: "380px",
              borderRadius: "160px 160px 120px 120px",
              border: "1px solid rgba(201,169,110,0.25)",
              background: "linear-gradient(160deg, #161616 0%, #111111 100%)",
            }}
          >
            {/* Your photo — put profile.jpg in /public folder */}
            <img
              src="/sonali.jpeg"
              alt="Sonali Srichandan"
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />

            {/* Fallback initials */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <span
                className="font-display text-[5rem] font-light leading-none"
                style={{ color: "rgba(201,169,110,0.4)" }}
              >
                SS
              </span>
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase" style={{ color: "rgba(201,169,110,0.3)" }}>
                Add photo →
              </span>
            </div>

            {/* Bottom gradient accent */}
            <div
              className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
              style={{ background: "linear-gradient(to top, rgba(201,169,110,0.08), transparent)" }}
            />
          </div>

          {/* Stats */}
          <div className="flex gap-6">
            {stats.map(({ num, label }) => (
              <div key={label} className="text-center">
                <div className="font-display text-[1.75rem] font-semibold text-gold leading-none">{num}</div>
                <div className="font-mono text-[10px] text-muted tracking-[0.1em] uppercase mt-1">{label}</div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Scroll indicator */}
      <div className="hidden md:flex absolute bottom-10 right-10 flex-col items-center gap-2 animate-fade-in animation-delay-2000 [animation-fill-mode:both] animate-float-fast">
        <span className="font-mono text-[9px] text-muted/60 tracking-[0.25em]" style={{ writingMode: "vertical-rl" }}>
          SCROLL
        </span>
        <span className="text-gold text-sm">↓</span>
      </div>

      {/* Year */}
      <div className="absolute bottom-10 left-10 animate-fade-in animation-delay-1800 [animation-fill-mode:both]">
        <span className="font-mono text-[9px] text-muted/60 tracking-[0.2em]">© 2025</span>
      </div>

    </section>
  );
}
