import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: "#f5f8f2",
          100: "#e7efe0",
          200: "#d3e1c6",
          500: "#7d9f69",
          700: "#4f6f43",
          900: "#273722"
        },
        clay: {
          50: "#fbf6f1",
          100: "#f1e2d4",
          500: "#b98262",
          700: "#825438"
        },
        ink: "#22302b"
      },
      boxShadow: {
        soft: "0 20px 60px rgba(34, 48, 43, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
