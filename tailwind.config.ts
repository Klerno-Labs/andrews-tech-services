import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00FF41", // Terminal Green
          dim: "#008F11",     // Darker Green
        },
        accent: {
          DEFAULT: "#D600FF", // Glitch Purple
          error: "#FF003C",   // Error Red
        },
        background: {
          DEFAULT: "#030303", // Void Black
          surface: "#0A0A0A", // Panel Black
        },
        text: {
          DEFAULT: "#EDEDED", // Off-white
          muted: "#6B7280",   // Gray 500
        },
        border: "rgba(0, 255, 65, 0.1)",
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)",
      },
      animation: {
        "cursor-blink": "blink 1s step-end infinite",
        "scanline": "scanline 8s linear infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;