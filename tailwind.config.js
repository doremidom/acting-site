/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"'],
      },
      colors: {
        black: '#1c1c1c', // Replace with your desired hex value
      },
    },
  },
  plugins: [],
};
