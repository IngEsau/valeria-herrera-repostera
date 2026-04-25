import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          lavender: "#967EDF",
          cta: "#D97706",
          taupe: "#7C6F64",
          cream: "#FDF5F0",
        },
      },
      fontFamily: {
        heading: ["Fraunces", "serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 45px rgba(124, 111, 100, 0.12)",
      },
    },
  },
  plugins: [],
} satisfies Config;
