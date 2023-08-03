import { type Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{css,scss,less}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
