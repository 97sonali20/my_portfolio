/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        body:    ["'Syne'", "sans-serif"],
        mono:    ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        gold: {
          DEFAULT: "#C9A96E",
          300: "#E8C97A",
          400: "#D4A843",
          500: "#C9A96E",
          600: "#A8873A",
        },
        coral:      "#FF6B6B",
        obsidian:   "#080808",
        surface:    "#111111",
        "surface-2":"#161616",
        border:     "#1E1E1E",
        cream:      "#F5F5F0",
        muted:      "#666666",
      },
      animation: {
        "fade-up":    "fadeUp 0.6s ease both",
        "fade-in":    "fadeIn 0.8s ease both",
        "slide-left": "slideLeft 0.9s ease both",
        "ping-ring":  "pingRing 1.5s ease-in-out infinite",
        float:        "float 8s ease-in-out infinite",
        "float-fast": "float 2s ease-in-out infinite",
        shimmer:      "shimmer 4s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideLeft: {
          "0%":   { opacity: "0", transform: "translateX(60px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        pingRing: {
          "0%":   { transform: "scale(1)", opacity: "0.8" },
          "100%": { transform: "scale(2.2)", opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-18px)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
      animationDelay: {
        100:  "0.1s",
        200:  "0.2s",
        250:  "0.25s",
        300:  "0.3s",
        400:  "0.4s",
        500:  "0.5s",
        550:  "0.55s",
        600:  "0.6s",
        750:  "0.75s",
        900:  "0.9s",
        1000: "1s",
        1050: "1.05s",
        1200: "1.2s",
        1800: "1.8s",
        2000: "2s",
      },
    },
  },
  plugins: [
    // Plugin to generate animation-delay utilities
    function({ matchUtilities, theme }) {
      matchUtilities(
        { "animation-delay": (value) => ({ animationDelay: value }) },
        { values: theme("animationDelay") }
      );
    },
  ],
};
