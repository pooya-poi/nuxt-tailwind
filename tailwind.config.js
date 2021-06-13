const { colors: defaultColors } = require('tailwindcss/defaultTheme')

const colors = {
  ...defaultColors,
  ...{
    "cyan": {
      "400": "#22D3EE",
      "600": "#0891B2"
    },
    "lightBlue": {
      "500": "#0EA5E9"
    }
  },
}

module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
       }
    },
    "colors": colors,
    screen:{
      'xs': '320px',
      // => @media (min-width: 320px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-rtl'),
  ],
}
