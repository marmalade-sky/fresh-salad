module.exports = {
  content: ['./src/**/*.{njk,md,json}'],
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
      animation: {
        'rise': 'rise 750ms cubic-bezier(0.68, 0.04, 0.24, 1)',
        'outline' : 'outlinePath 20s linear infinite'
      },
      keyframes: {
        rise: {
          '0%': { 
            opacity: 0,
            transform: 'translateX(-10px)'
          },
          '100': {
            opacity: 1,
            transform: 'translateX(0px)'
          },
        },
        outlinePath: {
          '0%': { 
            'stroke-dashoffset': 750
          },
          '100': {
            'stroke-dashoffset': 0
          }
        } 
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}