/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      aspectRatio: {
        '4/5': '4 / 5',
      },
      colors: {
        black: '#000',
        white: '#fff',
        gray: {
          light: '#9B9B9B',
          dark: '#2D2D2D',
        },
        colorWays: {
          orange: '#FF940C',
          red: '#ff1346',
          pink: '#ff37b0',
          purple: '#ad00aa',
        }
      }
    },
  },

  plugins: [],
}

