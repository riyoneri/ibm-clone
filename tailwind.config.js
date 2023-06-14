/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        main: "IBM-Regular",
        "main-light": "IBM-Light",
        "main-bold": "IBM-Semibold",
      },
      backgroundImage: {},
      colors: {
        main: "",
        hover: "",
        link: "#0f62fe",
      },
    },
  },
  plugins: [],
};

