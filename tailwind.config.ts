import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-ptmono)", "monospace"],
        pacifico: ["var(--font-pacifico)", "cursive"],
      },
    },
  },
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
};

export default config;
