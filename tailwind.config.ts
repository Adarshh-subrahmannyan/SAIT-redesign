import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      colors: {
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
      },
      borderRadius: { sm: "2px" },
    },
  },
  plugins: [],
};
export default config;
