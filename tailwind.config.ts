import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4A90A4",
          50: "#E8F4F8",
          100: "#D1E9F1",
          200: "#A3D3E3",
          300: "#75BDD5",
          400: "#4A90A4",
          500: "#3C7383",
          600: "#2E5662",
          700: "#203A42",
          800: "#121D21",
          900: "#040607",
        },
        secondary: {
          DEFAULT: "#8BA888",
          50: "#F2F5F2",
          100: "#E5EBE4",
          200: "#CBD7C9",
          300: "#B1C3AE",
          400: "#8BA888",
          500: "#6F8A6C",
          600: "#536C51",
          700: "#374D36",
          800: "#1B2E1B",
          900: "#0A1209",
        },
        accent: {
          DEFAULT: "#C97C5D",
          50: "#FAECE7",
          100: "#F5D9CF",
          200: "#EBB39F",
          300: "#E18D6F",
          400: "#C97C5D",
          500: "#A6634A",
          600: "#834A37",
          700: "#603124",
          800: "#3D1811",
          900: "#1A0904",
        },
        background: "#F5F1E8",
        textPrimary: "#2D3436",
        border: "#DFE6E9",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
