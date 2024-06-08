import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './hooks/**/*.{ts,tsx}',
    './providers/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
    './services/**/*.{ts,tsx}',
    './assets/**/*.{ts,tsx}',
    './utils/**/*.{ts,tsx}',
    './auth/**/*.{ts,tsx}',
    './api/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',

	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      spacing: {
        '128': '32rem',
        '26': '6.5rem',
        '10': '2.5rem',
        '11': '2.75rem',
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        rio_blue_raspberry: {
          DEFAULT: "rgba(0,185,188,255)",
        },
        rio_strawberry_milkshake: {
          DEFAULT: "rgba(255,190,224,255)",
        },
        rio_lolipop: {
          DEFAULT: "rgba(231,66,143,255)",
        },
        rio_confetti_cake: {
          DEFAULT: "rgba(157,239,233,255)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        'custom-pulse': {
          '0%': { opacity:"1" },
          '5%': { opacity:"0.95" },
          '10%': { opacity:"0.9" },
          '15%': { opacity:"0.85" },
          '20%': { opacity:"0.8" },
          '25%': { opacity:"0.75" },
          '30%': { opacity:"0.7" },
          '35%': { opacity:"0.65" },
          '40%': { opacity:"0.6" },
          '45%': { opacity:"0.55" },
          '50%': { opacity:"0.5" },
          '55%': { opacity:"0.45" },
          '60%': { opacity:"0.4" },
          '65%': { opacity:"0.35" },
          '70%': { opacity:"0.3" },
          '75%': { opacity:"0.25" },
          '80%': { opacity:"0.2" },
          '85%': { opacity:"0.15" },
          '90%': { opacity:"0.1" },
          '100%': { opacity:"0.1" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "custom-pulse": "custom-pulse 4s ease-in-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config