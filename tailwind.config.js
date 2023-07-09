const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    'node_modules/vue-litewind/dist/*.js',
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
        secondary: colors.gray,
        info: colors.blue,
        warn: colors.yellow,
        success: colors.green,
        danger: colors.red,
        dark: colors.neutral,
        light: colors.white,
        text: colors.gray,
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class', 
    }),
  ],
} 
