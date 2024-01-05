/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily:{
      dmSans : ['DM Sans', 'sans-serif'],
      dmSansFour : ['DM Sans', 'sans-serif'],
    },
    colors:{
      lightGray : '#7F7F7F',
      grayShade : '#D1D1D1',
      lightGreen : '#D4F8D3',
      lightYellow : '#FFF0BB',
    },
    extend: {},
  },
  plugins: [],
};
