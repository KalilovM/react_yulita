/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary-white': '#f2f7ff',
      'primary-blue': '#4ea7ff',
      'primary-background': '#e4edf6',
      'primary-text': '#0f0f0f',
      'secondary-text': '#707477',
      'section-title-text': '#313131',
      'transparent': 'transparent',
    },
    extend: {
      fontFamily: {
        sans: ['Ubuntu', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

