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
          DEFAULT: "#002147",
          900: "#001A33",
          800: "#002147",
          700: "#003366",
          600: "#004A85",
        },
        offwhite: {
          DEFAULT: "#F7F8FA",
          100: "#FFFFFF",
          200: "#F7F8FA",
          300: "#EEF0F4",
        },
        brand: {
          navy: "#002147",
          blue: "#0066B3",
          "blue-dark": "#004A85",
          teal: "#008B9C",
          cyan: "#2EC4C9",
          grey: "#999999",
          // legacy aliases used across components
          violet: "#0066B3",
        },
        construction: {
          steel: "#64748B",
          "steel-dark": "#475569",
          blueprint: "#1E3A5F",
          "blueprint-light": "#2D4A6F",
          concrete: "#94A3B8",
          safety: "#F59E0B",
          "safety-muted": "#D97706",
        },
        luxury: {
          ivory: "#F7FAFB",
          cream: "#EEF4F6",
          stone: "#002147",
          charcoal: "#001A33",
          bronze: "#0066B3",
          champagne: "#008B9C",
          "champagne-light": "#2EC4C9",
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
        serif: ["Playfair Display", "Georgia", "serif"],
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
        "gp-shimmer": {
          "0%": { transform: "translateX(-100%) skewX(-12deg)" },
          "100%": { transform: "translateX(200%) skewX(-12deg)" },
        },
        "luxury-fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "bubble-drift": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(12px, -20px) scale(1.05)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "hero-gradient-wave": "hero-gradient-wave 14s ease-in-out infinite",
        "card-float": "card-float 4s ease-in-out infinite",
        "gp-shimmer": "gp-shimmer 3s ease-in-out infinite",
        "bubble-drift": "bubble-drift 8s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #0066B3 0%, #008B9C 50%, #2EC4C9 100%)",
        "gradient-brand-subtle": "linear-gradient(135deg, rgba(0,102,179,0.12) 0%, rgba(0,139,156,0.12) 50%, rgba(46,196,201,0.08) 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
