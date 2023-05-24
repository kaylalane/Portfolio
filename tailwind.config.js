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
        darkbg: "#121212",
        purple: "#B3A2ED",
        text: "#222222",
        primary: "#7029ff",
        secondary: "#f1eaff",
        accent: "#aa80ff",
      },
    },
  },
  plugins: [],
};
