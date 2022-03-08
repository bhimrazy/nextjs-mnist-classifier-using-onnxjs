const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["Inter", "system-ui", "sans-serif"],
      body: ["Inter", "system-ui", "sans-serif"],
    },
    extend: {
      colors: {
        teal: colors.teal,
        blueGray: colors.blueGray,
        secondary: "#0b2239",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
