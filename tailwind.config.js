/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx,scss,css}'],
  content: [],
  theme: {
    extend: {
      // Media queries 
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      // All colours used across all pages
      colors: {
        'green': '#00D7F5',
        'blue': '#618EFF',
        'pink': '#F7AAD4',
        'beige': '#C4C4C4',
      },
      // Main font across all pages
      fontFamily: {
        sans: ['Zen Dots', 'sans-serif'],
      },
    },
  },
  plugins: [],
}