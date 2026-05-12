/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyan-custom': '#22d3ee',
        'blue-custom': '#3b82f6',
        'purple-custom': '#9333ea',
        'dark-bg': '#050608',
        'dark-border': '#0d0f14',
      }
    },
  },
  plugins: [],
}
