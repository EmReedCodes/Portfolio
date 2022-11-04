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
        'easter-egg': "#001b64",
        'backround-proj': "#657d8988",
      },
      fontFamily: {
        'lexend': ['Lexend', 'sans serif']
      }

    },
  },
  plugins: [],
}

//#1c0f23
//210330
// {
//   "Primary": {
//     "50": "#ede1eb",
//     "100": "#d2b4d0",
//     "200": "#b584b1",
//     "300": "#975793",
//     "400": "#83377f",
//     "500": "#6e1a6b",
//     "600": "#641666",
//     "700": "#55115e",
//     "800": "#470d55",
//     "900": "#2f0743"
//   },
//   "Complementary": {
//     "50": "#e7f0e4",
//     "100": "#c5dbbd",
//     "200": "#a1c394",
//     "300": "#7eae6a",
//     "400": "#659e4d",
//     "500": "#4e8e2e",
//     "600": "#448127",
//     "700": "#39701e",
//     "800": "#2e6016",
//     "900": "#1b4307"
//   },
//   "Analogous - 1": {
//     "50": "#e4e5ee",
//     "100": "#bcbdd5",
//     "200": "#9293b8",
//     "300": "#696a9c",
//     "400": "#4d4c89",
//     "500": "#323077",
//     "600": "#2d296f",
//     "700": "#252164",
//     "800": "#1d1858",
//     "900": "#110743"
//   },
//   "Analogous - 2": {
//     "50": "#efdfeb",
//     "100": "#dab0ce",
//     "200": "#c47ead",
//     "300": "#b24e8e",
//     "400": "#a72b77",
//     "500": "#9f0060",
//     "600": "#90005b",
//     "700": "#7b0052",
//     "800": "#67044a",
//     "900": "#430739"
//   },