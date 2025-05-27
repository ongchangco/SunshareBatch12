/** @type {import('tailwindcss').Config} */
const defaultThemes = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1200px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },

    fontFamily: {
      "Space-Grotesk": [
        "'Space Grotesk', sans-serif",
        ...defaultThemes.fontFamily.sans,
      ],
      Poppins: ["'Poppins', sans-serif", ...defaultThemes.fontFamily.sans],
    },
  },
  plugins: [],
};
