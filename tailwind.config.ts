import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        jd: {
          blue: "#1BA1E2",
          orange: "#FF6600",
          darkblue: "#003087",
          text: "#333333",
          muted: "#6b7280",
          border: "#e5e7eb",
          bg: "#f5f5f5",
        },
      },
      maxWidth: {
        content: "1420px",
      },
      fontFamily: {
        sans: [
          "Arial",
          "Helvetica Neue",
          "Helvetica",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.08)",
        cardHover: "0 4px 12px rgba(0,0,0,0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
