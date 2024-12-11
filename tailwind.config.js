const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        yellow: '#FFD700', // Custom yellow
        green: {
          light: '#D4F1C5', // Custom green-light
        },
      },
      fontFamily: {
        display: ['Merriweather', ...defaultTheme.fontFamily.sans], // Add Merriweather
      },
    },
  },
  plugins: [],
};
