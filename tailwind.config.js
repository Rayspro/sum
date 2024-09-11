/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2A2F43',
        'secondary': 'rgba(255, 255, 255, 0.17)',
      }
    },
  },
  plugins: [],
}