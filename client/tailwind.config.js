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
        'lg-custom' : '1100px', // new breakpoints
        'md-custom' : '940px',
        'hd-custom' : '850px', // for header
        'ft-custom' : '635px', // for footer
        'ds-custom' : '550px' // for desc
      },
    },
  },
  plugins: [],
};
