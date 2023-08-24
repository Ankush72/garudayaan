/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./node_modules/flowbite/**/*.js"],
  theme: {
    screens: {
      sm: '600px',
      md: '800px',
      lg: '1076px',
      xl: '1440px',
    },   
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        Triadic: "#683932",
        lightgray: "#F6F8FA",
        lightblack: "#303030b1",
        blue: "#0000FF",
        red:"#FF0000",
        gray: "#d5d1d1",
        white:"#FFFFFF",
        orange:"#FFA500",
        yellow: "#FFFF00",
        lightnavyblue:"#2E5A88"

      },
    },
  },
  plugins: [require('flowbite/plugin')],
}

