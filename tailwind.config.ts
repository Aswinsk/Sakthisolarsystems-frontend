import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#F59E0B", dark: "#D97706", light: "#FDE68A" },
        secondary: { DEFAULT: "#0B7C66", dark: "#065F4B", light: "#6EE7B7" },
        neutral: { 50:"#FAFAFA",100:"#F5F5F5",200:"#E5E7EB",600:"#4B5563",800:"#1F2937" }
      },
      fontFamily: {
        heading: ["Poppins","ui-sans-serif","system-ui","sans-serif"],
        body: ["Inter","ui-sans-serif","system-ui","sans-serif"]
      }
    }
  },
  plugins: []
} satisfies Config;
