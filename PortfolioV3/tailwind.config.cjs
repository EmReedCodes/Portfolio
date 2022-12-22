/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "linear-gradient(to right, rgb(#41295a), rgb(#2f0743))",
      },
      colors: {
        'secondary-600': "#019592",
        'secondary-500': "#01A299",
        'secondary-800': "#017374",
        'lighter-main' : '#2f426a',
        'easter-egg': "#001b64",
        'backround-proj': "#657d8988",
        'text-color-proj': "#111827"
      },
      fontFamily: {
        'lexend': ['Lexend', 'sans serif']
      }

    },
  },
  plugins: [],
}

