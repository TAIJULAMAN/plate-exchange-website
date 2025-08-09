export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mycustom: ['MyCustomFont', 'sans-serif'], // your local font
        manrope: ['Manrope', 'sans-serif'], // Google font
      },
      colors: {
        customYellow: '#FFCD0F', // your custom color
      },
    },
  },
  plugins: [],
};
