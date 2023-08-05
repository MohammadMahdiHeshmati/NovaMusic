/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'vazirLight': ['vazir-light', 'calibri', 'Arial'],
      'vazirRegular': ['vazir-regular', 'calibri', 'Arial'],
      'vazirBold': ['vazir-bold', 'calibri', 'Arial'],
    },
    extend: {},
  },
  plugins: [],
}