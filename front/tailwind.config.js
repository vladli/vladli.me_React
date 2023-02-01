/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        current: "currentColor",
        primary: colors.blue,
        dark: {
          mainBg: "#171717",
          secondaryBg: "#262626",
          text: "#fff",
        },
        light: {
          mainBg: "#171717",
          secondaryBg: "#fafafa",
          text: "#fff",
        },
      },
    },
  },
  plugins: [],
};
