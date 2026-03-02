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
        },
        text: {
          DEFAULT: "#EDEDED", // Off-white
          muted: "#6B7280",   // Gray 500
        },
        accent: {
          purple: "#D600FF",
          red: "#FF003C",
        },
        border: {
          DEFAULT: "#1a1a1a",
        }
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)",
      },
      animation: {
        'cursor-blink': 'blink 1s step-end infinite',
        'scanline': 'scanline 8s linear infinite',
        'ticker': 'ticker 30s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        ticker: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      spacing: {
        'section': '120px',
      }
    },
  },
  plugins: [],
};
export default config;