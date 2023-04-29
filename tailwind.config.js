/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
      maxWidth: {
        '90p': '90%',
      },
      padding: {
        '5p': '5%',
      },
      width: {
        '50p': '50%',
      },
    },
  },
  plugins: [],
};
