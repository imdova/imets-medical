import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        "primary-100": "var(--primary-100)",
        "primary-900": "var(--primary-900)",
        "primary-foreground": "var(--primary-foreground)",
        "primary-transparent": "var(--primary-transparent)",
        "orange-primary": "var(--orange-primary)",
        "light-primary-transparent": "var(--light-primary-transparent)",
        main: "var(--text-main)",
        secondary: "var(--text-secondary)",
        "main-border": "var(--border-main)",
        "hover-link": "var(--hover-link)",
      },
      boxShadow: {
        baseShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        halfShadow:
          "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
      },
    },
  },
  plugins: [],
} satisfies Config;
