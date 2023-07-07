/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'mobile': '420px',
      'tablet': '800px',
      'laptop': '1024px',
      'desktop': '1280px',
    }
  },
  plugins: [],
}

