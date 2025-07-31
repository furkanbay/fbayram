/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Orbitron", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#D3FFCF",
        "primary-dark": "#222222",
      },
    },
  },
  plugins: [],
};
