/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors:{
        primary:{
          DEFAULT:"rgb(0, 0, 0)"},
        test:{
          DEFAULT: "#4F6E4E"
        },
      },
    },
  },
  plugins: [],
}

