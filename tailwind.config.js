/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Define custom fonts
        rambla: ['Rambla', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        pragatiNarrow: ['Pragati Narrow', 'sans-serif'],
      },
      colors: {
        // Define custom colors
        green_1: 'rgba(222, 245, 238, 1)',
        green_2: 'rgba(4, 178, 124, 1)',
        white_1: 'rgba(255, 255, 255, 1)',
        green_3: 'rgba(4, 84, 59, 1)',
        black_1: 'rgba(0, 0, 0, 1)',
      },
    },
  },
  plugins: [],
}

