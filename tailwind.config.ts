import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
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
      },
      fontFamily: {
        relation: ['"relation-one"', "sans-serif"],
        "dm-serif": ['"DM Serif Text"', "serif"],
        bodoni: ['"Bodoni Moda"', "cursive"],
        mplus: ["var(--font-m-plus-rounded-1c)", "sans-serif"],
        notosans: ["var(--font-Noto-Sans-JP)", "sans-serif"],
      },
      fontWeight: {
        regular: "400",
      },
      zIndex: {
        "-1": "-1",
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0",
            transform: "translateY(80px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [daisyui],
} satisfies Config;
