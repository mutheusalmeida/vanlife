/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#FFF',
      'gray-100': '#DBDBDB',
      'gray-200': '#D1D5DB',
      'gray-300': '#AAA',
      'orange-100': '#FFF7ED',
      'orange-200': '#FFEAD0',
      'orange-300': '#FFDDB2',
      'orange-400': '#FFCC8D',
      'orange-600': '#FF8C38',
      'orange-700': '#DD7A32',
      orange: '#E17654',
      green: '#115E59',
      'black-100': '#4D4D4D',
      'black-200': '#252525',
      black: '#161616',
      red: '#EC5962',
    },
    extend: {
      keyframes: {
        slideIn: {
          from: {
            transform: 'translateX(calc(100% + 1rem))',
          },
          to: {
            transform: 'translateX(0)',
          },
        },
      },
      animation: {
        slideIn: 'slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
