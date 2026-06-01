/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fefdfb',
          100: '#fdf9f3',
          200: '#f9f1e6',
          300: '#f3e5d3',
          400: '#e8d4bc',
          500: '#d4b896',
        },
        beige: {
          50: '#faf8f5',
          100: '#f5f0e8',
          200: '#ebe0d0',
          300: '#dcc9b0',
          400: '#c9a97d',
          500: '#b08c4f',
        },
        gold: {
          50: '#fbf8f2',
          100: '#f6eddd',
          200: '#efd9b5',
          300: '#e5be83',
          400: '#d9a052',
          500: '#c9863a',
          600: '#a66830',
        },
        charcoal: '#2a2a2a',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
