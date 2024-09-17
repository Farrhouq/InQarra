/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#12372A',
        secondary: '#436850',
        accent: '#ADBC9F',
        text: '#FBFADA'
      },
      fontFamily: {
        arabic: 'Scheherazade New',
        // arabic: ["Noto Naskh Arabic", 'serif']
      }
    },
  },
  plugins: [],
}

