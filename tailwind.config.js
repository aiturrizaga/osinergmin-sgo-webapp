/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', ...defaultTheme.fontFamily.sans]
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      red: colors.red,
      secondary: '#ffd921',
      primary: {
        50: '#ebf7ff',
        100: '#d1ecff',
        200: '#aedfff',
        300: '#76cdff',
        400: '#35b0ff',
        500: '#0788ff',
        600: '#0061ff',
        700: '#0048ff',
        800: '#003bd7',
        900: '#0039aa',
        950: '#062365',
      },
      success: {
        50: '#eefff2',
        100: '#d7ffe4',
        200: '#b2ffca',
        300: '#76ffa2',
        400: '#33f573',
        500: '#09de4f',
        600: '#00be3f',
        700: '#049134',
        800: '#0a712d',
        900: '#0a5d28',
        950: '#003413',
      },
      neutral: {
        50: '#f6f7f8',
        100: '#eaecf0',
        200: '#d9dde4',
        300: '#bfc5d1',
        400: '#9fa9bb',
        500: '#8892a9',
        600: '#777e99',
        700: '#6a708b',
        800: '#5a5e73',
        900: '#4a4d5e',
        950: '#30323b',
      }
    }
  },
  plugins: [],
}
