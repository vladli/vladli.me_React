/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/daisyui/dist/**/*.js",
  ],
  safelist: [
    {
      pattern: /(bg|ring)-/,
    },
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["winter", "halloween"],
    darkTheme: "halloween",
  },
};
