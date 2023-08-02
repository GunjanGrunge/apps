module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 700: "#68696d" },
        blue_gray: { 100: "#cccccc" },
        blue: { 700: "#0f6fdf", A200: "#4885ed", A200_01: "#5084dc" },
        red: { 700: "#db3236", "700_01": "#dd3224", A700: "#d90c0c" },
        lime: { 600: "#c6b33c", 900: "#686f01" },
        amber: { 500: "#f4c20d" },
        light_blue: { A200: "#45e7fc" },
        green: { 400: "#57af79", 500: "#3cba54", 700: "#2b9d31" },
        teal: { 400: "#1aabb0" },
        indigo: { 400: "#486aae", 900: "#00009b" },
        black: { 900: "#000000" },
        deep_purple: { A700: "#8316d8" },
        white: { A700: "#ffffff" },
      },
      fontFamily: {
        inter: "Inter",
        montserrat: "Montserrat",
        roboto: "Roboto",
        carterone: "Carter One",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
