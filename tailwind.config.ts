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
        "ms-orange": "#F36D21",
        "ms-orange-dark": "#D95E1A",
        "health-teal": "#0D9488",
        "health-teal-dark": "#0F766E",
        "tech-slate": "#0F172A",
        "tech-slate-light": "#1E293B",
      },
    },
  },
  plugins: [],
};
export default config;
