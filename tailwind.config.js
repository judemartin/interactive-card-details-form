/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xl": "1440px",
      },
      fontFamily: {
        overpass: ["overpass", "sans-serif"],
      },
    },
  },
  plugins: [],
};
