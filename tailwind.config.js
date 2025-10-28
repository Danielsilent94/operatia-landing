/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'operatia-green': '#3EF29B',
        'operatia-blue': '#0A2540',
      },
    },
  },
  plugins: [],
};