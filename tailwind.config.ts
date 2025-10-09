import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "var(--color-primary)", dark: "var(--color-primary-dark)", light: "var(--color-primary-light)" },
        secondary: { DEFAULT: "var(--color-secondary)", dark: "var(--color-secondary-dark)", light: "var(--color-secondary-light)" },
        accent: { DEFAULT: "var(--color-accent)" }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)"
      },
      fontFamily: {
        heading: ["Poppins","ui-sans-serif","system-ui","sans-serif"],
        body: ["Inter","ui-sans-serif","system-ui","sans-serif"]
      }
    }
  },
  plugins: []
} satisfies Config;
