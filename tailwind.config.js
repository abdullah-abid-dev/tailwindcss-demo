module.exports = {
  // purge: [{
  //   enabled: process.env.NODE_ENV === 'production',
  //   content: [
  //     './src/**/*.{html,ts}',
  //   ]
  // }],
  purge: false, // causes break in builds on Heroku.
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
