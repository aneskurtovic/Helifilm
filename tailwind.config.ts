import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      colors: {
        bg: "#0a0a0c",
        "bg-2": "#111114",
        "bg-3": "#17171b",
        fg: "#f4f1ea",
        accent: "#D4A418",
        "accent-blue": "#1e3a8a",
        background: "#0a0a0c",
        foreground: "#f4f1ea",
      },
      maxWidth: {
        frame: "1440px",
      },
      letterSpacing: {
        "mono-sm": "0.14em",
        "mono-md": "0.18em",
        "mono-lg": "0.24em",
      },
    },
  },
  plugins: [],
};
export default config;
