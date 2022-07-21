/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './assets/**/*.{vue,js,css}',
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins'],
      display: ['Chewy'],
    },
    extend: {
      colors: {
        'primary': '#f9b672',
        'primary-lighter': '#ffd2a6',
        'primary-darker': '#e5a15c'
      },
    },
  },
  plugins: [],
}
