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
      transitionProperty: {
        'fade': 'visibility, opacity'
      },
      transitionDelay: {
        '0': '0ms',
        'fade': '0ms, 5ms'
      },
      animation: {
        'outline' : 'outlinePath 20s linear infinite',
        'fade': 'fade 500ms linear'
      },
      keyframes: {
        fade: {
          '0%': { 'opacity': 0 },
          '100': { 'opacity': 1 }
        },
        outlinePath: {
          '0%': { 'stroke-dashoffset': 750 },
          '100': {'stroke-dashoffset': 0 }
        } 
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require("tailwindcss-animation-delay"),
  ],
}