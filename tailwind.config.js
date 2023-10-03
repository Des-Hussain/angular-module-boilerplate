const { addDynamicIconSelectors } = require('@iconify/tailwind')
// @type {import('tailwindcss').Config}
module.exports = {
  content: ["./src//.{html,ts}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      display: ["Montserrat", "sans-serif"],
      body: ["Montserrat", "sans-serif"],
    },
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {
      colors: {
        primary: "#ee5019",
        "primary-shade": "#d64817",
      },
    },
    corePlugins: {
      aspectRatio: false,
    },
  },
  plugins: [
    addDynamicIconSelectors(),
  ],
};