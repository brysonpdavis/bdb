import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jxs,tsx,mdx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
} satisfies Config;
