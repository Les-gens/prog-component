module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: { 
      colors: {
        'blurple': '#7289da',
        'dark-blurple': '#4e5d94',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
