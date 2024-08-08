/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/*.ejs"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
        serif: ["Georgia", "serif"],
        Lato: ["Lato"],
      },
    },
    colors: {
      titleOrange: "#F37303",
      backgroundWhite: "#FFF8FC",
      buttonBlue: {
        DEFAULT: "#0094D2",
        200: "#2E6171",
      },
    },
  },
  plugins: [
    {
      tailwindcss: {},
      autoprefixer: {},
    },
  ],
};
