import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          green: "#00A651",
          pink: "#D61F8C",
        },
        accent: {
          blue: "#27B5E6",
        },
        background: "#FFFFFF",
        section: "#F8FFF8",
        foreground: "#2D2D2D",
        border: "#E8E8E8",
        success: "#39B54A",
        warning: "#FFC107",
      },
      fontFamily: {
        heading: ["var(--font-nunito)", "sans-serif"],
        body: ["var(--font-be-vietnam)", "sans-serif"],
        button: ["var(--font-nunito)", "sans-serif"],
      },
      fontSize: {
        "display-lg": ["3.25rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-md": ["2.5rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        "display-sm": ["2rem", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
        "body-lg": ["1.125rem", { lineHeight: "1.75" }],
        "body-md": ["1rem", { lineHeight: "1.7" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6" }],
        "nav": ["0.8125rem", { lineHeight: "1.2rem", letterSpacing: "0.06em" }],
      },
      borderRadius: {
        DEFAULT: "20px",
        lg: "20px",
        md: "12px",
        sm: "8px",
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0, 0, 0, 0.06)",
        card: "0 8px 30px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
