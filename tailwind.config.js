/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      laptop: { max: "1024px" },
      tablet: { max: "767px" },
      mobile: { max: "639px" },
      small: { max: "425px" },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
