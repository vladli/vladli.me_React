/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        openmenu: "openmenu 220ms ease-in",
      },
      keyframes: {
        openmenu: {
          "0%": { opacity: "0", transform: "translate(0px, -3px)" },

          "100%": {
            opacity: "1",
          },
        },
      },
      colors: {
        current: "currentColor",
        primary: colors.blue,

        menuBgLight: "#094067",
        cardBgLight: "#fffffe",
        bgLight: "#fffffe",

        menuBgDark: "#16161a",
        cardBgDark: "#16161a",
        bgDark: "#242629",
      },
    },
  },
  plugins: [],
};
