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
        background: "#0c0a09",
        foreground: "#ffffff",
        brand: {
          gold: "#c5a880",
          dark: "#171311",
        },
      },
    },
  },
  plugins: [],
};
export default config;
