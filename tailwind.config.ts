import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
        grotesk: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        // Legacy tokens kept for existing pages
        paper: "var(--paper)",
        paperalt: "var(--paper-alt)",
        ink: "var(--ink)",
        inksoft: "var(--ink-soft)",
        line: "var(--line)",
        copper: "var(--copper)",
        copperdeep: "var(--copper-deep)",
        signal: "var(--signal)",
        muted: "var(--muted)",
        surface: "var(--surface)",
        // New vibrant palette
        canvas: "var(--canvas)",
        yellow: "var(--yellow)",
        magenta: "var(--magenta)",
        cyan: "var(--cyan)",
        indigo: "var(--indigo-dark)",
        sage: "var(--sage)",
        coral: "var(--coral)",
      },
      borderRadius: {
        sm: "2px",
        island: "2rem",
        pill: "9999px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "marquee-slow": "marquee 45s linear infinite",
        "fade-up": "fade-up 0.6s ease forwards",
      },
    },
  },
  plugins: [],
};
export default config;
