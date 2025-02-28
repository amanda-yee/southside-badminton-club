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
        'customlg' : '1100px', // new breakpoints
        'customft' : '940px',
        'custom' : '850px', 
        'customsm' : '635px',
        'customxs' : '550px'
      },
    },
  },
  plugins: [],
};
