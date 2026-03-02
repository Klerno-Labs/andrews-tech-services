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
          dark: "#008F11",    // Darker Matrix Green
        },
        background: {
          DEFAULT: "#030303", // Void Black
          surface: "#0A0A0A", // Panel Black
          accent: "#0F172A",  // Slate 900
        },
        text: {
          DEFAULT: "#EDEDED", // Off-white
          muted: "#6B7280",   // Gray 500
        },
        border: {
          DEFAULT: "#1a1a1a",
          hover: "#00FF41",
        },
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)",
      },
      animation: {
        "cursor-blink": "blink 1s step-end infinite",
        "scrolling": "scroll 20s linear infinite",
        "fade-up": "fadeUp 0.7s ease-out forwards",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;