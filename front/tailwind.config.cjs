/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/daisyui/dist/**/*.js",
  ],

  plugins: [require("daisyui")],
  daisyui: {
    themes: ["cmyk", "halloween"],
    darkTheme: "halloween",
  },
};
