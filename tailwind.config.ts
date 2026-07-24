import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: { "2xl": "1440px" },
    },
    extend: {
      colors: {
        ink: {
          950: "#050505",
          900: "#0A0A0A",
          800: "#111111",
          700: "#171717",
          600: "#1F1F1F",
        },
        graphite: {
          900: "#161618",
          800: "#1C1C1F",
          700: "#25252A",
        },
        gold: {
          50:  "#FBF6E7",
          100: "#F2E6BD",
          200: "#E6CE82",
          300: "#D9B85A",
          400: "#C9A043",
          500: "#B8923A",
          600: "#9C7A2C",
          700: "#7A5E22",
        },
        cream: {
          50:  "#FBF6EE",
          100: "#F2E9D8",
          200: "#E8D5B7",
          300: "#D9BE92",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        serif:   ["var(--font-cormorant)", "serif"],
        sans:    ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gold-shine":
          "linear-gradient(120deg, #B8923A 0%, #F2E6BD 35%, #D9B85A 55%, #9C7A2C 100%)",
        "radial-gold":
          "radial-gradient(circle at 50% 0%, rgba(217,184,90,0.18), transparent 60%)",
      },
      boxShadow: {
        gold: "0 10px 40px -10px rgba(217,184,90,0.35)",
        soft: "0 30px 80px -20px rgba(0,0,0,0.6)",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%":     { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
