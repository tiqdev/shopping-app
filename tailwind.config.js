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
      },
      maxWidth: {
        'pagemax': '1320px',
      },
      fontFamily: {
        "montserrat": ["Montserrat", "sans-serif"],
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fill, minmax(180px, 1fr))',
      },
      screens: {
        'tablet': '840px',
        'mobile': '480px'
      },
    },
  },
  plugins: [],
}