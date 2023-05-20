/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

const colors = {
  darkBlue: '#1F2A37',
  green: '#94DA54',
  white: '#FFFFFF',
  black: '#000000',
  gray: '#D4DDEF',
  inherit: 'inherit',
}
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors,
    extend: {},
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '2px',
      3: '3px',
    },
  },
  plugins: [],
}
