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
      },
      maxWidth: {
        'pagemax': '1440px',
      },
      fontFamily: {
        "montserrat": ["Montserrat", "sans-serif"],
      }
    },
  },
  plugins: [],
}

