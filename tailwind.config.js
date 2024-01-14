/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cs-primary-color': 'hsl(47, 88%, 63%)',
        'cs-grey': 'hsl(0, 0%, 50%)',
        'cs-black': 'hsl(0, 0%, 7%)',
      },
      fontFamily: {
        'cs-font': 'Figtree',
      },
      boxShadow: {
        'card-normal': 'black 10px 10px',
        'card-hover': 'black 20px 20px',
      }
    },
  },
  plugins: [],
}

