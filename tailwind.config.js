/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightbg: "#ffffff",
        darkbg: "#030706",
        purple: "#B3A2ED",
        text: "#000000",
        primary: "#246353",
        secondary: "#0b1e19",
        accent: "#194237",
        darkaccent: "#43b194",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
