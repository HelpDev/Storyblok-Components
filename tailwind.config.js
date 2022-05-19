/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Docs Nuxt: https://tailwindcss.nuxtjs.org/
 */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        // First add to nuxt config
        sans: ['Work Sans', ...defaultTheme.fontFamily.sans],
        serif: ['Montserrat', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: {
          100: '#FFC8A3',
          200: '#FFAF7A',
          300: '#FF9752',
          400: '#FF7E29',
          500: '#FF6600',
          600: '#C75000',
          700: '#8F3900',
          800: '#572300',
          900: '#1F0C00'
        },
        social: {
          twitter: '#1da1f2',
          facebook: '#1877f2',
          instagram: '#e4405f',
          mail: '#005ff9',
          whatsapp: '#25D366',
          github: '#171515'
        }
      },
      height: {
        '10v': '10vh',
        '20v': '20vh',
        '30v': '30vh',
        '40v': '40vh',
        '50v': '50vh',
        '60v': '60vh',
        '70v': '70vh',
        '80v': '80vh',
        '90v': '90vh',
        '100v': '100vh'
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ],
  content: [
    'components/**/*.vue',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'plugins/**/*.js',
    'node_modules/vue-tailwind/dist/*.js',
    './node_modules/components-helpdev-storyblok/components/**/*.vue',
    './node_modules/components-helpdev-storyblok/layouts/**/*.vue',
    './node_modules/components-helpdev-storyblok/pages/**/*.vue',
    './node_modules/components-helpdev-storyblok/plugins/**/*.js',
    'nuxt.config.js'
  ],
  safelist: [
    {
      pattern: /bg-social-.+/,
      variants: ['hover']
    }
  ]
};
