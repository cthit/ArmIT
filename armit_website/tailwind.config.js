/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
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
        'header': "url('/header4.png/')",
        'header-mobile': "url('/header_phone.png/')",
        'values': "url('/values_background.png/')",
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },
      gridTemplateRows: {
        'cards': 'minmax(200px, 0.1fr) minmax(0, 0.3fr) minmax(0, 1fr)',
        'cards-mobile': 'minmax(200px, 0.1fr) minmax(0.2fr, 0.3fr) minmax(0.5fr, 1fr)'
      },
    }
  },
  plugins: []
};


