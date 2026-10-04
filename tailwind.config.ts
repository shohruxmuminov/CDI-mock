import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef6ff",
          100: "#d9eaff",
          200: "#bcd9ff",
          300: "#8ec1ff",
          400: "#599dff",
          500: "#3b7eff",
          600: "#2460f5",
          700: "#1c4ae0",
          800: "#1e3db5",
          900: "#1d378f",
        },
      },
    },
  },
  plugins: [],
};

export default config;
