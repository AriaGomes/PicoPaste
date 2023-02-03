/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  darkMode: "class",
  lightMode: "class",
  theme: {
    extend: {},
    colors: {
      tb: "#000",
      tw: "#FFF",
    },
  },
  plugins: [require("flowbite/plugin")],
};
