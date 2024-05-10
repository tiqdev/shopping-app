/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2A59FE',
        'secondary': '#F9F9F9',
        'tertiary': '#616b8a',
        'soft': '#f3f3f6',
      },
      maxWidth: {
        'pagemax': '1360px',
      },
      fontFamily: {
        "montserrat": ["Montserrat", "sans-serif"],
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fill, minmax(180px, 1fr))',
      },
      screens: {
        'tablet': '840px',
        'mobile': '420px'
      },
      borderColor: {
        'card': 'hsl(0deg 0% 0% / 8%)',
      }
    },
  },
  plugins: [],
}