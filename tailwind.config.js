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
      height: {
        '80vh': '80vh',
        '90vh': '90vh',
      },
      width: {
        '50p': '50%',
        '400p': '400%',
        '500p': '500%',
      },
      backgroundColor: {
        breakglass: '#138F4A',
      },
      minHeight: {
        '80vh': '80vh',
      },
      flex: {
        auto: '1 0 auto',
      },
    },
  },
  plugins: [],
};
