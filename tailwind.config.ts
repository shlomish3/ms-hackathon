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
        background: "var(--background)",
        foreground: "var(--foreground)",
        "brand-navy": "#0B2B56",
        "brand-navy-light": "#154385",
        "brand-cyan": "#00B4D8",
        "brand-cyan-light": "#90E0EF",
        "tech-slate": "#0F172A",
        "tech-slate-light": "#1E293B",
      },
    },
  },
  plugins: [],
};
export default config;
