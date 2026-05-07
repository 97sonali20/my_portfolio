"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full border border-gold/40 flex items-center justify-center">
            <span className="text-gold text-[9px] font-mono font-bold">SS</span>
          </div>
          <span className="font-display text-sm text-cream/40">Sonali Srichandan</span>
        </div>

        <p className="font-mono text-[11px] text-muted tracking-widest text-center">
          Built with Next.js + Framer Motion + Tailwind CSS · © 2025
        </p>

        <p className="font-mono text-[11px] text-muted tracking-widest">
          Designed & developed with{" "}
          <span className="text-gold">♥</span>
        </p>
      </div>
    </footer>
  );
}
