/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        site: "url('./assets/design-bg.png')",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#a4f9fc",
        
"secondary": "#79c6e5",
        
"accent": "#cfa7ef",
        
"neutral": "#1e1e24",
        
"base-100": "#fcfcfd",
        
"info": "#6fbcdc",
        
"success": "#44dabe",
        
"warning": "#f1bf09",
        
"error": "#ef6957",
        },
      },
    ],
  },
  
  plugins: [require("daisyui")],
}

