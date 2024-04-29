/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: '"Poppins", sans-serif'
      },
      colors: {
        primary: '#8576FF',
        footer: '#1C1678'
      }
    },
  },
  plugins: [require("daisyui")],
}

