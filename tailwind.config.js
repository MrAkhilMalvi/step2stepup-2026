/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy:  '#1D2A40',
        green: '#61ce70',
      },
      fontFamily: {
        slab: ['var(--font-roboto-slab)', 'serif'],
        sans: ['var(--font-roboto)', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
