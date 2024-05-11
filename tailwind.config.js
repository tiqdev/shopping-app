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
        'primary-dark': '#1E3A8A',
        'secondary': '#F9F9F9',
        'tertiary': '#616b8a',
        'soft': '#f3f3f6',
        'soft-dark': '#e6e6e9',
      },
      maxWidth: {
        'pagemax': '1400px',
      },
      fontFamily: {
        "montserrat": ["Montserrat", "sans-serif"],
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fill, minmax(180px, 1fr))',
      },
      screens: {
        'desktop': '1080px',
        'tablet': '840px',
        'mobile': '420px'
      },
      borderColor: {
        'card': 'hsl(0deg 0% 0% / 8%)',
      },
      boxShadow: {
        'card': '0px 0px 10px 0px #A2AAB440'
      },
    },
  },
  plugins: [],
}