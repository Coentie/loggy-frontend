/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      'sans': ['poppins', 'system-ui'],
    },
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#003262',
          50: '#1B8FFF',
          100: '#0685FF',
          200: '#0070DC',
          300: '#005CB4',
          400: '#00478B',
          500: '#003262',
          600: '#00152A',
          700: '#000000',
          800: '#000000',
          900: '#000000',
          950: '#000000'
        },
        'secondary': {
          DEFAULT: '#F47202',
          50: '#FED4AF',
          100: '#FEC99B',
          200: '#FEB373',
          300: '#FE9D4A',
          400: '#FD8722',
          500: '#F47202',
          600: '#BC5802',
          700: '#853E01',
          800: '#4D2401',
          900: '#150A00',
          950: '#000000'
        },
      }
    },
  },
  plugins: [],
}

