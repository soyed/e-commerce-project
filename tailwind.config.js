module.exports = {
  purge: ['./src/**/*.{js, jsx, ts, tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        'screen-1/4': '25vh',
        'screen-1/2': '50vh',
        'screen-1/10': '10vh',
        'screen-2/10': '20vh',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
