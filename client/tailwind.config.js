/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensures Tailwind scans React files
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'], // Default font
      },
      screens: {
        'custom': '850px', // Defines a new breakpoint at 850px
      },
    },
  },
  plugins: [],
};
