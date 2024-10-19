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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryOrange: "#F46023",
        primaryBlue: "#275CFE",
        primaryYellow: "#F0B011",
        primaryWhite: "#F2F2F2"
      },
      fontFamily: {
        boorsok: ["var(--font-boorsok)"],
        arimo: ["var(--font-arimo)"],
        knewave: ["var(--font-knewave)"],
      },
      screens: {
        "3xs": "300px",
        xxs: "360px",
        xs: "412px",
        'mid-xs': "576px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "1760px",
        extraLarge: "1920px",
      },
    },
  },
  plugins: [],
};
export default config;
