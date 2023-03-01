/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('../public/background.svg')"
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#315D8E",
          secondary: "#366293",
          accent: "#2d44b7",
          neutral: "#1B1B1D",
          "base-100": "#000000",
          info: "#3ABFF8",
          success: "#20CF98",
          warning: "#EFCB71",
          error: "#DD4058",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};