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
        bgDark: colors.gray[700],
      },
    },
  },
  plugins: [],
};
