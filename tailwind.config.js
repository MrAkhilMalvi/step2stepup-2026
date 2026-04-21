/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy:  '#1D2A40',
        green: '#61ce70',
      },
      fontFamily: {
        slab: ["'Roboto Slab'", 'serif'],
        sans: ["'Roboto'", 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
