/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'bgLight': '#4DADF3',
        'bgMedium': '#61BDFF',
        'bgDark': '#2361BD',
        'nav': '#1a2d45',
        'navtext': '#214173',
      },
      backgroundImage: {
        'header': "url('/header1.png/')",
      },
    }
  },
  plugins: []
};


