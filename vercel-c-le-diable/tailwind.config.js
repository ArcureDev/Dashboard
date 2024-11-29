/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Using modern `rgb`
        primary: 'rgb(var(--color-primary))',
        secondary: 'rgb(var(--color-secondary))',
      }
    },
  },
  plugins: [],
}