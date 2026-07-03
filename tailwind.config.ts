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
        foreground: "#333333",
        border: "#E8E8E8",
        success: "#39B54A",
        warning: "#FFC107",
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-be-vietnam)", "sans-serif"],
        button: ["var(--font-poppins)", "sans-serif"],
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
