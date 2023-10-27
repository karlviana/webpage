/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
         'landscape': {'raw': '(orientation: lanscape)'},
      },
    },
  },
}

