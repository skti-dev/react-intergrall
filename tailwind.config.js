const { colors: defaultColors } = require('tailwindcss/defaultTheme');
const colors = {
  ...defaultColors,
  ...{
    "i-black": {
      "900": "#111",
      "800": "#222",
      "700": "#333"
    },
    "i-gray": {
      "100": "#EEE"
    }
  }
}

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors,
      rotate: {
        "-40": "-40deg"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
