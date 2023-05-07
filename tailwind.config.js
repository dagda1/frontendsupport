/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
      padding: {
        '5p': '5%',
      },
      width: {
        '50p': '50%',
      },
      backgroundColor: {
        breakglass: '#138F4A',
      },
    },
  },
  plugins: [],
};
