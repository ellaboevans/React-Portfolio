/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // or 'media' or 'class'
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('./src/assets/hero-bg.jpeg')",
        heroWhite: "url('./src/assets/hero-white')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
