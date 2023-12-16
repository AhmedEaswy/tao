/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.html',
    './src/css/**/*.scss',
    './src/js/main.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#efb2b5',
        'secondary': '#d97915',
        'mainblack': '#000000',
        'gray-light': '#eee7da',
        'gray-dark': '#32475e',
        'graymain': '#796e59',
        'gray-dark-2': '#1D1D1D',
      },
      fontFamily: {
        sans: ['Marhey'],
        alt: ['Rubik'],
      },
      container: {
        screens: {
          DEFAULT: '100%',
          sm: '640px',
          lg: '1024px',
          xl: '1224px',
          '2xl': '1409px',
        },
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("tailwindcss-flip")
  ],

  daisyui: {
    themes: [
      {
        light: {
          'primary': '#efb2b5',
          "secondary": "#d97915",
          "accent": "#ea5234",
          "neutral": "#000000",
          "base-100": "#ffffff",
          "gray": "#fafafa",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      }
    ],
    dark: false,
    rtl: true, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },


}

