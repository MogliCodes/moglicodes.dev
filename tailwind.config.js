/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class',
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
      sans: ['Nunito'],
      display: ['Chewy'],
      mono: ['FiraCode Nerd Font Mono']
    },
    extend: {
      colors: {
        'mc-orange': '#f08050',
        'mc-pink': '#f7c8c8',
        'primary': '#f9b672',
        'primary-lighter': '#ffd2a6',
        'primary-darker': '#e5a15c',
        'mc-blue': '#063144' ,
        'mc-blue-darker': '#00060b',
        'mc-lightblue': '#3696cc',
        'mc-waikawa': '#5969A9',
        'mc-persian-rose': '#FF36AB',
        'mc-fern': '#54B872',
        'mc-glacier': '#76B5C5',
        'docker': '#1D63ED',
        'mongodb': '#4DB33D',
        'homelab': '#a3a3a3',
        'baas': '#f08050',
        'supabase': '#0c1b33',
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite',
      }
    },
  },
  plugins: [],
  safelist:  [
      "grid-cols-2"
  ]
}
