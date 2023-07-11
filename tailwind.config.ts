import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jxs,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-concourse)'],
        caps: ['var(--font-concourse-caps)'],
        mono: ['var(--font-triplicate)']
      }
    },
  },
  plugins: [require("daisyui"), require('@tailwindcss/typography')],
  daisyiu: {
    themes: ['forest'],
    default: 'forest'
  }
} satisfies Config;
