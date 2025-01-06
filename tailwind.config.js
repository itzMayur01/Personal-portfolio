/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from 'tailwind-scrollbar';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xl': '1280px',
      },
      maxWidth: {
        '6xl': '72rem'
      },
      fontFamily: {
        'sans': ['inter', 'sans-serif']
      }
    },
  },
  plugins: [tailwindScrollbar]
}

