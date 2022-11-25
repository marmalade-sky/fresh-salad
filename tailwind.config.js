module.exports = {
  content: ['./src/**/*.{njk,md}'],
  theme: {
    fontFamily: {
      'book': ['Circular-400', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
      'heavy': ['Circular-700', 'Roboto Condensed', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
    },
    extend: {
      screens: {
        '3xl': '1600px',
      },
      fontSize: {
        '2xs': '10px',
        'display': '56px',
        'headline': '26px'
      },
      maxWidth: {
        'site': '1184px'
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}