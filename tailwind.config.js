/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './assets/**/*.{vue,js,css}',
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
  ],
  theme: {
    container: {
      center: true,
      screens: {
        '2xl': '1240px'
      }
    },
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
