import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGreen: '#0C2716',
        lightGreen: '#215F38',
        textGreen: '#183121',
        greenInput: '#2B4434',
        orange: '#E45910',
        offwhite: '#F1F7F3'
      },
    },
  },
  plugins: [],
};
export default config;