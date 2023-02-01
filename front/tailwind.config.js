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
          text: "#fff",
        },

        menuBgLight: "#991b1b",
        cardBgLight: "#fafafa",
        bgLight: "#d4d4d4",

        menuBgDark: "#171717",
        cardBgDark: "#171717",
        bgDark: "#262626",
      },
    },
  },
  plugins: [],
};
