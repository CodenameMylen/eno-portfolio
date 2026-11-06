import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F4A7B9",
        secondary: "#C9B8E8",
        peach: "#F6C6A8",
        blush: "#FDE8EC",
        mist: "#FFF5F7",
        ink: "#2D2D2D",
        night: "#16121C",
        panel: "#1E1826",
        error: "#D4536F",
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 24px rgba(45, 45, 45, 0.06)",
        lift: "0 12px 32px rgba(45, 45, 45, 0.10)",
        card: "0 24px 60px rgba(45, 45, 45, 0.10)",
        glow: "0 10px 40px rgba(244, 167, 185, 0.45)",
        night: "0 24px 60px rgba(0, 0, 0, 0.35)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.55" },
        },
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "pulse-soft": "pulse-soft 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
