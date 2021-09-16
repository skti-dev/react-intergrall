const { colors: defaultColors } = require('tailwindcss/defaultTheme');
const colors = {
  ...defaultColors,
  ...{
    "sm-black": {
      "900": "#111",
      "800": "#222",
      "700": "#333"
    },
    "sm-gray": {
      "100": "#EEE"
    }
  }
}

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
