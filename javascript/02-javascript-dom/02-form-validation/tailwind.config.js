/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./assets/js/main.js",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pacifico':[ 'Pacifico', 'cursive'],
        'poppins':['Poppins'],
        'roboto':['Roboto'],
        'satisfy':['Satisfy'],
        'skranji':['Skranji'],
        'nunito':['Nunito']
       },
    },
  },
  plugins: [],
}

