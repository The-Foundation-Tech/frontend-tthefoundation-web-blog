/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        customBlue: '#041562',
        customNavy: '#11468F',
        customRed: '#DA1212',
        customGray: '#EEEEEE',
      },
    },
  },
  plugins: [],
};
