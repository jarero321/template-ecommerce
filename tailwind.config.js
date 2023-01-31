/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['var(--font-raleway)', ...fontFamily.sans],
      },
      colors: {
        'primary-orange': '#F37921',
        'secondary-orange': '#FD6920',
        'primary-green': '#21AC50',
        'secondary-green': '#86C696',
        'primary-gray': '#535353',
        'secondary-gray': '#707070'
      }
    },
  },
  plugins: [],
}
