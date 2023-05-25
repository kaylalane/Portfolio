/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightbg: "#ffffff",
        darkbg: "#000000",
        purple: "#B3A2ED",
        text: "#000000",
        primary: "#884DFF",
        secondary: "#ffffff",
        darkaccent: "#aa80ff",
      },
    },
  },
  plugins: [],
};
