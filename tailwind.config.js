/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Instrument": ['Instrument Serif', 'sans-serif']
    }
    },
  },
  plugins: [],
}

