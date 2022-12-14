/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

delete colors['lightBlue'];
delete colors['warmGray'];
delete colors['trueGray'];
delete colors['coolGray'];
delete colors['blueGray'];

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}",
  ],
  theme: {
    extend: {},
    colors: {
      ...colors,
      yellow: '#f1c877',
      orange: '#eea079',
      purple: '#997dcc',
      green: '#ced688',
      blue: '#44b8ce'
    }
  },
  plugins: [],
}
