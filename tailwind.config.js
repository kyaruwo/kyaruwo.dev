const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", defaultTheme.fontFamily.sans],
      },
    },
  },

  plugins: [],
};
