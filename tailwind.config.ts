import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(0, 71, 51)",
        foreground: "var(--foreground)",
        heading: "#1EE07F",
        serviceCard: "#F0F7F1",
      },
    },
  },
  plugins: [],
} satisfies Config;
