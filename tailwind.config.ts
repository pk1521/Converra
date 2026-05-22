import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: ".5625rem",
        md: ".375rem",
        sm: ".1875rem",
      },
      colors: {
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        ring: "hsl(var(--ring) / <alpha-value>)",
        charcoal: {
          DEFAULT: "#0B0D10",
          900: "#0B0D10",
          800: "#141820",
          700: "#1C2330",
          600: "#252D3D",
        },
        offwhite: {
          DEFAULT: "#F7F8FA",
          100: "#FFFFFF",
          200: "#F7F8FA",
          300: "#EEF0F4",
        },
        brand: {
          blue: "#3B82F6",
          "blue-dark": "#2563EB",
          violet: "#6366F1",
          cyan: "#22D3EE",
        },
        navy: {
          DEFAULT: "#0E1E2F",
          900: "#050b11",
          800: "#0a1521",
          700: "#0e1e2f",
          600: "#162e47",
          500: "#24466b",
        },
        teal: {
          DEFAULT: "#1FB6A6",
          500: "#1FB6A6",
          400: "#3ad1c1",
          600: "#189487",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "system-ui", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "hero-gradient-wave": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "card-float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "hero-gradient-wave": "hero-gradient-wave 14s ease-in-out infinite",
        "card-float": "card-float 4s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #3B82F6 0%, #6366F1 50%, #22D3EE 100%)",
        "gradient-brand-subtle": "linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(99,102,241,0.15) 50%, rgba(34,211,238,0.1) 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
